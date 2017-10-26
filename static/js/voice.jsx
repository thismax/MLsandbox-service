import React, { Component } from 'react';
import { ReactMic } from 'react-mic';
import Axios from 'axios';
import Recorder from 'recorder-js';

class VoiceRecognitionWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false,
      prediction: "none"
    }
  }
  
  startRecording = () => {
    this.setState({ record: true });
  }

  stopRecording = () => {
    this.setState({ record: false });
  }

  recordAndSubmit = () => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();  
    const recorder = new Recorder(audioContext, {
      onAnalysed: data => {},
    });
    let isRecordeing = false;
    let blob = null;
    
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        recorder.init(stream)
        recorder.start();
      })
      .catch(err => console.log(err));
   
    this.setState({ record: true });

    setTimeout(() => {
      recorder.stop()
        .then(({blob, buffer}) => {
          blob = blob;
          let formData = new FormData();
          formData.append('file', blob);
          Axios.post('/api/speech', formData, {
            headers: { 'content-type': 'multipart/form-data' }
          }).then(response => {
            this.setState({prediction: response.data.prediction})
            audioContext.close();
            this.setState({ record: false });
          }).catch(err => console.log(err));
        }).catch(err => console.log(err));
    }, 2500);
  }

  render = () => {
    return (
      <div>
        <ReactMic
          record={this.state.record}
          className="sound-wave"
          strokeColor="#000000"
          backgroundColor="#FF4081"
        />
        <div>Prediction: {this.state.prediction}</div>
        <div>Second Version:
          <button onClick={this.recordAndSubmit}>Get new recording</button>
        </div>
      </div>
    )
  }
}

export default VoiceRecognitionWrapper;