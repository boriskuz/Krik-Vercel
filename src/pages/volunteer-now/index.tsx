import Button from '@/shared-components/Button';
import { useState } from 'react';

const VolunteerNow = () => {
  const [inputName, setInputName] = useState<string>('');
  const [inputAddress, setInputAddress] = useState<string>('');
  const [inputPhone, setInputPhone] = useState<string>('');
  const [inputEmail, setInputEmail] = useState<string>('');
  const [inputAge, setInputAge] = useState<boolean>(false);
  const [inputExperience, setInputExperience] = useState<string>('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const values = {
      name: inputName,
      address: inputAddress,
      phone: inputPhone,
      email: inputEmail,
      isOverEighteen: inputAge,
      experience: inputExperience,
    };
    console.log(values);
  };

  return (
    <div className="container volunteer-page">
      <div className="row">
        <div className="col">
          <h1 className="text-center">Волонтирај Сега!</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <div className="row">
                  <div className="col">
                    <label htmlFor="nameVolunteer">
                      <h4>Име на Волонтер*</h4>
                    </label>
                    <input
                      type="text"
                      name="nameVolunteer"
                      id="nameVolunteer"
                      className="input donate w-100"
                      placeholder="Име"
                      onChange={(e) => setInputName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <label htmlFor="addressVolunteer">
                      <h4>Адреса*</h4>
                    </label>
                    <input
                      type="text"
                      name="addressVolunteer"
                      id="addressVolunteer"
                      className="input donate w-100"
                      placeholder="ул. бр."
                      onChange={(e) => setInputAddress(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <label htmlFor="numberVolunteer">
                      <h4>Телефонски број*</h4>
                    </label>
                    <input
                      type="number"
                      name="numberVolunteer"
                      id="numberVolunteer"
                      className="input donate w-100"
                      placeholder="+38900000000"
                      onChange={(e) => setInputPhone(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <label htmlFor="emailVolunteer">
                      <h4>Email*</h4>
                    </label>
                    <input
                      type="email"
                      name="emailVolunteer"
                      id="emailVolunteer"
                      className="input donate w-100"
                      placeholder="example@email.com"
                      onChange={(e) => setInputEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="row align-items-end volunteer-page__radio-btns">
                  <div className="col">
                    <h4>Возраст*</h4>
                    <input type="radio" className="btn-check" name="options-base" id="option1" autoComplete="off" onChange={() => setInputAge(false)} />
                    <label className="btn btn-outline-dark" htmlFor="option1">
                      Под 18 Години
                    </label>
                  </div>
                  <div className="col">
                    <input type="radio" className="btn-check" name="options-base" id="option2" autoComplete="off" onChange={() => setInputAge(true)} />
                    <label className="btn btn-outline-dark" htmlFor="option2">
                      Над 18 Години
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="row volunteer-page__slider">
                      <div className="col">
                        <label htmlFor="experienceVolunteer">
                          <h4>Искуство со волонтирање*</h4>
                        </label>
                        <input
                          type="range"
                          name="experienceVolunteer"
                          id="experienceVolunteer"
                          min={1}
                          max={10}
                          className="form-range w-100"
                          required
                          onChange={(e) => setInputExperience(e.target.value)}
                        />
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                        <span>6</span>
                        <span>7</span>
                        <span>8</span>
                        <span>9</span>
                        <span>10</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row volunteer-page__checkboxes">
                  <div className="col">
                    <h4>Волонтерски интереси*</h4>
                    <div className="row">
                      <div className="col">
                        <input type="checkbox" className="btn-check" id="btn-check-1" autoComplete="off" />
                        <label className="btn btn-outline-dark" htmlFor="btn-check-1">
                          Lorem Ipsum
                        </label>
                      </div>
                      <div className="col">
                        <input type="checkbox" className="btn-check" id="btn-check-2" autoComplete="off" />
                        <label className="btn btn-outline-dark" htmlFor="btn-check-2">
                          Lorem Ipsum
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <input type="checkbox" className="btn-check" id="btn-check-3" autoComplete="off" />
                        <label className="btn btn-outline-dark" htmlFor="btn-check-3">
                          Lorem Ipsum
                        </label>
                      </div>
                      <div className="col">
                        <input type="checkbox" className="btn-check" id="btn-check-4" autoComplete="off" />
                        <label className="btn btn-outline-dark" htmlFor="btn-check-4">
                          Lorem Ipsum
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row volunteer-page__submit-btn">
              <div className="col text-center">
                <Button color="orange">Пријави Се</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VolunteerNow;
