var React = require('react');
var BasketItem = React.createClass({
  handleDelItem(id){
  
    this.props.onDelItem(id);
  },
  render: function(){
    var {item} = this.props;
    return (
      <div className="row">
          <div className="callout alert" data-closable>
              <div>
                  <span className="small-12 columns">
                      <div className="small-6 columns">
                          {item.name}
                      </div>
                      <div className="small-2 columns">
                          {item.amt}
                      </div>
                      <div className="small-4 columns">
                          {item.quant}
                      </div>
                  </span>
                  <span className="small-12 columns">Required by - {item.reqBy}</span>
              </div>
              <div>
                  <button onClick={this.handleDelItem.bind(this,item.id)} className="close-button" type="button">
                    <span aria-hidden="true">&times;</span>
                  </button>
              </div>
          </div>
      </div>
    )
  }
})
module.exports = BasketItem;
