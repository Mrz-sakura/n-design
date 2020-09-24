const install = function(Vue, opts = {}) {
  if (install.installed) return;

  //   Object.keys(iview).forEach((key) => {
  //     Vue.component(key, iview[key]);
  //   });

  //   Vue.prototype.$Loading = LoadingBar;
  //   Vue.prototype.$Message = Message;
  //   Vue.prototype.$Modal = Modal;
  //   Vue.prototype.$Notice = Notice;
  //   Vue.prototype.$Spin = Spin;
};
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export default {};
