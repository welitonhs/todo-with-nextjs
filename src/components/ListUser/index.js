import React from 'react';
import Link from 'next/link';

const ListUser = ({ username }) => (
  <div>
    <Link href="/user/[username]" as={`/user/${username}`}>
      <a>{username}</a>
    </Link>
  </div>
);

export default ListUser;
