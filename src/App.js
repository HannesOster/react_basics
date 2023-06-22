import React from "react";
import "./styles.css";

const object = { name: "johannes", age: 28, greeting: "<h1>Hello World</h1>" };

export default function App() {
  return HelloWorld(object);
}

function HelloWorld(object) {
  return (
    <div>
      object.greeting
      <p>
        I am {object.name} i am {object.age} years old
      </p>
      ;
    </div>
  );
}
