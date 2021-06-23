// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import computer from '../../assets/computer.jpg';

// == Composant
const Contact = ({
  inputNameClient, textInputNameClient,
  onChangeSubmit, inputEmailClient, textInputEmailClient,
  inputMessageClient, textInputMessageClient,
}) => (
  <div className="contact">
    <div className="container__contact--left animate">
      <img src={computer} alt="" className="container__contact--left__img" />
    </div>
    <div className="container__contact--right">
      <form
        action=""
        method="post"
        className="contact__form"
        onSubmit={(evt) => {
          evt.preventDefault();
          onChangeSubmit();
        }}
      >
        <h1 className="contact__title">Contatez-moi</h1>
        <p className="contact__text">Votre nom</p>
        <input
          className="contact__input"
          type="text"
          value={inputNameClient}
          onChange={(evt) => {
            const textNameClient = evt.target.value;
            textInputNameClient(textNameClient);
          }}
        />
        <p className="contact__text">Votre email</p>
        <input
          className="contact__input"
          type="email"
          value={inputEmailClient}
          onChange={(evt) => {
            const textEmailClient = evt.target.value;
            textInputEmailClient(textEmailClient);
          }}
        />
        <p className="contact__text">Votre méssage</p>
        <textarea
          className="contact__input textarea"
          type="textarea"
          value={inputMessageClient}
          onChange={(evt) => {
            const textMessageClient = evt.target.value;
            textInputMessageClient(textMessageClient);
          }}
        />
        <button
          type="submit"
          className="contact__button"
        >
          Envoyer
        </button>
      </form>
    </div>
  </div>
);

Contact.propTypes = {
  inputNameClient: PropTypes.string.isRequired,
  textInputNameClient: PropTypes.func.isRequired,
  inputEmailClient: PropTypes.string.isRequired,
  textInputEmailClient: PropTypes.func.isRequired,
  inputMessageClient: PropTypes.string.isRequired,
  textInputMessageClient: PropTypes.func.isRequired,
  onChangeSubmit: PropTypes.func.isRequired,
};

// == Export
export default Contact;
