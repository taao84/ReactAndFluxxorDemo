define(['LocationActions'], function(LocationActions) {

  var _pushProperties = function(target, source) {
    for (propertyName in source) {
      target[propertyName] = source[propertyName];
    }
  };
  
  var AppFluxActions = {};
  _pushProperties(AppFluxActions, LocationActions);
  // _pushProperties(AppFluxActions, TodoActions);

  return AppFluxActions;
});
