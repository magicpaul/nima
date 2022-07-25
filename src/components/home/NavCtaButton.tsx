import Link from 'next/link';

interface Props {
  text: string;
  url: string;
}

const NavCtaButton: React.FC<Props> = ({ text, url }) => {
  if (url) {
    return (
      <li className="nav-item">
        <Link href={url}>
          <a className="px-3 lg:px-4 py-2 my-4 lg:ml-4 border border-transparent text-s font-bold leading-snug rounded-md text-white bg-green-600 hover:bg-green-700">
            {text}
          </a>
        </Link>
      </li>
    );
  } else {
    return null;
  }
};
export default NavCtaButton;
