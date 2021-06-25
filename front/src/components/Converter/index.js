import React, { useState } from 'react';

// == Import
import HeaderConverter from './HeaderConverter';
import Main from './Main';
import Footer from './Footer';
import Toggler from './Toggler';
import './styles.css';
import Data from './currencies';
// == Composant
const Converter = () => {
  const [countryFooter, setCountryFooter] = useState({ name: 'United States Dollar' });
  const [rateFooter, setRateFooter] = useState({ rate: 1.09 });
  const [opened, setOpened] = useState(true);
  const [baseAmount, setBaseAmount] = useState(1);

  function toggle() {
    setOpened(!opened);
  }

  function changeBaseValue(newBaseValue) {
    setBaseAmount(newBaseValue);
  }

  function handleclick(newValue) {
    const target = Data.find((country) => (country.name === newValue));
    setCountryFooter(target);
    setRateFooter(target);
    return countryFooter;
  }

  function calculate() {
    const currencyObject = Data.find(
      (currencyInArray) => currencyInArray.name === countryFooter.name,
    );
    const result = (baseAmount * currencyObject.rate).toFixed(2);
    return parseFloat(result, 10);
  }

  return (
    <div className="app--converter">
      <div className="background--converter">
        <HeaderConverter baseAmount={baseAmount} onInputChange={changeBaseValue} />
        <Toggler open={opened} toggle={toggle} />
        {
            opened && (
            <>
              <Main
                handleClick={handleclick}
                countries={Data}
                countryFooter={countryFooter}
              />
              <Footer
                countryName={countryFooter}
                value={calculate()}
              />
            </>
            )
        }
      </div>
    </div>
  );
};
// == Export
export default Converter;
