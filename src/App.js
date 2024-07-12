import React, { useMemo, useState } from 'react'
import './App.css'

const App = () => {
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(70);
  function onWieghtChange(event) {
    setWeight(event.target.value)

  }

  function onHieghtChange(event) {
    setHeight(event.target.value)

  }

  const output = useMemo(() => {
    const CalculateHeight = height / 100;
    return (weight / (CalculateHeight * CalculateHeight)).toFixed(1)
  }, [weight, height]);
  return (
    <div className='mainpart'>
      <h1 className='bmic'>
         BMI Calculator</h1>
      <div className='ínput-section '>
        <p className='slider-output'> Weight: {weight}kg
        </p>
        <input className='input-slider'
          type='range'
          step="1"
          min="40"
          max=" 200"
          onChange={onWieghtChange}
        />
        <p className='slider-output' > Hieght:{height}cm</p>
        <input className='input-slider'
          type='range'
          onChange={onHieghtChange}
          min={140}
          max={220} />
        <div className='output-section'>
          <p>  your BMI is</p>
          <p className='output'>{output}</p>

        </div>


      </div>
    </div>
  )
}

export default App