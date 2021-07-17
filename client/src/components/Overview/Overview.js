import React from 'react';
import { List, ListItem } from '../index';
import './overview.scss';

const Overview = ({ data }) => {
  const {
    age,
    email,
    phone,
    firstName,
    lastName,
    location,
    quote,
    maritalStatus,
    occupation,
    hobbies,
  } = data;
  return (
    <div>
      <img
        className="overview__img img-fluid"
        src="http://placehold.it/160x160"
        alt="profile pic"
      />
      <h1 className="overview__title h4 text-center">
        {firstName} {lastName}
      </h1>
      <p className="text-center">{occupation}</p>
      <List>
        <ListItem label="Age">{age}</ListItem>
        <ListItem label="Residing State">{location}</ListItem>
        <ListItem label="Marital Status">{maritalStatus}</ListItem>
        <ListItem label="Email">{email}</ListItem>
        <ListItem label="Phone Number">{phone}</ListItem>
      </List>

      <div className="quote text-center mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="36px"
          viewBox="0 0 24 24"
          width="36px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
        </svg>
        <p>
          <em>{quote}</em>
        </p>
      </div>

      <div className="overview__hobbies">
        {hobbies &&
          hobbies.map((hobby, key) => (
            <span key={key} className="badge rounded-pill bg-primary">
              {hobby}
            </span>
          ))}
      </div>
    </div>
  );
  // return (
  //   <div className="overview">
  //     {/* <img
  //       className="overview__img img-fluid"
  //       src={picture.large}
  //       alt="profile pic"
  //     /> */}

  //     <h1 className="overview__title h4 text-center">
  //       {firstName} {lastName}
  //     </h1>
  //     <p></p>

  //     <h4>Demographics</h4>
  //     <ul>
  //       <li>
  //         <strong>Age:</strong>
  //       </li>
  //       <li></li>
  //     </ul>
  //   </div>
  // );
};

export default Overview;
