import React from 'react';
import './overview.scss';

const Overview = ({ dob, email, gender, location, name, phone, picture }) => {
  return (
    <div className="overview">
      <img
        className="overview__img img-fluid"
        src={picture.large}
        alt="profile pic"
      />

      <h1 className="overview__title h4 text-center">
        {name.first} {name.last}
      </h1>
      <p></p>

      <h4>Demographics</h4>
      <ul>
        <li>
          <strong>Age:</strong> {dob.age}
        </li>
        <li>
          <strong>Location:</strong> {location.city}, {location.state}
        </li>
      </ul>
    </div>
  );
};

export default Overview;
