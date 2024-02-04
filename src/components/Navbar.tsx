import Button from '@/shared-components/Button';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Navbar = () => {
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      submitSearch();
      setSearchValue('');
    }
  };

  const submitSearch = () => {
    router.push({
      pathname: '/search',
      query: { searchTerm: searchValue },
    });
  };

  return (
    <>
      <div className="container-fluid header">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-5">
              <div className="row align-items-center">
                <div className="col-5">
                  <h4 className="text-uppercase">Newsletter</h4>
                </div>
                <div className="col">
                  <input
                    className="input"
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onKeyDown={handleKeyPress}
                  />
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="row justify-content-end">
                <div className="col-3 text-end">
                  <Button color="text-btn small">En/Mkd</Button>
                </div>
                <div className="col-3 text-end">
                  <Link href="/shop">
                    <Button color="text-btn small">E-Shop</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" href="/">
            <img src="/images/krik-logo.svg" alt="Krik logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center ">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  За нас
                </a>
                <ul className="dropdown-menu rounded-4">
                  <li>
                    <Link className="dropdown-item text-center" href="/about">
                      За крик
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item text-center" href="/our-team">
                      Нашиот тим
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item text-center" href="/volunteers">
                      Волонтери
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item text-center" href="/archive">
                      Архива
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" href="/services">
                  Услуги
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/projects">
                  Проекти
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Контакт
                </a>
              </li>
              <li className="nav-item">
                <Link href="/donate">
                  <Button color="dark small">Донирај</Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
