import React from 'react'
import Jumbotron from '../../components/Jumbotron/Jumbotron'
import NavBar from './NavBar'

const HomePage = () => {
  return (
    <div className='w-full overflow-hidden'>
        <NavBar/>
        <Jumbotron/>
    </div>
  )
}

export default HomePage