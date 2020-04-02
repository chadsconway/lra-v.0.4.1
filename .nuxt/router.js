import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _091887cc = () => interopDefault(import('..\\pages\\approvals.vue' /* webpackChunkName: "pages_approvals" */))
const _56cad53a = () => interopDefault(import('..\\pages\\donate.vue' /* webpackChunkName: "pages_donate" */))
const _52d64c18 = () => interopDefault(import('..\\pages\\founders.vue' /* webpackChunkName: "pages_founders" */))
const _054ec0d0 = () => interopDefault(import('..\\pages\\history.vue' /* webpackChunkName: "pages_history" */))
const _d304b6e8 = () => interopDefault(import('..\\pages\\how.vue' /* webpackChunkName: "pages_how" */))
const _170accc4 = () => interopDefault(import('..\\pages\\join.vue' /* webpackChunkName: "pages_join" */))
const _7b6fc726 = () => interopDefault(import('..\\pages\\overview.vue' /* webpackChunkName: "pages_overview" */))
const _8967eb90 = () => interopDefault(import('..\\pages\\what.vue' /* webpackChunkName: "pages_what" */))
const _ea6b61e4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/approvals",
    component: _091887cc,
    name: "approvals"
  }, {
    path: "/donate",
    component: _56cad53a,
    name: "donate"
  }, {
    path: "/founders",
    component: _52d64c18,
    name: "founders"
  }, {
    path: "/history",
    component: _054ec0d0,
    name: "history"
  }, {
    path: "/how",
    component: _d304b6e8,
    name: "how"
  }, {
    path: "/join",
    component: _170accc4,
    name: "join"
  }, {
    path: "/overview",
    component: _7b6fc726,
    name: "overview"
  }, {
    path: "/what",
    component: _8967eb90,
    name: "what"
  }, {
    path: "/",
    component: _ea6b61e4,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
