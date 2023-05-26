import { Link } from 'react-router-dom';

import {
    AiOutlineUser,
    AiOutlineFieldTime
} from "react-icons/ai";

import {
    BiPackage,
} from "react-icons/bi";

import {
    GiMedicines,
} from "react-icons/gi";

export const Patient = ({ selected }) => {
    return (
        <>
            <li className="mb-2">
                <Link to="/patient/perfil" className="flex text-xl py-2 px-4 rounded hover:bg-custom-green w-full ">
                    <AiOutlineUser className="mr-4 mb-0 mt-1 text-custom-blue" />
                    <span className="text-white">PERFIL</span>
                </Link>
            </li>

            <li className="mb-2">
                <Link to="/patient/services" className="flex text-xl py-2 px-4 rounded hover:bg-custom-green w-full ">
                    <AiOutlineUser className="mr-4 mb-0 mt-1 text-custom-green" />
                    <span className="text-white">SERVICIOS</span>
                </Link>
            </li>

            <li className="mb-2">
                <Link to="/patient/quote" className="flex text-xl py-2 px-4 rounded hover:bg-custom-green w-full ">
                    <AiOutlineUser className="mr-4 mb-0 mt-1 text-custom-green" />
                    <span className="text-white">RESERVAR CITA</span>
                </Link>
            </li>

            <li className="mb-2">
                <Link to="/patient/odontogram" className="flex text-xl py-2 px-4 rounded hover:bg-custom-green w-full ">
                    <AiOutlineUser className="mr-4 mb-0 mt-1 text-custom-green" />
                    <span className="text-white">ODONTOGRAMA</span>
                </Link>
            </li>

        </>
    )
}


{/* <li className="mb-2">
                                <Link to='/admin/invoice' className={`flex text-xl py-2 px-4 rounded ${selected === "/admin/invoice" ? 'bg-custom-green' : 'hover:bg-custom-green w-full'} `}>
                                    <TbFileInvoice className={`mr-4 mb-0 mt-1  ${selected === "/admin/invoice" ? "text-custom-blue" : "text-custom-green"}`} />
                                    <span className="text-white">FACTURACION</span>
                                </Link>
                            </li> */}