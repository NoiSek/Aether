import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

// TODO: Decide whether to unify or split themes.

class ThemeMatcher extends React.Component {
  render() {
    return <span></span>;
  }
}


ThemeMatcher.propTypes = {
  'currentTheme': PropTypes.string.isRequired
};


export default connect(
  (state) => {
    return {
      'currentTheme': state.settings.theme
    };
  },
  null
)(ThemeMatcher);
