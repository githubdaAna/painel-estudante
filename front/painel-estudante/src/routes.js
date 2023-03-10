import { Route, Routes, Outlet, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Main from './pages/Main';

import { getItem } from './utils/storage';

const routes = () => {
    function PrivateRoutes({ redirectTo }) {
        const token = getItem('token');

        return token ? <Outlet /> : <Navigate to={redirectTo} />
    }

    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route element={<PrivateRoutes redirectTo={'/login'} />}>
                <Route path='/main' element={<Main />} />
            </Route>
        </Routes>
    )
}

export default routes;