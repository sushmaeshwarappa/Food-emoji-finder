import React, { useState } from "react";
import "./styles.css";

const FoodDictionary = {
    "🍕": "Pizza",
    "🌭": "Hot Dog",
    "🥪": "Sandwich",
    "🥞": "Pancakes",
    "🌮": "Taco",
    "🍔": "Hamburger"
};

//console.log(Object.keys(FoodDictionary));
var foodEmojis = Object.keys(FoodDictionary);
export default function App() {
    const [meaning, setMeaning] = useState("");
    function inputHandler(event) {
        var newTextInput = event.target.value;
        var meaning = FoodDictionary[newTextInput];
        if (newTextInput in FoodDictionary) {
            setMeaning(meaning);
        } else {
            setMeaning("Not available in database");
        }
    }
    function emojiClickHandler(emoji) {
        var meaning = FoodDictionary[emoji];
        setMeaning(meaning);
    }

    return (
        <div className="App">
            <h1> Food Interpreter</h1>
            <input onChange={inputHandler}></input>
            <h2>{meaning}</h2>
            <h3>emojis we know</h3>
            {foodEmojis.map(function (emoji) {
                return (
                    <span
                        onClick={() => emojiClickHandler(emoji)}
                        style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
                        key={emoji}
                    >
                        {emoji}
                    </span>
                );
            })}
        </div>
    );
}
