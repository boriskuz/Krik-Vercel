import { ServiceI } from '@/interfaces';

interface ServiceProps {
  serviceData: ServiceI;
}

const Service = ({ serviceData }: ServiceProps) => {
  return (
    <div className="container service-container">
      <div className="row service-container__text">
        <div className="col">
          <h2>{serviceData.title}</h2>
          <p>{serviceData.description}</p>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col">
          <h3>Галерија Со Активности</h3>
        </div>
      </div>
      <div className="row service-container__images">
        <div className="col">
          <div className="row mb-4">
            <div className="col-4">
              <img src={serviceData.img1} alt={serviceData.img1Alt} />
            </div>
            <div className="col-8">
              <img src={serviceData.img2} alt={serviceData.img2Alt} />
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <img src={serviceData.img3} alt={serviceData.img3Alt} />
            </div>
            <div className="col-4">
              <img src={serviceData.img4} alt={serviceData.img4Alt} />
            </div>
            <div className="col-4">
              <img src={serviceData.img5} alt={serviceData.img5Alt} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
