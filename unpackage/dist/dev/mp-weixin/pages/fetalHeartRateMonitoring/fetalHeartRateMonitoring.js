(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/fetalHeartRateMonitoring/fetalHeartRateMonitoring"],{

/***/ 199:
/*!*************************************************************************************************************************!*\
  !*** C:/Users/13385/Desktop/app_woman_a/main.js?{"page":"pages%2FfetalHeartRateMonitoring%2FfetalHeartRateMonitoring"} ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _fetalHeartRateMonitoring = _interopRequireDefault(__webpack_require__(/*! ./pages/fetalHeartRateMonitoring/fetalHeartRateMonitoring.vue */ 200));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_fetalHeartRateMonitoring.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 200:
/*!******************************************************************************************************!*\
  !*** C:/Users/13385/Desktop/app_woman_a/pages/fetalHeartRateMonitoring/fetalHeartRateMonitoring.vue ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fetalHeartRateMonitoring_vue_vue_type_template_id_d12fcf74_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetalHeartRateMonitoring.vue?vue&type=template&id=d12fcf74&scoped=true& */ 201);
/* harmony import */ var _fetalHeartRateMonitoring_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetalHeartRateMonitoring.vue?vue&type=script&lang=js& */ 203);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _fetalHeartRateMonitoring_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _fetalHeartRateMonitoring_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _fetalHeartRateMonitoring_vue_vue_type_style_index_0_id_d12fcf74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetalHeartRateMonitoring.vue?vue&type=style&index=0&id=d12fcf74&lang=scss&scoped=true& */ 206);
/* harmony import */ var _D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);

var renderjs





/* normalize component */

var component = Object(_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _fetalHeartRateMonitoring_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _fetalHeartRateMonitoring_vue_vue_type_template_id_d12fcf74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _fetalHeartRateMonitoring_vue_vue_type_template_id_d12fcf74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d12fcf74",
  null,
  false,
  _fetalHeartRateMonitoring_vue_vue_type_template_id_d12fcf74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/fetalHeartRateMonitoring/fetalHeartRateMonitoring.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 201:
/*!*************************************************************************************************************************************************!*\
  !*** C:/Users/13385/Desktop/app_woman_a/pages/fetalHeartRateMonitoring/fetalHeartRateMonitoring.vue?vue&type=template&id=d12fcf74&scoped=true& ***!
  \*************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_fetalHeartRateMonitoring_vue_vue_type_template_id_d12fcf74_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./fetalHeartRateMonitoring.vue?vue&type=template&id=d12fcf74&scoped=true& */ 202);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_fetalHeartRateMonitoring_vue_vue_type_template_id_d12fcf74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_fetalHeartRateMonitoring_vue_vue_type_template_id_d12fcf74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_fetalHeartRateMonitoring_vue_vue_type_template_id_d12fcf74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_fetalHeartRateMonitoring_vue_vue_type_template_id_d12fcf74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 202:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/13385/Desktop/app_woman_a/pages/fetalHeartRateMonitoring/fetalHeartRateMonitoring.vue?vue&type=template&id=d12fcf74&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components = {
  uRow: function() {
    return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-row/u-row */ "node-modules/uview-ui/components/u-row/u-row").then(__webpack_require__.bind(null, /*! uview-ui/components/u-row/u-row.vue */ 507))
  },
  uCol: function() {
    return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-col/u-col */ "node-modules/uview-ui/components/u-col/u-col").then(__webpack_require__.bind(null, /*! uview-ui/components/u-col/u-col.vue */ 514))
  },
  uIcon: function() {
    return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-icon/u-icon */ "node-modules/uview-ui/components/u-icon/u-icon").then(__webpack_require__.bind(null, /*! uview-ui/components/u-icon/u-icon.vue */ 311))
  },
  uniCountdown: function() {
    return __webpack_require__.e(/*! import() | components/uni-countdown/uni-countdown */ "components/uni-countdown/uni-countdown").then(__webpack_require__.bind(null, /*! @/components/uni-countdown/uni-countdown.vue */ 521))
  },
  uSwitch: function() {
    return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-switch/u-switch */ "node-modules/uview-ui/components/u-switch/u-switch").then(__webpack_require__.bind(null, /*! uview-ui/components/u-switch/u-switch.vue */ 360))
  },
  uTopTips: function() {
    return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-top-tips/u-top-tips */ "node-modules/uview-ui/components/u-top-tips/u-top-tips").then(__webpack_require__.bind(null, /*! uview-ui/components/u-top-tips/u-top-tips.vue */ 479))
  },
  uModal: function() {
    return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-modal/u-modal */ "node-modules/uview-ui/components/u-modal/u-modal").then(__webpack_require__.bind(null, /*! uview-ui/components/u-modal/u-modal.vue */ 346))
  },
  uImage: function() {
    return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-image/u-image */ "node-modules/uview-ui/components/u-image/u-image").then(__webpack_require__.bind(null, /*! uview-ui/components/u-image/u-image.vue */ 297))
  },
  uCountDown: function() {
    return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-count-down/u-count-down */ "node-modules/uview-ui/components/u-count-down/u-count-down").then(__webpack_require__.bind(null, /*! uview-ui/components/u-count-down/u-count-down.vue */ 353))
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  if (!_vm._isMounted) {
    _vm.e0 = function($event) {
      _vm.tapState == 0 ? _vm.handleVoice1() : ""
    }

    _vm.e1 = function($event) {
      _vm.tapState == 0 ? _vm.handleVoice2() : ""
    }

    _vm.e2 = function($event) {
      _vm.tapState == 0 ? _vm.handleStartTime() : ""
    }

    _vm.e3 = function($event) {
      _vm.isStop == false ? _vm.handleClear() : ""
    }
  }
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 203:
/*!*******************************************************************************************************************************!*\
  !*** C:/Users/13385/Desktop/app_woman_a/pages/fetalHeartRateMonitoring/fetalHeartRateMonitoring.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_fetalHeartRateMonitoring_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./fetalHeartRateMonitoring.vue?vue&type=script&lang=js& */ 204);
/* harmony import */ var _D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_fetalHeartRateMonitoring_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_fetalHeartRateMonitoring_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_fetalHeartRateMonitoring_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_fetalHeartRateMonitoring_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_fetalHeartRateMonitoring_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 204:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/13385/Desktop/app_woman_a/pages/fetalHeartRateMonitoring/fetalHeartRateMonitoring.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;








































































































































































var _uCharts = _interopRequireDefault(__webpack_require__(/*! @/components/u-charts/u-charts.js */ 205));
var _storage = __webpack_require__(/*! @/common/storage.js */ 167);



var _util = _interopRequireDefault(__webpack_require__(/*! @/utils/util.js */ 158));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _createForOfIteratorHelper(o, allowArrayLike) {var it;if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e) {throw _e;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = o[Symbol.iterator]();}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e2) {didErr = true;err = _e2;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var Fts6MgrModule = uni.requireNativePlugin('Fts6MgrPlugin-Fts6MgrModule');

var _self;
var canvaLineA = null;
var canvaLineB = null;var _default =
{
  data: function data() {
    return {
      jianhuzhuantai: "??????????????????",
      displays: false,
      status: false,
      timestamp: 30,
      show: false,
      maindataInsert: false,
      disabled: true,
      // chart1Height: 400,
      // chart2Height: 350,
      checked: false,
      loading: false,
      flash: true,
      isSwitchFlash: false,
      switchFlash: true,
      testdata: '',
      // ??????1
      taixinlv1: '',
      // ??????2
      taixinlv2: '',
      openaudio: false,
      //
      c_time: '',
      // ?????????
      gongsuoya: '',
      isConnected: false,
      isTocoCleared: false,
      // ??????id
      pregnantID: '',
      // ??????id
      equipment_id: '',
      // ????????????
      clTime: '',
      // ????????????
      exam_time: '',
      // ????????????
      exam_result: '',
      // ????????????
      yishengjianyi: '',
      // ???
      hour: 0,
      // ???
      minute: 0,
      // ???
      second: 1,
      // ????????????????????????
      audit: false,
      // ?????????
      fetalHeartRate: {
        manualFetalMovement: '' },

      // ??????
      chartData: {
        scrollPosition: 'right',
        title: 'xx',
        subtitle: {},
        animation: false,
        categories: [0, 1, 2, 3, 4, 5],
        series: [{
          name: 'a1',
          data: [],
          color: '#000000' },

        {
          name: 'a2',
          data: [],
          color: '#c077bf' }] },



      // ?????????
      chartDataB: {
        scrollPosition: 'right',
        title: 'xx',
        subtitle: {},
        animation: false,
        categories: [0, 1, 2, 3, 4, 5],
        series: [{
          name: '',
          data: [],
          color: '#000000' }] },


      chatList: [],
      // ??????????????????
      cWidth: '',
      cHeight: '',
      bWidth: '',
      bHeight: '',
      pixelRatio: 1,
      // ????????????
      c_result: '???????????????',
      // ??????????????????
      isStop: true,
      // ????????????
      stopTime: {},
      // ???????????? ??????????????????????????????
      tapState: 0,
      updataList: [],
      switchUpdataList: [],
      // ????????????
      nowTime: '',
      // ????????????????????????
      isResult: false,
      // ??????1????????????
      isVoice1: false,
      // ??????2????????????
      isVoice2: false,
      // ??????1 wifi??????
      signallevel1: 0,
      // ??????2 wifi??????
      signallevel2: 0,
      // ?????????wifi??????
      contractionss: 0,
      isOpenBtn: false,
      taixinId: '',
      pageHeight: 0,
      innerAudioContext: null };

  },
  onBackPress: function onBackPress(e) {var _this = this;
    if (this.isOpenBtn && !this.isStop) {
      if (e.from === 'backbutton') {
        uni.showModal({
          title: '??????',
          content: '???????????????????????????????????????????????????',
          success: function success(res) {
            if (res.confirm) {
              _this.handleUpfateDuration();
              console.log('-------------ssssssssssssssssssss');
              uni.navigateBack({
                delta: 1 });

            }
          } });

        return true;
      }
    } else {
      return false;
    }
  },
  onReady: function onReady() {
    try {
      var that = this;
      if (that.tapState == 0) {
        //this.$refs.uToast.show
        that.$refs.uTips.show({
          title: '???????????????????????????????????????,???????????????????????????\r\n???????????????,???????????????"??????"??????????????????!',
          // ???????????????type??????????????????default???????????????????????? type: 'default'
          type: 'info',
          position: 'center',
          duration: 10000,
          // ????????????????????????????????????false
          icon: true });

        uni.showModal({
          title: '??????',
          content: '??????????????????"??????"????????????????????????!',
          showCancel: false });

      }
      var info = uni.createSelectorQuery().select('#chart-taixin');
      info.boundingClientRect(function (data) {
        //data - ????????????
        //this.cWidth = uni.upx2px(750);
        that.cHeight = data.height - uni.upx2px(40);
        that.bHeight = data.height - uni.upx2px(40);
        that.cWidth = data.width + uni.upx2px(10);
        //	this.cHeight = uni.upx2px(460);
        that.bWidth = data.width + uni.upx2px(10); //;uni.upx2px(750);

        that.getServerData();
        that.getServerDatas();

        //this.bWidth = uni.upx2px(750);
        //this.bHeight = uni.upx2px(400);
      }).exec();
    } catch (e) {
      console.log(e.message);
      this.testdata = e.message;
    }
  },
  onLoad: function onLoad(e) {var _this2 = this;
    try {
      var that = this;



      _self = this;
      uni.getSystemInfo({
        success: function success(res) {
          _self.pageHeight = res.windowHeight;
        } });

      //		this.cWidth = uni.upx2px(750);
      //	this.cHeight = uni.upx2px(460);
      //	this.bWidth = uni.upx2px(750);
      //this.bHeight = uni.upx2px(400);

      this.tapState = e.tapState || 0;
      //this.chartData.categories = [0, 1, 2, 3, 4, 5];
      this.chartData.series[0].data = [];
      this.chartData.series[1].data = [];
      //this.chartDataB.categories = [0, 1, 2, 3, 4, 5];
      this.chartDataB.series[0].data = [];

      that.chartData.categories = [];
      that.chartDataB.categories = [];

      for (var i = 0; i < 300; i++) {
        //let i=index + 1;

        //let di=(i+1) / 60;
        var xLabel = _util.default.secoundtoMs(i);

        that.chartData.categories.push(xLabel);
        that.chartDataB.categories.push(xLabel);
      }
      that.getServerData();
      that.getServerDatas();

      canvaLineA.updateData(that.chartData);
      canvaLineB.updateData(that.chartDataB);
      Fts6MgrModule.stop();
      uni.getStorage({
        key: 'user_login',
        success: function success(res) {
          var yf_obj = res.data;
          _this2.pregnantID = yf_obj.PregnantID;
        } });

      uni.getStorage({
        key: 'equipment_ids',
        success: function success(res) {
          var sb_obj = res.data;var _iterator = _createForOfIteratorHelper(
          sb_obj),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var item = _step.value;
              if (item.e_type == '?????????') {
                _this2.equipment_id = item.equipment_id;
              }
            }} catch (err) {_iterator.e(err);} finally {_iterator.f();}
        } });


      if (e.detail) {
        var _arr = JSON.parse(e.detail);
        this.clTime = _arr.duration;
        this.nowTime = _arr.t_time;
        this.c_time = _arr.t_time;
        this.audit = true;
        that.isResult = true;
        that.exam_time = _arr.exam_time;
        that.exam_result = _arr.exam_result;
        that.yishengjianyi = _arr.yishengjianyi;
        that.chartData.series[0].data = [];
        that.chartData.series[1].data = [];
        //this.chartDataB.categories = [0, 1, 2, 3, 4, 5];
        that.chartDataB.series[0].data = [];
        that.chartData.categories = [];
        that.chartDataB.categories = [];

        if (_arr.state == 1) {
          uni.getSystemInfo({
            success: function success(res) {
              _self.pageHeight = res.windowHeight;
            } });

          var _i = 0;
          for (var t = 0; t < 300; t++) {
            var _xLabel = _util.default.secoundtoMs(t);
            //let xLabel = minute.toString(); //+"???"+secound+"???";
            that.chartData.categories.push(_xLabel);
            that.chartDataB.categories.push(_xLabel);
          }
          canvaLineA.updateData(that.chartData);
          canvaLineB.updateData(that.chartDataB);var _iterator2 = _createForOfIteratorHelper(
          _arr.txarr),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var item = _step2.value;
              //let xLabel = parseInt(i / 60).toString(); //+ '???';
              var _xLabel2 = _util.default.secoundtoMs(_i);
              _i++;
              if (_i >= 300) {
                that.chartData.categories.push(_xLabel2);
                that.chartDataB.categories.push(_xLabel2);
              } else {
                that.chartData.categories[_i] = _xLabel2;
                that.chartDataB.categories[_i] = _xLabel2;
              }
              var t1 = item.t1 == 255 || item.t1 == -1 ? 0 : item.t1;
              var t2 = item.t2 == 255 || item.t2 == -1 ? 0 : item.t2;
              var gsy = item.gsy == -1 ? 0 : item.gsy + '';
              that.nowTime = item.c_time;
              that.chartData.series[0].data.push(Number(t1));
              that.chartData.series[1].data.push(Number(t2));
              that.chartDataB.series[0].data.push(Number(gsy));
            }} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}
          canvaLineA.updateData(that.chartData);
          canvaLineB.updateData(that.chartDataB);
        } else {
          this.$u.
          post('/QueryYFTxjlDetail', {
            id: _arr.id }).

          then(function (res) {
            var i = 0;
            if (res.code == 200) {
              for (var t = 0; t < 300; t++) {
                var _xLabel3 = _util.default.secoundtoMs(t);
                //let xLabel = minute.toString(); //+"???"+secound+"???";
                that.chartData.categories.push(_xLabel3);
                that.chartDataB.categories.push(_xLabel3);
              }
              canvaLineA.updateData(that.chartData);
              canvaLineB.updateData(that.chartDataB);
              var arr = res.data;var _iterator3 = _createForOfIteratorHelper(
              arr),_step3;try {for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {var _item2 = _step3.value;
                  //let xLabel = parseInt(i / 60).toString(); // + '???';

                  var _xLabel4 = _util.default.secoundtoMs(i);
                  i++;
                  if (i >= 300) {
                    that.chartData.categories.push(_xLabel4);
                    that.chartDataB.categories.push(_xLabel4);
                  } else {
                    that.chartData.categories[i] = _xLabel4;
                    that.chartDataB.categories[i] = _xLabel4;
                  }
                  var heartrate1 = _item2.taixinlv1 == 255 || _item2.taixinlv1 == -1 ? 0 : _item2.taixinlv1;
                  var heartrate2 = _item2.taixinlv2 == 255 || _item2.taixinlv2 == -1 ? 0 : _item2.taixinlv2;
                  that.chartData.series[0].data.push(Number(heartrate1));
                  that.chartData.series[1].data.push(Number(heartrate2));
                  var contractions = _item2.gongsuoya == -1 ? 0 : _item2.gongsuoya + '';
                  that.chartDataB.series[0].data.push(Number(contractions));
                }} catch (err) {_iterator3.e(err);} finally {_iterator3.f();}
              canvaLineA.updateData(that.chartData);
              canvaLineB.updateData(that.chartDataB);
            } else {
              console.log(JSON.stringify(res.info));
              uni.showToast({
                title: res.info,
                icon: 'none' });

            }
          });
        }
      }
    } catch (e) {
      console.log(e.message);
      this.testdata = e.message;
    }
  },
  destroyed: function destroyed() {
    try {



      Fts6MgrModule.stop();
      // if (this.innerAudioContext) {
      // 	this.innerAudioContext.destroy();
      // }
    } catch (e) {
      console.log(e.message);
      this.testdata = e.message;
    }
  },
  methods: {
    handleEnd: function handleEnd() {
      this.show = false;
      if (this.status == true) {
        uni.showToast({
          title: '??????????????????!???????????????????????????????????????????????????????????????"??????????????????"??????',
          icon: 'none',
          duration: 8000 });

      } else {
        uni.showModal({
          content: '??????????????????????????????????????????????????????????????????"??????"?????????????????????',
          showCancel: false });

        this.$refs.setTime.endTime();
        this.isStop = true;
      }
      this.isOpenBtn = false;
      this.checked = false;
    },
    // ??????1??????
    handleVoice1: function handleVoice1() {
      try {
        var that = this;
        that.isVoice1 = !that.isVoice1;
        that.isVoice2 = false;
        // Fts6MgrModule.setProbeAudio({
        // 	probe: 2,
        // 	on: false
        // });

        Fts6MgrModule.setProbeAudio({
          probe: 1,
          on: that.isVoice1 });

      } catch (e) {
        console.log(e.message);
        this.testdata = e.message;
      }
    },
    // ??????2??????
    handleVoice2: function handleVoice2() {
      try {
        var that = this;
        that.isVoice2 = !that.isVoice2;
        that.isVoice1 = false;

        // Fts6MgrModule.setProbeAudio({
        // 	probe: 1,
        // 	on: false
        // });
        Fts6MgrModule.setProbeAudio({
          probe: 2,
          on: that.isVoice2 });

      } catch (e) {
        console.log(e.message);
        this.testdata = e.message;
      }
    },
    // ????????????
    longTime: function longTime(e) {
      try {
        this.clTime = e.time;
      } catch (e) {
        console.log(e.message);
        this.testdata = e.message;
      }
      //				console.log(this.clTime + '????????????');
    },
    // ?????????
    getServerDatas: function getServerDatas() {
      try {
        var LineB = {
          categories: [],
          series: [] };

        LineB.categories = _self.chartDataB.categories;
        LineB.series = _self.chartDataB.series;
        _self.showLineB('canvasLineB', LineB);
      } catch (e) {
        console.log(e.message);
        this.testdata = e.message;
      }
    },
    // ??????1????????????
    showLineA: function showLineA(canvasId, chartData) {
      try {
        canvaLineA = new _uCharts.default({
          $this: _self,
          canvasId: canvasId,
          type: 'line',
          fontSize: 11,
          legend: {
            show: false },

          enableMarkLine: true,
          dataLabel: false,
          dataPointShape: false,
          background: '#FFFFFF',
          pixelRatio: _self.pixelRatio,
          categories: chartData.categories,
          series: chartData.series,
          animation: false,
          enableScroll: true,
          xAxis: {
            type: 'grid',
            gridColor: '#CCCCCC',
            gridType: 'dash',
            // calibration: true,
            dashLength: 1,
            itemCount: 300, //x??????????????????????????????????????????5??? ????????????=???????????2+8   ?????????(60)=?????????30??2
            scrollShow: false, //????????????????????????????????????false
            scrollAlign: 'left', //?????????????????????
            scrollBackgroundColor: '#F7F7FF', //????????? #EFEBEF
            scrollColor: '#DEE7F7', //????????? #A6A6A6
            gridEval: 10,
            splitNumber: 30,
            labelCount: 6,
            format: function format(val) {
              return parseInt(val / 60).toString() + '???';
            } },

          yAxis: {
            //data:{
            // min:0,
            // max:240,
            //calibration:false,
            //axisLine:true,
            //disabled:false
            //},
            type: 'grid',
            padding: 0,
            gridType: 'dash',
            gridColor: '#CCCCCC',
            dashLength: 2,
            max: 240,
            min: 0,
            splitNumber: 24,
            // data:{disabled: false},
            format: function format(val) {
              if (val % 10 == 0) return val;else
              return '';
              //return val.toFixed(0) + '';
            } },

          width: _self.cWidth * _self.pixelRatio,
          height: _self.cHeight * _self.pixelRatio,
          extra: {
            touchMoveLimit: 20,
            line: {
              type: 'straight',
              width: 1 },

            markLine: {
              areacolor: '#087c00',
              areaopacity: 0.15,
              data: [{ value: 110, lineColor: '#087c00' }, { value: 160, lineColor: '#087c00' }] } } });



      } catch (e) {
        console.log(e.message);
        this.testdata = e.message;
      }
    },
    // ??????1????????????
    touchLineA: function touchLineA(e) {
      try {
        canvaLineA.scrollStart(e);
      } catch (e) {
        console.log(e.message);
        this.testdata = e.message;
      }
    },
    // ??????1????????????
    moveLineA: function moveLineA(e) {
      try {
        canvaLineA.scroll(e);
      } catch (e) {
        console.log(e.message);
        this.testdata = e.message;
      }
    },
    // ??????1????????????
    touchEndLineA: function touchEndLineA(e) {
      try {
        canvaLineA.scrollEnd(e);
        //?????????toolTip??????????????????????????????????????????????????????
        canvaLineA.showToolTip(e, {
          format: function format(item) {
            return item.data;
          } });

      } catch (e) {
        console.log(e.message);
        this.testdata = e.message;
      }
    },
    // ??????2????????????
    showLineB: function showLineB(canvasId, chartDataB) {
      try {
        canvaLineB = new _uCharts.default({
          $this: _self,
          canvasId: canvasId,
          type: 'line',
          fontSize: 11,
          legend: {
            show: false },

          dataLabel: false,
          dataPointShape: false,
          background: '#FFFFFF',
          pixelRatio: _self.pixelRatio,
          categories: chartDataB.categories,
          series: chartDataB.series,
          animation: false,
          enableScroll: true,
          xAxis: {
            type: 'grid',
            gridColor: '#CCCCCC',
            gridType: 'dash',
            dashLength: 2,
            itemCount: 300, //x??????????????????????????????????????????5???
            scrollShow: false, //????????????????????????????????????false
            scrollAlign: 'left', //?????????????????????
            scrollBackgroundColor: '#F7F7FF', //????????? #EFEBEF
            scrollColor: '#DEE7F7', //????????? #A6A6A6
            splitNumber: 30,
            labelCount: 6,
            gridEval: 10 },

          yAxis: {
            gridType: 'dash',
            gridColor: '#CCCCCC',
            dashLength: 2,
            max: 100,
            min: 0,
            splitNumber: 10,
            format: function format(val) {
              return val.toFixed(0) + '';
            } },

          width: _self.bWidth * _self.pixelRatio,
          height: _self.bHeight * _self.pixelRatio,
          extra: {
            touchMoveLimit: 20,
            line: {
              type: 'straight',
              width: 1 } } });



      } catch (e) {
        console.log(e.message);
        this.testdata = e.message;
      }
    },
    // ??????2??????????????????
    touchLineB: function touchLineB(e) {
      try {
        canvaLineB.scrollStart(e);
      } catch (e) {
        console.log(e.message);
        this.testdata = e.message;
      }
      // console.log(e)
    },
    // ??????2??????????????????
    moveLineB: function moveLineB(e) {
      try {
        canvaLineB.scroll(e);
      } catch (e) {
        console.log(e.message);
        this.testdata = e.message;
      }
      // console.log(e)
    },
    // ??????2????????????
    touchEndLineB: function touchEndLineB(e) {
      try {
        // console.log(e)
        canvaLineB.scrollEnd(e);
        canvaLineB.showToolTip(e, {
          format: function format(item) {
            return item.data;
          } });

      } catch (e) {
        console.log(e.message);
        this.testdata = e.message;
      }
    },
    // ??????
    getServerData: function getServerData() {
      try {
        var LineA = {
          categories: [],
          series: [] };

        LineA.categories = _self.chartData.categories;
        LineA.series = _self.chartData.series;
        _self.showLineA('canvasLineA', LineA);
      } catch (e) {
        console.log(e.message);
        this.testdata = e.message;
      }
    },
    // ????????????
    handleIsSwitch: function handleIsSwitch(e) {
      try {
        this.isOpenBtn = e;
      } catch (e) {
        console.log(e.message);
        this.testdata = e.message;
      }
    },
    // ??????
    start: function start() {var _this3 = this;
      var that = this;
      try {
        var i = 0;
        var upxh = 0;
        that.maindataInsert = false;
        var taixinid = '';
        that.show = true;
        that.isSwitchFlash = false;
        that.status = false;
        that.isVoice1 = true;
        that.isVoice2 = false;
        that.isResult = false;
        that.openaudio = false;
        that.chartData.categories = [];
        that.chartDataB.categories = [];
        for (var t = 0; t < 300; t++) {
          var xLabel = _util.default.secoundtoMs(t);
          that.chartData.categories.push(xLabel);
          that.chartDataB.categories.push(xLabel);
        }
        that.chartData.series[0].data = [];
        that.chartData.series[1].data = [];
        that.chartDataB.series[0].data = [];
        canvaLineA.updateData(that.chartData);
        canvaLineB.updateData(that.chartDataB);
        that.taixinId = '';
        that.updataList = [];
        var datatime = '';
        Fts6MgrModule.start({}, function (ret) {
          that.testdata = ret;
          var xtObj = JSON.parse(ret);
          if (typeof xtObj.data == 'object') {
            console.log('-----------------------------start');
            if (!that.status) {
              uni.showToast({
                title: '??????????????????!???????????????????????????????????????????????????????????????????????????"??????????????????"??????',
                icon: 'none',
                duration: 8000 });

              that.show = false;
              that.status = true;
            }
            that.isSwitchFlash = true;
            if (datatime != xtObj.data.time) {
              datatime = xtObj.data.time;
              var _xLabel5 = _util.default.secoundtoMs(i);
              if (i >= 300) {
                that.chartData.categories.push(_xLabel5);
                that.chartDataB.categories.push(_xLabel5);
              } else {
                that.chartData.categories[i] = _xLabel5;
                that.chartDataB.categories[i] = _xLabel5;
              }
              that.signallevel1 = xtObj.data.signallevel1;
              that.signallevel2 = xtObj.data.signallevel2;
              that.taixinlv1 = xtObj.data.heartrate1 == 255 || xtObj.data.heartrate1 == -1 ? 0 : xtObj.data.heartrate1;
              that.taixinlv2 = xtObj.data.heartrate2 == 255 || xtObj.data.heartrate2 == -1 ? 0 : xtObj.data.heartrate2;
              that.gongsuoya = xtObj.data.contractions == -1 ? '0' : xtObj.data.contractions;

              if (that.taixinlv1 > 160 || that.taixinlv1 < 110) {
                _this3.flash = false;
                // if (!this.innerAudioContext) {
                // 	this.innerAudioContext = uni.createInnerAudioContext();
                // 	this.innerAudioContext.src = '/static/audio/tishi.mp3';
                // 	this.innerAudioContext.play();
                // } else {
                // 	this.innerAudioContext.stop();
                // 	this.innerAudioContext.play();
                // }
              } else {
                _this3.flash = true;
              }
              if (!that.openaudio) {
                Fts6MgrModule.setProbeAudio({
                  probe: 1,
                  on: that.isVoice1 });

                that.openaudio = true;
              }
              if (Number(xtObj.data.isvalids1) == 1 || Number(xtObj.data.isvalids2) == 1 || Number(xtObj.data.isvalidstoco) ==
              1) {
                if (!that.isConnected) {
                  that.isConnected = true;
                  that.$refs.setTime.startTime();
                }
                if (!that.isTocoCleared && Number(xtObj.data.isvalidstoco) == 1) {
                  that.isTocoCleared = true;
                  Fts6MgrModule.clearTocoVal();

                }
              }
              that.contractionss = xtObj.data.contractions;
              xtObj.data.heartrate1 = xtObj.data.heartrate1 == 255 || xtObj.data.heartrate1 == -1 ? 0 : xtObj.data.heartrate1;
              xtObj.data.heartrate2 = xtObj.data.heartrate2 == 255 || xtObj.data.heartrate2 == -1 ? 0 : xtObj.data.heartrate2;

              that.fetalHeartRate.manualFetalMovement = xtObj.data.movementcount1;
              xtObj.data.contractions = xtObj.data.contractions == -1 ? 0 : xtObj.data.contractions;

              if (i >= 300) {
                that.chartData.series[0].data.push(Number(xtObj.data.heartrate1));
                that.chartData.series[1].data.push(Number(xtObj.data.heartrate2));
                that.chartDataB.series[0].data.push(Number(xtObj.data.contractions));
              } else {
                that.chartData.series[0].data[i] = Number(xtObj.data.heartrate1);
                that.chartData.series[1].data[i] = Number(xtObj.data.heartrate2);
                that.chartDataB.series[0].data[i] = Number(xtObj.data.contractions);
              }

              canvaLineB.updateData(that.chartDataB);
              canvaLineA.updateData(that.chartData);
              var item = {
                p_id: that.pregnantID,
                e_id: that.equipment_id,
                c_time: that.nowTime,
                t1: xtObj.data.heartrate1,
                t2: xtObj.data.heartrate2,
                gsy: xtObj.data.contractions,
                sdtds: '',
                zdtds: xtObj.data.movementcount1,
                t_result: that.c_result,
                sbcljy: '',
                taixinId: '',
                duration: that.clTime };

              that.updataList.push(item);
              upxh++;
              var _item = {
                e_id: that.equipment_id,
                p_id: that.pregnantID,
                c_time: that.nowTime,
                t1: xtObj.data.heartrate1,
                t2: xtObj.data.heartrate2,
                gsy: xtObj.data.contractions,
                sdtds: '',
                zdtds: xtObj.data.movementcount1,
                t_result: that.c_result,
                sbcljy: '',
                xh: upxh,
                taixinId: that.taixinId,
                duration: that.clTime };

              // console.log(that.nowTime)
              // console.log(_item)
              // console.log('_item.taixinId***************' + _item.taixinId)
              // console.log('maindataInsert***************' + that.maindataInsert)
              // console.log(that.isOpenBtn)
              if (that.isOpenBtn === true) {
                // console.log(that.isOpenBtn)
                if (_item.taixinId == '' && !that.maindataInsert) {
                  // console.log('_item.taixinId=============' + _item.taixinId)
                  // console.log('maindataInsert=============' + !that.maindataInsert)
                  that.switchUpdataList = [];
                  that.switchUpdataList.push(_item);
                  that.maindataInsert = true;
                  that.handleFetalHeartRateData();

                }
                if (_item.taixinId !== '' && that.maindataInsert == true) {
                  // console.log('_item.taixinId---------------' + _item.taixinId)
                  // console.log('maindataInsert---------------' + that.maindataInsert)
                  that.switchUpdataList = [];
                  that.switchUpdataList.push(_item);

                  that.handleFetalHeartRateData();
                }
              }
              i++;
            }
          }
        });
      } catch (e) {
        that.testdata = e.message;
        uni.hideLoading();
        uni.showModal({
          title: 'err',
          content: e.message,
          showCancel: false });

      }
    },
    // ????????????
    handleStartTime: function handleStartTime() {
      try {
        if (this.isStop) {
          this.nowTime = _util.default.getFtSystemTime();
          this.hour = this.stopTime.h || 0;
          this.minute = this.stopTime.i || 0;
          this.second = this.stopTime.s || 0;
          this.$refs.setTime.startTime();
          this.taixinId = '';

          this.start();

          this.isStop = false;
        }
      } catch (e) {
        console.log(e.message);
        this.testdata = e.message;
      }
    },
    handleEndTime: function handleEndTime() {var _this4 = this;
      if (this.isOpenBtn == true && this.checked == true) {
        uni.showModal({
          title: '??????',
          content: '????????????????????????????????????????????????',
          success: function success(res) {
            if (res.confirm) {
              _this4.$refs.setTime.stopTime();
              _this4.handleUpfateDuration();
              _this4.isStop = true;
              _this4.checked = false;
              _this4.isOpenBtn = false;
              _this4.jianhuzhuantai = "??????????????????";
              _this4.switchFlash = true;
              uni.navigateBack();
            }
          } });

      } else {
        this.$refs.setTime.stopTime();
        this.setStorageFun();
        this.isStop = true;
        this.checked = false;
        this.isOpenBtn = false;
        this.jianhuzhuantai = "??????????????????";
        this.switchFlash = true;
      }
    },
    // ??????
    setStorageFun: function setStorageFun() {var _this5 = this;
      try {
        var _arr = [{
          p_id: this.pregnantID,
          t_time: this.nowTime,
          value: '',
          flag: '',
          result: this.c_result,
          type: '??????',
          state: 1,
          txarr: this.updataList,
          duration: this.clTime }];

        //??????
        if (this.isOpenBtn == false && this.checked == false) {
          (0, _storage.setStorageList)(_arr);
          uni.showModal({
            title: '?????????????????????',
            content: '??????????????????',
            success: function success(res) {
              if (res.confirm) {
                _this5.handleFetalHeartRate();
                (0, _storage.clearStorageList)('??????');
              } else {
                _this5.updataList = [];
                uni.navigateBack();
              }
            } });

        } else {
          uni.showModal({
            title: '??????',
            // content: '?????????????????????????????????,?????????????????????????????????"??????"??????',
            content: '?????????????????????????????????',
            showCancel: false,
            success: function success(res) {
              if (res.confirm) {
                // this.handleUpfateDuration();
                uni.navigateBack();
              }
            } });

        }
      } catch (e) {
        console.log(e.message);
        this.testdata = e.message;
      }
    },
    //???????????????
    stopChange: function stopChange(e) {
      try {
        Fts6MgrModule.stop();
        // this.hour = 0;
        // this.minute = 0;
        // this.second = 0;
        this.isResult = true;
        this.isConnected = false;
        this.isTocoCleared = false;
        this.clTime = e.time;
        console.log(this.clTime + '????????????');var _iterator4 = _createForOfIteratorHelper(
        this.updataList),_step4;try {for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {var item = _step4.value;
            item.duration = this.clTime;
          }} catch (err) {_iterator4.e(err);} finally {_iterator4.f();}
        if (this.isOpenBtn == true && this.checked == true) {
          this.handleUpfateDuration();
        }
      } catch (e) {
        console.log(e.message);
        this.testdata = e.message;
      }
    },
    //???????????????
    submitChange: function submitChange(e) {
      try {
        Fts6MgrModule.stop();
        this.isResult = true;
        this.setStorageFun();
        // this.stopTime = e.time;
        this.clTime = e.time;
        console.log(this.clTime + '??????');
        // this.disabled = false;
        var _iterator5 = _createForOfIteratorHelper(this.updataList),_step5;try {for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {var item = _step5.value;
            item.duration = this.clTime;
          }} catch (err) {_iterator5.e(err);} finally {_iterator5.f();}
        this.isStop = e.isStop;
        console.log(this.isOpenBtn);
        console.log(this.checked);
        if (this.isOpenBtn == true && this.checked == true) {
          this.handleUpfateDuration();
        }
      } catch (e) {
        console.log(e.message);
        this.testdata = e.message;
      }
      this.checked = false;
      this.isOpenBtn = false;
      this.jianhuzhuantai = "??????????????????";
      this.switchFlash = true;
    },
    // ?????????????????? ???????????? - ????????? ??????
    handleFetalHeartRate: function handleFetalHeartRate() {var _this6 = this;
      try {
        console.log(JSON.stringify(this.updataList));
        this.$u.
        post('/UploadListJHYInfo', {
          data: this.updataList }).

        then(function (res) {
          if (res.code == 200 && res.data == true) {
            _this6.updataList = [];
            uni.showToast({
              title: '????????????',
              icon: 'none',
              duration: 3000 });

            setTimeout(function () {
              uni.navigateBack();
            }, 3000);
          }
        });
      } catch (e) {
        console.log(e.message);
        this.testdata = e.message;
      }
    },
    // ???????????? 
    handleFetalHeartRateData: function handleFetalHeartRateData() {
      var that = this;
      try {
        //console.log(that.switchUpdataList);
        setTimeout(function () {
          that.$u.
          post('/SS_UploadJHYInfo', {
            data: that.switchUpdataList }).

          then(function (res) {
            console.log(JSON.stringify(res));
            if (res.code == 200) {
              var arr = res.data;
              if (that.maindataInsert) {
                that.taixinId = arr[0].id;
                uni.setStorageSync('taixinId', that.taixinId);
              }

            } else {
              uni.showToast({
                title: res.info,
                icon: 'none' });

            }
          }).catch(function (e) {
            console.log(JSON.stringify(e));
          });
        }, 200);
      } catch (e) {
        console.log(e.message);
        this.testdata = e.message;
      }
    },
    handleUpfateDuration: function handleUpfateDuration() {
      try {
        this.$u.post('/Rt_Endtime', {
          taixin_id: this.taixinId }).
        then(function (res) {
          console.log(res);
        });
      } catch (e) {
        console.log(e.message);
        this.testdata = e.message;
      }
    },
    // ??????
    handleClear: function handleClear() {var _this7 = this;
      if (this.checked == false && this.isOpenBtn == false) {
        this.checked = true;
        this.isOpenBtn = true;
        this.isStop = true;
        this.handleStartTime();
        uni.showToast({
          title: '?????????????????????,???????????????30??????',
          icon: 'none',
          duration: 5000 });

        this.show = false;
        this.status = true;
        this.jianhuzhuantai = "???????????????";
        this.switchFlash = false;
      } else {
        uni.showModal({
          title: '??????',
          content: '????????????????????????,???????????????????????????????????????????,????????????????????????',
          success: function success(res) {
            if (res.confirm) {
              _this7.checked = true;
              _this7.isOpenBtn = true;
              _this7.isStop = true;
              _this7.$refs.setTime.stopTime();
              _this7.handleUpfateDuration();
              _this7.handleStartTime();
              _this7.show = false;
              _this7.status = true;
              _this7.jianhuzhuantai = "???????????????";
              _this7.switchFlash = false;
            }
          } });

      }
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 206:
/*!****************************************************************************************************************************************************************!*\
  !*** C:/Users/13385/Desktop/app_woman_a/pages/fetalHeartRateMonitoring/fetalHeartRateMonitoring.vue?vue&type=style&index=0&id=d12fcf74&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_fetalHeartRateMonitoring_vue_vue_type_style_index_0_id_d12fcf74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./fetalHeartRateMonitoring.vue?vue&type=style&index=0&id=d12fcf74&lang=scss&scoped=true& */ 207);
/* harmony import */ var _D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_fetalHeartRateMonitoring_vue_vue_type_style_index_0_id_d12fcf74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_fetalHeartRateMonitoring_vue_vue_type_style_index_0_id_d12fcf74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_fetalHeartRateMonitoring_vue_vue_type_style_index_0_id_d12fcf74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_fetalHeartRateMonitoring_vue_vue_type_style_index_0_id_d12fcf74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_fetalHeartRateMonitoring_vue_vue_type_style_index_0_id_d12fcf74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 207:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/13385/Desktop/app_woman_a/pages/fetalHeartRateMonitoring/fetalHeartRateMonitoring.vue?vue&type=style&index=0&id=d12fcf74&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[199,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/fetalHeartRateMonitoring/fetalHeartRateMonitoring.js.map