import { useMemo, useState } from 'react';
import { Navbar, Spinner, UsersTable, Error, Search } from 'components';
import { useAxios, useDebounceValue } from 'hooks';
import { searchUsersByQuery } from 'libs';

export const Users = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounceValue(searchQuery, 600);
  const { data, isPending, error } = useAxios(`https://dummyjson.com/users`);

  const users = useMemo(
    () => searchUsersByQuery(data?.users, debouncedSearchQuery),
    [data, debouncedSearchQuery]
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
