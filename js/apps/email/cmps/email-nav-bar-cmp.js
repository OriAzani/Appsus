import { emailService } from "../services/email-service.js";
export default {
    template: `
    <nav>
        <router-link to="email/nav/inbox">inbox{{checkUnred}}</router-link> |
        <router-link to="email/nav/starred">starred</router-link> |
        <router-link to="email/nav/sent">sent Mail</router-link> | 
        <router-link to="email/nav/drafts">drafts</router-link> | 
    </nav>
    `,

    data() {
        return {
            emails: [],
        }
    },
    computed: {
        checkUnred() {

            return this.emails.reduce((unreadCounter, email) => {
                if (!email.isRead) unreadCounter++;
                console.log(unreadCounter);

                return unreadCounter;
            }, 0);

        },
    },
    created() {
        emailService.getEmails().then((emails) => {
            this.emails = emails;
            console.log(this.emails);

        });
    }
}