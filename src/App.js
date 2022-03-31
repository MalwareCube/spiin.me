import Header from './components/Header'
import HomeContent from './components/HomeContent'
import Footer from './components/Footer'

function App() {
  return (
    <div className="container">

      {/* Main Header */}
      <Header />
      {/* End of Main Header */}

      
      <HomeContent />


      {/* Footer */}
      <Footer />
      {/* End of Footer */}
      
    </div>
  );
}

export default App;
