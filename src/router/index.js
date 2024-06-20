import { createRouter, createWebHistory } from 'vue-router'
import TaskList from '../components/TaskList.vue'
import AddTask from '../components/AddTask.vue'
import EditTask from '../components/EditTask.vue'

const routes = [
  { path: '/', component: TaskList },
  { path: '/add', component: AddTask },
  { path: '/edit/:id', component: EditTask },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
