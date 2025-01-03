import { useRef } from "react";
import { useDispatch } from "react-redux";

function Controls() {
  const inputValue = useRef();
  const dispatch = useDispatch();

  const handleIncrement = () => { dispatch({ type: "INCREMENT" }); };
  const handleDecrement = () => { dispatch({ type: "DECREMENT" });};

  const handleAdd = () => {
    dispatch({
      type: "ADD",
      payload: {
        num: inputValue.current.value,
      },
    });
    inputValue.current.value = "";
  };
  const handleSubtract = () => {
    dispatch({
      type: "SUBTRACT",
      payload: {
        num: inputValue.current.value,
      },
    });
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
        <input type="text" ref={inputValue}  placeholder="Enter a number" required/>
        <button className="btn btn-info"  type="button" onClick={handleAdd}>
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
