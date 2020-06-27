import { emailService } from "../services/email-service.js";
import emailList from "../cmps/email-list.cmp.js";
import emailCompose from "../cmps/email-compose.cmp.js";
import emailFilter from "../cmps/email-filter.cmp.js";
import emailNav from "../cmps/email-nav-bar-cmp.js";


export default {
    template: `
        <main class="email-app flex column">


        <section  class="email-header flex align-center">
          <h1 class="logo"> Email App <i class="far fa-envelope"></i></h1>
          <email-filter class="filter-input"  @filter="setFilter"/></email-filter>
        </section>

        <section class="flex">
          <!-- <email-second-nav  class="email-second-nav-bar" :emails="emails"></email-nav> -->
          <email-nav class="email-nav-bar" :emails="emails"></email-nav>
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
            console.log(filterBy)
            if (!filterBy) return this.emails;

            else {

                if (filterBy.boxToSearch === "Draft") {
                    console.log('in Draft')
                    var filteredEmails = this.emails.filter((email) => {
                        return (email.isRead === true) && (email.subject.toLowerCase().includes(filterBy.searchStr.toLowerCase()) || email.body.toLowerCase().includes(filterBy.searchStr.toLowerCase()));
                    });
                    return filteredEmails
                }
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