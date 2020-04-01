import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _45c44415 = () => interopDefault(import('..\\pages\\approvals.vue' /* webpackChunkName: "pages_approvals" */))
const _dbf7348c = () => interopDefault(import('..\\pages\\donate.vue' /* webpackChunkName: "pages_donate" */))
const _5d0d62af = () => interopDefault(import('..\\pages\\founders.vue' /* webpackChunkName: "pages_founders" */))
const _15c2094e = () => interopDefault(import('..\\pages\\history.vue' /* webpackChunkName: "pages_history" */))
const _3c9a8b95 = () => interopDefault(import('..\\pages\\how.vue' /* webpackChunkName: "pages_how" */))
const _11fa93b5 = () => interopDefault(import('..\\pages\\join.vue' /* webpackChunkName: "pages_join" */))
const _670199f8 = () => interopDefault(import('..\\pages\\overview.vue' /* webpackChunkName: "pages_overview" */))
const _4e67f762 = () => interopDefault(import('..\\pages\\what.vue' /* webpackChunkName: "pages_what" */))
const _1d4997d7 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
    component: _45c44415,
    name: "approvals"
  }, {
    path: "/donate",
    component: _dbf7348c,
    name: "donate"
  }, {
    path: "/founders",
    component: _5d0d62af,
    name: "founders"
  }, {
    path: "/history",
    component: _15c2094e,
    name: "history"
  }, {
    path: "/how",
    component: _3c9a8b95,
    name: "how"
  }, {
    path: "/join",
    component: _11fa93b5,
    name: "join"
  }, {
    path: "/overview",
    component: _670199f8,
    name: "overview"
  }, {
    path: "/what",
    component: _4e67f762,
    name: "what"
  }, {
    path: "/",
    component: _1d4997d7,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
