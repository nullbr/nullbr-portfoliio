import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './index.scss'
import { useAppContext } from '../../context'
import Title from '../Title'

const Contact = () => {
  const form = useRef()
  const { t, Loader } = useAppContext()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_bvhqapb',
        'template_gyweosm',
        form.current,
        'cTwOxaU2kVqzmEP2i'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <Title title={t('contact.title')} idx={15} />

          <p>{t('contact.paragraph')}</p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    placeholder={t('contact.name')}
                    type="text"
                    name="name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    placeholder={t('contact.email')}
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder={t('contact.subject')}
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder={t('contact.message')}
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input
                    type="submit"
                    className="flat-button"
                    value={t('contact.button')}
                  />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="map-wrap">
          <div className="info-map">
            <p>
              {t('defaults.state')},
              <br />
              {t('contact.brazil')}
              <br />
              <a href={'mailto:' + t('defaults.email')}>
                {t('defaults.email')}
              </a>
              <br />
              <a href={'tel:' + t('defaults.phone')}>{t('defaults.phone')}</a>
            </p>
          </div>
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
