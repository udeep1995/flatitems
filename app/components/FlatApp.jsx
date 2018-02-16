var React = require('react');
var Basket = require('Basket');
var AddItems = require('AddItems');
var ItemsApi = require('ItemsApi');
import firebase, {firebaseRef} from 'index';
var FlatApp = React.createClass({
  getInitialState: function() {
    return {isLoaded: false, orderId: undefined, items: []}
  },
  handleNewOrder: function() {
    var orderRef = undefined;
    if (!this.state.orderId) {
      var newOrder = {
        isOrdered: false,
        items: []
      }
      orderRef = firebaseRef.child('orders').push(newOrder);
      this.setState({orderId: orderRef.key})
    }
    return orderRef;
  },
  handleDelItem: function(id) {
    var items = this.state.items;
    if (id && items) {
      items = items.filter((item) => {
        if (item.id !== id)
          return item;
        }
      )
      firebaseRef.child(`orders/${this.state.orderId}/items/${id}`).set(null);
      this.setState({items: items})
    }
  },
  handleAddItems: function(item) {

    var orderRef = this.handleNewOrder();
    var currOrder = orderRef
      ? orderRef.key
      : this.state.orderId;
    var itemRef = firebaseRef.child(`orders/${currOrder}/items`).push(item);
    this.setState({
      items: [
        ...this.state.items, {
          id: itemRef.key,
          ...item
        }
      ]
    })
  },
  render: function() {
    if (this.state.isLoaded) {
      return (<div >
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="locahost:3000">Flat Items</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="locahost:3000">Home
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Examples</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <Basket onDelItem={this.handleDelItem} items={this.state.items}></Basket>
          <AddItems onAddItems={this.handleAddItems}></AddItems>
        </div>
      </div>)
    } else {
      ItemsApi.getCurrentOrder().then((orderId) => {
        if (orderId === -1) {
          this.setState({isLoaded: true, items: []})
        } else {
          this.setState({orderId: orderId});
          ItemsApi.getItems(this.state.orderId).then((fromResolve) => {
            this.setState({isLoaded: true, items: fromResolve})
          })
        }
      });
    }
    return (<div>
      <h1 style={{
          marginLeft: '40%',
          marginTop: '20%'
        }}>
        Loading...
      </h1>
    </div>)
  }
})
module.exports = FlatApp;
