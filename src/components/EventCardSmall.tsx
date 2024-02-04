import { ProjectI } from '@/interfaces';
import Link from 'next/link';

interface EventCardSmallProps {
  project: ProjectI;
}

const EventCardSmall = ({ project }: EventCardSmallProps) => {
  return (
    <div className="col mb-5 card-holder">
      <div className="event-card__small position-relative">
        <img src={project.img1} alt={project.title} />
        <div className="event-card__small--content position-absolute bottom-0">
          <div className="row align-items-center">
            <div className="col-6">
              <h6 className="text-uppercase mb-0 text-center">{project.title}</h6>
            </div>
            <div className="col">
              <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.30498 4.36079V1.80078C4.30498 1.24078 4.74498 0.800781 5.30498 0.800781C5.86498 0.800781 6.30498 1.24078 6.30498 1.80078V4.36079C6.30498 4.92079 5.86498 5.36079 5.30498 5.36079C4.74498 5.36079 4.30498 4.92079 4.30498 4.36079ZM11.705 5.36079C12.265 5.36079 12.705 4.92079 12.705 4.36079V1.80078C12.705 1.24078 12.265 0.800781 11.705 0.800781C11.145 0.800781 10.705 1.24078 10.705 1.80078V4.36079C10.705 4.92079 11.145 5.36079 11.705 5.36079ZM4.94498 8.80078H12.045C12.485 8.80078 12.845 8.44078 12.845 8.00078C12.845 7.56078 12.485 7.20078 12.045 7.20078H4.94498C4.50498 7.20078 4.14498 7.56078 4.14498 8.00078C4.14498 8.44078 4.50498 8.80078 4.94498 8.80078ZM16.105 2.20078H14.445C14.005 2.20078 13.645 2.56078 13.645 3.00078C13.645 3.44078 14.005 3.80078 14.445 3.80078H15.305V17.4008H1.70498V3.80078H2.56498C3.00498 3.80078 3.36498 3.44078 3.36498 3.00078C3.36498 2.56078 3.00498 2.20078 2.56498 2.20078H0.90498C0.46498 2.20078 0.10498 2.64076 0.10498 3.08076V18.2008C0.10498 18.6408 0.46498 19.0008 0.90498 19.0008H16.105C16.545 19.0008 16.905 18.6408 16.905 18.2008V3.08076C16.905 2.64076 16.545 2.20078 16.105 2.20078ZM7.84498 3.80078H9.16498C9.60498 3.80078 9.96498 3.44078 9.96498 3.00078C9.96498 2.56078 9.60498 2.20078 9.16498 2.20078H7.84498C7.40498 2.20078 7.04498 2.56078 7.04498 3.00078C7.04498 3.44078 7.40498 3.80078 7.84498 3.80078ZM4.94498 12.4008H12.045C12.485 12.4008 12.845 12.0408 12.845 11.6008C12.845 11.1608 12.485 10.8008 12.045 10.8008H4.94498C4.50498 10.8008 4.14498 11.1608 4.14498 11.6008C4.14498 12.0408 4.50498 12.4008 4.94498 12.4008Z"
                  fill="white"
                />
              </svg>
              <span className="event-card__small--content__date">
                {project.startDate}
                <span className="event-card__small--content__date">{project.endDate && ` - ${project.endDate}`}</span>
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>{project.title_about.split(' ').slice(0, 10).join(' ')}...</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Link href={`/projects/${project.id}`}>
                <p>
                  Види Повеќе
                  <span className="ms-3">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.25 12H20.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M14 5.25L20.75 12L14 18.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCardSmall;
