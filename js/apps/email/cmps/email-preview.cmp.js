export default {
    props: ["email"],
    template: `
        <li v-bind:class="{ unread: isRead }" class="email-preview flex column space-between" >
            <router-link :to="'/email/emailId/' + email.emailId">
            <p v-bind:class="{ active: !isRead}" class="title">{{email.subject}} {{email.from}}{{this.convertedTime}}</p>
           </router-link>
        </li>
    `,
    data() {
        return {
            isRead: null,
            convertedTime: '',

        };
    },
    methods: {
        converTime() {
            var time = this.email.sentAt;
            this.convertedTime = moment(time).format('ll')
        },
    },
    created() {
        this.isRead = this.email.isRead;
        this.converTime()
    },
};