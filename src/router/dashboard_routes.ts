// Public Routes 
import PublicLayer from '@/layouts/PublicLayer.vue'
import Recommendations from '@/views/search/Recommendations.vue'

const DashboardRoutes =  {
    path: '/dashboard',
    component: PublicLayer,
    children: [
      {
        path: '',
        component: Recommendations,
      }
    ]
}

export default DashboardRoutes