define(['react-with-addons'], function(React) {
  var NavBar = React.createClass({
    render : function() {
      return (
        <div className="navbar navbar-inverse navbar-fixed-top">
          <div className="navbar-inner">
            <div className="container">
              <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="brand" href="#">Demo App - Reactjs, Fluxxor, Bootstrap</a>
              <div className="nav-collapse collapse">
                <ul className="nav">
                  <li className="active"><a href="index.html">Home</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    }
  });
})
