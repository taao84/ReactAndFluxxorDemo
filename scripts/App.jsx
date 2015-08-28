define(['react-with-addons','JSXTransformer','AppDispatcher', "jsx!./components/LocationsComponent"],
  function(React, JSXTransformer, AppDispatcher, LocationsComponent) {

  var loadingIcon = "";

  var App = function() {
    this.AppView = React.createClass({
      render: function () {
        return (
          <div>asdas sdfbsdfbbjhsdfjsd</div>
        );
      }
    });
  };

  App.prototype.init = function () {
    React.render(<LocationsComponent flux={AppDispatcher.flux} loadingIcon="{}" />,
      document.getElementById("mount-point1"));
  };

  return App;
});
