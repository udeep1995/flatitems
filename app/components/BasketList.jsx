var React = require('react');
var BasketItem = require('BasketItem');
var BasketList = React.createClass({

  render: function(){
    var {items} = this.props;
    var renderItems = () =>
    {
      return items.map((item) => {
         return <BasketItem key={item.id} item={item}> </BasketItem>
      })
    }
    return (
      <div>
        {renderItems()}
      </div>
      )
  }
})
module.exports = BasketList;
