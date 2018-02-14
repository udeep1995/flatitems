var React = require('react');
var BasketList = require('BasketList');
var Basket = React.createClass({
  render: function() {
    var {
      items
    } = this.props;
    return (
      <div>
        <div className="row">
          <div className="small-7 columns">
              <h2>CurrentBasket</h2>
          </div>
          <div className="small-5 columns">
              <h2>RequiredBy</h2>
          </div>
        </div>
        <BasketList items={items}></BasketList>
      </div>
    )
  }
});
module.exports = Basket;
