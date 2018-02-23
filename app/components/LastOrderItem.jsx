var React = require('react');
var LastOrderItem = React.createClass({
  render: function () {
      var {item} = this.props;
      return (
        <div className="row">
          <div className="small-8 medium-8 large-8 columns callout success">{item.name}</div>
          <div className="small-4 medium-4 large-4 columns callout success">{item.reqBy}</div>
        </div>
      )
  }
});
module.exports = LastOrderItem;
