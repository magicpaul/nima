import { ReactNode } from 'react';
import { NextPage } from 'next';

import Footer from 'components/home/Footer';

interface Props {
  children: ReactNode;
}

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900 dark:text-grey-50 bg-white dark:bg-gray">
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
