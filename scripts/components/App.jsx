define(['react-with-addons','JSXTransformer','AppDispatcher',
  'jsx!./Locations', 'jsx!./Counter', 'jsx!./FilteredList',
  'jsx!./Todo','jsx!./NavBar'],
  function(React, JSXTransformer, AppDispatcher, Locations, Counter, FilteredList,Todo,NavBar) {

  var App = function() {};

  App.prototype.init = function () {
    React.render(<NavBar />,
      document.getElementById("navBar-mount-point"));
    React.render(<Counter />, document.getElementById('mount-point1'));
    React.render(<FilteredList />, document.getElementById('mount-point2'));
    React.render(<Locations flux={AppDispatcher.flux}
      loadingIcon="./scripts/images/loadingIcon.gif"
      errorIcon="./scripts/images/error-icon.jpg"
      sucessfulIcon="./scripts/images/happy-tomato.jpg" />,
      document.getElementById("mount-point3"));
    React.render(<Todo flux={AppDispatcher.flux} />, document.getElementById("mount-point4"));
  };

  return App;
});
