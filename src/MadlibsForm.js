import React, { useState } from "react";

const MadlibsForm = ({addStory}) => {
    const INITIAL_STATE = {
        noun: "",
        noun2: "",
        adjective: "",
        color: ""
    };
    
    const [formData, setFormData] = useState(INITIAL_STATE)
    
    const handleSubmit = evt => {
        evt.preventDefault();
        addStory({...formData});
        setFormData(INITIAL_STATE);
    
    }

   

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    };

    const handleRestart = () => {
        setFormData(INITIAL_STATE);
    }
    
  return(
      <form onSubmit = {handleSubmit}>
          <label htmlFor="noun">Noun:</label>
          <input
            id="noun"
            name="noun"
            value={formData.noun}
            onChange={handleChange}
          />

          <label htmlFor="noun2">Noun 2:</label>
          <input
            id="noun2"
            name="noun2"
            value={formData.noun2}
            onChange={handleChange}
          />
         
         <label htmlFor="adjective">Adjective:</label>
         <input
            id="adjective"
            name="adjective"
            value={formData.adjective}
            onChange={handleChange}
          />    

        <label htmlFor="color">Color:</label>
         <input
            id="color"
            name="color"
            value={formData.color}
            onChange={handleChange}
          />    
          <button>Get Story</button>
          <button onClick={handleRestart}>Restart</button>
      </form>
  )
}

export default MadlibsForm;