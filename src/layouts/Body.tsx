import React, { PureComponent } from 'react';
import Markdown from '../components/Markdown';

class Body extends PureComponent {
  render() {
    const text = '# Marked in the browser\n\nRendered by **marked**.';
    return (
      <Markdown>{text}</Markdown>
    );
  }
}

export default Body;
