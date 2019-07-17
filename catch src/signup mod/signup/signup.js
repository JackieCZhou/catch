import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signup extends Component {


function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} // Input component ----------------------------------
const Input = (props) =>
React.createElement("input", {
  className: "c-input",
  type: props.type,
  placeholder: props.placeholder,
  onKeyUp: props.onKeyUp });


// Button component	----------------------------------	
const Button = (props) =>
React.createElement("button", {
  className: "c-button",
  onClick: props.onClick }, props.text);



// Form component	----------------------------------
class Form extends React.Component {

  constructor(props) {
    super(props);_defineProperty(this, "handleInput",

    (param, e) => {
      let value = e.target.value;
      console.log(param);

      if (param === 'name') {

      }
    });this.state = { name: { value: '' }, email: { value: '' }, phone: { value: '' }, password: { value: '' }, confirm: { value: '' } };}


  render() {

    return (
      React.createElement("form", { className: "form" },
      React.createElement(Input, {
        type: "text",
        placeholder: "Full name",
        value: this.state.name.value,
        onKeyUp: e => this.handleInput('name', e) }),

      React.createElement(Input, {
        type: "text",
        placeholder: "E-mail address",
        value: this.state.email.value,
        onKeyUp: e => this.handleInput('email', e) }),

      React.createElement(Input, {
        type: "text",
        placeholder: "Phone number",
        value: this.state.phone.value,
        onKeyUp: e => this.handleInput('phone', e) }),

      React.createElement(Input, {
        type: "password",
        placeholder: "Create password",
        value: this.state.password.value,
        onKeyUp: e => this.handleInput('password', e) }),

      React.createElement(Input, {
        type: "password",
        placeholder: "Confirm password",
        value: this.state.confirm.value,
        onKeyUp: e => this.handleInput('confirm', e) }),

      React.createElement(Button, {
        text: "Sign Up",
        onClick: this.handleSubmit })));


  }}



class App extends React.Component {
  render() {
    return (
      React.createElement("div", { className: "page-wrap" },

      React.createElement("div", { className: "mobile" },
      React.createElement("h2", { class: "mobile__title" }, "Sign Up"),
      React.createElement("p", { class: "mobile__subtitle" }, "Create a new account"),
      React.createElement(Form, null))));




  }}



ReactDOM.render(React.createElement(App, null), document.getElementById('root'));

}
export default Signup;