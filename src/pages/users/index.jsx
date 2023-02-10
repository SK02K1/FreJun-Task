import { useMemo, useState } from 'react';
import { Navbar, Spinner, UsersTable, Error, Search } from 'components';
import { searchUsersByQuery } from 'libs';
import { useAxios } from 'hooks';

export const Users = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { data, isPending, error } = useAxios(`https://dummyjson.com/users`);

  const users = useMemo(
    () => searchUsersByQuery(data?.users, searchQuery),
    [data, searchQuery]
  );

  return (
    <div>
      <Navbar />
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Spinner loading={isPending} />
      <Error error={error} message='Failed to fetch users' />
      <UsersTable users={users} />
    </div>
  );
};
