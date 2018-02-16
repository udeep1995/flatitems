var React = require('react');
var BasketItem = React.createClass({
  handleDelItem(id){
  
    this.props.onDelItem(id);
  },
  render: function(){
    var {item} = this.props
    return (
      <div className="row">
          <div className="callout alert" data-closable>
              <span className="small-12 columns">{item.name}</span>
              <span className="small-12 columns">{item.reqBy}</span>
              <button onClick={this.handleDelItem.bind(this,item.id)} className="close-button" type="button">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
      </div>
    )
  }
})
module.exports = BasketItem;
