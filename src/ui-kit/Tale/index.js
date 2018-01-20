import React from 'react';
import isUrl from 'is-url';

import './style.less';

const getImageStyle = url => ({
  background: `url(${url})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
});

const Tale = ({
  title, description, image, labelColor,
}) => {
  return (
    <div className="tale">
      <section className="header">
        <div className="avatar" style={isUrl(image) ? getImageStyle(image) : { backgroundColor: labelColor }}>
          { !isUrl(image) && title && title.charAt(0).toUpperCase() }
        </div>
        <span>{ title }</span>
      </section>
      { description && (
        <section className="description">
          { `${description.substring(0, 70)}...` }
        </section>
      )}
      { image && (
        <section className="image" />
      )}
    </div>
  );
};

export default Tale;
