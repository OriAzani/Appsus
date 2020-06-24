import appHomePage from './pages/appHomePage.js';
import emailHomePage from './apps/email/pages/email-app.cmp.js';
import emailDetails from  './apps/email/cmps/email-details.cmp.js';
import emailInbox from  './apps/email/cmps/email-inbox.cmp.js';
import emailStarred from  './apps/email/cmps/email-starred.cmp.js';
import emailSent from  './apps/email/cmps/email-sent.cmp.js';
import emailDrafts from  './apps/email/cmps/email-drafts.cmp.js';
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
        path: '/email/:emailId',
        component: emailDetails
    },
    {
        path: '/email/inbox',
        component: emailInbox
    },
    {
        path: '/email/starred',
        component: emailStarred
    },
    {
        path: '/email/sent',
        component: emailSent
    },
    {
        path: '/email/drafts',
        component: emailDrafts
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
