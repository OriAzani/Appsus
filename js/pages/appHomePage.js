export default {

    template: `

    <section class="home-page">
    <h1>Welcome To Susita!</h1>
    <p>
   Send Emails, Take Notes and make the world a better place!
    </p>

      <div class="link-container">
      <button @click=" pickerClicked(email)"> <router-link to="/email">Email</router-link></button>
      <button @click=" pickerClicked(note)"><router-link to="/note">Note</router-link ></button>
      <button @click=" pickerClicked(home)"><router-link to="/home">home</router-link ></button>
      </div>

    </section>
    `,
    methods: {
        pickerClicked(pickPage) {

            switch (pickPage) {

                case 'email':
                    this.$router.push('/email')
                    break;
                case 'note':
                    this.$router.push('/note')
                    break;
                case 'home':
                    this.$router.push('/home')
                    break;
            }
        }
    }
}