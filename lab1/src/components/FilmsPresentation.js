import React from 'react'
export default function FlimsPresentation({films}) {
     console.log(films);
    return (
     <div className='grid-container'>
        {films.map((film)=>(
        <div className='column grid-item'>
        <div className='card'>
        <img src={film.img} alt='nice'/>
          <h3>{film.title}</h3>
          <p className='title'>{film.year} - {film.nation}</p>
          <p><button>Detail!!!!!</button></p>
        </div>
      </div>
     ))}</div>   
  )
}
