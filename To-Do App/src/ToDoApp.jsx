import React, { useState } from "react";

function ToDoApp() {
  const [inputdata, setInputData] = useState(""); // Input data
  const [list, setList] = useState([]); // Submitted data as array

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDay = daysOfWeek[new Date().getDay()];

  // Toggle status
  const toggleStatus = (index) => {
    const updatedList = list.map((item, idx) =>
      idx === index ? { ...item, status: !item.status } : item
    );
    setList(updatedList);
  };

  return (
    <div className="app absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/10">
      <div className="mainHeading text-center">
        <h1 className="text-white font-bold">To-Do App</h1>
      </div>
      <div className="subHeading text-center mt-2">
        <h2 className="text-white font-bold">Whoop, it's {currentDay} 🌝 ☕</h2>
      </div>
      {/* Input data */}
      <div className="input flex justify-center items-center mt-3 w-80 h-8 bg-white rounded-lg p-2">
        <input
          type="text"
          onChange={(event) => {
            setInputData(event.target.value);
          }}
          value={inputdata} 
          placeholder="🖊️ Add item..."
          className="w-full h-6 border-none outline-none"
        />
        {/* List is an array, to add new data into this array using the spread operator */}
        <i
          onClick={() => {
            if (inputdata.trim() !== "") { // Not to add empty items
              setList([...list, { text: inputdata, status: false }]);
              setInputData(""); // Clear input after adding
            }
          }}
          className="fas fa-plus cursor-pointer text-lg font-bold text-gray-500 mr-2"
        ></i>
      </div>
      {/* Display the list of array values using map() */}
      {list.map((item, index) => {
        return (
          <div
            key={index}
            className="todos flex flex-col justify-center items-center mt-3"
          >
            <div className="todo flex justify-between items-center mt-3 w-80 h-8 bg-white rounded-lg p-2">
              <div className="left flex items-center">
                <input
                  type="checkbox"
                  checked={item.status}
                  onChange={() => toggleStatus(index)} 
                />
                <p
                  className={`ml-2 text-gray-500 font-bold ${
                    item.status ? "line-through" : ""
                  }`}
                >
                  {item.text}
                </p>
              </div>
              {/* Item remove */}
              <div className="right">
                <i
                  className="fas fa-times cursor-pointer text-lg text-gray-500"
                  onClick={() => setList(list.filter((_, idx) => idx !== index))}
                ></i>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ToDoApp;
