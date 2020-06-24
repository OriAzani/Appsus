import appHomePage from './appHomePage.js';
import emailHomePage from './apps/email/pages/email-home.cmp.js';
import noteHomePage from './apps/note/pages/note-home.cmp.js';
import booksHomePage from './apps/books/pages/books-home.cmp.js';

// const emailHomePage = {
//     template: `
//         <section class="about-us app-main">
           
//             <nav>
//                 <router-link to="/email">emailHomePage</router-link> | 
            
//         </section>
//     `
// }

// const noteHomePage = {
//     template: `
//         <section class="about-us app-main">
           
//             <nav>
//                 <router-link to="/note"> emailHomePage</router-link> | 
            
//         </section>
//     `
// }
// import homePage from './pages/home-page.cmp.js';


const myRoutes = [
    {
        path: '/',
        component: appHomePage
    },
    {
        path: '/email',
        component: emailHomePage
    },
    {
        path: '/note',
        component: noteHomePage
    },
    {
        path: '/books',
        component: booksHomePage
    },
];

export const myRouter = new VueRouter({ routes: myRoutes })
