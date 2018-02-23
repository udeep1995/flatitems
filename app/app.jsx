var React = require('react');
var ReactDOM = require('react-dom');
var {Route,Router,IndexRoute,hashHistory} = require('react-router');
var Main = require('Main');
var FlatApp = require('FlatApp');
var About = require('About');
var LastOrder = require('LastOrder');
// import './../playground/firebase/index';
//Load foundation
require('style-loader!css-loader!foundation-sites/dist/foundation.min.css');
require('style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css');
$(document).foundation();
require('!style-loader!css-loader!applicationStyles');
ReactDOM.render(
  <Router history = {hashHistory}>
    <Route path="/" component = {Main}>
        <IndexRoute component = {FlatApp}></IndexRoute>
        <Route path= 'about' component= {About}></Route>
        <Route path= 'last_order' component= {LastOrder}></Route>
    </Route>
  </Router>
  , document.getElementById('app'));
