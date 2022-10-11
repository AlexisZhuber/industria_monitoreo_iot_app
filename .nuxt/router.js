import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0a3c4d7d = () => interopDefault(import('../pages/dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _ea9bb8f4 = () => interopDefault(import('../pages/devices.vue' /* webpackChunkName: "pages/devices" */))
const _321a9f5c = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _5012f130 = () => interopDefault(import('../pages/reports.vue' /* webpackChunkName: "pages/reports" */))
const _72af3810 = () => interopDefault(import('../pages/GeneralViews/NotFoundPage.vue' /* webpackChunkName: "pages/GeneralViews/NotFoundPage" */))
const _1d4b0d3b = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'active',
  scrollBehavior,

  routes: [{
    path: "/dashboard",
    component: _0a3c4d7d,
    name: "dashboard"
  }, {
    path: "/devices",
    component: _ea9bb8f4,
    name: "devices"
  }, {
    path: "/login",
    component: _321a9f5c,
    name: "login"
  }, {
    path: "/reports",
    component: _5012f130,
    name: "reports"
  }, {
    path: "/GeneralViews/NotFoundPage",
    component: _72af3810,
    name: "GeneralViews-NotFoundPage"
  }, {
    path: "/",
    component: _1d4b0d3b,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
