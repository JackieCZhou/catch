// import React from 'react-bouncing-text';
// import ReactDOM from 'react-bouncing-text';
// import styled from 'react-bouncing-text';

function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class App extends React.Component {
  render() {
    return React.createElement("div", null,
    React.createElement(BouncingText, {
      className: "bouncing-text",
      text: "Catch",
      clickable: true,
      hoverable: true,
      delay: 30,
      duration: 200 }));


  }}


class BouncingText extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "onClick",





    () => {
      if (!this.state.active && this.props.clickable) {this.activeUntilLastDuration();}
    });_defineProperty(this, "onHover",

    () => {
      if (!this.state.active && this.props.hoverable) {this.activeUntilLastDuration();}
    });_defineProperty(this, "activeUntilLastDuration",

    () => {
      const { delay, text, duration } = this.props;
      this.setState({
        active: true });

      setTimeout(
      () => {this.setState({ active: false });},
      text.length * delay + duration);

    });this.state = { active: false };}

  render() {
    const {
      text, className, delay, duration } =
    this.props;
    const chars = text.split('').map((e, i) =>
    React.createElement(StyledChar, {
      key: i,
      delay: delay * i,
      duration: duration,
      active: this.state.active,
      char: e }));



    return (
      React.createElement("div", {
        className: className,
        onClick: this.onClick,
        onMouseOver: this.onHover },

      chars));

  }}


const Char = ({ char, className }) => {
  const escapedHtml = { __html: char.replace(' ', '&nbsp') };
  return (
    React.createElement("span", {
      className: className,
      dangerouslySetInnerHTML: escapedHtml }));


};

const StyledChar = styled.default(Char)`
  display: inline-block;
  animation-name:${({ active }) => active ? boucingCharAnimation : 'none'};
  animation-timing-function: ease-in-out;
  animation-delay: ${({ delay }) => delay}ms;
  animation-duration:${({ duration }) => duration}ms;
`;

const boucingCharAnimation = styled.keyframes`
  0% { transform: translateY(0em); }
  50% { transform: translateY(-0.5em); }
  100% { transform: translateY(0em); }
`;

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));