/**
*
* ItemPrincipal
*
*/

import React, {PropTypes} from 'react';
// import styled from 'styled-components';

const styles = {
  contenido: {
    width: '100%',
  }
}

class ItemPrincipal extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div
      style = {styles.contenido}
      >
      </div>
    );
  }
}

ItemPrincipal.propTypes = {

};

export default ItemPrincipal;
