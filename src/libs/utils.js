export const loginHandler = (username, password) => {
  const correctUsername = 'admin@frejun';
  const correctPassword = '12345678';

  if (username === correctUsername && password === correctPassword) {
    return { success: true, message: 'Successfully logged-in' };
  } else if (username === correctUsername && password !== correctPassword) {
    return { success: false, message: 'Wrong Password' };
  } else if (username !== correctUsername && password === correctPassword) {
    return { success: false, message: 'Wrong Username' };
  } else {
    return { success: false, message: 'Wrong Credentials' };
  }
};

export const searchUsersByQuery = (users, query) => {
  if (Array.isArray(users)) {
    if (query === '') {
      return users;
    }
    return users.filter((user) => {
      let { firstName, lastName, email } = user;
      query = query.toLowerCase().trim();
      firstName = firstName.toLowerCase();
      lastName = lastName.toLowerCase();
      email = email.toLowerCase();
      return (
        firstName.includes(query) ||
        lastName.includes(query) ||
        email.includes(query)
      );
    });
  }
};
