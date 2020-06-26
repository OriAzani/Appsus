export default {
  props: ["email"],
  template: `
        <li  class="email-preview flex column space-between" >
            <router-link :to="'/email/emailId/' + email.emailId">

            <!-- <section v-bind:class="{active: !isRead}" class="preview-li flex column">
              <p class="from-p">  <{{email.from}}> </p>
              <section class="bottom-two flex space-between flex-end ">
              <p>{{email.subject}}</p> 
              <p>{{this.convertedTime}}</p>
            </section>
             -->
            <section class="preview-li flex column">
              <p class="from-p"> <{{email.from}}> </p>
              <section class="bottom-two flex space-between flex-end ">
              <p>{{email.subject}}</p> 
              <p>{{this.convertedTime}}</p>
            </section>

            </section>
           </router-link>
        </li>
    `,
  data() {
    return {
      isRead: null,
      convertedTime: "",
    };
  },
  methods: {
    convertTime() {
      var time = this.email.sentAt;
      this.convertedTime = moment(time).format("MMM Do YY");
    },
  },
  created() {
    this.isRead = this.email.isRead;
    console.log(this.email.subject, this.isRead);

    this.convertTime();
  },
};
