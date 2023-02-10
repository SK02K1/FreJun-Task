import TableContainer from '@mui/material/TableContainer';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import { usersTableHeadEntries } from 'constants';
import { Avatar } from 'components';

export const UsersTable = ({ users }) => {
  if (!users) {
    return null;
  }
  return (
    <TableContainer
      sx={{ height: 400, maxWidth: 640, mx: 'auto' }}
      component={Paper}
    >
      <Table stickyHeader aria-label='users table'>
        <TableHead>
          <TableRow>
            {usersTableHeadEntries.map((entry) => {
              return (
                <TableCell
                  sx={{ background: '#f9fafb', color: '#475467' }}
                  key={entry}
                >
                  {entry}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => {
            const { id, firstName, lastName, age, gender, image, email } = user;
            const name = `${firstName} ${lastName}`;
            return (
              <TableRow key={id}>
                <TableCell
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Avatar imgSrc={image} />
                  <Box
                    component='span'
                    sx={{
                      ml: '12px',
                      fontSize: '1rem',
                      color: '#101828',
                    }}
                  >
                    {name}
                  </Box>
                </TableCell>
                <TableCell sx={{ fontSize: '1rem' }}>{email}</TableCell>
                <TableCell sx={{ fontSize: '1rem' }}>{age}</TableCell>
                <TableCell
                  sx={{ textTransform: 'capitalize', fontSize: '1rem' }}
                >
                  {gender}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
