import { useSelector } from "react-redux";

function DisplayCounter() {
  // const counter = useSelector((store) => store.counter);
  const counterObj = useSelector((store) => store.counter);
  const counter = counterObj.counterVal;
  console.log(counterObj)
  return (
    <>
      <p className="lead mb-4">Counter current value : {counter}</p>
    </>
  );
}

export default DisplayCounter;
