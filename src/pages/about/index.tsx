import FAQ from '@/components/FAQ';
import { FAQI } from '@/interfaces';
import { GetStaticProps, NextPage } from 'next';

interface AboutProps {
  dataFAQ: FAQI[];
}

const About: NextPage<AboutProps> = ({ dataFAQ }) => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row about-header">
          <div className="col">
            <img src="/images/about-us/krik-about.png" alt="Meeting krik" />
          </div>
          <div className="col">
            <h3>
              Центарот за младинскиот активизам Крик е невладина, непрофитна организација основана од страна на млади луѓе, предводена од млади луѓе и работи за и со младите луѓе.
            </h3>
            <p>
              Целната група со која КРИК работи се сите луѓе (но главно млади) кои сакаат да придонесат и направат промени во полето на екологија, критичко размислување и
              комуникациски вештини, како и рабење за благостојба на социјално исклучените групи од општеството и маргинализираните групи. Крик се стреми кон поттикнување на
              поголема партиципација на младите, младински активизам, да ги охрабри младите луѓе да бидат повеќе вклучени во процесот на креирање политики на локално и на
              национално ниво.
            </p>
          </div>
        </div>
        <div className="row about-krik">
          <div className="col">
            <h2>За Крик</h2>
          </div>
        </div>
      </div>
      <div className="row about-krik_row">
        <div className="col">
          <div className="container ">
            <div className="row about-krik_row-content">
              <div className="col">
                <h3>Мисија</h3>
              </div>
              <div className="col-9">
                <p>
                  Да понуди активности за зајакнување на капацитетите на младите и лицата со попреченост преку развој на младинската работа и обезбедување услуги за социјална
                  заштита.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row about-krik_row">
        <div className="col">
          <div className="container">
            <div className="row about-krik_row-content">
              <div className="col">
                <h3>Визија</h3>
              </div>
              <div className="col-9">
                <p>
                  Да создаде инклузивно општество каде младите и лицата со попреченост се подеднакво вклучени и имаат целосно развиени капацитети активно да придонесуваат за
                  заедницата.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row about-krik_row">
        <div className="col">
          <div className="container">
            <div className="row about-krik_row-content">
              <div className="col">
                <h3>Нашите Вредности</h3>
              </div>
              <div className="col-9">
                <p>
                  Развивање на младинската работа, поттикнување младински активизам и волонтеризам. Поголема вклученост на младите исклучени од општеството преку учество на
                  работилници, настани и обуки. Развој на услуги за социјална заштита, сместување и грижа за лица со интелектуална и/или телесна попреченост и други услови.
                  Поттикнување на социјалната вклученост на маргинализираните групи млади и возрасни во сите сфери на општественото делување.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container about-faq">
        <div className="row">
          <div className="col">
            <h1>Најчесто поставувани прашања</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="accordion" id="accordionPanelsStayOpenExample">
              {dataFAQ.map((faq) => {
                return <FAQ key={faq.id} faq={faq} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

export const getStaticProps: GetStaticProps = async () => {
  const resFAQ = await fetch('https://krik-db.vercel.app/faq');
  const dataFAQ: FAQI[] = await resFAQ.json();

  return {
    props: {
      dataFAQ,
    },
  };
};
