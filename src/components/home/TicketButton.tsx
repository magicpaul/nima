const TicketButton: React.FC<{ link: string }> = ({ link }) => {
  if (link) {
    return (
      <div className="mb-8 sm:mb-0 px-4 md:pr-4 md:pl-0 sm:mt-12">
        <a
          href={link}
          className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
        >
          Book Tickets
        </a>
      </div>
    );
  } else {
    return null;
  }
};
export default TicketButton;
