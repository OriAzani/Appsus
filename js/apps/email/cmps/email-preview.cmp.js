export default {
    props: ['email'],
    template: `
        <li v-bind:class="{ unread-email: isRead }" :class="unread-email" class="email-preview flex column space-between"  v-on:click="isRead = true">>
            <router-link :to="'/email/' + email.emailId">
           <h3 class="title">{{email.subject}}</h3>
           </router-link>
        </li>
    `,
    data(){
        return{
        isRead: null,
        }
    },
 created(){
    // console.log('ggfgf');
    // console.log(this.email.emailId);
     this.isRead = email.isRead
     //console.log(this.isRead)
 }
};