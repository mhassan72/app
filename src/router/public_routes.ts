// Public Routes 
import PublicLayer from '@/layouts/PublicLayer.vue'
import Recommendations from '@/views/search/Recommendations.vue'

const PublicRoutes =  {
    path: '/',
    component: PublicLayer,
    children: [
      {
        path: '',
        component: Recommendations,
      }
    ]
}

export default PublicRoutes