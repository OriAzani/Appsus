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
            <section @click.stop=stop(this)>
             <button v-if="!isStarred" class="preview-star"  @click.stop="starEmail"> <i class="far fa-star"></i> </button>
             <button v-if="isStarred" class="preview-star"  @click.stop="starEmail"> <i  class="fas fa-star"></i> </button>

             <button class="preview-erase" onclick="return confirm('Delete This Email?')" @click.prevent="eraseEmail"> <i class="fas fa-trash-alt"></i> </button>

             </section>
            </section>

            </section>
           </router-link>
        </li>
    `,
    data() {
        return {

            isRead: null,
            isStarred: '',
            convertedTime: "",
        };
    },
    methods: {
        stop(event) {
            event.stopPropagation();
        },
        convertTime() {
            var time = this.email.sentAt;
            this.convertedTime = moment(time).format("MMM Do YY");
        },
        eraseEmail() {
            emailService.eraseEmail(this.email)
        },
        starEmail() {
            this.email.isStarred = !this.email.isStarred
        },

    },
    created() {

        this.isRead = this.email.isRead;
        this.isStarred = this.email.isStarred;
        this.convertTime();
    },
    components: {
        emailDescription,
    }
};