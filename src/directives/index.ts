import loadingDirective from './loading'
import { App } from 'vue'

export function setupDirectives(app: App) {
  app.directive('loading', loadingDirective)
}
