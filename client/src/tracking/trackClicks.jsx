import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import React, { useState } from 'react';

function trackClicks(WrappedComponent, props) {
// var TrackClicks = widget => {
  console.log('inwc', WrappedComponent.name)
  console.log('inwc', props)
return class extends React.Component {
  constructor(props) {
    super(props);
    this.logged = this.logged.bind(this);
    this.state = {

    };
  }

  logged(e) {
    const currentDateTime = Date().toLocaleString()
    const data = {element: e.target.nodeName, widget: WrappedComponent.name, time: currentDateTime}
    console.log('made it logged track clicks')
    $.post('/interactions', data, ()=> {
      console.log('success in post to interactions')
    })
  }

  render() {
    return <WrappedComponent logged={this.logged} {...this.props} />;
  }
 };
}

export default trackClicks;