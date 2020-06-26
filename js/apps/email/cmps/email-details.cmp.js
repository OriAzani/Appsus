import { emailService } from "../services/email-service.js";

export default {
  template: `
        <section class="email-details" v-if="email">
            <button @click="close"> X </button>
            <button @click="eraseEmail"> <i class="fas fa-trash-alt"></i> </button>
        

            <h2 class="details-subject">{{email.subject}}</h2>

            <pre class="details-createdAt">{{this.convertedTime}}</pre>
            <pre class="details-from">{{email.from}}</pre>
            <pre class="details-body">{{email.body}}</pre>
        </section>
    `,
  data() {
    return {
      tagName: "h2",
      ok: false,
      email: null,
      convertedTime:''
    };
  },
  created() {
    this.loadEmail();
    
  },
  destroyed() {
    console.log("CMP CarDetails Destroyed");
    this.updateStorage();
  },
  methods: {
    close() {
      this.$router.back();
    },

    convertTime() {
      var time = this.email.sentAt;
      this.convertedTime = moment(time).format("MMM Do YY");
    },

    loadEmail() {
      const { emailId } = this.$route.params;
      emailService.getEmailById(emailId).then((email) => {
        this.email = email;
        this.convertTime();
        emailService.changeReadStatus(email);
      });
    },
    updateStorage() {
      emailService.saveToLocalStorage();
    },
    eraseEmail(){``
      emailService.eraseEmail(this.email)
      this.close()
    }
  },
  watch: {
    "$route.params.emailId"(newEmailId) {
      this.loadEmail();
      this.updateStorage();
      
    },
  },
};
