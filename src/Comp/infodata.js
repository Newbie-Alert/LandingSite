import { Link } from "react-router-dom"

export const personalInfo = [
  {
    id: 0,
    title: 'Name: ',
    description: '이락균',
  },
  {
    id: 1,
    title: 'Age: ',
    description: '30',
  },
  {
    id: 2,
    title: 'Email: ',
    description: 'aggean0323@gmail.com',
  },
  {
    id: 3,
    title: 'Phone: ',
    description: '010 - 3356 - 6137',
  },
  {
    id: 4,
    title: 'Location: ',
    description: '서울',
  },
  {
    id: 5,
    title: 'Github: ',
    description: <Link to='https://github.com/Newbie-Alert'>https://github.com/Newbie-Alert</Link>,
  },
]