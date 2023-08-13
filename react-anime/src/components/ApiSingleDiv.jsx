import React from 'react'

const ApiSingleDiv = ({title, genres, image, synopsis, type, id, onClick}) => {
  return (
    <div className="single-container"  
      id={parseInt(id)}
    >
      <h4 className="anime-title">{title}</h4>
      <p className="genres">{genres}</p>
      <p className="type">{type}</p>
      <p className="about">{synopsis}</p>
      <img src={image}/>
      <button className="add-btn" 
        onClick={onClick}
        id={title}
        value={image}
      >
        ADD
      </button>
    </div>
  )
}

export default ApiSingleDiv;