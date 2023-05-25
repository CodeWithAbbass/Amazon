import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../store/slice/noteSlice";
import { useEffect } from "react";
const App = () => {
  const Notes = useSelector((state) => {
    return state.Notes.items;
  });

  let dispatch = useDispatch();
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div className="App">
      <div className="Notes">
        {Notes.map((item, index) => {
          return (
            <span
              className="note"
              key={index}
              onClick={() => dispatch(addNote())}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default App;
