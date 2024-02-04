import ProjectCard from '@/components/ProjectCard';
import { ProjectI } from '@/interfaces';
import { GetServerSideProps, NextPage } from 'next';

// NOVA VERZIJA NA JSON SERVER, PA NE FUNKCIONIRA PREBARUVANJETO `https://krik-db.vercel.app/projects?q=${query.searchTerm}`

interface SearchPageProps {
  dataSearchProjects: ProjectI[];
}

const SearchPage: NextPage<SearchPageProps> = ({ dataSearchProjects }) => {
  return (
    <div className="container projects">
      <div className="row">
        <div className="col">
          <h1 className="text-center">Проекти</h1>
        </div>
      </div>

      <div className="row">
        {dataSearchProjects.length > 0 ? (
          dataSearchProjects.map((project) => {
            return (
              <div className="col" key={project.id}>
                <ProjectCard id={project.id} color="yellow" heading="h4" />
              </div>
            );
          })
        ) : (
          <div className="col">
            <h2>Не се пронајдени проекти, пребарајте повторно.</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (query.searchTerm) {
    const resSearchProjects = await fetch(`https://krik-db.vercel.app/projects?q=${query.searchTerm}`);
    const dataSearchProjects: ProjectI[] = await resSearchProjects.json();

    return {
      props: {
        dataSearchProjects,
      },
    };
  }

  return {
    props: {
      dataSearchProjects: null,
    },
  };
};
