import { SuccessNumbersI } from '@/interfaces';

interface SuccessNumbersProps {
  data: SuccessNumbersI;
}

const SuccessNumbers = ({ data }: SuccessNumbersProps) => {
  return (
    <div className="row text-center success-box">
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="success-number">
              <span>{data.projects}</span>+
            </p>
            <p>Проекти</p>
          </div>
          <div className="col">
            <p className="success-number">
              <span>{data.volunteers}</span>+
            </p>
            <p>Волонтери</p>
          </div>
          <div className="col">
            <p className="success-number">
              <span>{data.partners}</span>+
            </p>
            <p>Партнери</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessNumbers;
