export default {
    props: ['emails'],
    template: `
    <nav  v-if="emails" class=" flex column">

        <router-link to="email/compose">  <i class="fas fa-plus"></i> Compose</router-link> 
        <button  @click="setStatus('inbox')" > <i class="fas fa-inbox"></i> Inbox: {{checkUnread}} </button>
        <button  @click="setStatus('starred')" > <i class="far fa-star"></i> Starred </button>  
        <button  @click="setStatus('sent')" > <i class="far fa-share-square"></i> Sent Mail </button>  
        <button  @click="setStatus('drafts')" > <i class="fab fa-firstdraft"></i> Drafts </button>  
    </nav>
    `,
    methods: {
        setStatus(status) {
            this.$emit('setStatus', status)
        }
    },
    data() {
        return {
            emailsStam: this.emails

        };

    },
    // computed: {
    //     checkUnread() {
    //         return this.emails.reduce((unreadCounter, email) => {
    //             if ((!email.isRead) && (email.isInbox)) unreadCounter++;
    //             return unreadCounter;
    //         }, 0);

    //     },
    // },
    created() {
        console.log(this.emailsStam);
        // this.inbox = this.emails.filter(email => email.isInbox)
        // console.log(this.inbox);

    },


}
//    // data() {
//     //     return {
//     //         inbox: [],

//     //     };

//     // },
//     computed: {
//         checkUnread() {
//             return this.inbox.reduce((unreadCounter, email) => {
//                 if (!email.isRead) unreadCounter++;
//                 return unreadCounter;
//             }, 0);

//         },


//     },
//     created() {
//         console.log(this.emails);
//         // this.inbox = this.emails.filter(email => email.isInbox)
//         // console.log(this.inbox);

//     },


// }