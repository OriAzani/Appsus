import { emailService } from "../services/email-service.js";
export default {
    template: `

    <nav class="email-nav-bar flex column">
        
    <router-link to="email/compose"> <span><i class="fas fa-plus"></i></span>  Compose</router-link> 

        <button class="draftBtn" @click="setStatus('inbox')" > <span><i class="fas fa-inbox"></i></span> Inbox {{inbox}} </button>
        <button class="draftBtn" @click="setStatus('starred')"> <span><i class="far fa-star"></i></span> Starred </button>  
        <button class="draftBtn" @click="setStatus('sent')">  <span> <i class="far fa-share-square"></i> </span> Sent Mail </button>  
        <button class="draftBtn" @click="setStatus('drafts')"> <span><i class="fab fa-firstdraft"></i> </span>Drafts </button>  
   
    </nav>
    `,
    data() {
        return {
            emails: [],
        };

    },
    computed: {
        inbox() {

            var inbox = this.emails;
            console.log(inbox);
            inbox = inbox.filter(email => email.isInbox)
            console.log(inbox);

            // this.inbox.filter(email => email.isInbox)
            var countUnred = inbox.reduce((acc, email) => {
                if ((!email.isRead) && (email.isInbox)) acc++;
                return acc;
            }, 0);
            return countUnred;
        }
    },
    methods: {
        setStatus(status) {
            this.$emit('setStatus', status)
        }
    },
    created() {
        emailService.getEmails().then((emails) => {
            this.emails = emails;
        });
    },



}