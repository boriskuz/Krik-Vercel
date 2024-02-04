import { ProjectI } from '@/interfaces';

interface ProjectDetailCarouselProps {
  dataProject: ProjectI;
}

const ProjectDetailCarousel = ({ dataProject }: ProjectDetailCarouselProps) => {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={dataProject.img1} className="d-block w-100" alt={`${dataProject.title}-1`} />
        </div>
        <div className="carousel-item">
          <img src={dataProject.img2} className="d-block w-100" alt={`${dataProject.title}-2`} />
        </div>
        <div className="carousel-item">
          <img src={dataProject.img3} className="d-block w-100" alt={`${dataProject.title}-3`} />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default ProjectDetailCarousel;
