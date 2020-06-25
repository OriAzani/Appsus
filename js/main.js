import navBar from './cmps/app-nav-bar.cmp.js'
import { myRouter } from './routes.js'

new Vue({
    el: '#apps',
    router: myRouter,
    template: `
        <div class="flex column">
            <header class="flex align-center space-between">
                <h1>Welcome to Appsus!</h1>
                <nav-bar/>
            </header>

            <main>
                <router-view />
            </main>

            <footer>
                coffeerights 2020
            </footer>
        </div>
    `,
    components: {
        navBar
    },
});