import React, { useState } from 'react';
import MadlibsForm from "./MadlibsForm";
import Story from "./Story";
//there was a purple slug who loved a hungry butterfly
const Madlib = () => {
    const [story, setStory] = useState([]);
    const addStory = newStory => {
        setStory(story=>[...story, newStory])
       
        //    let res= `There was a ${story.color} ${story.noun} who loved a ${story.adjective} ${story.noun2}`;
        //    return res
        }
    const storyComponent = story.map(story => <Story
                  noun={story.noun}
                  noun2={story.noun2}
                  adjective={story.adjective}
                  color={story.color}
                  />
    )
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