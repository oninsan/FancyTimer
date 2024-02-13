import { useState } from "react";
import AddTimerForm from "./components/AddTimerForm";
import TimerCollection from "./components/TimerCollection";

function App() {
  const [timers, setTimers] = useState([]);
  console.log("refreshed");

  const addTimer = (time) => {
    setTimers((currentTimers) => {
      return [
        ...currentTimers,
        {
          id: crypto.randomUUID(),
          time: parseInt(time),
          currentValue: parseInt(time),
          isPaused: false,
        },
      ];
    });
  };

  const decrementValue = (id) => {
    setTimers((currentTimers) => {
      return currentTimers.map((timer) =>
        timer.id === id
          ? { ...timer, currentValue: timer.currentValue - 1 }
          : timer
      );
    });
  };

  const togglePausePlay = (id) => {
    setTimers((currentTimers) => {
      return currentTimers.map((timer) =>
        timer.id === id ? { ...timer, isPaused: !timer.isPaused } : timer
      );
    });
  };

  const resetTimer = (id) => {
    setTimers((currentTimers) => {
      return currentTimers.map((timer) =>
        timer.id === id ? { ...timer, currentValue: timer.time } : timer
      );
    });
  };

  const deleteTimer = (id) => {
    setTimers((currentTimers) => {
      return currentTimers.filter((currentTimer) => currentTimer.id !== id);
    });
  };

  return (
    <>
      <div className="container w-75 border border-5 border-primary rounded mt-5">
        <AddTimerForm addTimer={addTimer} />
        <TimerCollection
          timers={timers}
          decrementValue={decrementValue}
          togglePausePlay={togglePausePlay}
          resetTimer={resetTimer}
          deleteTimer={deleteTimer}
        />
      </div>
    </>
  );
}

export default App;
