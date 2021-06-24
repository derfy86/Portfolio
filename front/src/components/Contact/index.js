// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import computer from '../../assets/computer.jpg';

// == Composant
const Contact = ({
  onChangeSubmit,
  user,
  changeDataUser,
  errorLine,
  deleteErrorLine,
  messageSend,
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
        {
          errorLine.name && (
            <p className="contact__error">Vous devez renseigner votre nom</p>
          )
        }
        <input
          className="contact__input"
          type="text"
          value={user.name}
          onFocus={(evt) => {
            deleteErrorLine();
          }}
          onBlur={(evt) => {
            // onChangeSubmit();
          }}
          onChange={(evt) => {
            const textClient = evt.target.value;
            changeDataUser(textClient, 'name');
          }}
        />
        <p className="contact__text">Votre email</p>
        {
          errorLine.email && (
            <p className="contact__error">Vous devez renseigner votre email</p>
          )
        }
        <input
          className="contact__input"
          type="email"
          value={user.email}
          onFocus={(evt) => {
            deleteErrorLine();
          }}
          onChange={(evt) => {
            const textClient = evt.target.value;
            changeDataUser(textClient, 'email');
          }}
        />
        <p className="contact__text">Votre méssage</p>
        {
          errorLine.message && (
            <p className="contact__error">Vous devez renseigner votre méssage</p>
          )
        }
        <textarea
          className="contact__input textarea"
          type="textarea"
          value={user.message}
          onFocus={(evt) => {
            deleteErrorLine();
          }}
          onChange={(evt) => {
            const textClient = evt.target.value;
            changeDataUser(textClient, 'message');
          }}
        />
        {
          messageSend ? (
            <p className="contact__done">Votre message a bien été délivré, vous allez reçevoir un email de confirmation.</p>
          ) : (
            <button
              type="submit"
              className="contact__button"
            >
              Envoyer
            </button>

          )
        }
      </form>
    </div>
  </div>
);

Contact.propTypes = {
  user: PropTypes.object.isRequired,
  changeDataUser: PropTypes.func.isRequired,
  onChangeSubmit: PropTypes.func.isRequired,
  errorLine: PropTypes.object.isRequired,
  deleteErrorLine: PropTypes.func.isRequired,
  messageSend: PropTypes.bool.isRequired,
};

// == Export
export default Contact;
