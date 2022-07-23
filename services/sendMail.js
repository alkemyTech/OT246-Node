const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_KEY)

const { ErrorObject } = require('../helpers/error')

exports.sendMail = async (mail, subject, templateId, dynamicTemplateData) => {
  const sandboxMode = false
  const settings = {
    from: process.env.SENDGRID_FROM,
    to: mail,
    subject,
    templateId,
    mail_settings: {
      sandbox_mode: {
        enable: sandboxMode,
      },
    },
    dynamic_template_data: dynamicTemplateData,
  }
  try {
    await sgMail.send(settings)
  } catch (err) {
    throw new ErrorObject(err.message, 500)
  }
}
