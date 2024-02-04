import Service from '@/components/Service';
import { ServiceI } from '@/interfaces';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';

interface ServicesProps {
  dataService: ServiceI[];
}

const Services: NextPage<ServicesProps> = ({ dataService }) => {
  const router = useRouter();

  const handleService = (serviceSelected: string) => {
    router.push({
      pathname: '/services',
      query: { service: serviceSelected },
    });
  };

  return (
    <div className="container">
      <div className="row justify-content-center services-buttons">
        <div className="col-10">
          <div className="row text-center">
            <div className="col p-0">
              <button onClick={() => handleService('centar-krikni')}>
                <h4>Центар Крикни</h4>
              </button>
              <div className={`services-buttons__line ${(router.query.service === 'centar-krikni' && 'active') || (Object.keys(router.query).length === 0 && 'active')}`}></div>
            </div>
            <div className="col p-0">
              <button onClick={() => handleService('nezavisni-stanbeni-edinici')}>
                <h4>Независни станбени единици</h4>
              </button>
              <div className={`services-buttons__line ${router.query.service === 'nezavisni-stanbeni-edinici' && 'active'}`}></div>
            </div>
            <div className="col p-0">
              <button onClick={() => handleService('sovetuvalishte')}>
                <h4>Советувалиште</h4>
              </button>
              <div className={`services-buttons__line ${router.query.service === 'sovetuvalishte' && 'active'}`}></div>
            </div>
          </div>
        </div>
      </div>
      {dataService.map((service) => {
        return <Service key={service.id} serviceData={service} />;
      })}
    </div>
  );
};

export default Services;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let url: string;

  if (query.service) {
    url = `https://krik-db.vercel.app/services?service=${query.service}`;
  } else {
    url = 'https://krik-db.vercel.app/services?service=centar-krikni';
  }

  const resService = await fetch(url);
  const dataService: ServiceI[] = await resService.json();

  return {
    props: {
      dataService,
    },
  };
};
