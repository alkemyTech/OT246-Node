const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDRGRID__KEY)

const { ErrorObject } = require('../helpers/error')

exports.sendMail = async (mail, subject, texthtml) => {
  const sandboxMode = false
  const correo = {
    from: process.env.FROM,
    to: mail,
    subject,
    texthtml,
    mail_settings: {
      sandbox_mode: {
        enable: sandboxMode,
      },
    },
  }
  try {
    await sgMail.send(correo)
  } catch (err) {
    throw new ErrorObject(err.message, 500)
  }
}
