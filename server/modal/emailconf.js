Meteor.startup(function () {
  smtp = {
  username: 'kishanmadhesiya@gmail.com',
  password: '-------', // masked - a gmail application-specific 16 character password to use for two-factor auth
  server:   'smtp.gmail.com',
  port: 465 // also tried 465 to no avail
  };
  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});
Accounts.emailTemplates.siteName = "CybuzzSC";
Accounts.emailTemplates.from     = "CybuzzSC <----->";

Accounts.emailTemplates.verifyEmail = {
  subject() {
    return "[CybuzzSC-Order] Verify Your Email Address";
  },
  text( user, url ) {
    let emailAddress   = user.emails[0].address,
        urlWithoutHash = url.replace( '#/', '' ),
        supportEmail   = "kishan@cybuzzsc.com",
        emailBody      = `To verify your email address (${emailAddress}) visit the following link:\n\n${urlWithoutHash}\n\n If you did not request this verification, please ignore this email. If you feel something is wrong, please contact our support team: ${supportEmail}.`;

    return emailBody;
  }
};