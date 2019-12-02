import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import Proptypes from 'proptypes';

import ListUser from '../src/components/ListUser';

const Index = ({ members }) => (
  <>
    <ul>
      {members.map(member => (
        <li key={member.id}>
          <ListUser username={member.login} />
        </li>
      ))}
    </ul>
    <hr />
    <div>
      <Link href="/about" title="About Page">
        <a>About page</a>
      </Link>
    </div>
  </>
);

Index.getInitialProps = async () => {
  const res = await axios.get('https://api.github.com/orgs/rocketseat/members');

  return { members: res.data };
};

Index.propTypes = {
  members: Proptypes.string.isRequired,
};

export default Index;
