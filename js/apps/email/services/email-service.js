import {Utils} from './utils-service.js';

var gEmails = (() => {
    var emails = Utils.loadFromStorage("emails");
    if (!emails) {
      emails = _createDefaultEmails();
      Utils.storeToStorage("emails",emails);
    }
    return emails;
  })();

export const emailService = {
    getEmails,
    getEmailById,
    // saveEmails,
    // getNextEmailsId 
}


function _createDefaultEmails() {
    return  [
        {
          subject: 'Wassap?',
         body: 'Pick up!',
          isRead: false,
           sentAt : 1551133930594,
            emailId : '101'
          },
        {
          subject: 'Manishma?',
         body: 'boker tov!',
         isRead: false,
         sentAt : 1551133930594,
          emailId : '102' 
        },
        {
          subject: 'Salam!',
         body: 'nimas li !',
          isRead: false, sentAt : 1551133930594,
            emailId : '104'
          },
        {
          subject: 'New music from artists you love, with Marvin Gaye on your Release Radar now',
         body: `Your Release Radar is here: Fresh tracks by your favorite artists, including Marvin Gaye, 
                on a personalized playlist that we update just for you every Friday. Listen to it now on Spotify.`, 
         isRead: false,
         sentAt : 1551133930594,
           emailId : '105'
          },
        {
          subject:'Did you love it? Let us know!',
         body: `Now that you've got that sweet Society6 Highland Cow in a Vintage Bathtub (bw) art print in hand, 
         we'd like to know how we did. Your feedback on the product quality is important to us and our community. 
         You can upload a photo with your review, or post on Instagram using #ShareMySociety6.`, 
         isRead: false,
         sentAt : 1551133930594,
           emailId : '106'
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

// function saveEmail(email) {
//     if (car.id) {
//         const idx = gCars.findIndex(currCar => currCar.id === car.id)
//         gCars.splice(idx, 1, car)
//     } else {
//         car.id = Utils.getRandomId();
//         car.createdAt = Date.now();
//         gCars.unshift(car);
//     }
//     return Promise.resolve(car);
// }



