var React = require('react');
var BasketList = require('BasketList');
var Basket = React.createClass({
  handleDelItem: function(id) {
    this.props.onDelItem(id);
  },
  render: function() {
    var {
      items
    } = this.props;
    return (
      <div>
          <h3>Current Basket Items</h3>
          <div className="container basket-box">
            <BasketList onDelItem={this.handleDelItem} items={items}></BasketList>
          </div>
      </div>
  )
  }
});
module.exports = Basket;
