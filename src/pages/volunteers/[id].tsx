import EventCardSmall from '@/components/EventCardSmall';
import PersonDetail from '@/components/PersonDetail';
import { ProjectI, Volunteer } from '@/interfaces';
import { GetServerSideProps, NextPage } from 'next';

interface VolunteerDetailPageProps {
  dataVolunteer: Volunteer;
  dataVolunteerProject1: ProjectI;
  dataVolunteerProject2: ProjectI;
  dataVolunteerProject3: ProjectI;
}

const VolunteerDetailPage: NextPage<VolunteerDetailPageProps> = ({ dataVolunteer, dataVolunteerProject1, dataVolunteerProject2, dataVolunteerProject3 }) => {
  return (
    <>
      <PersonDetail fullName={dataVolunteer.fullName} description={dataVolunteer.about} img={dataVolunteer.img} volunteer={true} />
      <div className="container person-detail__projects">
        <div className="row">
          <div className="col">
            <h2>Проекти во кои учествува</h2>
          </div>
        </div>
        {dataVolunteerProject1 ? (
          <>
            <div className="row row-cols-3 person-detail__projects--status">
              <div className="col">
                <h4>{dataVolunteerProject1.project_status === 'ongoing' ? 'Тековен' : 'Завршен'}</h4>
              </div>
              <div className="col">
                <h4>{dataVolunteerProject2.project_status === 'ongoing' ? 'Тековен' : 'Завршен'}</h4>
              </div>
              <div className="col">
                <h4>{dataVolunteerProject3.project_status === 'ongoing' ? 'Тековен' : 'Завршен'}</h4>
              </div>
            </div>
            <div className="row row-cols-3">
              <EventCardSmall project={dataVolunteerProject1} />
              <EventCardSmall project={dataVolunteerProject2} />
              <EventCardSmall project={dataVolunteerProject3} />
            </div>
          </>
        ) : (
          <div className="row">
            <div className="col">
              <h3>Сè уште нема учествувано на проекти.</h3>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default VolunteerDetailPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params) {
    const resVolunteer = await fetch(`https://krik-db.vercel.app/volunteers/${params.id}`);
    const dataVolunteer: Volunteer = await resVolunteer.json();

    if (dataVolunteer.project1) {
      const resVolunteerProject1 = await fetch(`https://krik-db.vercel.app/projects/${dataVolunteer.project1}`);
      const dataVolunteerProject1: ProjectI = await resVolunteerProject1.json();
      const resVolunteerProject2 = await fetch(`https://krik-db.vercel.app/projects/${dataVolunteer.project2}`);
      const dataVolunteerProject2: ProjectI = await resVolunteerProject2.json();
      const resVolunteerProject3 = await fetch(`https://krik-db.vercel.app/projects/${dataVolunteer.project3}`);
      const dataVolunteerProject3: ProjectI = await resVolunteerProject3.json();

      return {
        props: {
          dataVolunteer,
          dataVolunteerProject1,
          dataVolunteerProject2,
          dataVolunteerProject3,
        },
      };
    }

    return {
      props: {
        dataVolunteer,
      },
    };
  }

  return {
    props: {
      dataVolunteer: null,
      dataVolunteerProject1: null,
      dataVolunteerProject2: null,
      dataVolunteerProject3: null,
    },
  };
};
