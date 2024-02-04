import VolunteerCard from '@/components/VolunteerCard';
import { Volunteer } from '@/interfaces';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';

interface VolunteersPageProps {
  dataVolunteers: Volunteer[];
}

const VolunteersPage: NextPage<VolunteersPageProps> = ({ dataVolunteers }) => {
  const router = useRouter();

  const handleTerm = (term: string) => {
    router.push({
      pathname: '/volunteers',
      query: { term: term },
    });
  };

  return (
    <div className="container volunteers">
      <div className="row">
        <div className="col">
          <h1 className="text-center">Нашите Волонтери</h1>
        </div>
      </div>
      <div className="row volunteers-buttons text-center">
        <div className="col p-0">
          <button onClick={() => handleTerm('long-term')}>
            <h3>Долг Рок</h3>
          </button>
          <div className={`volunteers-buttons__line ${(router.query.term === 'long-term' && 'active') || (Object.keys(router.query).length === 0 && 'active')}`}></div>
        </div>
        <div className="col p-0">
          <button onClick={() => handleTerm('short-term')}>
            <h3>Краток Рок</h3>
          </button>
          <div className={`volunteers-buttons__line ${router.query.term === 'short-term' && 'active'}`}></div>
        </div>
      </div>
      <div className="row volunteers-cards_box">
        {dataVolunteers.map((volunteer) => {
          return <VolunteerCard volunteerData={volunteer} key={volunteer.id} />;
        })}
      </div>
    </div>
  );
};

export default VolunteersPage;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let url: string;

  if (query.term) {
    url = `https://krik-db.vercel.app/volunteers?term=${query.term}`;
  } else {
    url = 'https://krik-db.vercel.app/volunteers?term=long-term';
  }

  const resVolunteers = await fetch(url);
  const dataVolunteers: Volunteer[] = await resVolunteers.json();

  return {
    props: {
      dataVolunteers,
    },
  };
};
