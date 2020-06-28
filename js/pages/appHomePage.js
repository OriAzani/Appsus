export default {

    template: `

    <section class="home-page">
    <h1>Welcome To AppSusit!</h1>
    <p>
    Send Emails & Take Notes  !
    </p>

      <div class="flex align-center space-between link-container">
      <!-- <button @click="noteClicked"><router-link to="/note"> Note </router-link ></button>
      <button @click="emailClicked"> <router-link to="/email">Email</router-link></button> -->
      <button class="home-note-btn" @click="routeClicked('note')"> Note <br/> <i class="fas fa-clipboard"></i></button>
      <button class="home-email-btn" @click="routeClicked('email')"> Mail <br/><i class="fas fa-envelope"></i></button>
      <button class="home-email-btn" @click="routeClicked('about')"> About <br/><i class="fas fa-horse-head"></i></i></button>
      </div>

    </section>
    `,
methods: {
  routeClicked(pageRoute) {
      switch (pageRoute) {
          case 'email':
              this.$router.push('/email')
              break;
          case 'note':
              this.$router.push('/note')
              break;
          case 'home':
              this.$router.push('/about')
              break;
      }
  }
}
}
  
  
  
  