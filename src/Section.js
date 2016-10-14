import React from 'react';
import * as d3 from "d3";
var Remarkable = require('remarkable');
var md = new Remarkable({linkTarget: '_new', html: true});

var Section = React.createClass({

  render() {
    var style = {
      width: '100%',
      marginTop: '25vh',
      marginBottom: '25vh',
      fontSize: 16,
      lineHeight: 1.6,
    };
    var rawMarkup = { __html: md.render(this.props.text)};

    return (
      <div style={style} className='section' dangerouslySetInnerHTML={rawMarkup} />
    );
  }
});

export default Section;
