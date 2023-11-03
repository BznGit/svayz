import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CharacterView from '../views/CharacterView.vue';
import EpisodeView from '../views/EpisodeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/character/:id',
    name: 'character',
    component: CharacterView
  },
  {
    path: '/episode/:id',
    name: 'episode',
    component: EpisodeView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
