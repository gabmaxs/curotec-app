import InitialRouter from '@/modules/initial/router'
import RoomRouter from '@/modules/room/router'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  ...InitialRouter,
  ...RoomRouter,
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
