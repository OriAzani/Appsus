import emailDescription from './email-description.cmp.js'
import { emailService } from "../services/email-service.js";
export default {
    props: ["email"],
    template: `
        <li  class="email-preview flex column space-between" >
            <!-- <router-link :to="'/email/emailId/' + email.emailId"> -->
            <div  @click="enterEmail">
            <section class="preview-li flex column">
    

           <p class="from-p"> <{{email.from}}> </p>

           
           <section class="bottom-line flex space-between flex-end ">
            <email-description  :txt="email.subject"></email-description> 
             <email-description :txt="email.body"></email-description> 
             <p class="email-time"> {{this.convertedTime}}</p>

             <button v-if="!email.isStarred" class="preview-star"  @click.stop="starEmail"> <i class="far fa-star"></i> </button>
             <button v-if="email.isStarred" class="preview-star"  @click.stop="starEmail"> <i  class="fas fa-star"></i> </button>

             <button class="preview-erase" @click.stop="eraseEmail"> <i class="fas fa-trash-alt"></i> </button>

  
            </section>

            </section>
         </div>
           <!-- </router-link> -->
        </li>
    `,
    data() {
        return {
            isRead: null,
            convertedTime: "",
        };
    },
    methods: {

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
        enterEmail() {
            this.$router.push(`/email/emailId/${this.email.emailId}`)

        }
    },
    created() {

        // this.isRead = this.email.isRead;
        this.isStarred = this.email.isStarred;
        this.convertTime();
    },
    components: {
        emailDescription,
    }
};