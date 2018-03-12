var React = require('react');
var moment = require('moment');

var OrderItem = require('OrderItem');
var ItemsApi = require('ItemsApi');
var LastOrderList =  require('LastOrderList');

var OrdersList = React.createClass({
    getInitialState: function() {
        return {
            orderId: undefined,
            timestamp: "",
            items: []
        }
    },
    handleShowOrderDetails: function(orderId) {
        this.setState({
            orderId
        });
        var orderData = {};
        // to get Date of clicked order
        ItemsApi.getDate(orderId).then((timestamp) => {
            var dateString = moment.unix(timestamp).format("DD/MM/YYYY");
            this.setState({
                timestamp: dateString
            })
        });
        // to get items of clicked order
        ItemsApi.getItems(orderId).then((items) => {
            this.setState({
                items
            })
        })
    },
    render: function () {
        var {orders} = this.props; 
        var renderOrders = () => {
            return orders.map((order) => {
                return <OrderItem key={order} onShowOrderDetails = {this.handleShowOrderDetails} order={order}></OrderItem>
            });
        }
        return (
            <div style={{ marginTop: '3%' }}>
                <div className="container">
                        {renderOrders()}  
                </div>
                <LastOrderList className="container orderInfo" items={this.state.items} timestamp={this.state.timestamp}></LastOrderList>
            </div>
        )
    }
});
module.exports = OrdersList;
