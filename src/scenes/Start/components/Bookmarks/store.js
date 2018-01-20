import { observable, action } from 'mobx';

class BookmarksStore {
  @observable bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  processedGraphs = {};

  @action setBookmarks = async (bookmarks) => {
    this.bookmarks = this.processBookmarksTree(bookmarks);

    console.log(this.bookmarks);
    this.cacheBookmarks();
  }

  processBookmarksTree = tree => tree.map((b) => {
    if (b.children) {
      return {
        folder: true,
        title: b.title,
        id: b.id,
        children: this.processBookmarksTree(b.children),
      }
    } else {
      return {
        folder: false,
        title: b.title,
        id: b.id,
        url: b.url,
      }
    }

    return b;
  })

  cacheBookmarks = () => {
    localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks));
  }
}

export default window.bookmarks = new BookmarksStore();
