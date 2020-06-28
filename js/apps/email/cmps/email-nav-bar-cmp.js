export default {
    props: ['emails'],
    template: `
    <nav class="email-nav-bar flex column">
        
    <router-link to="email/compose"> <span><i class="fas fa-plus"></i></span>  Compose</router-link> 

        <button class="draftBtn" @click="setStatus('inbox')" > <span><i class="fas fa-inbox"></i></span> Inbox {{checkUnread}} </button>
        <button class="draftBtn" @click="setStatus('starred')"> <span><i class="far fa-star"></i></span> Starred </button>  
        <button class="draftBtn" @click="setStatus('sent')">  <span> <i class="far fa-share-square"></i> </span> Sent Mail </button>  
        <button class="draftBtn" @click="setStatus('drafts')"> <span><i class="fab fa-firstdraft"></i> </span>Drafts </button>  
   
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