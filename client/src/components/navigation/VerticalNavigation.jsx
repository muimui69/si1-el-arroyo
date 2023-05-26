import {
    BiLogOut
} from "react-icons/bi";

import avatar from '../../assets/img/avatar.png';

import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { LogoutModal } from '../utils/LogoutModal';
import { useProvider } from "../../context/AuthProvider";

import { Admin, Odontologist } from "./options";

export const VerticalNavigation = () => {

    const [selected, setSelected] = useState('');
    const location = useLocation();

    // const { logout, getUser } = useProvider();
    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);

    const handleRute = () => {
        setSelected(location.pathname);
    }

    const handleLogout = () => {
        setShowModal(true);
    }

    const handleCancel = () => {
        setShowModal(false);
    }

    const handleOk = () => {
        // logout();
        navigate('/');
    }


    const switchOptions = (rol, selected) => {
        switch (rol) {
            case 'admin':
                return <Admin selected={selected} />
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        handleRute();
    }, [location]);


    return (
        <>
            <div className="bg-gray-100 min-h-screen flex">
                <aside className="overflow-hidden bg-custom-grey text-gray-300 flex-shrink-0 w-64 flex flex-col justify-between">
                    <div>
                        <div className="mb-12 mt-12 text-xl font-bold mb-4 mt-5 ml-4">
                            <a href="#" className="-m-1.5 p-1.5 flex tems-center justify-center">
                                <img className="h-20 w-auto mr-2" src={avatar} alt="" />
                            </a>
                        </div>

                        <nav>
                            <ul>
                                {/* {switchOptions(getUser().rol, selected)} */}
                                {switchOptions('admin', selected)}
                            </ul>
                        </nav>
                    </div>

                    <div className="p-4 pt-0 mb-3">
                        <p className='text-black mb-2 px-2'>Erick uwu </p>
                        <button
                            onClick={handleLogout}
                            className="flex text-xp py-2 bg-white px-4 rounded hover:bg-custom-celeste w-full"
                        >
                            <BiLogOut className="mr-4 mb-0 mt-1 text-black" />
                            <span className="text-black">SALIR</span>
                        </button>
                    </div>
                </aside>
                <Outlet />
            </div>

            {
                showModal && <LogoutModal handleCancel={handleCancel} handleOk={handleOk} />
            }
        </>
    )
}

