// import { Link } from 'react-router-dom'
import { useProvider } from "../../../context/AuthProvider";
import { LoadingLayout } from '../../utils/LoadingLayout';
import { useNavigate } from "react-router-dom";

export const ListUsers = () => {

    const { users, loadingUsers } = useProvider();
    const navigate = useNavigate();

    const handleCreateUser = () => {
        navigate('/admin/users/createuser');
    }

    const transformRole = (role) => {
        switch (role) {
            case 'EMPLEADO_ROL':
                return 'Empleado'
                break;

            case 'ADMIN_ROL':
                return 'Admin'
                break;
            case 'CLIENTE_ROL':
                return 'Cliente'
                break;
            default:
                break;
        }
    }

    return (
        <>
            {
                (loadingUsers)
                    ? <LoadingLayout />
                    :
                    <div className="container overflow-auto max-w-4xl px-4 mx-auto sm:px-8">
                        <div className="py-8">
                            <div className="flex flex-row justify-between w-full mb-1 sm:mb-0">
                                <h2 className="text-2xl mb-10">
                                    Usuarios
                                </h2>
                                <div className="text-end">
                                    <button onClick={handleCreateUser} className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-custom-green  rounded-lg shadow-md " type="submit">
                                        Crear nuevo usuario
                                    </button>
                                </div>
                            </div>
                            <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8 ">
                                <div className="inline-block min-w-full overflow-hidden rounded-lg shadow ">
                                    <table className="min-w-full leading-normal">
                                        <thead>
                                            <tr >
                                                <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-custom-celeste border-b border-gray-200">
                                                    Id
                                                </th>
                                                <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-custom-celeste border-b border-gray-200">
                                                    Nombre
                                                </th>
                                                <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-custom-celeste border-b border-gray-200">
                                                    Email
                                                </th>
                                                <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-custom-celeste border-b border-gray-200">
                                                    Rol
                                                </th>
                                                <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-custom-celeste border-b border-gray-200">
                                                    Opciones
                                                </th>
                                            </tr>
                                        </thead>

                                        {
                                            users.map(({ id, nombre, correo, role }, index) => (
                                                <tbody key={id}>
                                                    <tr>
                                                        <td className={`px-5 py-5 text-sm ${index % 2 === 0 ? "bg-custom-grey" : "bg-white"} border-b border-gray-200`}>
                                                            <p className="text-gray-900 whitespace-no-wrap">
                                                                {id}
                                                            </p>
                                                        </td>
                                                        <td className={`px-5 py-5 text-sm ${index % 2 === 0 ? "bg-custom-grey" : "bg-white"} border-b border-gray-200`}>
                                                            <p className="text-gray-900 whitespace-no-wrap">
                                                                {nombre}
                                                            </p>
                                                        </td>
                                                        <td className={`px-5 py-5 text-sm ${index % 2 === 0 ? "bg-custom-grey" : "bg-white"} border-b border-gray-200`}>
                                                            <p className="text-gray-900 whitespace-no-wrap">
                                                                {correo}
                                                            </p>
                                                        </td>
                                                        <td className={`px-5 py-5 text-sm ${index % 2 === 0 ? "bg-custom-grey" : "bg-white"} border-b border-gray-200`}>
                                                            <p className="text-gray-900 whitespace-no-wrap">
                                                                {transformRole(role.nombre)}
                                                            </p>
                                                        </td>
                                                        <td className={`px-5 py-5 text-sm ${index % 2 === 0 ? "bg-custom-grey" : "bg-white"} border-b border-gray-200`}>
                                                            <div className="flex justify-start">
                                                                <div className='justify-between'>
                                                                    <button className="w-113 flex-shrink-0 px-2 py-2 mr-2 text-base font-semibold text-white bg-custom-red rounded-lg shadow-md -700 focus:outline-none" type="submit">
                                                                        Borrar
                                                                    </button>
                                                                    <button className="w-113 flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-custom-yellow rounded-lg shadow-md focus:outline-none" type="submit">
                                                                        Editar
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </td>

                                                    </tr>
                                                    {/* <tr>
                                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                1
                                            </p>
                                        </td>
                                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                juan peres
                                            </p>
                                        </td>
                                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                juan@ejemplo
                                            </p>
                                        </td>
                                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                admin
                                            </p>
                                        </td>
                                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                            <div className="flex justify-start">
                                                <div className='justify-between'>
                                                    <button className="w-113 flex-shrink-0 px-2 py-2 mr-2 text-base font-semibold text-white bg-custom-red rounded-lg shadow-md -700 focus:outline-none" type="submit">
                                                        Borrar
                                                    </button>
                                                    <button className="w-113 flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-custom-yellow rounded-lg shadow-md focus:outline-none" type="submit">
                                                        Editar
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr> */}
                                                </tbody>
                                            ))}

                                    </table>
                                    {/* <div className="flex flex-col items-center px-5 py-5 bg-white xs:flex-row xs:justify-between">
                                <div className="flex items-center">
                                    <button type="button" className="w-full p-4 text-base text-gray-600 bg-white border rounded-l-xl hover:bg-gray-100">
                                        <svg width="9" fill="currentColor" height="8" className="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z">
                                            </path>
                                        </svg>
                                    </button>
                                    <button type="button" className="w-full px-4 py-2 text-base text-indigo-500 bg-white border-t border-b hover:bg-gray-100 ">
                                        1
                                    </button>
                                    <button type="button" className="w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100">
                                        2
                                    </button>
                                    <button type="button" className="w-full px-4 py-2 text-base text-gray-600 bg-white border-t border-b hover:bg-gray-100">
                                        3
                                    </button>
                                    <button type="button" className="w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100">
                                        4
                                    </button>
                                    <button type="button" className="w-full p-4 text-base text-gray-600 bg-white border-t border-b border-r rounded-r-xl hover:bg-gray-100">
                                        <svg width="9" fill="currentColor" height="8" className="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                            </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}