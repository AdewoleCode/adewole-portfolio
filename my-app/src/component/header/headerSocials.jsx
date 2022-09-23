import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';

const headerSocials = () => {
  return (
    <div className='header-socials'>
        <a href="https://linkedin.com" target='_blank'><BsLinkedin className='img'/></a>
        <a href="https://github.com" target='_blank'><BsGithub className='img' /></a>
        <a href="https://twitter.com" target='_blank'><BsTwitter className='img'/></a>
    </div>
  )
}

export default headerSocials