export default {
    props: ['email'],
    template: `
        <li v-bind:class="{ unread: isRead }" class="email-preview flex column space-between" >
            <router-link :to="'/email/emailId/' + email.emailId">
            <h3 v-bind:class="{ active: !isRead}" class="title">{{email.subject}}</h3>
           </router-link>
        </li>
    `,
    data() {
        return {
            isRead: null,
        }
    },
    methods: {

    },
    created() {
        console.log(this.email);
        
        this.isRead = this.email.isRead
    }
};