import React from 'react';
import PropTypes from 'prop-types';

import Content from '../assets/src/js/home/components/Content.js';
import Default from './layout/Default';

class Home extends React.Component {
  static propTypes = {
    microdata: PropTypes.object,
    mydata: PropTypes.object
  }

  render() {
    const { microdata, mydata } = this.props;
    const homeJs = `${microdata.styleDomain}/build/${microdata.styleVersion}/home.js`;
    const scriptUrls = [homeJs];

    return (
      <Default 
        microdata={microdata}
        scriptUrls={scriptUrls}
        title={"demo"}>
        <div id="demoApp"
          data-microdata={JSON.stringify(microdata)}
          data-mydata={JSON.stringify(mydata)}>
        </div>
        <Content mydata={mydata} microdata={microdata} />
      </Default>
    )
  }
}