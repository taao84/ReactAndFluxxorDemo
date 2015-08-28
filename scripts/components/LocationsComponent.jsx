define(['Fluxxor','react-with-addons','JSXTransformer'],
  function(Fluxxor, React, JSXTransformer) {

  var FluxMixin = Fluxxor.FluxMixin(React),
      StoreWatchMixin = Fluxxor.StoreWatchMixin;

  var LocationsComponent = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin("LocationStore")],

    getStateFromFlux: function() {
      var flux = this.getFlux();
      return flux.store("LocationStore").getState();
    },

    componentDidMount() {
      this.getFlux().actions.fetchLocations();
    },

    onChange(state) {
      this.setState(state);
    },

    selectItem : function() {

    },

    render() {
      if (this.state.errorMessage) {
        return (<div>{this.state.errorMessage}</div>);
      }

      if (this.state.loading) {
        return (
          <div><img src="./scripts/images/loadingIcon.gif" /></div>
        )
      }

      var locations = this.state.locations;
      return (
        <ul>
          {
            Object.keys(locations).map(function(location) {
              return <li key={location}>{locations[location].name}</li>;
            })
          }
        </ul>
      );
    }
  });

  return LocationsComponent;
});
