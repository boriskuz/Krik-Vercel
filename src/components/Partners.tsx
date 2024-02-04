import { PartnerI } from '@/interfaces';

interface PartnersProps {
  partner: PartnerI;
}

const Partners = ({ partner }: PartnersProps) => {
  return (
    <div className="col">
      <img src={partner.img} className="partners-img" alt={partner.partner} />
    </div>
  );
};

export default Partners;
