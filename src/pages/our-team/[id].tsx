import PersonDetail from '@/components/PersonDetail';
import { OurTeam } from '@/interfaces';
import { GetServerSideProps, NextPage } from 'next';

interface OurTeamDetailPageProps {
  dataOurTeam: OurTeam;
}

const OurTeamDetailPage: NextPage<OurTeamDetailPageProps> = ({ dataOurTeam }) => {
  return <PersonDetail img={dataOurTeam.img} fullName={dataOurTeam.fullName} description={dataOurTeam.description} />;
};

export default OurTeamDetailPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params) {
    const resOurTeam = await fetch(`https://krik-db.vercel.app/our-team/${params.id}`);
    const dataOurTeam: OurTeam = await resOurTeam.json();

    return {
      props: {
        dataOurTeam,
      },
    };
  }

  return {
    props: {
      dataOurTeam: null,
    },
  };
};
