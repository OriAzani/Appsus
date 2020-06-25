import appHomePage from './pages/appHomePage.js';
import emailHomePage from './apps/email/pages/email-app.cmp.js';
import emailDetails from './apps/email/cmps/email-details.cmp.js';
import emailCompose from './apps/email/cmps/email-compose.cmp.js';
import emailInbox from './apps/email/cmps/email-inbox.cmp.js';
import emailStarred from './apps/email/cmps/email-starred.cmp.js';
import emailSent from './apps/email/cmps/email-sent.cmp.js';
import emailDrafts from './apps/email/cmps/email-drafts.cmp.js';
import noteHomePage from './apps/note/pages/note-home.cmp.js';
import booksHomePage from './apps/books/pages/books-home.cmp.js';



const myRoutes = [{
        path: '/',
        component: appHomePage
    },
    {
        path: '/email',
        component: emailHomePage
    },
    {
        path: '/email/emailId/:emailId',
        component: emailDetails
    },
    {
        path: '/email/nav/compose',
        component: emailCompose
    },
    {
        path: '/email/nav/inbox',
        component: emailInbox
    },
    {
        path: '/email/nav/starred',
        component: emailStarred
    },
    {
        path: '/email/nav/sent',
        component: emailSent
    },
    {
        path: '/email/nav/drafts',
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