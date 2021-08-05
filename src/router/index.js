import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'index',
        meta: {
            title: '首页'
        },
        component: () => import('@/views/index'),
        children: [
          {
            path: '/automation',
            name: 'automation',
            meta: {
                title: '自动化'
            },
            component: () => import('@/views/automation/index'),
            children: [
              {
                path: '/automation/gulp',
                name: 'gulp',
                component: () => import('@/views/automation/Gulp/index')
              }
            ]
          }
        ]
    },
]

const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'is-active', // 这是链接激活时的class
    routes,
    scrollBehavior(to, from, savedPosition) {
      return savedPosition || {x: 0, y: 0}
    }
  })

export default router