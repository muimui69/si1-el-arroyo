import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useProvider } from '../../../context/AuthProvider';
// import jwt from 'jsonwebtoken';


export const LoginForm = () => {

    const navigate = useNavigate();

    const { loginUser } = useProvider();

    const [user, setUser] = useState({
        username: '',
        password: '',
    })

    const [error, setError] = useState('')


    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const { data } = await loginUser(user.username, user.password);
            // jwt.verify(data.token,'M1LL4C3S3CR3TA@CR3AT913');
            console.log(data)
            // setUserContext(data);
            // navigate(`/${data.rol}`);
            navigate('/admin');
        } catch (e) {
            setError(e);
            console.log(e)
        }
    }

    return (
        <>
            <section className="absolute w-full h-full h-100% scrollBehavior-unset">
                <div className="container mx-auto px-4 h-full">
                    <div className="flex content-center items-center justify-center h-full">
                        <div className="relative flex flex-col min-w-0 break-words mb-6  ">
                            <div className="g-6 flex h-full flex-wrap bg-custom-celeste items-center justify-center text-neutral-800 px-5 shadow-lg rounded-lg border-0">
                                <div className="p-10 ">
                                    <div className="text-center">
                                        <h2 className="mb-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Iniciar sesion</h2>
                                    </div>
                                    {
                                        error && <p className="mb-8 px-2 py-6 rounded-md flex h-10 items-center justify-center bg-custom-warning text-sm font-medium text-custom-blue">Usuario o contraseña incorrectos.</p>
                                    }
                                    <form onSubmit={handleSubmit}>
                                        <div className="relative mb-6" data-te-input-wrapper-init>
                                            <p className='text-xs mb-1'>Correo o nombre de usuario</p>
                                            <input
                                                type="text"
                                                name='username'
                                                placeholder='username@gmail.com'
                                                className="peer block w-full rounded-full border-0 px-3 py-[0.32rem] leading-[2.15] outline-none"
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className="relative mb-4" data-te-input-wrapper-init>

                                            <p className='text-xs mb-1'>Contraseña</p>

                                            <input
                                                type='password'
                                                name='password'
                                                placeholder='******'
                                                className="peer block w-full rounded-full border-0 px-3 py-[0.32rem] leading-[2.15] outline-none"
                                                onChange={handleChange}
                                            />

                                            <Link to='/auth/recover'>
                                                <p className='text-xs mt-2 text-end'>Olvidaste tu contraseña? Recuperala</p>
                                            </Link>

                                        </div>

                                        <button
                                            type="submit"
                                            className="inline-block rounded-full bg-custom-rose text-custom-blue w-full rounded bg-custom-celeste-variant px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca]"
                                        >
                                            Iniciar sesion
                                        </button>

                                        <Link to='/auth/create-acount'>
                                            <p className='text-xs mb-1 mt-5  text-center'> No tienes cuenta? Create una cuenta nueva</p>
                                        </Link>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}