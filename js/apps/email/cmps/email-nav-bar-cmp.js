export default {
    props: ['emails'],
    template: `
    <nav class=" flex column">

        <router-link to="email/compose">  <i class="fas fa-plus"></i> Compose</router-link> 
        <button class="draftBtn" @click="setStatus('inbox')" > <i class="fas fa-inbox"></i> Inbox: {{checkUnread}} </button>
        <button class="draftBtn" @click="setStatus('starred')" > <i class="far fa-star"></i> Starred </button>  
        <button class="draftBtn" @click="setStatus('sent')" > <i class="far fa-share-square"></i> Sent Mail </button>  
        <button class="draftBtn" @click="setStatus('drafts')" > <i class="fab fa-firstdraft"></i> Drafts </button>  
    </nav>
    `,
    methods: {
        setStatus(status) {
            this.$emit('setStatus', status)
        }
    },
    computed: {
        checkUnread() {
            return this.emails.reduce((unreadCounter, email) => {
                if (!email.isRead) unreadCounter++;
                return unreadCounter;
            }, 0);

        },
    },


}