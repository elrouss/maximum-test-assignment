import PropTypes from 'prop-types';

import Header from '../Header/Header';

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.element,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
