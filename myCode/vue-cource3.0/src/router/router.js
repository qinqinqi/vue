import Home from '../views/Home.vue'

export default [{
    path: '/',
    alias: '/home_page', // 别名 直接访问home_page路由即可
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue'),
    props: {
      food: 'banana'
    },
  },
  {
    path: '/argu/:name', // 动态路由
    component: () => import('../views/argu.vue'),
    props: true
  },
  {
    path: '/parent', // 嵌套路由
    name: 'parent',
    meta: {
      title: 'parent'
    },
    component: () => import('@/views/parent.vue'),
    children: [
      {
        path: 'child',
        name: 'child',
        meta: {
          title: 'child'
        },
        component: () => import('@/views/child.vue')
      }
    ]
  },
  {
    path: '/named_view',
    name: 'named_view',
    meta: {
      title: 'named_view'
    },
    components: {
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue')
    }
  },
  {
    path: '*', // 放在最末尾，匹配从上往下，上面的匹配不到，我就该出马了
    component: () => import('@/views/error_404.vue')
  }
]
