var React = require('react');
var AddItems = React.createClass({
  handleAddItem: function(e) {
    e.preventDefault();
    var ref = this.refs;
    var reqBy = ref.reqBy.value;
    var items = ref.items.value;
    var quant = ref.quant.value;
    var amt = ref.amt.value;

    if(reqBy && items && amt){
      var item = {
        name: items.toString(),
        reqBy: reqBy,
        quant: quant,
        amt:amt
      }
      this.refs.reqBy.value = '';
      this.refs.items.value = '';
      this.refs.amt.value = '';
      this.props.onAddItems(item);
    }
  },
  render: function() {
    return (
      <form className="page-title" onSubmit={this.handleAddItem}>

          <legend>Add More Items
              <div className="row">
              <div className="small-4 columns">
                <div className="small-3 columns">
                  <label className="right inline">Name</label>
                </div>
                <div className="small-9 columns">
                  <input type="text" id="reqBy" required ref="reqBy" placeholder="RequiredBy"></input>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="small-4 columns">
                <div className="small-3 columns">
                  <label className="right inline">Items</label>
                </div>
                <div className="small-9 columns">
                  <input type="text" id="items" ref="items" placeholder="Items"></input>
                </div>
              </div>

             
              <div className="small-4 columns">
                    <div className="small-9 columns">
                      <input type="text" id="amt" required ref="amt" placeholder="Amount"></input>
                    </div>
                </div>
            
              <div className="small-4 columns">
                  <label>
                    <select className="small-12 columns" id="quant" ref="quant">
                        <option defaultValue value="grams">g
                        </option>
                        <option value="kilograms">Kg
                        </option>
                        <option value="ml">ml
                        </option>
                        <option value="litres">L
                        </option>
                        <option value="units">units
                        </option>
                    </select>
                  </label>
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
