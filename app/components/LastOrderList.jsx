var React = require('react');
var LastOrderItem = require('LastOrderItem');
var LastOrderList = React.createClass({
  render: function () {
    var {items} = this.props;
    var renderItems = () => {
      return items.map((item) => {
        return <LastOrderItem key={item.id} item={item}></LastOrderItem>
      })
    }
    return (
      <div style={{marginTop: '3%'}}>
          {renderItems()}
      </div>
          )
  }
});
module.exports = LastOrderList;
