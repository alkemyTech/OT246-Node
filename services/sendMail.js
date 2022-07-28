const sgMail = require('@sendgrid/mail')
const { ErrorObject } = require('../helpers/error')

const registerTemplate = process.env.SENDGRID_ID_DYNAMIC_TEMPLATE

const templates = { 0: registerTemplate }

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

exports.sendMailRegistration = async (mail, data) => {
  await sendMail(mail, 0, data)
}
