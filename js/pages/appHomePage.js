export default {

    template: `

    <section class="home-page">
    <h1>Welcome To Susita!</h1>
    <p>
   Send Emails, Take Notes and make the world a better place!
    </p>

      <div class="link-container">
      <button @click="emailClicked"> <router-link to="/email">Email</router-link></button>
      <button @click="noteClicked"><router-link to="/note">Note</router-link ></button>
      </div>

    </section>
    `,
    methods:{
      emailClicked() {
       this.$router.push('/email')
      },
      noteClicked() {
       this.$router.push('/note')
      }
    }
}

  
  
  
  