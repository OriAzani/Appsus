import { emailService } from "../services/email-service.js";

export default {
  template: `
    <section class="emailCompose flex column">
          <h2>New Message</h2>
          <input type="text" placeholder="Send to..." v-model="emailToEdit.sendTo" />
          <input type="text" placeholder="cc..." v-model="emailToEdit.cc" />
          <input type="text" placeholder="subject..." v-model="emailToEdit.subject" />
          <input type="text" placeholder="body..." v-model="emailToEdit.body" />
          {{body}}
          <button class="align-self-start" @click='sendEmail'>SEND</button>
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
      },
    };
  },
  methods: {
    sendEmail() {
      emailService.saveEmail(this.emailToEdit);
    },
  },
  components: {
    emailService,
  },
};
