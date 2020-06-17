import React, { Component, Fragment } from 'react';
import Faker from 'faker/locale/en_IND';
import FakerComponent from './Component/Faker/Faker.component';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // console.log(fakedata);
    return (
      <Fragment>
        <div>
          <h1>
            <FakerComponent />
          </h1>
        </div>
      </Fragment>
    );
  }
}

export default App;
