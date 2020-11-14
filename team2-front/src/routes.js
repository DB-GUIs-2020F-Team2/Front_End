import { Home } from './components/home/home' 
import { Login } from './components/login/login' 
import { VendorDashboard } from './components/vendor_pages/vendor_dash' 

export const ROUTES = [
    { path: '/home', component: Home },
    { path: '/login', component: Login },
    { path: '/vendordash', component: VendorDashboard},
    { path: '/', component: Home }
]