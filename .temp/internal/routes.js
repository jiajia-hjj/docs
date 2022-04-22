/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "C:\\Users\\HJJ\\Desktop\\vuepress\\docs2\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-5c9895dd",
    path: "/about/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-5c9895dd").then(next)
    },
  },
  {
    path: "/about/index.html",
    redirect: "/about/"
  },
  {
    name: "v-3b10cf2c",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-3b10cf2c").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-4fcc3191",
    path: "/about2.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-4fcc3191").then(next)
    },
  },
  {
    name: "v-f0de55fc",
    path: "/about/c.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-f0de55fc").then(next)
    },
  },
  {
    name: "v-6c857b13",
    path: "/about1.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-6c857b13").then(next)
    },
  },
  {
    name: "v-3a59307c",
    path: "/about/a.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-3a59307c").then(next)
    },
  },
  {
    name: "v-05724c62",
    path: "/about/bbb.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-05724c62").then(next)
    },
  },
  {
    path: '*',
    component: GlobalLayout
  }
]