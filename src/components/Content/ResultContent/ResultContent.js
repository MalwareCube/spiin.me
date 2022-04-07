import React, { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'

import WelcomeText from '../HomeContent/WelcomeText'
import SearchForm from '../HomeContent/SearchForm'

export default function ResultContent() {
  

  const location = useLocation()

  let { q } = useParams();
  q.replace(/[^\w\s,]/gi, '')
  q = q.substring(0, 150);
  const spinArray = q.split(',')
  
  //Randomize and get result
  const [randomPick, setRandomPick] = useState(spinArray[Math.floor(Math.random()*(spinArray.length))]);
  

  
  //Spin Again
  function spinAgain() {
    setRandomPick(spinArray[Math.floor(Math.random()*(spinArray.length))]);
  }

  //Copy
  function copy() {
    navigator.clipboard.writeText(randomPick)
    document.querySelector("#copyButton").classList.add("buttonMod")

    setTimeout(function(){
      document.querySelector("#copyButton").classList.remove("buttonMod")
    },800)
  }

  useEffect(() => {
    spinAgain()
  }, [location.key]);

  return (
    <div className="resultContentContainer">

      <div className="resultContentBlockLeft">

      <div className="resultContainer">
        <h3 className="resultHeading">Your result:</h3>

        <div className="resultSpinner">
          <p className="resultText">{randomPick}</p>
        </div>
        
        <div className="resultButtonContainer">
          <button className="resultButton" onClick={spinAgain}>Spin again!</button>
          <button id="copyButton" className="resultButton" onClick={copy}>Copy Result</button>
        </div>
      </div>

        
      </div>

      <div className="resultContentBlockRight">
        <WelcomeText />
        <SearchForm />
      </div>

    </div>
  )
}
