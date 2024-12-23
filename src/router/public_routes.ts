// import Views and layouts
import PublicLayer from '@/layouts/PublicLayout.vue'
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