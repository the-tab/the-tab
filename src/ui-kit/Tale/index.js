import React from 'react';
import isUrl from 'is-url';

import './style.less';

const getImageStyle = url => ({
  background: `url(${url})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
});

const Tale = ({
  title, description, image, isFolder,
}) => {
  return (
    <div className="tale">
      <section className="header">
        <div className={`avatar ${isFolder && 'folder'}`} style={isUrl(image) ? getImageStyle(image) : {}}>
          { !isUrl(image) && title && title.charAt(0).toUpperCase() }
        </div>
        <span>{ title }</span>
      </section>
      { description && (
        <section className="description">
          { `${description.substring(0, 70)}...` }
        </section>
      )}
    </div>
  );
};

export default Tale;
