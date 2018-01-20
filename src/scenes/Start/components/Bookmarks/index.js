import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { NavLink } from 'react-router-dom';

import './style.less';
import Tale from '../../../../ui-kit/Tale';

import store from './store';

@observer
export default class Bookmarks extends Component {
  componentWillMount() {
    chrome.bookmarks.getTree((bookmarks) => {
      store.setBookmarks(bookmarks[0].children[0].children);
    });
  }

  render() {
    return (
      <div
        id="bookmarks_dashboard"
        style={{ top: window.innerHeight - this.props.bottom }}
      >
        <section>

          {
            store.bookmarks.map((b, i) => {
              if (i % 3 === 0) {
                return (
                  <a href={b.url} key={i}>
                    <Tale
                      title={b.title}
                    />
                  </a>
                );
              } else {
                return null;
              }
            })
          }

        </section>
        <section>
          {
            store.bookmarks.map((b, i) => {
              if (i % 3 === 1) {
                return (
                  <a href={b.url} key={i}>
                    <Tale
                      title={b.title}
                    />
                  </a>
                );
              } else {
                return null;
              }
            })
          }
        </section>
        <section>
          {
            store.bookmarks.map((b, i) => {
              if (i % 3 === 2) {
                return (
                  <a href={b.url} key={i}>
                    <Tale
                      title={b.title}
                    />
                  </a>
                );
              } else {
                return null;
              }
            })
          }
        </section>
      </div>
    );
  }
}
