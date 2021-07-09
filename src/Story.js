import React from 'react';

const Story = (props) => {
    return(
        <div>
            <h3>There was a {props.color} {props.noun} who loved a {props.adjective} {props.noun2}</h3>
            <button onClick={props.removeStory}>Restart</button>
        </div>
        

    )
}

export default Story;