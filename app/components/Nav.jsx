var React = require ('react');
var {Link,IndexLink} = require('react-router');

var Nav = React.createClass({
  render:function (){
    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text text-decoration">Flat Items
                    </li>
                    <li>
                          <IndexLink to='/' activeClassName ="active" activeStyle = {{fontWeight : 'bold' }}>Home</IndexLink>
                    </li>
                    <li>
                          <Link to='about' activeClassName ="active" activeStyle = {{fontWeight : 'bold' }}>About</Link>
                    </li>
                    <li>
                          <Link to='last_order' activeClassName ="active" activeStyle = {{fontWeight : 'bold' }}>Last Order</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
  }
})
module.exports = Nav;
