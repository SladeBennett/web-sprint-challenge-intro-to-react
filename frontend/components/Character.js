import React, { useState } from 'react'

export default function Character({ name, planet }) {
  const [display, setDisplay] = useState(false)

  const handleClick = () => {
    setDisplay(!display);
  }

  const thePara = document.createElement('p')
  thePara.textContent = "Planet: "

  const theName = document.createElement('span')
  theName.textContent = planet 

  thePara.appendChild(theName)

  // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld


  function AddChildElem() {
    return <p>Planet: 
      <span className='character-planet'> {planet}</span>
    </p>
  }


  return (
    <div onClick={handleClick} className='character-card'>
      <h3 className='character-name'>{name}</h3>
      {display ? <AddChildElem/> : console.log('OFF') /* Use the same markup with the same attributes as in the mock */}
    </div>
  )
}


