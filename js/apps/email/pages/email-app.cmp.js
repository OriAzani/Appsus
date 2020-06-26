import { emailService } from "../services/email-service.js";
import emailList from "../cmps/email-list.cmp.js";
import emailCompose from "../cmps/email-compose.cmp.js";
import emailFilter from "../cmps/email-filter.cmp.js";
import emailNav from "../cmps/email-nav-bar-cmp.js";

export default {
  template: `
        <main class="email-app flex column">
        
        <section  class="email-header flex align-center">
          <h1 class="logo">Email App</h1>
          <email-filter class="filter-input"  @filter="setFilter"/></email-filter>
        </section>

        <section class="flex">
          <email-second-nav  class="email-second-nav-bar" :emails="emails"></email-nav>
          <email-nav  class="email-nav-bar" :emails="emails"></email-nav>
          <email-list class="email-list" :emails="emailsToShow"></email-list>           
        </section>
            </main>
    `,
  data() {
    return {
      emails: [],
      filterBy: null,
    };
  },
  computed: {
    emailsToShow() {
      const filterBy = this.filterBy;
      if (!filterBy) return this.emails;
      else {
        if (filterBy.boxToSearch === "Read") {
          console.log("says read");
          return this.emails.filter((email) => {
            return email.isRead === true;
          });
        }
        if (filterBy.boxToSearch === "UnRead") {
          console.log("says Unread");
          return this.emails.filter((email) => {
            return email.isRead === false;
          });
        }
      }
    },
  },
  methods: {
    setFilter(filterBy) {
      this.filterBy = filterBy;
      this.emailsToShow;
    },
  },

  created() {
    emailService.getEmails().then((emails) => {
      this.emails = emails;
    });
  },

  components: {
    emailList,
    emailNav,
    emailCompose,
    emailFilter,
  },
};
