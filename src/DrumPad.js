import React from "react";

function DrumPad(props) {
  return (
    <div
      className="col-4 bg-info text-center drum-pad py-4 px-4 border font-weight-bold"
      id={props.clipId}
      onClick={() => props.onClick(props.clipId, props.keyTrigger)}
    >
        <audio src={props.url} className="clip" id={props.keyTrigger}/>
      {props.keyTrigger}
    </div>
  );
}

export default DrumPad;
