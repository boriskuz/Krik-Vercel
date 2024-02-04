import { OurTeam } from '@/interfaces';
import Button from '@/shared-components/Button';
import Link from 'next/link';

interface OurTeamCarouselItemProps {
  ourTeam: OurTeam;
}

const OurTeamCarouselItem = ({ ourTeam }: OurTeamCarouselItemProps) => {
  return (
    <>
      <Link href={`/our-team/${ourTeam.id}`}>
        <div className="row our-team-carousel__item">
          <div className="col">
            <img src={ourTeam.img} alt={ourTeam.fullName} />
          </div>
        </div>
        <div className="row">
          <div className="col our-team-carousel__item--text">
            <h4>{ourTeam.fullName}</h4>
            <h6>{ourTeam.workingPosition}</h6>
          </div>
        </div>
      </Link>
      <div className="row d-none our-team-carousel__linkedIn-btn">
        <div className="mt-4 text-center">
          <a href={ourTeam.linkedIn} target="_blank">
            <Button color="orange">
              LinkedIn <span className="ms-5">&gt;</span>
            </Button>
          </a>
        </div>
      </div>
    </>
  );
};

export default OurTeamCarouselItem;
