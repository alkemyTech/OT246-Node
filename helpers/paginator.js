class Paginator {
  constructor(idPage, context, cant) {
    this.idPage = Number(idPage)
    this.validateIdPage()
    this.limit = 10
    this.context = context
    this.setCantPages(cant)
  }

  validateIdPage() {
    if (this.idPage < 1 || Number.isNaN(this.idPage)) {
      this.idPage = 1
    }
  }

  setCantPages(cant) {
    this.cantPages = Number((cant / 10).toFixed())
  }

  getOffset() {
    if (this.idPage <= 0) {
      return 0
    }
    return (this.idPage) * 10
  }

  getLimit() {
    return this.limit
  }

  prevUrl(baseURL) {
    if (this.idPage > 0) {
      return `${baseURL}/${this.context}/?page=${this.idPage - 1}`
    }
    return ''
  }

  nextUrl(baseURL) {
    if ((this.cantPages - this.idPage) > 0) {
      return `${baseURL}/${this.context}/?page=${this.idPage + 1}`
    }
    return ''
  }

  getAttachedUrl() {
    const baseURL = process.env.BASE_URL
    return { prevUrl: this.prevUrl(baseURL), nextUrl: this.nextUrl(baseURL) }
  }

  getParams() {
    return { offset: this.getOffset(), limit: this.getLimit() }
  }
}

module.exports = Paginator
