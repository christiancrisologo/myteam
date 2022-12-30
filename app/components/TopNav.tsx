import React from 'react';
import { NavLink } from "@remix-run/react";

type TopNavLinkProps = {
    to: any
}

const NavLinkItem: React.FC<TopNavLinkProps> = (props)   => {
    const { to, children} = props;
    const commonClassName = "flex text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium";
    const defaultClassName = `${commonClassName} hover:bg-gray-700`;
    const activeClassName = `${commonClassName}  hover:text-red-100  text-red-300`;

    return (<NavLink to={to} 
            className={({ isActive }) =>
                isActive ? activeClassName : defaultClassName
            }>
            {children}
     </NavLink>)
}
const Logo: React.FC = () => {
    return (
        <div className="flex-shrink-0 flex items-center">
        <NavLink to='/'> 
        <div className='flex items-center'>
            <img src="https://assets.2k.com/1a6ngf98576c/4hvwczkP71ziNNydQczzpv/9053398d9c1a9cae1a95dbfec37f7193/logo_2k22_s.png"
            className='mr-3 h-6 sm:h-9" alt="NBA2K22 Logo' alt="NBA2k22 logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">MyTeam</span>
        </div>
        </NavLink>
    </div>
    )
}
const RightSection: React.FC = () => {
    const [open, setOpen] = React.useState(false);

    return(
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <div className="ml-3 relative">
            <button type="button" 
                className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true"
                onClick={ () => setOpen(!open)}>
                <span className="sr-only">Developer Menu</span>
                <img className="h-8 w-8 rounded-full" src="https://avatars.githubusercontent.com/u/6817833?v=4" alt="" />
            </button>
            {
                open &&  (<div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={-1}>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-0">About Me</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-1">More</a>
                </div>)
            }
        </div>
    </div>
    )
}
const LeftSection : React.FC = () => {
    return(
        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <Logo />
                    <div className="hidden sm:block sm:ml-6 flex-1">
                        <div className="flex space-x-4 justify-end mr-10">
                            <NavLinkItem to='/' >Home</NavLinkItem>
                            <NavLinkItem to='/players' >Players</NavLinkItem>
                            <NavLinkItem to='/cards' >Cards</NavLinkItem>
                        </div>
                    </div>
        </div>
    )
}
const MenuButton: React.FC = () => {
    return (
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    )
}
const SmallScreenMenu : React.FC = () => {
    return(
        <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col">
            <NavLinkItem to='/' >Home</NavLinkItem>
            <NavLinkItem to='/players' >Players</NavLinkItem>
            <NavLinkItem to='/cards' >Cards</NavLinkItem>
        </div>
    </div>
    )
}

export default function TopNav (): React.ReactElement {
    return ( <nav className='dark:bg-slate-900 bg-slate-700 border-gray-700 px-5 w-full lg:px-8 py-2.5 '>
             <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <MenuButton />
                    <LeftSection />
                    <RightSection />
                </div>
            </div>
            <SmallScreenMenu />
        </nav>);
}

// export default function TopNav (): React.ReactElement {
    
//     return (<nav className='dark:bg-slate-900 bg-slate-700 border-gray-700 px-5 w-full lg:px-8 py-2.5 '>
//     <div className="flex flex-wrap justify-between items-center mx-auto flex-row">

//         <NavLink to='/'> 
//           <div className='flex items-center'>
//             <img src="https://assets.2k.com/1a6ngf98576c/4hvwczkP71ziNNydQczzpv/9053398d9c1a9cae1a95dbfec37f7193/logo_2k22_s.png"
//               className='mr-3 h-6 sm:h-9" alt="NBA2K22 Logo' alt="NBA2k22 logo" />
//               <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">MyTeam</span>
//           </div>
//         </NavLink>

//       </div>
//     </nav>
//     );
// };