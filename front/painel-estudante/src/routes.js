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
            <Route path='/' element={<Login />} />
            <Route path='/sign-up' element={<SignUp />} />
                <Route path='/main' element={<Main />} />
            <Route element={<PrivateRoutes redirectTo={'/'} />}>
            </Route>
        </Routes>
    )
}

export default routes;