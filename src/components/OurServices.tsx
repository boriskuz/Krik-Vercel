import { ServiceLink } from '@/interfaces';
import { useRouter } from 'next/router';

interface OurServicesProps {
  serviceLink: ServiceLink;
}

const OurServices = ({ serviceLink }: OurServicesProps) => {
  const router = useRouter();

  const handleServiceLink = (query: string) => {
    router.push({
      pathname: '/services',
      query: { service: query },
    });
  };

  return (
    <div className="row homepage-our-services__service">
      <div className="col">
        <h3 onClick={() => handleServiceLink(serviceLink.query)}>{serviceLink.title}</h3>

        <p>{serviceLink.description}</p>
      </div>
      <div className="col-1">
        <span className="homepage-our-services__service--arrow" onClick={() => handleServiceLink(serviceLink.query)}>
          <svg width="51" height="51" viewBox="0 0 51 51" xmlns="http://www.w3.org/2000/svg">
            <rect width="51" height="51" rx="25.5" fill="currentColor" />
            <path d="M17.8812 34.1667L32.9472 19M32.9472 19V33.56M32.9472 19H18.4839" stroke="white" strokeWidth="2" strokeLinecap="square" />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default OurServices;
