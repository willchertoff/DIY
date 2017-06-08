import React from 'react';
import cx from 'classnames';
import s from './Layout.css';

export default (props) =>
  <main>
    <div className={cx(s.content, props.className)}>
      {props.children}
    </div>
  </main>;
