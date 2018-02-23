var React = require('react');
var ItemsApi = require('ItemsApi');
var LastOrderList = require('LastOrderList');
var LastOrder = React.createClass({
  getInitialState: function () {
    return {
      lastOrderId : -1,
      items: []
    }
  },
  render: function () {
      if (this.state.lastOrderId !== -1 && this.state.items.length > 0) {
        return (
        <div>
          <LastOrderList items = {this.state.items}></LastOrderList>
        </div>
        )
       }
    var lastOrderItems = [];
   ItemsApi.getLastOrderId().then((lastOrderId) => {
     if(lastOrderId !== -1 ) {
       this.setState({
         lastOrderId
       })
       ItemsApi.getItems(lastOrderId).then((items) => {
         this.setState({
           items
         })
       })
     }
   });
   return (<div>
     <h1 style={{
         marginLeft: '40%',
         marginTop: '20%'
       }}>
     </h1>
   </div>)
  }
});

module.exports = LastOrder;
