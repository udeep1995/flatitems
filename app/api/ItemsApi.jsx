import firebase,{firebaseRef} from 'index';
module.exports = {
    getOrders: function () {
        return new Promise((resolve, reject) => {
          firebaseRef.child(`orders`).once(`value`).then((snapshot) => {
            var orders = snapshot.val() || {};
            var pastOrders = [];
            pastOrders = Object.keys(orders);
             resolve(pastOrders);
          });
        });
    },
    getDate: function(orderId) {
      return new Promise((resolve, reject) => {
        firebaseRef.child(`orders/${orderId}`).once('value').then((snapshot) => {
          var orders = snapshot.val() || {};
          var timestamp = orders.timestamp || -1; // sentinal value
          resolve(timestamp);
          // endof firebase promise
        });
      });
    },
    getItems: function(orderId){
        return new Promise((resolve, reject) => {
          firebaseRef.child(`orders/${orderId}/items`).once('value').then((snapshot) => {
            var items = snapshot.val() || {};
            var parsedItems = [];
            Object.keys(items).forEach((itemId) => {
              parsedItems.push({
                id: itemId,
                ...items[itemId]
              });
            });
            if(parsedItems){
              resolve(parsedItems);
            } else{
              reject();
            }
          });
        })
    },
    getCurrentOrder: function() {
      return new Promise ((resolve,reject) => {
        firebaseRef.child('orders').once('value').then((snapshot) => {
          var orders = snapshot.val() || {};
          var currOrderId = -1; // sentinal value
          Object.keys(orders).forEach((orderId) => {
            if(orders[orderId].isOrdered === false) {
              currOrderId = orderId
              return;
            }
            });
            resolve(currOrderId);
          })
        })
    },
    getLastOrderId: function() {
      return new Promise ((resolve,reject) => {
        firebaseRef.child('orders').once('value').then((snapshot) => {
          var orders = snapshot.val() || {};
           var lastOrderId = -1; // sentinal value
             Object.keys(orders).forEach((orderId) => {
              if(orders[orderId].isOrdered === true) {
                lastOrderId = orderId;
              }
              });
            resolve(lastOrderId);
          })
        })
    }
}
