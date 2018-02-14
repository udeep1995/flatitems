import firebase,{firebaseRef} from 'index';
module.exports = {
    getItems: function(){
      return new Promise((resolve, reject) => {
        firebaseRef.child('items').once('value').then((snapshot) => {
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
    }
}
