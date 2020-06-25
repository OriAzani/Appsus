import { emailService } from "../services/email-service.js";
export default {
    props:['emails'],
    template: `
    <nav class=" flex column">
        <router-link to="email/nav/compose">  <i class="fas fa-plus"></i> Compose</router-link> 
        <router-link to="email/nav/inbox">inbox  {{checkUnread}}</router-link> 
        <router-link to="email/nav/starred">starred</router-link> 
        <router-link to="email/nav/sent">sent Mail</router-link> 
        <router-link to="email/nav/drafts">drafts</router-link> 
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