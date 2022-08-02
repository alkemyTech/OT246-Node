const createHttpError = require('http-errors')
const { getOrganization, updateOrganization, getOrganizationSlide } = require('../services/organizations')
const { catchAsync } = require('../helpers/catchAsync')
const { endpointResponse } = require('../helpers/success')

module.exports = {
  get: catchAsync(async (req, res, next) => {
    try {
      const responseBody = await getOrganization()

      return endpointResponse({
        res,
        code: 200,
        status: true,
        message: 'OK',
        body: responseBody,
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error retrieving organizations] - [organizations - GET]: ${err.message}`,
      )
      return next(httpError)
    }
  }),
  update: catchAsync(async (req, res, next) => {
    try {
      const toUpdate = await updateOrganization(req.body)
      endpointResponse({
        res,
        code: 200,
        message: 'Organization data was updated',
        body: toUpdate,
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error to update data of Organization] - [organizations - POST]: ${err.message}`,
      )
      next(httpError)
    }
  }),
  getAll: catchAsync(async (req, res, next) => {
    try {
      const organizationSlide = await getOrganizationSlide()

      return endpointResponse({
        res,
        code: 200,
        status: true,
        message: 'Public data OK',
        body: organizationSlide,
      })
    } catch (err) {
      const httpError = createHttpError(
        err.statusCode,
        `[Error retrieving Organization] - [organizations - GET]: ${err.message}`,
      )
      return next(httpError)
    }
  }),
}
