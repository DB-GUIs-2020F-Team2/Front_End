import { Home } from './components/home/home' 
import { Login } from './components/login/login' 
import { VendorDashboard } from './components/vendor_pages/vendor_dash' 
import { OrderDetails } from './components/vendor_pages/order_details' 
import { OrderEditor } from './components/vendor_pages/order_editor' 

export const ROUTES = [
    { path: '/home', component: Home },
    { path: '/login', component: Login },
    { path: '/vendordash', component: VendorDashboard},
    { path: '/details/:orderId', component: OrderDetails },
    { path: '/edit/:orderId', component: OrderEditor },
    { path: '/', component: Home }
]