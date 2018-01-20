import { observable, action } from 'mobx';

import { getPageInfo } from '../../../../utils/meta';

class BookmarksStore {
  @observable bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  rawBookmarks = JSON.parse(localStorage.getItem('raw_bookmarks'));
  processedGraphs = {};

  @action setBookmarks = async (bookmarks) => {
    if (JSON.stringify(bookmarks) == JSON.stringify(this.rawBookmarks)) {
      this.rawBookmarks = bookmarks;
      this.bookmarks = await this.processBookmarksTree(bookmarks);

      console.log(this.bookmarks);
      this.cacheBookmarks();
    }
  }

  processBookmarksTree = async (tree) => {
    const promises = [];
    
    await tree.forEach((b) => {
      if (b.children) {
        promises.push(this.processBookmarksTree(b.children).then(children => ({
          folder: true,
          title: b.title,
          id: b.id,
          children,
        })))
      } else {
        promises.push(getPageInfo(b.url).then(meta => ({
          folder: false,
          title: b.title,
          id: b.id,
          url: b.url,
          meta,
        })))
      }
    })

    return await Promise.all(promises);
  };

  cacheBookmarks = () => {
    localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks));
    localStorage.setItem('raw_bookmarks', JSON.stringify(this.rawBookmarks));
  }
}

export default window.bookmarks = new BookmarksStore();
