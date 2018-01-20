import React from 'react';

import './style.less';

const Tale = ({ title, description, image }) => (
  <div className="tale">
    <section className="header">
      <div className="avatar">{ title && title.charAt(0) }</div>
      <span>{ title }</span>
    </section>
    { description && (
      <section className="description">
        { description }
      </section>
    )}
    { image && (
      <section className="image" />
    )}
  </div>
);

export default Tale;
