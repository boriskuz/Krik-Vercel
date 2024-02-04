interface PersonDetailProps {
  img: string;
  fullName: string;
  description: string;
  volunteer?: boolean;
}

const PersonDetail = ({ img, fullName, description, volunteer }: PersonDetailProps) => {
  return (
    <div className="container person-detail">
      <div className="row align-items-center" style={{ borderRadius: '4rem', border: `${volunteer && `2px solid #191919`}` }}>
        <div className="col ps-0">
          <img src={img} alt={fullName} />
        </div>
        <div className="col-7">
          <h2>{fullName}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PersonDetail;
