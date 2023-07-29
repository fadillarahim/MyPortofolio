import { useEffect } from 'react'; 
import Aos from 'aos';

import './App.css';

function App() {

  useEffect(() => {
    Aos.init();
  }, []);

  

  return (
    <h1 className="text-indigo-900 text-2xl font-[500]">Halloo Guyss</h1>
    
  );
}

export default App;
