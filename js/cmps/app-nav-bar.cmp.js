export default {
    template: `
    <section>
    <button class="btn-menu" @click="isOpen=!isOpen"> ☰ </button>

    <!-- <nav v-bind:class="{open : isOpen}" class="main-nav-links"> -->
    <nav v-bind:class="{open:isOpen}" class="main-nav-links">
        <router-link to="/">Home</router-link> 
        <router-link to="/note">Note</router-link> 
        <router-link to="/email">Email</router-link>  
        <router-link to="/about">About</router-link>  
    </nav>
    </section>
    `,
    data(){
        return{
            isOpen : false,
        }
    },
  
}
