import React, { useState } from 'react';
import MadlibsForm from "./MadlibsForm";
import Story from "./Story";
//there was a purple slug who loved a hungry butterfly
const Madlib = () => {
    const [story, setStory] = useState(null);
    const addStory = newStory => {
        setStory(newStory)
       
        //    let res= `There was a ${story.color} ${story.noun} who loved a ${story.adjective} ${story.noun2}`;
        //    return res
        }
    const storyComponent = <Story
                  noun={addStory.noun}
                  noun2={addStory.noun2}
                  adjective={addStory.adjective}
                  color={addStory.color}
                  />
   
//  const story = story => <Story
//                         />
return (
    <div>
        <h1> Madlibs! </h1>
        <MadlibsForm addStory={addStory}/>
         {storyComponent}
    </div>
)
}

export default Madlib;