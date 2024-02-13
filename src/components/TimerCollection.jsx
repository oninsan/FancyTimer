import TimerItem from "./TimerItem";

const TimerCollection = ({
  timers,
  decrementValue,
  togglePausePlay,
  resetTimer,
  deleteTimer,
}) => {
  return (
    <div className="container mt-4 mb-4 d-flex flex-wrap align-items-center justify-content-evenly">
      {timers.map((timer) => {
        return (
          <TimerItem
            {...timer}
            key={timer.id}
            decrementValue={decrementValue}
            togglePausePlay={togglePausePlay}
            resetTimer={resetTimer}
            deleteTimer={deleteTimer}
          />
        );
      })}
    </div>
  );
};
export default TimerCollection;
