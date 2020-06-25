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
  //saveEmails,
  // getNextEmailsId
};

function saveToLocalStorage() {
  Utils.storeToStorage("emails", gEmails);
}

function _createDefaultEmails() {
  return [
    {
      from:'cucumber@gmail.com',
      subject: "Wassap?",
      body: "Pick up! im starred",
      isRead: false,
      sentAt: Date.now() ,
      emailId: Utils.getRandomId(),
      isSent: false,
      isStarred: true,
      isDraft: false,
    },
    {
      from:'manwithabigcar@gmail.com',
      subject: "MA Nishma?",
      body: "Shtok! im draft",
      isRead: false,
      sentAt: Date.now() ,
      emailId: Utils.getRandomId(),
      isSent: false,
      isStarred: false,
      isDraft: true,
    },
    {
      from:'rick@gmail.com',
      subject: "salam",
      body: "ata beseder ata!",
      isRead: false,
      sentAt: Date.now() ,
      emailId: Utils.getRandomId(),
      isSent: true,
      isStarred: false,
      isDraft: false,
    },
    {
      from:'kapara@gmail.wow',
      subject:
        "New music from artists you love, with Marvin Gaye on your Release Radar now",
      body: `Your Release Radar is here: Fresh tracks by your favorite artists, including Marvin Gaye, 
                on a personalized playlist that we update just for you every Friday. Listen to it now on Spotify.`,
      isRead: false,
      sentAt: Date.now() ,
      emailId: Utils.getRandomId(),
      isSent: false,
      isStarred: false,
      isDraft: false,
    },
    {
      from:'csshitler@gmail.com',
      subject: "Did you love it? Let us know!",
      body: `Now that you've got that sweet Society6 Highland Cow in a Vintage Bathtub (bw) art print in hand, 
         we'd like to know how we did. Your feedback on the product quality is important to us and our community. 
         You can upload a photo with your review, or post on Instagram using #ShareMySociety6.`,
      isRead: false,
      sentAt: Date.now() ,
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
  console.log(email);
  email.isRead = true;
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
