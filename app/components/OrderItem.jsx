var React =  require('react');

var OrderItem = React.createClass({
    handleOnclick: function(e) {
     
        var it=0;
        for(it=0; it< e.target.parentNode.children.length; it++) {
            e.target.parentNode.children[it].classList.remove('highlight');
        }
        e.target.classList.add('highlight');
        var orderId = e.target.getAttribute('data');
        if (orderId) {
            this.props.onShowOrderDetails(orderId);
        }
    },
    render: function() {
        var {order} = this.props;
        return (
            <div className="btn small-12" onClick = {this.handleOnclick} data={order}>{order}</div>
        )
    }
});

module.exports = OrderItem;