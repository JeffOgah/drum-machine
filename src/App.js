import React from "react";
import "./App.css";
import github from "./images/github.svg";
import twitter from "./images/twitter.svg";
import linkedin from "./images/linkedin.svg";
import DrumPad from "./DrumPad.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drum: drum,
      sound: ""
    };
    this.playSound = this.playSound.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }
  playSound(id, trigger) {
    const sound = document.getElementById(trigger);
    const active = document.getElementById(id);
    sound.play();
    
    this.setState({
      sound: id
    });
  }
  handleClick(id, trigger) {
    this.playSound(id, trigger);
  }
  handleKeyPress(e) {
    for (let i of this.state.drum) {
      if (e.keyCode === i.keyCode) {
        this.playSound(i.id, i.keyTrigger);
      }
    }
  }
  render() {
    const drumpad = [];
    this.state.drum.forEach(e => {
      drumpad.push(
        <DrumPad
          key={e.keyCode}
          keyCode={e.keyCode}
          clipId={e.id}
          keyTrigger={e.keyTrigger}
          url={e.url}
          onClick={this.handleClick}
        />
      );
    });
    return (
      <div className="app container w-50 mt-5" id="drum-machine">
        <div className="row p-0 m-0">{drumpad}</div>
        <div
          className="container row d-flex justify-content-center align-items-center border text-center font-weight-bold p-0 m-0"
          id="display"
        >
          {this.state.sound}
        </div>
        <div className="text-center">
          <p className="m-0 mt-2">Made by Jeff</p>
          <span>
            <a
              href="https://github.com/jeffogah"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="icon mx-2" src={github} alt="github" />
            </a>
          </span>
          <span>
            <a
              href="https://twitter.com/jeff_ogah"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="icon mx-1" src={twitter} alt="twitter" />
            </a>
          </span>
          <span>
            <a
              href="https://www.linkedin.com/in/jeffrey-ogah-55472216a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="icon mx-1" src={linkedin} alt="linkedin" />
            </a>
          </span>
        </div>
      </div>
    );
  }
}
export default App;

const drum = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Chord-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Chord-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Chord-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Punchy-Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Side-Stick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Snare",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
  }
];
