var React = require('react');
var moment = require('moment');

var ItemsApi = require('ItemsApi');

var OrdersList = require('OrdersList');

var LastOrder = React.createClass({
  getInitialState: function () {
    return {
      orders : [],
      isLoaded: false
    }
  },
  componentWillMount: function() {
    ItemsApi.getOrders().then((orders) => {
        this.setState({
          orders,
          isLoaded: true
        })
    });
  },
  render: function () {
      if (this.state.isLoaded) {
        if(this.state.orders.length === 0 ) {
          return (
                <h3>
                  No Previous Order History
                </h3>
               )
        } else {
            return (
              <div>
                  <div>
                      <OrdersList orders={this.state.orders}></OrdersList>
                  </div>
                  <div className = "container">

                  </div>
            </div>
            )
          }
      }
     return (<div></div>)
  }
});

module.exports = LastOrder;
