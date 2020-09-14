import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3b41b24f = () => interopDefault(import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */))
const _fae5fcdc = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _c98155e0 = () => interopDefault(import('../pages/approvals.vue' /* webpackChunkName: "pages/approvals" */))
const _5c1189d8 = () => interopDefault(import('../pages/dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _36946e9f = () => interopDefault(import('../pages/donate.vue' /* webpackChunkName: "pages/donate" */))
const _1dbec654 = () => interopDefault(import('../pages/founders.vue' /* webpackChunkName: "pages/founders" */))
const _3adfe1d8 = () => interopDefault(import('../pages/history.vue' /* webpackChunkName: "pages/history" */))
const _4c08b4d0 = () => interopDefault(import('../pages/how.vue' /* webpackChunkName: "pages/how" */))
const _1f5cdc4c = () => interopDefault(import('../pages/join.vue' /* webpackChunkName: "pages/join" */))
const _540df1a7 = () => interopDefault(import('../pages/quotes.vue' /* webpackChunkName: "pages/quotes" */))
const _05f1e36d = () => interopDefault(import('../pages/dash/Icons.vue' /* webpackChunkName: "pages/dash/Icons" */))
const _79d6d794 = () => interopDefault(import('../pages/dash/Maps.vue' /* webpackChunkName: "pages/dash/Maps" */))
const _2e94101b = () => interopDefault(import('../pages/dash/NotFoundPage.vue' /* webpackChunkName: "pages/dash/NotFoundPage" */))
const _5683a33b = () => interopDefault(import('../pages/dash/Notifications.vue' /* webpackChunkName: "pages/dash/Notifications" */))
const _099eb129 = () => interopDefault(import('../pages/dash/Notifications/NotificationTemplate.vue' /* webpackChunkName: "pages/dash/Notifications/NotificationTemplate" */))
const _40cafb5f = () => interopDefault(import('../pages/dash/TableList.vue' /* webpackChunkName: "pages/dash/TableList" */))
const _5bc77a6c = () => interopDefault(import('../pages/dash/Typography.vue' /* webpackChunkName: "pages/dash/Typography" */))
const _5d6ffd1e = () => interopDefault(import('../pages/dash/UserProfile.vue' /* webpackChunkName: "pages/dash/UserProfile" */))
const _5ff0c6e5 = () => interopDefault(import('../pages/dash/UserProfile/EditProfileForm.vue' /* webpackChunkName: "pages/dash/UserProfile/EditProfileForm" */))
const _4a7121ea = () => interopDefault(import('../pages/dash/UserProfile/MembersCard.vue' /* webpackChunkName: "pages/dash/UserProfile/MembersCard" */))
const _0e2c55a9 = () => interopDefault(import('../pages/dash/UserProfile/UserCard.vue' /* webpackChunkName: "pages/dash/UserProfile/UserCard" */))
const _09d25e52 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/admin",
    component: _3b41b24f,
    children: [{
      path: "",
      component: _fae5fcdc,
      name: "admin"
    }]
  }, {
    path: "/approvals",
    component: _c98155e0,
    name: "approvals"
  }, {
    path: "/dashboard",
    component: _5c1189d8,
    name: "dashboard"
  }, {
    path: "/donate",
    component: _36946e9f,
    name: "donate"
  }, {
    path: "/founders",
    component: _1dbec654,
    name: "founders"
  }, {
    path: "/history",
    component: _3adfe1d8,
    name: "history"
  }, {
    path: "/how",
    component: _4c08b4d0,
    name: "how"
  }, {
    path: "/join",
    component: _1f5cdc4c,
    name: "join"
  }, {
    path: "/quotes",
    component: _540df1a7,
    name: "quotes"
  }, {
    path: "/dash/Icons",
    component: _05f1e36d,
    name: "dash-Icons"
  }, {
    path: "/dash/Maps",
    component: _79d6d794,
    name: "dash-Maps"
  }, {
    path: "/dash/NotFoundPage",
    component: _2e94101b,
    name: "dash-NotFoundPage"
  }, {
    path: "/dash/Notifications",
    component: _5683a33b,
    name: "dash-Notifications",
    children: [{
      path: "NotificationTemplate",
      component: _099eb129,
      name: "dash-Notifications-NotificationTemplate"
    }]
  }, {
    path: "/dash/TableList",
    component: _40cafb5f,
    name: "dash-TableList"
  }, {
    path: "/dash/Typography",
    component: _5bc77a6c,
    name: "dash-Typography"
  }, {
    path: "/dash/UserProfile",
    component: _5d6ffd1e,
    name: "dash-UserProfile",
    children: [{
      path: "EditProfileForm",
      component: _5ff0c6e5,
      name: "dash-UserProfile-EditProfileForm"
    }, {
      path: "MembersCard",
      component: _4a7121ea,
      name: "dash-UserProfile-MembersCard"
    }, {
      path: "UserCard",
      component: _0e2c55a9,
      name: "dash-UserProfile-UserCard"
    }]
  }, {
    path: "/",
    component: _09d25e52,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
