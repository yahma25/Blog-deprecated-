/* eslint-disable */
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import React from 'react';
import Button from '../../src/components/Button';

export default {
  component: Button,
  title: 'Button',
};

// TODO 버튼 1개에 여러 스타일 적용하기
export const types = () => (
  <>
    <Button onClick={action('basic')}>basic</Button>
    <Button primary onClick={action('primary')}>primary</Button>
    <Button secondary onClick={action('secondary')}>secondary</Button>
    <Button error onClick={action('error')}>error</Button>
    <Button outline onClick={action('outline')}>outline</Button>
    <Button disabled onClick={action('disabled')}>disabled</Button>
    <Button rounding onClick={action('rounding')}>rounding</Button>
    <Button circle onClick={action('circle')}>circle</Button>
  </>
);
