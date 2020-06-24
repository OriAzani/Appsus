import { emailService } from "../services/email-service.js";

export default {
  template: `
        <section class="email-details" v-if="email">
            <button @click="close"> X </button>
            <h2>{{email.subject}}</h2>
            <pre>{{email.body}}</pre>
        </section>
    `,
  data() {
    return {
      tagName: "h2",
      ok: false,
      email: null,
    };
  },
  created() {
    this.loadEmail();
   
  },
  //   destroyed() {
  //     console.log("CMP CarDetails Destroyed");
  //   },
  methods: {
    close() {
      this.$router.back();
    },

    loadEmail() {
      const { emailId } = this.$route.params;
      emailService.getEmailById(emailId).then((email) => {
        this.email = email;
        emailService.changeReadStatus(email);
      });
    },
  },
  watch: {
    "$route.params.emailId"(newEmailId) {

      this.loadEmail();
    },
  },
};
