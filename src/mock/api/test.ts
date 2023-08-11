import defineApiMock from '@/mock'

export default defineApiMock({
  url: '/api/test',
  body: {
    data: {
      list: []
    }
  }
})
