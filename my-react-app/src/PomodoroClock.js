import React, { useState, useEffect } from 'react';

const PomodoroClock = () => {
  const [workTime, setWorkTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [cycles, setCycles] = useState(2);
  const [currentCycle, setCurrentCycle] = useState(1);
  const [time, setTime] = useState(workTime * 6);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
  
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => {
          if (prevTime === 0) {
            clearInterval(interval);
  
            if (currentCycle === cycles) {
              setIsRunning(false);
              setCurrentCycle(1);
              setTime(workTime * 60);
            } else {
              setCurrentCycle(prevCycle => prevCycle + 1);
              setTime(breakTime * 60);
            }
          }
  
          return prevTime - 1;
        });
      }, 1000);
    }
  
    return () => clearInterval(interval);
  }, [isRunning, workTime, breakTime, cycles, currentCycle]);
  

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
    setTime(workTime * 60);
    setCurrentCycle(1);
  };

  const handleCycleChange = e => {
    if (!isRunning) {
      setCycles(parseInt(e.target.value));
    }
  };

  return (
    <div>
      <h2>Pomodoro Clock</h2>
      <div>
        <label>Work Time (minutes):</label>
        <input
          type="number"
          value={workTime}
          onChange={e => setWorkTime(parseInt(e.target.value))}
          disabled={isRunning}
        />
      </div>
      <div>
        <label>Break Time (minutes):</label>
        <input
          type="number"
          value={breakTime}
          onChange={e => setBreakTime(parseInt(e.target.value))}
          disabled={isRunning}
        />
      </div>
      <div>
        <label>Cycles:</label>
        <input
          type="number"
          value={cycles}
          onChange={handleCycleChange}
          disabled={isRunning}
        />
      </div>
      <div>
        <button onClick={startTimer} disabled={isRunning}>
          Start
        </button>
        <button onClick={stopTimer} disabled={!isRunning}>
          Stop
        </button>
      </div>
      <div>
        <p>Time Remaining: {Math.floor(time / 60)}:{(time % 60).toString().padStart(2, '0')}</p>
        <p>Current Cycle: {currentCycle}/{cycles}</p>
      </div>
    </div>
  );
};

export default PomodoroClock;
