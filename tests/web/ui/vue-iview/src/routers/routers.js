import Main from '@/components/main'
import parentView from '@/components/parent-view'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面不会缓存
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/routers/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export default [{
  path: '/login',
  name: 'login',
  meta: {
    title: 'Login - 登录',
    hideInMenu: true
  },
  component: () => import('@/views/login/login.vue')
}, {
  path: '',
  name: '_home',
  redirect: '/home',
  component: Main,
  meta: {
    hideInMenu: true,
    notCache: true
  },
  children: [{
    path: '/home',
    name: 'home',
    meta: {
      hideInMenu: true,
      title: '首页',
      notCache: true,
      icon: 'md-home'
    },
    component: () => import('@/views/home/home.vue')
  }]
}, {
  path: '/',
  name: 'doc',
  meta: {
    title: 'iView文档',
    href: 'https://iviewui.com/docs/guide/install',
    icon: 'ios-book'
  }
}, {
  path: '',
  name: 'permission',
  component: Main,
  meta: {
    icon: 'md-transgender',
    title: '权限管理'
  },
  children: [{
    path: '/identity',
    name: 'identity',
    component: parentView,
    meta: {
      icon: 'md-key',
      title: '身份认证'
    },
    children: [{
      path: 'user',
      name: 'user',
      component: () => import('@/views/identity/user.vue'),
      meta: {
        icon: 'md-person',
        title: '用户管理'
      }
    }, {
      path: 'role',
      name: 'role',
      component: () => import('@/views/identity/role.vue'),
      meta: {
        icon: 'md-people',
        title: '角色管理'
      }
    }, {
      path: 'user-role',
      name: 'user-role',
      component: () => import('@/views/identity/user-role.vue'),
      meta: {
        icon: 'ios-people',
        title: '用户角色管理'
      }
    }]
  }, {
    path: '/security',
    name: 'security',
    component: parentView,
    meta: {
      icon: 'ios-lock',
      title: '权限安全'
    },
    children: [{
      path: 'module',
      name: 'module',
      component: () => import('@/views/security/module.vue'),
      meta: {
        icon: 'ios-people',
        title: '模块管理'
      }
    }, {
      path: 'function',
      name: 'function',
      component: () => import('@/views/security/function.vue'),
      meta: {
        icon: 'ios-people',
        title: '功能管理'
      }
    }, {
      path: 'role-function',
      name: 'role-function',
      component: () => import('@/views/security/role-function.vue'),
      meta: {
        icon: 'ios-people',
        title: '角色功能管理'
      }
    }, {
      path: 'user-function',
      name: 'user-function',
      component: () => import('@/views/security/user-function.vue'),
      meta: {
        icon: 'ios-people',
        title: '用户功能管理'
      }
    }, {
      path: 'entityinfo',
      name: 'entityinfo',
      component: () => import('@/views/security/entityinfo.vue'),
      meta: {
        icon: 'ios-people',
        title: '数据实体管理'
      }
    }, {
      path: 'role-entityinfo',
      name: 'role-entityinfo',
      component: () => import('@/views/security/role-entityinfo.vue'),
      meta: {
        icon: 'ios-people',
        title: '角色数据管理'
      }
    }, {
      path: 'user-entityinfo',
      name: 'user-entityinfo',
      component: () => import('@/views/security/user-entityinfo.vue'),
      meta: {
        icon: 'ios-people',
        title: '用户数据管理'
      }
    }]
  }]
}, {
  path: '/systems',
  name: 'systems',
  component: Main,
  meta: {
    icon: 'md-desktop',
    title: '系统管理'
  },
  children: [{
    path: 'settings',
    name: 'settings',
    component: () => import('@/views/systems/settings.vue'),
    meta: {
      icon: 'md-settings',
      title: '系统设置'
    }
  }, {
    path: 'audit-operation',
    name: 'audit-operation',
    component: () => import('@/views/systems/audit-operation.vue'),
    meta: {
      icon: 'md-settings',
      title: '操作审计'
    }
  }, {
    path: 'audit-entity',
    name: 'audit-entity',
    component: () => import('@/views/systems/audit-entity.vue'),
    meta: {
      icon: 'md-settings',
      title: '数据审计'
    }
  }, {
    path: 'pack',
    name: 'pack',
    component: () => import('@/views/systems/pack.vue'),
    meta: {
      icon: 'md-settings',
      title: '模块包'
    }
  }]
}, {
  path: '/401',
  name: 'error_401',
  meta: {
    hideInMenu: true
  },
  component: () => import('@/views/error-page/401.vue')
}, {
  path: '/500',
  name: 'error_500',
  meta: {
    hideInMenu: true
  },
  component: () => import('@/views/error-page/500.vue')
}, {
  path: '*',
  name: 'error_404',
  meta: {
    hideInMenu: true
  },
  component: () => import('@/views/error-page/404.vue')
}]
