// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';
import CircleLoader from '../CircleLoader';
import computer from '../../assets/pictures/computer.jpg';

// == Composant
const Contact = ({
  onChangeSubmit,
  user,
  changeDataUser,
  errorLine,
  deleteErrorLine,
  messageSend,
  messageWrong,
  loading,
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
          onFocus={() => {
            deleteErrorLine();
          }}
          // onBlur={() => {
          //   onChangeSubmit();
          // }}
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
          onFocus={() => {
            deleteErrorLine();
          }}
          onChange={(evt) => {
            const textClient = evt.target.value;
            changeDataUser(textClient, 'email');
          }}
        />
        <p className="contact__text">Votre mssage</p>
        {
          errorLine.message && (
            <p className="contact__error">Vous devez renseigner votre message</p>
          )
        }
        <textarea
          className="contact__input textarea"
          type="textarea"
          value={user.message}
          onFocus={() => {
            deleteErrorLine();
          }}
          onChange={(evt) => {
            const textClient = evt.target.value;
            changeDataUser(textClient, 'message');
          }}
        />
        {
          loading ? (
            <div className="container--loader">
              <CircleLoader
                colour="#7ED8F7"
                radius={20}
                duration={2}
                strokeWidth={6}
              />
            </div>
          ) : (
            <button
              type="submit"
              className="contact__button"
            >
              Envoyer
            </button>
          )
        }
        {
          messageSend && (
            <p className="contact__done">Votre message a bien été délivré, vous allez recevoir un email de confirmation.</p>
          )
        }{
          messageWrong && (
            <p className="contact__wrong">Un problème est survenu, merci de réessayer ultérieurement.</p>
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
  messageWrong: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

// == Export
export default Contact;
