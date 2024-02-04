import Button from '@/shared-components/Button';

const Footer = () => {
  return (
    <div id="contact" className="container-fluid footer">
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-2">
            <h1>Месечен билтен</h1>
          </div>
          <div className="col-2">
            <p>Lorem ipsum dolor sit amet consectetur. Non at at risus dolor accumsan vitae dignissim.</p>
          </div>
          <div className="col-4">
            <input className="input w-100" type="email" name="email" id="email" placeholder="Вашата Емаил Адреса" />
            <Button color="primary w-100">CTA</Button>
          </div>
        </div>
        <div className="divider"></div>
        <div className="row justify-content-around">
          <div className="col-4">
            <h3 className="mb-5">Контактирај Не!</h3>
            <input className="input w-100" type="text" name="name" id="name" placeholder="Вашето Име" />
            <input className="input w-100" type="email" name="contact-email" id="contact-email" placeholder="Вашата Емаил Адреса" />
            <Button color="primary w-100">CTA</Button>
          </div>
          <div className="col-2">
            <h3 className="mb-5">Приклучи Се</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Non at at risus dolor accumsan vitae dignissim. Est dapibus turpis metus ac rhoncus tellus volutpat.</p>
          </div>
          <div className="col-2">
            <h3 className="mb-5">За Крик</h3>
            <p className="mb-5">Lorem ipsum dolor sit amet consectetur. Non at at risus dolor accumsan vitae dignissim.</p>
            <div className="d-flex justify-content-between icons">
              <a href="https://www.linkedin.com/company/cya-krik/?originalSubdomain=mk" target="_blank">
                <img src="/images/icons/linkedin.svg" alt="LinkedIn icon" />
              </a>
              <a href="https://www.instagram.com/cya_krik/" target="_blank">
                <img src="/images/icons/instagram.svg" alt="Instagram icon" />
              </a>
              <a href="https://www.facebook.com/CYA.KRIK/" target="_blank">
                <img src="/images/icons/facebook.svg" alt="Facebook icon" />
              </a>
              <a href="https://twitter.com/KRIKcenter" target="_blank">
                <img src="/images/icons/twitter.svg" alt="Twitter icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
