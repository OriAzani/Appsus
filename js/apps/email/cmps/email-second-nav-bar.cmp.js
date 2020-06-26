import { emailService } from "../services/email-service.js";
export default {
    props:['emails'],
    template: `
    <nav class=" flex column">
        <router-link to="email/nav/compose">  <i class="fas fa-plus"></i> Compose</router-link> 
        <router-link to="email/nav/inbox"><i class="fas fa-inbox"></i>   Inbox  {{checkUnread}}</router-link> 
        <router-link to="email/nav/starred"><i class="far fa-star"></i>  Starred</router-link> 
        <router-link to="email/nav/sent"><i class="far fa-share-square"></i> Sent Mail</router-link> 
        <router-link to="email/nav/drafts"><i class="fab fa-firstdraft"></i> Drafts</router-link> 
    </nav>
    `,

    computed: {
        checkUnread() {

            return this.emails.reduce((unreadCounter, email) => {
                if (!email.isRead) unreadCounter++;

                return unreadCounter;
            }, 0);

        },
    },
   // created() {
        // emailService.getEmails().then((emails) => {
        //     this.emails = emails;        
        //});
    //}
}