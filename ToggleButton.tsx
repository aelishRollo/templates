import React, { useState } from 'react';


//architechture of this snippet:

//purpose: click the button to toggle rendering of the <Comp1>

//architechture: <Comp1/> and <ButtonGuy /> are both inside parent component
//parent component passes props to children.

//Syntax: 
//-parent just describes the prop as a field on the component it's calling
//-children accept props as a function argument, and then use props.foo to access methods and attributes

//we use useState to modify the state in each part. The main challenge was making sure all the data flow
 //was correct.


const Comp1 = (props) => {
  let result = <> </>
  let isVisible = props.toggleButton
  console.log(isVisible)
  if (isVisible) {
    result = <h1> Hey, click the button to toggle if I'm being rendered or not</h1>
  }
  return (
    result
  )
}


const ButtonGuy = (props) => {

  const handleToggleButtonClick = () => {
    props.setToggleButton(!props.toggleButton)
  };


  return (
    <>
      <button onClick={handleToggleButtonClick}> Hey I'm the button, guy :) </button>
    </>
  )
}

const ParentComponent = (props) => {
  let [toggleButton, setToggleButton] = useState(false)

  return (
    <div>
      <ButtonGuy setToggleButton={setToggleButton} toggleButton={toggleButton} />
      <Comp1 toggleButton={toggleButton} />

    </div>
  )
}


export function App(props) {
  return (
    <div className='App'>
      <ParentComponent />
    </div>
  );
}
