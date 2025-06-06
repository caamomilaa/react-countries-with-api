import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../../pages/home/Home';

const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
