import React from 'react';
import { OrdersList } from './orders_list';
import { Order } from '../../models/order';

export class VendorDashboard extends React.Component{

state = {
    currentOrders: [new Order(1,"Sue", 10, "Y", "Y", -1,"dictionary"),
        new Order(2,"Bob", 9, "N", "N", -1,"dictionary also")],
    pastOrders: [new Order(3,"Paul", 4, "Y", "Y", 1,"dictionary"),
        new Order(4,"Louisa", 1, "Y", "Y", 1,"dictionary also")]
}


render(){
    return <div>
        <h1>Vendor Dashboard </h1> 
        <OrdersList currentOrders = { this.state.currentOrders} pastOrders  = {this.state.pastOrders} />
    </div> 
}
}