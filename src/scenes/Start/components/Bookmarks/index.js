import React, { Component } from 'react';

import './style.less';
import Tale from '../../../../ui-kit/Tale';

export default class Bookmarks extends Component {
  render() {
    return (
      <div
        id="bookmarks_dashboard"
        style={{ top: window.innerHeight - this.props.bottom }}
      >
        <section>
          <Tale
            title="Bookmark"
            description="
              Lorem ipsum dolor sit amet,
              consectetur adipisicing elit,
              sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua.
            "
          />
          <Tale
            title="Bookmark"
            description="
              Lorem ipsum dolor sit amet sit amet sit amet sit amet.
            "
          />
          <Tale
            title="Bookmark"
            description="
              Lorem ipsum dolor sit amet,
              consectetur adipisicing elit,
              sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua.
            "
          />
          <Tale
            title="Bookmark"
            description="
              Lorem ipsum dolor sit amet sit amet sit amet sit amet.
            "
          />
        </section>
        <section>
          <Tale
            title="Bookmark"
            description="
              Lorem ipsum dolor sit amet.
              consectetur adipisicing elit.
            "
          />
          <Tale
            title="Bookmark"
            description="
              Lorem ipsum dolor sit amet,
              consectetur adipisicing elit,
              sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua.
              Labore et dolore magna aliqua.
            "
          />
          <Tale
            title="Bookmark"
            description="
              Lorem ipsum dolor sit amet,
              consectetur adipisicing enit ark,
              ipsum dolor sit amet uni at.
            "
          />
          <Tale
            title="Bookmark"
            description="
              Lorem ipsum dolor sit amet,
              consectetur adipisicing elit,
              sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua.
              Labore et dolore magna aliqua.
            "
          />
        </section>
        <section>
          <Tale
            title="Bookmark"
            description="
              Lorem ipsum dolor sit amet,
              consectetur adipisicing elit,
              sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua.
            "
          />
          <Tale
            title="Bookmark"
            description="
              Lorem ipsum dolor sit amet,
              consectetur adipisicing enit ark.
            "
          />
          <Tale
            title="Bookmark"
            description="
              Lorem ipsum dolor sit amet,
              consectetur adipisicing elit,
              sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua.
            "
          />
          <Tale
            title="Bookmark"
            description="
              Lorem ipsum dolor sit amet,
              consectetur adipisicing enit ark.
            "
          />
        </section>
      </div>
    );
  }
}
