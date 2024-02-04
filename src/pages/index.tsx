import EventCardBig from '@/components/EventCardBig';
import EventCardSmall from '@/components/EventCardSmall';
import OurServices from '@/components/OurServices';
import Partners from '@/components/Partners';
import PromoVideo from '@/components/PromoVideo';
import SuccessNumbers from '@/components/SuccessNumbers';
import { PartnerI, ProjectI, ServiceLink, SuccessNumbersI } from '@/interfaces';
import Button from '@/shared-components/Button';
import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';

interface HomeProps {
  dataSuccessNumbers: SuccessNumbersI;
  dataPartners: PartnerI[];
  dataServicesLinks: ServiceLink[];
  dataVolunteerProject1: ProjectI;
  dataVolunteerProject2: ProjectI;
  dataVolunteerProject3: ProjectI;
  dataVolunteerProject4: ProjectI;
  dataVolunteerProject5: ProjectI;
}

const Home: NextPage<HomeProps> = ({
  dataSuccessNumbers,
  dataPartners,
  dataServicesLinks,
  dataVolunteerProject1,
  dataVolunteerProject2,
  dataVolunteerProject3,
  dataVolunteerProject4,
  dataVolunteerProject5,
}) => {
  return (
    <>
      <div className="container-fluid ">
        <div className="row justify-content-center hero">
          <div className="col text-center content">
            <h1 className="text-uppercase">
              Промената доаѓа
              <br />
              од младите
            </h1>
            <h3>Кои Сме Ние?</h3>
            <p>Центарот за младински активизам Крик е невладина, непрофитна организација основана од млади луѓе, предводена од млади луѓе и работи за и со млади луѓе.</p>
            <Link href="/about">
              <Button color="secondary">Повеќе за нас</Button>
            </Link>
          </div>
        </div>
        <EventCardBig project={dataVolunteerProject1} />
        <SuccessNumbers data={dataSuccessNumbers} />
        <PromoVideo />

        <div className="container latest-news">
          <div className="row">
            <div className="col">
              <h1>Најнови вести</h1>
              <div className="row card-small__container">
                <EventCardSmall project={dataVolunteerProject1} />
                <EventCardSmall project={dataVolunteerProject2} />
                <EventCardSmall project={dataVolunteerProject3} />
                <EventCardSmall project={dataVolunteerProject4} />
                <EventCardSmall project={dataVolunteerProject5} />
              </div>
            </div>
          </div>
          <div className="row btn-row">
            <div className="col text-end">
              <Link href="/projects">
                <Button color="secondary">Види за цел Месец</Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="container homepage-our-services">
          <div className="row">
            <div className="col">
              <h1>Нашите услуги</h1>
              <div className="row">
                <div className="col homepage-our-services__image">
                  <img src="/images/homepage/homepage_uslugi.jpg" alt="" />
                </div>
                <div className="col">
                  {dataServicesLinks.map((serviceLink) => {
                    return <OurServices key={serviceLink.id} serviceLink={serviceLink} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container partners">
          <div className="row">
            <div className="col">
              <h1>Партнери</h1>
            </div>
          </div>
        </div>
        <div className="container-fluid partners-box">
          <div className="container">
            <div className="row align-items-center partners-box__row">
              {dataPartners.map((partner) => {
                return <Partners key={partner.id} partner={partner} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const resServicesLinks = await fetch('https://krik-db.vercel.app/services-links');
  const dataServicesLinks: ServiceLink[] = await resServicesLinks.json();

  const resSuccessNumbers = await fetch('https://krik-db.vercel.app/success-numbers');
  const dataSuccessNumbers: SuccessNumbersI = await resSuccessNumbers.json();

  const resPartners = await fetch('https://krik-db.vercel.app/partners');
  const dataPartners: PartnerI[] = await resPartners.json();

  const resVolunteerProject1 = await fetch('https://krik-db.vercel.app/projects/8');
  const dataVolunteerProject1: ProjectI = await resVolunteerProject1.json();
  const resVolunteerProject2 = await fetch('https://krik-db.vercel.app/projects/3');
  const dataVolunteerProject2: ProjectI = await resVolunteerProject2.json();
  const resVolunteerProject3 = await fetch('https://krik-db.vercel.app/projects/17');
  const dataVolunteerProject3: ProjectI = await resVolunteerProject3.json();
  const resVolunteerProject4 = await fetch('https://krik-db.vercel.app/projects/19');
  const dataVolunteerProject4: ProjectI = await resVolunteerProject4.json();
  const resVolunteerProject5 = await fetch('https://krik-db.vercel.app/projects/2');
  const dataVolunteerProject5: ProjectI = await resVolunteerProject5.json();

  return {
    props: {
      dataServicesLinks,
      dataPartners,
      dataSuccessNumbers,
      dataVolunteerProject1,
      dataVolunteerProject2,
      dataVolunteerProject3,
      dataVolunteerProject4,
      dataVolunteerProject5,
    },
  };
};
