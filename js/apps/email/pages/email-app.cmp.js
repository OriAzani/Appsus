import { emailService } from "../services/email-service.js";
import emailList from "../cmps/email-list.cmp.js";
import emailCompose from "../cmps/email-compose.cmp.js";
import emailFilter from "../cmps/email-filter.cmp.js";
import emailNav from "../cmps/email-nav-bar-cmp.js";


export default {
    template: `
<<<<<<< HEAD
    <main class="email-app flex column">
=======
        <main class="email-app flex column">
>>>>>>> 494836ee35020efb1b0b9332db1b2723d01a90ee


    <section  class="email-header flex align-center">
      <h1 class="logo"> Email App <i class="far fa-envelope"></i></h1>
      <email-filter class="filter-input"  @filter="setFilter"/></email-filter>
    </section>

<<<<<<< HEAD
    <section class="email-app-body flex">
  
      <email-nav @setStatus="setStatus" class="email-nav-bar" :emails="emails"></email-nav>
      <email-list class="email-list" :emails="emailsToShow"></email-list>                   
    </section>
        </main>
`,
=======
        <section class="email-app-body flex">
      
          <email-nav @setStatus="setStatus" class="email-nav-bar" :emails="emails"></email-nav>
          <email-list class="email-list" :emails="emailsToShow"></email-list>                   
        </section>
            </main>
    `,
>>>>>>> 494836ee35020efb1b0b9332db1b2723d01a90ee
    data() {
        return {
            emails: [],
            filterBy: null,
        };

    },

    computed: {
        emailsToShow() {
            const filterBy = this.filterBy;
            console.log(filterBy)
            if (!filterBy) return this.emails;

            else {

                if (filterBy.boxToSearch === "Read") {
                    console.log('in Read')
                    var filteredEmails = this.emails.filter((email) => {
                        return (email.isRead === true) && (email.subject.toLowerCase().includes(filterBy.searchStr.toLowerCase()) || email.body.toLowerCase().includes(filterBy.searchStr.toLowerCase()));
                    });
                    return filteredEmails
                } else if (filterBy.boxToSearch === "UnRead") {
                    console.log('in UnRead')
                    var filteredEmails = this.emails.filter((email) => {
                        return (email.isRead === false) && (email.subject.toLowerCase().includes(filterBy.searchStr.toLowerCase()) || email.body.toLowerCase().includes(filterBy.searchStr.toLowerCase()));
                    });
                    return filteredEmails
                } else {
                    var filteredEmails = this.emails.filter((email) => {
                        return (email.subject.toLowerCase().includes(filterBy.searchStr.toLowerCase()) || email.body.toLowerCase().includes(filterBy.searchStr.toLowerCase()));
                    });
                    return filteredEmails
                }
            }
        },
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = null;
            this.filterBy = filterBy;
            this.emailsToShow;
        },
        setStatus(status) {
            this.emails = emailService.getEmailsByStatus(status)
            console.log(this.emails);

        }

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