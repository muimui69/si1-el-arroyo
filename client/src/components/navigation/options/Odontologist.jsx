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

export const Odontologist = ({ selected }) => {
    return (
        <>
            <li className="mb-2">
                <Link to="/odontologist/patients" className={`flex text-xl py-2 px-4 rounded ${selected === "/odontologist/patients" ? 'bg-custom-green' : 'hover:bg-custom-green w-full'} `}>
                    <AiOutlineUser className={`mr-4 mb-0 mt-1 ${selected === "/odontologist/patients" ? "text-custom-blue" : "text-custom-green"}`} />
                    <span className="text-white">PACIENTES</span>
                </Link>
            </li>

            <li className="mb-2">
                <Link to='/odontologist/quotes' className={`flex text-xl py-2 px-4 rounded ${selected === "/odontologist/quotes" ? 'bg-custom-green' : 'hover:bg-custom-green w-full'} `}>
                    <AiOutlineFieldTime className={`mr-4 mb-0 mt-1 ${selected === "/odontologist/quotes" ? "text-custom-blue" : "text-custom-green"}`} />
                    <span className="text-white">CITAS</span>
                </Link>
            </li>

            <li className="mb-2">
                <Link to='/odontologist/medicament' className={`flex text-xl py-2 px-4 rounded ${selected === "/odontologist/medicament" ? 'bg-custom-green' : 'hover:bg-custom-green w-full'} `}>
                    <GiMedicines className={`mr-4 mb-0 mt-1 ${selected === "/odontologist/medicament" ? "text-custom-blue" : "text-custom-green"}`} />
                    <span className="text-white">MEDICAMENTOS</span>
                </Link>
            </li>

            <li className="mb-2">
                <Link to='/odontologist/supplies' className={`flex text-xl py-2 px-4 rounded ${selected === "/odontologist/supplies" ? 'bg-custom-green' : 'hover:bg-custom-green w-full'} `}>
                    <BiPackage className={`mr-4 mb-0 mt-1 ${selected === "/odontologist/supplies" ? "text-custom-blue" : "text-custom-green"}`} />
                    <span className="text-white">SUMINISTROS</span>
                </Link>
            </li>
        </>
    )
}