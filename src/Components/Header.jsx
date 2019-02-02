import React, { Component } from "react";
class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="pt-4 bg-light " id="header">
          <div className="container h-100">
            <div className="row h-75">
              <div className="col-md-2" />
              <div className="col-md-8 align-self-center" id="searchBar">
                <h1 className="my-4">Github API</h1>
                <form action="" className="form-inline">
                  <input
                    type="search"
                    className="form-control mr-sm-2 w-100"
                    placeholder="Your github username eg. abhagsain"
                  />
                </form>
              </div>
              <div className="col-2 mr-0  " />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
