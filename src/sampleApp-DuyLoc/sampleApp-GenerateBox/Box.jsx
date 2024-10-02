import React from "react";

function Box() {
  const [count, setCount] = React.useState(0);
  const [box, setBox] = React.useState([]);

  function generateBox() {
    const newBox = Array.from({ length: count }).map((_, index) => ({
      id: index,
      color: randomColor(),
    }));
    setBox(newBox);
  }

  function randomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }

  const changeColor = (id) => {
    setBox((prevBox) =>
      prevBox.map((items) =>
        items.id === id ? { ...items, color: randomColor() } : items
      )
    );
  };
  return (
    <>
      <h1>Sample App - GenerateBox Loc</h1>
      <label htmlFor="inputQuantityBox">Numbers of boxes: </label>
      <input
        type="text"
        id="inputQuantityBox"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <button
        type="button"
        onClick={generateBox}
      >
        Generator Box
      </button>
      <div className="box">
        {box.map((box) => {
          return (
            <div
              className="box__item"
              style={{ backgroundColor: box.color }}
              onClick={() => changeColor(box.id)}
              key={box.id}
            >
              Box #{box.id + 1}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Box;
