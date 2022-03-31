import React from 'react'

export default function Header() {
  return (
    <div className="homeContentContainer">

      <div className="contentBlockLeft">
        <p>Can’t decide where to eat? What movie to watch? Or just need a non-sentient being to pick an option at random? Provide <i>spiin.me</i> with the options and let the magic happen!</p>
        
        <form className="spinForm">
          <input className="spinText" type="text" placeholder="vanilla, chocolate, mint, strawberry, cookie dough"/>
          <input className="spinSubmit" type="submit" value="Spin!"/>
        </form>

        <p className="spinWarning">Ensure options are separated by a comma.</p>


        <p>Are you a superior terminal consoomer? Get an instant result with cURL:</p>
        <img className="terminalImg" alt="curl spiin.me/d6 command output" src="images/terminal.png"/>
      </div>

      {/* /////////// */}

      <div className="contentBlockRight">
        <h3>Quick Spins</h3>
        
        <h4>Dice:</h4>
        <ul className="quickSpinList">
          <li><a href="#">d4</a>,</li>
          <li><a href="#">d6</a>,</li>
          <li><a href="#">d8</a>,</li>
          <li><a href="#">d10</a>,</li>
          <li><a href="#">d12</a>,</li>
          <li><a href="#">d20</a></li>
        </ul>

        <h4>Misc:</h4>
        <ul className="quickSpinList">
          <li><a href="#">coinflip</a>,</li>
          <li><a href="#">yes or no</a>,</li>
          <li><a href="#">magic 8 ball</a></li>
        </ul>
      </div>

    </div>
  )
}