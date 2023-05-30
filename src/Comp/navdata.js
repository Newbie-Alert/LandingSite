import styles from './Navigation.module.css';
import { FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen } from 'react-icons/fa'

const links = [
  {
    id: 0,
    name: "Home",
    icon: <FaHome className={styles.nav_icon} />,
    path: '/'
  },
  {
    id: 1,
    name: "About",
    icon: <FaUser className={styles.nav_icon} />,
    path: '/about'
  },
  {
    id: 0,
    name: "Portfolio",
    icon: <FaFolderOpen className={styles.nav_icon} />,
    path: '/portfolio'
  },
]

export default links;