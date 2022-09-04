import React from "react";

function Links (props) {
    return (
        <div>
            <h3>Links</h3>
            <a href={props.links.github}>{props.links.github}</a>
            <a href={props.links.linkedin}>{props.links.linkedin}</a>
        </div>
    )
}

export default Links