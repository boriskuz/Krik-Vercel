import { Volunteer } from '@/interfaces';
import Link from 'next/link';

interface VolunteerCardProps {
  volunteerData: Volunteer;
}

const VolunteerCard = ({ volunteerData }: VolunteerCardProps) => {
  return (
    <div className="col-3">
      <Link href={`/volunteers/${volunteerData.id}`}>
        <div className="volunteer-card">
          <img src={volunteerData.img} alt={volunteerData.fullName} />
          <div className="volunteer-card__text">
            <h4>{volunteerData.fullName}</h4>
            <p>
              <span>{volunteerData.age}</span> Години, <span>{volunteerData.location}</span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default VolunteerCard;
