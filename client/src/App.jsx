import { Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';

import {
  HeaderNavigation,
  VerticalNavigation
} from './components/navigation';

import {
  LoginForm,
  RegisterForm
} from './components/home';

import {
  ListUsers,
  ListBooks
} from './components/admin';

import { AccessNotAuthorized } from './components/utils/AccessNotAuthorized';

import {
  ProtectedHome,
  ProtectedRoute,
  ProtectedRedirect
} from './router';

import { CreateUser } from './components/admin/pages/CreateUser';

/**
 * 
 *  roles:
 *    
 *  admin
 *       odontogist
 *                 patient
 */

export const App = () => {
  return (
    <>
      <AuthProvider>
        <Routes>

          {/* <Route element={<ProtectedHome />}> */}
          <Route path='/' element={<HeaderNavigation />} >
            <Route path='/login' element={<LoginForm />} />
            {/* <Route path='/register' element={<RegisterForm />} /> */}
            <Route path='/' element={<Navigate to='/login' />} />
          </Route>
          {/* </Route> */}

          {/* <Route element={<ProtectedRoute />}> */}
          {/* <Route element={<ProtectedRedirect redirectTo='/redirect' rol='admin' />}> */}
          <Route path='/admin' element={<VerticalNavigation />} >
            <Route path='/admin/home' element={''} />
            <Route path='/admin/users' element={<ListUsers />} />
            <Route path='/admin/books' element={<ListBooks/>} />
            <Route path='/admin/sales' element={''} />
            <Route path='/admin/shopping' element={''} />
            <Route path='/admin/' element={<Navigate to='/admin/users' />} />
          </Route>
          {/* </Route> */}
          {/* </Route> */}

          {/* <Route element={<ProtectedRoute />}> */}
          <Route path='/redirect' element={<AccessNotAuthorized />} />
          <Route path='/admin/users/createuser' element={<CreateUser />} />

          {/* </Route> */}

        </Routes>
      </AuthProvider>
    </>
  )
}
