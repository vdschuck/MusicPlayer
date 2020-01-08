const nodemailer = require('nodemailer');

module.exports = {
  async sendMail(firstName, password, emailTo) {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      port: process.env.EMAIL_PORT,
      secure: false,
      auth: {
        user: process.env.EMAIL_AUTH_USER,
        pass: process.env.EMAIL_AUTH_PASS
      },
      tls: {
        ciphers: 'SSLv3'
      }
    });

    let htmlTemplate = this.getHTMLTemplate(firstName, password);
    await transporter.sendMail({
      from: process.env.EMAIL_TEMPLATE_FROM,
      to: emailTo,
      subject: 'Password Reset Information',
      html: htmlTemplate
    });

    return {
      code: 200,
      message: Constants.GOOD_MESSAGES.EMAIL_SENT_SUCCESS
    };
  },

  getHTMLTemplate(firstName, password) {
    return `<tr> <td align="left" style="padding:0px 40px 40px 40px"> <p style="color:#720c0c; font-size:32px; text-align:left; font-family: Verdana, Geneva, sans-serif">Hello ${firstName},</p> </br> <p style="color:#000000; font-size:16px; text-align:left; font-family: Verdana, Geneva, sans-serif; line-height:22px ">You requested for a password reset.</p> </br> <p style="color:#262626; font-size:16px; text-align:left; font-family: Verdana, Geneva, sans-serif">Please use the below password to login in the application in your next time.</p> <p style="color:#720c0c; font-size:16px; text-align:left; font-family: Verdana, Geneva, sans-serif">${password}</p> <p style="color:#000000; font-size:16px; text-align:left; font-family: Verdana, Geneva, sans-serif; line-height:22px "> From the UniTunes Development Team.</p> </td> </tr>`;
  }
};