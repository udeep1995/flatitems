var React = require('react');
var AddItems = React.createClass({
  handleAddItem: function(e) {
    e.preventDefault();
    var ref = this.refs;
    var reqBy = ref.reqBy.value;
    var items = ref.items.value;
    if(reqBy && items){
      var item = {
        name: items.toString(),
        reqBy: reqBy,
        isOrdered:false
      }
      this.props.onAddItems(item);
    }
  },
  render: function() {
    return (
      <form onSubmit={this.handleAddItem}>
        <div className="row">
        <div className="small-8 columns">
          <div className="small-3 columns">
            <label className="right inline">Name</label>
          </div>
          <div className="small-9 columns">
            <input type="text" id="reqBy" required ref="reqBy" placeholder="RequiredBy"></input>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="small-8 columns">
          <div className="small-3 columns">
            <label className="right inline">Items</label>
          </div>
          <div className="small-9 columns">
            <textarea type="text" id="items" ref="items" placeholder="Items"></textarea>
          </div>
        </div>
      </div>
      <div className="row">
        <button className="button expand radius" required type="submit">Add Item</button>
      </div>
    </form>
  )
  }
})
module.exports = AddItems;
