import BasicPagination from '@/components/Pagination';
import ProjectCard from '@/components/ProjectCard';
import { ProjectI, ProjectsPaginationData } from '@/interfaces';
import { GetServerSideProps, NextPage } from 'next';

interface ProjectsPageProps {
  dataProjectsOngoing: ProjectI[];
  dataProjectsFinished: ProjectI[];
}

const ProjectsPage: NextPage<ProjectsPageProps> = ({ dataProjectsOngoing, dataProjectsFinished }) => {
  return (
    <div className="container projects">
      <div className="row">
        <div className="col">
          <h1 className="text-center">Проекти</h1>
        </div>
      </div>
      <div className="row projects-ongoing_title">
        <div className="col">
          <h2>Тековни</h2>
        </div>
      </div>
      <div className="row projects-ongoing_cards">
        <div className="col-6">
          <ProjectCard heading="h2" color="yellow" height="70rem" id={dataProjectsOngoing[0].id} img={dataProjectsOngoing[0].img1} title={dataProjectsOngoing[0].title} />
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col mb-4">
              <ProjectCard heading="h3" color="violet" height="33rem" id={dataProjectsOngoing[1].id} img={dataProjectsOngoing[1].img2} title={dataProjectsOngoing[1].title} />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <ProjectCard heading="h4" color="black" height="33rem" id={dataProjectsOngoing[2].id} img={dataProjectsOngoing[2].img3} title={dataProjectsOngoing[2].title} />
            </div>
            <div className="col-6">
              <ProjectCard
                heading="h4"
                color="yellow"
                headingBottom={true}
                height="33rem"
                id={dataProjectsOngoing[3].id}
                img={dataProjectsOngoing[3].img4}
                title={dataProjectsOngoing[3].title}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row projects_pagination">
        <div className="col">
          <BasicPagination status="ongoing" pages={2} />
        </div>
      </div>
      <div className="row projects-finished_title">
        <div className="col">
          <h2>Завршени</h2>
        </div>
      </div>
      <div className="row projects-finished_cards">
        <div className="col-6">
          <div className="row mb-4">
            <div className="col-6">
              <ProjectCard color="violet" heading="h4" height="75rem" id={dataProjectsFinished[0].id} img={dataProjectsFinished[0].img1} title={dataProjectsFinished[0].title} />
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col mb-4">
                  <ProjectCard
                    color="yellow"
                    heading="h4"
                    headingBottom={true}
                    height="33.3rem"
                    id={dataProjectsFinished[1].id}
                    img={dataProjectsFinished[1].img2}
                    title={dataProjectsFinished[1].title}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <ProjectCard
                    color="black"
                    heading="h4"
                    height="33.3rem"
                    id={dataProjectsFinished[2].id}
                    img={dataProjectsFinished[2].img3}
                    title={dataProjectsFinished[2].title}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <ProjectCard color="yellow" heading="h2" height="70rem" id={dataProjectsFinished[3].id} img={dataProjectsFinished[3].img4} title={dataProjectsFinished[3].title} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="row mb-4">
            <div className="col">
              <ProjectCard
                color="black"
                heading="h2"
                headingBottom={true}
                id={dataProjectsFinished[4].id}
                height="70rem"
                img={dataProjectsFinished[4].img5}
                title={dataProjectsFinished[4].title}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="row">
                <div className="col mb-4">
                  <ProjectCard
                    color="violet"
                    heading="h4"
                    headingBottom={true}
                    height="33.3rem"
                    id={dataProjectsFinished[5].id}
                    img={dataProjectsFinished[5].img6}
                    title={dataProjectsFinished[5].title}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <ProjectCard
                    color="black"
                    heading="h4"
                    headingBottom={true}
                    height="33.3rem"
                    id={dataProjectsFinished[6].id}
                    img={dataProjectsFinished[6].img7}
                    title={dataProjectsFinished[6].title}
                  />
                </div>
                <div className="col-6">
                  <ProjectCard
                    color="yellow"
                    heading="h4"
                    height="33.3rem"
                    id={dataProjectsFinished[7].id}
                    img={dataProjectsFinished[7].img8}
                    title={dataProjectsFinished[7].title}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row projects_pagination">
          <div className="col">
            <BasicPagination status="finished" pages={2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let urlOngoing = 'https://krik-db.vercel.app/projects?project_status=ongoing&_page=1&_limit=4';
  let urlFinished = 'https://krik-db.vercel.app/projects?project_status=finished&_page=1&_limit=8';

  if (query.pageOngoing) {
    urlOngoing = `https://krik-db.vercel.app/projects?project_status=ongoing&_page=${query.pageOngoing}&_limit=4`;
  }

  if (query.pageFinished) {
    urlFinished = `https://krik-db.vercel.app/projects?project_status=finished&_page=${query.pageFinished}&_limit=8`;
  }

  const resProjectsOngoing = await fetch(urlOngoing);
  const dataProjectsOngoing: ProjectsPaginationData = await resProjectsOngoing.json();

  const resProjectsFinished = await fetch(urlFinished);
  const dataProjectsFinished: ProjectsPaginationData = await resProjectsFinished.json();

  return {
    props: {
      dataProjectsOngoing,
      dataProjectsFinished,
    },
  };
};
