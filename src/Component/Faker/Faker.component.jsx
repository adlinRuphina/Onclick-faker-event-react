import React, { Component, Fragment } from 'react';
import faker from 'faker/locale/en_IND';
class FakerComponent extends Component {
  state = {
    image: '',
    firstname: '',
    lastname: '',
    city: '',
    email: '',
    phoneNumber: '',
    country: '',
  };

  updateName = () => {
    this.setState({
      image: faker.image.avatar(),
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      city: faker.address.city(),
      email: faker.internet.email(),
      phoneNumber: faker.phone.phoneNumber(),
      country: faker.address.country(),
    });
  };

  render() {
    return (
      <Fragment>
        <img src={this.state.image} alt="test" />
        <div>
          {this.state.firstname} {this.state.lastname}
        </div>
        <p>{this.state.city}</p>
        <p>{this.state.email}</p>
        <p>{this.state.phoneNumber}</p>
        <p>{this.state.country}</p>
        <button
          className="btn btn-danger p-2 m-3"
          onClick={this.updateName.bind(this.updateName)}
        >
          click
        </button>
      </Fragment>
    );
  }
}

export default FakerComponent;
