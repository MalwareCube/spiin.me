import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Global/Header'
import HomeContent from './components/Content/HomeContent/HomeContent'
import ResultContent from './components/Content/ResultContent/ResultContent'
import Footer from './components/Global/Footer'

function App() {
  return (
    <div className="container">
      
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/:q" element={<ResultContent />} />
          
          {/*Quick Links Routes*/}
          <Route path="/d4" element={<Navigate to="/1,2,3,4" replace />} />
          <Route path="/d6" element={<Navigate to="/1,2,3,4,5,6" replace />} />
          <Route path="/d8" element={<Navigate to="/1,2,3,4,5,6,7,8" replace />} />
          <Route path="/d10" element={<Navigate to="/1,2,3,4,5,6,7,8,9,10" replace />} />
          <Route path="/d12" element={<Navigate to="/1,2,3,4,5,6,7,8,9,10,11,12" replace />} />
          <Route path="/d20" element={<Navigate to="/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20" replace />} />
          
          <Route path="/coinflip" element={<Navigate to="/heads,tails" replace />} />
          <Route path="/yn" element={<Navigate to="/yes,no" replace />} />
          <Route path="/magic8" element={<Navigate to="/It is certain,Without a doubt,As I see it yes,Most likely,Ask again later,Concentrate and ask again,Very doubtful,My sources say no" replace />} />

          {/*404 Route*/}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
