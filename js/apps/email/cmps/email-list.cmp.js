import emailPreview from './email-preview.cmp.js';
// import {eventBus} from '../services/event-bus-service.js'

export default {
    props: ["emails"],
    template: `
        <ul class="email-list clean-list flex column ">
            <email-preview v-for="email in emails" @click.native="selectedEmail(email)" :email="email" :key="email.id"/>
        </ul>
    `,

    methods: {
        selectedEmail(email) {
            this.$emit("emailSelected", email);
        },
    },
    components: {
    emailPreview,
    // eventBus
    },
    created(){
       console.log(this.emails);
        // eventBus.$on('navigation',navigation =>{
        //     this.navigation = navigation;
        //     console.log('dfdfdfdfdfd',this.navigation);
        // })
    }
};