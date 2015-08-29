define(['react-with-addons','JSXTransformer','AppDispatcher',
  'jsx!./components/Locations', 'jsx!./components/Counter', 'jsx!./components/FilteredList',
  'jsx!./components/Todo','jsx!./components/NavBar'],
  function(React, JSXTransformer, AppDispatcher, Locations, Counter, FilteredList,Todo,NavBar) {

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
    React.render(<Locations flux={AppDispatcher.flux}
      loadingIcon="./scripts/images/loadingIcon.gif"
      errorIcon="./scripts/images/error-icon.jpg"
      sucessfulIcon="./scripts/images/happy-tomato.jpg" />,
      document.getElementById("mount-point2"));

    React.render(<Counter />, document.getElementById('mount-point1'));
    React.render(<FilteredList />, document.getElementById('mount-point3'));
    React.render(<Todo flux={AppDispatcher.flux} />, document.getElementById("mount-point5"));
  };

  return App;
});
