// @flow
import React, { useCallback } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as BrowserActions from '../../actions/browser';
import * as BookmarksActions from '../../actions/bookmarks';
import {BookmarksBar} from '../../components/BookmarksBar';

const BookmarksBarContainer = function(props) {

  const handleBookmarkClick = useCallback(function (bookmark) {
    props.onAddressChange(bookmark.url)
  }, [])

  const handleBookmarkDelete = useCallback(function (bookmark) {
    props.toggleBookmarkUrl(bookmark.url)
  }, [])

  return (
    <BookmarksBar bookmarks={props.bookmarks} onBookmarkClick={handleBookmarkClick} onBookmarkDelete={handleBookmarkDelete} onBookmarkRename={props.renameBookmark}/>
  );
};

function mapStateToProps(state) {
  return {
    bookmarks: state.bookmarks.bookmarks
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onAddressChange: BrowserActions.onAddressChange,
    ...BookmarksActions
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookmarksBarContainer);
