
import React, { useState } from 'react';

const Classroom = () => {
  const [response, setResponse] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);

  const explainGradient = async () => {
    setResponse('Loading...');
    setIsSpeaking(false);
    const reply = "To calculate the gradient, use the formula (y2 - y1) / (x2 - x1). It represents the steepness of the line.";
    setResponse(reply);
    const utterance = new SpeechSynthesisUtterance(reply);
    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
    utterance.onend = () => setIsSpeaking(false);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Classroom Page</h1>
      <button onClick={explainGradient}>Explain Gradient</button>
      <p style={{ marginTop: '1rem' }}>{response}</p>
      {isSpeaking && <p><em>Speaking...</em></p>}
    </div>
  );
};

export default Classroom;
