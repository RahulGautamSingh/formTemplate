import { useState } from "react";

function App() {
  let [curr, setCurr] = useState(1);
  let [max,setMax] = useState(1);
  return (
    <div className="container">
      <div className="card">
        <div className="left">
       
             <button onClick={() => setCurr(1)}>1️⃣  Choose title</button>{" "}
          
         
            <button disabled={max < 2} onClick={() => setCurr(2)}>
            2️⃣  Choose description
            </button>
          
          
            <button disabled={max < 3} onClick={() => setCurr(3)}>
            3️⃣  Confirm data
            </button>
          
        </div>
        {curr === 1 && (
          <div className="right">
            <p>Choose title</p>
            <button onClick={() => {setCurr(2);setMax(2);}}>Submit Title</button>
          </div>
        )}
        {curr === 2 && (
          <div className="right">
            <p>Choose description</p>
            <div>
              <button onClick={() => setCurr(1)}>Back</button>
              <button onClick={() => {setCurr(3);setMax(3);}}>Submit Description</button>
            </div>
          </div>
        )}
        {curr === 3 && (
          <div className="right">
            <p>Are you happy now?</p>
            <div>
              <button onClick={() => setCurr(2)}>No go back</button>
              <button onClick={() => {setCurr(4);setMax(4);}}>Yes go ahead</button>
            </div>
          </div>
        )}
        {curr === 4 && (
          <div className="right">
            <p>Okay we are done.Thank you for submitting the data!!!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
