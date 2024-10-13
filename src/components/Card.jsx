import React from 'react'
import Button from './Button'

const Card = () => {
  return (
    <div className='card'>
      <div className='image'><img src="/assets/avatar-jessica.jpeg" alt="Avatar" /></div>

      <h1>Jessica Randall</h1>
      <h3>London, United Kingdom</h3>

      <p>"Front-end developer and avid reader."</p>

      <Button text={"GitHub"} page={"https://github.com/ronesanttos"}/>
      <Button text={"Frontend Mentor"}  page={"https://www.frontendmentor.io/"}/>
      <Button text={"Linkedin"} page={"https://www.linkedin.com/feed/"}/>
      <Button text={"Twitter"} page={"https://x.com/"}/>
      <Button text={"Instagram"} page={"https://www.instagram.com/"}/>

      <p>Desenvolvido por <a href="https://github.com/ronesanttos">Rone Santos</a></p>
    </div>
  )
}

export default Card
