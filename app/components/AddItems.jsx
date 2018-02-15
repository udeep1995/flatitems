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
        reqBy: reqBy
      }
      this.refs.reqBy.value = '';
      this.refs.items.value = '';
      this.props.onAddItems(item);
    }
  },
  render: function() {
    return (
      <form className="page-title" onSubmit={this.handleAddItem}>

          <legend>Add More Items
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
            <div className="container container-centered"  >
              <button className="button btn" style= {{marginLeft:'30%'}} type="submit">Add Item</button>
            </div>
            </legend>

    </form>
  )
  }
})
module.exports = AddItems;
