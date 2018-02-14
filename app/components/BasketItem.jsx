var React = require('react');
var BasketItem = React.createClass({
  render: function(){
    var {item} = this.props
    return (
      <div className="row">
          <h4 className="columns medium-7 small-7">
            {item.name}
          </h4>
          <h4 className="columns medium-5 small-5">
            {item.reqBy}
          </h4>
      </div>
    )
  }
})
module.exports = BasketItem;
