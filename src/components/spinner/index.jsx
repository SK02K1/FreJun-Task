import './index.css';
import { ClipLoader } from 'react-spinners';

const override = `
  display: block;
  margin: 0 auto;
`;

export const Spinner = ({ loading }) => {
  return (
    <div className='spinner'>
      <ClipLoader
        speedMultiplier={3}
        loading={loading}
        color={`#101828`}
        css={override}
        size={20}
      />
    </div>
  );
};
