import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as RxIcons from "react-icons/rx";
import * as HiIcons from "react-icons/hi";
import * as SiIcons from "react-icons/si";

import ctc_logo from "../assets/images/Lg-CTC-web.png"
import cuajiniquil_logo from "../assets/images/1-cuajiniquil-logo.png"
import puerto_soley_logo from "../assets/images/2-puerto-soley-logo.png"
import asojunquillal_logo from "../assets/images/3-asojunquillal-logo.png"
import posadas_cuajiniquil_logo from "../assets/images/4-posadas-cuajiniquil-logo.png"
import cetur_logo from "../assets/images/5-cetur-logo.png"

const FooterData = [
  {
    // Links inside the website
    name: 'Important links',
    attributes: [
      {
        title: '',
        description: 'Home',
        link: '/',
        icon: null,
        externalicon: ''
      },
      {
        title: '',
        description: 'Testimonials',
        link: '/testimonials',
        icon: null,
        externalicon: ''
      }, 
      {
        title: '',
        description: 'Home',
        link: '/',
        icon: null,
        externalicon: ''
      },
      {
        title: '',
        description: 'Testimonials',
        link: '/testimonials',
        icon: null,
        externalicon: ''
      },
      {
        title: '',
        description: 'Home',
        link: '/',
        icon: null,
        externalicon: ''
      }
    ]
  },
  {
    name: 'We are part of CTC (Corredor Turístico Costero)',
    attributes: [
      {
        title: '',
        description: 'Puerto Soley',
        link: 'https://www.puertosoley.com/',
        icon: null,
        externalicon: puerto_soley_logo
      },
      {
        title: '',
        description: 'Asociación de Operadores Turísticos Marinos de Cuajiniquil',
        link: 'https://www.cuajiniquilcr.com/',
        icon: null,
        externalicon: cuajiniquil_logo
      },
      {
        title: '',
        description: 'Refugio Nacional de Vida Silvestre Bahía Junquillal',
        link: 'https://www.junquillallacruz.com/',
        icon: null,
        externalicon: asojunquillal_logo
      },
      {
        title: '',
        description: 'Red de Posadas Familiares de Cuajiniquil',
        link: 'https://www.posadaslacruz.com/',
        icon: null,
        externalicon: posadas_cuajiniquil_logo
      },
      {
        title: '',
        description: 'Cámara de Empresarios Turísticos de la Cruz',
        link: 'https://www.ceturlacruzcr.com/',
        icon: null,
        externalicon: cetur_logo
      }
    ]
  },
  {
    name: 'Contact us',
    attributes: [
      {
        title: 'Phone: ',
        description: '+506 8906 0672',
        link: '',
        icon: <FaIcons.FaPhoneAlt />,
        externalicon: ''
      },
      {
        title: 'Email: ',
        description: 'apatubaju@gmail.com',
        link: '',
        icon: <HiIcons.HiMail />,
        externalicon: ''
      }, 
      {
        title: '',
        description: 'Refugio de Vida Silvestre Bahía Junquillal, Cuajiniquil, La Cruz. Guanacaste.',
        link: '',
        icon: '',
        externalicon: ''
      },
      {
        title: 'Google maps',
        description: 'Open in Google Maps',
        link: 'https://www.google.com/maps/place/Refugio+de+Vida+Silvestre+Junquillal/@10.9643725,-85.7522295,12z/data=!4m5!3m4!1s0x8f75a1f3e79fd02b:0x32af8478562c4b84!8m2!3d10.9643805!4d-85.6820157?shorturl=1',
        icon: <SiIcons.SiGooglemaps />,
        externalicon: ''
      }
    ]
  }
]

export default FooterData