(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{177:function(t,s,e){"use strict";e.r(s);var n=e(0),a=Object(n.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("p",[t._v("Begin by installing as a dev-dependency:")]),t._v(" "),t._m(2),e("p",[t._v("Vue-Autowire is then provided as a "),e("a",{attrs:{href:"https://vuejs.org/v2/guide/plugins.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue plugin"),e("OutboundLink")],1),t._v(" that you must explicitly install with "),e("code",[t._v("Vue.use()")]),t._v(".")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),e("p",[t._v("The easiest is to use the "),e("router-link",{attrs:{to:"./guide/"}},[t._v("default conventions")]),t._v(".")],1),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[this._v("#")]),this._v(" Installation")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"npm-yarn"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npm-yarn","aria-hidden":"true"}},[this._v("#")]),this._v(" npm/yarn")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# using npm")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --save-dev vue-autowire\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# using yarn")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" --dev vue-autowire\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Within this call, you must provide the "),s("code",[this._v("conventions")]),this._v(" object that defines:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("which types of assets should be auto-wired (ie, components, views, directives, etc)")]),this._v(" "),s("li",[this._v("where should webpack find them")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" App "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./App.vue'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" VueAutowire "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-autowire'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" defaultConventions "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-autowire/src/conventions'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nVue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VueAutowire"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" defaultConventions"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("render")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("h")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("h")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("App"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("$mount")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"latest-dev-build"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#latest-dev-build","aria-hidden":"true"}},[this._v("#")]),this._v(" Latest dev build")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("You will have to clone directly from GitHub and build "),s("code",[this._v("vue-autowire")]),this._v(" yourself if\nyou want to use the latest dev build.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/kaizendorks/vue-autowire.git\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" vue-autowire\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Once cloned and built, install it in your project as a "),s("code",[this._v("file://")]),this._v(" dev-dependency:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Using npm")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --save-dev /Users/garciad/git/kaizendorks/vue-autowire\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Using yarn")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" --dev /Users/garciad/git/kaizendorks/vue-autowire\n")])])])}],!1,null,null,null);s.default=a.exports}}]);