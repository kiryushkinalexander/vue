import Vue from "vue";
import VueRouter from "vue-router";

import HeroView from '../views/HeroView';
import OurCoffee from '../views/OurCoffee';
import ContactUs from '../views/ContactUs';
import ForYourPleasure from '../views/ForYourPleasure';
import ThankYouPage from '../views/ThankYouPage';
import GoodsItemView from '../views/GoodsItemView';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: HeroView },
  { path: '/our-coffee', component: OurCoffee },
  { path: '/contact-us', component: ContactUs },
  { path: '/for-your-pleasure', component: ForYourPleasure },
  { path: '/thank-you-page', component: ThankYouPage },
  { name: 'coffee', path: '/our-coffee/:id', component: GoodsItemView },
  { name: 'goods', path: '/for-your-pleasurename/:id', component: GoodsItemView },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router;