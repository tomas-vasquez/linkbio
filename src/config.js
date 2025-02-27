const phone = 59176897088

const userConfig = {
  name: 'Tomás Vasquez',
  description: 'Técnico en electrónica móvil.',
  profilePicture: 'https://github.com/tomas-vasquez.png',
  socialLinks: {
    whatsapp: `https://wa.me/${phone}`,
    facebook: 'https://www.facebook.com/tomastloger',
    tiktok: 'https://tiktok.com/@tomasvasquezquispe',
    email: 'mailto:tomasgilbertovasquezquispe@gmail.com',
  },

  links: [
    {
      type: 'separator',
      text: '¿En que te puedo ayudar hoy?',
    },
    {
      type: 'button',
      text: 'Quiero <strong>comprar</strong> un celular ',
      url: `https://wa.me/c/${phone}`,
    },

    {
      type: 'button',
      text: 'Quiero <strong>vender</strong> mi celular',
      url: 'https://www.tiktok.com/@tucuenta',
    },
    {
      type: 'button',
      text: 'Quiero <strong>reparar</strong> mi celular',
      url: 'mailto:tuemail@example.com',
    },
    {
      type: 'separator',
      text: '¿Tienes alguna duda?',
    },
    {
      type: 'button',
      text: 'Chatea conmigo.',
      url: `https://wa.me/${phone}?text=${encodeURI('Hola, quiero información sobre tus servicios.')}`,
    },
  ],
}

export default userConfig
