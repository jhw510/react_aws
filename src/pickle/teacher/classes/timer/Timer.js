import React from 'react';
import useCountDown from 'react-countdown-hook';

import './timer.css';

const msToSec = ms => (ms / 1000).toFixed(1);
const initialTime = 60 * 10000; // initial time in milliseconds

const Timer = () => {
  const [timeLeft, start] = useCountDown(initialTime, 6000000);
  
  // start the timer during the first render
  React.useEffect(() => {
    start();
  }, []);
  
  const restart = React.useCallback(() => {
    start(initialTime);
  }, [start]);
 
  return (
    <div class="counter">
      <p>Time left: {msToSec(timeLeft)}</p>
    </div>
  );
}
export default Timer