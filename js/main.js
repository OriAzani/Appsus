import navBar from './cmps/app-nav-bar.cmp.js'
import { myRouter } from './routes.js'

new Vue({
    el: '#apps',
    router: myRouter,
    template: `
        <div class="flex column">
        
            <header class="main-header flex align-center space-between">
                <h1>AppSusita!</h1>
                <img src="https://i.imgur.com/xr250WX.jpg" alt="logo" width="150" height="150">
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