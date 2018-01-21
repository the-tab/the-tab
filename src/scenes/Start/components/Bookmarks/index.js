import React, { Component } from 'react';
import { observer } from 'mobx-react';

import './style.less';
import store from './store';

import Tale from '../../../../ui-kit/Tale';


const renderTale = (bookmark, index, position) => {
  if (index % 3 === position) {
    if (bookmark.folder) {
      return (
        <div
          onClick={() => { store.bookmarks = bookmark.children; }}
          key={index}
          role="button"
          tabIndex={index}
        >
          <Tale
            title={bookmark.title}
            labelColor="#172B4D"
            isFolder
          />
        </div>
      );
    } else {
      return (
        <a
          href={bookmark.url}
          key={index}
        >
          <Tale
            title={bookmark.title}
            description={bookmark.meta && bookmark.meta.description}
            image={bookmark.meta && bookmark.meta.image}
          />
        </a>
      );
    }
  } else {
    return null;
  }
};

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
        >
          <section>
            { store.bookmarks.map((b, i) => renderTale(b, i, 0)) }
          </section>

          <section>
            { store.bookmarks.map((b, i) => renderTale(b, i, 1)) }
          </section>
          <section>
            { store.bookmarks.map((b, i) => renderTale(b, i, 2)) }
          </section>
        </div>
      );
    } else {
      return null;
    }
  }
}
