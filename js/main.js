import navBar from './cmps/app-nav-bar.cmp.js'
import { myRouter } from './routes.js'

new Vue({
    el: '#apps',
    router: myRouter,
    template: `
        <div class="flex column">
        
            <header class="main-header flex align-center space-between">
                <!-- <h1>AppSusita!</h1> -->
                <img src="../img/logo.jpg" alt="logo" width="120" height="120">
                <nav-bar/>
            </header>

            <main>
                <router-view />
                
            </main>
            
            <footer class="flex column">
               <p> Coffeerights 2020 </p>
               <p>Dolev Tsfoni & Ori Azani</p>
            </footer>
        </div>
    `,
    components: {
        navBar
    },
});