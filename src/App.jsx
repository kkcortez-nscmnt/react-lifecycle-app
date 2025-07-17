import { useState } from 'react';
import LifecycleLogger from './component/LifecycleLogger';

const App = () => {
  const [showLogger, setShowLogger] = useState();
  return (
    <div className='container'>
      <h2>React Lifecycle Playground</h2>

      <button className="primary-btn" onClick={() => setShowLogger(!showLogger)}>
        {showLogger ? 'Unmonted Logger' : 'Mount Logger'}
      </button>
      {showLogger && <LifecycleLogger/>}
    </div>
  );
};

export default App;
