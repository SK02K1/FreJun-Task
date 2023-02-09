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
