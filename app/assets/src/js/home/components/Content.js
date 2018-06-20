import React from 'react';
import PropTypes from 'prop-types';

class Content extends React.Component {
  static propTypes = {
    microdata: PropTypes.object,
    mydata: PropTypes.object,
  };

  render() {
    const { microdata, mydata } = this.props;

    return (
      <div>hello：{mydata.nick}</div>
    );
  }
}

export default Content;
