import React from 'react';
import { Stack, Row } from '@/components/commons/commons';
const Top = require('./top.png');
const Bottom = require('./bottom.png');

interface TimProps {
  talking: boolean;
}

const Tim: React.FC<TimProps> = props => {
  return (
    <Row>
      <Stack>
        <img
          className={(props.talking && 'head-top') || ''}
          src={Top.default}
          alt='Tim'
          width='400px'
        />
        <img
          className={(props.talking && 'head-bottom') || ''}
          src={Bottom.default}
          alt='Tim'
          width='400px'
        />
      </Stack>
    </Row>
  );
};

export default Tim;
