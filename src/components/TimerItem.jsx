import { useEffect } from "react";

const TimerItem = ({
  id,
  currentValue,
  isPaused,
  decrementValue,
  togglePausePlay,
  resetTimer,
  deleteTimer,
}) => {
  useEffect(() => {
    const countDown = setTimeout(() => {
      if (currentValue > 0 && !isPaused) {
        decrementValue(id);
      }
    }, 1000);

    return () => clearTimeout(countDown); // This will clear the timer when the component unmounts
  }, [currentValue, isPaused]);

  return (
    <div className="container border border-5 border-primary rounded w-25 mx-2 my-3">
      {/* Delete button naten */}
      <p
        style={{ cursor: "pointer" }}
        className="text-end fw-bold fs-3"
        onClick={() => {
          deleteTimer(id);
        }}
      >
        x
      </p>

      {/* Current timer value naten */}
      <h1 className="text-center fw-bold">{currentValue}</h1>

      {/* Timer item naten */}
      <div className="container d-flex flex-wrap align-items-center justify-content-center mb-2">
        <button
          className="btn btn-success mx-1 my-1"
          onClick={() => {
            togglePausePlay(id);
          }}
        >
          {isPaused ? "Play" : "Pause"}
        </button>

        <button
          className="btn btn-danger mx-1 my-1"
          onClick={() => {
            resetTimer(id);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
export default TimerItem;
