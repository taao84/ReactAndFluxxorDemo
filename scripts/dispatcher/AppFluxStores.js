define(['LocationStore', 'TodoStore'], function(LocationStore, TodoStore) {

  var location =  new LocationStore();
  var todo =  new TodoStore();
  var AppFluxStores = {
    LocationStore : location,
    TodoStore : todo
  };

  return AppFluxStores;
});
