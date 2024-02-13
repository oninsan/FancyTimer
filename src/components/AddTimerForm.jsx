import { useState } from "react";

const AddTimerForm = ({ addTimer }) => {
  const [timer, setTimer] = useState("");

  const onSubmitTimer = (e) => {
    e.preventDefault();
    if (timer === null || timer <= 0) return;
    addTimer(timer);
    setTimer("");
  };

  return (
    <form
      onSubmit={onSubmitTimer}
      className="d-flex align-items-center justify-content-center mt-4"
    >
      <input
        type="number"
        className="form-control w-75 me-2"
        value={timer}
        onChange={(e) => setTimer(e.target.value)}
      />
      <button className="btn btn-primary">Add timer</button>
    </form>
  );
};

export default AddTimerForm;
