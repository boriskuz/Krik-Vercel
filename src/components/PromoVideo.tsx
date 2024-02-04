import Button from '@/shared-components/Button';
import Link from 'next/link';

const PromoVideo = () => {
  return (
    <div className="container promo-video">
      <div className="row">
        <div className="col-8 position-relative">
          <img src="/images/homepage/video-place.png" alt="Video placeholder " />
          <span className="promo-video__link">
            <svg width="84" height="84" viewBox="0 0 84 84" xmlns="http://www.w3.org/2000/svg" className="play-btn">
              <path
                d="M41.6667 0C18.6667 0 0 18.6667 0 41.6667C0 64.6667 18.6667 83.3333 41.6667 83.3333C64.6667 83.3333 83.3333 64.6667 83.3333 41.6667C83.3333 18.6667 64.6667 0 41.6667 0ZM31.25 52.7917V30.5417C31.25 27.25 34.9167 25.25 37.6667 27.0417L54.9583 38.1667C55.5431 38.5444 56.0239 39.0626 56.3569 39.674C56.6898 40.2854 56.8642 40.9705 56.8642 41.6667C56.8642 42.3628 56.6898 43.0479 56.3569 43.6593C56.0239 44.2707 55.5431 44.7889 54.9583 45.1667L37.6667 56.2917C34.9167 58.0833 31.25 56.0833 31.25 52.7917Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </div>
        <div className="col-4">
          <div className="row promo-video__box">
            <div className="col promo-video__box--text">
              <h3>
                Стани
                <br />
                Волонтер
              </h3>
              <p>Сакаш да работиш со млади лица? Оваа можност е токму за тебе.</p>
              <Link href="/volunteer-now">
                <Button color="outline-white">Придружи ни се</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoVideo;
