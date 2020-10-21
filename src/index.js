import NButton from "./components/Button";
console.log(11111);
const Components = {
  NButton,
};

const install = function(Vue, opts = {}) {
  if (install.installed) return;

  for (let i in Components) {
    Vue.component(i, Components[i]);
  }
  //   Vue.prototype.$Loading = LoadingBar;
  //   Vue.prototype.$Message = Message;
  //   Vue.prototype.$Modal = Modal;
  //   Vue.prototype.$Notice = Notice;
  //   Vue.prototype.$Spin = Spin;
};
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

Components.install = install;
export default Components;
