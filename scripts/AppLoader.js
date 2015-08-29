require.config({
  paths: {
    "react-with-addons": "./scripts/3dparty/reactjs/0.13.3/react-with-addons",
    "JSXTransformer": "./scripts/3dparty/reactjs/0.13.3/JSXTransformer",
    "jsx": "./scripts/3dparty/requirejs-react-jsx/0.1.1/jsx",
    "text": "./scripts/3dparty/text/2.0.14/text",
    "flux": "./scripts/3dparty/2.0.2/Flux",
    "Fluxxor": "./scripts/3dparty/fluxxor/1.6.0/fluxxor",

    // App scripts
    "LocationActions": "./scripts/modules/locations/actions/LocationActions",
    "LocationStore": "./scripts/modules/locations/stores/LocationStore",
    "LocationConstants": "./scripts/modules/locations/actions/LocationConstants",
    "LocationActions": "./scripts/modules/locations/actions/LocationActions",
    "LocationsFetcher": "./scripts/modules/locations/utils/LocationsFetcher",

    "TodoActions": "./scripts/modules/todo/actions/TodoActions",
    "TodoStore": "./scripts/modules/todo/stores/TodoStore",
    "TodoConstants": "./scripts/modules/todo/actions/TodoConstants",

    "AppDispatcher": "./scripts/dispatcher/AppDispatcher",
    "AppFluxStores": "./scripts/dispatcher/AppFluxStores",
    "AppFluxActions": "./scripts/dispatcher/AppFluxActions"
  },
  shim : {
    "react": {
      "exports": "React"
    },
    "JSXTransformer": "JSXTransformer"
  },
  config: {
    jsx: {
      fileExtension: ".jsx",
      transformOptions: {
        harmony: true,
        stripTypes: false,
        inlineSourceMap: true
      },
      usePragma: false
    }
  }
});

require(['jsx!./scripts/components/App'], function(App) {
  var app = new App();
  app.init();
});
