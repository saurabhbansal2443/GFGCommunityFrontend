import React from 'react'
import FeedProfile from './FeedComponents/FeedProfile'
import FeedAdder from './FeedComponents/FeedAdder'

const Home = () => {
  return (
    <div className='bg-white w-screen h-screen'>
    <FeedProfile></FeedProfile>
    <FeedAdder></FeedAdder>
    </div>
  )
}

export default Home
