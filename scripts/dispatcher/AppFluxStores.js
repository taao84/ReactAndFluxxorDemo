define(['LocationStore'], function(LocationStore) {

  var location =  new LocationStore();
  var AppFluxStores = {
    LocationStore: location
  };

  return AppFluxStores;
});
