import React from 'react'
import './styles.css'
import userConfig from '../../config' // Ajusta la ruta según tu estructura
import verifiedIcon from '../../assets/verified.png'
import whatsappIcon from '../../assets/whatsapp.svg'
import facebookIcon from '../../assets/facebook.svg'
import tiktokIcon from '../../assets/tiktok.svg'
import emailIcon from '../../assets/mail.svg'

function Avatar() {
  const socialIcons = [
    {
      link: userConfig.socialLinks.whatsapp,
      icon: whatsappIcon,
      alt: 'WhatsApp',
    },
    {
      link: userConfig.socialLinks.facebook,
      icon: facebookIcon,
      alt: 'Facebook',
    },
    { link: userConfig.socialLinks.tiktok, icon: tiktokIcon, alt: 'TikTok' },
    { link: userConfig.socialLinks.email, icon: emailIcon, alt: 'Email' },
  ]

  return (
    <div className="avatar-container mt-5 ">
      <div className="avatar-wrapper">
        <img src={userConfig.profilePicture} alt="Avatar" className="avatar" />
        <img src={verifiedIcon} alt="Verificado" className="verified-icon" />
      </div>
      <h1 className="mb-0">{userConfig.name}</h1>
      <small>{userConfig.description}</small>
      <div className="social-icons">
        {socialIcons.map(
          (social, index) =>
            social.link && ( // Si el link no está vacío, muestra el icono
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={social.icon} alt={social.alt} />
              </a>
            ),
        )}
      </div>
    </div>
  )
}

export default Avatar
