import { createMemoryHistory, createRouter } from 'vue-router'

import PublicRoutes from './public_routes'
import AuthRoutes from './auth_routes'
import DashboardRoutes from './dashboard_routes'



const routes = [
  PublicRoutes,
  AuthRoutes,
  DashboardRoutes
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})