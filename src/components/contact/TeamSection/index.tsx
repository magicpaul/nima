import { Team } from 'interfaces/home';
import PageHeader from 'components/home/pageHeader';

interface Props {
  title: string;
  description: string;
  team: Team[];
}

const TeamSection: React.FC<Props> = ({ title, description, team }) => {
  return (
    <main className="flex-1 w-full max-w-7xl px-4 py-8 mx-auto md:px-8 md:py-16">
      <PageHeader title={title} description={description} />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-between justify-items-stretch gap-8">
        {team?.map((team, i) => {
          return (
            <div
              className="h-full flex md:flex-row flex-col items-center md:justify-start justify-center text-center md:text-left bg-gray-50 shadow-lg rounded-lg"
              key={i}
            >
              <img
                alt={team.name}
                className="flex-shrink-0 w-32 h-32 mt-8 md:mt-0 md:w-48 md:h-48 object-cover object-center md:mb-0 mb-4 rounded-full md:rounded-l-lg md:rounded-r-none"
                src={team.image}
              />
              <div className="flex-grow md:pl-4 md:pr-4">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  {team.name}
                </h2>
                <h3 className="text-gray-500 mb-3">{team.position}</h3>
                <p className="mb-4">{team.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default TeamSection;
