import { emailService } from "../services/email-service.js";

export default {
    template: `
        <section class="email-details" v-if="email">
          <section class="details-btns flex justify-end">
            <button @click="close"> <i class="fas fa-times"></i></button>
            <button  @click="eraseEmail" > <i class="fas fa-trash-alt"></i> </button>
          </section>
        
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
            convertedTime: ''
        };
    },
    created() {
        this.loadEmail();

    },
    destroyed() {
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
            console.log(emailId);

            emailService.getEmailById(emailId).then((email) => {
                this.email = email;
                this.convertTime();
                emailService.changeReadStatus(email);
            });
        },
        updateStorage() {
            emailService.saveToLocalStorage();
        },
        eraseEmail() {
            emailService.eraseEmail(this.email)
            this.close()
        }
    },
    watch: {
        "$route.params.emailId" (newEmailId) {
            this.loadEmail();
            this.updateStorage();

        },
    },
};