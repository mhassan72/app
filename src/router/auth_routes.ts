// Public Routes 
import PublicLayer from '@/layouts/PublicLayer.vue'
import Recommendations from '@/views/search/Recommendations.vue'

const AuthRoutes =  {
    path: '/auth',
    component: PublicLayer,
    children: [
      {
        path: 'sign_in',
        component: Recommendations,
      }
    ]
}

export default AuthRoutes