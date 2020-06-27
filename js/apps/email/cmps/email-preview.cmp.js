import emailDescription from './email-description.cmp.js'
import { emailService } from "../services/email-service.js";
export default {
  props: ["email"],
  template: `
        <li  class="email-preview flex column space-between" >
            <router-link :to="'/email/emailId/' + email.emailId">

            <section class="preview-li flex column">
              <p class="from-p"> <{{email.from}}> </p>

              <section class="bottom-two flex space-between flex-end ">
        
             <email-description :txt="email.subject"></email-description> 
             <email-description :txt="email.body"></email-description> 
             <p class="email-time"> {{this.convertedTime}}</p>

             <button v-if="!isStarred" class="preview-star"  @click.prevent="starEmail"> <i class="far fa-star"></i></i> </button>
             <button v-if="isStarred" class="preview-star"  @click.prevent="starEmail"> <i class="fas fa-star"></i> </button>

             <button class="preview-erase" onclick="return confirm('Delete This Email?')" @click.prevent="eraseEmail"> <i class="fas fa-trash-alt"></i> </button>

            
            </section>

            </section>
           </router-link>
        </li>
    `,
  data() {
    return {
      email:'',
      // isRead: null,
      isStarred: '',
      convertedTime: "",
    };
  },
  methods: {
    convertTime() {
      var time = this.email.sentAt;
      this.convertedTime = moment(time).format("MMM Do YY");
    },
    eraseEmail(){
      emailService.eraseEmail(this.email)
    },
    starEmail(){
      this.email.isStarred = !this.email.isStarred
    }

  },
  created() {
    this.email = this.email
    this.isRead = this.email.isRead;
    this.isStarred = this.email.isStarred;
    this.convertTime();
  },
  components:{
    emailDescription,
  }
};
