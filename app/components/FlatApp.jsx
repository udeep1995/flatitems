var React = require('react');
var Basket = require('Basket');
var AddItems = require('AddItems');
var ItemsApi = require('ItemsApi');
import firebase, {firebaseRef} from 'index';
var FlatApp = React.createClass({
  getInitialState: function(){
    return {
      isLoaded: false
    }
  },
  componentWillMount: function() {
    this.setState({
      items:[]
    })
  },
    handleAddItems: function(item){
    var itemRef = firebaseRef.child('items').push(item);
      this.setState({
            items:[...this.state.items,
            {
              id: itemRef.key,
              ...item
            }
          ]
      })
    },
    render : function(){
      if(this.state.isLoaded){
        return (
          <div>
            <Basket items={this.state.items}></Basket>
            <AddItems onAddItems = {this.handleAddItems}></AddItems>
          </div>
        )
      }
      else{
        ItemsApi.getItems().then((fromResolve) => {
          this.setState({
            isLoaded: true,
            items: fromResolve
          })
        })
        return (
          <div>
              <h1 className="page-title column small-centered small-11 medium 6 large-5">
                    Loading...
              </h1>
          </div>
        )
      }
    }
})
module.exports = FlatApp;
