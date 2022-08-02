const sgMail = require('@sendgrid/mail')
const { ErrorObject } = require('../helpers/error')

const templates = {
  0: process.env.SENDGRID_ID_DYNAMIC_TEMPLATE_WELCOME,
  1: process.env.SENDGRID_ID_DYNAMIC_TEMPLATE_CONTACT,
}

sgMail.setApiKey(process.env.SENDGRID_KEY)

const sendMail = async (mail, opCode, data) => {
  const sandboxMode = false

  const settings = {
    from: process.env.SENDGRID_FROM,
    to: mail,
    templateId: templates[opCode],
    dynamic_template_data: data,
    mail_settings: {
      sandbox_mode: {
        enable: sandboxMode,
      },
    },
  }
  try {
    await sgMail.send(settings)
  } catch (err) {
    throw new ErrorObject(err.message, 500)
  }
}

exports.sendMailRegistration = async (data) => {
  await sendMail(data.email, 0, data)
}

exports.sendMailRegistrationContact = async (data) => {
  await sendMail(data.email, 1, data)
}
