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
    return (<div>
      <BasketList onDelItem={this.handleDelItem} items={items}></BasketList>
    </div>)
  }
});
module.exports = Basket;
