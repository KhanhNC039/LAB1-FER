import React from 'react'
import { Films } from '../Share/ListOfFilms'
export default function Films() {
    return (
      <div className='grid-container'>
        {Films.map((film) => (
          <div className='column grid-item'>
            <div className='card'>
              <img src={film.img}/>
              <h3>{film.title}</h3>
              <p className='title'>{film.year} - {film.nation}</p>
              <p><button>Detail!!!!!</button></p>
            </div>
          </div>
        ))}
      </div>
      )
}
