import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/Index";

function Controls() {
  const inputValue = useRef();
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };
  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handleAdd = () => {
    dispatch(
      counterActions.add(
        inputValue.current.value,
      )
    );
    inputValue.current.value = " ";
  };
  const handleSubtract = () => {
    dispatch(
      counterActions.subtract(
        inputValue.current.value,
      )
    );
    inputValue.current.value = "";
  };

  const handlePrivacyToggle = () => {
    dispatch({ type: "TOGGLE_PRIVACY" });
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleIncrement}
        >
          INCREMENT
        </button>
        <button
          className="btn btn-success"
          type="button"
          onClick={handleDecrement}
        >
          DECREMENT
        </button>
        <button
          className="btn btn-warning"
          type="button"
          onClick={handlePrivacyToggle}
        >
          PrivacyToggle
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input
          type="text"
          ref={inputValue}
          placeholder="Enter a number"
          required
        />
        <button className="btn btn-info" type="button" onClick={handleAdd}>
          Add
        </button>
        <button
          className="btn btn-danger"
          type="button"
          onClick={handleSubtract}
        >
          Subtract
        </button>
        {/* <button className="btn btn-primary" type="button"></button> */}
      </div>
    </>
  );
}

export default Controls;
