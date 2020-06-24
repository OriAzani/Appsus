export default {
    props: ['email'],
    template: `
        <li class="email-preview flex column space-between">
            <router-link :to="'/email/' + email.emailId">
           <h3 class="title">{{email.subject}}</h3>
           </router-link>
        </li>
    `,
 created(){
     console.log(this.email);
     
 }
};