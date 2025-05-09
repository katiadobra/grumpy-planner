import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PlannerView from '../views/PlannerView.vue'
import CatastrophizerView from '../views/CatastrophizerView.vue'
import ResetView from '../views/ResetView.vue'
import ForecastView from '../views/ForecastView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/planner', component: PlannerView },
  { path: '/catastrophizer', component: CatastrophizerView },
  { path: '/reset', component: ResetView },
  { path: '/forecast', component: ForecastView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
