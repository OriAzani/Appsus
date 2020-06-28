import navBar from './cmps/app-nav-bar.cmp.js'
import { myRouter } from './routes.js'

new Vue({
    el: '#apps',
    router: myRouter,
    template: `
        <div class="flex column">
        
            <header class="main-header flex align-center space-between">
                <img class="home-logo" @click="goHome" src="../img/logo.jpg" alt="logo">
                <nav-bar/>
            </header>

            <main>
                <router-view />
            </main>
            
            <footer class="flex column">
              <p>Coffeerights 2020 Dolev Tsfoni & Ori Azani</p> 
            </footer>
        </div>
    `,
    components: {
        navBar
    },
    methods:{
        goHome(){
            this.$router.push('/')
        }
    }
});