// import libraries 
import { createMemoryHistory, createRouter } from 'vue-router'

// import routes 
import PublicRoutes from './public_routes'
import AuthRoutes from './auth_routes'
import DashboardRoutes from './dashboard_routes'

// Use only imported routes
const routes = [
  PublicRoutes,
  AuthRoutes,
  DashboardRoutes
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
