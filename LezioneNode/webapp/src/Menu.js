import React from 'react'

const Menu = (props/*oppure {nome,age}*/) => {
    //area 1 :js

    let {name,age,occupation} = props;



    //area 2 :jsx
    //regola 1 : deve stare tutto dentro ad un solo tag
    //regola 2 : conflitti class ... html className per css 
    //regole 3 : {} js ... css{{}}
  return (
    <div>
     <h1 className='colorerosso'>Menu di {name} {age} {occupation}</h1> 
     
     <h2 style={ {"color":"red"}}>Prova</h2>

    </div>
  )
}

export default Menu
