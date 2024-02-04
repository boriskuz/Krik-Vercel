import React, { useRef } from 'react';
import Slider from 'react-slick';
import OurTeamCarouselItem from './OurTeamCarouselItem';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { OurTeam } from '@/interfaces';

interface OurTeamCarouselProps {
  dataOurTeam: OurTeam[];
}

const OurTeamCarousel = ({ dataOurTeam }: OurTeamCarouselProps) => {
  const sliderRef = useRef<Slider | null>(null);

  const next = () => {
    sliderRef.current?.slickNext();
  };

  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  const settings = {
    arrows: false,
    className: 'center',
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    centerPadding: '0',
    speed: 500,
  };

  return (
    <div className="our-team-carousel">
      <Slider ref={sliderRef} {...settings}>
        {dataOurTeam.map((ourTeam, i) => {
          return (
            <div key={i}>
              <OurTeamCarouselItem ourTeam={ourTeam} />
            </div>
          );
        })}
        {dataOurTeam.map((ourTeam, i) => {
          return (
            <div key={i}>
              <OurTeamCarouselItem ourTeam={ourTeam} />
            </div>
          );
        })}
      </Slider>
      <div className="our-team-carousel__btns" style={{ textAlign: 'center' }}>
        <span>
          <svg className="me-5" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={previous}>
            <rect width="64" height="64" rx="32" fill="currentColor" />
            <path d="M34.8019 40.48L24.7619 31.2L34.8019 21.92H38.3619L28.2819 31.2L38.3619 40.48H34.8019Z" fill="white" />
          </svg>
        </span>

        <span>
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={next}>
            <rect width="64" height="64" rx="32" fill="currentColor" />
            <path d="M25.2763 21.92H28.8363L38.8763 31.2L28.8363 40.48H25.2763L35.3563 31.2L25.2763 21.92Z" fill="white" />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default OurTeamCarousel;
