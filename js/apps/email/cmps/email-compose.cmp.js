import { emailService } from "../services/email-service.js";
import emailNav from "./email-nav-bar-cmp.js";

export default {
  template: `
    <section class="email-compose flex column">
          <h2>New Message</h2>

          <input type="text" placeholder="Send to..." v-model="emailToEdit.sendTo" />
          <input type="text" placeholder="cc..." v-model="emailToEdit.cc" />
          <input type="text" placeholder="subject..." v-model="emailToEdit.subject" />
          <input type="text" placeholder="body..." v-model="emailToEdit.body" />
          {{emailToEdit.body}}
          <section class="flex space-between">
            <button class="align-self-start" @click='sendEmail'>SEND</button>
            <button class="align-self-start" @click="close"> X </button>
          </section>

          </section>
    `,

  data() {
    return {
      emailToEdit: {
        subject: "",
        body: "",
        isRead: true,
        sentAt: "",
        emailId: "",
        isSent: true,
        isStarred: false,
        isDraft: false,
        sendTo:''
      },
    };
  },
  methods: {
    sendEmail() {
      emailService.saveEmail(this.emailToEdit);
    },
    close() {
      this.$router.back();
    },
  },
  components: {
    emailService,
    emailNav
  },
};
