import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useProvider } from '../../../context/AuthProvider';

export const CreateUser = () => {

    const navigate = useNavigate();

    const { loginUser, roles,createUser } = useProvider();

    const [user, setUser] = useState({
        correo: '',
        nombre: '',
        password: '',
        password_confirm: '',
        telefono: '',
        rolId: ''
    })

    const [error, setError] = useState('')


    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value });
        console.log({ [name]: value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try { 
            const { data } = await createUser(user.correo, user.nombre,user.password,user.telefono,user.rolId);
            console.log(data)
            // setUserContext(data);
            // navigate(`/${data.rol}`);
            navigate('/admin');
        } catch (e) {
            setError(e);
            console.log(e)
        }
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
            <div className="w-full h-full h-100% scrollBehavior-unset">
                <div className="container mx-auto px-4 h-full">
                    <div className="flex content-center items-center justify-center h-full">
                        <div className="relative flex flex-col min-w-0 break-words mb-6  ">
                            <div className="g-6 flex h-full flex-wrap bg-custom-celeste items-center justify-center text-neutral-800 px-5 shadow-lg rounded-lg border-0">
                                <div className="p-10 ">
                                    <div className="text-center">
                                        <h2 className="mb-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Crear cuenta</h2>
                                    </div>
                                    {
                                        error && <p className="mb-8 px-2 py-6 rounded-md flex h-10 items-center justify-center bg-custom-warning text-sm font-medium text-custom-blue">Por favor rellene correctamente los campos.</p>
                                    }
                                    <form onSubmit={handleSubmit}>
                                        <div className="relative mb-6" data-te-input-wrapper-init>
                                            <p className='text-xs mb-1'>Email</p>
                                            <input
                                                type="email"
                                                name='correo'
                                                placeholder='username@gmail.com'
                                                className="peer block w-full rounded-full border-0 px-3 py-[0.32rem] leading-[2.15] outline-none"
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className="relative mb-6" data-te-input-wrapper-init>
                                            <p className='text-xs mb-1'>Username</p>
                                            <input
                                                type="text"
                                                name='nombre'
                                                placeholder='username'
                                                className="peer block w-full rounded-full border-0 px-3 py-[0.32rem] leading-[2.15] outline-none"
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className="relative mb-6" data-te-input-wrapper-init>
                                            <p className='text-xs mb-1'>Password</p>
                                            <input
                                                type="password"
                                                name='password'
                                                placeholder='********'
                                                className="peer block w-full rounded-full border-0 px-3 py-[0.32rem] leading-[2.15] outline-none"
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className="relative mb-6" data-te-input-wrapper-init>
                                            <p className='text-xs mb-1'>Repite password</p>
                                            <input
                                                type="password"
                                                name='password_confirm'
                                                placeholder='********'
                                                className="peer block w-full rounded-full border-0 px-3 py-[0.32rem] leading-[2.15] outline-none"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="relative mb-6" data-te-input-wrapper-init>
                                            <p className='text-xs mb-1'>Telefono</p>
                                            <input
                                                type="text"
                                                name='telefono'
                                                placeholder='+591 00000000'
                                                className="peer block w-full rounded-full border-0 px-3 py-[0.32rem] leading-[2.15] outline-none"
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className="relative mb-4" >
                                            <select className="block px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                                                onChange={handleChange}
                                                name="rolId">
                                                <option value="">
                                                    Seleccione
                                                </option>
                                                {
                                                    roles.map(({ id, nombre }) => (
                                                        <option key={id} value={`${id}`}>
                                                            {transformRole(nombre)}
                                                        </option>
                                                    ))
                                                }
                                            </select>
                                        </div>

                                        <button
                                            type="submit"
                                            className="inline-block rounded-full bg-custom-rose text-custom-blue w-full rounded bg-custom-celeste-variant px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca]"
                                        >
                                            Crear cuenta
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}