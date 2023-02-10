import { Navbar, Spinner, UsersTable, Error } from 'components';
import { useAxios } from 'hooks';

export const Users = () => {
  const { data, isPending, error } = useAxios(`https://dummyjson.com/users`);
  const users = data?.users;
  return (
    <div>
      <Navbar />
      <Spinner loading={isPending} />
      <Error error={error} message='Failed to fetch users' />
      <UsersTable users={users} />
    </div>
  );
};
