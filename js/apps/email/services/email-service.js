import { Utils } from "./utils-service.js";

var gEmails = (() => {
  var emails = Utils.loadFromStorage("emails");
  if (!emails) {
    emails = _createDefaultEmails();
    Utils.storeToStorage("emails", emails);
  }
  return emails;
})();

export const emailService = {
  getEmails,
  getEmailById,
  changeReadStatus,
  saveToLocalStorage,
  saveEmail,
  eraseEmail,
  //saveEmails,
  // getNextEmailsId
};

function saveToLocalStorage() {
  Utils.storeToStorage("emails", gEmails);
}

function _createDefaultEmails() {
  return [
    {
      from: "cucumber@gmail.com",
      subject: "Wassap?",
      body: "Pick up! im starred",
      isRead: false,
      sentAt: 1522176311400,
      emailId: Utils.getRandomId(),
      isSent: false,
      isStarred: true,
      isDraft: false,
    },
    {
      from: "Shimi@gmail.com",
      subject: "MA Nishma?",
      body: "Shtok! im draft",
      isRead: false,
      sentAt: 1192151211400,
      emailId: Utils.getRandomId(),
      isSent: false,
      isStarred: false,
      isDraft: true,
    },
    {
      from: "rick@gmail.com",
      subject: "Salam",
      body: `ata beseder ata!`,
      isRead: true,
      sentAt: 1492176311400,
      emailId: Utils.getRandomId(),
      isSent: false,
      isStarred: false,
      isDraft: false,
    },
    {
      from: "kapara@gmail.wow",
      subject:
        "New music from artists you love, with Marvin Gaye on your Release Radar now",
      body: `Your Release Radar is here: Fresh tracks by your favorite artists, including Marvin Gaye, 
                on a personalized playlist that we update just for you every Friday. Listen to it now on Spotify.`,
      isRead: false,
      sentAt: 1592126311400,
      emailId: Utils.getRandomId(),
      isSent: false,
      isStarred: false,
      isDraft: false,
    },
    {
      from: "csshitler@gmail.com",
      subject: "Did you love it? Let us know!",
      body: `Now that you've got that sweet Society6 Highland Cow in a Vintage Bathtub (bw) art print in hand, 
         we'd like to know how we did. Your feedback on the product quality is important to us and our community. 
         You can upload a photo with your review, or post on Instagram using #ShareMySociety6.`,
      isRead: false,
      sentAt: 1592176311400,
      emailId: Utils.getRandomId(),
      isSent: false,
      isStarred: false,
      isDraft: false,
    },
    {
      from: "avocado@avocode.com",
      subject: "Holy guacamole@%#$%",
      body: `
      Hello Ori,
      Today is the last day of your free trial. Time flies, right?
      If you don't purchase a subscription, you and your team will lose access to Avocode.
      Get Avocode subscription.
      If you still have any questions about our app, plans, features, or billing, reply to this email, and I will be happy to help.
      Cheers,
      Lubo Kracun
      Customer Success Manager, Avocode`,
      isRead: true,
      sentAt: Date.now(),
      emailId: Utils.getRandomId(),
      isSent: false,
      isStarred: true,
      isDraft: false,
    },
    {
      from: "bandcamp@music.com",
      subject: "Answer Me!",
      body: `Greetings, Ori Azani!
      The new artist dashboard brings together data, tips, and tools to help you promote your music and achieve success on Bandcamp. Check out your artist dashboard here (and grab the Bandcamp Artist App to get the same info on your phone).     
      We’ll be announcing more artist tools soon. In the meantime, stay safe and let the world know they can directly support you on Bandcamp!
            
      `,
      isRead: true,
      sentAt: Date.now(),
      emailId: Utils.getRandomId(),
      isSent: false,
      isStarred: true,
      isDraft: false,
    },
    {
      from: "dropBox@cloud.com",
      subject: "Check Your Box!",
      body: `	Hi ori,

      A new computer just signed in to your Dropbox account. To help keep your account secure, let us know if this is you.
      
      `,
      isRead: false,
      sentAt: Date.now(),
      emailId: Utils.getRandomId(),
      isSent: false,
      isStarred: true,
      isDraft: false,
    },
    {
      from: "wow@comedy.com",
      subject: "Joke of The Day!",
      body: `	
Hi ori,
It seems like everywhere you look, companies are adding Go to their codebases (including us at Frontend Masters slightly smiling face). It makes sense: Go is an efficient language that specializes in concurrency, with the goal of keeping syntax clean and simple. It also has a flexed bicepsbooks powerful standard library.
Brenna Martenson, your instructor for the new Go for JavaScript Developers course, works as a frontend engineer at Highwing, a company based in Denver, Colorado. Through her experience shipping Go code for Highwing’s backend, you’ll learn the ins and outs of the language from a JavaScript developer’s perspective.
The course will give you an intro to sport utility vehiclehamster the Go language, including its history, installation, and basic syntax. Then you’ll learn how to use a few of the more complex features of the language, like structs, pointers, methods, and interfaces. After that, you’ll get to build a few small apps using core parts of the language, including a web server with endpoints to collect form data that makes use of Go page templates, 
and an app to fetch data from a Star Wars API and parse the JSON response.
      `,
      isRead: false,
      sentAt: Date.now(),
      emailId: Utils.getRandomId(),
      isSent: false,
      isStarred: false,
      isDraft: false,
    },
    {
      from: "code@pen.com",
      subject: "Coding With Pens?!",
      body: `	Shalom,

      Thanks for signing up for CodePen!

      We're happy you're here. Let's get your email address verified:
      
      Click to Verify Email
      
      Verifying your email address enables these features:
      
      Full Page View
      Collections
      Commenting on Pens, Projects, and Posts
      Your Pens are searchable on CodePen
      Getting Started on CodePen
      
      Ready to get coding? Here are a few links to help you!
      
      Quick overview of what you can do with CodePen
      Take a guided tour through the Pen editor
      
      `,
      isRead: true,
      sentAt: Date.now(),
      emailId: Utils.getRandomId(),
      isSent: false,
      isStarred: false,
      isDraft: false,
    },
    {
      from: "ImperialCocktailBar@Imperial.com",
      subject: "Ramos Gin Fizz Recipe",
      body: `
      2d Orange Bitters
      2d Orange flower water
      15 Lemon
      15 Lime
      15 Cream
      20 Egg white
      25 Simple syrup
      45 Bombay gin
      Soda`,
      isRead: false,
      sentAt: Date.now(),
      emailId: Utils.getRandomId(),
      isSent: false,
      isStarred: true,
      isDraft: false,
    },
    {
      from: "udacity@udc.com",
      subject: "Hi from Udacity!?",
      body: `
      Check out our free course: Product Management Interview Preparation!
      This course is ideal for anyone looking to upgrade their PM interviewing skills, or break into the product management field, and learn best practices for product management interviews. Complete this course and be equipped to land your dream role in product management!   
      What will you learn?
      How to prepare for a product management interview and what skills, abilities, and experiences impress hiring managers, and help you stand out
      Watch actual Product Managers run mock strategy and technical interviews
      See what a day in the life looks like for Product Managers in different specializations
      Get additional practice questions to prepare you to ace your next PM interview
      ACE YOUR INTERVIEW`,
      isRead: true,
      sentAt: Date.now(),
      emailId: Utils.getRandomId(),
      isSent: false,
      isStarred: false,
      isDraft: false,
    },
    {
      from: "Guitarplayer@gibson",
      subject: "New Gibson L5",
      body: ` The Gibson L-5 guitar was first produced in 1922 by the Gibson Guitar Corporation, 
     then of Kalamazoo, Michigan, under the direction of acoustical engineer and designer Lloyd Loar, 
     and has been in production ever since. It was considered the premier guitar of the company during the big band era. 
     It was originally offered as an acoustic instrument, with electric models not made available until the 1940s.`,
      isRead: true,
      sentAt: Date.now(),
      emailId: Utils.getRandomId(),
      isSent: false,
      isStarred: false,
      isDraft: false,
    },
  ];
}

function getEmails() {
  return Promise.resolve(gEmails);
  // return gEmails
}

function getEmailById(emailId) {
  const email = gEmails.find((email) => email.emailId === emailId);
  return Promise.resolve(email);
}

function changeReadStatus(email) {
  console.log("change read status", email);
  email.isRead = true;
  email.sentAt = Date.now();
  const idx = gEmails.findIndex(
    (currEmail) => currEmail.emailId === email.emailId
  );
  gEmails.splice(idx, 1, email);
}

function saveEmail(email) {
  email.createdAt = Date.now();
  email.emailId = Utils.getRandomId();

  getEmails().then((emails) => {
    emails.push(email);
    Utils.storeToStorage("emails", emails);
    console.log(emails);
  });
}

function eraseEmail(email) {
  console.log("in", email);
  const idx = gEmails.findIndex(
    (currEmail) => currEmail.emailId === email.emailId
  );
  console.log(idx)
  gEmails.splice(idx, 1);
  saveToLocalStorage()
}
// function saveEmail(email) {
//   if (car.id) {
//     const idx = gCars.findIndex((currCar) => currCar.id === car.id);
//     gCars.splice(idx, 1, car);
//   } else {
//     car.id = Utils.getRandomId();
//     car.createdAt = Date.now();
//     gCars.unshift(car);
//   }
//   return Promise.resolve(car);
// }
