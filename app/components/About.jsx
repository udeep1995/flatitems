var React = require('react');
var About = React.createClass({
    render: function(){
        return(
          <div className="container" style={
              {
                marginLeft:'30%',
                marginTop:'5%'

              }
        }>
            <div className="row">
              The following tools are used -
            </div>
            <div className="row">
                <a className="text-decoration" href="https://reactjs.org/">React  </a> -  This javascript framework was used
            </div>
            <div className="row">
                <a className="text-decoration" href="https://firebase.google.com/">Firebase  </a> - This real time database was used to store data
            </div>
            <div className="row">
                <a className="text-decoration" href="https://github.com/udeep1995/flatitems">Github Repo</a> - Github repository link for this project.
            </div>
          </div>
        )
    }
});
module.exports = About;
