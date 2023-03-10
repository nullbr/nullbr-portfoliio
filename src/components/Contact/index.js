import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()
  const { t } = useTranslation()

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bvhqapb', 'template_gyweosm', form.current, 'cTwOxaU2kVqzmEP2i')
      .then(() => {
        alert('Message successfully sent!');
        window.location.reload(false);
      }, () => {
        alert('Failed to send the message, please try again');
      });
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={t('contact.title').split("")}
              idx={15}
            />
          </h1>
          <p>
            {t("contact.paragraph")}
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder={t("contact.name")} type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder={t("contact.email")}
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder={t("contact.subject")}
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder={t("contact.message")}
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value={t("contact.button")} />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          S??o Paulo,
          <br />
          {t("contact.brazil")}
          <br />
          <span>bmarianoleite3@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[-23.599034, -48.486063]} zoom={9}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[-23.599034, -48.486063]}>
              <Popup>Bruno lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
