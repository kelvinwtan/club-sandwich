import React from 'react';
import {
  Title,
  SandwichGeneratorApp,
  GoogleMaps,
  Result
} from './commons/sandwich';
import { Stack, Container, Button } from './commons/commons';

import db from './sandwichdb';
import Tim from './Tim';

const SandwichGenerator: React.FC = () => {
  const [isTalking, setTalking] = React.useState(false);
  const [currentPlace, setCurrentPlace] = React.useState<any>(null);

  const getRandomSpeech = (name: string) => {
    const speeches = [
      `yum yum i love the sandwiches at ${name}`,
      'who needs pilot when i have sandwich club',
      'yum yum in my tum tum',
      `get in me you sandwich bastards`
    ];
    return speeches[Math.floor(Math.random() * speeches.length)];
  };

  const setRandomPlace = () => {
    const place = db[Math.floor(db.length * Math.random())];
    const speech = getRandomSpeech(place.name);
    const msg = new SpeechSynthesisUtterance(speech);
    window.speechSynthesis.speak(msg);
    setCurrentPlace(place);
  };

  const getSandwichPlace = () => {
    setCurrentPlace(null);
    setRandomPlace();
    setTalking(true);
    setTimeout(() => setTalking(false), 2000);
  };

  return (
    <SandwichGeneratorApp>
      <Container>
        <Stack>
          <Title>Smelvin recommend me a sandwich place</Title>
          <Tim talking={isTalking} />
          <Button onClick={getSandwichPlace}>Recommend a sandwich place</Button>
          {currentPlace && <Result place={currentPlace} />}
          {currentPlace && <GoogleMaps name={currentPlace.name} />}
        </Stack>
      </Container>
    </SandwichGeneratorApp>
  );
};

export default SandwichGenerator;
