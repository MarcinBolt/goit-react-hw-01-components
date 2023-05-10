import { Fragment } from 'react';
import { Profile } from 'components/Profile/Profile';
import user from './Profile/user.json';
import { Statistics } from './Statistics/Statistics';
import data from './Statistics/data.json'

export const App = () => (
  // <div
  //   style={{
  //     height: '100vh',
  //     display: 'flex',
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     fontSize: 40,
  //     color: '#010101',
  //   }}
  // >
  //   React homework template
  // </div>

  <Fragment>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />

    <Statistics title="Upload stats" stats={data} />
    <Statistics stats={data} />

  </Fragment>
);
