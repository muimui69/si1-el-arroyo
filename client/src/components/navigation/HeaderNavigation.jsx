import avatar from '../../assets/img/avatar.png';
import { Outlet } from 'react-router-dom';

export const HeaderNavigation = () => {

    return (
        <>
            <header>
                <nav className='bg-custom-celeste mx-auto flex p-3' >
                    <img className='h-16 w-auto ' src={avatar} alt='' />
                </nav>
            </header>
            <Outlet />
        </>
    )
}