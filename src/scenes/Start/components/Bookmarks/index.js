import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { NavLink } from 'react-router-dom';

import './style.less';
import Tale from '../../../../ui-kit/Tale';

import store from './store';

@observer
export default class Bookmarks extends Component {
  async componentWillMount() {
    await chrome.bookmarks.getTree(async (bookmarks) => {
      await store.setBookmarks(bookmarks[0].children[0].children);
    });
  }

  render() {
    if (store.bookmarks) {
      return (
        <div
          id="bookmarks_dashboard"
          style={{ top: window.innerHeight - this.props.bottom }}
        >
          <section>

            {
              store.bookmarks.map((b, i) => {
                if (i % 3 === 0) {
                  if (b.folder) {
                    return (
                      <div onClick={() => store.bookmarks = b.children}>
                        <Tale
                          title={b.title}
                          labelColor="#172B4D"
                        />
                      </div>
                    );
                  } else {
                    return (
                      <a href={b.url} key={i}>
                        <Tale
                          title={b.title}
                          description={b.meta && b.meta.description}
                          image={b.meta && b.meta.image}
                        />
                      </a>
                    );
                  }
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
                  if (b.folder) {
                    return (
                      <div onClick={() => store.bookmarks = b.children}>
                        <Tale
                          title={b.title}
                          labelColor="#172B4D"
                        />
                      </div>
                    );
                  } else {
                    return (
                      <a href={b.url} key={i}>
                        <Tale
                          title={b.title}
                          description={b.meta && b.meta.description}
                          image={b.meta && b.meta.image}
                        />
                      </a>
                    );
                  }
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
                  if (b.folder) {
                    return (
                      <div onClick={() => store.bookmarks = b.children}>
                        <Tale
                          title={b.title}
                          labelColor="#172B4D"
                        />
                      </div>
                    );
                  } else {
                    return (
                      <a href={b.url} key={i}>
                        <Tale
                          title={b.title}
                          description={b.meta && b.meta.description}
                          image={b.meta && b.meta.image}
                        />
                      </a>
                    );
                  }
                } else {
                  return null;
                }
              })
            }
          </section>
        </div>
      );
    } else {
      return null;
    }
  }
}
