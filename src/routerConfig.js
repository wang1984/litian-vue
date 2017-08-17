import Home from './components/home.vue'
import newList from './components/newsList.vue'
import events from './components/events.vue'
import designList from './components/designList.vue'
import caseList from './components/caseList.vue'
import price from './components/price.vue'
import caseDetail from './components/caseDetail.vue'

export default  [
   {
    path: '/home',
    component: Home
   },
   {
    path: '/newslist',
    component: newList
   },
   {
    path: '/events',
    component: events
   },
   {
    path: '/designList',
    component: designList
   },
   {
    path: '/caseList',
    component: caseList
   },
   {
    path: '/price',
    component: price
   },
   {
    path: '/caseDetail',
    component: caseDetail
   },     
   {
     path: '/',
     redirect: '/home'
   }, 
   {
     path: '*',
     redirect: '/home'
    }
 ];