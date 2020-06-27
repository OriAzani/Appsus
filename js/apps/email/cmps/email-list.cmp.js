import emailPreview from './email-preview.cmp.js';


export default {
    props: ["emails"],
    template: `
        <ul class="email-list clean-list flex column ">
            <email-preview v-for="email in emails" @click.stop="selectedEmail(email)" :email="email" :key="email.id"/>
        </ul>
    `,

    methods: {
        selectedEmail(email) {
            this.$emit("emailSelected", email);
        },
    },
    components: {
        emailPreview,
    },

};