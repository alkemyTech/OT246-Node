const sgMail = require('@sendgrid/mail')
const { ErrorObject } = require('../helpers/error')

const tempRegistration = process.env.SENDGRID_ID_DYNAMIC_TEMPLATE

const templates = { 0: tempRegistration }

sgMail.setApiKey(process.env.SENDGRID_KEY)

exports.sendMail = async (mail, opCode, dynamicTemplateData) => {
  const sandboxMode = false

  const settings = {
    from: process.env.SENDGRID_FROM,
    to: mail,
    templateId: templates[opCode],
    dynamic_template_data: dynamicTemplateData,
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
