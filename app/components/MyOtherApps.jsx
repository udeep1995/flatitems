var React = require('react');
var MyOtherApps = React.createClass({
    render: function() {
        return(
          <div className="container" style={
              {
                marginLeft:'30%',
                marginTop:'5%'

              }
        }>
           
            <div className="row">
                <a className="text-decoration" href="https://wtherapp.herokuapp.com">Weather App  </a> -  Basic React app to get weather details . 
            </div>
            <div className="row">
                <a className="text-decoration" href="https://toappdo.herokuapp.com">Todo App  </a> - Todo app to store to-dos . 
            </div>
            <div className="row">
                <a className="text-decoration" href="https://github.com/udeep1995/timer-countdown-app">Timer App</a> - Github repository link for timer app .
            </div>
            <div className="row">
                <a className="text-decoration" href="https://loginboilerplate.herokuapp.com/">Login Boilerplate App</a> - Boilerplate code for Login with OAuth firebase authentication using google or PhoneNumber . 
            </div>
            

          </div>
        )
    }
});

module.exports = MyOtherApps;