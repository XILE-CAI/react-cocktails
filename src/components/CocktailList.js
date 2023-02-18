import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'

const CocktailList = () => {
  const {loading,cocktails} =useGlobalContext()
  
  if(loading){
    return <Loading />
  }
  if(cocktails.length < 1){
     return (<h2 className='section-title'>
    noCocktail matched your search criteria</h2> 
  )}

  return (
    <section className='section'>
      <h2 className='section-title'>
        cocktails
      </h2>
      <div className='cocktails-center'>
        {cocktails.map((cocktail)=>{
          return (
            <Cocktail key={cocktail.id} {...cocktail}/>
          )
        })}
      </div>
    </section>
  )
}

export default CocktailList
