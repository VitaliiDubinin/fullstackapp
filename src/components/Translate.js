import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Translate() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;

    const value = event.target.value;

    setInputs(() => value);


  };

  const handleSubmit = (event) => {
    event.preventDefault();



    fetch("https://libretranslate.com/translate", {
      method: "POST",
      body: JSON.stringify({
        q: inputs + "\n",
        source: "en",
        target: "es",
        format: "text",
      }),
      headers: { "Content-Type": "application/json" },
    }).then(function (response) {
      console.log(inputs);
      console.log(response.data);
      navigate("/");
    });


  };


  return (
    <div>
      <h1>Create Users</h1>
      <form onSubmit={handleSubmit}>
        <label>word:</label>
        {/* <input type="text" name="word" /> */}
        <input type="text" name="word" onChange={handleChange} />

        <br />

        <button>translate</button>
      </form>
    </div>
  );
}

export default Translate;
