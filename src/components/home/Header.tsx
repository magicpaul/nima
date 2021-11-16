import React from 'react';
import Link from 'next/link';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Header = ({ cta_text, cta_url }): JSX.Element => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-0 py-3 bg-gray">
      <div className="sm:px-8 px-4 container mx-auto flex flex-wrap justify-between w-full">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block">
          <Link href="/">
            <a>
              <img src="/img/nima.png" className="w-12 h-12" alt="nima logo" />
            </a>
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
              <Link href="/contact/">
                <a className="px-3 py-2 flex lg:items-center text-s font-bold leading-snug text-white hover:opacity-75">
                  Contact
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/events/">
                <a className="px-3 py-2 flex lg:items-center text-s font-bold leading-snug text-white hover:opacity-75">
                  Events
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/audio/">
                <a className="px-3 py-2 flex items-center text-s font-bold leading-snug text-white hover:opacity-75">
                  Audio
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={cta_url}>
                <a className="px-3 lg:px-4 py-2 my-4 lg:ml-4 border border-transparent text-s font-bold leading-snug rounded-md text-white bg-green-600 hover:bg-green-700">
                  {cta_text}
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
