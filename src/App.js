
function App() {
  return (
    <div>

      {/* Main Header */}
      <header>
        <h2 className="headerLogo">spiin.me</h2>
      </header>
      {/* End of Main Header */}




      {/* Content Container */}
      <div>
        {/* Left Side Content */}
        <div>
          <p>Can’t decide where to eat? What movie to watch? Or just need a non-sentient being to pick an option at random? Provide spiin.me with the options and let the magic happen! </p>
          
          <form>
            <input type="text" placeholder="vanilla, chocolate, mint, strawberry, cookie dough"/>
            <input type="submit" value="Spin!"/>
          </form>
          <p>Ensure options are separated by a comma " , "</p>


          <p>Are you a superior terminal consoomer? Get an instant result with cURL:</p>
          <img/>
        </div>
        {/* End of Left Side Content */}


        {/* Right Side Content */}
        <div>
          <h3>Quick Spins</h3>
          
          <h4>Dice</h4>
          <ul>
            <li><a href="#">d4</a>,</li>
            <li><a href="#">d6</a>,</li>
            <li><a href="#">d8</a>,</li>
            <li><a href="#">d10</a>,</li>
            <li><a href="#">d12</a>,</li>
            <li><a href="#">d20</a></li>
          </ul>

          <h4>Misc:</h4>
          <ul>
            <li><a href="#">coinflip</a>,</li>
            <li><a href="#">yes or no</a>,</li>
            <li><a href="#">magic 8 ball</a></li>
          </ul>

        </div>
        {/* End of Right Side Content */}
      </div>
      {/* End of Content Container */}
      


      {/* Footer */}
      <footer>spiin.me is an <a href="">open-source</a> option randomizer created by <a href="https://twitter.com/odacavo">@odacavo</a>.</footer>
      {/* End of Footer */}
      
    </div>
  );
}

export default App;
