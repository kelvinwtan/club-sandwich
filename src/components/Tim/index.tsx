import React from 'react';
import { Stack, Row } from '@/components/commons/commons';
import Top from './top.png';
import Bottom from './bottom.png';

interface TimProps {
  talking: boolean;
}

const Tim: React.FC<TimProps> = props => {
  return (
    <Row>
      <Stack>
        <img
          className={(props.talking && 'head-top') || ''}
          src={Top}
          alt='Tim'
          width='400px'
        />
        <img
          className={(props.talking && 'head-bottom') || ''}
          src={Bottom}
          alt='Tim'
          width='400px'
        />
      </Stack>
    </Row>
  );
};

export default Tim;
