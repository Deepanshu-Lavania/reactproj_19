import React, { useState } from "react";
import todo from "../images/todo_img.jpg";

export default function Todo() {
  const [addItems, setaddItems] = useState("");
  const [newItems, setnewItems] = useState([]);
  const [buttonText, setButtonText] = useState("CHECK LIST");
  const inputEvent = (event) => {
    console.log(event.target.value);
    setaddItems(event.target.value);
  };
  const addClick = () => {
    if (!addItems) {
      alert("you can't add empty");
    } else {
      setnewItems([...newItems, addItems]);
      setaddItems("");
    }
  };
  const DeleteItem = (ind) => {
    console.log(ind);
    const remainingItems = newItems.filter((elem, id) => {
      return ind !== id;
    });
    setnewItems(remainingItems);
  };
  const removeItem = () => {
    setnewItems([]);
  };

  const changeButtonText = (text) => {
    setButtonText(text);
  };

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={todo} alt="todologo" />
            <figcaption>Add Your List Here ✌️</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍️ Add Items..."
              value={addItems}
              onChange={inputEvent}
            />
            <i
              className="fa-solid fa-plus add-btn"
              title="Add Item"
              onClick={addClick}
            ></i>
          </div>
          <div className="showItems">
            {newItems.map((elem, ind) => {
              return (
                <div className="eachItem" key={ind}>
                  <h3 className="items">{elem}</h3>
                  <i
                    className="fa-solid fa-trash-alt add-btn"
                    title="Delete Item"
                    onClick={() => DeleteItem(ind)}
                  ></i>
                </div>
              );
            })}
          </div>
          <div className="showbtn">
            <button
              onClick={removeItem}
              onMouseOver={() => changeButtonText("Remove All")}
              onMouseOut={() => changeButtonText("CHECK LIST")}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
