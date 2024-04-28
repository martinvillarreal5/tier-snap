import './App.css';
import TierContainer from './components/tier-table/TierContainer';

function App() {
  return (
    <div className="container mx-auto flex min-h-screen flex-col justify-center">
      <h1 className="mb-3 text-center text-white">TIER SNAP</h1>
      <TierContainer />
    </div>
  );
}

export default App;
