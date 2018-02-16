var React = require('react');
var Nav = require('Nav');
var Main = React.createClass({
  render: function() {
    return (
        <div>
           <Nav></Nav>
           <div className="container">
                {this.props.children}
           </div>
         </div>
       )
  }
})

module.exports = Main;
