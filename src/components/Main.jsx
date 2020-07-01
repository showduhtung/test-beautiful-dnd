import React, { useState } from 'react';
import TeamCard from './TeamCard.jsx';
import Members from './Members.jsx';
import { App } from './codesandbox';

const dummyRoleData = [
  {
    name: 'Sermon Speakers',
    members: ['Tom Nook', 'John Doe', 'Jane Doe', 'Tendo Nook'],
  },
  {
    name: 'Pianists',
    members: ['Tom Nook', 'John Doe', 'Wells Doe', 'Michelle Nook'],
  },
  {
    name: 'Announcers',
    members: ['Ted Nook', 'John Doe', 'Jane Doe', 'Tendo Nook'],
  },
  {
    name: 'Senior Class Teachers',
    members: ['Isabel Nook', 'Ian Doe', 'Jane Doe', 'Tendo Nook'],
  },
];

const Main = () => {
  const [roles, setRoles] = useState(dummyRoleData);
  return (
    // <div
    //   style={{
    //     display: 'flex',
    //     flexDirection: 'row',
    //     justifyContent: 'space-around',
    //   }}
    // >
    //   <Members />
    //   <div style={{ float: 'right' }}>
    //     <TeamCard name={roles[0].name} members={roles[0].members} />
    //   </div>
    // </div>
    <App />
  );
};

export default Main;
