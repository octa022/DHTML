import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import prueba from './components/prueba/prueba.vue'
import example1 from './components/prueba/prueba.vue'
import example2 from './components/example/ExampleTwo'
import example3 from './components/example/ExampleThree'
import example4 from './components/example/ExampleFour'
import example5 from './components/example/ExampleFive'
import exampeeditor from './components/example/ExampleEditor.vue'
import ui from './components/uieditor/container.vue'
import text from './components/inputs/TextInputBrick.vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/prueba',
      name: 'prueba',
      component: prueba
    },
    {
      path: '/text',
      name: 'text',
      component: text
    },
    {
      path: '/example1',
      name: 'example1',
      component: example1
    },
    {
      path: '/example2',
      name: 'example2',
      component: example2
    },
    {
      path: '/create',
      name: 'create',
      component: ui
    },
    {
      path: '/example3',
      name: 'example3',
      component: example3
    },
    {
      path: '/example4',
      name: 'example4',
      component: example4
    },
    {
      path: '/example5',
      name: 'example5',
      component: example5
    },
    {
      path: '/exampleeditor',
      name: 'exampleeditor',
      component: exampeeditor
    }
  ]
})
