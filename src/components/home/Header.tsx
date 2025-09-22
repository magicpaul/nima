import React from 'react';
import Link from 'next/link';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import NavCtaButton from './NavCtaButton';

const Header = ({ cta_text, cta_url }): JSX.Element => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-0 py-3 bg-gray dark:bg-gray-900">
      <div className="sm:px-8 px-4 container mx-auto flex flex-wrap justify-between w-full">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block">
          <Link href="/">

            <img src="/img/nima.png" className="w-12 h-12" alt="nima logo" />

          </Link>
          <button
            className="text-white cursor-pointer text-xl leading-none px-0 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            aria-label="Menu"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {navbarOpen ? (
              <XIcon className="block h-10 w-10" aria-hidden="true" />
            ) : (
              <MenuIcon className="block h-10 w-10" aria-hidden="true" />
            )}
          </button>
        </div>
        <div
          className={
            'lg:flex flex-grow items-center' +
            (navbarOpen ? ' flex' : ' hidden')
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row lg:items-center list-none lg:ml-auto">
            <li className="nav-item">
              <Link
                href="/contact/"
                className="px-3 py-2 flex lg:items-center text-s font-bold leading-snug text-white hover:opacity-75">
                
                  Contact
                
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/events/"
                className="px-3 py-2 flex lg:items-center text-s font-bold leading-snug text-white hover:opacity-75">
                
                  Events
                
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/audio/"
                className="px-3 py-2 flex items-center text-s font-bold leading-snug text-white hover:opacity-75">
                
                  Audio
                
              </Link>
            </li>
            <NavCtaButton url={cta_url} text={cta_text} />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
