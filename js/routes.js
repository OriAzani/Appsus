import appHomePage from './pages/appHomePage.js';
import emailHomePage from './apps/email/pages/email-home.cmp.js';
import noteHomePage from './apps/note/pages/note-home.cmp.js';
import booksHomePage from './apps/books/pages/books-home.cmp.js';


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
