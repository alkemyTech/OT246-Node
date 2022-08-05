class Paginator {
  constructor(pageId, context, cant) {
    this.setPageId(pageId)
    this.validateIdPage()
    this.limit = 10
    this.context = context
    this.setCantPages(cant)
  }

  setPageId(pageId) {
    if (pageId < 0 || Number.isNaN(pageId)) {
      this.pageId = 0
    }
  }

  setCantPages(cant) {
    this.cantPages = Number((cant / this.limit).toFixed())
  }

  getOffset() {
    if (this.pageId <= 0) {
      return 0
    }
    return (this.pageId) * this.limit
  }

  getLimit() {
    return this.limit
  }

  prevPageUrl(baseURL) {
    if (this.pageId > 0) {
      return `${baseURL}/${this.context}/?page=${this.pageId - 1}`
    }
    return ''
  }

  nextPageUrl(baseURL) {
    if ((this.cantPages - this.pageId) > 0) {
      return `${baseURL}/${this.context}/?page=${this.pageId + 1}`
    }
    return ''
  }

  getAttachedUrl() {
    const baseURL = process.env.BASE_URL
    return { prevUrl: this.prevUrl(baseURL), nextUrl: this.nextUrl(baseURL) }
  }

  getRecordRange() {
    return { offset: this.getOffset(), limit: this.getLimit() }
  }
}

module.exports = Paginator
