import './index.css';

export const Error = ({ error, message }) => {
  if (!error) {
    return null;
  }
  return <p className='msg-error'>{message}</p>;
};
