import 'App.css';
import { Routes, Route } from 'react-router-dom';
import { Home, Login, Users } from 'pages';
import { RequiresAuth } from 'components';

export const App = () => {
  return (
    <div className='App'>
      <Routes>
        {/* Public Routes */}
        <Route path='/login' element={<Login />} />
        {/* Private Routes */}
        <Route element={<RequiresAuth />}>
          <Route index element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<Users />} />
        </Route>
      </Routes>
    </div>
  );
};
