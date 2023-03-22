import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <div>
      <img className='block m-auto mt-4 w-60' src='assets/images/pokemanlogo.png' />
      <div className="container mx-auto mt-10 px-4 bg-slate-200 rounded-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="lg:flex lg:gap-x-5">
            <Link to="/" className="text-sm font-semibold leading-6 text-gray-900">
              Home
            </Link>
            <Link to="/pokeBlog" className="text-sm font-semibold leading-6 text-gray-900">
                Discussion Board
              </Link>
          </div>
          {Auth.loggedIn() ? (
            <>
              <Link to="/me" className="mx-3 text-sm font-semibold leading-6 text-gray-900">
                Dashboard
              </Link>
              <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <a onClick={logout} className="text-sm font-semibold leading-6 text-gray-900">
                  Logout <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </>
          ) : (
            <>
              <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <Link to="/login" className="text-sm font-semibold leading-6 text-gray-900">
                  Log in <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Header;
