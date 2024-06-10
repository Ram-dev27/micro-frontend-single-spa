import React from 'react';
import { navigateToUrl } from 'single-spa';
import { useLocation } from 'react-router-dom';

const SideMenu = () => {
  const location = useLocation();

  const getLinkClass = (path) => {
    if (path === '/') {
      return location.pathname === path 
        ? "text-black no-underline block p-2 ps-4 bg-gray-300" 
        : "text-black no-underline block p-2 ps-4 hover:bg-gray-200";
    }
    return location.pathname.startsWith(path) 
      ? "text-black no-underline block p-2 ps-4 bg-gray-300" 
      : "text-black no-underline block p-2 ps-4 hover:bg-gray-200";
  };

  return (
    <div className="w-[200px] h-full fixed bg-gray-100 box-border">
      <h4 className='text-center pt-2 fs-4 fw-bold'>Micro-frontend</h4>
      <ul className="list-none p-0">
        <li>
          <a href="/" onClick={navigateToUrl} className={getLinkClass('/')}>Home</a>
        </li>
        <li>
          <a href="/angular" onClick={navigateToUrl} className={getLinkClass('/angular')}>Angular</a>
        </li>
        <li>
          <a href="/react" onClick={navigateToUrl} className={getLinkClass('/react')}>React</a>
        </li>
      </ul>
      <div className='absolute bottom-[10px] border-2 border-red-500 w-full text-center text-red-400 bg-white'>Built in react</div>
    </div>
  );
};

export default SideMenu;
