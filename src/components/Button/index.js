import Button from "./Button";

Button.install = function(Vue) {
  console.log(Button.name);
  Vue.component(Button.name, Button);
};
export default Button;
