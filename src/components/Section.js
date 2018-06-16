import React, {Component} from 'react';
import Header from './Header';
import Content from './Content';


export default class Section extends Component {

  state = {
    contentIsShown: true,
    panelAIsActive: true,
    panelActive: [true, false],
  };

  //switch content on/off
  toggleContent = () =>
    this.setState({
      contentIsShown: !this.state.contentIsShown
  })

  //activate panel function
  panelClick = panel => {
    if(panel === 'a'){
      return (this.setState({
        panelAIsActive: true
      }));
    } else{
      return (this.setState({
        panelAIsActive: false
      }));
    }
  }

  render() {

    return (
      <div>
        <Header
          headerData={this.props.headerData}
          toggleContent={this.toggleContent}
          contentIsShown={this.state.contentIsShown}
        />

        {this.state.contentIsShown ?
          <Content
            panelActive={this.state.panelActive}
            panelClick={this.panelClick}
            panelAIsActive={this.state.panelAIsActive}
            contentA={this.props.contentA}
            contentB={this.props.contentB}
            contentIsShown={this.state.contentIsShown}
        />
        : null}
      </div>
    )
  }

}
