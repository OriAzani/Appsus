import { emailService } from "../services/email-service.js";
import emailNav from "./email-nav-bar-cmp.js";

export default {
    template: `
    <section class="email-compose flex column">
          <h2>Create New Mail</h2>

          <section class="compose-btns flex justify-end space-between">
            <button class="align-self-start" @click='sendEmail'><i class="far fa-paper-plane"></i></button>
            <button class="align-self-start" @click="close"> <i class="fas fa-trash"></i> </button>
          </section>

      <section class="compose-inputs flex column">
          <input type="text" placeholder="Send to" v-model="emailToEdit.sendTo" />
          <input type="text" placeholder="cc" v-model="emailToEdit.cc" />
          <input type="text" placeholder="subject" v-model="emailToEdit.subject" />
          <!-- <input type="text" placeholder="body" v-model="emailToEdit.body" /> -->
          <p class="create-body"><strong> </strong> <textarea class="textarea resize-ta"></textarea></p>
      </section>

          {{emailToEdit.body}}
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
                sendTo: "",
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
        emailNav,
    },
};