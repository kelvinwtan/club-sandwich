import React from 'react';
import { Stack, Row } from '@/components/commons/commons';
const TopWebp = require('./top.webp');
const TopPng = require('./top.png');
const BottomWebp = require('./bottom.webp');
const BottomPng = require('./bottom.png');

interface TimProps {
  talking: boolean;
}

const Tim: React.FC<TimProps> = props => {
  return (
    <Row>
      <Stack>
        <picture>
          <source srcSet={TopWebp.default} type='image/webp' />
          <source srcSet={TopPng.default} type='image/png' />
          <img
            className={(props.talking && 'head-top') || ''}
            src={TopPng.default}
            alt='Tim'
            width='250px'
          />
        </picture>
        <picture>
          <source srcSet={BottomWebp.default} type='image/webp' />
          <source srcSet={BottomPng.default} type='image/png' />
          <img
            className={(props.talking && 'head-bottom') || ''}
            src={BottomPng.default}
            alt='Tim'
            width='250px'
          />
        </picture>
      </Stack>
    </Row>
  );
};

export default Tim;
