import React from 'react'

const Section1 = () => {
  return (
    <div>
        <h1>Section 1</h1>
        <p>This is the first section of the application.</p>
        <p>It contains introductory content and sets the stage for the rest of the app.</p>
        <button onClick={() => alert('Learn more clicked!')}>Learn More</button>
    </div>
  )
}

export default Section1