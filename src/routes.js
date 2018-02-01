import Home from './components/Home.vue';
import Mortgage from './components/MortgageCalc.vue';
import CapRate from './components/CapRateCalc.vue';
import SeventyPercent from './components/SeventyPercentCalc.vue';
import VacationRental from './components/VacationRentalCalc.vue';


export const routes = [
  { path: '', component: Home},
  { path: '/mortgage', component: Mortgage },
  { path: '/caprate', component: CapRate },
  { path: '/seventy', component: SeventyPercent },
  { path: '/vacation', component: VacationRental },
  { path: '*', redirect: '/'}
]