import { createDefineMock } from 'vite-plugin-mock-dev-server'
import { join } from 'path'

const defineApiMock = createDefineMock((mock) => {
  mock.url = join('/api', mock.url)
})

export default defineApiMock
