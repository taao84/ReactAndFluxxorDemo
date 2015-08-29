define(['Fluxxor','react-with-addons','JSXTransformer'],
  function(Fluxxor, React, JSXTransformer) {

  /** @jsx React.DOM */
  var Counter = React.createClass({
    incrementCount: function(){
      this.setState({
        count: this.state.count + 1
      });
    },
    getInitialState: function(){
       return {
         count: 0
       }
    },
    render: function(){
      return (
        <div className="panel panel-primary">
          <div className="panel-body">
            <h1>Count: {this.state.count}</h1>
            <button type="button" onClick={this.incrementCount}>Increment</button>
          </div>
        </div>
      );
    }
  });

  return Counter;
});
