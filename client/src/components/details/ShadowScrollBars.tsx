import css from 'dom-css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';

class ShadowScrollbars extends Component {

    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {
            scrollTop: 0,
            scrollHeight: 0,
            clientHeight: 0,
            historyHeight: 0,
        };
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleUpdate(values) {

      //  const {  shadowBottom,shadowTop } = this.refs;
        const { scrollTop, scrollHeight, clientHeight,top } = values;
        if(this.state.historyHeight !== scrollHeight && top<0.3){

          this.scrollbars.scrollTop(scrollHeight-this.state.historyHeight);
          this.setState({ historyHeight: scrollHeight})
        }
        if(this.state.historyHeight !== scrollHeight && top>0.8){
          this.scrollbars.scrollTop(scrollHeight);
          this.setState({ historyHeight: scrollHeight})
        }
        const shadowTopOpacity = 1 / 20 * Math.min(scrollTop, 20);
        const bottomScrollTop = scrollHeight - clientHeight;
        const shadowBottomOpacity = 1 / 20 * (bottomScrollTop - Math.max(scrollTop, bottomScrollTop - 20));
        css(this.shadowTop, { opacity: shadowTopOpacity });
        css(this.shadowBottom, { opacity: shadowBottomOpacity });
    }

    renderNothing({ style, ...props }){

     return (
        <div style={{display: 'none'}}> </div>
     );
    }

    renderThumb({ style, ...props }) {
    //   const { top } = this.state;
       const thumbStyle = {
           backgroundColor: `rgb(135, 88, 255)`,
           borderRadius:`5px`
       };
       return (
           <div
               style={{ ...style, ...thumbStyle }}
               {...props}/>
       );
   }

    render() {
        const { style, ...props } = this.props;
        const containerStyle = {
            ...style,
            position: 'relative'
        };
        const shadowTopStyle = {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 10,
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%)'
        };
        const shadowBottomStyle = {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 10,
            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%)'
        };
        return (
            <div className="scroll-bars-chat" style={containerStyle}>
                <Scrollbars
                onScroll={this.props.onScroll}
                     ref={ scrollbars => { this.scrollbars = scrollbars } }
                    onUpdate={this.handleUpdate}
                    hideTracksWhenNotNeeded={true}
                    className={'scrollbars-hidden-x'}


                    renderThumbHorizontal={this.renderNothing}
                   renderThumbVertical={this.renderThumb}
    {...props}
                    //style={{width:'100%'}}
                    />
                <div

                     ref={ shadowTop => { this.shadowTop = shadowTop } }
                    style={shadowTopStyle}/>
                <div
                 ref={ shadowBottom => { this.shadowBottom = shadowBottom } }
                    style={shadowBottomStyle}/>
            </div>
        );
    }
}

ShadowScrollbars.propTypes = {
    style: PropTypes.object
};

export default ShadowScrollbars;
