import { Navbar, Spinner, UsersTable } from 'components';
import { useAxios } from 'hooks';

export const Users = () => {
  const { data, isPending, error } = useAxios(`https://dummyjson.com/users`);
  const users = data?.users;
  return (
    <div>
      <Navbar />
      <Spinner loading={isPending} />
      <UsersTable users={users} />
      {error && <p className='msg-error'>Failed to fetch users</p>}
    </div>
  );
};
