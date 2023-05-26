import { Navigate, Outlet } from 'react-router-dom';
import { useProvider } from '../../context/AuthProvider';

export const ProtectedRoute = ({ children }) => {
    const { getUser } = useProvider();

    const user = getUser();

    if (!user) {
        return <Navigate to='/' />
    }
     
    return children ? children : <Outlet />
}