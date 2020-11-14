import React from 'react';


export class OrderEditor  extends React.Component {

state = {
        id: 0, 
        customer: 0,
        datePlaced: 0,
        shipped :0,
        completed :0,
        dateCompleted : 0,
        productQuantity: 0,
}
    render(){
        return <div>
        Order Editor 
        </div>
    }

     componentDidMount() {
        const orderId = +this.props.match.params.orderId;
        // console.log(orderId);
        this.setState({id: orderId}); 
        /*if (accountId) {
            this.accountsRepository.getOrder(orderId)
                .then(account => this.setState(account));
        }*/

    }
}