var React = require('react');
var BasketItem = require('BasketItem');
var BasketList = React.createClass({
  handleDelItem: function(id) {
    this.props.onDelItem(id);
  },
  render: function() {
    var {
      items
    } = this.props;
    var renderItems = () => {
      return items.map((item) => {
        return <BasketItem onDelItem={this.handleDelItem} key={item.id} item={item}></BasketItem>
      })
    }
    return (<div>
      {renderItems()}
    </div>)
  }
})
module.exports = BasketList;
