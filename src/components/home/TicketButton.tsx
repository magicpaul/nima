import React from 'react';

interface TicketButtonProps {
  link?: string;
  link2?: string;
  link3?: string;
  label?: string;
  label2?: string;
  label3?: string;
}

const TicketButton: React.FC<TicketButtonProps> = ({
  link,
  link2,
  link3,
  label = 'Book Tickets',
  label2 = 'Book Tickets 2',
  label3 = 'Book Tickets 3',
}) => {
  const secondaryLinks = [
    { url: link2, label: label2 },
    { url: link3, label: label3 },
  ].filter((item) => item.url);

  if (!link && secondaryLinks.length === 0) {
    return null;
  }

  const secondaryWidthClass =
    secondaryLinks.length === 2 ? 'md:w-1/2' : 'md:w-full';

  return (
    <div className="flex flex-col mb-8 sm:mb-0 px-4 md:pr-4 md:pl-0 sm:mt-12 space-y-4 md:w-3/4">
      {link && (
        <a
          href={link}
          className="w-full px-8 py-3 border border-transparent text-base font-medium rounded-md text-center text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
        >
          {label}
        </a>
      )}

      {secondaryLinks.length > 0 && (
        <div className="flex flex-col md:flex-row space-y-4 md:space-x-4 md:space-y-0">
          {secondaryLinks.map((item, index) => (
            <a
              key={index}
              href={item.url}
              className={`w-full ${secondaryWidthClass} px-8 py-3 border border-transparent text-base font-medium rounded-md text-center text-white bg-gray hover:bg-gray-900 md:py-4 md:text-lg md:px-10`}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default TicketButton;
