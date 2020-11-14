import React from 'react';

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
                            <button type="button"
                                    className="btn btn-primary btn-sm">
                                Details 

                            </button> 
                        </td>
                        <td>
                        
                            <button type="button"
                                    className="btn btn-primary btn-sm">
                                Update
                            </button>
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
                            <button type="button"
                                    className="btn btn-primary btn-sm">
                                Details 

                            </button> 
                        </td>

                    </tr>)
            }
        </tbody>
        
    </table> 
    </>

