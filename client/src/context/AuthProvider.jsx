import axios from 'axios';

import {
  createContext,
  useContext,
  useEffect,
  useState
} from 'react';

export const authContext = createContext();

export const useProvider = () => {
  const context = useContext(authContext);
  return context;
}

export const AuthProvider = ({ children }) => {

  const [loading, setLoading] = useState(true);

  const baseURL = process.env.NODE_ENV === 'production' ? 'api' : 'https://si1libreria-production.up.railway.app/api';

  const api = axios.create({
    baseURL,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });

  const convertToJSONString = (obj) => {
    return JSON.stringify(obj);
  }

  const loginUser = async (username, password) => {
    const obj = {
      correo: username,
      password: password
    }
    return api.post('/auth/login', convertToJSONString(obj));
  }

  const createUser = async (correo, nombre,password,telefono,rolId) => {
    const obj = {
      correo: correo,
      nombre: nombre,
      password: password,
      telefono: telefono,
      rolId: rolId
    }
    return api.post('/usuario', convertToJSONString(obj));
  }

  // const logout = () => {
  //   localStorage.removeItem("user");
  // }

  // const setUserContext = (user) => {
  //   localStorage.setItem("user", JSON.stringify(user));
  // }

  const getUser = () => {
    const userJSON = localStorage.getItem("user");
    const user = JSON.parse(userJSON);
    let transform;

    if (user.role.nombre === 'ADMIN_ROL') {
      transform = { ...user, role: { nombre: 'admin' } }
    }

    if (user.role.nombre === 'CLIENT_ROL') {
      transform = { ...user, role: { nombre: 'client' } }
    }
    return transform;
  }


  /**
   * admin
   */

  const [users, setUsersList] = useState([]);
  const [books, setBook] = useState([]);
  const [loadingBooks, setLoadingBooks] = useState(true);
  const [roles,setRoles] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);


  const getAllUsers = async () => {
    const { data } = await api.get('/usuario');
    setUsersList(data.usuarios);
    setLoadingUsers(false);
  }

  const getAllRoles = async() =>{
    const { data } = await api.get('/usuario/roles');
    setRoles(data.roles);
  }

  const getAllBooks = async() =>{
    const { data } = await api.get('/libro');
    setBook(data.usuarios);
    setLoadingBooks(false);
  }

  console.log(books);

  useEffect(() => {
    getAllUsers()
    getAllRoles()
    getAllBooks()
    // if (getUser()) {
    //   setLoading(false);
    //   getAllUsersAdmin();
    // } else {
    //   setLoading(true);
    // }
    // console.log('user',getUser());
    // console.log('loading',loading);
  }, []);

  return (
    <authContext.Provider
      value={{
        loginUser,
        loading,
        // setUserContext,
        // getUser,
        users,
        // logout,
        roles,
        loadingUsers,
        createUser,
        books,
        loadingBooks
      }}
    >
      {children}
    </authContext.Provider>
  )
}
