import { ProjectI } from '@/interfaces';
import Button from '@/shared-components/Button';
import Link from 'next/link';

interface EventCardBigProps {
  project: ProjectI;
}

const EventCardBig = ({ project }: EventCardBigProps) => {
  return (
    <div className="container">
      <div className="row event-box">
        <div className="col event-soon">
          <div className="event-soon__card d-flex">
            <div className="event-info">
              <div className="row">
                <div className="col box">
                  <h3 className="text-uppercase">Наскоро</h3>
                  <h4>{project.title}</h4>
                  <p>{project.title_about}</p>
                  <div className="row">
                    <div className="col">
                      <Link href={`/projects/${project.id}`}>
                        <Button color="primary w-100">Види Повеќе</Button>
                      </Link>
                    </div>
                    <div className="col">
                      <Link href="/volunteer-now">
                        <Button color="secondary w-100">Пријави се!</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="event-img">
              <img src={project.img4} alt={project.title} />
              <p className="text-center date">
                <span className="day">04</span>
                <span className="month">Февр</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCardBig;
