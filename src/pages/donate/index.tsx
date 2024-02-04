import Button from '@/shared-components/Button';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Donate = () => {
  const router = useRouter();

  const handleDonation = (donor: string) => {
    router.push({
      pathname: '/donate',
      query: { donor: donor },
    });
  };

  const [inputOfferedAmmount, setInputOfferedAmmount] = useState<string>('1000');
  const [inputPlacedAmmount, setInputPlacedAmmount] = useState<string>('');
  const [inputDonorName, setInputDonorName] = useState<string>('');
  const [inputEmail, setInputEmail] = useState<string>('');
  const [inputPhone, setInputPhone] = useState<string>('');
  const [inputSum, setInputSum] = useState<string>('');
  const [inputCardNumber, setInputCardNumber] = useState<string>('');
  const [inputCardValidity, setInputCardValidity] = useState<string>('');
  const [inputCardCVV, setInputCardCVV] = useState<string>('');
  const [inputCardHolder, setInputCardHolder] = useState<string>('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const values = {
      offeredAmmount: inputOfferedAmmount,
      placedAmmount: inputPlacedAmmount,
      name: inputDonorName,
      email: inputEmail,
      phone: inputPhone,
      sum: inputSum,
      cardNumber: inputCardNumber,
      cardValidity: inputCardValidity,
      cardCvv: inputCardCVV,
      cardHolder: inputCardHolder,
    };
    console.log(values);
  };

  return (
    <div className="container donate-page">
      <div className="row">
        <div className="col">
          <h2 className="text-center">Донирај!</h2>
        </div>
      </div>
      <div className="row justify-content-center services-buttons">
        <div className="col-10">
          <div className="row text-center">
            <div className="col p-0">
              <button onClick={() => handleDonation('individual')}>
                <h4>Индивидуа</h4>
              </button>
              <div className={`services-buttons__line ${(router.query.donor === 'individual' && 'active') || (Object.keys(router.query).length === 0 && 'active')}`}></div>
            </div>
            <div className="col p-0">
              <button onClick={() => handleDonation('organization')}>
                <h4>Организација/Претпријатие</h4>
              </button>
              <div className={`services-buttons__line ${router.query.donor === 'organization' && 'active'}`}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-8">
          <form onSubmit={handleSubmit}>
            <div className="row donate-page__first-row">
              <div className="col">
                <div className="row">
                  <div className="col">
                    <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                  </div>
                </div>
                <div className="row donate-page__first-row--btns">
                  <div className="col">
                    <input
                      type="radio"
                      className="btn-check"
                      name="options-base"
                      id="option5"
                      autoComplete="off"
                      defaultChecked
                      value="1000"
                      onChange={(e) => setInputOfferedAmmount(e.target.value)}
                    />
                    <label className="btn btn-outline-dark" htmlFor="option5">
                      1000 Ден
                    </label>
                  </div>
                  <div className="col">
                    <input
                      type="radio"
                      className="btn-check"
                      name="options-base"
                      id="option6"
                      autoComplete="off"
                      value="3000"
                      onChange={(e) => setInputOfferedAmmount(e.target.value)}
                    />
                    <label className="btn btn-outline-dark" htmlFor="option6">
                      3000 Ден
                    </label>
                  </div>
                  <div className="col">
                    <input
                      type="radio"
                      className="btn-check"
                      name="options-base"
                      id="option7"
                      autoComplete="off"
                      value="6000"
                      onChange={(e) => setInputOfferedAmmount(e.target.value)}
                    />
                    <label className="btn btn-outline-dark" htmlFor="option7">
                      6000 Ден
                    </label>
                  </div>
                  <div className="col">
                    <select aria-label="Селектирање валута">
                      <option defaultValue="">Промени Валута</option>
                      <option value="den">Денари</option>
                      <option value="eur">Евра</option>
                      <option value="usd">Долари</option>
                    </select>
                  </div>
                </div>
                <div className="row donate-page__first-row__about">
                  <div className="col">
                    <p>
                      Lorem ipsum dolor sit amet consectetur. In sed lobortis donec a cras feugiat mattis velit venenatis. Adipiscing viverra praesent tristique non. Nunc blandit
                      turpis tellus natoque mi odio viverra fermentum.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <label htmlFor="amountPayPal">Друг Износ:</label>
                    <input
                      type="number"
                      name="amountPayPal"
                      id="amountPayPal"
                      className="input donate"
                      placeholder="Сума"
                      onChange={(e) => setInputPlacedAmmount(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row donate-page__first-row__pay-btns">
                  <div className="col">
                    <Button color="dark">Донирај со 💳</Button>
                    <Button color="primary">PayPal</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row donate-page__second-row">
              <div className="col">
                <div className="row">
                  <div className="col">
                    <label htmlFor="nameDonor">
                      <h4>Име на Донатор*</h4>
                    </label>
                    <input
                      type="text"
                      name="nameDonor"
                      id="nameDonor"
                      className="input donate w-100"
                      placeholder="Име"
                      required
                      onChange={(e) => setInputDonorName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <label htmlFor="emailDonor">
                      <h4>Email*</h4>
                    </label>
                    <input
                      type="email"
                      name="emailDonor"
                      id="emailDonor"
                      className="input donate w-100"
                      placeholder="example@email.com"
                      required
                      onChange={(e) => setInputEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <label htmlFor="phoneDonor">
                      <h4>Телефонски број*</h4>
                    </label>
                    <input
                      type="number"
                      name="phoneDonor"
                      id="phoneDonor"
                      className="input donate w-100"
                      placeholder="+38900000000"
                      required
                      onChange={(e) => setInputPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <label htmlFor="amountDonor">
                      <h4>Сума за донирање*</h4>
                    </label>
                    <input
                      type="number"
                      name="amountDonor"
                      id="amountDonor"
                      className="input donate w-100"
                      placeholder="a million?"
                      required
                      onChange={(e) => setInputSum(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="row">
                  <div className="col">
                    <label htmlFor="cardNumberDonor">
                      <h4>Број на картичка*</h4>
                    </label>
                    <input
                      type="number"
                      name="cardNumberDonor"
                      id="cardNumberDonor"
                      className="input donate w-100"
                      placeholder="****   ****   ****   ****"
                      required
                      onChange={(e) => setInputCardNumber(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <label htmlFor="cardDateDonor">
                      <h4>&nbsp;</h4>
                    </label>
                    <input
                      type="number"
                      name="cardDateDonor"
                      id="cardDateDonor"
                      className="input donate w-100"
                      placeholder="MM/YY"
                      required
                      onChange={(e) => setInputCardValidity(e.target.value)}
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="cardCvvDonor">
                      <h4>&nbsp;</h4>
                    </label>
                    <input
                      type="number"
                      name="cardCvvDonor"
                      id="cardCvvDonor"
                      className="input donate w-100"
                      placeholder="CVV"
                      required
                      onChange={(e) => setInputCardCVV(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <label htmlFor="nameCardDonor">
                      <h4>Име на сопственик*</h4>
                    </label>
                    <input
                      type="text"
                      name="nameCardDonor"
                      id="nameCardDonor"
                      className="input donate w-100"
                      placeholder="Име"
                      required
                      onChange={(e) => setInputCardHolder(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <Button color="orange">Донирај</Button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Donate;
