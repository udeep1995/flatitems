var React = require('react');
var LastOrderItem = React.createClass({
  render: function () {
      var {item} = this.props;
      if(!item.amt) {
        item.amt = 1;
      }
      if (!item.quant) {
        item.quant = "units";
      }
      return (
        <div className="row">
          <div className="small-4 medium-4 large-4 columns callout success">{item.name}</div>
          <div className="small-2 medium-2 large-2 columns callout success">{item.amt}</div>
          <div className="small-2 medium-2 large-2 columns callout success">{item.quant}</div>
          <div className="small-4 medium-4 large-4 columns callout success">{item.reqBy}</div>
        </div>
      )
  }
});
module.exports = LastOrderItem;
