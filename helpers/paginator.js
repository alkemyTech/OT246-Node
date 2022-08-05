class Paginator {
  constructor(page, context, cant) {
    this.limit = 10
    this.setCantPages(cant)
    this.setPageId(page)
    this.context = context
  }

  setPageId(page) {
    if (page < 0 || Number.isNaN(page)) {
      this.pageId = 0
    } else if (this.cantPages < page) {
      this.pageId = this.cantPages
    } else {
      this.pageId = page
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

  getRecordRange() {
    return { offset: this.getOffset(), limit: this.getLimit() }
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

  getAttachedUrl(baseURL) {
    return { prevUrl: this.prevPageUrl(baseURL), nextUrl: this.nextPageUrl(baseURL) }
  }
}

module.exports = Paginator
