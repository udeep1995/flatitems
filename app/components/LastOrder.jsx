var React = require('react');
var moment = require('moment');

var ItemsApi = require('ItemsApi');
var LastOrderList = require('LastOrderList');
var LastOrder = React.createClass({
  getInitialState: function () {
    return {
      lastOrderId : -1,
      items: [],
      timestamp: undefined
    }
  },
  componentWillMount: function() {
    var lastOrderItems = [];
      ItemsApi.getLastOrderId().then((lastOrderId) => {
     if(lastOrderId !== -1 ) {
       this.setState({
         lastOrderId
       });
       ItemsApi.getDate(this.state.lastOrderId).then((timestamp) => {
         this.setState({timestamp});
       });
       ItemsApi.getItems(lastOrderId).then((items) => {
         this.setState({
           items
         });
       });
     }
   });
  },
  render: function () {
      if (this.state.lastOrderId !== -1 && this.state.items.length > 0) {
        var dateString = moment.unix(this.state.timestamp).format("DD/MM/YYYY");
        return (
        <div>
            <h3>
                {dateString}
            </h3>
          <LastOrderList items = {this.state.items}></LastOrderList>
        </div>
        )
       }

   return (<div></div>)
  }
});

module.exports = LastOrder;
