import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _cf30e91c = () => interopDefault(import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */))
const _13a63475 = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _5c84369a = () => interopDefault(import('../pages/approvals.vue' /* webpackChunkName: "pages/approvals" */))
const _0875cab7 = () => interopDefault(import('../pages/dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _7e29b9dc = () => interopDefault(import('../pages/donate.vue' /* webpackChunkName: "pages/donate" */))
const _55a3935e = () => interopDefault(import('../pages/founders.vue' /* webpackChunkName: "pages/founders" */))
const _e4b7a912 = () => interopDefault(import('../pages/history.vue' /* webpackChunkName: "pages/history" */))
const _2a087ab3 = () => interopDefault(import('../pages/how.vue' /* webpackChunkName: "pages/how" */))
const _5b6aef52 = () => interopDefault(import('../pages/join.vue' /* webpackChunkName: "pages/join" */))
const _c1756fac = () => interopDefault(import('../pages/dash/Icons.vue' /* webpackChunkName: "pages/dash/Icons" */))
const _9f553192 = () => interopDefault(import('../pages/dash/Maps.vue' /* webpackChunkName: "pages/dash/Maps" */))
const _aeb36684 = () => interopDefault(import('../pages/dash/NotFoundPage.vue' /* webpackChunkName: "pages/dash/NotFoundPage" */))
const _1eb8faf8 = () => interopDefault(import('../pages/dash/Notifications.vue' /* webpackChunkName: "pages/dash/Notifications" */))
const _b09efce8 = () => interopDefault(import('../pages/dash/Notifications/NotificationTemplate.vue' /* webpackChunkName: "pages/dash/Notifications/NotificationTemplate" */))
const _f7988cc8 = () => interopDefault(import('../pages/dash/TableList.vue' /* webpackChunkName: "pages/dash/TableList" */))
const _f512f862 = () => interopDefault(import('../pages/dash/Typography.vue' /* webpackChunkName: "pages/dash/Typography" */))
const _450bb724 = () => interopDefault(import('../pages/dash/UserProfile.vue' /* webpackChunkName: "pages/dash/UserProfile" */))
const _0f7f4fe2 = () => interopDefault(import('../pages/dash/UserProfile/EditProfileForm.vue' /* webpackChunkName: "pages/dash/UserProfile/EditProfileForm" */))
const _4a53fe88 = () => interopDefault(import('../pages/dash/UserProfile/MembersCard.vue' /* webpackChunkName: "pages/dash/UserProfile/MembersCard" */))
const _70558168 = () => interopDefault(import('../pages/dash/UserProfile/UserCard.vue' /* webpackChunkName: "pages/dash/UserProfile/UserCard" */))
const _66f83775 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _cf30e91c,
    children: [{
      path: "",
      component: _13a63475,
      name: "admin"
    }]
  }, {
    path: "/approvals",
    component: _5c84369a,
    name: "approvals"
  }, {
    path: "/dashboard",
    component: _0875cab7,
    name: "dashboard"
  }, {
    path: "/donate",
    component: _7e29b9dc,
    name: "donate"
  }, {
    path: "/founders",
    component: _55a3935e,
    name: "founders"
  }, {
    path: "/history",
    component: _e4b7a912,
    name: "history"
  }, {
    path: "/how",
    component: _2a087ab3,
    name: "how"
  }, {
    path: "/join",
    component: _5b6aef52,
    name: "join"
  }, {
    path: "/dash/Icons",
    component: _c1756fac,
    name: "dash-Icons"
  }, {
    path: "/dash/Maps",
    component: _9f553192,
    name: "dash-Maps"
  }, {
    path: "/dash/NotFoundPage",
    component: _aeb36684,
    name: "dash-NotFoundPage"
  }, {
    path: "/dash/Notifications",
    component: _1eb8faf8,
    name: "dash-Notifications",
    children: [{
      path: "NotificationTemplate",
      component: _b09efce8,
      name: "dash-Notifications-NotificationTemplate"
    }]
  }, {
    path: "/dash/TableList",
    component: _f7988cc8,
    name: "dash-TableList"
  }, {
    path: "/dash/Typography",
    component: _f512f862,
    name: "dash-Typography"
  }, {
    path: "/dash/UserProfile",
    component: _450bb724,
    name: "dash-UserProfile",
    children: [{
      path: "EditProfileForm",
      component: _0f7f4fe2,
      name: "dash-UserProfile-EditProfileForm"
    }, {
      path: "MembersCard",
      component: _4a53fe88,
      name: "dash-UserProfile-MembersCard"
    }, {
      path: "UserCard",
      component: _70558168,
      name: "dash-UserProfile-UserCard"
    }]
  }, {
    path: "/",
    component: _66f83775,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
