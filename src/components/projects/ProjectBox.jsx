import React from 'react'

const ImgPrueba = 'https://i.ytimg.com/vi/NrZygfYklXk/maxresdefault.jpg'


const ProjectBox = () => {
  return (
    <div className='projects__box'>
        <img src={ImgPrueba} alt="" />
        <h3>Titulo</h3>
        <span>Descripcion</span>
    </div>
  )
}

export default ProjectBox