import { emailService } from "../services/email-service.js";
import emailList from "../cmps/email-list.cmp.js";

import emailNav from "../cmps/email-nav-bar-cmp.js";
// import bookFilter from "../cmps/book-filter.cmp.js";

export default {
  template: `
        <main class="email-app">
        <email-Nav></email-Nav>
          <!-- <book-filter @filter="setFilter"/> -->
            <email-list :emails="emailsToShow"></email-list>           
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
      // var filteredEmails = this.emails.filter((email) => {
      //     const amount = email.listPrice.amount;
      //     if (
      //         email.title.toLowerCase().includes(filterBy.byName.toLowerCase()) &&
      //         amount >= filterBy.minPrice &&
      //         amount <= filterBy.maxPrice
      //     ) {
      //         return email;
      //     }
      // });
      // return filteredEmails;
    },
  },
  methods: {
    // setFilter(filterBy) {
    //     this.filterBy = filterBy;
    // },
  },
  created() {
    emailService.getEmails().then((emails) => {
      this.emails = emails;
    });
  },

  components: {
    emailList,
    emailNav
    //     bookFilter,
  },
};
