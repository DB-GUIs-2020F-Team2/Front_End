import React from 'react';
import { Link } from 'react-router-dom';

export const OrdersList = props => 
    <>
    <h2>  Current Orders </h2>
    <table className = "table">
        <thead>
            <tr>
                <th>Customer</th>
                <th>Date Placed</th>
                <th> Shipped </th>
                <th>Completed </th> 
                <th> Details </th> 
                <th> Update</th>
                <th>&nbsp;</th>
            </tr>
        </thead>

        <tbody>
            {
                props.currentOrders.map(order =>
                    <tr key={order.id}>
                        <td>
                            {order.customer}
                        </td>
                        <td>{order.datePlaced}</td>
                        <td >{order.shipped ? 'Y' : 'N'}</td>
                        <td>{order.completed ? 'Y' : 'N'}</td>

                        <td>
                        <Link to={'details/' + order.id}  className="btn btn-primary">Details</Link>
                        </td>
                        <td>
                        <Link to={'edit/' + order.id}  className="btn btn-primary">Update</Link>
                        </td>

                    </tr>)
            }
        </tbody>
        
    </table> 




    <h2> Past Orders </h2> 
    <table className = "table">
        <thead>
            <tr>
                <th>Customer</th>
                <th>Date Completed</th>
                <th> Invoice / Details </th>
                <th>&nbsp;</th>
            </tr>
        </thead>

        <tbody>
            {
                props.pastOrders.map(order =>
                    <tr key={order.id}>
                        <td>
                            {order.customer}
                        </td>
                        <td>{order.dateCompleted}</td>
                        <td>
                        <Link to={'details/' + order.id}  className="btn btn-primary">Details</Link>
                        </td> 

                    </tr>)
            }
        </tbody>
        
    </table> 
    </>

