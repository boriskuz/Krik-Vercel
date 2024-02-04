import ProjectDetailCarousel from '@/components/ProjectDetailCarousel';
import { ProjectI } from '@/interfaces';
import Button from '@/shared-components/Button';
import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';

interface ProjectDetailPageProps {
  dataProject: ProjectI;
}

const ProjectDetailPage: NextPage<ProjectDetailPageProps> = ({ dataProject }) => {
  return (
    <div className="container project-detail-page">
      <div className="row">
        <div className="col">
          <ProjectDetailCarousel dataProject={dataProject} />
        </div>
      </div>
      <div className="row justify-content-center text-center project-detail-page__title">
        <div className="col-8">
          <h1>{dataProject.title}</h1>
          <p>{dataProject.title_about}</p>
        </div>
      </div>
      <div className="row project-detail-page__goal">
        <div className="col-4 project-detail-page__goal--title">
          <h1>{dataProject.goal_title}</h1>
        </div>
        <div className="col-8 project-detail-page__goal--desc">
          <div className="row">
            <div className="col-1"></div>
            <div className="col">
              <p>{dataProject.goal_description1}</p>
              <p>{dataProject.goal_description2}</p>
              <p>{dataProject.goal_description3}</p>
              <p>{dataProject.goal_description4}</p>
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </div>
      <div className="row project-detail-page__for">
        <div className="col-8 project-detail-page__for--text">
          <h1>{dataProject.project_for}</h1>
          <p>{dataProject.project_for_description}</p>
        </div>
        <div className="col">
          <img src={dataProject.img3} alt="Meeting room" />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col">
              <div className="project-detail-page__progress-bar position-relative">
                <div className="project-detail-page__progress-bar--progress" style={{ width: `${dataProject.project_completition}%` }}></div>
                <h3 className="position-absolute">{dataProject.project_completition}%</h3>
              </div>
            </div>
          </div>
          {dataProject.project_status === 'ongoing' && (
            <div className="row justify-content-end project-detail-page__progress-bar--buttons ">
              <div className="col-6">
                <div className="row align-items-center text-end project-detail-page__progress-bar--buttons_row">
                  <div className="col">
                    <h4>Заинтересиран/а си?</h4>
                  </div>
                  <div className="col-4 ">
                    <Link href="/volunteer-now">
                      <Button color="dark">Пријави Се!</Button>
                    </Link>
                  </div>
                </div>
                <div className="row align-items-center text-end">
                  <div className="col">
                    <h4>Сакаш да не поддржиш?</h4>
                  </div>
                  <div className="col-4 project-detail-page__progress-bar--buttons_orange">
                    <Link href="/donate">
                      <Button color="orange">Донирај</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params) {
    const resProject = await fetch(`https://krik-db.vercel.app/projects/${params.id}`);
    const dataProject: ProjectI = await resProject.json();

    return {
      props: {
        dataProject,
      },
    };
  }

  return {
    props: {
      dataProject: null,
    },
  };
};
