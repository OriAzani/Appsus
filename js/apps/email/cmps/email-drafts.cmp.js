import emailNav from "../cmps/email-nav-bar-cmp.js";
import emailList from "../cmps/email-list.cmp.js";

export default {
  template: `
    <section>
        <h1>Drafts</h1>
        <email-nav  class="email-nav-bar" :emails="emails"></email-nav>
        <email-list class="email-list" :emails="emailsToShow"></email-list>        
    </section>
    `,
  components: {
    emailNav,
    emailList,
  },
};
