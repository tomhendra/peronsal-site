var __create = Object.create;
var __defProp = Object.defineProperty, __defProps = Object.defineProperties, __getOwnPropDesc = Object.getOwnPropertyDescriptor, __getOwnPropDescs = Object.getOwnPropertyDescriptors, __getOwnPropNames = Object.getOwnPropertyNames, __getOwnPropSymbols = Object.getOwnPropertySymbols, __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty, __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: !0, configurable: !0, writable: !0, value }) : obj[key] = value, __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    __hasOwnProp.call(b, prop) && __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b))
      __propIsEnum.call(b, prop) && __defNormalProp(a, prop, b[prop]);
  return a;
}, __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b)), __markAsModule = (target) => __defProp(target, "__esModule", { value: !0 });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    __hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source))
      exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop) && (target[prop] = source[prop]);
  return target;
};
var __export = (target, all3) => {
  for (var name in all3)
    __defProp(target, name, { get: all3[name], enumerable: !0 });
}, __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 == "object" || typeof module2 == "function")
    for (let key of __getOwnPropNames(module2))
      !__hasOwnProp.call(target, key) && (copyDefault || key !== "default") && __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  return target;
}, __toESM = (module2, isNodeMode) => __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: !0 } : { value: module2, enumerable: !0 })), module2), __toCommonJS = /* @__PURE__ */ ((cache) => (module2, temp) => cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp))(typeof WeakMap != "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// server.js
var server_exports = {};
__export(server_exports, {
  onRequest: () => onRequest
});

// node_modules/.pnpm/@remix-run+dev@1.6.6_sfoxds7t5ydpegc3knd667wn6m/node_modules/@remix-run/dev/dist/compiler/shims/react.ts
var React = __toESM(require("react"));

// server.js
var import_cloudflare_pages = require("@remix-run/cloudflare-pages");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => AppWithProviders,
  links: () => links12,
  loader: () => loader,
  meta: () => meta
});
var import_react8 = require("@remix-run/react"), import_clsx5 = __toESM(require("clsx")), import_react9 = __toESM(require("react"));

// app/components/Layout/Layout.tsx
var import_react7 = require("@remix-run/react");

// app/components/Link/Link.tsx
var import_react2 = require("@remix-run/react");

// app/components/Link/link.css
var link_default = "/build/_assets/link-G52VYOZH.css";

// app/components/Link/Link.tsx
var import_clsx = __toESM(require("clsx")), links = () => [{ rel: "stylesheet", href: link_default }];
function Link(props) {
  let { size, variant, mood } = props, allClassNames = (0, import_clsx.default)("link", "click-target-helper", size && size, variant && variant, mood && mood);
  if (props.as === "external") {
    let _a = props, { children, className } = _a, rest = __objRest(_a, ["children", "className"]);
    return /* @__PURE__ */ React.createElement("a", __spreadValues({
      className: (0, import_clsx.default)(allClassNames, className)
    }, rest), children);
  } else {
    let _b = props, { children, className } = _b, rest = __objRest(_b, ["children", "className"]);
    return /* @__PURE__ */ React.createElement(import_react2.Link, __spreadValues({
      className: (0, import_clsx.default)(allClassNames, className)
    }, rest), children);
  }
}

// app/components/Logo/Logo.tsx
var import_clsx2 = __toESM(require("clsx"));

// app/components/Logo/logo.css
var logo_default = "/build/_assets/logo-3ZYRZKOG.css";

// app/components/Logo/Logo.tsx
var links2 = () => [{ rel: "stylesheet", href: logo_default }];
function Logo({ className }) {
  return /* @__PURE__ */ React.createElement("svg", {
    className: (0, import_clsx2.default)("logo", className && className),
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.98465 11.2378C6.72313 11.1708 6.49082 11.0893 6.40632 11.0574C5.45696 10.6987 4.33216 10.066 4.33216 8.84493V4.42004C4.33216 3.19897 5.45696 2.56624 6.40632 2.20759C7.68274 1.72539 10.1292 1.52684 11.9906 1.52684C13.8521 1.52684 16.2985 1.72539 17.5749 2.20759C18.5243 2.56624 19.6492 3.19897 19.6492 4.42004V8.84493C19.6492 10.066 18.5243 10.6987 17.5749 11.0574C17.4921 11.0886 17.2181 11.185 16.9997 11.237C17.1046 11.2688 17.2039 11.2985 17.2762 11.3225C19.5729 12.0593 21.07 13.2229 21.07 14.3759C21.07 15.5193 19.574 16.6843 17.2791 17.4241C17.7893 19.7815 17.5304 21.6601 16.5316 22.2366C15.5409 22.8086 13.7826 22.0944 11.9934 20.4748C10.2042 22.0944 8.44583 22.8086 7.45505 22.2366C6.4565 21.6601 6.1975 19.7815 6.70776 17.4241C4.41277 16.6843 2.9167 15.5193 2.9167 14.3759C2.9167 13.2229 4.41407 12.0593 6.71076 11.3225C6.7857 11.2985 6.84467 11.2803 6.98465 11.2378ZM15.7874 15.4115C16.95 18.3966 17.0113 20.9771 16.1062 21.4996C15.4402 21.8842 14.0686 21.2567 12.5914 19.9005C13.5501 18.926 14.4941 17.703 15.3097 16.2905C15.4787 15.9978 15.6379 15.7045 15.7874 15.4115ZM8.19963 15.4115C8.34905 15.7045 8.5082 15.9978 8.6772 16.2905C9.49269 17.703 10.4367 18.926 11.3954 19.9005C9.91816 21.2567 8.54658 21.8842 7.88052 21.4996C6.97546 20.9771 7.03693 18.3966 8.19963 15.4115ZM13.8134 11.6799C14.0754 12.0631 14.3297 12.466 14.5727 12.8868C14.8598 13.3841 15.1174 13.8828 15.3457 14.3759C15.1174 14.869 14.8598 15.3677 14.5727 15.8651C13.7893 17.222 12.8868 18.3928 11.9934 19.3169C11.1 18.3928 10.1976 17.222 9.41415 15.8651C9.12698 15.3677 8.86946 14.869 8.64107 14.3759C8.86949 13.8828 9.12698 13.3841 9.41415 12.8868C9.657 12.4661 9.91129 12.0633 10.1732 11.6803C10.8002 11.7196 11.4226 11.7381 11.9906 11.7381C12.5602 11.7381 13.1846 11.7195 13.8134 11.6799ZM14.7874 11.6082C17.9538 12.0939 20.2191 13.3309 20.2191 14.3759C20.2191 15.1446 18.9911 16.0182 17.0799 16.6194C16.7137 15.3025 16.1252 13.874 15.3097 12.4613C15.1406 12.1687 14.9662 11.8841 14.7874 11.6082ZM9.19945 11.6082C9.02056 11.8841 8.84614 12.1687 8.6772 12.4613C7.86158 13.874 7.27304 15.3025 6.90702 16.6194C4.99561 16.0182 3.76764 15.1446 3.76764 14.3759C3.76764 13.3309 6.03307 12.0939 9.19945 11.6082ZM18.7983 4.78878C18.7983 3.77122 17.7984 3.24395 16.9546 2.94507C15.82 2.54323 13.6452 2.37778 11.9906 2.37778C10.336 2.37778 8.16139 2.54323 7.0268 2.94507C6.1829 3.24395 5.1831 3.77122 5.1831 4.78878V8.47619C5.1831 9.49374 6.1829 10.021 7.0268 10.3199C8.16139 10.7217 10.336 10.8872 11.9906 10.8872C13.6452 10.8872 15.82 10.7217 16.9546 10.3199C17.7984 10.021 18.7983 9.49374 18.7983 8.47619V4.78878ZM9.44333 5.895C9.91299 5.895 10.2943 6.40338 10.2943 7.02959C10.2943 7.6558 9.91299 8.16418 9.44333 8.16418C8.9737 8.16418 8.59239 7.6558 8.59239 7.02959C8.59239 6.40338 8.9737 5.895 9.44333 5.895ZM14.549 5.895C15.0187 5.895 15.3999 6.40338 15.3999 7.02959C15.3999 7.6558 15.0187 8.16418 14.549 8.16418C14.0793 8.16418 13.698 7.6558 13.698 7.02959C13.698 6.40338 14.0793 5.895 14.549 5.895Z"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.55629 11.2418C5.21039 11.6873 4.14646 12.2801 3.50241 12.9273C3.04077 13.3912 2.79207 13.8859 2.79207 14.3759C2.79207 14.862 3.04052 15.3548 3.5019 15.8178C4.14691 16.4651 5.21345 17.0603 6.56259 17.5078C6.27352 18.9001 6.25435 20.1216 6.49335 21.005C6.66428 21.6368 6.96835 22.0995 7.39274 22.3446C7.81393 22.5877 8.36522 22.6188 8.99736 22.4505C9.88109 22.2151 10.9306 21.5882 11.9934 20.6423C13.0562 21.5882 14.1057 22.2151 14.9895 22.4505C15.6217 22.6188 16.1728 22.5877 16.594 22.3446C17.0184 22.0995 17.3225 21.6368 17.4935 21.005C17.7326 20.1216 17.7133 18.9001 17.4243 17.5078C18.7733 17.0603 19.8398 16.4651 20.4848 15.8178C20.9463 15.3548 21.1948 14.862 21.1948 14.3759C21.1948 13.8859 20.946 13.3912 20.4843 12.9273C19.8398 12.2797 18.775 11.6864 17.428 11.241C17.5136 11.2125 17.5834 11.1874 17.6189 11.174C18.6122 10.7988 19.7737 10.1225 19.7737 8.84495V4.42005C19.7737 3.14251 18.6122 2.46624 17.6189 2.091C16.3325 1.60497 13.8668 1.40219 11.9906 1.40219C10.1144 1.40219 7.64881 1.60497 6.36225 2.091C5.369 2.46624 4.2075 3.14251 4.2075 4.42005V8.84495C4.2075 10.1225 5.369 10.7988 6.36225 11.174C6.40065 11.1885 6.46887 11.213 6.55629 11.2418ZM6.98465 11.2378C6.72313 11.1709 6.49083 11.0893 6.40633 11.0574C5.45696 10.6988 4.33216 10.066 4.33216 8.84495V4.42005C4.33216 3.19898 5.45696 2.56625 6.40633 2.20761C7.68274 1.72541 10.1292 1.52685 11.9906 1.52685C13.8521 1.52685 16.2985 1.72541 17.5749 2.20761C18.5243 2.56625 19.6492 3.19898 19.6492 4.42005V8.84495C19.6492 10.066 18.5243 10.6988 17.5749 11.0574C17.4921 11.0887 17.2181 11.185 16.9997 11.2371C17.1046 11.2688 17.2039 11.2985 17.2762 11.3225C19.5729 12.0593 21.07 13.2229 21.07 14.3759C21.07 15.5194 19.574 16.6844 17.2791 17.4242C17.7893 19.7816 17.5304 21.6601 16.5316 22.2366C15.5409 22.8086 13.7826 22.0944 11.9934 20.4748C10.2042 22.0944 8.44583 22.8086 7.45506 22.2366C6.45651 21.6601 6.19751 19.7816 6.70776 17.4242C4.41277 16.6844 2.9167 15.5194 2.9167 14.3759C2.9167 13.2229 4.41408 12.0593 6.71077 11.3225C6.78571 11.2985 6.84467 11.2803 6.98465 11.2378ZM8.19963 15.4115C8.34905 15.7045 8.50821 15.9979 8.6772 16.2906C9.49269 17.703 10.4367 18.926 11.3955 19.9005C9.91816 21.2567 8.54659 21.8842 7.88053 21.4997C6.97547 20.9771 7.03693 18.3966 8.19963 15.4115ZM15.7874 15.4115C16.95 18.3966 17.0113 20.9771 16.1062 21.4997C15.4402 21.8842 14.0687 21.2567 12.5914 19.9005C13.5501 18.926 14.4941 17.703 15.3097 16.2906C15.4787 15.9979 15.6379 15.7045 15.7874 15.4115ZM15.7695 15.7159C16.3893 17.3856 16.6576 18.9091 16.5955 19.9834C16.5742 20.3487 16.5149 20.6606 16.4165 20.906C16.326 21.1319 16.2037 21.2995 16.0441 21.3917C15.8021 21.5313 15.458 21.5131 15.0465 21.3753C14.4022 21.1597 13.6066 20.647 12.7708 19.8952C13.705 18.9294 14.6221 17.7308 15.4175 16.3529C15.54 16.1408 15.6574 15.9283 15.7695 15.7159V15.7159ZM8.21722 15.7159C8.32945 15.9283 8.4468 16.1408 8.56925 16.3529C9.36477 17.7308 10.2818 18.9294 11.216 19.8952C10.3802 20.647 9.58462 21.1597 8.94049 21.3753C8.52869 21.5131 8.18462 21.5313 7.94287 21.3917C7.78307 21.2995 7.66081 21.1319 7.57024 20.906C7.47185 20.6606 7.41259 20.3487 7.39143 19.9834C7.32923 18.9091 7.59756 17.3856 8.21722 15.7159ZM13.8134 11.6799C14.0754 12.0631 14.3298 12.466 14.5727 12.8868C14.8598 13.3841 15.1174 13.8828 15.3457 14.3759C15.1174 14.869 14.8598 15.3677 14.5727 15.8651C13.7893 17.2221 12.8868 18.3928 11.9934 19.317C11.1 18.3928 10.1976 17.2221 9.41415 15.8651C9.12698 15.3677 8.86946 14.869 8.64107 14.3759C8.86949 13.8828 9.12698 13.3841 9.41415 12.8868C9.65701 12.4661 9.9113 12.0633 10.1732 11.6803C10.8002 11.7197 11.4227 11.7381 11.9906 11.7381C12.5602 11.7381 13.1846 11.7196 13.8134 11.6799ZM13.7503 11.8087C13.9965 12.1718 14.2358 12.5525 14.4647 12.9491C14.7398 13.4255 14.9875 13.9032 15.2081 14.3759C14.9875 14.8486 14.7398 15.3263 14.4647 15.8028C13.713 17.1048 12.8511 18.2343 11.9934 19.1368C11.1358 18.2343 10.2738 17.1048 9.52208 15.8028C9.24702 15.3263 8.99931 14.8486 8.77852 14.3759C8.99934 13.9032 9.24702 13.4255 9.52208 12.9491C9.75104 12.5526 9.99018 12.172 10.2363 11.8091C10.842 11.8456 11.4416 11.8628 11.9906 11.8628C12.5412 11.8628 13.1428 11.8455 13.7503 11.8087ZM9.19946 11.6082C9.02056 11.8841 8.84614 12.1687 8.6772 12.4613C7.86158 13.8741 7.27304 15.3025 6.90702 16.6195C4.99561 16.0182 3.76765 15.1446 3.76765 14.3759C3.76765 13.3309 6.03308 12.0939 9.19946 11.6082ZM14.7874 11.6082C17.9539 12.0939 20.2191 13.3309 20.2191 14.3759C20.2191 15.1446 18.9911 16.0182 17.0799 16.6195C16.7137 15.3025 16.1252 13.8741 15.3097 12.4613C15.1406 12.1687 14.9662 11.8841 14.7874 11.6082ZM15.0419 11.7757C16.798 12.0739 18.2514 12.6032 19.1506 13.1943C19.4563 13.3952 19.6969 13.6025 19.8602 13.8104C20.0106 14.0018 20.0945 14.1914 20.0945 14.3759C20.0945 14.6549 19.907 14.9437 19.582 15.2312C19.0737 15.681 18.233 16.1135 17.1647 16.4614C16.794 15.1701 16.2131 13.7771 15.4175 12.399C15.2952 12.1869 15.1699 11.9791 15.0419 11.7757ZM8.94474 11.7757C8.81699 11.9791 8.6917 12.1869 8.56925 12.399C7.77362 13.7771 7.19274 15.1701 6.82213 16.4614C5.754 16.1135 4.9131 15.681 4.40483 15.2312C4.07988 14.9437 3.89231 14.6549 3.89231 14.3759C3.89231 14.1914 3.97627 14.0018 4.1266 13.8104C4.28995 13.6025 4.53046 13.3952 4.8362 13.1943C5.73545 12.6032 7.18894 12.0739 8.94474 11.7757ZM18.7983 4.78879C18.7983 3.77124 17.7984 3.24397 16.9546 2.94509C15.82 2.54325 13.6452 2.37779 11.9906 2.37779C10.336 2.37779 8.16139 2.54325 7.0268 2.94509C6.1829 3.24397 5.1831 3.77124 5.1831 4.78879V8.47621C5.1831 9.49376 6.1829 10.021 7.0268 10.3199C8.16139 10.7218 10.336 10.8872 11.9906 10.8872C13.6452 10.8872 15.82 10.7218 16.9546 10.3199C17.7984 10.021 18.7983 9.49376 18.7983 8.47621V4.78879ZM18.6735 4.78879V8.47621C18.6735 8.94476 18.4403 9.2989 18.113 9.57182C17.7686 9.8589 17.3216 10.0577 16.9129 10.2024C15.7879 10.6009 13.6313 10.7625 11.9906 10.7625C10.35 10.7625 8.19342 10.6009 7.06842 10.2024C6.65971 10.0577 6.2126 9.8589 5.86831 9.57182C5.54098 9.2989 5.30773 8.94476 5.30773 8.47621V4.78879C5.30773 4.32024 5.54098 3.9661 5.86831 3.69318C6.2126 3.4061 6.65971 3.20732 7.06842 3.06258C8.19342 2.66414 10.35 2.50246 11.9906 2.50246C13.6313 2.50246 15.7879 2.66414 16.9129 3.06258C17.3216 3.20732 17.7686 3.4061 18.113 3.69318C18.4403 3.9661 18.6735 4.32024 18.6735 4.78879ZM14.549 5.77036C14.0215 5.77036 13.5734 6.32627 13.5734 7.02961C13.5734 7.73294 14.0215 8.28886 14.549 8.28886C15.0765 8.28886 15.5247 7.73294 15.5247 7.02961C15.5247 6.32627 15.0765 5.77036 14.549 5.77036ZM9.44334 5.77036C8.91584 5.77036 8.46776 6.32627 8.46776 7.02961C8.46776 7.73294 8.91584 8.28886 9.44334 8.28886C9.97083 8.28886 10.4189 7.73294 10.4189 7.02961C10.4189 6.32627 9.97083 5.77036 9.44334 5.77036ZM9.44334 5.89502C9.913 5.89502 10.2943 6.4034 10.2943 7.02961C10.2943 7.65581 9.913 8.16419 9.44334 8.16419C8.9737 8.16419 8.59239 7.65581 8.59239 7.02961C8.59239 6.4034 8.9737 5.89502 9.44334 5.89502ZM14.549 5.89502C15.0187 5.89502 15.3999 6.4034 15.3999 7.02961C15.3999 7.65581 15.0187 8.16419 14.549 8.16419C14.0793 8.16419 13.698 7.65581 13.698 7.02961C13.698 6.4034 14.0793 5.89502 14.549 5.89502Z"
  }));
}

// app/components/ThemeToggle/ThemeToggle.tsx
var import_react_feather = require("react-feather");

// app/helpers/theme-provider.tsx
var import_react3 = require("@remix-run/react"), import_react4 = require("react"), Theme = /* @__PURE__ */ ((Theme2) => (Theme2.DARK = "dark", Theme2.LIGHT = "light", Theme2))(Theme || {}), themes = Object.values(Theme), ThemeContext = (0, import_react4.createContext)(void 0), prefersDarkMQ = "(prefers-color-scheme: dark)", getPreferredTheme = () => window.matchMedia(prefersDarkMQ).matches ? "dark" /* DARK */ : "light" /* LIGHT */;
function ThemeProvider({
  children,
  specifiedTheme
}) {
  let [theme, setTheme] = (0, import_react4.useState)(() => specifiedTheme ? themes.includes(specifiedTheme) ? specifiedTheme : null : typeof document > "u" ? null : getPreferredTheme()), persistTheme = (0, import_react3.useFetcher)(), persistThemeRef = (0, import_react4.useRef)(persistTheme);
  (0, import_react4.useEffect)(() => {
    persistThemeRef.current = persistTheme;
  }, [persistTheme]);
  let mountRun = (0, import_react4.useRef)(!1);
  return (0, import_react4.useEffect)(() => {
    if (!mountRun.current) {
      mountRun.current = !0;
      return;
    }
    !theme || persistThemeRef.current.submit({ theme }, { action: "action/set-theme", method: "post" });
  }, [theme]), (0, import_react4.useEffect)(() => {
    let mediaQuery = window.matchMedia(prefersDarkMQ), handleChange = () => {
      setTheme(mediaQuery.matches ? "dark" /* DARK */ : "light" /* LIGHT */);
    };
    return mediaQuery.addEventListener("change", handleChange), () => mediaQuery.removeEventListener("change", handleChange);
  }, []), /* @__PURE__ */ React.createElement(ThemeContext.Provider, {
    value: [theme, setTheme]
  }, children);
}
var clientThemeCode = `
// hi there dear reader \u{1F44B}
// this is how I make certain we avoid a flash of the wrong theme. If you select
// a theme, then I'll know what you want in the future and you'll not see this
// script anymore.
;(() => {
  const theme = window.matchMedia(${JSON.stringify(prefersDarkMQ)}).matches
    ? 'dark'
    : 'light';
  const cl = document.documentElement.classList;
  const themeAlreadyApplied = cl.contains('light') || cl.contains('dark');
  if (themeAlreadyApplied) {
    // this script shouldn't exist if the theme is already applied!
    console.warn(
      "Hi there, could you let me know you're seeing this message? Thanks!",
    );
  } else {
    cl.add(theme);
  }
  const meta = document.querySelector('meta[name=color-scheme]');
  if (meta) {
    if (theme === 'dark') {
      meta.content = 'dark light';
    } else if (theme === 'light') {
      meta.content = 'light dark';
    }
  } else {
    console.warn(
      "Hey, could you let me know you're seeing this message? Thanks!",
    );
  }
})();
`, themeStylesCode = `
  /* default light, but app-preference is "dark" */
  html.dark {
    light-mode {
      display: none;
    }
  }

  /* default light, and no app-preference */
  html:not(.dark) {
    dark-mode {
      display: none;
    }
  }

  @media (prefers-color-scheme: dark) {
    /* prefers dark, but app-preference is "light" */
    html.light {
      dark-mode {
        display: none;
      }
    }

    /* prefers dark, and app-preference is "dark" */
    html.dark,
    /* prefers dark and no app-preference */
    html:not(.light) {
      light-mode {
        display: none;
      }
    }
  }
`;
function ThemeHead({ ssrTheme }) {
  let [theme] = useTheme();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("meta", {
    name: "color-scheme",
    content: theme === "light" ? "light dark" : "dark light"
  }), ssrTheme ? null : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("script", {
    dangerouslySetInnerHTML: { __html: clientThemeCode }
  }), /* @__PURE__ */ React.createElement("style", {
    dangerouslySetInnerHTML: { __html: themeStylesCode }
  })));
}
var clientDarkAndLightModeElsCode = `;(() => {
  const theme = window.matchMedia(${JSON.stringify(prefersDarkMQ)}).matches
    ? 'dark'
    : 'light';
  const darkEls = document.querySelectorAll("dark-mode");
  const lightEls = document.querySelectorAll("light-mode");
  for (const darkEl of darkEls) {
    if (theme === "dark") {
      for (const child of darkEl.childNodes) {
        darkEl.parentElement?.append(child);
      }
    }
    darkEl.remove();
  }
  for (const lightEl of lightEls) {
    if (theme === "light") {
      for (const child of lightEl.childNodes) {
        lightEl.parentElement?.append(child);
      }
    }
    lightEl.remove();
  }
})();`;
function ThemeBody({ ssrTheme }) {
  return ssrTheme ? null : /* @__PURE__ */ React.createElement("script", {
    dangerouslySetInnerHTML: { __html: clientDarkAndLightModeElsCode }
  });
}
function useTheme() {
  let context = (0, import_react4.useContext)(ThemeContext);
  if (context === void 0)
    throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}
function isTheme(value) {
  return typeof value == "string" && themes.includes(value);
}

// app/components/VisuallyHidden/visually-hidden.css
var visually_hidden_default = "/build/_assets/visually-hidden-FKVXTILO.css";

// app/components/VisuallyHidden/VisuallyHidden.tsx
var links3 = () => [{ rel: "stylesheet", href: visually_hidden_default }];
function VisuallyHidden({ children }) {
  return /* @__PURE__ */ React.createElement("span", {
    className: "visually-hidden"
  }, children);
}

// app/components/Button/Button.tsx
var import_react5 = require("@remix-run/react"), import_clsx3 = __toESM(require("clsx"));

// app/components/Button/button.css
var button_default = "/build/_assets/button-3DFMRMMR.css";

// app/components/Button/Button.tsx
var links4 = () => [{ rel: "stylesheet", href: button_default }];
function Button(props) {
  if (props.as === "unstyled") {
    let _a = props, { className, children } = _a, rest = __objRest(_a, ["className", "children"]);
    return /* @__PURE__ */ React.createElement("button", __spreadValues({
      className: (0, import_clsx3.default)("unstyled", "click-target-helper", className)
    }, rest), children);
  }
  let { size, variant, mood } = props, allClassNames = (0, import_clsx3.default)("btn", "click-target-helper", size, variant, mood && mood);
  if (props.as === "link") {
    let _b = props, { className } = _b, rest = __objRest(_b, ["className"]);
    return /* @__PURE__ */ React.createElement(import_react5.Link, __spreadValues({
      className: (0, import_clsx3.default)(allClassNames, className)
    }, rest), props.children);
  } else if (props.as === "externalLink") {
    let _c = props, { className } = _c, rest = __objRest(_c, ["className"]);
    return /* @__PURE__ */ React.createElement("a", __spreadValues({
      className: (0, import_clsx3.default)(allClassNames, className),
      target: "_blank",
      rel: "noopener noreferrer"
    }, rest), props.children);
  } else {
    let _d = props, { className } = _d, rest = __objRest(_d, ["className"]);
    return /* @__PURE__ */ React.createElement("button", __spreadValues({
      className: (0, import_clsx3.default)(allClassNames, className)
    }, rest), props.children);
  }
}

// app/components/ThemeToggle/ThemeToggle.tsx
var links5 = () => [...links4()];
function ThemeToggle() {
  let [theme, setTheme] = useTheme();
  return /* @__PURE__ */ React.createElement(Button, {
    as: "unstyled",
    onClick: () => {
      setTheme((prevTheme) => prevTheme === "light" /* LIGHT */ ? "dark" /* DARK */ : "light" /* LIGHT */);
    },
    className: "theme-toggle-button"
  }, /* @__PURE__ */ React.createElement("span", null, theme === "light" /* LIGHT */ ? /* @__PURE__ */ React.createElement(import_react_feather.Sun, null) : /* @__PURE__ */ React.createElement(import_react_feather.Moon, null)), /* @__PURE__ */ React.createElement(VisuallyHidden, null, "Toggle light and dark mode"));
}

// app/components/MaxWidthContainer/max-width-container.css
var max_width_container_default = "/build/_assets/max-width-container-CQIPGCG2.css";

// app/components/MaxWidthContainer/MaxWidthContainer.tsx
var links6 = () => [{ rel: "stylesheet", href: max_width_container_default }];
function MaxWidthContainer(_a) {
  var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
  return /* @__PURE__ */ React.createElement("div", __spreadValues({
    className: "max-width-container"
  }, rest), children);
}

// app/components/Header/header.css
var header_default = "/build/_assets/header-4WBKUPIF.css";

// app/components/Header/Header.tsx
var links7 = () => [
  ...links(),
  ...links2(),
  ...links5(),
  ...links3(),
  ...links6(),
  { rel: "stylesheet", href: header_default }
];
function Header() {
  return /* @__PURE__ */ React.createElement("header", {
    className: "header"
  }, /* @__PURE__ */ React.createElement(MaxWidthContainer, null, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/",
    className: "logo-container"
  }, /* @__PURE__ */ React.createElement(Logo, null), /* @__PURE__ */ React.createElement("span", {
    className: "wordmark"
  }, "Tom Hendra"), /* @__PURE__ */ React.createElement(VisuallyHidden, null, "Tom Hendra logo - Home")), /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/",
    size: "lg",
    variant: "white"
  }, "Articles")), /* @__PURE__ */ React.createElement(ThemeToggle, null))));
}

// app/components/Divider/Divider.tsx
var import_clsx4 = __toESM(require("clsx"));

// app/components/Divider/divider.css
var divider_default = "/build/_assets/divider-FTEF456Z.css";

// app/components/Divider/Divider.tsx
var links8 = () => [
  ...links6(),
  { rel: "stylesheet", href: divider_default }
];
function Divider({ variant = "grey" }) {
  return /* @__PURE__ */ React.createElement(MaxWidthContainer, null, /* @__PURE__ */ React.createElement("div", {
    className: (0, import_clsx4.default)("divider", variant)
  }));
}

// app/components/Footer/footer.css
var footer_default = "/build/_assets/footer-MHQCK6ZJ.css";

// app/components/Footer/Footer.tsx
var links9 = () => [
  ...links2(),
  ...links3(),
  ...links8(),
  ...links(),
  { rel: "stylesheet", href: footer_default }
];
function Footer() {
  return /* @__PURE__ */ React.createElement("footer", {
    className: "footer"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "footer-container"
  }, /* @__PURE__ */ React.createElement(MaxWidthContainer, null, /* @__PURE__ */ React.createElement("div", {
    className: "nav-container"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/",
    className: "logo-container"
  }, /* @__PURE__ */ React.createElement(Logo, null), /* @__PURE__ */ React.createElement("span", {
    className: "wordmark"
  }, "Tom Hendra"), /* @__PURE__ */ React.createElement(VisuallyHidden, null, "Tom Hendra logo - Home")), /* @__PURE__ */ React.createElement("nav", {
    className: "footer-nav"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/",
    size: "md",
    variant: "primary-alt"
  }, "Articles")))), /* @__PURE__ */ React.createElement(Divider, {
    variant: "primary"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "copyright"
  }, "\xA9 ", new Date().getFullYear(), " Tom Hendra")));
}

// app/components/MobileMenu/MobileMenu.tsx
var import_react6 = __toESM(require("react")), import_dialog = require("@reach/dialog");
var import_react_feather2 = require("react-feather");
var import_framer_motion = require("framer-motion");

// app/components/MobileMenu/mobile-menu.css
var mobile_menu_default = "/build/_assets/mobile-menu-3QTB2JUP.css";

// app/components/MobileMenu/MobileMenu.tsx
var links10 = () => [
  ...links(),
  ...links3(),
  { rel: "stylesheet", href: mobile_menu_default }
];
function MobileMenu() {
  let [isOpen, setIsOpen] = import_react6.default.useState(!1), close = () => setIsOpen(!1), open = () => setIsOpen(!0), MotionDialogOverlay = (0, import_framer_motion.motion)(import_dialog.DialogOverlay), MotionDialogContent = (0, import_framer_motion.motion)(import_dialog.DialogContent);
  return /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null, !isOpen && /* @__PURE__ */ import_react6.default.createElement("button", {
    className: "mobile-menu-button click-target-helper",
    onClick: open
  }, /* @__PURE__ */ import_react6.default.createElement(VisuallyHidden, null, "Open the mobile menu"), /* @__PURE__ */ import_react6.default.createElement(import_react_feather2.Menu, {
    "aria-hidden": !0
  })), /* @__PURE__ */ import_react6.default.createElement(import_framer_motion.AnimatePresence, null, isOpen && /* @__PURE__ */ import_react6.default.createElement(MotionDialogOverlay, {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    isOpen,
    onDismiss: close,
    "aria-labelledby": "mobile-menu-title",
    "aria-describedby": "mobile-menu-description"
  }, /* @__PURE__ */ import_react6.default.createElement(MotionDialogContent, {
    initial: { x: "-100%" },
    animate: { x: "0%" },
    exit: { x: "-100%" },
    transition: { min: 0, max: 100, bounceDamping: 9 },
    "aria-label": "Mobile menu"
  }, /* @__PURE__ */ import_react6.default.createElement(VisuallyHidden, null, /* @__PURE__ */ import_react6.default.createElement("h2", {
    id: "mobile-menu-title"
  }, "Mobile Menu"), /* @__PURE__ */ import_react6.default.createElement("p", {
    id: "mobile-menu-description"
  }, "Navigate to another part of the website.")), /* @__PURE__ */ import_react6.default.createElement("nav", {
    className: "mobile-menu-nav"
  }, /* @__PURE__ */ import_react6.default.createElement(Link, {
    variant: "gray",
    size: "lg",
    to: "/",
    onClick: close
  }, "Home"), /* @__PURE__ */ import_react6.default.createElement(Link, {
    variant: "gray",
    size: "lg",
    to: "/#projects",
    onClick: close
  }, "Projects"), /* @__PURE__ */ import_react6.default.createElement(Link, {
    variant: "gray",
    size: "lg",
    to: "/#about",
    onClick: close
  }, "About"), /* @__PURE__ */ import_react6.default.createElement(Link, {
    variant: "gray",
    size: "lg",
    to: "/#contact",
    onClick: close
  }, "Contact"))), /* @__PURE__ */ import_react6.default.createElement(import_framer_motion.motion.button, {
    className: "mobile-menu-button click-target-helper",
    onClick: close
  }, /* @__PURE__ */ import_react6.default.createElement(import_react_feather2.X, null), /* @__PURE__ */ import_react6.default.createElement(VisuallyHidden, null, "Close the mobile menu")))));
}

// app/components/Layout/layout.css
var layout_default = "/build/_assets/layout-AMRU6AP4.css";

// app/components/Layout/Layout.tsx
var links11 = () => [
  ...links7(),
  ...links9(),
  ...links10(),
  { rel: "stylesheet", href: layout_default }
];
function Layout() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "layout-container"
  }, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement(MobileMenu, null), /* @__PURE__ */ React.createElement(import_react7.Outlet, null), /* @__PURE__ */ React.createElement(Footer, null));
}

// app/helpers/seo.ts
var import_remix_seo = require("remix-seo"), { getSeo, getSeoMeta, getSeoLinks } = (0, import_remix_seo.initSeo)({
  title: "Hello",
  titleTemplate: "%s | Tom Hendra",
  description: "Frontend developer building for the web.",
  openGraph: {
    siteName: "Tom Hendra's personal website",
    title: "Tom Hendra",
    description: "Frontend developer building for the web.",
    type: "website",
    url: "https://tomhendra.com",
    images: [
      {
        url: "https://res.cloudinary.com/tomhendra/image/upload/v1657112058/personal-site/open-graph-card.png",
        secureUrl: "https://res.cloudinary.com/tomhendra/image/upload/v1657112058/personal-site/open-graph-card.png",
        alt: "Stylised cute robot logo with an introduction: Tom Hendra, Frontend developer, @tomhendra and tomhendra.com",
        height: 1280,
        width: 2560,
        type: "image/png"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@tomhendra",
    title: "Tom Hendra",
    description: "Frontend developer building for the web."
  }
});

// app/utils.ts
function setScrollbarWidthAsCustomProperty() {
  let viewportWidth = window.innerWidth, viewportWidthWithoutScrollbar = document.documentElement.clientWidth, scrollbarWidth = viewportWidth - viewportWidthWithoutScrollbar;
  document.documentElement.style.setProperty("--scrollbar-width", scrollbarWidth + "px");
}

// app/helpers/theme.server.ts
var import_cloudflare = require("@remix-run/cloudflare");
var sessionSecret = "DEFAULT_SECRET", themeStorage = (0, import_cloudflare.createCookieSessionStorage)({
  cookie: {
    name: "tomhendra_website_theme",
    secure: !0,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    httpOnly: !0
  }
});
async function getThemeSession(request) {
  let session = await themeStorage.getSession(request.headers.get("Cookie"));
  return {
    getTheme: () => {
      let themeValue = session.get("theme");
      return isTheme(themeValue) ? themeValue : null;
    },
    setTheme: (theme) => session.set("theme", theme),
    commit: () => themeStorage.commitSession(session)
  };
}

// app/styles/shared/animations.css
var animations_default = "/build/_assets/animations-7F3J3IND.css";

// app/styles/shared/colors.css
var colors_default = "/build/_assets/colors-GL2WGDTF.css";

// app/styles/shared/effects.css
var effects_default = "/build/_assets/effects-7OSNJJY3.css";

// app/styles/shared/global.css
var global_default = "/build/_assets/global-6Y2RYAVM.css";

// app/styles/shared/reset.css
var reset_default = "/build/_assets/reset-7GJ5X367.css";

// app/styles/shared/sizes.css
var sizes_default = "/build/_assets/sizes-J22E4SHV.css";

// app/styles/shared/typography.css
var typography_default = "/build/_assets/typography-A7AJ4ENR.css";

// app/styles/shared/utils.css
var utils_default = "/build/_assets/utils-W3I4FUHU.css";

// app/root.tsx
var loader = async ({ request }) => ({
  theme: (await getThemeSession(request)).getTheme()
}), [seoMeta, seoLinks] = getSeo(), meta = () => __spreadProps(__spreadValues({}, seoMeta), {
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
  themeColorDark: {
    name: "theme-color",
    content: "hsl(220deg 55% 8% / 100%)",
    media: "(prefers-color-scheme: dark)"
  },
  themeColorLight: {
    name: "theme-color",
    content: "hsl(0deg 0% 100% / 100%)",
    media: "(prefers-color-scheme: light)"
  }
}), links12 = () => [
  ...seoLinks,
  {
    rel: "icon",
    href: "/images/favicon-light-mode.svg",
    type: "image/svg+xml",
    media: "(prefers-color-scheme: light)"
  },
  {
    rel: "icon",
    href: "/images/favicon-dark-mode.svg",
    type: "image/svg+xml",
    media: "(prefers-color-scheme: dark)"
  },
  {
    rel: "icon",
    href: "/images/favicon.svg",
    type: "image/svg+xml"
  },
  {
    rel: "icon",
    href: "/images/favicon.ico",
    sizes: "any"
  },
  { rel: "stylesheet", href: reset_default },
  { rel: "stylesheet", href: typography_default },
  { rel: "stylesheet", href: sizes_default },
  { rel: "stylesheet", href: colors_default },
  { rel: "stylesheet", href: global_default },
  { rel: "stylesheet", href: effects_default },
  { rel: "stylesheet", href: animations_default },
  { rel: "stylesheet", href: utils_default },
  ...links11()
];
function App() {
  import_react9.default.useEffect(() => {
    setScrollbarWidthAsCustomProperty();
  }, []);
  let data = (0, import_react8.useLoaderData)(), [theme] = useTheme();
  return /* @__PURE__ */ import_react9.default.createElement("html", {
    lang: "en",
    className: (0, import_clsx5.default)(theme)
  }, /* @__PURE__ */ import_react9.default.createElement("head", null, /* @__PURE__ */ import_react9.default.createElement(import_react8.Meta, null), /* @__PURE__ */ import_react9.default.createElement(import_react8.Links, null), /* @__PURE__ */ import_react9.default.createElement(ThemeHead, {
    ssrTheme: Boolean(data.theme)
  })), /* @__PURE__ */ import_react9.default.createElement("body", null, /* @__PURE__ */ import_react9.default.createElement(Layout, null), /* @__PURE__ */ import_react9.default.createElement(ThemeBody, {
    ssrTheme: Boolean(data.theme)
  }), /* @__PURE__ */ import_react9.default.createElement(import_react8.ScrollRestoration, null), /* @__PURE__ */ import_react9.default.createElement(import_react8.Scripts, null), /* @__PURE__ */ import_react9.default.createElement(import_react8.LiveReload, null)));
}
function AppWithProviders() {
  let data = (0, import_react8.useLoaderData)();
  return /* @__PURE__ */ import_react9.default.createElement(ThemeProvider, {
    specifiedTheme: data.theme
  }, /* @__PURE__ */ import_react9.default.createElement(App, null));
}

// app/routes/action/set-theme.tsx
var set_theme_exports = {};
__export(set_theme_exports, {
  action: () => action,
  loader: () => loader2
});
var import_cloudflare2 = require("@remix-run/cloudflare");
var action = async ({ request }) => {
  let themeSession = await getThemeSession(request), requestText = await request.text(), theme = new URLSearchParams(requestText).get("theme");
  return isTheme(theme) ? (themeSession.setTheme(theme), (0, import_cloudflare2.json)({ success: !0 }, { headers: { "Set-Cookie": await themeSession.commit() } })) : (0, import_cloudflare2.json)({
    success: !1,
    message: `theme value of ${theme} is not a valid theme`
  });
}, loader2 = () => (0, import_cloudflare2.redirect)("/", { status: 404 });

// app/routes/articles/$slug.tsx
var slug_exports = {};
__export(slug_exports, {
  default: () => Article,
  links: () => links13,
  loader: () => loader3
});
var import_react12 = require("@remix-run/react");

// app/helpers/github-md.server.ts
var repo = "https://github-md.com/tomhendra/blog-content/main";
async function getMarkdownPaths() {
  let response = await fetch(repo);
  if (!response.ok || response.status !== 200) {
    if (response.status === 404)
      return;
    throw Error(`Fetching Markdown file paths from GitHub failed with ${response.status}: ${response.statusText}`);
  }
  return response.json();
}
async function getMarkdownFile(path) {
  let response = await fetch(repo + "/" + path);
  if (!response.ok || response.status !== 200) {
    if (response.status === 404)
      return;
    throw Error(`Fetching Markdown file from GitHub failed with ${response.status}: ${response.statusText}`);
  }
  return response.json();
}
async function getAllMarkdownFiles() {
  let paths = await getMarkdownPaths(), posts = paths == null ? void 0 : paths.files.map(async (file) => {
    let { path, sha } = file, slug = path.substring(0, path.lastIndexOf(".")), markdown = await getMarkdownFile(path);
    return {
      attributes: __spreadValues({
        sha,
        slug
      }, markdown == null ? void 0 : markdown.attributes),
      html: markdown == null ? void 0 : markdown.html
    };
  });
  if (posts)
    return Promise.all(posts);
}
async function getAllMarkdownAttributes() {
  let posts = await getAllMarkdownFiles();
  return posts == null ? void 0 : posts.map((post) => post == null ? void 0 : post.attributes);
}

// node_modules/.pnpm/react-markdown@8.0.3_skqlhrap4das3cz5b6iqdn2lqi/node_modules/react-markdown/lib/uri-transformer.js
var protocols = ["http", "https", "mailto", "tel"];
function uriTransformer(uri) {
  let url = (uri || "").trim(), first = url.charAt(0);
  if (first === "#" || first === "/")
    return url;
  let colon = url.indexOf(":");
  if (colon === -1)
    return url;
  let index2 = -1;
  for (; ++index2 < protocols.length; ) {
    let protocol = protocols[index2];
    if (colon === protocol.length && url.slice(0, protocol.length).toLowerCase() === protocol)
      return url;
  }
  return index2 = url.indexOf("?"), index2 !== -1 && colon > index2 || (index2 = url.indexOf("#"), index2 !== -1 && colon > index2) ? url : "javascript:void(0)";
}

// node_modules/.pnpm/react-markdown@8.0.3_skqlhrap4das3cz5b6iqdn2lqi/node_modules/react-markdown/lib/react-markdown.js
var import_react11 = __toESM(require("react"), 1);

// node_modules/.pnpm/vfile@5.3.4/node_modules/vfile/lib/index.js
var import_is_buffer = __toESM(require("is-buffer"), 1);

// node_modules/.pnpm/unist-util-stringify-position@3.0.2/node_modules/unist-util-stringify-position/index.js
function stringifyPosition(value) {
  return !value || typeof value != "object" ? "" : "position" in value || "type" in value ? position(value.position) : "start" in value || "end" in value ? position(value) : "line" in value || "column" in value ? point(value) : "";
}
function point(point3) {
  return index(point3 && point3.line) + ":" + index(point3 && point3.column);
}
function position(pos) {
  return point(pos && pos.start) + "-" + point(pos && pos.end);
}
function index(value) {
  return value && typeof value == "number" ? value : 1;
}

// node_modules/.pnpm/vfile-message@3.1.2/node_modules/vfile-message/index.js
var VFileMessage = class extends Error {
  constructor(reason, place, origin) {
    let parts = [null, null], position2 = {
      start: { line: null, column: null },
      end: { line: null, column: null }
    };
    super();
    if (typeof place == "string" && (origin = place, place = void 0), typeof origin == "string") {
      let index2 = origin.indexOf(":");
      index2 === -1 ? parts[1] = origin : (parts[0] = origin.slice(0, index2), parts[1] = origin.slice(index2 + 1));
    }
    place && ("type" in place || "position" in place ? place.position && (position2 = place.position) : "start" in place || "end" in place ? position2 = place : ("line" in place || "column" in place) && (position2.start = place)), this.name = stringifyPosition(place) || "1:1", this.message = typeof reason == "object" ? reason.message : reason, this.stack = typeof reason == "object" ? reason.stack : "", this.reason = this.message, this.fatal, this.line = position2.start.line, this.column = position2.start.column, this.source = parts[0], this.ruleId = parts[1], this.position = position2, this.actual, this.expected, this.file, this.url, this.note;
  }
};
VFileMessage.prototype.file = "";
VFileMessage.prototype.name = "";
VFileMessage.prototype.reason = "";
VFileMessage.prototype.message = "";
VFileMessage.prototype.stack = "";
VFileMessage.prototype.fatal = null;
VFileMessage.prototype.column = null;
VFileMessage.prototype.line = null;
VFileMessage.prototype.source = null;
VFileMessage.prototype.ruleId = null;
VFileMessage.prototype.position = null;

// node_modules/.pnpm/vfile@5.3.4/node_modules/vfile/lib/minpath.js
var import_path = __toESM(require("path"), 1);

// node_modules/.pnpm/vfile@5.3.4/node_modules/vfile/lib/minproc.js
var import_process = __toESM(require("process"), 1);

// node_modules/.pnpm/vfile@5.3.4/node_modules/vfile/lib/minurl.js
var import_url = require("url");

// node_modules/.pnpm/vfile@5.3.4/node_modules/vfile/lib/minurl.shared.js
function isUrl(fileURLOrPath) {
  return fileURLOrPath !== null && typeof fileURLOrPath == "object" && fileURLOrPath.href && fileURLOrPath.origin;
}

// node_modules/.pnpm/vfile@5.3.4/node_modules/vfile/lib/index.js
var order = ["history", "path", "basename", "stem", "extname", "dirname"], VFile = class {
  constructor(value) {
    let options;
    value ? typeof value == "string" || (0, import_is_buffer.default)(value) ? options = { value } : isUrl(value) ? options = { path: value } : options = value : options = {}, this.data = {}, this.messages = [], this.history = [], this.cwd = import_process.default.cwd(), this.value, this.stored, this.result, this.map;
    let index2 = -1;
    for (; ++index2 < order.length; ) {
      let prop2 = order[index2];
      prop2 in options && options[prop2] !== void 0 && (this[prop2] = prop2 === "history" ? [...options[prop2]] : options[prop2]);
    }
    let prop;
    for (prop in options)
      order.includes(prop) || (this[prop] = options[prop]);
  }
  get path() {
    return this.history[this.history.length - 1];
  }
  set path(path) {
    isUrl(path) && (path = (0, import_url.fileURLToPath)(path)), assertNonEmpty(path, "path"), this.path !== path && this.history.push(path);
  }
  get dirname() {
    return typeof this.path == "string" ? import_path.default.dirname(this.path) : void 0;
  }
  set dirname(dirname) {
    assertPath(this.basename, "dirname"), this.path = import_path.default.join(dirname || "", this.basename);
  }
  get basename() {
    return typeof this.path == "string" ? import_path.default.basename(this.path) : void 0;
  }
  set basename(basename) {
    assertNonEmpty(basename, "basename"), assertPart(basename, "basename"), this.path = import_path.default.join(this.dirname || "", basename);
  }
  get extname() {
    return typeof this.path == "string" ? import_path.default.extname(this.path) : void 0;
  }
  set extname(extname) {
    if (assertPart(extname, "extname"), assertPath(this.dirname, "extname"), extname) {
      if (extname.charCodeAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (extname.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = import_path.default.join(this.dirname, this.stem + (extname || ""));
  }
  get stem() {
    return typeof this.path == "string" ? import_path.default.basename(this.path, this.extname) : void 0;
  }
  set stem(stem) {
    assertNonEmpty(stem, "stem"), assertPart(stem, "stem"), this.path = import_path.default.join(this.dirname || "", stem + (this.extname || ""));
  }
  toString(encoding) {
    return (this.value || "").toString(encoding);
  }
  message(reason, place, origin) {
    let message = new VFileMessage(reason, place, origin);
    return this.path && (message.name = this.path + ":" + message.name, message.file = this.path), message.fatal = !1, this.messages.push(message), message;
  }
  info(reason, place, origin) {
    let message = this.message(reason, place, origin);
    return message.fatal = null, message;
  }
  fail(reason, place, origin) {
    let message = this.message(reason, place, origin);
    throw message.fatal = !0, message;
  }
};
function assertPart(part, name) {
  if (part && part.includes(import_path.default.sep))
    throw new Error("`" + name + "` cannot be a path: did not expect `" + import_path.default.sep + "`");
}
function assertNonEmpty(part, name) {
  if (!part)
    throw new Error("`" + name + "` cannot be empty");
}
function assertPath(path, name) {
  if (!path)
    throw new Error("Setting `" + name + "` requires `path` to be set too");
}

// node_modules/.pnpm/bail@2.0.2/node_modules/bail/index.js
function bail(error) {
  if (error)
    throw error;
}

// node_modules/.pnpm/unified@10.1.2/node_modules/unified/lib/index.js
var import_is_buffer2 = __toESM(require("is-buffer"), 1), import_extend = __toESM(require("extend"), 1), import_is_plain_obj = __toESM(require("is-plain-obj"), 1);

// node_modules/.pnpm/trough@2.1.0/node_modules/trough/index.js
function trough() {
  let fns = [], pipeline = { run, use };
  return pipeline;
  function run(...values) {
    let middlewareIndex = -1, callback = values.pop();
    if (typeof callback != "function")
      throw new TypeError("Expected function as last argument, not " + callback);
    next(null, ...values);
    function next(error, ...output) {
      let fn = fns[++middlewareIndex], index2 = -1;
      if (error) {
        callback(error);
        return;
      }
      for (; ++index2 < values.length; )
        (output[index2] === null || output[index2] === void 0) && (output[index2] = values[index2]);
      values = output, fn ? wrap(fn, next)(...output) : callback(null, ...output);
    }
  }
  function use(middelware) {
    if (typeof middelware != "function")
      throw new TypeError("Expected `middelware` to be a function, not " + middelware);
    return fns.push(middelware), pipeline;
  }
}
function wrap(middleware, callback) {
  let called;
  return wrapped;
  function wrapped(...parameters) {
    let fnExpectsCallback = middleware.length > parameters.length, result;
    fnExpectsCallback && parameters.push(done);
    try {
      result = middleware.apply(this, parameters);
    } catch (error) {
      let exception = error;
      if (fnExpectsCallback && called)
        throw exception;
      return done(exception);
    }
    fnExpectsCallback || (result instanceof Promise ? result.then(then, done) : result instanceof Error ? done(result) : then(result));
  }
  function done(error, ...output) {
    called || (called = !0, callback(error, ...output));
  }
  function then(value) {
    done(null, value);
  }
}

// node_modules/.pnpm/unified@10.1.2/node_modules/unified/lib/index.js
var unified = base().freeze(), own = {}.hasOwnProperty;
function base() {
  let transformers = trough(), attachers = [], namespace = {}, frozen, freezeIndex = -1;
  return processor.data = data, processor.Parser = void 0, processor.Compiler = void 0, processor.freeze = freeze, processor.attachers = attachers, processor.use = use, processor.parse = parse2, processor.stringify = stringify3, processor.run = run, processor.runSync = runSync, processor.process = process2, processor.processSync = processSync, processor;
  function processor() {
    let destination = base(), index2 = -1;
    for (; ++index2 < attachers.length; )
      destination.use(...attachers[index2]);
    return destination.data((0, import_extend.default)(!0, {}, namespace)), destination;
  }
  function data(key, value) {
    return typeof key == "string" ? arguments.length === 2 ? (assertUnfrozen("data", frozen), namespace[key] = value, processor) : own.call(namespace, key) && namespace[key] || null : key ? (assertUnfrozen("data", frozen), namespace = key, processor) : namespace;
  }
  function freeze() {
    if (frozen)
      return processor;
    for (; ++freezeIndex < attachers.length; ) {
      let [attacher, ...options] = attachers[freezeIndex];
      if (options[0] === !1)
        continue;
      options[0] === !0 && (options[0] = void 0);
      let transformer = attacher.call(processor, ...options);
      typeof transformer == "function" && transformers.use(transformer);
    }
    return frozen = !0, freezeIndex = Number.POSITIVE_INFINITY, processor;
  }
  function use(value, ...options) {
    let settings;
    if (assertUnfrozen("use", frozen), value != null)
      if (typeof value == "function")
        addPlugin(value, ...options);
      else if (typeof value == "object")
        Array.isArray(value) ? addList(value) : addPreset(value);
      else
        throw new TypeError("Expected usable value, not `" + value + "`");
    return settings && (namespace.settings = Object.assign(namespace.settings || {}, settings)), processor;
    function add(value2) {
      if (typeof value2 == "function")
        addPlugin(value2);
      else if (typeof value2 == "object")
        if (Array.isArray(value2)) {
          let [plugin, ...options2] = value2;
          addPlugin(plugin, ...options2);
        } else
          addPreset(value2);
      else
        throw new TypeError("Expected usable value, not `" + value2 + "`");
    }
    function addPreset(result) {
      addList(result.plugins), result.settings && (settings = Object.assign(settings || {}, result.settings));
    }
    function addList(plugins) {
      let index2 = -1;
      if (plugins != null)
        if (Array.isArray(plugins))
          for (; ++index2 < plugins.length; ) {
            let thing = plugins[index2];
            add(thing);
          }
        else
          throw new TypeError("Expected a list of plugins, not `" + plugins + "`");
    }
    function addPlugin(plugin, value2) {
      let index2 = -1, entry2;
      for (; ++index2 < attachers.length; )
        if (attachers[index2][0] === plugin) {
          entry2 = attachers[index2];
          break;
        }
      entry2 ? ((0, import_is_plain_obj.default)(entry2[1]) && (0, import_is_plain_obj.default)(value2) && (value2 = (0, import_extend.default)(!0, entry2[1], value2)), entry2[1] = value2) : attachers.push([...arguments]);
    }
  }
  function parse2(doc) {
    processor.freeze();
    let file = vfile(doc), Parser = processor.Parser;
    return assertParser("parse", Parser), newable(Parser, "parse") ? new Parser(String(file), file).parse() : Parser(String(file), file);
  }
  function stringify3(node, doc) {
    processor.freeze();
    let file = vfile(doc), Compiler = processor.Compiler;
    return assertCompiler("stringify", Compiler), assertNode(node), newable(Compiler, "compile") ? new Compiler(node, file).compile() : Compiler(node, file);
  }
  function run(node, doc, callback) {
    if (assertNode(node), processor.freeze(), !callback && typeof doc == "function" && (callback = doc, doc = void 0), !callback)
      return new Promise(executor);
    executor(null, callback);
    function executor(resolve, reject) {
      transformers.run(node, vfile(doc), done);
      function done(error, tree, file) {
        tree = tree || node, error ? reject(error) : resolve ? resolve(tree) : callback(null, tree, file);
      }
    }
  }
  function runSync(node, file) {
    let result, complete;
    return processor.run(node, file, done), assertDone("runSync", "run", complete), result;
    function done(error, tree) {
      bail(error), result = tree, complete = !0;
    }
  }
  function process2(doc, callback) {
    if (processor.freeze(), assertParser("process", processor.Parser), assertCompiler("process", processor.Compiler), !callback)
      return new Promise(executor);
    executor(null, callback);
    function executor(resolve, reject) {
      let file = vfile(doc);
      processor.run(processor.parse(file), file, (error, tree, file2) => {
        if (error || !tree || !file2)
          done(error);
        else {
          let result = processor.stringify(tree, file2);
          result == null || (looksLikeAVFileValue(result) ? file2.value = result : file2.result = result), done(error, file2);
        }
      });
      function done(error, file2) {
        error || !file2 ? reject(error) : resolve ? resolve(file2) : callback(null, file2);
      }
    }
  }
  function processSync(doc) {
    let complete;
    processor.freeze(), assertParser("processSync", processor.Parser), assertCompiler("processSync", processor.Compiler);
    let file = vfile(doc);
    return processor.process(file, done), assertDone("processSync", "process", complete), file;
    function done(error) {
      complete = !0, bail(error);
    }
  }
}
function newable(value, name) {
  return typeof value == "function" && value.prototype && (keys(value.prototype) || name in value.prototype);
}
function keys(value) {
  let key;
  for (key in value)
    if (own.call(value, key))
      return !0;
  return !1;
}
function assertParser(name, value) {
  if (typeof value != "function")
    throw new TypeError("Cannot `" + name + "` without `Parser`");
}
function assertCompiler(name, value) {
  if (typeof value != "function")
    throw new TypeError("Cannot `" + name + "` without `Compiler`");
}
function assertUnfrozen(name, frozen) {
  if (frozen)
    throw new Error("Cannot call `" + name + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.");
}
function assertNode(node) {
  if (!(0, import_is_plain_obj.default)(node) || typeof node.type != "string")
    throw new TypeError("Expected node, got `" + node + "`");
}
function assertDone(name, asyncName, complete) {
  if (!complete)
    throw new Error("`" + name + "` finished async. Use `" + asyncName + "` instead");
}
function vfile(value) {
  return looksLikeAVFile(value) ? value : new VFile(value);
}
function looksLikeAVFile(value) {
  return Boolean(value && typeof value == "object" && "message" in value && "messages" in value);
}
function looksLikeAVFileValue(value) {
  return typeof value == "string" || (0, import_is_buffer2.default)(value);
}

// node_modules/.pnpm/mdast-util-to-string@3.1.0/node_modules/mdast-util-to-string/index.js
function toString(node, options) {
  var { includeImageAlt = !0 } = options || {};
  return one(node, includeImageAlt);
}
function one(node, includeImageAlt) {
  return node && typeof node == "object" && (node.value || (includeImageAlt ? node.alt : "") || "children" in node && all(node.children, includeImageAlt) || Array.isArray(node) && all(node, includeImageAlt)) || "";
}
function all(values, includeImageAlt) {
  for (var result = [], index2 = -1; ++index2 < values.length; )
    result[index2] = one(values[index2], includeImageAlt);
  return result.join("");
}

// node_modules/.pnpm/micromark-util-chunked@1.0.0/node_modules/micromark-util-chunked/index.js
function splice(list3, start, remove, items) {
  let end = list3.length, chunkStart = 0, parameters;
  if (start < 0 ? start = -start > end ? 0 : end + start : start = start > end ? end : start, remove = remove > 0 ? remove : 0, items.length < 1e4)
    parameters = Array.from(items), parameters.unshift(start, remove), [].splice.apply(list3, parameters);
  else
    for (remove && [].splice.apply(list3, [start, remove]); chunkStart < items.length; )
      parameters = items.slice(chunkStart, chunkStart + 1e4), parameters.unshift(start, 0), [].splice.apply(list3, parameters), chunkStart += 1e4, start += 1e4;
}
function push(list3, items) {
  return list3.length > 0 ? (splice(list3, list3.length, 0, items), list3) : items;
}

// node_modules/.pnpm/micromark-util-combine-extensions@1.0.0/node_modules/micromark-util-combine-extensions/index.js
var hasOwnProperty = {}.hasOwnProperty;
function combineExtensions(extensions) {
  let all3 = {}, index2 = -1;
  for (; ++index2 < extensions.length; )
    syntaxExtension(all3, extensions[index2]);
  return all3;
}
function syntaxExtension(all3, extension2) {
  let hook;
  for (hook in extension2) {
    let left = (hasOwnProperty.call(all3, hook) ? all3[hook] : void 0) || (all3[hook] = {}), right = extension2[hook], code2;
    for (code2 in right) {
      hasOwnProperty.call(left, code2) || (left[code2] = []);
      let value = right[code2];
      constructs(left[code2], Array.isArray(value) ? value : value ? [value] : []);
    }
  }
}
function constructs(existing, list3) {
  let index2 = -1, before = [];
  for (; ++index2 < list3.length; )
    (list3[index2].add === "after" ? existing : before).push(list3[index2]);
  splice(existing, 0, 0, before);
}

// node_modules/.pnpm/micromark-util-character@1.1.0/node_modules/micromark-util-character/lib/unicode-punctuation-regex.js
var unicodePunctuationRegex = /[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;

// node_modules/.pnpm/micromark-util-character@1.1.0/node_modules/micromark-util-character/index.js
var asciiAlpha = regexCheck(/[A-Za-z]/), asciiDigit = regexCheck(/\d/), asciiHexDigit = regexCheck(/[\dA-Fa-f]/), asciiAlphanumeric = regexCheck(/[\dA-Za-z]/), asciiPunctuation = regexCheck(/[!-/:-@[-`{-~]/), asciiAtext = regexCheck(/[#-'*+\--9=?A-Z^-~]/);
function asciiControl(code2) {
  return code2 !== null && (code2 < 32 || code2 === 127);
}
function markdownLineEndingOrSpace(code2) {
  return code2 !== null && (code2 < 0 || code2 === 32);
}
function markdownLineEnding(code2) {
  return code2 !== null && code2 < -2;
}
function markdownSpace(code2) {
  return code2 === -2 || code2 === -1 || code2 === 32;
}
var unicodeWhitespace = regexCheck(/\s/), unicodePunctuation = regexCheck(unicodePunctuationRegex);
function regexCheck(regex) {
  return check;
  function check(code2) {
    return code2 !== null && regex.test(String.fromCharCode(code2));
  }
}

// node_modules/.pnpm/micromark-factory-space@1.0.0/node_modules/micromark-factory-space/index.js
function factorySpace(effects, ok2, type, max) {
  let limit = max ? max - 1 : Number.POSITIVE_INFINITY, size = 0;
  return start;
  function start(code2) {
    return markdownSpace(code2) ? (effects.enter(type), prefix(code2)) : ok2(code2);
  }
  function prefix(code2) {
    return markdownSpace(code2) && size++ < limit ? (effects.consume(code2), prefix) : (effects.exit(type), ok2(code2));
  }
}

// node_modules/.pnpm/micromark@3.0.10/node_modules/micromark/lib/initialize/content.js
var content = {
  tokenize: initializeContent
};
function initializeContent(effects) {
  let contentStart = effects.attempt(this.parser.constructs.contentInitial, afterContentStartConstruct, paragraphInitial), previous2;
  return contentStart;
  function afterContentStartConstruct(code2) {
    if (code2 === null) {
      effects.consume(code2);
      return;
    }
    return effects.enter("lineEnding"), effects.consume(code2), effects.exit("lineEnding"), factorySpace(effects, contentStart, "linePrefix");
  }
  function paragraphInitial(code2) {
    return effects.enter("paragraph"), lineStart(code2);
  }
  function lineStart(code2) {
    let token = effects.enter("chunkText", {
      contentType: "text",
      previous: previous2
    });
    return previous2 && (previous2.next = token), previous2 = token, data(code2);
  }
  function data(code2) {
    if (code2 === null) {
      effects.exit("chunkText"), effects.exit("paragraph"), effects.consume(code2);
      return;
    }
    return markdownLineEnding(code2) ? (effects.consume(code2), effects.exit("chunkText"), lineStart) : (effects.consume(code2), data);
  }
}

// node_modules/.pnpm/micromark@3.0.10/node_modules/micromark/lib/initialize/document.js
var document2 = {
  tokenize: initializeDocument
}, containerConstruct = {
  tokenize: tokenizeContainer
};
function initializeDocument(effects) {
  let self = this, stack = [], continued = 0, childFlow, childToken, lineStartOffset;
  return start;
  function start(code2) {
    if (continued < stack.length) {
      let item = stack[continued];
      return self.containerState = item[1], effects.attempt(item[0].continuation, documentContinue, checkNewContainers)(code2);
    }
    return checkNewContainers(code2);
  }
  function documentContinue(code2) {
    if (continued++, self.containerState._closeFlow) {
      self.containerState._closeFlow = void 0, childFlow && closeFlow();
      let indexBeforeExits = self.events.length, indexBeforeFlow = indexBeforeExits, point3;
      for (; indexBeforeFlow--; )
        if (self.events[indexBeforeFlow][0] === "exit" && self.events[indexBeforeFlow][1].type === "chunkFlow") {
          point3 = self.events[indexBeforeFlow][1].end;
          break;
        }
      exitContainers(continued);
      let index2 = indexBeforeExits;
      for (; index2 < self.events.length; )
        self.events[index2][1].end = Object.assign({}, point3), index2++;
      return splice(self.events, indexBeforeFlow + 1, 0, self.events.slice(indexBeforeExits)), self.events.length = index2, checkNewContainers(code2);
    }
    return start(code2);
  }
  function checkNewContainers(code2) {
    if (continued === stack.length) {
      if (!childFlow)
        return documentContinued(code2);
      if (childFlow.currentConstruct && childFlow.currentConstruct.concrete)
        return flowStart(code2);
      self.interrupt = Boolean(childFlow.currentConstruct && !childFlow._gfmTableDynamicInterruptHack);
    }
    return self.containerState = {}, effects.check(containerConstruct, thereIsANewContainer, thereIsNoNewContainer)(code2);
  }
  function thereIsANewContainer(code2) {
    return childFlow && closeFlow(), exitContainers(continued), documentContinued(code2);
  }
  function thereIsNoNewContainer(code2) {
    return self.parser.lazy[self.now().line] = continued !== stack.length, lineStartOffset = self.now().offset, flowStart(code2);
  }
  function documentContinued(code2) {
    return self.containerState = {}, effects.attempt(containerConstruct, containerContinue, flowStart)(code2);
  }
  function containerContinue(code2) {
    return continued++, stack.push([self.currentConstruct, self.containerState]), documentContinued(code2);
  }
  function flowStart(code2) {
    if (code2 === null) {
      childFlow && closeFlow(), exitContainers(0), effects.consume(code2);
      return;
    }
    return childFlow = childFlow || self.parser.flow(self.now()), effects.enter("chunkFlow", {
      contentType: "flow",
      previous: childToken,
      _tokenizer: childFlow
    }), flowContinue(code2);
  }
  function flowContinue(code2) {
    if (code2 === null) {
      writeToChild(effects.exit("chunkFlow"), !0), exitContainers(0), effects.consume(code2);
      return;
    }
    return markdownLineEnding(code2) ? (effects.consume(code2), writeToChild(effects.exit("chunkFlow")), continued = 0, self.interrupt = void 0, start) : (effects.consume(code2), flowContinue);
  }
  function writeToChild(token, eof) {
    let stream = self.sliceStream(token);
    if (eof && stream.push(null), token.previous = childToken, childToken && (childToken.next = token), childToken = token, childFlow.defineSkip(token.start), childFlow.write(stream), self.parser.lazy[token.start.line]) {
      let index2 = childFlow.events.length;
      for (; index2--; )
        if (childFlow.events[index2][1].start.offset < lineStartOffset && (!childFlow.events[index2][1].end || childFlow.events[index2][1].end.offset > lineStartOffset))
          return;
      let indexBeforeExits = self.events.length, indexBeforeFlow = indexBeforeExits, seen, point3;
      for (; indexBeforeFlow--; )
        if (self.events[indexBeforeFlow][0] === "exit" && self.events[indexBeforeFlow][1].type === "chunkFlow") {
          if (seen) {
            point3 = self.events[indexBeforeFlow][1].end;
            break;
          }
          seen = !0;
        }
      for (exitContainers(continued), index2 = indexBeforeExits; index2 < self.events.length; )
        self.events[index2][1].end = Object.assign({}, point3), index2++;
      splice(self.events, indexBeforeFlow + 1, 0, self.events.slice(indexBeforeExits)), self.events.length = index2;
    }
  }
  function exitContainers(size) {
    let index2 = stack.length;
    for (; index2-- > size; ) {
      let entry2 = stack[index2];
      self.containerState = entry2[1], entry2[0].exit.call(self, effects);
    }
    stack.length = size;
  }
  function closeFlow() {
    childFlow.write([null]), childToken = void 0, childFlow = void 0, self.containerState._closeFlow = void 0;
  }
}
function tokenizeContainer(effects, ok2, nok) {
  return factorySpace(effects, effects.attempt(this.parser.constructs.document, ok2, nok), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}

// node_modules/.pnpm/micromark-util-classify-character@1.0.0/node_modules/micromark-util-classify-character/index.js
function classifyCharacter(code2) {
  if (code2 === null || markdownLineEndingOrSpace(code2) || unicodeWhitespace(code2))
    return 1;
  if (unicodePunctuation(code2))
    return 2;
}

// node_modules/.pnpm/micromark-util-resolve-all@1.0.0/node_modules/micromark-util-resolve-all/index.js
function resolveAll(constructs2, events, context) {
  let called = [], index2 = -1;
  for (; ++index2 < constructs2.length; ) {
    let resolve = constructs2[index2].resolveAll;
    resolve && !called.includes(resolve) && (events = resolve(events, context), called.push(resolve));
  }
  return events;
}

// node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/attention.js
var attention = {
  name: "attention",
  tokenize: tokenizeAttention,
  resolveAll: resolveAllAttention
};
function resolveAllAttention(events, context) {
  let index2 = -1, open, group, text4, openingSequence, closingSequence, use, nextEvents, offset;
  for (; ++index2 < events.length; )
    if (events[index2][0] === "enter" && events[index2][1].type === "attentionSequence" && events[index2][1]._close) {
      for (open = index2; open--; )
        if (events[open][0] === "exit" && events[open][1].type === "attentionSequence" && events[open][1]._open && context.sliceSerialize(events[open][1]).charCodeAt(0) === context.sliceSerialize(events[index2][1]).charCodeAt(0)) {
          if ((events[open][1]._close || events[index2][1]._open) && (events[index2][1].end.offset - events[index2][1].start.offset) % 3 && !((events[open][1].end.offset - events[open][1].start.offset + events[index2][1].end.offset - events[index2][1].start.offset) % 3))
            continue;
          use = events[open][1].end.offset - events[open][1].start.offset > 1 && events[index2][1].end.offset - events[index2][1].start.offset > 1 ? 2 : 1;
          let start = Object.assign({}, events[open][1].end), end = Object.assign({}, events[index2][1].start);
          movePoint(start, -use), movePoint(end, use), openingSequence = {
            type: use > 1 ? "strongSequence" : "emphasisSequence",
            start,
            end: Object.assign({}, events[open][1].end)
          }, closingSequence = {
            type: use > 1 ? "strongSequence" : "emphasisSequence",
            start: Object.assign({}, events[index2][1].start),
            end
          }, text4 = {
            type: use > 1 ? "strongText" : "emphasisText",
            start: Object.assign({}, events[open][1].end),
            end: Object.assign({}, events[index2][1].start)
          }, group = {
            type: use > 1 ? "strong" : "emphasis",
            start: Object.assign({}, openingSequence.start),
            end: Object.assign({}, closingSequence.end)
          }, events[open][1].end = Object.assign({}, openingSequence.start), events[index2][1].start = Object.assign({}, closingSequence.end), nextEvents = [], events[open][1].end.offset - events[open][1].start.offset && (nextEvents = push(nextEvents, [
            ["enter", events[open][1], context],
            ["exit", events[open][1], context]
          ])), nextEvents = push(nextEvents, [
            ["enter", group, context],
            ["enter", openingSequence, context],
            ["exit", openingSequence, context],
            ["enter", text4, context]
          ]), nextEvents = push(nextEvents, resolveAll(context.parser.constructs.insideSpan.null, events.slice(open + 1, index2), context)), nextEvents = push(nextEvents, [
            ["exit", text4, context],
            ["enter", closingSequence, context],
            ["exit", closingSequence, context],
            ["exit", group, context]
          ]), events[index2][1].end.offset - events[index2][1].start.offset ? (offset = 2, nextEvents = push(nextEvents, [
            ["enter", events[index2][1], context],
            ["exit", events[index2][1], context]
          ])) : offset = 0, splice(events, open - 1, index2 - open + 3, nextEvents), index2 = open + nextEvents.length - offset - 2;
          break;
        }
    }
  for (index2 = -1; ++index2 < events.length; )
    events[index2][1].type === "attentionSequence" && (events[index2][1].type = "data");
  return events;
}
function tokenizeAttention(effects, ok2) {
  let attentionMarkers2 = this.parser.constructs.attentionMarkers.null, previous2 = this.previous, before = classifyCharacter(previous2), marker;
  return start;
  function start(code2) {
    return effects.enter("attentionSequence"), marker = code2, sequence(code2);
  }
  function sequence(code2) {
    if (code2 === marker)
      return effects.consume(code2), sequence;
    let token = effects.exit("attentionSequence"), after = classifyCharacter(code2), open = !after || after === 2 && before || attentionMarkers2.includes(code2), close = !before || before === 2 && after || attentionMarkers2.includes(previous2);
    return token._open = Boolean(marker === 42 ? open : open && (before || !close)), token._close = Boolean(marker === 42 ? close : close && (after || !open)), ok2(code2);
  }
}
function movePoint(point3, offset) {
  point3.column += offset, point3.offset += offset, point3._bufferIndex += offset;
}

// node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/autolink.js
var autolink = {
  name: "autolink",
  tokenize: tokenizeAutolink
};
function tokenizeAutolink(effects, ok2, nok) {
  let size = 1;
  return start;
  function start(code2) {
    return effects.enter("autolink"), effects.enter("autolinkMarker"), effects.consume(code2), effects.exit("autolinkMarker"), effects.enter("autolinkProtocol"), open;
  }
  function open(code2) {
    return asciiAlpha(code2) ? (effects.consume(code2), schemeOrEmailAtext) : asciiAtext(code2) ? emailAtext(code2) : nok(code2);
  }
  function schemeOrEmailAtext(code2) {
    return code2 === 43 || code2 === 45 || code2 === 46 || asciiAlphanumeric(code2) ? schemeInsideOrEmailAtext(code2) : emailAtext(code2);
  }
  function schemeInsideOrEmailAtext(code2) {
    return code2 === 58 ? (effects.consume(code2), urlInside) : (code2 === 43 || code2 === 45 || code2 === 46 || asciiAlphanumeric(code2)) && size++ < 32 ? (effects.consume(code2), schemeInsideOrEmailAtext) : emailAtext(code2);
  }
  function urlInside(code2) {
    return code2 === 62 ? (effects.exit("autolinkProtocol"), end(code2)) : code2 === null || code2 === 32 || code2 === 60 || asciiControl(code2) ? nok(code2) : (effects.consume(code2), urlInside);
  }
  function emailAtext(code2) {
    return code2 === 64 ? (effects.consume(code2), size = 0, emailAtSignOrDot) : asciiAtext(code2) ? (effects.consume(code2), emailAtext) : nok(code2);
  }
  function emailAtSignOrDot(code2) {
    return asciiAlphanumeric(code2) ? emailLabel(code2) : nok(code2);
  }
  function emailLabel(code2) {
    return code2 === 46 ? (effects.consume(code2), size = 0, emailAtSignOrDot) : code2 === 62 ? (effects.exit("autolinkProtocol").type = "autolinkEmail", end(code2)) : emailValue(code2);
  }
  function emailValue(code2) {
    return (code2 === 45 || asciiAlphanumeric(code2)) && size++ < 63 ? (effects.consume(code2), code2 === 45 ? emailValue : emailLabel) : nok(code2);
  }
  function end(code2) {
    return effects.enter("autolinkMarker"), effects.consume(code2), effects.exit("autolinkMarker"), effects.exit("autolink"), ok2;
  }
}

// node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/blank-line.js
var blankLine = {
  tokenize: tokenizeBlankLine,
  partial: !0
};
function tokenizeBlankLine(effects, ok2, nok) {
  return factorySpace(effects, afterWhitespace, "linePrefix");
  function afterWhitespace(code2) {
    return code2 === null || markdownLineEnding(code2) ? ok2(code2) : nok(code2);
  }
}

// node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/block-quote.js
var blockQuote = {
  name: "blockQuote",
  tokenize: tokenizeBlockQuoteStart,
  continuation: {
    tokenize: tokenizeBlockQuoteContinuation
  },
  exit
};
function tokenizeBlockQuoteStart(effects, ok2, nok) {
  let self = this;
  return start;
  function start(code2) {
    if (code2 === 62) {
      let state = self.containerState;
      return state.open || (effects.enter("blockQuote", {
        _container: !0
      }), state.open = !0), effects.enter("blockQuotePrefix"), effects.enter("blockQuoteMarker"), effects.consume(code2), effects.exit("blockQuoteMarker"), after;
    }
    return nok(code2);
  }
  function after(code2) {
    return markdownSpace(code2) ? (effects.enter("blockQuotePrefixWhitespace"), effects.consume(code2), effects.exit("blockQuotePrefixWhitespace"), effects.exit("blockQuotePrefix"), ok2) : (effects.exit("blockQuotePrefix"), ok2(code2));
  }
}
function tokenizeBlockQuoteContinuation(effects, ok2, nok) {
  return factorySpace(effects, effects.attempt(blockQuote, ok2, nok), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function exit(effects) {
  effects.exit("blockQuote");
}

// node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/character-escape.js
var characterEscape = {
  name: "characterEscape",
  tokenize: tokenizeCharacterEscape
};
function tokenizeCharacterEscape(effects, ok2, nok) {
  return start;
  function start(code2) {
    return effects.enter("characterEscape"), effects.enter("escapeMarker"), effects.consume(code2), effects.exit("escapeMarker"), open;
  }
  function open(code2) {
    return asciiPunctuation(code2) ? (effects.enter("characterEscapeValue"), effects.consume(code2), effects.exit("characterEscapeValue"), effects.exit("characterEscape"), ok2) : nok(code2);
  }
}

// node_modules/.pnpm/character-entities@2.0.2/node_modules/character-entities/index.js
var characterEntities = {
  AElig: "\xC6",
  AMP: "&",
  Aacute: "\xC1",
  Abreve: "\u0102",
  Acirc: "\xC2",
  Acy: "\u0410",
  Afr: "\u{1D504}",
  Agrave: "\xC0",
  Alpha: "\u0391",
  Amacr: "\u0100",
  And: "\u2A53",
  Aogon: "\u0104",
  Aopf: "\u{1D538}",
  ApplyFunction: "\u2061",
  Aring: "\xC5",
  Ascr: "\u{1D49C}",
  Assign: "\u2254",
  Atilde: "\xC3",
  Auml: "\xC4",
  Backslash: "\u2216",
  Barv: "\u2AE7",
  Barwed: "\u2306",
  Bcy: "\u0411",
  Because: "\u2235",
  Bernoullis: "\u212C",
  Beta: "\u0392",
  Bfr: "\u{1D505}",
  Bopf: "\u{1D539}",
  Breve: "\u02D8",
  Bscr: "\u212C",
  Bumpeq: "\u224E",
  CHcy: "\u0427",
  COPY: "\xA9",
  Cacute: "\u0106",
  Cap: "\u22D2",
  CapitalDifferentialD: "\u2145",
  Cayleys: "\u212D",
  Ccaron: "\u010C",
  Ccedil: "\xC7",
  Ccirc: "\u0108",
  Cconint: "\u2230",
  Cdot: "\u010A",
  Cedilla: "\xB8",
  CenterDot: "\xB7",
  Cfr: "\u212D",
  Chi: "\u03A7",
  CircleDot: "\u2299",
  CircleMinus: "\u2296",
  CirclePlus: "\u2295",
  CircleTimes: "\u2297",
  ClockwiseContourIntegral: "\u2232",
  CloseCurlyDoubleQuote: "\u201D",
  CloseCurlyQuote: "\u2019",
  Colon: "\u2237",
  Colone: "\u2A74",
  Congruent: "\u2261",
  Conint: "\u222F",
  ContourIntegral: "\u222E",
  Copf: "\u2102",
  Coproduct: "\u2210",
  CounterClockwiseContourIntegral: "\u2233",
  Cross: "\u2A2F",
  Cscr: "\u{1D49E}",
  Cup: "\u22D3",
  CupCap: "\u224D",
  DD: "\u2145",
  DDotrahd: "\u2911",
  DJcy: "\u0402",
  DScy: "\u0405",
  DZcy: "\u040F",
  Dagger: "\u2021",
  Darr: "\u21A1",
  Dashv: "\u2AE4",
  Dcaron: "\u010E",
  Dcy: "\u0414",
  Del: "\u2207",
  Delta: "\u0394",
  Dfr: "\u{1D507}",
  DiacriticalAcute: "\xB4",
  DiacriticalDot: "\u02D9",
  DiacriticalDoubleAcute: "\u02DD",
  DiacriticalGrave: "`",
  DiacriticalTilde: "\u02DC",
  Diamond: "\u22C4",
  DifferentialD: "\u2146",
  Dopf: "\u{1D53B}",
  Dot: "\xA8",
  DotDot: "\u20DC",
  DotEqual: "\u2250",
  DoubleContourIntegral: "\u222F",
  DoubleDot: "\xA8",
  DoubleDownArrow: "\u21D3",
  DoubleLeftArrow: "\u21D0",
  DoubleLeftRightArrow: "\u21D4",
  DoubleLeftTee: "\u2AE4",
  DoubleLongLeftArrow: "\u27F8",
  DoubleLongLeftRightArrow: "\u27FA",
  DoubleLongRightArrow: "\u27F9",
  DoubleRightArrow: "\u21D2",
  DoubleRightTee: "\u22A8",
  DoubleUpArrow: "\u21D1",
  DoubleUpDownArrow: "\u21D5",
  DoubleVerticalBar: "\u2225",
  DownArrow: "\u2193",
  DownArrowBar: "\u2913",
  DownArrowUpArrow: "\u21F5",
  DownBreve: "\u0311",
  DownLeftRightVector: "\u2950",
  DownLeftTeeVector: "\u295E",
  DownLeftVector: "\u21BD",
  DownLeftVectorBar: "\u2956",
  DownRightTeeVector: "\u295F",
  DownRightVector: "\u21C1",
  DownRightVectorBar: "\u2957",
  DownTee: "\u22A4",
  DownTeeArrow: "\u21A7",
  Downarrow: "\u21D3",
  Dscr: "\u{1D49F}",
  Dstrok: "\u0110",
  ENG: "\u014A",
  ETH: "\xD0",
  Eacute: "\xC9",
  Ecaron: "\u011A",
  Ecirc: "\xCA",
  Ecy: "\u042D",
  Edot: "\u0116",
  Efr: "\u{1D508}",
  Egrave: "\xC8",
  Element: "\u2208",
  Emacr: "\u0112",
  EmptySmallSquare: "\u25FB",
  EmptyVerySmallSquare: "\u25AB",
  Eogon: "\u0118",
  Eopf: "\u{1D53C}",
  Epsilon: "\u0395",
  Equal: "\u2A75",
  EqualTilde: "\u2242",
  Equilibrium: "\u21CC",
  Escr: "\u2130",
  Esim: "\u2A73",
  Eta: "\u0397",
  Euml: "\xCB",
  Exists: "\u2203",
  ExponentialE: "\u2147",
  Fcy: "\u0424",
  Ffr: "\u{1D509}",
  FilledSmallSquare: "\u25FC",
  FilledVerySmallSquare: "\u25AA",
  Fopf: "\u{1D53D}",
  ForAll: "\u2200",
  Fouriertrf: "\u2131",
  Fscr: "\u2131",
  GJcy: "\u0403",
  GT: ">",
  Gamma: "\u0393",
  Gammad: "\u03DC",
  Gbreve: "\u011E",
  Gcedil: "\u0122",
  Gcirc: "\u011C",
  Gcy: "\u0413",
  Gdot: "\u0120",
  Gfr: "\u{1D50A}",
  Gg: "\u22D9",
  Gopf: "\u{1D53E}",
  GreaterEqual: "\u2265",
  GreaterEqualLess: "\u22DB",
  GreaterFullEqual: "\u2267",
  GreaterGreater: "\u2AA2",
  GreaterLess: "\u2277",
  GreaterSlantEqual: "\u2A7E",
  GreaterTilde: "\u2273",
  Gscr: "\u{1D4A2}",
  Gt: "\u226B",
  HARDcy: "\u042A",
  Hacek: "\u02C7",
  Hat: "^",
  Hcirc: "\u0124",
  Hfr: "\u210C",
  HilbertSpace: "\u210B",
  Hopf: "\u210D",
  HorizontalLine: "\u2500",
  Hscr: "\u210B",
  Hstrok: "\u0126",
  HumpDownHump: "\u224E",
  HumpEqual: "\u224F",
  IEcy: "\u0415",
  IJlig: "\u0132",
  IOcy: "\u0401",
  Iacute: "\xCD",
  Icirc: "\xCE",
  Icy: "\u0418",
  Idot: "\u0130",
  Ifr: "\u2111",
  Igrave: "\xCC",
  Im: "\u2111",
  Imacr: "\u012A",
  ImaginaryI: "\u2148",
  Implies: "\u21D2",
  Int: "\u222C",
  Integral: "\u222B",
  Intersection: "\u22C2",
  InvisibleComma: "\u2063",
  InvisibleTimes: "\u2062",
  Iogon: "\u012E",
  Iopf: "\u{1D540}",
  Iota: "\u0399",
  Iscr: "\u2110",
  Itilde: "\u0128",
  Iukcy: "\u0406",
  Iuml: "\xCF",
  Jcirc: "\u0134",
  Jcy: "\u0419",
  Jfr: "\u{1D50D}",
  Jopf: "\u{1D541}",
  Jscr: "\u{1D4A5}",
  Jsercy: "\u0408",
  Jukcy: "\u0404",
  KHcy: "\u0425",
  KJcy: "\u040C",
  Kappa: "\u039A",
  Kcedil: "\u0136",
  Kcy: "\u041A",
  Kfr: "\u{1D50E}",
  Kopf: "\u{1D542}",
  Kscr: "\u{1D4A6}",
  LJcy: "\u0409",
  LT: "<",
  Lacute: "\u0139",
  Lambda: "\u039B",
  Lang: "\u27EA",
  Laplacetrf: "\u2112",
  Larr: "\u219E",
  Lcaron: "\u013D",
  Lcedil: "\u013B",
  Lcy: "\u041B",
  LeftAngleBracket: "\u27E8",
  LeftArrow: "\u2190",
  LeftArrowBar: "\u21E4",
  LeftArrowRightArrow: "\u21C6",
  LeftCeiling: "\u2308",
  LeftDoubleBracket: "\u27E6",
  LeftDownTeeVector: "\u2961",
  LeftDownVector: "\u21C3",
  LeftDownVectorBar: "\u2959",
  LeftFloor: "\u230A",
  LeftRightArrow: "\u2194",
  LeftRightVector: "\u294E",
  LeftTee: "\u22A3",
  LeftTeeArrow: "\u21A4",
  LeftTeeVector: "\u295A",
  LeftTriangle: "\u22B2",
  LeftTriangleBar: "\u29CF",
  LeftTriangleEqual: "\u22B4",
  LeftUpDownVector: "\u2951",
  LeftUpTeeVector: "\u2960",
  LeftUpVector: "\u21BF",
  LeftUpVectorBar: "\u2958",
  LeftVector: "\u21BC",
  LeftVectorBar: "\u2952",
  Leftarrow: "\u21D0",
  Leftrightarrow: "\u21D4",
  LessEqualGreater: "\u22DA",
  LessFullEqual: "\u2266",
  LessGreater: "\u2276",
  LessLess: "\u2AA1",
  LessSlantEqual: "\u2A7D",
  LessTilde: "\u2272",
  Lfr: "\u{1D50F}",
  Ll: "\u22D8",
  Lleftarrow: "\u21DA",
  Lmidot: "\u013F",
  LongLeftArrow: "\u27F5",
  LongLeftRightArrow: "\u27F7",
  LongRightArrow: "\u27F6",
  Longleftarrow: "\u27F8",
  Longleftrightarrow: "\u27FA",
  Longrightarrow: "\u27F9",
  Lopf: "\u{1D543}",
  LowerLeftArrow: "\u2199",
  LowerRightArrow: "\u2198",
  Lscr: "\u2112",
  Lsh: "\u21B0",
  Lstrok: "\u0141",
  Lt: "\u226A",
  Map: "\u2905",
  Mcy: "\u041C",
  MediumSpace: "\u205F",
  Mellintrf: "\u2133",
  Mfr: "\u{1D510}",
  MinusPlus: "\u2213",
  Mopf: "\u{1D544}",
  Mscr: "\u2133",
  Mu: "\u039C",
  NJcy: "\u040A",
  Nacute: "\u0143",
  Ncaron: "\u0147",
  Ncedil: "\u0145",
  Ncy: "\u041D",
  NegativeMediumSpace: "\u200B",
  NegativeThickSpace: "\u200B",
  NegativeThinSpace: "\u200B",
  NegativeVeryThinSpace: "\u200B",
  NestedGreaterGreater: "\u226B",
  NestedLessLess: "\u226A",
  NewLine: `
`,
  Nfr: "\u{1D511}",
  NoBreak: "\u2060",
  NonBreakingSpace: "\xA0",
  Nopf: "\u2115",
  Not: "\u2AEC",
  NotCongruent: "\u2262",
  NotCupCap: "\u226D",
  NotDoubleVerticalBar: "\u2226",
  NotElement: "\u2209",
  NotEqual: "\u2260",
  NotEqualTilde: "\u2242\u0338",
  NotExists: "\u2204",
  NotGreater: "\u226F",
  NotGreaterEqual: "\u2271",
  NotGreaterFullEqual: "\u2267\u0338",
  NotGreaterGreater: "\u226B\u0338",
  NotGreaterLess: "\u2279",
  NotGreaterSlantEqual: "\u2A7E\u0338",
  NotGreaterTilde: "\u2275",
  NotHumpDownHump: "\u224E\u0338",
  NotHumpEqual: "\u224F\u0338",
  NotLeftTriangle: "\u22EA",
  NotLeftTriangleBar: "\u29CF\u0338",
  NotLeftTriangleEqual: "\u22EC",
  NotLess: "\u226E",
  NotLessEqual: "\u2270",
  NotLessGreater: "\u2278",
  NotLessLess: "\u226A\u0338",
  NotLessSlantEqual: "\u2A7D\u0338",
  NotLessTilde: "\u2274",
  NotNestedGreaterGreater: "\u2AA2\u0338",
  NotNestedLessLess: "\u2AA1\u0338",
  NotPrecedes: "\u2280",
  NotPrecedesEqual: "\u2AAF\u0338",
  NotPrecedesSlantEqual: "\u22E0",
  NotReverseElement: "\u220C",
  NotRightTriangle: "\u22EB",
  NotRightTriangleBar: "\u29D0\u0338",
  NotRightTriangleEqual: "\u22ED",
  NotSquareSubset: "\u228F\u0338",
  NotSquareSubsetEqual: "\u22E2",
  NotSquareSuperset: "\u2290\u0338",
  NotSquareSupersetEqual: "\u22E3",
  NotSubset: "\u2282\u20D2",
  NotSubsetEqual: "\u2288",
  NotSucceeds: "\u2281",
  NotSucceedsEqual: "\u2AB0\u0338",
  NotSucceedsSlantEqual: "\u22E1",
  NotSucceedsTilde: "\u227F\u0338",
  NotSuperset: "\u2283\u20D2",
  NotSupersetEqual: "\u2289",
  NotTilde: "\u2241",
  NotTildeEqual: "\u2244",
  NotTildeFullEqual: "\u2247",
  NotTildeTilde: "\u2249",
  NotVerticalBar: "\u2224",
  Nscr: "\u{1D4A9}",
  Ntilde: "\xD1",
  Nu: "\u039D",
  OElig: "\u0152",
  Oacute: "\xD3",
  Ocirc: "\xD4",
  Ocy: "\u041E",
  Odblac: "\u0150",
  Ofr: "\u{1D512}",
  Ograve: "\xD2",
  Omacr: "\u014C",
  Omega: "\u03A9",
  Omicron: "\u039F",
  Oopf: "\u{1D546}",
  OpenCurlyDoubleQuote: "\u201C",
  OpenCurlyQuote: "\u2018",
  Or: "\u2A54",
  Oscr: "\u{1D4AA}",
  Oslash: "\xD8",
  Otilde: "\xD5",
  Otimes: "\u2A37",
  Ouml: "\xD6",
  OverBar: "\u203E",
  OverBrace: "\u23DE",
  OverBracket: "\u23B4",
  OverParenthesis: "\u23DC",
  PartialD: "\u2202",
  Pcy: "\u041F",
  Pfr: "\u{1D513}",
  Phi: "\u03A6",
  Pi: "\u03A0",
  PlusMinus: "\xB1",
  Poincareplane: "\u210C",
  Popf: "\u2119",
  Pr: "\u2ABB",
  Precedes: "\u227A",
  PrecedesEqual: "\u2AAF",
  PrecedesSlantEqual: "\u227C",
  PrecedesTilde: "\u227E",
  Prime: "\u2033",
  Product: "\u220F",
  Proportion: "\u2237",
  Proportional: "\u221D",
  Pscr: "\u{1D4AB}",
  Psi: "\u03A8",
  QUOT: '"',
  Qfr: "\u{1D514}",
  Qopf: "\u211A",
  Qscr: "\u{1D4AC}",
  RBarr: "\u2910",
  REG: "\xAE",
  Racute: "\u0154",
  Rang: "\u27EB",
  Rarr: "\u21A0",
  Rarrtl: "\u2916",
  Rcaron: "\u0158",
  Rcedil: "\u0156",
  Rcy: "\u0420",
  Re: "\u211C",
  ReverseElement: "\u220B",
  ReverseEquilibrium: "\u21CB",
  ReverseUpEquilibrium: "\u296F",
  Rfr: "\u211C",
  Rho: "\u03A1",
  RightAngleBracket: "\u27E9",
  RightArrow: "\u2192",
  RightArrowBar: "\u21E5",
  RightArrowLeftArrow: "\u21C4",
  RightCeiling: "\u2309",
  RightDoubleBracket: "\u27E7",
  RightDownTeeVector: "\u295D",
  RightDownVector: "\u21C2",
  RightDownVectorBar: "\u2955",
  RightFloor: "\u230B",
  RightTee: "\u22A2",
  RightTeeArrow: "\u21A6",
  RightTeeVector: "\u295B",
  RightTriangle: "\u22B3",
  RightTriangleBar: "\u29D0",
  RightTriangleEqual: "\u22B5",
  RightUpDownVector: "\u294F",
  RightUpTeeVector: "\u295C",
  RightUpVector: "\u21BE",
  RightUpVectorBar: "\u2954",
  RightVector: "\u21C0",
  RightVectorBar: "\u2953",
  Rightarrow: "\u21D2",
  Ropf: "\u211D",
  RoundImplies: "\u2970",
  Rrightarrow: "\u21DB",
  Rscr: "\u211B",
  Rsh: "\u21B1",
  RuleDelayed: "\u29F4",
  SHCHcy: "\u0429",
  SHcy: "\u0428",
  SOFTcy: "\u042C",
  Sacute: "\u015A",
  Sc: "\u2ABC",
  Scaron: "\u0160",
  Scedil: "\u015E",
  Scirc: "\u015C",
  Scy: "\u0421",
  Sfr: "\u{1D516}",
  ShortDownArrow: "\u2193",
  ShortLeftArrow: "\u2190",
  ShortRightArrow: "\u2192",
  ShortUpArrow: "\u2191",
  Sigma: "\u03A3",
  SmallCircle: "\u2218",
  Sopf: "\u{1D54A}",
  Sqrt: "\u221A",
  Square: "\u25A1",
  SquareIntersection: "\u2293",
  SquareSubset: "\u228F",
  SquareSubsetEqual: "\u2291",
  SquareSuperset: "\u2290",
  SquareSupersetEqual: "\u2292",
  SquareUnion: "\u2294",
  Sscr: "\u{1D4AE}",
  Star: "\u22C6",
  Sub: "\u22D0",
  Subset: "\u22D0",
  SubsetEqual: "\u2286",
  Succeeds: "\u227B",
  SucceedsEqual: "\u2AB0",
  SucceedsSlantEqual: "\u227D",
  SucceedsTilde: "\u227F",
  SuchThat: "\u220B",
  Sum: "\u2211",
  Sup: "\u22D1",
  Superset: "\u2283",
  SupersetEqual: "\u2287",
  Supset: "\u22D1",
  THORN: "\xDE",
  TRADE: "\u2122",
  TSHcy: "\u040B",
  TScy: "\u0426",
  Tab: "	",
  Tau: "\u03A4",
  Tcaron: "\u0164",
  Tcedil: "\u0162",
  Tcy: "\u0422",
  Tfr: "\u{1D517}",
  Therefore: "\u2234",
  Theta: "\u0398",
  ThickSpace: "\u205F\u200A",
  ThinSpace: "\u2009",
  Tilde: "\u223C",
  TildeEqual: "\u2243",
  TildeFullEqual: "\u2245",
  TildeTilde: "\u2248",
  Topf: "\u{1D54B}",
  TripleDot: "\u20DB",
  Tscr: "\u{1D4AF}",
  Tstrok: "\u0166",
  Uacute: "\xDA",
  Uarr: "\u219F",
  Uarrocir: "\u2949",
  Ubrcy: "\u040E",
  Ubreve: "\u016C",
  Ucirc: "\xDB",
  Ucy: "\u0423",
  Udblac: "\u0170",
  Ufr: "\u{1D518}",
  Ugrave: "\xD9",
  Umacr: "\u016A",
  UnderBar: "_",
  UnderBrace: "\u23DF",
  UnderBracket: "\u23B5",
  UnderParenthesis: "\u23DD",
  Union: "\u22C3",
  UnionPlus: "\u228E",
  Uogon: "\u0172",
  Uopf: "\u{1D54C}",
  UpArrow: "\u2191",
  UpArrowBar: "\u2912",
  UpArrowDownArrow: "\u21C5",
  UpDownArrow: "\u2195",
  UpEquilibrium: "\u296E",
  UpTee: "\u22A5",
  UpTeeArrow: "\u21A5",
  Uparrow: "\u21D1",
  Updownarrow: "\u21D5",
  UpperLeftArrow: "\u2196",
  UpperRightArrow: "\u2197",
  Upsi: "\u03D2",
  Upsilon: "\u03A5",
  Uring: "\u016E",
  Uscr: "\u{1D4B0}",
  Utilde: "\u0168",
  Uuml: "\xDC",
  VDash: "\u22AB",
  Vbar: "\u2AEB",
  Vcy: "\u0412",
  Vdash: "\u22A9",
  Vdashl: "\u2AE6",
  Vee: "\u22C1",
  Verbar: "\u2016",
  Vert: "\u2016",
  VerticalBar: "\u2223",
  VerticalLine: "|",
  VerticalSeparator: "\u2758",
  VerticalTilde: "\u2240",
  VeryThinSpace: "\u200A",
  Vfr: "\u{1D519}",
  Vopf: "\u{1D54D}",
  Vscr: "\u{1D4B1}",
  Vvdash: "\u22AA",
  Wcirc: "\u0174",
  Wedge: "\u22C0",
  Wfr: "\u{1D51A}",
  Wopf: "\u{1D54E}",
  Wscr: "\u{1D4B2}",
  Xfr: "\u{1D51B}",
  Xi: "\u039E",
  Xopf: "\u{1D54F}",
  Xscr: "\u{1D4B3}",
  YAcy: "\u042F",
  YIcy: "\u0407",
  YUcy: "\u042E",
  Yacute: "\xDD",
  Ycirc: "\u0176",
  Ycy: "\u042B",
  Yfr: "\u{1D51C}",
  Yopf: "\u{1D550}",
  Yscr: "\u{1D4B4}",
  Yuml: "\u0178",
  ZHcy: "\u0416",
  Zacute: "\u0179",
  Zcaron: "\u017D",
  Zcy: "\u0417",
  Zdot: "\u017B",
  ZeroWidthSpace: "\u200B",
  Zeta: "\u0396",
  Zfr: "\u2128",
  Zopf: "\u2124",
  Zscr: "\u{1D4B5}",
  aacute: "\xE1",
  abreve: "\u0103",
  ac: "\u223E",
  acE: "\u223E\u0333",
  acd: "\u223F",
  acirc: "\xE2",
  acute: "\xB4",
  acy: "\u0430",
  aelig: "\xE6",
  af: "\u2061",
  afr: "\u{1D51E}",
  agrave: "\xE0",
  alefsym: "\u2135",
  aleph: "\u2135",
  alpha: "\u03B1",
  amacr: "\u0101",
  amalg: "\u2A3F",
  amp: "&",
  and: "\u2227",
  andand: "\u2A55",
  andd: "\u2A5C",
  andslope: "\u2A58",
  andv: "\u2A5A",
  ang: "\u2220",
  ange: "\u29A4",
  angle: "\u2220",
  angmsd: "\u2221",
  angmsdaa: "\u29A8",
  angmsdab: "\u29A9",
  angmsdac: "\u29AA",
  angmsdad: "\u29AB",
  angmsdae: "\u29AC",
  angmsdaf: "\u29AD",
  angmsdag: "\u29AE",
  angmsdah: "\u29AF",
  angrt: "\u221F",
  angrtvb: "\u22BE",
  angrtvbd: "\u299D",
  angsph: "\u2222",
  angst: "\xC5",
  angzarr: "\u237C",
  aogon: "\u0105",
  aopf: "\u{1D552}",
  ap: "\u2248",
  apE: "\u2A70",
  apacir: "\u2A6F",
  ape: "\u224A",
  apid: "\u224B",
  apos: "'",
  approx: "\u2248",
  approxeq: "\u224A",
  aring: "\xE5",
  ascr: "\u{1D4B6}",
  ast: "*",
  asymp: "\u2248",
  asympeq: "\u224D",
  atilde: "\xE3",
  auml: "\xE4",
  awconint: "\u2233",
  awint: "\u2A11",
  bNot: "\u2AED",
  backcong: "\u224C",
  backepsilon: "\u03F6",
  backprime: "\u2035",
  backsim: "\u223D",
  backsimeq: "\u22CD",
  barvee: "\u22BD",
  barwed: "\u2305",
  barwedge: "\u2305",
  bbrk: "\u23B5",
  bbrktbrk: "\u23B6",
  bcong: "\u224C",
  bcy: "\u0431",
  bdquo: "\u201E",
  becaus: "\u2235",
  because: "\u2235",
  bemptyv: "\u29B0",
  bepsi: "\u03F6",
  bernou: "\u212C",
  beta: "\u03B2",
  beth: "\u2136",
  between: "\u226C",
  bfr: "\u{1D51F}",
  bigcap: "\u22C2",
  bigcirc: "\u25EF",
  bigcup: "\u22C3",
  bigodot: "\u2A00",
  bigoplus: "\u2A01",
  bigotimes: "\u2A02",
  bigsqcup: "\u2A06",
  bigstar: "\u2605",
  bigtriangledown: "\u25BD",
  bigtriangleup: "\u25B3",
  biguplus: "\u2A04",
  bigvee: "\u22C1",
  bigwedge: "\u22C0",
  bkarow: "\u290D",
  blacklozenge: "\u29EB",
  blacksquare: "\u25AA",
  blacktriangle: "\u25B4",
  blacktriangledown: "\u25BE",
  blacktriangleleft: "\u25C2",
  blacktriangleright: "\u25B8",
  blank: "\u2423",
  blk12: "\u2592",
  blk14: "\u2591",
  blk34: "\u2593",
  block: "\u2588",
  bne: "=\u20E5",
  bnequiv: "\u2261\u20E5",
  bnot: "\u2310",
  bopf: "\u{1D553}",
  bot: "\u22A5",
  bottom: "\u22A5",
  bowtie: "\u22C8",
  boxDL: "\u2557",
  boxDR: "\u2554",
  boxDl: "\u2556",
  boxDr: "\u2553",
  boxH: "\u2550",
  boxHD: "\u2566",
  boxHU: "\u2569",
  boxHd: "\u2564",
  boxHu: "\u2567",
  boxUL: "\u255D",
  boxUR: "\u255A",
  boxUl: "\u255C",
  boxUr: "\u2559",
  boxV: "\u2551",
  boxVH: "\u256C",
  boxVL: "\u2563",
  boxVR: "\u2560",
  boxVh: "\u256B",
  boxVl: "\u2562",
  boxVr: "\u255F",
  boxbox: "\u29C9",
  boxdL: "\u2555",
  boxdR: "\u2552",
  boxdl: "\u2510",
  boxdr: "\u250C",
  boxh: "\u2500",
  boxhD: "\u2565",
  boxhU: "\u2568",
  boxhd: "\u252C",
  boxhu: "\u2534",
  boxminus: "\u229F",
  boxplus: "\u229E",
  boxtimes: "\u22A0",
  boxuL: "\u255B",
  boxuR: "\u2558",
  boxul: "\u2518",
  boxur: "\u2514",
  boxv: "\u2502",
  boxvH: "\u256A",
  boxvL: "\u2561",
  boxvR: "\u255E",
  boxvh: "\u253C",
  boxvl: "\u2524",
  boxvr: "\u251C",
  bprime: "\u2035",
  breve: "\u02D8",
  brvbar: "\xA6",
  bscr: "\u{1D4B7}",
  bsemi: "\u204F",
  bsim: "\u223D",
  bsime: "\u22CD",
  bsol: "\\",
  bsolb: "\u29C5",
  bsolhsub: "\u27C8",
  bull: "\u2022",
  bullet: "\u2022",
  bump: "\u224E",
  bumpE: "\u2AAE",
  bumpe: "\u224F",
  bumpeq: "\u224F",
  cacute: "\u0107",
  cap: "\u2229",
  capand: "\u2A44",
  capbrcup: "\u2A49",
  capcap: "\u2A4B",
  capcup: "\u2A47",
  capdot: "\u2A40",
  caps: "\u2229\uFE00",
  caret: "\u2041",
  caron: "\u02C7",
  ccaps: "\u2A4D",
  ccaron: "\u010D",
  ccedil: "\xE7",
  ccirc: "\u0109",
  ccups: "\u2A4C",
  ccupssm: "\u2A50",
  cdot: "\u010B",
  cedil: "\xB8",
  cemptyv: "\u29B2",
  cent: "\xA2",
  centerdot: "\xB7",
  cfr: "\u{1D520}",
  chcy: "\u0447",
  check: "\u2713",
  checkmark: "\u2713",
  chi: "\u03C7",
  cir: "\u25CB",
  cirE: "\u29C3",
  circ: "\u02C6",
  circeq: "\u2257",
  circlearrowleft: "\u21BA",
  circlearrowright: "\u21BB",
  circledR: "\xAE",
  circledS: "\u24C8",
  circledast: "\u229B",
  circledcirc: "\u229A",
  circleddash: "\u229D",
  cire: "\u2257",
  cirfnint: "\u2A10",
  cirmid: "\u2AEF",
  cirscir: "\u29C2",
  clubs: "\u2663",
  clubsuit: "\u2663",
  colon: ":",
  colone: "\u2254",
  coloneq: "\u2254",
  comma: ",",
  commat: "@",
  comp: "\u2201",
  compfn: "\u2218",
  complement: "\u2201",
  complexes: "\u2102",
  cong: "\u2245",
  congdot: "\u2A6D",
  conint: "\u222E",
  copf: "\u{1D554}",
  coprod: "\u2210",
  copy: "\xA9",
  copysr: "\u2117",
  crarr: "\u21B5",
  cross: "\u2717",
  cscr: "\u{1D4B8}",
  csub: "\u2ACF",
  csube: "\u2AD1",
  csup: "\u2AD0",
  csupe: "\u2AD2",
  ctdot: "\u22EF",
  cudarrl: "\u2938",
  cudarrr: "\u2935",
  cuepr: "\u22DE",
  cuesc: "\u22DF",
  cularr: "\u21B6",
  cularrp: "\u293D",
  cup: "\u222A",
  cupbrcap: "\u2A48",
  cupcap: "\u2A46",
  cupcup: "\u2A4A",
  cupdot: "\u228D",
  cupor: "\u2A45",
  cups: "\u222A\uFE00",
  curarr: "\u21B7",
  curarrm: "\u293C",
  curlyeqprec: "\u22DE",
  curlyeqsucc: "\u22DF",
  curlyvee: "\u22CE",
  curlywedge: "\u22CF",
  curren: "\xA4",
  curvearrowleft: "\u21B6",
  curvearrowright: "\u21B7",
  cuvee: "\u22CE",
  cuwed: "\u22CF",
  cwconint: "\u2232",
  cwint: "\u2231",
  cylcty: "\u232D",
  dArr: "\u21D3",
  dHar: "\u2965",
  dagger: "\u2020",
  daleth: "\u2138",
  darr: "\u2193",
  dash: "\u2010",
  dashv: "\u22A3",
  dbkarow: "\u290F",
  dblac: "\u02DD",
  dcaron: "\u010F",
  dcy: "\u0434",
  dd: "\u2146",
  ddagger: "\u2021",
  ddarr: "\u21CA",
  ddotseq: "\u2A77",
  deg: "\xB0",
  delta: "\u03B4",
  demptyv: "\u29B1",
  dfisht: "\u297F",
  dfr: "\u{1D521}",
  dharl: "\u21C3",
  dharr: "\u21C2",
  diam: "\u22C4",
  diamond: "\u22C4",
  diamondsuit: "\u2666",
  diams: "\u2666",
  die: "\xA8",
  digamma: "\u03DD",
  disin: "\u22F2",
  div: "\xF7",
  divide: "\xF7",
  divideontimes: "\u22C7",
  divonx: "\u22C7",
  djcy: "\u0452",
  dlcorn: "\u231E",
  dlcrop: "\u230D",
  dollar: "$",
  dopf: "\u{1D555}",
  dot: "\u02D9",
  doteq: "\u2250",
  doteqdot: "\u2251",
  dotminus: "\u2238",
  dotplus: "\u2214",
  dotsquare: "\u22A1",
  doublebarwedge: "\u2306",
  downarrow: "\u2193",
  downdownarrows: "\u21CA",
  downharpoonleft: "\u21C3",
  downharpoonright: "\u21C2",
  drbkarow: "\u2910",
  drcorn: "\u231F",
  drcrop: "\u230C",
  dscr: "\u{1D4B9}",
  dscy: "\u0455",
  dsol: "\u29F6",
  dstrok: "\u0111",
  dtdot: "\u22F1",
  dtri: "\u25BF",
  dtrif: "\u25BE",
  duarr: "\u21F5",
  duhar: "\u296F",
  dwangle: "\u29A6",
  dzcy: "\u045F",
  dzigrarr: "\u27FF",
  eDDot: "\u2A77",
  eDot: "\u2251",
  eacute: "\xE9",
  easter: "\u2A6E",
  ecaron: "\u011B",
  ecir: "\u2256",
  ecirc: "\xEA",
  ecolon: "\u2255",
  ecy: "\u044D",
  edot: "\u0117",
  ee: "\u2147",
  efDot: "\u2252",
  efr: "\u{1D522}",
  eg: "\u2A9A",
  egrave: "\xE8",
  egs: "\u2A96",
  egsdot: "\u2A98",
  el: "\u2A99",
  elinters: "\u23E7",
  ell: "\u2113",
  els: "\u2A95",
  elsdot: "\u2A97",
  emacr: "\u0113",
  empty: "\u2205",
  emptyset: "\u2205",
  emptyv: "\u2205",
  emsp13: "\u2004",
  emsp14: "\u2005",
  emsp: "\u2003",
  eng: "\u014B",
  ensp: "\u2002",
  eogon: "\u0119",
  eopf: "\u{1D556}",
  epar: "\u22D5",
  eparsl: "\u29E3",
  eplus: "\u2A71",
  epsi: "\u03B5",
  epsilon: "\u03B5",
  epsiv: "\u03F5",
  eqcirc: "\u2256",
  eqcolon: "\u2255",
  eqsim: "\u2242",
  eqslantgtr: "\u2A96",
  eqslantless: "\u2A95",
  equals: "=",
  equest: "\u225F",
  equiv: "\u2261",
  equivDD: "\u2A78",
  eqvparsl: "\u29E5",
  erDot: "\u2253",
  erarr: "\u2971",
  escr: "\u212F",
  esdot: "\u2250",
  esim: "\u2242",
  eta: "\u03B7",
  eth: "\xF0",
  euml: "\xEB",
  euro: "\u20AC",
  excl: "!",
  exist: "\u2203",
  expectation: "\u2130",
  exponentiale: "\u2147",
  fallingdotseq: "\u2252",
  fcy: "\u0444",
  female: "\u2640",
  ffilig: "\uFB03",
  fflig: "\uFB00",
  ffllig: "\uFB04",
  ffr: "\u{1D523}",
  filig: "\uFB01",
  fjlig: "fj",
  flat: "\u266D",
  fllig: "\uFB02",
  fltns: "\u25B1",
  fnof: "\u0192",
  fopf: "\u{1D557}",
  forall: "\u2200",
  fork: "\u22D4",
  forkv: "\u2AD9",
  fpartint: "\u2A0D",
  frac12: "\xBD",
  frac13: "\u2153",
  frac14: "\xBC",
  frac15: "\u2155",
  frac16: "\u2159",
  frac18: "\u215B",
  frac23: "\u2154",
  frac25: "\u2156",
  frac34: "\xBE",
  frac35: "\u2157",
  frac38: "\u215C",
  frac45: "\u2158",
  frac56: "\u215A",
  frac58: "\u215D",
  frac78: "\u215E",
  frasl: "\u2044",
  frown: "\u2322",
  fscr: "\u{1D4BB}",
  gE: "\u2267",
  gEl: "\u2A8C",
  gacute: "\u01F5",
  gamma: "\u03B3",
  gammad: "\u03DD",
  gap: "\u2A86",
  gbreve: "\u011F",
  gcirc: "\u011D",
  gcy: "\u0433",
  gdot: "\u0121",
  ge: "\u2265",
  gel: "\u22DB",
  geq: "\u2265",
  geqq: "\u2267",
  geqslant: "\u2A7E",
  ges: "\u2A7E",
  gescc: "\u2AA9",
  gesdot: "\u2A80",
  gesdoto: "\u2A82",
  gesdotol: "\u2A84",
  gesl: "\u22DB\uFE00",
  gesles: "\u2A94",
  gfr: "\u{1D524}",
  gg: "\u226B",
  ggg: "\u22D9",
  gimel: "\u2137",
  gjcy: "\u0453",
  gl: "\u2277",
  glE: "\u2A92",
  gla: "\u2AA5",
  glj: "\u2AA4",
  gnE: "\u2269",
  gnap: "\u2A8A",
  gnapprox: "\u2A8A",
  gne: "\u2A88",
  gneq: "\u2A88",
  gneqq: "\u2269",
  gnsim: "\u22E7",
  gopf: "\u{1D558}",
  grave: "`",
  gscr: "\u210A",
  gsim: "\u2273",
  gsime: "\u2A8E",
  gsiml: "\u2A90",
  gt: ">",
  gtcc: "\u2AA7",
  gtcir: "\u2A7A",
  gtdot: "\u22D7",
  gtlPar: "\u2995",
  gtquest: "\u2A7C",
  gtrapprox: "\u2A86",
  gtrarr: "\u2978",
  gtrdot: "\u22D7",
  gtreqless: "\u22DB",
  gtreqqless: "\u2A8C",
  gtrless: "\u2277",
  gtrsim: "\u2273",
  gvertneqq: "\u2269\uFE00",
  gvnE: "\u2269\uFE00",
  hArr: "\u21D4",
  hairsp: "\u200A",
  half: "\xBD",
  hamilt: "\u210B",
  hardcy: "\u044A",
  harr: "\u2194",
  harrcir: "\u2948",
  harrw: "\u21AD",
  hbar: "\u210F",
  hcirc: "\u0125",
  hearts: "\u2665",
  heartsuit: "\u2665",
  hellip: "\u2026",
  hercon: "\u22B9",
  hfr: "\u{1D525}",
  hksearow: "\u2925",
  hkswarow: "\u2926",
  hoarr: "\u21FF",
  homtht: "\u223B",
  hookleftarrow: "\u21A9",
  hookrightarrow: "\u21AA",
  hopf: "\u{1D559}",
  horbar: "\u2015",
  hscr: "\u{1D4BD}",
  hslash: "\u210F",
  hstrok: "\u0127",
  hybull: "\u2043",
  hyphen: "\u2010",
  iacute: "\xED",
  ic: "\u2063",
  icirc: "\xEE",
  icy: "\u0438",
  iecy: "\u0435",
  iexcl: "\xA1",
  iff: "\u21D4",
  ifr: "\u{1D526}",
  igrave: "\xEC",
  ii: "\u2148",
  iiiint: "\u2A0C",
  iiint: "\u222D",
  iinfin: "\u29DC",
  iiota: "\u2129",
  ijlig: "\u0133",
  imacr: "\u012B",
  image: "\u2111",
  imagline: "\u2110",
  imagpart: "\u2111",
  imath: "\u0131",
  imof: "\u22B7",
  imped: "\u01B5",
  in: "\u2208",
  incare: "\u2105",
  infin: "\u221E",
  infintie: "\u29DD",
  inodot: "\u0131",
  int: "\u222B",
  intcal: "\u22BA",
  integers: "\u2124",
  intercal: "\u22BA",
  intlarhk: "\u2A17",
  intprod: "\u2A3C",
  iocy: "\u0451",
  iogon: "\u012F",
  iopf: "\u{1D55A}",
  iota: "\u03B9",
  iprod: "\u2A3C",
  iquest: "\xBF",
  iscr: "\u{1D4BE}",
  isin: "\u2208",
  isinE: "\u22F9",
  isindot: "\u22F5",
  isins: "\u22F4",
  isinsv: "\u22F3",
  isinv: "\u2208",
  it: "\u2062",
  itilde: "\u0129",
  iukcy: "\u0456",
  iuml: "\xEF",
  jcirc: "\u0135",
  jcy: "\u0439",
  jfr: "\u{1D527}",
  jmath: "\u0237",
  jopf: "\u{1D55B}",
  jscr: "\u{1D4BF}",
  jsercy: "\u0458",
  jukcy: "\u0454",
  kappa: "\u03BA",
  kappav: "\u03F0",
  kcedil: "\u0137",
  kcy: "\u043A",
  kfr: "\u{1D528}",
  kgreen: "\u0138",
  khcy: "\u0445",
  kjcy: "\u045C",
  kopf: "\u{1D55C}",
  kscr: "\u{1D4C0}",
  lAarr: "\u21DA",
  lArr: "\u21D0",
  lAtail: "\u291B",
  lBarr: "\u290E",
  lE: "\u2266",
  lEg: "\u2A8B",
  lHar: "\u2962",
  lacute: "\u013A",
  laemptyv: "\u29B4",
  lagran: "\u2112",
  lambda: "\u03BB",
  lang: "\u27E8",
  langd: "\u2991",
  langle: "\u27E8",
  lap: "\u2A85",
  laquo: "\xAB",
  larr: "\u2190",
  larrb: "\u21E4",
  larrbfs: "\u291F",
  larrfs: "\u291D",
  larrhk: "\u21A9",
  larrlp: "\u21AB",
  larrpl: "\u2939",
  larrsim: "\u2973",
  larrtl: "\u21A2",
  lat: "\u2AAB",
  latail: "\u2919",
  late: "\u2AAD",
  lates: "\u2AAD\uFE00",
  lbarr: "\u290C",
  lbbrk: "\u2772",
  lbrace: "{",
  lbrack: "[",
  lbrke: "\u298B",
  lbrksld: "\u298F",
  lbrkslu: "\u298D",
  lcaron: "\u013E",
  lcedil: "\u013C",
  lceil: "\u2308",
  lcub: "{",
  lcy: "\u043B",
  ldca: "\u2936",
  ldquo: "\u201C",
  ldquor: "\u201E",
  ldrdhar: "\u2967",
  ldrushar: "\u294B",
  ldsh: "\u21B2",
  le: "\u2264",
  leftarrow: "\u2190",
  leftarrowtail: "\u21A2",
  leftharpoondown: "\u21BD",
  leftharpoonup: "\u21BC",
  leftleftarrows: "\u21C7",
  leftrightarrow: "\u2194",
  leftrightarrows: "\u21C6",
  leftrightharpoons: "\u21CB",
  leftrightsquigarrow: "\u21AD",
  leftthreetimes: "\u22CB",
  leg: "\u22DA",
  leq: "\u2264",
  leqq: "\u2266",
  leqslant: "\u2A7D",
  les: "\u2A7D",
  lescc: "\u2AA8",
  lesdot: "\u2A7F",
  lesdoto: "\u2A81",
  lesdotor: "\u2A83",
  lesg: "\u22DA\uFE00",
  lesges: "\u2A93",
  lessapprox: "\u2A85",
  lessdot: "\u22D6",
  lesseqgtr: "\u22DA",
  lesseqqgtr: "\u2A8B",
  lessgtr: "\u2276",
  lesssim: "\u2272",
  lfisht: "\u297C",
  lfloor: "\u230A",
  lfr: "\u{1D529}",
  lg: "\u2276",
  lgE: "\u2A91",
  lhard: "\u21BD",
  lharu: "\u21BC",
  lharul: "\u296A",
  lhblk: "\u2584",
  ljcy: "\u0459",
  ll: "\u226A",
  llarr: "\u21C7",
  llcorner: "\u231E",
  llhard: "\u296B",
  lltri: "\u25FA",
  lmidot: "\u0140",
  lmoust: "\u23B0",
  lmoustache: "\u23B0",
  lnE: "\u2268",
  lnap: "\u2A89",
  lnapprox: "\u2A89",
  lne: "\u2A87",
  lneq: "\u2A87",
  lneqq: "\u2268",
  lnsim: "\u22E6",
  loang: "\u27EC",
  loarr: "\u21FD",
  lobrk: "\u27E6",
  longleftarrow: "\u27F5",
  longleftrightarrow: "\u27F7",
  longmapsto: "\u27FC",
  longrightarrow: "\u27F6",
  looparrowleft: "\u21AB",
  looparrowright: "\u21AC",
  lopar: "\u2985",
  lopf: "\u{1D55D}",
  loplus: "\u2A2D",
  lotimes: "\u2A34",
  lowast: "\u2217",
  lowbar: "_",
  loz: "\u25CA",
  lozenge: "\u25CA",
  lozf: "\u29EB",
  lpar: "(",
  lparlt: "\u2993",
  lrarr: "\u21C6",
  lrcorner: "\u231F",
  lrhar: "\u21CB",
  lrhard: "\u296D",
  lrm: "\u200E",
  lrtri: "\u22BF",
  lsaquo: "\u2039",
  lscr: "\u{1D4C1}",
  lsh: "\u21B0",
  lsim: "\u2272",
  lsime: "\u2A8D",
  lsimg: "\u2A8F",
  lsqb: "[",
  lsquo: "\u2018",
  lsquor: "\u201A",
  lstrok: "\u0142",
  lt: "<",
  ltcc: "\u2AA6",
  ltcir: "\u2A79",
  ltdot: "\u22D6",
  lthree: "\u22CB",
  ltimes: "\u22C9",
  ltlarr: "\u2976",
  ltquest: "\u2A7B",
  ltrPar: "\u2996",
  ltri: "\u25C3",
  ltrie: "\u22B4",
  ltrif: "\u25C2",
  lurdshar: "\u294A",
  luruhar: "\u2966",
  lvertneqq: "\u2268\uFE00",
  lvnE: "\u2268\uFE00",
  mDDot: "\u223A",
  macr: "\xAF",
  male: "\u2642",
  malt: "\u2720",
  maltese: "\u2720",
  map: "\u21A6",
  mapsto: "\u21A6",
  mapstodown: "\u21A7",
  mapstoleft: "\u21A4",
  mapstoup: "\u21A5",
  marker: "\u25AE",
  mcomma: "\u2A29",
  mcy: "\u043C",
  mdash: "\u2014",
  measuredangle: "\u2221",
  mfr: "\u{1D52A}",
  mho: "\u2127",
  micro: "\xB5",
  mid: "\u2223",
  midast: "*",
  midcir: "\u2AF0",
  middot: "\xB7",
  minus: "\u2212",
  minusb: "\u229F",
  minusd: "\u2238",
  minusdu: "\u2A2A",
  mlcp: "\u2ADB",
  mldr: "\u2026",
  mnplus: "\u2213",
  models: "\u22A7",
  mopf: "\u{1D55E}",
  mp: "\u2213",
  mscr: "\u{1D4C2}",
  mstpos: "\u223E",
  mu: "\u03BC",
  multimap: "\u22B8",
  mumap: "\u22B8",
  nGg: "\u22D9\u0338",
  nGt: "\u226B\u20D2",
  nGtv: "\u226B\u0338",
  nLeftarrow: "\u21CD",
  nLeftrightarrow: "\u21CE",
  nLl: "\u22D8\u0338",
  nLt: "\u226A\u20D2",
  nLtv: "\u226A\u0338",
  nRightarrow: "\u21CF",
  nVDash: "\u22AF",
  nVdash: "\u22AE",
  nabla: "\u2207",
  nacute: "\u0144",
  nang: "\u2220\u20D2",
  nap: "\u2249",
  napE: "\u2A70\u0338",
  napid: "\u224B\u0338",
  napos: "\u0149",
  napprox: "\u2249",
  natur: "\u266E",
  natural: "\u266E",
  naturals: "\u2115",
  nbsp: "\xA0",
  nbump: "\u224E\u0338",
  nbumpe: "\u224F\u0338",
  ncap: "\u2A43",
  ncaron: "\u0148",
  ncedil: "\u0146",
  ncong: "\u2247",
  ncongdot: "\u2A6D\u0338",
  ncup: "\u2A42",
  ncy: "\u043D",
  ndash: "\u2013",
  ne: "\u2260",
  neArr: "\u21D7",
  nearhk: "\u2924",
  nearr: "\u2197",
  nearrow: "\u2197",
  nedot: "\u2250\u0338",
  nequiv: "\u2262",
  nesear: "\u2928",
  nesim: "\u2242\u0338",
  nexist: "\u2204",
  nexists: "\u2204",
  nfr: "\u{1D52B}",
  ngE: "\u2267\u0338",
  nge: "\u2271",
  ngeq: "\u2271",
  ngeqq: "\u2267\u0338",
  ngeqslant: "\u2A7E\u0338",
  nges: "\u2A7E\u0338",
  ngsim: "\u2275",
  ngt: "\u226F",
  ngtr: "\u226F",
  nhArr: "\u21CE",
  nharr: "\u21AE",
  nhpar: "\u2AF2",
  ni: "\u220B",
  nis: "\u22FC",
  nisd: "\u22FA",
  niv: "\u220B",
  njcy: "\u045A",
  nlArr: "\u21CD",
  nlE: "\u2266\u0338",
  nlarr: "\u219A",
  nldr: "\u2025",
  nle: "\u2270",
  nleftarrow: "\u219A",
  nleftrightarrow: "\u21AE",
  nleq: "\u2270",
  nleqq: "\u2266\u0338",
  nleqslant: "\u2A7D\u0338",
  nles: "\u2A7D\u0338",
  nless: "\u226E",
  nlsim: "\u2274",
  nlt: "\u226E",
  nltri: "\u22EA",
  nltrie: "\u22EC",
  nmid: "\u2224",
  nopf: "\u{1D55F}",
  not: "\xAC",
  notin: "\u2209",
  notinE: "\u22F9\u0338",
  notindot: "\u22F5\u0338",
  notinva: "\u2209",
  notinvb: "\u22F7",
  notinvc: "\u22F6",
  notni: "\u220C",
  notniva: "\u220C",
  notnivb: "\u22FE",
  notnivc: "\u22FD",
  npar: "\u2226",
  nparallel: "\u2226",
  nparsl: "\u2AFD\u20E5",
  npart: "\u2202\u0338",
  npolint: "\u2A14",
  npr: "\u2280",
  nprcue: "\u22E0",
  npre: "\u2AAF\u0338",
  nprec: "\u2280",
  npreceq: "\u2AAF\u0338",
  nrArr: "\u21CF",
  nrarr: "\u219B",
  nrarrc: "\u2933\u0338",
  nrarrw: "\u219D\u0338",
  nrightarrow: "\u219B",
  nrtri: "\u22EB",
  nrtrie: "\u22ED",
  nsc: "\u2281",
  nsccue: "\u22E1",
  nsce: "\u2AB0\u0338",
  nscr: "\u{1D4C3}",
  nshortmid: "\u2224",
  nshortparallel: "\u2226",
  nsim: "\u2241",
  nsime: "\u2244",
  nsimeq: "\u2244",
  nsmid: "\u2224",
  nspar: "\u2226",
  nsqsube: "\u22E2",
  nsqsupe: "\u22E3",
  nsub: "\u2284",
  nsubE: "\u2AC5\u0338",
  nsube: "\u2288",
  nsubset: "\u2282\u20D2",
  nsubseteq: "\u2288",
  nsubseteqq: "\u2AC5\u0338",
  nsucc: "\u2281",
  nsucceq: "\u2AB0\u0338",
  nsup: "\u2285",
  nsupE: "\u2AC6\u0338",
  nsupe: "\u2289",
  nsupset: "\u2283\u20D2",
  nsupseteq: "\u2289",
  nsupseteqq: "\u2AC6\u0338",
  ntgl: "\u2279",
  ntilde: "\xF1",
  ntlg: "\u2278",
  ntriangleleft: "\u22EA",
  ntrianglelefteq: "\u22EC",
  ntriangleright: "\u22EB",
  ntrianglerighteq: "\u22ED",
  nu: "\u03BD",
  num: "#",
  numero: "\u2116",
  numsp: "\u2007",
  nvDash: "\u22AD",
  nvHarr: "\u2904",
  nvap: "\u224D\u20D2",
  nvdash: "\u22AC",
  nvge: "\u2265\u20D2",
  nvgt: ">\u20D2",
  nvinfin: "\u29DE",
  nvlArr: "\u2902",
  nvle: "\u2264\u20D2",
  nvlt: "<\u20D2",
  nvltrie: "\u22B4\u20D2",
  nvrArr: "\u2903",
  nvrtrie: "\u22B5\u20D2",
  nvsim: "\u223C\u20D2",
  nwArr: "\u21D6",
  nwarhk: "\u2923",
  nwarr: "\u2196",
  nwarrow: "\u2196",
  nwnear: "\u2927",
  oS: "\u24C8",
  oacute: "\xF3",
  oast: "\u229B",
  ocir: "\u229A",
  ocirc: "\xF4",
  ocy: "\u043E",
  odash: "\u229D",
  odblac: "\u0151",
  odiv: "\u2A38",
  odot: "\u2299",
  odsold: "\u29BC",
  oelig: "\u0153",
  ofcir: "\u29BF",
  ofr: "\u{1D52C}",
  ogon: "\u02DB",
  ograve: "\xF2",
  ogt: "\u29C1",
  ohbar: "\u29B5",
  ohm: "\u03A9",
  oint: "\u222E",
  olarr: "\u21BA",
  olcir: "\u29BE",
  olcross: "\u29BB",
  oline: "\u203E",
  olt: "\u29C0",
  omacr: "\u014D",
  omega: "\u03C9",
  omicron: "\u03BF",
  omid: "\u29B6",
  ominus: "\u2296",
  oopf: "\u{1D560}",
  opar: "\u29B7",
  operp: "\u29B9",
  oplus: "\u2295",
  or: "\u2228",
  orarr: "\u21BB",
  ord: "\u2A5D",
  order: "\u2134",
  orderof: "\u2134",
  ordf: "\xAA",
  ordm: "\xBA",
  origof: "\u22B6",
  oror: "\u2A56",
  orslope: "\u2A57",
  orv: "\u2A5B",
  oscr: "\u2134",
  oslash: "\xF8",
  osol: "\u2298",
  otilde: "\xF5",
  otimes: "\u2297",
  otimesas: "\u2A36",
  ouml: "\xF6",
  ovbar: "\u233D",
  par: "\u2225",
  para: "\xB6",
  parallel: "\u2225",
  parsim: "\u2AF3",
  parsl: "\u2AFD",
  part: "\u2202",
  pcy: "\u043F",
  percnt: "%",
  period: ".",
  permil: "\u2030",
  perp: "\u22A5",
  pertenk: "\u2031",
  pfr: "\u{1D52D}",
  phi: "\u03C6",
  phiv: "\u03D5",
  phmmat: "\u2133",
  phone: "\u260E",
  pi: "\u03C0",
  pitchfork: "\u22D4",
  piv: "\u03D6",
  planck: "\u210F",
  planckh: "\u210E",
  plankv: "\u210F",
  plus: "+",
  plusacir: "\u2A23",
  plusb: "\u229E",
  pluscir: "\u2A22",
  plusdo: "\u2214",
  plusdu: "\u2A25",
  pluse: "\u2A72",
  plusmn: "\xB1",
  plussim: "\u2A26",
  plustwo: "\u2A27",
  pm: "\xB1",
  pointint: "\u2A15",
  popf: "\u{1D561}",
  pound: "\xA3",
  pr: "\u227A",
  prE: "\u2AB3",
  prap: "\u2AB7",
  prcue: "\u227C",
  pre: "\u2AAF",
  prec: "\u227A",
  precapprox: "\u2AB7",
  preccurlyeq: "\u227C",
  preceq: "\u2AAF",
  precnapprox: "\u2AB9",
  precneqq: "\u2AB5",
  precnsim: "\u22E8",
  precsim: "\u227E",
  prime: "\u2032",
  primes: "\u2119",
  prnE: "\u2AB5",
  prnap: "\u2AB9",
  prnsim: "\u22E8",
  prod: "\u220F",
  profalar: "\u232E",
  profline: "\u2312",
  profsurf: "\u2313",
  prop: "\u221D",
  propto: "\u221D",
  prsim: "\u227E",
  prurel: "\u22B0",
  pscr: "\u{1D4C5}",
  psi: "\u03C8",
  puncsp: "\u2008",
  qfr: "\u{1D52E}",
  qint: "\u2A0C",
  qopf: "\u{1D562}",
  qprime: "\u2057",
  qscr: "\u{1D4C6}",
  quaternions: "\u210D",
  quatint: "\u2A16",
  quest: "?",
  questeq: "\u225F",
  quot: '"',
  rAarr: "\u21DB",
  rArr: "\u21D2",
  rAtail: "\u291C",
  rBarr: "\u290F",
  rHar: "\u2964",
  race: "\u223D\u0331",
  racute: "\u0155",
  radic: "\u221A",
  raemptyv: "\u29B3",
  rang: "\u27E9",
  rangd: "\u2992",
  range: "\u29A5",
  rangle: "\u27E9",
  raquo: "\xBB",
  rarr: "\u2192",
  rarrap: "\u2975",
  rarrb: "\u21E5",
  rarrbfs: "\u2920",
  rarrc: "\u2933",
  rarrfs: "\u291E",
  rarrhk: "\u21AA",
  rarrlp: "\u21AC",
  rarrpl: "\u2945",
  rarrsim: "\u2974",
  rarrtl: "\u21A3",
  rarrw: "\u219D",
  ratail: "\u291A",
  ratio: "\u2236",
  rationals: "\u211A",
  rbarr: "\u290D",
  rbbrk: "\u2773",
  rbrace: "}",
  rbrack: "]",
  rbrke: "\u298C",
  rbrksld: "\u298E",
  rbrkslu: "\u2990",
  rcaron: "\u0159",
  rcedil: "\u0157",
  rceil: "\u2309",
  rcub: "}",
  rcy: "\u0440",
  rdca: "\u2937",
  rdldhar: "\u2969",
  rdquo: "\u201D",
  rdquor: "\u201D",
  rdsh: "\u21B3",
  real: "\u211C",
  realine: "\u211B",
  realpart: "\u211C",
  reals: "\u211D",
  rect: "\u25AD",
  reg: "\xAE",
  rfisht: "\u297D",
  rfloor: "\u230B",
  rfr: "\u{1D52F}",
  rhard: "\u21C1",
  rharu: "\u21C0",
  rharul: "\u296C",
  rho: "\u03C1",
  rhov: "\u03F1",
  rightarrow: "\u2192",
  rightarrowtail: "\u21A3",
  rightharpoondown: "\u21C1",
  rightharpoonup: "\u21C0",
  rightleftarrows: "\u21C4",
  rightleftharpoons: "\u21CC",
  rightrightarrows: "\u21C9",
  rightsquigarrow: "\u219D",
  rightthreetimes: "\u22CC",
  ring: "\u02DA",
  risingdotseq: "\u2253",
  rlarr: "\u21C4",
  rlhar: "\u21CC",
  rlm: "\u200F",
  rmoust: "\u23B1",
  rmoustache: "\u23B1",
  rnmid: "\u2AEE",
  roang: "\u27ED",
  roarr: "\u21FE",
  robrk: "\u27E7",
  ropar: "\u2986",
  ropf: "\u{1D563}",
  roplus: "\u2A2E",
  rotimes: "\u2A35",
  rpar: ")",
  rpargt: "\u2994",
  rppolint: "\u2A12",
  rrarr: "\u21C9",
  rsaquo: "\u203A",
  rscr: "\u{1D4C7}",
  rsh: "\u21B1",
  rsqb: "]",
  rsquo: "\u2019",
  rsquor: "\u2019",
  rthree: "\u22CC",
  rtimes: "\u22CA",
  rtri: "\u25B9",
  rtrie: "\u22B5",
  rtrif: "\u25B8",
  rtriltri: "\u29CE",
  ruluhar: "\u2968",
  rx: "\u211E",
  sacute: "\u015B",
  sbquo: "\u201A",
  sc: "\u227B",
  scE: "\u2AB4",
  scap: "\u2AB8",
  scaron: "\u0161",
  sccue: "\u227D",
  sce: "\u2AB0",
  scedil: "\u015F",
  scirc: "\u015D",
  scnE: "\u2AB6",
  scnap: "\u2ABA",
  scnsim: "\u22E9",
  scpolint: "\u2A13",
  scsim: "\u227F",
  scy: "\u0441",
  sdot: "\u22C5",
  sdotb: "\u22A1",
  sdote: "\u2A66",
  seArr: "\u21D8",
  searhk: "\u2925",
  searr: "\u2198",
  searrow: "\u2198",
  sect: "\xA7",
  semi: ";",
  seswar: "\u2929",
  setminus: "\u2216",
  setmn: "\u2216",
  sext: "\u2736",
  sfr: "\u{1D530}",
  sfrown: "\u2322",
  sharp: "\u266F",
  shchcy: "\u0449",
  shcy: "\u0448",
  shortmid: "\u2223",
  shortparallel: "\u2225",
  shy: "\xAD",
  sigma: "\u03C3",
  sigmaf: "\u03C2",
  sigmav: "\u03C2",
  sim: "\u223C",
  simdot: "\u2A6A",
  sime: "\u2243",
  simeq: "\u2243",
  simg: "\u2A9E",
  simgE: "\u2AA0",
  siml: "\u2A9D",
  simlE: "\u2A9F",
  simne: "\u2246",
  simplus: "\u2A24",
  simrarr: "\u2972",
  slarr: "\u2190",
  smallsetminus: "\u2216",
  smashp: "\u2A33",
  smeparsl: "\u29E4",
  smid: "\u2223",
  smile: "\u2323",
  smt: "\u2AAA",
  smte: "\u2AAC",
  smtes: "\u2AAC\uFE00",
  softcy: "\u044C",
  sol: "/",
  solb: "\u29C4",
  solbar: "\u233F",
  sopf: "\u{1D564}",
  spades: "\u2660",
  spadesuit: "\u2660",
  spar: "\u2225",
  sqcap: "\u2293",
  sqcaps: "\u2293\uFE00",
  sqcup: "\u2294",
  sqcups: "\u2294\uFE00",
  sqsub: "\u228F",
  sqsube: "\u2291",
  sqsubset: "\u228F",
  sqsubseteq: "\u2291",
  sqsup: "\u2290",
  sqsupe: "\u2292",
  sqsupset: "\u2290",
  sqsupseteq: "\u2292",
  squ: "\u25A1",
  square: "\u25A1",
  squarf: "\u25AA",
  squf: "\u25AA",
  srarr: "\u2192",
  sscr: "\u{1D4C8}",
  ssetmn: "\u2216",
  ssmile: "\u2323",
  sstarf: "\u22C6",
  star: "\u2606",
  starf: "\u2605",
  straightepsilon: "\u03F5",
  straightphi: "\u03D5",
  strns: "\xAF",
  sub: "\u2282",
  subE: "\u2AC5",
  subdot: "\u2ABD",
  sube: "\u2286",
  subedot: "\u2AC3",
  submult: "\u2AC1",
  subnE: "\u2ACB",
  subne: "\u228A",
  subplus: "\u2ABF",
  subrarr: "\u2979",
  subset: "\u2282",
  subseteq: "\u2286",
  subseteqq: "\u2AC5",
  subsetneq: "\u228A",
  subsetneqq: "\u2ACB",
  subsim: "\u2AC7",
  subsub: "\u2AD5",
  subsup: "\u2AD3",
  succ: "\u227B",
  succapprox: "\u2AB8",
  succcurlyeq: "\u227D",
  succeq: "\u2AB0",
  succnapprox: "\u2ABA",
  succneqq: "\u2AB6",
  succnsim: "\u22E9",
  succsim: "\u227F",
  sum: "\u2211",
  sung: "\u266A",
  sup1: "\xB9",
  sup2: "\xB2",
  sup3: "\xB3",
  sup: "\u2283",
  supE: "\u2AC6",
  supdot: "\u2ABE",
  supdsub: "\u2AD8",
  supe: "\u2287",
  supedot: "\u2AC4",
  suphsol: "\u27C9",
  suphsub: "\u2AD7",
  suplarr: "\u297B",
  supmult: "\u2AC2",
  supnE: "\u2ACC",
  supne: "\u228B",
  supplus: "\u2AC0",
  supset: "\u2283",
  supseteq: "\u2287",
  supseteqq: "\u2AC6",
  supsetneq: "\u228B",
  supsetneqq: "\u2ACC",
  supsim: "\u2AC8",
  supsub: "\u2AD4",
  supsup: "\u2AD6",
  swArr: "\u21D9",
  swarhk: "\u2926",
  swarr: "\u2199",
  swarrow: "\u2199",
  swnwar: "\u292A",
  szlig: "\xDF",
  target: "\u2316",
  tau: "\u03C4",
  tbrk: "\u23B4",
  tcaron: "\u0165",
  tcedil: "\u0163",
  tcy: "\u0442",
  tdot: "\u20DB",
  telrec: "\u2315",
  tfr: "\u{1D531}",
  there4: "\u2234",
  therefore: "\u2234",
  theta: "\u03B8",
  thetasym: "\u03D1",
  thetav: "\u03D1",
  thickapprox: "\u2248",
  thicksim: "\u223C",
  thinsp: "\u2009",
  thkap: "\u2248",
  thksim: "\u223C",
  thorn: "\xFE",
  tilde: "\u02DC",
  times: "\xD7",
  timesb: "\u22A0",
  timesbar: "\u2A31",
  timesd: "\u2A30",
  tint: "\u222D",
  toea: "\u2928",
  top: "\u22A4",
  topbot: "\u2336",
  topcir: "\u2AF1",
  topf: "\u{1D565}",
  topfork: "\u2ADA",
  tosa: "\u2929",
  tprime: "\u2034",
  trade: "\u2122",
  triangle: "\u25B5",
  triangledown: "\u25BF",
  triangleleft: "\u25C3",
  trianglelefteq: "\u22B4",
  triangleq: "\u225C",
  triangleright: "\u25B9",
  trianglerighteq: "\u22B5",
  tridot: "\u25EC",
  trie: "\u225C",
  triminus: "\u2A3A",
  triplus: "\u2A39",
  trisb: "\u29CD",
  tritime: "\u2A3B",
  trpezium: "\u23E2",
  tscr: "\u{1D4C9}",
  tscy: "\u0446",
  tshcy: "\u045B",
  tstrok: "\u0167",
  twixt: "\u226C",
  twoheadleftarrow: "\u219E",
  twoheadrightarrow: "\u21A0",
  uArr: "\u21D1",
  uHar: "\u2963",
  uacute: "\xFA",
  uarr: "\u2191",
  ubrcy: "\u045E",
  ubreve: "\u016D",
  ucirc: "\xFB",
  ucy: "\u0443",
  udarr: "\u21C5",
  udblac: "\u0171",
  udhar: "\u296E",
  ufisht: "\u297E",
  ufr: "\u{1D532}",
  ugrave: "\xF9",
  uharl: "\u21BF",
  uharr: "\u21BE",
  uhblk: "\u2580",
  ulcorn: "\u231C",
  ulcorner: "\u231C",
  ulcrop: "\u230F",
  ultri: "\u25F8",
  umacr: "\u016B",
  uml: "\xA8",
  uogon: "\u0173",
  uopf: "\u{1D566}",
  uparrow: "\u2191",
  updownarrow: "\u2195",
  upharpoonleft: "\u21BF",
  upharpoonright: "\u21BE",
  uplus: "\u228E",
  upsi: "\u03C5",
  upsih: "\u03D2",
  upsilon: "\u03C5",
  upuparrows: "\u21C8",
  urcorn: "\u231D",
  urcorner: "\u231D",
  urcrop: "\u230E",
  uring: "\u016F",
  urtri: "\u25F9",
  uscr: "\u{1D4CA}",
  utdot: "\u22F0",
  utilde: "\u0169",
  utri: "\u25B5",
  utrif: "\u25B4",
  uuarr: "\u21C8",
  uuml: "\xFC",
  uwangle: "\u29A7",
  vArr: "\u21D5",
  vBar: "\u2AE8",
  vBarv: "\u2AE9",
  vDash: "\u22A8",
  vangrt: "\u299C",
  varepsilon: "\u03F5",
  varkappa: "\u03F0",
  varnothing: "\u2205",
  varphi: "\u03D5",
  varpi: "\u03D6",
  varpropto: "\u221D",
  varr: "\u2195",
  varrho: "\u03F1",
  varsigma: "\u03C2",
  varsubsetneq: "\u228A\uFE00",
  varsubsetneqq: "\u2ACB\uFE00",
  varsupsetneq: "\u228B\uFE00",
  varsupsetneqq: "\u2ACC\uFE00",
  vartheta: "\u03D1",
  vartriangleleft: "\u22B2",
  vartriangleright: "\u22B3",
  vcy: "\u0432",
  vdash: "\u22A2",
  vee: "\u2228",
  veebar: "\u22BB",
  veeeq: "\u225A",
  vellip: "\u22EE",
  verbar: "|",
  vert: "|",
  vfr: "\u{1D533}",
  vltri: "\u22B2",
  vnsub: "\u2282\u20D2",
  vnsup: "\u2283\u20D2",
  vopf: "\u{1D567}",
  vprop: "\u221D",
  vrtri: "\u22B3",
  vscr: "\u{1D4CB}",
  vsubnE: "\u2ACB\uFE00",
  vsubne: "\u228A\uFE00",
  vsupnE: "\u2ACC\uFE00",
  vsupne: "\u228B\uFE00",
  vzigzag: "\u299A",
  wcirc: "\u0175",
  wedbar: "\u2A5F",
  wedge: "\u2227",
  wedgeq: "\u2259",
  weierp: "\u2118",
  wfr: "\u{1D534}",
  wopf: "\u{1D568}",
  wp: "\u2118",
  wr: "\u2240",
  wreath: "\u2240",
  wscr: "\u{1D4CC}",
  xcap: "\u22C2",
  xcirc: "\u25EF",
  xcup: "\u22C3",
  xdtri: "\u25BD",
  xfr: "\u{1D535}",
  xhArr: "\u27FA",
  xharr: "\u27F7",
  xi: "\u03BE",
  xlArr: "\u27F8",
  xlarr: "\u27F5",
  xmap: "\u27FC",
  xnis: "\u22FB",
  xodot: "\u2A00",
  xopf: "\u{1D569}",
  xoplus: "\u2A01",
  xotime: "\u2A02",
  xrArr: "\u27F9",
  xrarr: "\u27F6",
  xscr: "\u{1D4CD}",
  xsqcup: "\u2A06",
  xuplus: "\u2A04",
  xutri: "\u25B3",
  xvee: "\u22C1",
  xwedge: "\u22C0",
  yacute: "\xFD",
  yacy: "\u044F",
  ycirc: "\u0177",
  ycy: "\u044B",
  yen: "\xA5",
  yfr: "\u{1D536}",
  yicy: "\u0457",
  yopf: "\u{1D56A}",
  yscr: "\u{1D4CE}",
  yucy: "\u044E",
  yuml: "\xFF",
  zacute: "\u017A",
  zcaron: "\u017E",
  zcy: "\u0437",
  zdot: "\u017C",
  zeetrf: "\u2128",
  zeta: "\u03B6",
  zfr: "\u{1D537}",
  zhcy: "\u0436",
  zigrarr: "\u21DD",
  zopf: "\u{1D56B}",
  zscr: "\u{1D4CF}",
  zwj: "\u200D",
  zwnj: "\u200C"
};

// node_modules/.pnpm/decode-named-character-reference@1.0.2/node_modules/decode-named-character-reference/index.js
var own2 = {}.hasOwnProperty;
function decodeNamedCharacterReference(value) {
  return own2.call(characterEntities, value) ? characterEntities[value] : !1;
}

// node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/character-reference.js
var characterReference = {
  name: "characterReference",
  tokenize: tokenizeCharacterReference
};
function tokenizeCharacterReference(effects, ok2, nok) {
  let self = this, size = 0, max, test;
  return start;
  function start(code2) {
    return effects.enter("characterReference"), effects.enter("characterReferenceMarker"), effects.consume(code2), effects.exit("characterReferenceMarker"), open;
  }
  function open(code2) {
    return code2 === 35 ? (effects.enter("characterReferenceMarkerNumeric"), effects.consume(code2), effects.exit("characterReferenceMarkerNumeric"), numeric) : (effects.enter("characterReferenceValue"), max = 31, test = asciiAlphanumeric, value(code2));
  }
  function numeric(code2) {
    return code2 === 88 || code2 === 120 ? (effects.enter("characterReferenceMarkerHexadecimal"), effects.consume(code2), effects.exit("characterReferenceMarkerHexadecimal"), effects.enter("characterReferenceValue"), max = 6, test = asciiHexDigit, value) : (effects.enter("characterReferenceValue"), max = 7, test = asciiDigit, value(code2));
  }
  function value(code2) {
    let token;
    return code2 === 59 && size ? (token = effects.exit("characterReferenceValue"), test === asciiAlphanumeric && !decodeNamedCharacterReference(self.sliceSerialize(token)) ? nok(code2) : (effects.enter("characterReferenceMarker"), effects.consume(code2), effects.exit("characterReferenceMarker"), effects.exit("characterReference"), ok2)) : test(code2) && size++ < max ? (effects.consume(code2), value) : nok(code2);
  }
}

// node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/code-fenced.js
var codeFenced = {
  name: "codeFenced",
  tokenize: tokenizeCodeFenced,
  concrete: !0
};
function tokenizeCodeFenced(effects, ok2, nok) {
  let self = this, closingFenceConstruct = {
    tokenize: tokenizeClosingFence,
    partial: !0
  }, nonLazyLine = {
    tokenize: tokenizeNonLazyLine,
    partial: !0
  }, tail = this.events[this.events.length - 1], initialPrefix = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], !0).length : 0, sizeOpen = 0, marker;
  return start;
  function start(code2) {
    return effects.enter("codeFenced"), effects.enter("codeFencedFence"), effects.enter("codeFencedFenceSequence"), marker = code2, sequenceOpen(code2);
  }
  function sequenceOpen(code2) {
    return code2 === marker ? (effects.consume(code2), sizeOpen++, sequenceOpen) : (effects.exit("codeFencedFenceSequence"), sizeOpen < 3 ? nok(code2) : factorySpace(effects, infoOpen, "whitespace")(code2));
  }
  function infoOpen(code2) {
    return code2 === null || markdownLineEnding(code2) ? openAfter(code2) : (effects.enter("codeFencedFenceInfo"), effects.enter("chunkString", {
      contentType: "string"
    }), info(code2));
  }
  function info(code2) {
    return code2 === null || markdownLineEndingOrSpace(code2) ? (effects.exit("chunkString"), effects.exit("codeFencedFenceInfo"), factorySpace(effects, infoAfter, "whitespace")(code2)) : code2 === 96 && code2 === marker ? nok(code2) : (effects.consume(code2), info);
  }
  function infoAfter(code2) {
    return code2 === null || markdownLineEnding(code2) ? openAfter(code2) : (effects.enter("codeFencedFenceMeta"), effects.enter("chunkString", {
      contentType: "string"
    }), meta2(code2));
  }
  function meta2(code2) {
    return code2 === null || markdownLineEnding(code2) ? (effects.exit("chunkString"), effects.exit("codeFencedFenceMeta"), openAfter(code2)) : code2 === 96 && code2 === marker ? nok(code2) : (effects.consume(code2), meta2);
  }
  function openAfter(code2) {
    return effects.exit("codeFencedFence"), self.interrupt ? ok2(code2) : contentStart(code2);
  }
  function contentStart(code2) {
    return code2 === null ? after(code2) : markdownLineEnding(code2) ? effects.attempt(nonLazyLine, effects.attempt(closingFenceConstruct, after, initialPrefix ? factorySpace(effects, contentStart, "linePrefix", initialPrefix + 1) : contentStart), after)(code2) : (effects.enter("codeFlowValue"), contentContinue(code2));
  }
  function contentContinue(code2) {
    return code2 === null || markdownLineEnding(code2) ? (effects.exit("codeFlowValue"), contentStart(code2)) : (effects.consume(code2), contentContinue);
  }
  function after(code2) {
    return effects.exit("codeFenced"), ok2(code2);
  }
  function tokenizeNonLazyLine(effects2, ok3, nok2) {
    let self2 = this;
    return start2;
    function start2(code2) {
      return effects2.enter("lineEnding"), effects2.consume(code2), effects2.exit("lineEnding"), lineStart;
    }
    function lineStart(code2) {
      return self2.parser.lazy[self2.now().line] ? nok2(code2) : ok3(code2);
    }
  }
  function tokenizeClosingFence(effects2, ok3, nok2) {
    let size = 0;
    return factorySpace(effects2, closingSequenceStart, "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
    function closingSequenceStart(code2) {
      return effects2.enter("codeFencedFence"), effects2.enter("codeFencedFenceSequence"), closingSequence(code2);
    }
    function closingSequence(code2) {
      return code2 === marker ? (effects2.consume(code2), size++, closingSequence) : size < sizeOpen ? nok2(code2) : (effects2.exit("codeFencedFenceSequence"), factorySpace(effects2, closingSequenceEnd, "whitespace")(code2));
    }
    function closingSequenceEnd(code2) {
      return code2 === null || markdownLineEnding(code2) ? (effects2.exit("codeFencedFence"), ok3(code2)) : nok2(code2);
    }
  }
}

// node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/code-indented.js
var codeIndented = {
  name: "codeIndented",
  tokenize: tokenizeCodeIndented
}, indentedContent = {
  tokenize: tokenizeIndentedContent,
  partial: !0
};
function tokenizeCodeIndented(effects, ok2, nok) {
  let self = this;
  return start;
  function start(code2) {
    return effects.enter("codeIndented"), factorySpace(effects, afterStartPrefix, "linePrefix", 4 + 1)(code2);
  }
  function afterStartPrefix(code2) {
    let tail = self.events[self.events.length - 1];
    return tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], !0).length >= 4 ? afterPrefix(code2) : nok(code2);
  }
  function afterPrefix(code2) {
    return code2 === null ? after(code2) : markdownLineEnding(code2) ? effects.attempt(indentedContent, afterPrefix, after)(code2) : (effects.enter("codeFlowValue"), content3(code2));
  }
  function content3(code2) {
    return code2 === null || markdownLineEnding(code2) ? (effects.exit("codeFlowValue"), afterPrefix(code2)) : (effects.consume(code2), content3);
  }
  function after(code2) {
    return effects.exit("codeIndented"), ok2(code2);
  }
}
function tokenizeIndentedContent(effects, ok2, nok) {
  let self = this;
  return start;
  function start(code2) {
    return self.parser.lazy[self.now().line] ? nok(code2) : markdownLineEnding(code2) ? (effects.enter("lineEnding"), effects.consume(code2), effects.exit("lineEnding"), start) : factorySpace(effects, afterPrefix, "linePrefix", 4 + 1)(code2);
  }
  function afterPrefix(code2) {
    let tail = self.events[self.events.length - 1];
    return tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], !0).length >= 4 ? ok2(code2) : markdownLineEnding(code2) ? start(code2) : nok(code2);
  }
}

// node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/code-text.js
var codeText = {
  name: "codeText",
  tokenize: tokenizeCodeText,
  resolve: resolveCodeText,
  previous
};
function resolveCodeText(events) {
  let tailExitIndex = events.length - 4, headEnterIndex = 3, index2, enter;
  if ((events[headEnterIndex][1].type === "lineEnding" || events[headEnterIndex][1].type === "space") && (events[tailExitIndex][1].type === "lineEnding" || events[tailExitIndex][1].type === "space")) {
    for (index2 = headEnterIndex; ++index2 < tailExitIndex; )
      if (events[index2][1].type === "codeTextData") {
        events[headEnterIndex][1].type = "codeTextPadding", events[tailExitIndex][1].type = "codeTextPadding", headEnterIndex += 2, tailExitIndex -= 2;
        break;
      }
  }
  for (index2 = headEnterIndex - 1, tailExitIndex++; ++index2 <= tailExitIndex; )
    enter === void 0 ? index2 !== tailExitIndex && events[index2][1].type !== "lineEnding" && (enter = index2) : (index2 === tailExitIndex || events[index2][1].type === "lineEnding") && (events[enter][1].type = "codeTextData", index2 !== enter + 2 && (events[enter][1].end = events[index2 - 1][1].end, events.splice(enter + 2, index2 - enter - 2), tailExitIndex -= index2 - enter - 2, index2 = enter + 2), enter = void 0);
  return events;
}
function previous(code2) {
  return code2 !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function tokenizeCodeText(effects, ok2, nok) {
  let self = this, sizeOpen = 0, size, token;
  return start;
  function start(code2) {
    return effects.enter("codeText"), effects.enter("codeTextSequence"), openingSequence(code2);
  }
  function openingSequence(code2) {
    return code2 === 96 ? (effects.consume(code2), sizeOpen++, openingSequence) : (effects.exit("codeTextSequence"), gap(code2));
  }
  function gap(code2) {
    return code2 === null ? nok(code2) : code2 === 96 ? (token = effects.enter("codeTextSequence"), size = 0, closingSequence(code2)) : code2 === 32 ? (effects.enter("space"), effects.consume(code2), effects.exit("space"), gap) : markdownLineEnding(code2) ? (effects.enter("lineEnding"), effects.consume(code2), effects.exit("lineEnding"), gap) : (effects.enter("codeTextData"), data(code2));
  }
  function data(code2) {
    return code2 === null || code2 === 32 || code2 === 96 || markdownLineEnding(code2) ? (effects.exit("codeTextData"), gap(code2)) : (effects.consume(code2), data);
  }
  function closingSequence(code2) {
    return code2 === 96 ? (effects.consume(code2), size++, closingSequence) : size === sizeOpen ? (effects.exit("codeTextSequence"), effects.exit("codeText"), ok2(code2)) : (token.type = "codeTextData", data(code2));
  }
}

// node_modules/.pnpm/micromark-util-subtokenize@1.0.2/node_modules/micromark-util-subtokenize/index.js
function subtokenize(events) {
  let jumps = {}, index2 = -1, event, lineIndex, otherIndex, otherEvent, parameters, subevents, more;
  for (; ++index2 < events.length; ) {
    for (; index2 in jumps; )
      index2 = jumps[index2];
    if (event = events[index2], index2 && event[1].type === "chunkFlow" && events[index2 - 1][1].type === "listItemPrefix" && (subevents = event[1]._tokenizer.events, otherIndex = 0, otherIndex < subevents.length && subevents[otherIndex][1].type === "lineEndingBlank" && (otherIndex += 2), otherIndex < subevents.length && subevents[otherIndex][1].type === "content"))
      for (; ++otherIndex < subevents.length && subevents[otherIndex][1].type !== "content"; )
        subevents[otherIndex][1].type === "chunkText" && (subevents[otherIndex][1]._isInFirstContentOfListItem = !0, otherIndex++);
    if (event[0] === "enter")
      event[1].contentType && (Object.assign(jumps, subcontent(events, index2)), index2 = jumps[index2], more = !0);
    else if (event[1]._container) {
      for (otherIndex = index2, lineIndex = void 0; otherIndex-- && (otherEvent = events[otherIndex], otherEvent[1].type === "lineEnding" || otherEvent[1].type === "lineEndingBlank"); )
        otherEvent[0] === "enter" && (lineIndex && (events[lineIndex][1].type = "lineEndingBlank"), otherEvent[1].type = "lineEnding", lineIndex = otherIndex);
      lineIndex && (event[1].end = Object.assign({}, events[lineIndex][1].start), parameters = events.slice(lineIndex, index2), parameters.unshift(event), splice(events, lineIndex, index2 - lineIndex + 1, parameters));
    }
  }
  return !more;
}
function subcontent(events, eventIndex) {
  let token = events[eventIndex][1], context = events[eventIndex][2], startPosition = eventIndex - 1, startPositions = [], tokenizer = token._tokenizer || context.parser[token.contentType](token.start), childEvents = tokenizer.events, jumps = [], gaps = {}, stream, previous2, index2 = -1, current = token, adjust = 0, start = 0, breaks = [start];
  for (; current; ) {
    for (; events[++startPosition][1] !== current; )
      ;
    startPositions.push(startPosition), current._tokenizer || (stream = context.sliceStream(current), current.next || stream.push(null), previous2 && tokenizer.defineSkip(current.start), current._isInFirstContentOfListItem && (tokenizer._gfmTasklistFirstContentOfListItem = !0), tokenizer.write(stream), current._isInFirstContentOfListItem && (tokenizer._gfmTasklistFirstContentOfListItem = void 0)), previous2 = current, current = current.next;
  }
  for (current = token; ++index2 < childEvents.length; )
    childEvents[index2][0] === "exit" && childEvents[index2 - 1][0] === "enter" && childEvents[index2][1].type === childEvents[index2 - 1][1].type && childEvents[index2][1].start.line !== childEvents[index2][1].end.line && (start = index2 + 1, breaks.push(start), current._tokenizer = void 0, current.previous = void 0, current = current.next);
  for (tokenizer.events = [], current ? (current._tokenizer = void 0, current.previous = void 0) : breaks.pop(), index2 = breaks.length; index2--; ) {
    let slice = childEvents.slice(breaks[index2], breaks[index2 + 1]), start2 = startPositions.pop();
    jumps.unshift([start2, start2 + slice.length - 1]), splice(events, start2, 2, slice);
  }
  for (index2 = -1; ++index2 < jumps.length; )
    gaps[adjust + jumps[index2][0]] = adjust + jumps[index2][1], adjust += jumps[index2][1] - jumps[index2][0] - 1;
  return gaps;
}

// node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/content.js
var content2 = {
  tokenize: tokenizeContent,
  resolve: resolveContent
}, continuationConstruct = {
  tokenize: tokenizeContinuation,
  partial: !0
};
function resolveContent(events) {
  return subtokenize(events), events;
}
function tokenizeContent(effects, ok2) {
  let previous2;
  return start;
  function start(code2) {
    return effects.enter("content"), previous2 = effects.enter("chunkContent", {
      contentType: "content"
    }), data(code2);
  }
  function data(code2) {
    return code2 === null ? contentEnd(code2) : markdownLineEnding(code2) ? effects.check(continuationConstruct, contentContinue, contentEnd)(code2) : (effects.consume(code2), data);
  }
  function contentEnd(code2) {
    return effects.exit("chunkContent"), effects.exit("content"), ok2(code2);
  }
  function contentContinue(code2) {
    return effects.consume(code2), effects.exit("chunkContent"), previous2.next = effects.enter("chunkContent", {
      contentType: "content",
      previous: previous2
    }), previous2 = previous2.next, data;
  }
}
function tokenizeContinuation(effects, ok2, nok) {
  let self = this;
  return startLookahead;
  function startLookahead(code2) {
    return effects.exit("chunkContent"), effects.enter("lineEnding"), effects.consume(code2), effects.exit("lineEnding"), factorySpace(effects, prefixed, "linePrefix");
  }
  function prefixed(code2) {
    if (code2 === null || markdownLineEnding(code2))
      return nok(code2);
    let tail = self.events[self.events.length - 1];
    return !self.parser.constructs.disable.null.includes("codeIndented") && tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], !0).length >= 4 ? ok2(code2) : effects.interrupt(self.parser.constructs.flow, nok, ok2)(code2);
  }
}

// node_modules/.pnpm/micromark-factory-destination@1.0.0/node_modules/micromark-factory-destination/index.js
function factoryDestination(effects, ok2, nok, type, literalType, literalMarkerType, rawType, stringType, max) {
  let limit = max || Number.POSITIVE_INFINITY, balance = 0;
  return start;
  function start(code2) {
    return code2 === 60 ? (effects.enter(type), effects.enter(literalType), effects.enter(literalMarkerType), effects.consume(code2), effects.exit(literalMarkerType), destinationEnclosedBefore) : code2 === null || code2 === 41 || asciiControl(code2) ? nok(code2) : (effects.enter(type), effects.enter(rawType), effects.enter(stringType), effects.enter("chunkString", {
      contentType: "string"
    }), destinationRaw(code2));
  }
  function destinationEnclosedBefore(code2) {
    return code2 === 62 ? (effects.enter(literalMarkerType), effects.consume(code2), effects.exit(literalMarkerType), effects.exit(literalType), effects.exit(type), ok2) : (effects.enter(stringType), effects.enter("chunkString", {
      contentType: "string"
    }), destinationEnclosed(code2));
  }
  function destinationEnclosed(code2) {
    return code2 === 62 ? (effects.exit("chunkString"), effects.exit(stringType), destinationEnclosedBefore(code2)) : code2 === null || code2 === 60 || markdownLineEnding(code2) ? nok(code2) : (effects.consume(code2), code2 === 92 ? destinationEnclosedEscape : destinationEnclosed);
  }
  function destinationEnclosedEscape(code2) {
    return code2 === 60 || code2 === 62 || code2 === 92 ? (effects.consume(code2), destinationEnclosed) : destinationEnclosed(code2);
  }
  function destinationRaw(code2) {
    return code2 === 40 ? ++balance > limit ? nok(code2) : (effects.consume(code2), destinationRaw) : code2 === 41 ? balance-- ? (effects.consume(code2), destinationRaw) : (effects.exit("chunkString"), effects.exit(stringType), effects.exit(rawType), effects.exit(type), ok2(code2)) : code2 === null || markdownLineEndingOrSpace(code2) ? balance ? nok(code2) : (effects.exit("chunkString"), effects.exit(stringType), effects.exit(rawType), effects.exit(type), ok2(code2)) : asciiControl(code2) ? nok(code2) : (effects.consume(code2), code2 === 92 ? destinationRawEscape : destinationRaw);
  }
  function destinationRawEscape(code2) {
    return code2 === 40 || code2 === 41 || code2 === 92 ? (effects.consume(code2), destinationRaw) : destinationRaw(code2);
  }
}

// node_modules/.pnpm/micromark-factory-label@1.0.2/node_modules/micromark-factory-label/index.js
function factoryLabel(effects, ok2, nok, type, markerType, stringType) {
  let self = this, size = 0, data;
  return start;
  function start(code2) {
    return effects.enter(type), effects.enter(markerType), effects.consume(code2), effects.exit(markerType), effects.enter(stringType), atBreak;
  }
  function atBreak(code2) {
    return code2 === null || code2 === 91 || code2 === 93 && !data || code2 === 94 && !size && "_hiddenFootnoteSupport" in self.parser.constructs || size > 999 ? nok(code2) : code2 === 93 ? (effects.exit(stringType), effects.enter(markerType), effects.consume(code2), effects.exit(markerType), effects.exit(type), ok2) : markdownLineEnding(code2) ? (effects.enter("lineEnding"), effects.consume(code2), effects.exit("lineEnding"), atBreak) : (effects.enter("chunkString", {
      contentType: "string"
    }), label(code2));
  }
  function label(code2) {
    return code2 === null || code2 === 91 || code2 === 93 || markdownLineEnding(code2) || size++ > 999 ? (effects.exit("chunkString"), atBreak(code2)) : (effects.consume(code2), data = data || !markdownSpace(code2), code2 === 92 ? labelEscape : label);
  }
  function labelEscape(code2) {
    return code2 === 91 || code2 === 92 || code2 === 93 ? (effects.consume(code2), size++, label) : label(code2);
  }
}

// node_modules/.pnpm/micromark-factory-title@1.0.2/node_modules/micromark-factory-title/index.js
function factoryTitle(effects, ok2, nok, type, markerType, stringType) {
  let marker;
  return start;
  function start(code2) {
    return effects.enter(type), effects.enter(markerType), effects.consume(code2), effects.exit(markerType), marker = code2 === 40 ? 41 : code2, atFirstTitleBreak;
  }
  function atFirstTitleBreak(code2) {
    return code2 === marker ? (effects.enter(markerType), effects.consume(code2), effects.exit(markerType), effects.exit(type), ok2) : (effects.enter(stringType), atTitleBreak(code2));
  }
  function atTitleBreak(code2) {
    return code2 === marker ? (effects.exit(stringType), atFirstTitleBreak(marker)) : code2 === null ? nok(code2) : markdownLineEnding(code2) ? (effects.enter("lineEnding"), effects.consume(code2), effects.exit("lineEnding"), factorySpace(effects, atTitleBreak, "linePrefix")) : (effects.enter("chunkString", {
      contentType: "string"
    }), title(code2));
  }
  function title(code2) {
    return code2 === marker || code2 === null || markdownLineEnding(code2) ? (effects.exit("chunkString"), atTitleBreak(code2)) : (effects.consume(code2), code2 === 92 ? titleEscape : title);
  }
  function titleEscape(code2) {
    return code2 === marker || code2 === 92 ? (effects.consume(code2), title) : title(code2);
  }
}

// node_modules/.pnpm/micromark-factory-whitespace@1.0.0/node_modules/micromark-factory-whitespace/index.js
function factoryWhitespace(effects, ok2) {
  let seen;
  return start;
  function start(code2) {
    return markdownLineEnding(code2) ? (effects.enter("lineEnding"), effects.consume(code2), effects.exit("lineEnding"), seen = !0, start) : markdownSpace(code2) ? factorySpace(effects, start, seen ? "linePrefix" : "lineSuffix")(code2) : ok2(code2);
  }
}

// node_modules/.pnpm/micromark-util-normalize-identifier@1.0.0/node_modules/micromark-util-normalize-identifier/index.js
function normalizeIdentifier(value) {
  return value.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}

// node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/definition.js
var definition = {
  name: "definition",
  tokenize: tokenizeDefinition
}, titleConstruct = {
  tokenize: tokenizeTitle,
  partial: !0
};
function tokenizeDefinition(effects, ok2, nok) {
  let self = this, identifier;
  return start;
  function start(code2) {
    return effects.enter("definition"), factoryLabel.call(self, effects, labelAfter, nok, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(code2);
  }
  function labelAfter(code2) {
    return identifier = normalizeIdentifier(self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1)), code2 === 58 ? (effects.enter("definitionMarker"), effects.consume(code2), effects.exit("definitionMarker"), factoryWhitespace(effects, factoryDestination(effects, effects.attempt(titleConstruct, factorySpace(effects, after, "whitespace"), factorySpace(effects, after, "whitespace")), nok, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString"))) : nok(code2);
  }
  function after(code2) {
    return code2 === null || markdownLineEnding(code2) ? (effects.exit("definition"), self.parser.defined.includes(identifier) || self.parser.defined.push(identifier), ok2(code2)) : nok(code2);
  }
}
function tokenizeTitle(effects, ok2, nok) {
  return start;
  function start(code2) {
    return markdownLineEndingOrSpace(code2) ? factoryWhitespace(effects, before)(code2) : nok(code2);
  }
  function before(code2) {
    return code2 === 34 || code2 === 39 || code2 === 40 ? factoryTitle(effects, factorySpace(effects, after, "whitespace"), nok, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(code2) : nok(code2);
  }
  function after(code2) {
    return code2 === null || markdownLineEnding(code2) ? ok2(code2) : nok(code2);
  }
}

// node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/hard-break-escape.js
var hardBreakEscape = {
  name: "hardBreakEscape",
  tokenize: tokenizeHardBreakEscape
};
function tokenizeHardBreakEscape(effects, ok2, nok) {
  return start;
  function start(code2) {
    return effects.enter("hardBreakEscape"), effects.enter("escapeMarker"), effects.consume(code2), open;
  }
  function open(code2) {
    return markdownLineEnding(code2) ? (effects.exit("escapeMarker"), effects.exit("hardBreakEscape"), ok2(code2)) : nok(code2);
  }
}

// node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/heading-atx.js
var headingAtx = {
  name: "headingAtx",
  tokenize: tokenizeHeadingAtx,
  resolve: resolveHeadingAtx
};
function resolveHeadingAtx(events, context) {
  let contentEnd = events.length - 2, contentStart = 3, content3, text4;
  return events[contentStart][1].type === "whitespace" && (contentStart += 2), contentEnd - 2 > contentStart && events[contentEnd][1].type === "whitespace" && (contentEnd -= 2), events[contentEnd][1].type === "atxHeadingSequence" && (contentStart === contentEnd - 1 || contentEnd - 4 > contentStart && events[contentEnd - 2][1].type === "whitespace") && (contentEnd -= contentStart + 1 === contentEnd ? 2 : 4), contentEnd > contentStart && (content3 = {
    type: "atxHeadingText",
    start: events[contentStart][1].start,
    end: events[contentEnd][1].end
  }, text4 = {
    type: "chunkText",
    start: events[contentStart][1].start,
    end: events[contentEnd][1].end,
    contentType: "text"
  }, splice(events, contentStart, contentEnd - contentStart + 1, [
    ["enter", content3, context],
    ["enter", text4, context],
    ["exit", text4, context],
    ["exit", content3, context]
  ])), events;
}
function tokenizeHeadingAtx(effects, ok2, nok) {
  let self = this, size = 0;
  return start;
  function start(code2) {
    return effects.enter("atxHeading"), effects.enter("atxHeadingSequence"), fenceOpenInside(code2);
  }
  function fenceOpenInside(code2) {
    return code2 === 35 && size++ < 6 ? (effects.consume(code2), fenceOpenInside) : code2 === null || markdownLineEndingOrSpace(code2) ? (effects.exit("atxHeadingSequence"), self.interrupt ? ok2(code2) : headingBreak(code2)) : nok(code2);
  }
  function headingBreak(code2) {
    return code2 === 35 ? (effects.enter("atxHeadingSequence"), sequence(code2)) : code2 === null || markdownLineEnding(code2) ? (effects.exit("atxHeading"), ok2(code2)) : markdownSpace(code2) ? factorySpace(effects, headingBreak, "whitespace")(code2) : (effects.enter("atxHeadingText"), data(code2));
  }
  function sequence(code2) {
    return code2 === 35 ? (effects.consume(code2), sequence) : (effects.exit("atxHeadingSequence"), headingBreak(code2));
  }
  function data(code2) {
    return code2 === null || code2 === 35 || markdownLineEndingOrSpace(code2) ? (effects.exit("atxHeadingText"), headingBreak(code2)) : (effects.consume(code2), data);
  }
}

// node_modules/.pnpm/micromark-util-html-tag-name@1.1.0/node_modules/micromark-util-html-tag-name/index.js
var htmlBlockNames = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], htmlRawNames = ["pre", "script", "style", "textarea"];

// node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/html-flow.js
var htmlFlow = {
  name: "htmlFlow",
  tokenize: tokenizeHtmlFlow,
  resolveTo: resolveToHtmlFlow,
  concrete: !0
}, nextBlankConstruct = {
  tokenize: tokenizeNextBlank,
  partial: !0
};
function resolveToHtmlFlow(events) {
  let index2 = events.length;
  for (; index2-- && !(events[index2][0] === "enter" && events[index2][1].type === "htmlFlow"); )
    ;
  return index2 > 1 && events[index2 - 2][1].type === "linePrefix" && (events[index2][1].start = events[index2 - 2][1].start, events[index2 + 1][1].start = events[index2 - 2][1].start, events.splice(index2 - 2, 2)), events;
}
function tokenizeHtmlFlow(effects, ok2, nok) {
  let self = this, kind, startTag, buffer2, index2, marker;
  return start;
  function start(code2) {
    return effects.enter("htmlFlow"), effects.enter("htmlFlowData"), effects.consume(code2), open;
  }
  function open(code2) {
    return code2 === 33 ? (effects.consume(code2), declarationStart) : code2 === 47 ? (effects.consume(code2), tagCloseStart) : code2 === 63 ? (effects.consume(code2), kind = 3, self.interrupt ? ok2 : continuationDeclarationInside) : asciiAlpha(code2) ? (effects.consume(code2), buffer2 = String.fromCharCode(code2), startTag = !0, tagName) : nok(code2);
  }
  function declarationStart(code2) {
    return code2 === 45 ? (effects.consume(code2), kind = 2, commentOpenInside) : code2 === 91 ? (effects.consume(code2), kind = 5, buffer2 = "CDATA[", index2 = 0, cdataOpenInside) : asciiAlpha(code2) ? (effects.consume(code2), kind = 4, self.interrupt ? ok2 : continuationDeclarationInside) : nok(code2);
  }
  function commentOpenInside(code2) {
    return code2 === 45 ? (effects.consume(code2), self.interrupt ? ok2 : continuationDeclarationInside) : nok(code2);
  }
  function cdataOpenInside(code2) {
    return code2 === buffer2.charCodeAt(index2++) ? (effects.consume(code2), index2 === buffer2.length ? self.interrupt ? ok2 : continuation : cdataOpenInside) : nok(code2);
  }
  function tagCloseStart(code2) {
    return asciiAlpha(code2) ? (effects.consume(code2), buffer2 = String.fromCharCode(code2), tagName) : nok(code2);
  }
  function tagName(code2) {
    return code2 === null || code2 === 47 || code2 === 62 || markdownLineEndingOrSpace(code2) ? code2 !== 47 && startTag && htmlRawNames.includes(buffer2.toLowerCase()) ? (kind = 1, self.interrupt ? ok2(code2) : continuation(code2)) : htmlBlockNames.includes(buffer2.toLowerCase()) ? (kind = 6, code2 === 47 ? (effects.consume(code2), basicSelfClosing) : self.interrupt ? ok2(code2) : continuation(code2)) : (kind = 7, self.interrupt && !self.parser.lazy[self.now().line] ? nok(code2) : startTag ? completeAttributeNameBefore(code2) : completeClosingTagAfter(code2)) : code2 === 45 || asciiAlphanumeric(code2) ? (effects.consume(code2), buffer2 += String.fromCharCode(code2), tagName) : nok(code2);
  }
  function basicSelfClosing(code2) {
    return code2 === 62 ? (effects.consume(code2), self.interrupt ? ok2 : continuation) : nok(code2);
  }
  function completeClosingTagAfter(code2) {
    return markdownSpace(code2) ? (effects.consume(code2), completeClosingTagAfter) : completeEnd(code2);
  }
  function completeAttributeNameBefore(code2) {
    return code2 === 47 ? (effects.consume(code2), completeEnd) : code2 === 58 || code2 === 95 || asciiAlpha(code2) ? (effects.consume(code2), completeAttributeName) : markdownSpace(code2) ? (effects.consume(code2), completeAttributeNameBefore) : completeEnd(code2);
  }
  function completeAttributeName(code2) {
    return code2 === 45 || code2 === 46 || code2 === 58 || code2 === 95 || asciiAlphanumeric(code2) ? (effects.consume(code2), completeAttributeName) : completeAttributeNameAfter(code2);
  }
  function completeAttributeNameAfter(code2) {
    return code2 === 61 ? (effects.consume(code2), completeAttributeValueBefore) : markdownSpace(code2) ? (effects.consume(code2), completeAttributeNameAfter) : completeAttributeNameBefore(code2);
  }
  function completeAttributeValueBefore(code2) {
    return code2 === null || code2 === 60 || code2 === 61 || code2 === 62 || code2 === 96 ? nok(code2) : code2 === 34 || code2 === 39 ? (effects.consume(code2), marker = code2, completeAttributeValueQuoted) : markdownSpace(code2) ? (effects.consume(code2), completeAttributeValueBefore) : (marker = null, completeAttributeValueUnquoted(code2));
  }
  function completeAttributeValueQuoted(code2) {
    return code2 === null || markdownLineEnding(code2) ? nok(code2) : code2 === marker ? (effects.consume(code2), completeAttributeValueQuotedAfter) : (effects.consume(code2), completeAttributeValueQuoted);
  }
  function completeAttributeValueUnquoted(code2) {
    return code2 === null || code2 === 34 || code2 === 39 || code2 === 60 || code2 === 61 || code2 === 62 || code2 === 96 || markdownLineEndingOrSpace(code2) ? completeAttributeNameAfter(code2) : (effects.consume(code2), completeAttributeValueUnquoted);
  }
  function completeAttributeValueQuotedAfter(code2) {
    return code2 === 47 || code2 === 62 || markdownSpace(code2) ? completeAttributeNameBefore(code2) : nok(code2);
  }
  function completeEnd(code2) {
    return code2 === 62 ? (effects.consume(code2), completeAfter) : nok(code2);
  }
  function completeAfter(code2) {
    return markdownSpace(code2) ? (effects.consume(code2), completeAfter) : code2 === null || markdownLineEnding(code2) ? continuation(code2) : nok(code2);
  }
  function continuation(code2) {
    return code2 === 45 && kind === 2 ? (effects.consume(code2), continuationCommentInside) : code2 === 60 && kind === 1 ? (effects.consume(code2), continuationRawTagOpen) : code2 === 62 && kind === 4 ? (effects.consume(code2), continuationClose) : code2 === 63 && kind === 3 ? (effects.consume(code2), continuationDeclarationInside) : code2 === 93 && kind === 5 ? (effects.consume(code2), continuationCharacterDataInside) : markdownLineEnding(code2) && (kind === 6 || kind === 7) ? effects.check(nextBlankConstruct, continuationClose, continuationAtLineEnding)(code2) : code2 === null || markdownLineEnding(code2) ? continuationAtLineEnding(code2) : (effects.consume(code2), continuation);
  }
  function continuationAtLineEnding(code2) {
    return effects.exit("htmlFlowData"), htmlContinueStart(code2);
  }
  function htmlContinueStart(code2) {
    return code2 === null ? done(code2) : markdownLineEnding(code2) ? effects.attempt({
      tokenize: htmlLineEnd,
      partial: !0
    }, htmlContinueStart, done)(code2) : (effects.enter("htmlFlowData"), continuation(code2));
  }
  function htmlLineEnd(effects2, ok3, nok2) {
    return start2;
    function start2(code2) {
      return effects2.enter("lineEnding"), effects2.consume(code2), effects2.exit("lineEnding"), lineStart;
    }
    function lineStart(code2) {
      return self.parser.lazy[self.now().line] ? nok2(code2) : ok3(code2);
    }
  }
  function continuationCommentInside(code2) {
    return code2 === 45 ? (effects.consume(code2), continuationDeclarationInside) : continuation(code2);
  }
  function continuationRawTagOpen(code2) {
    return code2 === 47 ? (effects.consume(code2), buffer2 = "", continuationRawEndTag) : continuation(code2);
  }
  function continuationRawEndTag(code2) {
    return code2 === 62 && htmlRawNames.includes(buffer2.toLowerCase()) ? (effects.consume(code2), continuationClose) : asciiAlpha(code2) && buffer2.length < 8 ? (effects.consume(code2), buffer2 += String.fromCharCode(code2), continuationRawEndTag) : continuation(code2);
  }
  function continuationCharacterDataInside(code2) {
    return code2 === 93 ? (effects.consume(code2), continuationDeclarationInside) : continuation(code2);
  }
  function continuationDeclarationInside(code2) {
    return code2 === 62 ? (effects.consume(code2), continuationClose) : code2 === 45 && kind === 2 ? (effects.consume(code2), continuationDeclarationInside) : continuation(code2);
  }
  function continuationClose(code2) {
    return code2 === null || markdownLineEnding(code2) ? (effects.exit("htmlFlowData"), done(code2)) : (effects.consume(code2), continuationClose);
  }
  function done(code2) {
    return effects.exit("htmlFlow"), ok2(code2);
  }
}
function tokenizeNextBlank(effects, ok2, nok) {
  return start;
  function start(code2) {
    return effects.exit("htmlFlowData"), effects.enter("lineEndingBlank"), effects.consume(code2), effects.exit("lineEndingBlank"), effects.attempt(blankLine, ok2, nok);
  }
}

// node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/html-text.js
var htmlText = {
  name: "htmlText",
  tokenize: tokenizeHtmlText
};
function tokenizeHtmlText(effects, ok2, nok) {
  let self = this, marker, buffer2, index2, returnState;
  return start;
  function start(code2) {
    return effects.enter("htmlText"), effects.enter("htmlTextData"), effects.consume(code2), open;
  }
  function open(code2) {
    return code2 === 33 ? (effects.consume(code2), declarationOpen) : code2 === 47 ? (effects.consume(code2), tagCloseStart) : code2 === 63 ? (effects.consume(code2), instruction) : asciiAlpha(code2) ? (effects.consume(code2), tagOpen) : nok(code2);
  }
  function declarationOpen(code2) {
    return code2 === 45 ? (effects.consume(code2), commentOpen) : code2 === 91 ? (effects.consume(code2), buffer2 = "CDATA[", index2 = 0, cdataOpen) : asciiAlpha(code2) ? (effects.consume(code2), declaration) : nok(code2);
  }
  function commentOpen(code2) {
    return code2 === 45 ? (effects.consume(code2), commentStart) : nok(code2);
  }
  function commentStart(code2) {
    return code2 === null || code2 === 62 ? nok(code2) : code2 === 45 ? (effects.consume(code2), commentStartDash) : comment(code2);
  }
  function commentStartDash(code2) {
    return code2 === null || code2 === 62 ? nok(code2) : comment(code2);
  }
  function comment(code2) {
    return code2 === null ? nok(code2) : code2 === 45 ? (effects.consume(code2), commentClose) : markdownLineEnding(code2) ? (returnState = comment, atLineEnding(code2)) : (effects.consume(code2), comment);
  }
  function commentClose(code2) {
    return code2 === 45 ? (effects.consume(code2), end) : comment(code2);
  }
  function cdataOpen(code2) {
    return code2 === buffer2.charCodeAt(index2++) ? (effects.consume(code2), index2 === buffer2.length ? cdata : cdataOpen) : nok(code2);
  }
  function cdata(code2) {
    return code2 === null ? nok(code2) : code2 === 93 ? (effects.consume(code2), cdataClose) : markdownLineEnding(code2) ? (returnState = cdata, atLineEnding(code2)) : (effects.consume(code2), cdata);
  }
  function cdataClose(code2) {
    return code2 === 93 ? (effects.consume(code2), cdataEnd) : cdata(code2);
  }
  function cdataEnd(code2) {
    return code2 === 62 ? end(code2) : code2 === 93 ? (effects.consume(code2), cdataEnd) : cdata(code2);
  }
  function declaration(code2) {
    return code2 === null || code2 === 62 ? end(code2) : markdownLineEnding(code2) ? (returnState = declaration, atLineEnding(code2)) : (effects.consume(code2), declaration);
  }
  function instruction(code2) {
    return code2 === null ? nok(code2) : code2 === 63 ? (effects.consume(code2), instructionClose) : markdownLineEnding(code2) ? (returnState = instruction, atLineEnding(code2)) : (effects.consume(code2), instruction);
  }
  function instructionClose(code2) {
    return code2 === 62 ? end(code2) : instruction(code2);
  }
  function tagCloseStart(code2) {
    return asciiAlpha(code2) ? (effects.consume(code2), tagClose) : nok(code2);
  }
  function tagClose(code2) {
    return code2 === 45 || asciiAlphanumeric(code2) ? (effects.consume(code2), tagClose) : tagCloseBetween(code2);
  }
  function tagCloseBetween(code2) {
    return markdownLineEnding(code2) ? (returnState = tagCloseBetween, atLineEnding(code2)) : markdownSpace(code2) ? (effects.consume(code2), tagCloseBetween) : end(code2);
  }
  function tagOpen(code2) {
    return code2 === 45 || asciiAlphanumeric(code2) ? (effects.consume(code2), tagOpen) : code2 === 47 || code2 === 62 || markdownLineEndingOrSpace(code2) ? tagOpenBetween(code2) : nok(code2);
  }
  function tagOpenBetween(code2) {
    return code2 === 47 ? (effects.consume(code2), end) : code2 === 58 || code2 === 95 || asciiAlpha(code2) ? (effects.consume(code2), tagOpenAttributeName) : markdownLineEnding(code2) ? (returnState = tagOpenBetween, atLineEnding(code2)) : markdownSpace(code2) ? (effects.consume(code2), tagOpenBetween) : end(code2);
  }
  function tagOpenAttributeName(code2) {
    return code2 === 45 || code2 === 46 || code2 === 58 || code2 === 95 || asciiAlphanumeric(code2) ? (effects.consume(code2), tagOpenAttributeName) : tagOpenAttributeNameAfter(code2);
  }
  function tagOpenAttributeNameAfter(code2) {
    return code2 === 61 ? (effects.consume(code2), tagOpenAttributeValueBefore) : markdownLineEnding(code2) ? (returnState = tagOpenAttributeNameAfter, atLineEnding(code2)) : markdownSpace(code2) ? (effects.consume(code2), tagOpenAttributeNameAfter) : tagOpenBetween(code2);
  }
  function tagOpenAttributeValueBefore(code2) {
    return code2 === null || code2 === 60 || code2 === 61 || code2 === 62 || code2 === 96 ? nok(code2) : code2 === 34 || code2 === 39 ? (effects.consume(code2), marker = code2, tagOpenAttributeValueQuoted) : markdownLineEnding(code2) ? (returnState = tagOpenAttributeValueBefore, atLineEnding(code2)) : markdownSpace(code2) ? (effects.consume(code2), tagOpenAttributeValueBefore) : (effects.consume(code2), marker = void 0, tagOpenAttributeValueUnquoted);
  }
  function tagOpenAttributeValueQuoted(code2) {
    return code2 === marker ? (effects.consume(code2), tagOpenAttributeValueQuotedAfter) : code2 === null ? nok(code2) : markdownLineEnding(code2) ? (returnState = tagOpenAttributeValueQuoted, atLineEnding(code2)) : (effects.consume(code2), tagOpenAttributeValueQuoted);
  }
  function tagOpenAttributeValueQuotedAfter(code2) {
    return code2 === 62 || code2 === 47 || markdownLineEndingOrSpace(code2) ? tagOpenBetween(code2) : nok(code2);
  }
  function tagOpenAttributeValueUnquoted(code2) {
    return code2 === null || code2 === 34 || code2 === 39 || code2 === 60 || code2 === 61 || code2 === 96 ? nok(code2) : code2 === 62 || markdownLineEndingOrSpace(code2) ? tagOpenBetween(code2) : (effects.consume(code2), tagOpenAttributeValueUnquoted);
  }
  function atLineEnding(code2) {
    return effects.exit("htmlTextData"), effects.enter("lineEnding"), effects.consume(code2), effects.exit("lineEnding"), factorySpace(effects, afterPrefix, "linePrefix", self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
  }
  function afterPrefix(code2) {
    return effects.enter("htmlTextData"), returnState(code2);
  }
  function end(code2) {
    return code2 === 62 ? (effects.consume(code2), effects.exit("htmlTextData"), effects.exit("htmlText"), ok2) : nok(code2);
  }
}

// node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/label-end.js
var labelEnd = {
  name: "labelEnd",
  tokenize: tokenizeLabelEnd,
  resolveTo: resolveToLabelEnd,
  resolveAll: resolveAllLabelEnd
}, resourceConstruct = {
  tokenize: tokenizeResource
}, fullReferenceConstruct = {
  tokenize: tokenizeFullReference
}, collapsedReferenceConstruct = {
  tokenize: tokenizeCollapsedReference
};
function resolveAllLabelEnd(events) {
  let index2 = -1, token;
  for (; ++index2 < events.length; )
    token = events[index2][1], (token.type === "labelImage" || token.type === "labelLink" || token.type === "labelEnd") && (events.splice(index2 + 1, token.type === "labelImage" ? 4 : 2), token.type = "data", index2++);
  return events;
}
function resolveToLabelEnd(events, context) {
  let index2 = events.length, offset = 0, token, open, close, media;
  for (; index2--; )
    if (token = events[index2][1], open) {
      if (token.type === "link" || token.type === "labelLink" && token._inactive)
        break;
      events[index2][0] === "enter" && token.type === "labelLink" && (token._inactive = !0);
    } else if (close) {
      if (events[index2][0] === "enter" && (token.type === "labelImage" || token.type === "labelLink") && !token._balanced && (open = index2, token.type !== "labelLink")) {
        offset = 2;
        break;
      }
    } else
      token.type === "labelEnd" && (close = index2);
  let group = {
    type: events[open][1].type === "labelLink" ? "link" : "image",
    start: Object.assign({}, events[open][1].start),
    end: Object.assign({}, events[events.length - 1][1].end)
  }, label = {
    type: "label",
    start: Object.assign({}, events[open][1].start),
    end: Object.assign({}, events[close][1].end)
  }, text4 = {
    type: "labelText",
    start: Object.assign({}, events[open + offset + 2][1].end),
    end: Object.assign({}, events[close - 2][1].start)
  };
  return media = [
    ["enter", group, context],
    ["enter", label, context]
  ], media = push(media, events.slice(open + 1, open + offset + 3)), media = push(media, [["enter", text4, context]]), media = push(media, resolveAll(context.parser.constructs.insideSpan.null, events.slice(open + offset + 4, close - 3), context)), media = push(media, [
    ["exit", text4, context],
    events[close - 2],
    events[close - 1],
    ["exit", label, context]
  ]), media = push(media, events.slice(close + 1)), media = push(media, [["exit", group, context]]), splice(events, open, events.length, media), events;
}
function tokenizeLabelEnd(effects, ok2, nok) {
  let self = this, index2 = self.events.length, labelStart, defined;
  for (; index2--; )
    if ((self.events[index2][1].type === "labelImage" || self.events[index2][1].type === "labelLink") && !self.events[index2][1]._balanced) {
      labelStart = self.events[index2][1];
      break;
    }
  return start;
  function start(code2) {
    return labelStart ? labelStart._inactive ? balanced(code2) : (defined = self.parser.defined.includes(normalizeIdentifier(self.sliceSerialize({
      start: labelStart.end,
      end: self.now()
    }))), effects.enter("labelEnd"), effects.enter("labelMarker"), effects.consume(code2), effects.exit("labelMarker"), effects.exit("labelEnd"), afterLabelEnd) : nok(code2);
  }
  function afterLabelEnd(code2) {
    return code2 === 40 ? effects.attempt(resourceConstruct, ok2, defined ? ok2 : balanced)(code2) : code2 === 91 ? effects.attempt(fullReferenceConstruct, ok2, defined ? effects.attempt(collapsedReferenceConstruct, ok2, balanced) : balanced)(code2) : defined ? ok2(code2) : balanced(code2);
  }
  function balanced(code2) {
    return labelStart._balanced = !0, nok(code2);
  }
}
function tokenizeResource(effects, ok2, nok) {
  return start;
  function start(code2) {
    return effects.enter("resource"), effects.enter("resourceMarker"), effects.consume(code2), effects.exit("resourceMarker"), factoryWhitespace(effects, open);
  }
  function open(code2) {
    return code2 === 41 ? end(code2) : factoryDestination(effects, destinationAfter, nok, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(code2);
  }
  function destinationAfter(code2) {
    return markdownLineEndingOrSpace(code2) ? factoryWhitespace(effects, between)(code2) : end(code2);
  }
  function between(code2) {
    return code2 === 34 || code2 === 39 || code2 === 40 ? factoryTitle(effects, factoryWhitespace(effects, end), nok, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(code2) : end(code2);
  }
  function end(code2) {
    return code2 === 41 ? (effects.enter("resourceMarker"), effects.consume(code2), effects.exit("resourceMarker"), effects.exit("resource"), ok2) : nok(code2);
  }
}
function tokenizeFullReference(effects, ok2, nok) {
  let self = this;
  return start;
  function start(code2) {
    return factoryLabel.call(self, effects, afterLabel, nok, "reference", "referenceMarker", "referenceString")(code2);
  }
  function afterLabel(code2) {
    return self.parser.defined.includes(normalizeIdentifier(self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1))) ? ok2(code2) : nok(code2);
  }
}
function tokenizeCollapsedReference(effects, ok2, nok) {
  return start;
  function start(code2) {
    return effects.enter("reference"), effects.enter("referenceMarker"), effects.consume(code2), effects.exit("referenceMarker"), open;
  }
  function open(code2) {
    return code2 === 93 ? (effects.enter("referenceMarker"), effects.consume(code2), effects.exit("referenceMarker"), effects.exit("reference"), ok2) : nok(code2);
  }
}

// node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/label-start-image.js
var labelStartImage = {
  name: "labelStartImage",
  tokenize: tokenizeLabelStartImage,
  resolveAll: labelEnd.resolveAll
};
function tokenizeLabelStartImage(effects, ok2, nok) {
  let self = this;
  return start;
  function start(code2) {
    return effects.enter("labelImage"), effects.enter("labelImageMarker"), effects.consume(code2), effects.exit("labelImageMarker"), open;
  }
  function open(code2) {
    return code2 === 91 ? (effects.enter("labelMarker"), effects.consume(code2), effects.exit("labelMarker"), effects.exit("labelImage"), after) : nok(code2);
  }
  function after(code2) {
    return code2 === 94 && "_hiddenFootnoteSupport" in self.parser.constructs ? nok(code2) : ok2(code2);
  }
}

// node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/label-start-link.js
var labelStartLink = {
  name: "labelStartLink",
  tokenize: tokenizeLabelStartLink,
  resolveAll: labelEnd.resolveAll
};
function tokenizeLabelStartLink(effects, ok2, nok) {
  let self = this;
  return start;
  function start(code2) {
    return effects.enter("labelLink"), effects.enter("labelMarker"), effects.consume(code2), effects.exit("labelMarker"), effects.exit("labelLink"), after;
  }
  function after(code2) {
    return code2 === 94 && "_hiddenFootnoteSupport" in self.parser.constructs ? nok(code2) : ok2(code2);
  }
}

// node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/line-ending.js
var lineEnding = {
  name: "lineEnding",
  tokenize: tokenizeLineEnding
};
function tokenizeLineEnding(effects, ok2) {
  return start;
  function start(code2) {
    return effects.enter("lineEnding"), effects.consume(code2), effects.exit("lineEnding"), factorySpace(effects, ok2, "linePrefix");
  }
}

// node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/thematic-break.js
var thematicBreak = {
  name: "thematicBreak",
  tokenize: tokenizeThematicBreak
};
function tokenizeThematicBreak(effects, ok2, nok) {
  let size = 0, marker;
  return start;
  function start(code2) {
    return effects.enter("thematicBreak"), marker = code2, atBreak(code2);
  }
  function atBreak(code2) {
    return code2 === marker ? (effects.enter("thematicBreakSequence"), sequence(code2)) : markdownSpace(code2) ? factorySpace(effects, atBreak, "whitespace")(code2) : size < 3 || code2 !== null && !markdownLineEnding(code2) ? nok(code2) : (effects.exit("thematicBreak"), ok2(code2));
  }
  function sequence(code2) {
    return code2 === marker ? (effects.consume(code2), size++, sequence) : (effects.exit("thematicBreakSequence"), atBreak(code2));
  }
}

// node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/list.js
var list = {
  name: "list",
  tokenize: tokenizeListStart,
  continuation: {
    tokenize: tokenizeListContinuation
  },
  exit: tokenizeListEnd
}, listItemPrefixWhitespaceConstruct = {
  tokenize: tokenizeListItemPrefixWhitespace,
  partial: !0
}, indentConstruct = {
  tokenize: tokenizeIndent,
  partial: !0
};
function tokenizeListStart(effects, ok2, nok) {
  let self = this, tail = self.events[self.events.length - 1], initialSize = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], !0).length : 0, size = 0;
  return start;
  function start(code2) {
    let kind = self.containerState.type || (code2 === 42 || code2 === 43 || code2 === 45 ? "listUnordered" : "listOrdered");
    if (kind === "listUnordered" ? !self.containerState.marker || code2 === self.containerState.marker : asciiDigit(code2)) {
      if (self.containerState.type || (self.containerState.type = kind, effects.enter(kind, {
        _container: !0
      })), kind === "listUnordered")
        return effects.enter("listItemPrefix"), code2 === 42 || code2 === 45 ? effects.check(thematicBreak, nok, atMarker)(code2) : atMarker(code2);
      if (!self.interrupt || code2 === 49)
        return effects.enter("listItemPrefix"), effects.enter("listItemValue"), inside(code2);
    }
    return nok(code2);
  }
  function inside(code2) {
    return asciiDigit(code2) && ++size < 10 ? (effects.consume(code2), inside) : (!self.interrupt || size < 2) && (self.containerState.marker ? code2 === self.containerState.marker : code2 === 41 || code2 === 46) ? (effects.exit("listItemValue"), atMarker(code2)) : nok(code2);
  }
  function atMarker(code2) {
    return effects.enter("listItemMarker"), effects.consume(code2), effects.exit("listItemMarker"), self.containerState.marker = self.containerState.marker || code2, effects.check(blankLine, self.interrupt ? nok : onBlank, effects.attempt(listItemPrefixWhitespaceConstruct, endOfPrefix, otherPrefix));
  }
  function onBlank(code2) {
    return self.containerState.initialBlankLine = !0, initialSize++, endOfPrefix(code2);
  }
  function otherPrefix(code2) {
    return markdownSpace(code2) ? (effects.enter("listItemPrefixWhitespace"), effects.consume(code2), effects.exit("listItemPrefixWhitespace"), endOfPrefix) : nok(code2);
  }
  function endOfPrefix(code2) {
    return self.containerState.size = initialSize + self.sliceSerialize(effects.exit("listItemPrefix"), !0).length, ok2(code2);
  }
}
function tokenizeListContinuation(effects, ok2, nok) {
  let self = this;
  return self.containerState._closeFlow = void 0, effects.check(blankLine, onBlank, notBlank);
  function onBlank(code2) {
    return self.containerState.furtherBlankLines = self.containerState.furtherBlankLines || self.containerState.initialBlankLine, factorySpace(effects, ok2, "listItemIndent", self.containerState.size + 1)(code2);
  }
  function notBlank(code2) {
    return self.containerState.furtherBlankLines || !markdownSpace(code2) ? (self.containerState.furtherBlankLines = void 0, self.containerState.initialBlankLine = void 0, notInCurrentItem(code2)) : (self.containerState.furtherBlankLines = void 0, self.containerState.initialBlankLine = void 0, effects.attempt(indentConstruct, ok2, notInCurrentItem)(code2));
  }
  function notInCurrentItem(code2) {
    return self.containerState._closeFlow = !0, self.interrupt = void 0, factorySpace(effects, effects.attempt(list, ok2, nok), "linePrefix", self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(code2);
  }
}
function tokenizeIndent(effects, ok2, nok) {
  let self = this;
  return factorySpace(effects, afterPrefix, "listItemIndent", self.containerState.size + 1);
  function afterPrefix(code2) {
    let tail = self.events[self.events.length - 1];
    return tail && tail[1].type === "listItemIndent" && tail[2].sliceSerialize(tail[1], !0).length === self.containerState.size ? ok2(code2) : nok(code2);
  }
}
function tokenizeListEnd(effects) {
  effects.exit(this.containerState.type);
}
function tokenizeListItemPrefixWhitespace(effects, ok2, nok) {
  let self = this;
  return factorySpace(effects, afterPrefix, "listItemPrefixWhitespace", self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4 + 1);
  function afterPrefix(code2) {
    let tail = self.events[self.events.length - 1];
    return !markdownSpace(code2) && tail && tail[1].type === "listItemPrefixWhitespace" ? ok2(code2) : nok(code2);
  }
}

// node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/setext-underline.js
var setextUnderline = {
  name: "setextUnderline",
  tokenize: tokenizeSetextUnderline,
  resolveTo: resolveToSetextUnderline
};
function resolveToSetextUnderline(events, context) {
  let index2 = events.length, content3, text4, definition2;
  for (; index2--; )
    if (events[index2][0] === "enter") {
      if (events[index2][1].type === "content") {
        content3 = index2;
        break;
      }
      events[index2][1].type === "paragraph" && (text4 = index2);
    } else
      events[index2][1].type === "content" && events.splice(index2, 1), !definition2 && events[index2][1].type === "definition" && (definition2 = index2);
  let heading2 = {
    type: "setextHeading",
    start: Object.assign({}, events[text4][1].start),
    end: Object.assign({}, events[events.length - 1][1].end)
  };
  return events[text4][1].type = "setextHeadingText", definition2 ? (events.splice(text4, 0, ["enter", heading2, context]), events.splice(definition2 + 1, 0, ["exit", events[content3][1], context]), events[content3][1].end = Object.assign({}, events[definition2][1].end)) : events[content3][1] = heading2, events.push(["exit", heading2, context]), events;
}
function tokenizeSetextUnderline(effects, ok2, nok) {
  let self = this, index2 = self.events.length, marker, paragraph2;
  for (; index2--; )
    if (self.events[index2][1].type !== "lineEnding" && self.events[index2][1].type !== "linePrefix" && self.events[index2][1].type !== "content") {
      paragraph2 = self.events[index2][1].type === "paragraph";
      break;
    }
  return start;
  function start(code2) {
    return !self.parser.lazy[self.now().line] && (self.interrupt || paragraph2) ? (effects.enter("setextHeadingLine"), effects.enter("setextHeadingLineSequence"), marker = code2, closingSequence(code2)) : nok(code2);
  }
  function closingSequence(code2) {
    return code2 === marker ? (effects.consume(code2), closingSequence) : (effects.exit("setextHeadingLineSequence"), factorySpace(effects, closingSequenceEnd, "lineSuffix")(code2));
  }
  function closingSequenceEnd(code2) {
    return code2 === null || markdownLineEnding(code2) ? (effects.exit("setextHeadingLine"), ok2(code2)) : nok(code2);
  }
}

// node_modules/.pnpm/micromark@3.0.10/node_modules/micromark/lib/initialize/flow.js
var flow = {
  tokenize: initializeFlow
};
function initializeFlow(effects) {
  let self = this, initial = effects.attempt(blankLine, atBlankEnding, effects.attempt(this.parser.constructs.flowInitial, afterConstruct, factorySpace(effects, effects.attempt(this.parser.constructs.flow, afterConstruct, effects.attempt(content2, afterConstruct)), "linePrefix")));
  return initial;
  function atBlankEnding(code2) {
    if (code2 === null) {
      effects.consume(code2);
      return;
    }
    return effects.enter("lineEndingBlank"), effects.consume(code2), effects.exit("lineEndingBlank"), self.currentConstruct = void 0, initial;
  }
  function afterConstruct(code2) {
    if (code2 === null) {
      effects.consume(code2);
      return;
    }
    return effects.enter("lineEnding"), effects.consume(code2), effects.exit("lineEnding"), self.currentConstruct = void 0, initial;
  }
}

// node_modules/.pnpm/micromark@3.0.10/node_modules/micromark/lib/initialize/text.js
var resolver = {
  resolveAll: createResolver()
}, string = initializeFactory("string"), text = initializeFactory("text");
function initializeFactory(field) {
  return {
    tokenize: initializeText,
    resolveAll: createResolver(field === "text" ? resolveAllLineSuffixes : void 0)
  };
  function initializeText(effects) {
    let self = this, constructs2 = this.parser.constructs[field], text4 = effects.attempt(constructs2, start, notText);
    return start;
    function start(code2) {
      return atBreak(code2) ? text4(code2) : notText(code2);
    }
    function notText(code2) {
      if (code2 === null) {
        effects.consume(code2);
        return;
      }
      return effects.enter("data"), effects.consume(code2), data;
    }
    function data(code2) {
      return atBreak(code2) ? (effects.exit("data"), text4(code2)) : (effects.consume(code2), data);
    }
    function atBreak(code2) {
      if (code2 === null)
        return !0;
      let list3 = constructs2[code2], index2 = -1;
      if (list3)
        for (; ++index2 < list3.length; ) {
          let item = list3[index2];
          if (!item.previous || item.previous.call(self, self.previous))
            return !0;
        }
      return !1;
    }
  }
}
function createResolver(extraResolver) {
  return resolveAllText;
  function resolveAllText(events, context) {
    let index2 = -1, enter;
    for (; ++index2 <= events.length; )
      enter === void 0 ? events[index2] && events[index2][1].type === "data" && (enter = index2, index2++) : (!events[index2] || events[index2][1].type !== "data") && (index2 !== enter + 2 && (events[enter][1].end = events[index2 - 1][1].end, events.splice(enter + 2, index2 - enter - 2), index2 = enter + 2), enter = void 0);
    return extraResolver ? extraResolver(events, context) : events;
  }
}
function resolveAllLineSuffixes(events, context) {
  let eventIndex = 0;
  for (; ++eventIndex <= events.length; )
    if ((eventIndex === events.length || events[eventIndex][1].type === "lineEnding") && events[eventIndex - 1][1].type === "data") {
      let data = events[eventIndex - 1][1], chunks = context.sliceStream(data), index2 = chunks.length, bufferIndex = -1, size = 0, tabs;
      for (; index2--; ) {
        let chunk = chunks[index2];
        if (typeof chunk == "string") {
          for (bufferIndex = chunk.length; chunk.charCodeAt(bufferIndex - 1) === 32; )
            size++, bufferIndex--;
          if (bufferIndex)
            break;
          bufferIndex = -1;
        } else if (chunk === -2)
          tabs = !0, size++;
        else if (chunk !== -1) {
          index2++;
          break;
        }
      }
      if (size) {
        let token = {
          type: eventIndex === events.length || tabs || size < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            line: data.end.line,
            column: data.end.column - size,
            offset: data.end.offset - size,
            _index: data.start._index + index2,
            _bufferIndex: index2 ? bufferIndex : data.start._bufferIndex + bufferIndex
          },
          end: Object.assign({}, data.end)
        };
        data.end = Object.assign({}, token.start), data.start.offset === data.end.offset ? Object.assign(data, token) : (events.splice(eventIndex, 0, ["enter", token, context], ["exit", token, context]), eventIndex += 2);
      }
      eventIndex++;
    }
  return events;
}

// node_modules/.pnpm/micromark@3.0.10/node_modules/micromark/lib/create-tokenizer.js
function createTokenizer(parser, initialize, from) {
  let point3 = Object.assign(from ? Object.assign({}, from) : {
    line: 1,
    column: 1,
    offset: 0
  }, {
    _index: 0,
    _bufferIndex: -1
  }), columnStart = {}, resolveAllConstructs = [], chunks = [], stack = [], consumed = !0, effects = {
    consume,
    enter,
    exit: exit2,
    attempt: constructFactory(onsuccessfulconstruct),
    check: constructFactory(onsuccessfulcheck),
    interrupt: constructFactory(onsuccessfulcheck, {
      interrupt: !0
    })
  }, context = {
    previous: null,
    code: null,
    containerState: {},
    events: [],
    parser,
    sliceStream,
    sliceSerialize,
    now,
    defineSkip,
    write
  }, state = initialize.tokenize.call(context, effects), expectedCode;
  return initialize.resolveAll && resolveAllConstructs.push(initialize), context;
  function write(slice) {
    return chunks = push(chunks, slice), main(), chunks[chunks.length - 1] !== null ? [] : (addResult(initialize, 0), context.events = resolveAll(resolveAllConstructs, context.events, context), context.events);
  }
  function sliceSerialize(token, expandTabs) {
    return serializeChunks(sliceStream(token), expandTabs);
  }
  function sliceStream(token) {
    return sliceChunks(chunks, token);
  }
  function now() {
    return Object.assign({}, point3);
  }
  function defineSkip(value) {
    columnStart[value.line] = value.column, accountForPotentialSkip();
  }
  function main() {
    let chunkIndex;
    for (; point3._index < chunks.length; ) {
      let chunk = chunks[point3._index];
      if (typeof chunk == "string")
        for (chunkIndex = point3._index, point3._bufferIndex < 0 && (point3._bufferIndex = 0); point3._index === chunkIndex && point3._bufferIndex < chunk.length; )
          go(chunk.charCodeAt(point3._bufferIndex));
      else
        go(chunk);
    }
  }
  function go(code2) {
    consumed = void 0, expectedCode = code2, state = state(code2);
  }
  function consume(code2) {
    markdownLineEnding(code2) ? (point3.line++, point3.column = 1, point3.offset += code2 === -3 ? 2 : 1, accountForPotentialSkip()) : code2 !== -1 && (point3.column++, point3.offset++), point3._bufferIndex < 0 ? point3._index++ : (point3._bufferIndex++, point3._bufferIndex === chunks[point3._index].length && (point3._bufferIndex = -1, point3._index++)), context.previous = code2, consumed = !0;
  }
  function enter(type, fields) {
    let token = fields || {};
    return token.type = type, token.start = now(), context.events.push(["enter", token, context]), stack.push(token), token;
  }
  function exit2(type) {
    let token = stack.pop();
    return token.end = now(), context.events.push(["exit", token, context]), token;
  }
  function onsuccessfulconstruct(construct, info) {
    addResult(construct, info.from);
  }
  function onsuccessfulcheck(_, info) {
    info.restore();
  }
  function constructFactory(onreturn, fields) {
    return hook;
    function hook(constructs2, returnState, bogusState) {
      let listOfConstructs, constructIndex, currentConstruct, info;
      return Array.isArray(constructs2) ? handleListOfConstructs(constructs2) : "tokenize" in constructs2 ? handleListOfConstructs([constructs2]) : handleMapOfConstructs(constructs2);
      function handleMapOfConstructs(map) {
        return start;
        function start(code2) {
          let def = code2 !== null && map[code2], all3 = code2 !== null && map.null, list3 = [
            ...Array.isArray(def) ? def : def ? [def] : [],
            ...Array.isArray(all3) ? all3 : all3 ? [all3] : []
          ];
          return handleListOfConstructs(list3)(code2);
        }
      }
      function handleListOfConstructs(list3) {
        return listOfConstructs = list3, constructIndex = 0, list3.length === 0 ? bogusState : handleConstruct(list3[constructIndex]);
      }
      function handleConstruct(construct) {
        return start;
        function start(code2) {
          return info = store(), currentConstruct = construct, construct.partial || (context.currentConstruct = construct), construct.name && context.parser.constructs.disable.null.includes(construct.name) ? nok(code2) : construct.tokenize.call(fields ? Object.assign(Object.create(context), fields) : context, effects, ok2, nok)(code2);
        }
      }
      function ok2(code2) {
        return consumed = !0, onreturn(currentConstruct, info), returnState;
      }
      function nok(code2) {
        return consumed = !0, info.restore(), ++constructIndex < listOfConstructs.length ? handleConstruct(listOfConstructs[constructIndex]) : bogusState;
      }
    }
  }
  function addResult(construct, from2) {
    construct.resolveAll && !resolveAllConstructs.includes(construct) && resolveAllConstructs.push(construct), construct.resolve && splice(context.events, from2, context.events.length - from2, construct.resolve(context.events.slice(from2), context)), construct.resolveTo && (context.events = construct.resolveTo(context.events, context));
  }
  function store() {
    let startPoint = now(), startPrevious = context.previous, startCurrentConstruct = context.currentConstruct, startEventsIndex = context.events.length, startStack = Array.from(stack);
    return {
      restore,
      from: startEventsIndex
    };
    function restore() {
      point3 = startPoint, context.previous = startPrevious, context.currentConstruct = startCurrentConstruct, context.events.length = startEventsIndex, stack = startStack, accountForPotentialSkip();
    }
  }
  function accountForPotentialSkip() {
    point3.line in columnStart && point3.column < 2 && (point3.column = columnStart[point3.line], point3.offset += columnStart[point3.line] - 1);
  }
}
function sliceChunks(chunks, token) {
  let startIndex = token.start._index, startBufferIndex = token.start._bufferIndex, endIndex = token.end._index, endBufferIndex = token.end._bufferIndex, view;
  return startIndex === endIndex ? view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)] : (view = chunks.slice(startIndex, endIndex), startBufferIndex > -1 && (view[0] = view[0].slice(startBufferIndex)), endBufferIndex > 0 && view.push(chunks[endIndex].slice(0, endBufferIndex))), view;
}
function serializeChunks(chunks, expandTabs) {
  let index2 = -1, result = [], atTab;
  for (; ++index2 < chunks.length; ) {
    let chunk = chunks[index2], value;
    if (typeof chunk == "string")
      value = chunk;
    else
      switch (chunk) {
        case -5: {
          value = "\r";
          break;
        }
        case -4: {
          value = `
`;
          break;
        }
        case -3: {
          value = `\r
`;
          break;
        }
        case -2: {
          value = expandTabs ? " " : "	";
          break;
        }
        case -1: {
          if (!expandTabs && atTab)
            continue;
          value = " ";
          break;
        }
        default:
          value = String.fromCharCode(chunk);
      }
    atTab = chunk === -2, result.push(value);
  }
  return result.join("");
}

// node_modules/.pnpm/micromark@3.0.10/node_modules/micromark/lib/constructs.js
var constructs_exports = {};
__export(constructs_exports, {
  attentionMarkers: () => attentionMarkers,
  contentInitial: () => contentInitial,
  disable: () => disable,
  document: () => document3,
  flow: () => flow2,
  flowInitial: () => flowInitial,
  insideSpan: () => insideSpan,
  string: () => string2,
  text: () => text2
});
var document3 = {
  [42]: list,
  [43]: list,
  [45]: list,
  [48]: list,
  [49]: list,
  [50]: list,
  [51]: list,
  [52]: list,
  [53]: list,
  [54]: list,
  [55]: list,
  [56]: list,
  [57]: list,
  [62]: blockQuote
}, contentInitial = {
  [91]: definition
}, flowInitial = {
  [-2]: codeIndented,
  [-1]: codeIndented,
  [32]: codeIndented
}, flow2 = {
  [35]: headingAtx,
  [42]: thematicBreak,
  [45]: [setextUnderline, thematicBreak],
  [60]: htmlFlow,
  [61]: setextUnderline,
  [95]: thematicBreak,
  [96]: codeFenced,
  [126]: codeFenced
}, string2 = {
  [38]: characterReference,
  [92]: characterEscape
}, text2 = {
  [-5]: lineEnding,
  [-4]: lineEnding,
  [-3]: lineEnding,
  [33]: labelStartImage,
  [38]: characterReference,
  [42]: attention,
  [60]: [autolink, htmlText],
  [91]: labelStartLink,
  [92]: [hardBreakEscape, characterEscape],
  [93]: labelEnd,
  [95]: attention,
  [96]: codeText
}, insideSpan = {
  null: [attention, resolver]
}, attentionMarkers = {
  null: [42, 95]
}, disable = {
  null: []
};

// node_modules/.pnpm/micromark@3.0.10/node_modules/micromark/lib/parse.js
function parse(options = {}) {
  let constructs2 = combineExtensions([constructs_exports].concat(options.extensions || [])), parser = {
    defined: [],
    lazy: {},
    constructs: constructs2,
    content: create2(content),
    document: create2(document2),
    flow: create2(flow),
    string: create2(string),
    text: create2(text)
  };
  return parser;
  function create2(initial) {
    return creator;
    function creator(from) {
      return createTokenizer(parser, initial, from);
    }
  }
}

// node_modules/.pnpm/micromark@3.0.10/node_modules/micromark/lib/preprocess.js
var search = /[\0\t\n\r]/g;
function preprocess() {
  let column = 1, buffer2 = "", start = !0, atCarriageReturn;
  return preprocessor;
  function preprocessor(value, encoding, end) {
    let chunks = [], match, next, startPosition, endPosition, code2;
    for (value = buffer2 + value.toString(encoding), startPosition = 0, buffer2 = "", start && (value.charCodeAt(0) === 65279 && startPosition++, start = void 0); startPosition < value.length; ) {
      if (search.lastIndex = startPosition, match = search.exec(value), endPosition = match && match.index !== void 0 ? match.index : value.length, code2 = value.charCodeAt(endPosition), !match) {
        buffer2 = value.slice(startPosition);
        break;
      }
      if (code2 === 10 && startPosition === endPosition && atCarriageReturn)
        chunks.push(-3), atCarriageReturn = void 0;
      else
        switch (atCarriageReturn && (chunks.push(-5), atCarriageReturn = void 0), startPosition < endPosition && (chunks.push(value.slice(startPosition, endPosition)), column += endPosition - startPosition), code2) {
          case 0: {
            chunks.push(65533), column++;
            break;
          }
          case 9: {
            for (next = Math.ceil(column / 4) * 4, chunks.push(-2); column++ < next; )
              chunks.push(-1);
            break;
          }
          case 10: {
            chunks.push(-4), column = 1;
            break;
          }
          default:
            atCarriageReturn = !0, column = 1;
        }
      startPosition = endPosition + 1;
    }
    return end && (atCarriageReturn && chunks.push(-5), buffer2 && chunks.push(buffer2), chunks.push(null)), chunks;
  }
}

// node_modules/.pnpm/micromark@3.0.10/node_modules/micromark/lib/postprocess.js
function postprocess(events) {
  for (; !subtokenize(events); )
    ;
  return events;
}

// node_modules/.pnpm/micromark-util-decode-numeric-character-reference@1.0.0/node_modules/micromark-util-decode-numeric-character-reference/index.js
function decodeNumericCharacterReference(value, base2) {
  let code2 = Number.parseInt(value, base2);
  return code2 < 9 || code2 === 11 || code2 > 13 && code2 < 32 || code2 > 126 && code2 < 160 || code2 > 55295 && code2 < 57344 || code2 > 64975 && code2 < 65008 || (code2 & 65535) === 65535 || (code2 & 65535) === 65534 || code2 > 1114111 ? "\uFFFD" : String.fromCharCode(code2);
}

// node_modules/.pnpm/micromark-util-decode-string@1.0.2/node_modules/micromark-util-decode-string/index.js
var characterEscapeOrReference = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function decodeString(value) {
  return value.replace(characterEscapeOrReference, decode);
}
function decode($0, $1, $2) {
  if ($1)
    return $1;
  if ($2.charCodeAt(0) === 35) {
    let head2 = $2.charCodeAt(1), hex = head2 === 120 || head2 === 88;
    return decodeNumericCharacterReference($2.slice(hex ? 2 : 1), hex ? 16 : 10);
  }
  return decodeNamedCharacterReference($2) || $0;
}

// node_modules/.pnpm/mdast-util-from-markdown@1.2.0/node_modules/mdast-util-from-markdown/lib/index.js
var own3 = {}.hasOwnProperty, fromMarkdown = function(value, encoding, options) {
  return typeof encoding != "string" && (options = encoding, encoding = void 0), compiler(options)(postprocess(parse(options).document().write(preprocess()(value, encoding, !0))));
};
function compiler(options = {}) {
  let config = configure({
    transforms: [],
    canContainEols: [
      "emphasis",
      "fragment",
      "heading",
      "paragraph",
      "strong"
    ],
    enter: {
      autolink: opener(link2),
      autolinkProtocol: onenterdata,
      autolinkEmail: onenterdata,
      atxHeading: opener(heading2),
      blockQuote: opener(blockQuote2),
      characterEscape: onenterdata,
      characterReference: onenterdata,
      codeFenced: opener(codeFlow),
      codeFencedFenceInfo: buffer2,
      codeFencedFenceMeta: buffer2,
      codeIndented: opener(codeFlow, buffer2),
      codeText: opener(codeText2, buffer2),
      codeTextData: onenterdata,
      data: onenterdata,
      codeFlowValue: onenterdata,
      definition: opener(definition2),
      definitionDestinationString: buffer2,
      definitionLabelString: buffer2,
      definitionTitleString: buffer2,
      emphasis: opener(emphasis2),
      hardBreakEscape: opener(hardBreak2),
      hardBreakTrailing: opener(hardBreak2),
      htmlFlow: opener(html4, buffer2),
      htmlFlowData: onenterdata,
      htmlText: opener(html4, buffer2),
      htmlTextData: onenterdata,
      image: opener(image2),
      label: buffer2,
      link: opener(link2),
      listItem: opener(listItem2),
      listItemValue: onenterlistitemvalue,
      listOrdered: opener(list3, onenterlistordered),
      listUnordered: opener(list3),
      paragraph: opener(paragraph2),
      reference: onenterreference,
      referenceString: buffer2,
      resourceDestinationString: buffer2,
      resourceTitleString: buffer2,
      setextHeading: opener(heading2),
      strong: opener(strong2),
      thematicBreak: opener(thematicBreak3)
    },
    exit: {
      atxHeading: closer(),
      atxHeadingSequence: onexitatxheadingsequence,
      autolink: closer(),
      autolinkEmail: onexitautolinkemail,
      autolinkProtocol: onexitautolinkprotocol,
      blockQuote: closer(),
      characterEscapeValue: onexitdata,
      characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,
      characterReferenceMarkerNumeric: onexitcharacterreferencemarker,
      characterReferenceValue: onexitcharacterreferencevalue,
      codeFenced: closer(onexitcodefenced),
      codeFencedFence: onexitcodefencedfence,
      codeFencedFenceInfo: onexitcodefencedfenceinfo,
      codeFencedFenceMeta: onexitcodefencedfencemeta,
      codeFlowValue: onexitdata,
      codeIndented: closer(onexitcodeindented),
      codeText: closer(onexitcodetext),
      codeTextData: onexitdata,
      data: onexitdata,
      definition: closer(),
      definitionDestinationString: onexitdefinitiondestinationstring,
      definitionLabelString: onexitdefinitionlabelstring,
      definitionTitleString: onexitdefinitiontitlestring,
      emphasis: closer(),
      hardBreakEscape: closer(onexithardbreak),
      hardBreakTrailing: closer(onexithardbreak),
      htmlFlow: closer(onexithtmlflow),
      htmlFlowData: onexitdata,
      htmlText: closer(onexithtmltext),
      htmlTextData: onexitdata,
      image: closer(onexitimage),
      label: onexitlabel,
      labelText: onexitlabeltext,
      lineEnding: onexitlineending,
      link: closer(onexitlink),
      listItem: closer(),
      listOrdered: closer(),
      listUnordered: closer(),
      paragraph: closer(),
      referenceString: onexitreferencestring,
      resourceDestinationString: onexitresourcedestinationstring,
      resourceTitleString: onexitresourcetitlestring,
      resource: onexitresource,
      setextHeading: closer(onexitsetextheading),
      setextHeadingLineSequence: onexitsetextheadinglinesequence,
      setextHeadingText: onexitsetextheadingtext,
      strong: closer(),
      thematicBreak: closer()
    }
  }, options.mdastExtensions || []), data = {};
  return compile;
  function compile(events) {
    let tree = {
      type: "root",
      children: []
    }, stack = [tree], tokenStack = [], listStack = [], context = {
      stack,
      tokenStack,
      config,
      enter,
      exit: exit2,
      buffer: buffer2,
      resume,
      setData,
      getData
    }, index2 = -1;
    for (; ++index2 < events.length; )
      if (events[index2][1].type === "listOrdered" || events[index2][1].type === "listUnordered")
        if (events[index2][0] === "enter")
          listStack.push(index2);
        else {
          let tail = listStack.pop();
          index2 = prepareList(events, tail, index2);
        }
    for (index2 = -1; ++index2 < events.length; ) {
      let handler = config[events[index2][0]];
      own3.call(handler, events[index2][1].type) && handler[events[index2][1].type].call(Object.assign({
        sliceSerialize: events[index2][2].sliceSerialize
      }, context), events[index2][1]);
    }
    if (tokenStack.length > 0) {
      let tail = tokenStack[tokenStack.length - 1];
      (tail[1] || defaultOnError).call(context, void 0, tail[0]);
    }
    for (tree.position = {
      start: point3(events.length > 0 ? events[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: point3(events.length > 0 ? events[events.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, index2 = -1; ++index2 < config.transforms.length; )
      tree = config.transforms[index2](tree) || tree;
    return tree;
  }
  function prepareList(events, start, length) {
    let index2 = start - 1, containerBalance = -1, listSpread = !1, listItem3, lineIndex, firstBlankLineIndex, atMarker;
    for (; ++index2 <= length; ) {
      let event = events[index2];
      if (event[1].type === "listUnordered" || event[1].type === "listOrdered" || event[1].type === "blockQuote" ? (event[0] === "enter" ? containerBalance++ : containerBalance--, atMarker = void 0) : event[1].type === "lineEndingBlank" ? event[0] === "enter" && (listItem3 && !atMarker && !containerBalance && !firstBlankLineIndex && (firstBlankLineIndex = index2), atMarker = void 0) : event[1].type === "linePrefix" || event[1].type === "listItemValue" || event[1].type === "listItemMarker" || event[1].type === "listItemPrefix" || event[1].type === "listItemPrefixWhitespace" || (atMarker = void 0), !containerBalance && event[0] === "enter" && event[1].type === "listItemPrefix" || containerBalance === -1 && event[0] === "exit" && (event[1].type === "listUnordered" || event[1].type === "listOrdered")) {
        if (listItem3) {
          let tailIndex = index2;
          for (lineIndex = void 0; tailIndex--; ) {
            let tailEvent = events[tailIndex];
            if (tailEvent[1].type === "lineEnding" || tailEvent[1].type === "lineEndingBlank") {
              if (tailEvent[0] === "exit")
                continue;
              lineIndex && (events[lineIndex][1].type = "lineEndingBlank", listSpread = !0), tailEvent[1].type = "lineEnding", lineIndex = tailIndex;
            } else if (!(tailEvent[1].type === "linePrefix" || tailEvent[1].type === "blockQuotePrefix" || tailEvent[1].type === "blockQuotePrefixWhitespace" || tailEvent[1].type === "blockQuoteMarker" || tailEvent[1].type === "listItemIndent"))
              break;
          }
          firstBlankLineIndex && (!lineIndex || firstBlankLineIndex < lineIndex) && (listItem3._spread = !0), listItem3.end = Object.assign({}, lineIndex ? events[lineIndex][1].start : event[1].end), events.splice(lineIndex || index2, 0, ["exit", listItem3, event[2]]), index2++, length++;
        }
        event[1].type === "listItemPrefix" && (listItem3 = {
          type: "listItem",
          _spread: !1,
          start: Object.assign({}, event[1].start)
        }, events.splice(index2, 0, ["enter", listItem3, event[2]]), index2++, length++, firstBlankLineIndex = void 0, atMarker = !0);
      }
    }
    return events[start][1]._spread = listSpread, length;
  }
  function setData(key, value) {
    data[key] = value;
  }
  function getData(key) {
    return data[key];
  }
  function point3(d) {
    return {
      line: d.line,
      column: d.column,
      offset: d.offset
    };
  }
  function opener(create2, and) {
    return open;
    function open(token) {
      enter.call(this, create2(token), token), and && and.call(this, token);
    }
  }
  function buffer2() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function enter(node, token, errorHandler) {
    return this.stack[this.stack.length - 1].children.push(node), this.stack.push(node), this.tokenStack.push([token, errorHandler]), node.position = {
      start: point3(token.start)
    }, node;
  }
  function closer(and) {
    return close;
    function close(token) {
      and && and.call(this, token), exit2.call(this, token);
    }
  }
  function exit2(token, onExitError) {
    let node = this.stack.pop(), open = this.tokenStack.pop();
    if (open)
      open[0].type !== token.type && (onExitError ? onExitError.call(this, token, open[0]) : (open[1] || defaultOnError).call(this, token, open[0]));
    else
      throw new Error("Cannot close `" + token.type + "` (" + stringifyPosition({
        start: token.start,
        end: token.end
      }) + "): it\u2019s not open");
    return node.position.end = point3(token.end), node;
  }
  function resume() {
    return toString(this.stack.pop());
  }
  function onenterlistordered() {
    setData("expectingFirstListItemValue", !0);
  }
  function onenterlistitemvalue(token) {
    if (getData("expectingFirstListItemValue")) {
      let ancestor = this.stack[this.stack.length - 2];
      ancestor.start = Number.parseInt(this.sliceSerialize(token), 10), setData("expectingFirstListItemValue");
    }
  }
  function onexitcodefencedfenceinfo() {
    let data2 = this.resume(), node = this.stack[this.stack.length - 1];
    node.lang = data2;
  }
  function onexitcodefencedfencemeta() {
    let data2 = this.resume(), node = this.stack[this.stack.length - 1];
    node.meta = data2;
  }
  function onexitcodefencedfence() {
    getData("flowCodeInside") || (this.buffer(), setData("flowCodeInside", !0));
  }
  function onexitcodefenced() {
    let data2 = this.resume(), node = this.stack[this.stack.length - 1];
    node.value = data2.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), setData("flowCodeInside");
  }
  function onexitcodeindented() {
    let data2 = this.resume(), node = this.stack[this.stack.length - 1];
    node.value = data2.replace(/(\r?\n|\r)$/g, "");
  }
  function onexitdefinitionlabelstring(token) {
    let label = this.resume(), node = this.stack[this.stack.length - 1];
    node.label = label, node.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
  }
  function onexitdefinitiontitlestring() {
    let data2 = this.resume(), node = this.stack[this.stack.length - 1];
    node.title = data2;
  }
  function onexitdefinitiondestinationstring() {
    let data2 = this.resume(), node = this.stack[this.stack.length - 1];
    node.url = data2;
  }
  function onexitatxheadingsequence(token) {
    let node = this.stack[this.stack.length - 1];
    if (!node.depth) {
      let depth = this.sliceSerialize(token).length;
      node.depth = depth;
    }
  }
  function onexitsetextheadingtext() {
    setData("setextHeadingSlurpLineEnding", !0);
  }
  function onexitsetextheadinglinesequence(token) {
    let node = this.stack[this.stack.length - 1];
    node.depth = this.sliceSerialize(token).charCodeAt(0) === 61 ? 1 : 2;
  }
  function onexitsetextheading() {
    setData("setextHeadingSlurpLineEnding");
  }
  function onenterdata(token) {
    let parent = this.stack[this.stack.length - 1], tail = parent.children[parent.children.length - 1];
    (!tail || tail.type !== "text") && (tail = text4(), tail.position = {
      start: point3(token.start)
    }, parent.children.push(tail)), this.stack.push(tail);
  }
  function onexitdata(token) {
    let tail = this.stack.pop();
    tail.value += this.sliceSerialize(token), tail.position.end = point3(token.end);
  }
  function onexitlineending(token) {
    let context = this.stack[this.stack.length - 1];
    if (getData("atHardBreak")) {
      let tail = context.children[context.children.length - 1];
      tail.position.end = point3(token.end), setData("atHardBreak");
      return;
    }
    !getData("setextHeadingSlurpLineEnding") && config.canContainEols.includes(context.type) && (onenterdata.call(this, token), onexitdata.call(this, token));
  }
  function onexithardbreak() {
    setData("atHardBreak", !0);
  }
  function onexithtmlflow() {
    let data2 = this.resume(), node = this.stack[this.stack.length - 1];
    node.value = data2;
  }
  function onexithtmltext() {
    let data2 = this.resume(), node = this.stack[this.stack.length - 1];
    node.value = data2;
  }
  function onexitcodetext() {
    let data2 = this.resume(), node = this.stack[this.stack.length - 1];
    node.value = data2;
  }
  function onexitlink() {
    let context = this.stack[this.stack.length - 1];
    getData("inReference") ? (context.type += "Reference", context.referenceType = getData("referenceType") || "shortcut", delete context.url, delete context.title) : (delete context.identifier, delete context.label), setData("referenceType");
  }
  function onexitimage() {
    let context = this.stack[this.stack.length - 1];
    getData("inReference") ? (context.type += "Reference", context.referenceType = getData("referenceType") || "shortcut", delete context.url, delete context.title) : (delete context.identifier, delete context.label), setData("referenceType");
  }
  function onexitlabeltext(token) {
    let ancestor = this.stack[this.stack.length - 2], string3 = this.sliceSerialize(token);
    ancestor.label = decodeString(string3), ancestor.identifier = normalizeIdentifier(string3).toLowerCase();
  }
  function onexitlabel() {
    let fragment = this.stack[this.stack.length - 1], value = this.resume(), node = this.stack[this.stack.length - 1];
    setData("inReference", !0), node.type === "link" ? node.children = fragment.children : node.alt = value;
  }
  function onexitresourcedestinationstring() {
    let data2 = this.resume(), node = this.stack[this.stack.length - 1];
    node.url = data2;
  }
  function onexitresourcetitlestring() {
    let data2 = this.resume(), node = this.stack[this.stack.length - 1];
    node.title = data2;
  }
  function onexitresource() {
    setData("inReference");
  }
  function onenterreference() {
    setData("referenceType", "collapsed");
  }
  function onexitreferencestring(token) {
    let label = this.resume(), node = this.stack[this.stack.length - 1];
    node.label = label, node.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase(), setData("referenceType", "full");
  }
  function onexitcharacterreferencemarker(token) {
    setData("characterReferenceType", token.type);
  }
  function onexitcharacterreferencevalue(token) {
    let data2 = this.sliceSerialize(token), type = getData("characterReferenceType"), value;
    type ? (value = decodeNumericCharacterReference(data2, type === "characterReferenceMarkerNumeric" ? 10 : 16), setData("characterReferenceType")) : value = decodeNamedCharacterReference(data2);
    let tail = this.stack.pop();
    tail.value += value, tail.position.end = point3(token.end);
  }
  function onexitautolinkprotocol(token) {
    onexitdata.call(this, token);
    let node = this.stack[this.stack.length - 1];
    node.url = this.sliceSerialize(token);
  }
  function onexitautolinkemail(token) {
    onexitdata.call(this, token);
    let node = this.stack[this.stack.length - 1];
    node.url = "mailto:" + this.sliceSerialize(token);
  }
  function blockQuote2() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function codeFlow() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function codeText2() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function definition2() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function emphasis2() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function heading2() {
    return {
      type: "heading",
      depth: void 0,
      children: []
    };
  }
  function hardBreak2() {
    return {
      type: "break"
    };
  }
  function html4() {
    return {
      type: "html",
      value: ""
    };
  }
  function image2() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function link2() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function list3(token) {
    return {
      type: "list",
      ordered: token.type === "listOrdered",
      start: null,
      spread: token._spread,
      children: []
    };
  }
  function listItem2(token) {
    return {
      type: "listItem",
      spread: token._spread,
      checked: null,
      children: []
    };
  }
  function paragraph2() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function strong2() {
    return {
      type: "strong",
      children: []
    };
  }
  function text4() {
    return {
      type: "text",
      value: ""
    };
  }
  function thematicBreak3() {
    return {
      type: "thematicBreak"
    };
  }
}
function configure(combined, extensions) {
  let index2 = -1;
  for (; ++index2 < extensions.length; ) {
    let value = extensions[index2];
    Array.isArray(value) ? configure(combined, value) : extension(combined, value);
  }
  return combined;
}
function extension(combined, extension2) {
  let key;
  for (key in extension2)
    if (own3.call(extension2, key)) {
      let list3 = key === "canContainEols" || key === "transforms", left = (own3.call(combined, key) ? combined[key] : void 0) || (combined[key] = list3 ? [] : {}), right = extension2[key];
      right && (list3 ? combined[key] = [...left, ...right] : Object.assign(left, right));
    }
}
function defaultOnError(left, right) {
  throw left ? new Error("Cannot close `" + left.type + "` (" + stringifyPosition({
    start: left.start,
    end: left.end
  }) + "): a different token (`" + right.type + "`, " + stringifyPosition({
    start: right.start,
    end: right.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + right.type + "`, " + stringifyPosition({
    start: right.start,
    end: right.end
  }) + ") is still open");
}

// node_modules/.pnpm/remark-parse@10.0.1/node_modules/remark-parse/lib/index.js
function remarkParse(options) {
  Object.assign(this, { Parser: (doc) => {
    let settings = this.data("settings");
    return fromMarkdown(doc, Object.assign({}, settings, options, {
      extensions: this.data("micromarkExtensions") || [],
      mdastExtensions: this.data("fromMarkdownExtensions") || []
    }));
  } });
}

// node_modules/.pnpm/remark-parse@10.0.1/node_modules/remark-parse/index.js
var remark_parse_default = remarkParse;

// node_modules/.pnpm/unist-builder@3.0.0/node_modules/unist-builder/index.js
var u = function(type, props, value) {
  var node = { type: String(type) };
  return value == null && (typeof props == "string" || Array.isArray(props)) ? value = props : Object.assign(node, props), Array.isArray(value) ? node.children = value : value != null && (node.value = String(value)), node;
};

// node_modules/.pnpm/mdast-util-to-hast@12.1.2/node_modules/mdast-util-to-hast/lib/traverse.js
var own4 = {}.hasOwnProperty;
function unknown(h, node) {
  let data = node.data || {};
  return "value" in node && !(own4.call(data, "hName") || own4.call(data, "hProperties") || own4.call(data, "hChildren")) ? h.augment(node, u("text", node.value)) : h(node, "div", all2(h, node));
}
function one2(h, node, parent) {
  let type = node && node.type, fn;
  if (!type)
    throw new Error("Expected node, got `" + node + "`");
  return own4.call(h.handlers, type) ? fn = h.handlers[type] : h.passThrough && h.passThrough.includes(type) ? fn = returnNode : fn = h.unknownHandler, (typeof fn == "function" ? fn : unknown)(h, node, parent);
}
function returnNode(h, node) {
  return "children" in node ? __spreadProps(__spreadValues({}, node), { children: all2(h, node) }) : node;
}
function all2(h, parent) {
  let values = [];
  if ("children" in parent) {
    let nodes = parent.children, index2 = -1;
    for (; ++index2 < nodes.length; ) {
      let result = one2(h, nodes[index2], parent);
      if (result) {
        if (index2 && nodes[index2 - 1].type === "break" && (!Array.isArray(result) && result.type === "text" && (result.value = result.value.replace(/^\s+/, "")), !Array.isArray(result) && result.type === "element")) {
          let head = result.children[0];
          head && head.type === "text" && (head.value = head.value.replace(/^\s+/, ""));
        }
        Array.isArray(result) ? values.push(...result) : values.push(result);
      }
    }
  }
  return values;
}

// node_modules/.pnpm/unist-util-is@5.1.1/node_modules/unist-util-is/index.js
var convert = function(test) {
  if (test == null)
    return ok;
  if (typeof test == "string")
    return typeFactory(test);
  if (typeof test == "object")
    return Array.isArray(test) ? anyFactory(test) : propsFactory(test);
  if (typeof test == "function")
    return castFactory(test);
  throw new Error("Expected function, string, or object as test");
};
function anyFactory(tests) {
  let checks2 = [], index2 = -1;
  for (; ++index2 < tests.length; )
    checks2[index2] = convert(tests[index2]);
  return castFactory(any);
  function any(...parameters) {
    let index3 = -1;
    for (; ++index3 < checks2.length; )
      if (checks2[index3].call(this, ...parameters))
        return !0;
    return !1;
  }
}
function propsFactory(check) {
  return castFactory(all3);
  function all3(node) {
    let key;
    for (key in check)
      if (node[key] !== check[key])
        return !1;
    return !0;
  }
}
function typeFactory(check) {
  return castFactory(type);
  function type(node) {
    return node && node.type === check;
  }
}
function castFactory(check) {
  return assertion;
  function assertion(...parameters) {
    return Boolean(check.call(this, ...parameters));
  }
}
function ok() {
  return !0;
}

// node_modules/.pnpm/unist-util-visit-parents@5.1.0/node_modules/unist-util-visit-parents/color.js
function color(d) {
  return "\x1B[33m" + d + "\x1B[39m";
}

// node_modules/.pnpm/unist-util-visit-parents@5.1.0/node_modules/unist-util-visit-parents/index.js
var CONTINUE = !0, SKIP = "skip", EXIT = !1, visitParents = function(tree, test, visitor, reverse) {
  typeof test == "function" && typeof visitor != "function" && (reverse = visitor, visitor = test, test = null);
  let is = convert(test), step = reverse ? -1 : 1;
  factory2(tree, null, [])();
  function factory2(node, index2, parents) {
    let value = typeof node == "object" && node !== null ? node : {}, name;
    return typeof value.type == "string" && (name = typeof value.tagName == "string" ? value.tagName : typeof value.name == "string" ? value.name : void 0, Object.defineProperty(visit2, "name", {
      value: "node (" + color(value.type + (name ? "<" + name + ">" : "")) + ")"
    })), visit2;
    function visit2() {
      let result = [], subresult, offset, grandparents;
      if ((!test || is(node, index2, parents[parents.length - 1] || null)) && (result = toResult(visitor(node, parents)), result[0] === EXIT))
        return result;
      if (node.children && result[0] !== SKIP)
        for (offset = (reverse ? node.children.length : -1) + step, grandparents = parents.concat(node); offset > -1 && offset < node.children.length; ) {
          if (subresult = factory2(node.children[offset], offset, grandparents)(), subresult[0] === EXIT)
            return subresult;
          offset = typeof subresult[1] == "number" ? subresult[1] : offset + step;
        }
      return result;
    }
  }
};
function toResult(value) {
  return Array.isArray(value) ? value : typeof value == "number" ? [CONTINUE, value] : [value];
}

// node_modules/.pnpm/unist-util-visit@4.1.0/node_modules/unist-util-visit/index.js
var visit = function(tree, test, visitor, reverse) {
  typeof test == "function" && typeof visitor != "function" && (reverse = visitor, visitor = test, test = null), visitParents(tree, test, overload, reverse);
  function overload(node, parents) {
    let parent = parents[parents.length - 1];
    return visitor(node, parent ? parent.children.indexOf(node) : null, parent);
  }
};

// node_modules/.pnpm/unist-util-position@4.0.3/node_modules/unist-util-position/index.js
var pointStart = point2("start"), pointEnd = point2("end");
function point2(type) {
  return point3;
  function point3(node) {
    let point4 = node && node.position && node.position[type] || {};
    return {
      line: point4.line || null,
      column: point4.column || null,
      offset: point4.offset > -1 ? point4.offset : null
    };
  }
}

// node_modules/.pnpm/unist-util-generated@2.0.0/node_modules/unist-util-generated/index.js
function generated(node) {
  return !node || !node.position || !node.position.start || !node.position.start.line || !node.position.start.column || !node.position.end || !node.position.end.line || !node.position.end.column;
}

// node_modules/.pnpm/mdast-util-definitions@5.1.1/node_modules/mdast-util-definitions/index.js
var own5 = {}.hasOwnProperty;
function definitions(node) {
  let cache = /* @__PURE__ */ Object.create(null);
  if (!node || !node.type)
    throw new Error("mdast-util-definitions expected node");
  return visit(node, "definition", (definition3) => {
    let id = clean(definition3.identifier);
    id && !own5.call(cache, id) && (cache[id] = definition3);
  }), definition2;
  function definition2(identifier) {
    let id = clean(identifier);
    return id && own5.call(cache, id) ? cache[id] : null;
  }
}
function clean(value) {
  return String(value || "").toUpperCase();
}

// node_modules/.pnpm/micromark-util-encode@1.0.1/node_modules/micromark-util-encode/index.js
var characterReferences = { '"': "quot", "&": "amp", "<": "lt", ">": "gt" };
function encode(value) {
  return value.replace(/["&<>]/g, replace);
  function replace(value2) {
    return "&" + characterReferences[value2] + ";";
  }
}

// node_modules/.pnpm/micromark-util-sanitize-uri@1.0.0/node_modules/micromark-util-sanitize-uri/index.js
function sanitizeUri(url, protocol) {
  let value = encode(normalizeUri(url || ""));
  if (!protocol)
    return value;
  let colon = value.indexOf(":"), questionMark = value.indexOf("?"), numberSign = value.indexOf("#"), slash = value.indexOf("/");
  return colon < 0 || slash > -1 && colon > slash || questionMark > -1 && colon > questionMark || numberSign > -1 && colon > numberSign || protocol.test(value.slice(0, colon)) ? value : "";
}
function normalizeUri(value) {
  let result = [], index2 = -1, start = 0, skip = 0;
  for (; ++index2 < value.length; ) {
    let code2 = value.charCodeAt(index2), replace = "";
    if (code2 === 37 && asciiAlphanumeric(value.charCodeAt(index2 + 1)) && asciiAlphanumeric(value.charCodeAt(index2 + 2)))
      skip = 2;
    else if (code2 < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(code2)) || (replace = String.fromCharCode(code2));
    else if (code2 > 55295 && code2 < 57344) {
      let next = value.charCodeAt(index2 + 1);
      code2 < 56320 && next > 56319 && next < 57344 ? (replace = String.fromCharCode(code2, next), skip = 1) : replace = "\uFFFD";
    } else
      replace = String.fromCharCode(code2);
    replace && (result.push(value.slice(start, index2), encodeURIComponent(replace)), start = index2 + skip + 1, replace = ""), skip && (index2 += skip, skip = 0);
  }
  return result.join("") + value.slice(start);
}

// node_modules/.pnpm/mdast-util-to-hast@12.1.2/node_modules/mdast-util-to-hast/lib/wrap.js
function wrap2(nodes, loose) {
  let result = [], index2 = -1;
  for (loose && result.push(u("text", `
`)); ++index2 < nodes.length; )
    index2 && result.push(u("text", `
`)), result.push(nodes[index2]);
  return loose && nodes.length > 0 && result.push(u("text", `
`)), result;
}

// node_modules/.pnpm/mdast-util-to-hast@12.1.2/node_modules/mdast-util-to-hast/lib/footer.js
function footer(h) {
  let index2 = -1, listItems = [];
  for (; ++index2 < h.footnoteOrder.length; ) {
    let def = h.footnoteById[h.footnoteOrder[index2].toUpperCase()];
    if (!def)
      continue;
    let content3 = all2(h, def), id = String(def.identifier), safeId = sanitizeUri(id.toLowerCase()), referenceIndex = 0, backReferences = [];
    for (; ++referenceIndex <= h.footnoteCounts[id]; ) {
      let backReference = {
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + h.clobberPrefix + "fnref-" + safeId + (referenceIndex > 1 ? "-" + referenceIndex : ""),
          dataFootnoteBackref: !0,
          className: ["data-footnote-backref"],
          ariaLabel: h.footnoteBackLabel
        },
        children: [{ type: "text", value: "\u21A9" }]
      };
      referenceIndex > 1 && backReference.children.push({
        type: "element",
        tagName: "sup",
        children: [{ type: "text", value: String(referenceIndex) }]
      }), backReferences.length > 0 && backReferences.push({ type: "text", value: " " }), backReferences.push(backReference);
    }
    let tail = content3[content3.length - 1];
    if (tail && tail.type === "element" && tail.tagName === "p") {
      let tailTail = tail.children[tail.children.length - 1];
      tailTail && tailTail.type === "text" ? tailTail.value += " " : tail.children.push({ type: "text", value: " " }), tail.children.push(...backReferences);
    } else
      content3.push(...backReferences);
    let listItem2 = {
      type: "element",
      tagName: "li",
      properties: { id: h.clobberPrefix + "fn-" + safeId },
      children: wrap2(content3, !0)
    };
    def.position && (listItem2.position = def.position), listItems.push(listItem2);
  }
  return listItems.length === 0 ? null : {
    type: "element",
    tagName: "section",
    properties: { dataFootnotes: !0, className: ["footnotes"] },
    children: [
      {
        type: "element",
        tagName: "h2",
        properties: { id: "footnote-label", className: ["sr-only"] },
        children: [u("text", h.footnoteLabel)]
      },
      { type: "text", value: `
` },
      {
        type: "element",
        tagName: "ol",
        properties: {},
        children: wrap2(listItems, !0)
      },
      { type: "text", value: `
` }
    ]
  };
}

// node_modules/.pnpm/mdast-util-to-hast@12.1.2/node_modules/mdast-util-to-hast/lib/handlers/blockquote.js
function blockquote(h, node) {
  return h(node, "blockquote", wrap2(all2(h, node), !0));
}

// node_modules/.pnpm/mdast-util-to-hast@12.1.2/node_modules/mdast-util-to-hast/lib/handlers/break.js
function hardBreak(h, node) {
  return [h(node, "br"), u("text", `
`)];
}

// node_modules/.pnpm/mdast-util-to-hast@12.1.2/node_modules/mdast-util-to-hast/lib/handlers/code.js
function code(h, node) {
  let value = node.value ? node.value + `
` : "", lang = node.lang && node.lang.match(/^[^ \t]+(?=[ \t]|$)/), props = {};
  lang && (props.className = ["language-" + lang]);
  let code2 = h(node, "code", props, [u("text", value)]);
  return node.meta && (code2.data = { meta: node.meta }), h(node.position, "pre", [code2]);
}

// node_modules/.pnpm/mdast-util-to-hast@12.1.2/node_modules/mdast-util-to-hast/lib/handlers/delete.js
function strikethrough(h, node) {
  return h(node, "del", all2(h, node));
}

// node_modules/.pnpm/mdast-util-to-hast@12.1.2/node_modules/mdast-util-to-hast/lib/handlers/emphasis.js
function emphasis(h, node) {
  return h(node, "em", all2(h, node));
}

// node_modules/.pnpm/mdast-util-to-hast@12.1.2/node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js
function footnoteReference(h, node) {
  let id = String(node.identifier), safeId = sanitizeUri(id.toLowerCase()), index2 = h.footnoteOrder.indexOf(id), counter;
  index2 === -1 ? (h.footnoteOrder.push(id), h.footnoteCounts[id] = 1, counter = h.footnoteOrder.length) : (h.footnoteCounts[id]++, counter = index2 + 1);
  let reuseCounter = h.footnoteCounts[id];
  return h(node, "sup", [
    h(node.position, "a", {
      href: "#" + h.clobberPrefix + "fn-" + safeId,
      id: h.clobberPrefix + "fnref-" + safeId + (reuseCounter > 1 ? "-" + reuseCounter : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: "footnote-label"
    }, [u("text", String(counter))])
  ]);
}

// node_modules/.pnpm/mdast-util-to-hast@12.1.2/node_modules/mdast-util-to-hast/lib/handlers/footnote.js
function footnote(h, node) {
  let footnoteById = h.footnoteById, no = 1;
  for (; no in footnoteById; )
    no++;
  let identifier = String(no);
  return footnoteById[identifier] = {
    type: "footnoteDefinition",
    identifier,
    children: [{ type: "paragraph", children: node.children }],
    position: node.position
  }, footnoteReference(h, {
    type: "footnoteReference",
    identifier,
    position: node.position
  });
}

// node_modules/.pnpm/mdast-util-to-hast@12.1.2/node_modules/mdast-util-to-hast/lib/handlers/heading.js
function heading(h, node) {
  return h(node, "h" + node.depth, all2(h, node));
}

// node_modules/.pnpm/mdast-util-to-hast@12.1.2/node_modules/mdast-util-to-hast/lib/handlers/html.js
function html(h, node) {
  return h.dangerous ? h.augment(node, u("raw", node.value)) : null;
}

// node_modules/.pnpm/mdast-util-to-hast@12.1.2/node_modules/mdast-util-to-hast/lib/handlers/image-reference.js
var import_encode = __toESM(require("mdurl/encode.js"), 1);

// node_modules/.pnpm/mdast-util-to-hast@12.1.2/node_modules/mdast-util-to-hast/lib/revert.js
function revert(h, node) {
  let subtype = node.referenceType, suffix = "]";
  if (subtype === "collapsed" ? suffix += "[]" : subtype === "full" && (suffix += "[" + (node.label || node.identifier) + "]"), node.type === "imageReference")
    return u("text", "![" + node.alt + suffix);
  let contents = all2(h, node), head = contents[0];
  head && head.type === "text" ? head.value = "[" + head.value : contents.unshift(u("text", "["));
  let tail = contents[contents.length - 1];
  return tail && tail.type === "text" ? tail.value += suffix : contents.push(u("text", suffix)), contents;
}

// node_modules/.pnpm/mdast-util-to-hast@12.1.2/node_modules/mdast-util-to-hast/lib/handlers/image-reference.js
function imageReference(h, node) {
  let def = h.definition(node.identifier);
  if (!def)
    return revert(h, node);
  let props = { src: (0, import_encode.default)(def.url || ""), alt: node.alt };
  return def.title !== null && def.title !== void 0 && (props.title = def.title), h(node, "img", props);
}

// node_modules/.pnpm/mdast-util-to-hast@12.1.2/node_modules/mdast-util-to-hast/lib/handlers/image.js
var import_encode2 = __toESM(require("mdurl/encode.js"), 1);
function image(h, node) {
  let props = { src: (0, import_encode2.default)(node.url), alt: node.alt };
  return node.title !== null && node.title !== void 0 && (props.title = node.title), h(node, "img", props);
}

// node_modules/.pnpm/mdast-util-to-hast@12.1.2/node_modules/mdast-util-to-hast/lib/handlers/inline-code.js
function inlineCode(h, node) {
  return h(node, "code", [u("text", node.value.replace(/\r?\n|\r/g, " "))]);
}

// node_modules/.pnpm/mdast-util-to-hast@12.1.2/node_modules/mdast-util-to-hast/lib/handlers/link-reference.js
var import_encode3 = __toESM(require("mdurl/encode.js"), 1);
function linkReference(h, node) {
  let def = h.definition(node.identifier);
  if (!def)
    return revert(h, node);
  let props = { href: (0, import_encode3.default)(def.url || "") };
  return def.title !== null && def.title !== void 0 && (props.title = def.title), h(node, "a", props, all2(h, node));
}

// node_modules/.pnpm/mdast-util-to-hast@12.1.2/node_modules/mdast-util-to-hast/lib/handlers/link.js
var import_encode4 = __toESM(require("mdurl/encode.js"), 1);
function link(h, node) {
  let props = { href: (0, import_encode4.default)(node.url) };
  return node.title !== null && node.title !== void 0 && (props.title = node.title), h(node, "a", props, all2(h, node));
}

// node_modules/.pnpm/mdast-util-to-hast@12.1.2/node_modules/mdast-util-to-hast/lib/handlers/list-item.js
function listItem(h, node, parent) {
  let result = all2(h, node), loose = parent ? listLoose(parent) : listItemLoose(node), props = {}, wrapped = [];
  if (typeof node.checked == "boolean") {
    let paragraph2;
    result[0] && result[0].type === "element" && result[0].tagName === "p" ? paragraph2 = result[0] : (paragraph2 = h(null, "p", []), result.unshift(paragraph2)), paragraph2.children.length > 0 && paragraph2.children.unshift(u("text", " ")), paragraph2.children.unshift(h(null, "input", {
      type: "checkbox",
      checked: node.checked,
      disabled: !0
    })), props.className = ["task-list-item"];
  }
  let index2 = -1;
  for (; ++index2 < result.length; ) {
    let child = result[index2];
    (loose || index2 !== 0 || child.type !== "element" || child.tagName !== "p") && wrapped.push(u("text", `
`)), child.type === "element" && child.tagName === "p" && !loose ? wrapped.push(...child.children) : wrapped.push(child);
  }
  let tail = result[result.length - 1];
  return tail && (loose || !("tagName" in tail) || tail.tagName !== "p") && wrapped.push(u("text", `
`)), h(node, "li", props, wrapped);
}
function listLoose(node) {
  let loose = node.spread, children = node.children, index2 = -1;
  for (; !loose && ++index2 < children.length; )
    loose = listItemLoose(children[index2]);
  return Boolean(loose);
}
function listItemLoose(node) {
  let spread = node.spread;
  return spread ?? node.children.length > 1;
}

// node_modules/.pnpm/mdast-util-to-hast@12.1.2/node_modules/mdast-util-to-hast/lib/handlers/list.js
function list2(h, node) {
  let props = {}, name = node.ordered ? "ol" : "ul", items = all2(h, node), index2 = -1;
  for (typeof node.start == "number" && node.start !== 1 && (props.start = node.start); ++index2 < items.length; ) {
    let item = items[index2];
    if (item.type === "element" && item.tagName === "li" && item.properties && Array.isArray(item.properties.className) && item.properties.className.includes("task-list-item")) {
      props.className = ["contains-task-list"];
      break;
    }
  }
  return h(node, name, props, wrap2(items, !0));
}

// node_modules/.pnpm/mdast-util-to-hast@12.1.2/node_modules/mdast-util-to-hast/lib/handlers/paragraph.js
function paragraph(h, node) {
  return h(node, "p", all2(h, node));
}

// node_modules/.pnpm/mdast-util-to-hast@12.1.2/node_modules/mdast-util-to-hast/lib/handlers/root.js
function root(h, node) {
  return h.augment(node, u("root", wrap2(all2(h, node))));
}

// node_modules/.pnpm/mdast-util-to-hast@12.1.2/node_modules/mdast-util-to-hast/lib/handlers/strong.js
function strong(h, node) {
  return h(node, "strong", all2(h, node));
}

// node_modules/.pnpm/mdast-util-to-hast@12.1.2/node_modules/mdast-util-to-hast/lib/handlers/table.js
function table(h, node) {
  let rows = node.children, index2 = -1, align = node.align || [], result = [];
  for (; ++index2 < rows.length; ) {
    let row = rows[index2].children, name = index2 === 0 ? "th" : "td", out = [], cellIndex = -1, length = node.align ? align.length : row.length;
    for (; ++cellIndex < length; ) {
      let cell = row[cellIndex];
      out.push(h(cell, name, { align: align[cellIndex] }, cell ? all2(h, cell) : []));
    }
    result[index2] = h(rows[index2], "tr", wrap2(out, !0));
  }
  return h(node, "table", wrap2([h(result[0].position, "thead", wrap2([result[0]], !0))].concat(result[1] ? h({
    start: pointStart(result[1]),
    end: pointEnd(result[result.length - 1])
  }, "tbody", wrap2(result.slice(1), !0)) : []), !0));
}

// node_modules/.pnpm/mdast-util-to-hast@12.1.2/node_modules/mdast-util-to-hast/lib/handlers/text.js
var import_trim_lines = require("trim-lines");
function text3(h, node) {
  return h.augment(node, u("text", (0, import_trim_lines.trimLines)(String(node.value))));
}

// node_modules/.pnpm/mdast-util-to-hast@12.1.2/node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js
function thematicBreak2(h, node) {
  return h(node, "hr");
}

// node_modules/.pnpm/mdast-util-to-hast@12.1.2/node_modules/mdast-util-to-hast/lib/handlers/index.js
var handlers = {
  blockquote,
  break: hardBreak,
  code,
  delete: strikethrough,
  emphasis,
  footnoteReference,
  footnote,
  heading,
  html,
  imageReference,
  image,
  inlineCode,
  linkReference,
  link,
  listItem,
  list: list2,
  paragraph,
  root,
  strong,
  table,
  text: text3,
  thematicBreak: thematicBreak2,
  toml: ignore,
  yaml: ignore,
  definition: ignore,
  footnoteDefinition: ignore
};
function ignore() {
  return null;
}

// node_modules/.pnpm/mdast-util-to-hast@12.1.2/node_modules/mdast-util-to-hast/lib/index.js
var own6 = {}.hasOwnProperty;
function factory(tree, options) {
  let settings = options || {}, dangerous = settings.allowDangerousHtml || !1, footnoteById = {};
  return h.dangerous = dangerous, h.clobberPrefix = settings.clobberPrefix === void 0 || settings.clobberPrefix === null ? "user-content-" : settings.clobberPrefix, h.footnoteLabel = settings.footnoteLabel || "Footnotes", h.footnoteBackLabel = settings.footnoteBackLabel || "Back to content", h.definition = definitions(tree), h.footnoteById = footnoteById, h.footnoteOrder = [], h.footnoteCounts = {}, h.augment = augment, h.handlers = __spreadValues(__spreadValues({}, handlers), settings.handlers), h.unknownHandler = settings.unknownHandler, h.passThrough = settings.passThrough, visit(tree, "footnoteDefinition", (definition2) => {
    let id = String(definition2.identifier).toUpperCase();
    own6.call(footnoteById, id) || (footnoteById[id] = definition2);
  }), h;
  function augment(left, right) {
    if (left && "data" in left && left.data) {
      let data = left.data;
      data.hName && (right.type !== "element" && (right = {
        type: "element",
        tagName: "",
        properties: {},
        children: []
      }), right.tagName = data.hName), right.type === "element" && data.hProperties && (right.properties = __spreadValues(__spreadValues({}, right.properties), data.hProperties)), "children" in right && right.children && data.hChildren && (right.children = data.hChildren);
    }
    if (left) {
      let ctx = "type" in left ? left : { position: left };
      generated(ctx) || (right.position = { start: pointStart(ctx), end: pointEnd(ctx) });
    }
    return right;
  }
  function h(node, tagName, props, children) {
    return Array.isArray(props) && (children = props, props = {}), augment(node, {
      type: "element",
      tagName,
      properties: props || {},
      children: children || []
    });
  }
}
function toHast(tree, options) {
  let h = factory(tree, options), node = one2(h, tree, null), foot = footer(h);
  return foot && node.children.push(u("text", `
`), foot), Array.isArray(node) ? { type: "root", children: node } : node;
}

// node_modules/.pnpm/remark-rehype@10.1.0/node_modules/remark-rehype/lib/index.js
var remarkRehype = function(destination, options) {
  return destination && "run" in destination ? bridge(destination, options) : mutate(destination || options);
}, lib_default = remarkRehype;
function bridge(destination, options) {
  return (node, file, next) => {
    destination.run(toHast(node, options), file, (error) => {
      next(error);
    });
  };
}
function mutate(options) {
  return (node) => toHast(node, options);
}

// node_modules/.pnpm/react-markdown@8.0.3_skqlhrap4das3cz5b6iqdn2lqi/node_modules/react-markdown/lib/react-markdown.js
var import_prop_types = __toESM(require("prop-types"), 1);

// node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/lib/util/schema.js
var Schema = class {
  constructor(property, normal, space) {
    this.property = property, this.normal = normal, space && (this.space = space);
  }
};
Schema.prototype.property = {};
Schema.prototype.normal = {};
Schema.prototype.space = null;

// node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/lib/util/merge.js
function merge(definitions2, space) {
  let property = {}, normal = {}, index2 = -1;
  for (; ++index2 < definitions2.length; )
    Object.assign(property, definitions2[index2].property), Object.assign(normal, definitions2[index2].normal);
  return new Schema(property, normal, space);
}

// node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/lib/normalize.js
function normalize5(value) {
  return value.toLowerCase();
}

// node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/lib/util/info.js
var Info = class {
  constructor(property, attribute) {
    this.property = property, this.attribute = attribute;
  }
};
Info.prototype.space = null;
Info.prototype.boolean = !1;
Info.prototype.booleanish = !1;
Info.prototype.overloadedBoolean = !1;
Info.prototype.number = !1;
Info.prototype.commaSeparated = !1;
Info.prototype.spaceSeparated = !1;
Info.prototype.commaOrSpaceSeparated = !1;
Info.prototype.mustUseProperty = !1;
Info.prototype.defined = !1;

// node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/lib/util/types.js
var types_exports = {};
__export(types_exports, {
  boolean: () => boolean,
  booleanish: () => booleanish,
  commaOrSpaceSeparated: () => commaOrSpaceSeparated,
  commaSeparated: () => commaSeparated,
  number: () => number,
  overloadedBoolean: () => overloadedBoolean,
  spaceSeparated: () => spaceSeparated
});
var powers = 0, boolean = increment(), booleanish = increment(), overloadedBoolean = increment(), number = increment(), spaceSeparated = increment(), commaSeparated = increment(), commaOrSpaceSeparated = increment();
function increment() {
  return 2 ** ++powers;
}

// node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/lib/util/defined-info.js
var checks = Object.keys(types_exports), DefinedInfo = class extends Info {
  constructor(property, attribute, mask, space) {
    let index2 = -1;
    super(property, attribute);
    if (mark(this, "space", space), typeof mask == "number")
      for (; ++index2 < checks.length; ) {
        let check = checks[index2];
        mark(this, checks[index2], (mask & types_exports[check]) === types_exports[check]);
      }
  }
};
DefinedInfo.prototype.defined = !0;
function mark(values, key, value) {
  value && (values[key] = value);
}

// node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/lib/util/create.js
var own7 = {}.hasOwnProperty;
function create(definition2) {
  let property = {}, normal = {}, prop;
  for (prop in definition2.properties)
    if (own7.call(definition2.properties, prop)) {
      let value = definition2.properties[prop], info = new DefinedInfo(prop, definition2.transform(definition2.attributes || {}, prop), value, definition2.space);
      definition2.mustUseProperty && definition2.mustUseProperty.includes(prop) && (info.mustUseProperty = !0), property[prop] = info, normal[normalize5(prop)] = prop, normal[normalize5(info.attribute)] = prop;
    }
  return new Schema(property, normal, definition2.space);
}

// node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/lib/xlink.js
var xlink = create({
  space: "xlink",
  transform(_, prop) {
    return "xlink:" + prop.slice(5).toLowerCase();
  },
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  }
});

// node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/lib/xml.js
var xml = create({
  space: "xml",
  transform(_, prop) {
    return "xml:" + prop.slice(3).toLowerCase();
  },
  properties: { xmlLang: null, xmlBase: null, xmlSpace: null }
});

// node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/lib/util/case-sensitive-transform.js
function caseSensitiveTransform(attributes, attribute) {
  return attribute in attributes ? attributes[attribute] : attribute;
}

// node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/lib/util/case-insensitive-transform.js
function caseInsensitiveTransform(attributes, property) {
  return caseSensitiveTransform(attributes, property.toLowerCase());
}

// node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/lib/xmlns.js
var xmlns = create({
  space: "xmlns",
  attributes: { xmlnsxlink: "xmlns:xlink" },
  transform: caseInsensitiveTransform,
  properties: { xmlns: null, xmlnsXLink: null }
});

// node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/lib/aria.js
var aria = create({
  transform(_, prop) {
    return prop === "role" ? prop : "aria-" + prop.slice(4).toLowerCase();
  },
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: booleanish,
    ariaAutoComplete: null,
    ariaBusy: booleanish,
    ariaChecked: booleanish,
    ariaColCount: number,
    ariaColIndex: number,
    ariaColSpan: number,
    ariaControls: spaceSeparated,
    ariaCurrent: null,
    ariaDescribedBy: spaceSeparated,
    ariaDetails: null,
    ariaDisabled: booleanish,
    ariaDropEffect: spaceSeparated,
    ariaErrorMessage: null,
    ariaExpanded: booleanish,
    ariaFlowTo: spaceSeparated,
    ariaGrabbed: booleanish,
    ariaHasPopup: null,
    ariaHidden: booleanish,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: spaceSeparated,
    ariaLevel: number,
    ariaLive: null,
    ariaModal: booleanish,
    ariaMultiLine: booleanish,
    ariaMultiSelectable: booleanish,
    ariaOrientation: null,
    ariaOwns: spaceSeparated,
    ariaPlaceholder: null,
    ariaPosInSet: number,
    ariaPressed: booleanish,
    ariaReadOnly: booleanish,
    ariaRelevant: null,
    ariaRequired: booleanish,
    ariaRoleDescription: spaceSeparated,
    ariaRowCount: number,
    ariaRowIndex: number,
    ariaRowSpan: number,
    ariaSelected: booleanish,
    ariaSetSize: number,
    ariaSort: null,
    ariaValueMax: number,
    ariaValueMin: number,
    ariaValueNow: number,
    ariaValueText: null,
    role: null
  }
});

// node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/lib/html.js
var html2 = create({
  space: "html",
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  transform: caseInsensitiveTransform,
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    abbr: null,
    accept: commaSeparated,
    acceptCharset: spaceSeparated,
    accessKey: spaceSeparated,
    action: null,
    allow: null,
    allowFullScreen: boolean,
    allowPaymentRequest: boolean,
    allowUserMedia: boolean,
    alt: null,
    as: null,
    async: boolean,
    autoCapitalize: null,
    autoComplete: spaceSeparated,
    autoFocus: boolean,
    autoPlay: boolean,
    capture: boolean,
    charSet: null,
    checked: boolean,
    cite: null,
    className: spaceSeparated,
    cols: number,
    colSpan: null,
    content: null,
    contentEditable: booleanish,
    controls: boolean,
    controlsList: spaceSeparated,
    coords: number | commaSeparated,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: boolean,
    defer: boolean,
    dir: null,
    dirName: null,
    disabled: boolean,
    download: overloadedBoolean,
    draggable: booleanish,
    encType: null,
    enterKeyHint: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: boolean,
    formTarget: null,
    headers: spaceSeparated,
    height: number,
    hidden: boolean,
    high: number,
    href: null,
    hrefLang: null,
    htmlFor: spaceSeparated,
    httpEquiv: spaceSeparated,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: boolean,
    itemId: null,
    itemProp: spaceSeparated,
    itemRef: spaceSeparated,
    itemScope: boolean,
    itemType: spaceSeparated,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: boolean,
    low: number,
    manifest: null,
    max: null,
    maxLength: number,
    media: null,
    method: null,
    min: null,
    minLength: number,
    multiple: boolean,
    muted: boolean,
    name: null,
    nonce: null,
    noModule: boolean,
    noValidate: boolean,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforePrint: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: boolean,
    optimum: number,
    pattern: null,
    ping: spaceSeparated,
    placeholder: null,
    playsInline: boolean,
    poster: null,
    preload: null,
    readOnly: boolean,
    referrerPolicy: null,
    rel: spaceSeparated,
    required: boolean,
    reversed: boolean,
    rows: number,
    rowSpan: number,
    sandbox: spaceSeparated,
    scope: null,
    scoped: boolean,
    seamless: boolean,
    selected: boolean,
    shape: null,
    size: number,
    sizes: null,
    slot: null,
    span: number,
    spellCheck: booleanish,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: number,
    step: null,
    style: null,
    tabIndex: number,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: boolean,
    useMap: null,
    value: booleanish,
    width: number,
    wrap: null,
    align: null,
    aLink: null,
    archive: spaceSeparated,
    axis: null,
    background: null,
    bgColor: null,
    border: number,
    borderColor: null,
    bottomMargin: number,
    cellPadding: null,
    cellSpacing: null,
    char: null,
    charOff: null,
    classId: null,
    clear: null,
    code: null,
    codeBase: null,
    codeType: null,
    color: null,
    compact: boolean,
    declare: boolean,
    event: null,
    face: null,
    frame: null,
    frameBorder: null,
    hSpace: number,
    leftMargin: number,
    link: null,
    longDesc: null,
    lowSrc: null,
    marginHeight: number,
    marginWidth: number,
    noResize: boolean,
    noHref: boolean,
    noShade: boolean,
    noWrap: boolean,
    object: null,
    profile: null,
    prompt: null,
    rev: null,
    rightMargin: number,
    rules: null,
    scheme: null,
    scrolling: booleanish,
    standby: null,
    summary: null,
    text: null,
    topMargin: number,
    valueType: null,
    version: null,
    vAlign: null,
    vLink: null,
    vSpace: number,
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: boolean,
    disableRemotePlayback: boolean,
    prefix: null,
    property: null,
    results: number,
    security: null,
    unselectable: null
  }
});

// node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/lib/svg.js
var svg = create({
  space: "svg",
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  transform: caseSensitiveTransform,
  properties: {
    about: commaOrSpaceSeparated,
    accentHeight: number,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: number,
    amplitude: number,
    arabicForm: null,
    ascent: number,
    attributeName: null,
    attributeType: null,
    azimuth: number,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: number,
    by: null,
    calcMode: null,
    capHeight: number,
    className: spaceSeparated,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: number,
    diffuseConstant: number,
    direction: null,
    display: null,
    dur: null,
    divisor: number,
    dominantBaseline: null,
    download: boolean,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: number,
    enableBackground: null,
    end: null,
    event: null,
    exponent: number,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: number,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: commaSeparated,
    g2: commaSeparated,
    glyphName: commaSeparated,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: number,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: number,
    horizOriginX: number,
    horizOriginY: number,
    id: null,
    ideographic: number,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: number,
    k: number,
    k1: number,
    k2: number,
    k3: number,
    k4: number,
    kernelMatrix: commaOrSpaceSeparated,
    kernelUnitLength: null,
    keyPoints: null,
    keySplines: null,
    keyTimes: null,
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: number,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: number,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: number,
    overlineThickness: number,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: number,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: spaceSeparated,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: number,
    pointsAtY: number,
    pointsAtZ: number,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: commaOrSpaceSeparated,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: commaOrSpaceSeparated,
    rev: commaOrSpaceSeparated,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: commaOrSpaceSeparated,
    requiredFeatures: commaOrSpaceSeparated,
    requiredFonts: commaOrSpaceSeparated,
    requiredFormats: commaOrSpaceSeparated,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: number,
    specularExponent: number,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: number,
    strikethroughThickness: number,
    string: null,
    stroke: null,
    strokeDashArray: commaOrSpaceSeparated,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: number,
    strokeOpacity: number,
    strokeWidth: null,
    style: null,
    surfaceScale: number,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: commaOrSpaceSeparated,
    tabIndex: number,
    tableValues: null,
    target: null,
    targetX: number,
    targetY: number,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: commaOrSpaceSeparated,
    to: null,
    transform: null,
    u1: null,
    u2: null,
    underlinePosition: number,
    underlineThickness: number,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: number,
    values: null,
    vAlphabetic: number,
    vMathematical: number,
    vectorEffect: null,
    vHanging: number,
    vIdeographic: number,
    version: null,
    vertAdvY: number,
    vertOriginX: number,
    vertOriginY: number,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: number,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  }
});

// node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/lib/find.js
var valid = /^data[-\w.:]+$/i, dash = /-[a-z]/g, cap = /[A-Z]/g;
function find(schema, value) {
  let normal = normalize5(value), prop = value, Type = Info;
  if (normal in schema.normal)
    return schema.property[schema.normal[normal]];
  if (normal.length > 4 && normal.slice(0, 4) === "data" && valid.test(value)) {
    if (value.charAt(4) === "-") {
      let rest = value.slice(5).replace(dash, camelcase);
      prop = "data" + rest.charAt(0).toUpperCase() + rest.slice(1);
    } else {
      let rest = value.slice(4);
      if (!dash.test(rest)) {
        let dashes = rest.replace(cap, kebab);
        dashes.charAt(0) !== "-" && (dashes = "-" + dashes), value = "data" + dashes;
      }
    }
    Type = DefinedInfo;
  }
  return new Type(prop, value);
}
function kebab($0) {
  return "-" + $0.toLowerCase();
}
function camelcase($0) {
  return $0.charAt(1).toUpperCase();
}

// node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/lib/hast-to-react.js
var hastToReact = {
  classId: "classID",
  dataType: "datatype",
  itemId: "itemID",
  strokeDashArray: "strokeDasharray",
  strokeDashOffset: "strokeDashoffset",
  strokeLineCap: "strokeLinecap",
  strokeLineJoin: "strokeLinejoin",
  strokeMiterLimit: "strokeMiterlimit",
  typeOf: "typeof",
  xLinkActuate: "xlinkActuate",
  xLinkArcRole: "xlinkArcrole",
  xLinkHref: "xlinkHref",
  xLinkRole: "xlinkRole",
  xLinkShow: "xlinkShow",
  xLinkTitle: "xlinkTitle",
  xLinkType: "xlinkType",
  xmlnsXLink: "xmlnsXlink"
};

// node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/index.js
var html3 = merge([xml, xlink, xmlns, aria, html2], "html"), svg2 = merge([xml, xlink, xmlns, aria, svg], "svg");

// node_modules/.pnpm/react-markdown@8.0.3_skqlhrap4das3cz5b6iqdn2lqi/node_modules/react-markdown/lib/rehype-filter.js
function rehypeFilter(options) {
  if (options.allowedElements && options.disallowedElements)
    throw new TypeError("Only one of `allowedElements` and `disallowedElements` should be defined");
  if (options.allowedElements || options.disallowedElements || options.allowElement)
    return (tree) => {
      visit(tree, "element", (node, index2, parent_) => {
        let parent = parent_, remove;
        if (options.allowedElements ? remove = !options.allowedElements.includes(node.tagName) : options.disallowedElements && (remove = options.disallowedElements.includes(node.tagName)), !remove && options.allowElement && typeof index2 == "number" && (remove = !options.allowElement(node, index2, parent)), remove && typeof index2 == "number")
          return options.unwrapDisallowed && node.children ? parent.children.splice(index2, 1, ...node.children) : parent.children.splice(index2, 1), index2;
      });
    };
}

// node_modules/.pnpm/react-markdown@8.0.3_skqlhrap4das3cz5b6iqdn2lqi/node_modules/react-markdown/lib/ast-to-react.js
var import_react10 = __toESM(require("react"), 1), import_react_is = __toESM(require("react-is"), 1);

// node_modules/.pnpm/hast-util-whitespace@2.0.0/node_modules/hast-util-whitespace/index.js
function whitespace(thing) {
  var value = thing && typeof thing == "object" && thing.type === "text" ? thing.value || "" : thing;
  return typeof value == "string" && value.replace(/[ \t\n\f\r]/g, "") === "";
}

// node_modules/.pnpm/space-separated-tokens@2.0.1/node_modules/space-separated-tokens/index.js
function stringify(values) {
  return values.join(" ").trim();
}

// node_modules/.pnpm/comma-separated-tokens@2.0.2/node_modules/comma-separated-tokens/index.js
function stringify2(values, options) {
  var settings = options || {};
  return values[values.length - 1] === "" && (values = values.concat("")), values.join((settings.padRight ? " " : "") + "," + (settings.padLeft === !1 ? "" : " ")).trim();
}

// node_modules/.pnpm/react-markdown@8.0.3_skqlhrap4das3cz5b6iqdn2lqi/node_modules/react-markdown/lib/ast-to-react.js
var import_style_to_object = __toESM(require("style-to-object"), 1), own8 = {}.hasOwnProperty, tableElements = /* @__PURE__ */ new Set(["table", "thead", "tbody", "tfoot", "tr"]);
function childrenToReact(context, node) {
  let children = [], childIndex = -1, child;
  for (; ++childIndex < node.children.length; )
    child = node.children[childIndex], child.type === "element" ? children.push(toReact(context, child, childIndex, node)) : child.type === "text" ? (node.type !== "element" || !tableElements.has(node.tagName) || !whitespace(child)) && children.push(child.value) : child.type === "raw" && !context.options.skipHtml && children.push(child.value);
  return children;
}
function toReact(context, node, index2, parent) {
  let options = context.options, parentSchema = context.schema, name = node.tagName, properties = {}, schema = parentSchema, property;
  if (parentSchema.space === "html" && name === "svg" && (schema = svg2, context.schema = schema), node.properties)
    for (property in node.properties)
      own8.call(node.properties, property) && addProperty(properties, property, node.properties[property], context);
  (name === "ol" || name === "ul") && context.listDepth++;
  let children = childrenToReact(context, node);
  (name === "ol" || name === "ul") && context.listDepth--, context.schema = parentSchema;
  let position2 = node.position || {
    start: { line: null, column: null, offset: null },
    end: { line: null, column: null, offset: null }
  }, component = options.components && own8.call(options.components, name) ? options.components[name] : name, basic = typeof component == "string" || component === import_react10.default.Fragment;
  if (!import_react_is.default.isValidElementType(component))
    throw new TypeError(`Component for name \`${name}\` not defined or is not renderable`);
  if (properties.key = [
    name,
    position2.start.line,
    position2.start.column,
    index2
  ].join("-"), name === "a" && options.linkTarget && (properties.target = typeof options.linkTarget == "function" ? options.linkTarget(String(properties.href || ""), node.children, typeof properties.title == "string" ? properties.title : null) : options.linkTarget), name === "a" && options.transformLinkUri && (properties.href = options.transformLinkUri(String(properties.href || ""), node.children, typeof properties.title == "string" ? properties.title : null)), !basic && name === "code" && parent.type === "element" && parent.tagName !== "pre" && (properties.inline = !0), !basic && (name === "h1" || name === "h2" || name === "h3" || name === "h4" || name === "h5" || name === "h6") && (properties.level = Number.parseInt(name.charAt(1), 10)), name === "img" && options.transformImageUri && (properties.src = options.transformImageUri(String(properties.src || ""), String(properties.alt || ""), typeof properties.title == "string" ? properties.title : null)), !basic && name === "li" && parent.type === "element") {
    let input = getInputElement(node);
    properties.checked = input && input.properties ? Boolean(input.properties.checked) : null, properties.index = getElementsBeforeCount(parent, node), properties.ordered = parent.tagName === "ol";
  }
  return !basic && (name === "ol" || name === "ul") && (properties.ordered = name === "ol", properties.depth = context.listDepth), (name === "td" || name === "th") && (properties.align && (properties.style || (properties.style = {}), properties.style.textAlign = properties.align, delete properties.align), basic || (properties.isHeader = name === "th")), !basic && name === "tr" && parent.type === "element" && (properties.isHeader = Boolean(parent.tagName === "thead")), options.sourcePos && (properties["data-sourcepos"] = flattenPosition(position2)), !basic && options.rawSourcePos && (properties.sourcePosition = node.position), !basic && options.includeElementIndex && (properties.index = getElementsBeforeCount(parent, node), properties.siblingCount = getElementsBeforeCount(parent)), basic || (properties.node = node), children.length > 0 ? import_react10.default.createElement(component, properties, children) : import_react10.default.createElement(component, properties);
}
function getInputElement(node) {
  let index2 = -1;
  for (; ++index2 < node.children.length; ) {
    let child = node.children[index2];
    if (child.type === "element" && child.tagName === "input")
      return child;
  }
  return null;
}
function getElementsBeforeCount(parent, node) {
  let index2 = -1, count = 0;
  for (; ++index2 < parent.children.length && parent.children[index2] !== node; )
    parent.children[index2].type === "element" && count++;
  return count;
}
function addProperty(props, prop, value, ctx) {
  let info = find(ctx.schema, prop), result = value;
  result == null || result !== result || (Array.isArray(result) && (result = info.commaSeparated ? stringify2(result) : stringify(result)), info.property === "style" && typeof result == "string" && (result = parseStyle(result)), info.space && info.property ? props[own8.call(hastToReact, info.property) ? hastToReact[info.property] : info.property] = result : info.attribute && (props[info.attribute] = result));
}
function parseStyle(value) {
  let result = {};
  try {
    (0, import_style_to_object.default)(value, iterator);
  } catch {
  }
  return result;
  function iterator(name, v) {
    let k = name.slice(0, 4) === "-ms-" ? `ms-${name.slice(4)}` : name;
    result[k.replace(/-([a-z])/g, styleReplacer)] = v;
  }
}
function styleReplacer(_, $1) {
  return $1.toUpperCase();
}
function flattenPosition(pos) {
  return [
    pos.start.line,
    ":",
    pos.start.column,
    "-",
    pos.end.line,
    ":",
    pos.end.column
  ].map((d) => String(d)).join("");
}

// node_modules/.pnpm/react-markdown@8.0.3_skqlhrap4das3cz5b6iqdn2lqi/node_modules/react-markdown/lib/react-markdown.js
var own9 = {}.hasOwnProperty, changelog = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", deprecated = {
  plugins: { to: "plugins", id: "change-plugins-to-remarkplugins" },
  renderers: { to: "components", id: "change-renderers-to-components" },
  astPlugins: { id: "remove-buggy-html-in-markdown-parser" },
  allowDangerousHtml: { id: "remove-buggy-html-in-markdown-parser" },
  escapeHtml: { id: "remove-buggy-html-in-markdown-parser" },
  source: { to: "children", id: "change-source-to-children" },
  allowNode: {
    to: "allowElement",
    id: "replace-allownode-allowedtypes-and-disallowedtypes"
  },
  allowedTypes: {
    to: "allowedElements",
    id: "replace-allownode-allowedtypes-and-disallowedtypes"
  },
  disallowedTypes: {
    to: "disallowedElements",
    id: "replace-allownode-allowedtypes-and-disallowedtypes"
  },
  includeNodeIndex: {
    to: "includeElementIndex",
    id: "change-includenodeindex-to-includeelementindex"
  }
};
function ReactMarkdown(options) {
  for (let key in deprecated)
    if (own9.call(deprecated, key) && own9.call(options, key)) {
      let deprecation = deprecated[key];
      console.warn(`[react-markdown] Warning: please ${deprecation.to ? `use \`${deprecation.to}\` instead of` : "remove"} \`${key}\` (see <${changelog}#${deprecation.id}> for more info)`), delete deprecated[key];
    }
  let processor = unified().use(remark_parse_default).use(options.remarkPlugins || []).use(lib_default, __spreadProps(__spreadValues({}, options.remarkRehypeOptions), {
    allowDangerousHtml: !0
  })).use(options.rehypePlugins || []).use(rehypeFilter, options), file = new VFile();
  typeof options.children == "string" ? file.value = options.children : options.children !== void 0 && options.children !== null && console.warn(`[react-markdown] Warning: please pass a string as \`children\` (not: \`${options.children}\`)`);
  let hastNode = processor.runSync(processor.parse(file), file);
  if (hastNode.type !== "root")
    throw new TypeError("Expected a `root` node");
  let result = import_react11.default.createElement(import_react11.default.Fragment, {}, childrenToReact({ options, schema: html3, listDepth: 0 }, hastNode));
  return options.className && (result = import_react11.default.createElement("div", { className: options.className }, result)), result;
}
ReactMarkdown.defaultProps = { transformLinkUri: uriTransformer };
ReactMarkdown.propTypes = {
  children: import_prop_types.default.string,
  className: import_prop_types.default.string,
  allowElement: import_prop_types.default.func,
  allowedElements: import_prop_types.default.arrayOf(import_prop_types.default.string),
  disallowedElements: import_prop_types.default.arrayOf(import_prop_types.default.string),
  unwrapDisallowed: import_prop_types.default.bool,
  remarkPlugins: import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([
    import_prop_types.default.object,
    import_prop_types.default.func,
    import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([
      import_prop_types.default.bool,
      import_prop_types.default.string,
      import_prop_types.default.object,
      import_prop_types.default.func,
      import_prop_types.default.arrayOf(import_prop_types.default.any)
    ]))
  ])),
  rehypePlugins: import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([
    import_prop_types.default.object,
    import_prop_types.default.func,
    import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([
      import_prop_types.default.bool,
      import_prop_types.default.string,
      import_prop_types.default.object,
      import_prop_types.default.func,
      import_prop_types.default.arrayOf(import_prop_types.default.any)
    ]))
  ])),
  sourcePos: import_prop_types.default.bool,
  rawSourcePos: import_prop_types.default.bool,
  skipHtml: import_prop_types.default.bool,
  includeElementIndex: import_prop_types.default.bool,
  transformLinkUri: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.bool]),
  linkTarget: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.string]),
  transformImageUri: import_prop_types.default.func,
  components: import_prop_types.default.object
};

// app/styles/article.css
var article_default = "/build/_assets/article-HSFGFX4R.css";

// app/routes/articles/$slug.tsx
var links13 = () => [
  ...links6(),
  { rel: "stylesheet", href: article_default }
], loader3 = async ({ params }) => {
  let { slug } = params, markdown = await getMarkdownFile(`${slug}.md`);
  if (!markdown)
    throw new Response("Not found", { status: 404 });
  return markdown;
};
function Article() {
  let data = (0, import_react12.useLoaderData)(), { html: html4, attributes } = data;
  return /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("section", {
    className: "hero-section"
  }, /* @__PURE__ */ React.createElement(MaxWidthContainer, null, /* @__PURE__ */ React.createElement("div", {
    className: "hero-layout"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "hero-prefix"
  }, "Posts"), /* @__PURE__ */ React.createElement("h1", {
    className: "hero-heading"
  }, attributes.title), /* @__PURE__ */ React.createElement("h2", {
    className: "hero-subheading"
  }, attributes.subtitle), /* @__PURE__ */ React.createElement("p", {
    className: "hero-date"
  }, attributes.date)))), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", {
    className: "article-max-width-container"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "article-description"
  }, attributes.description), /* @__PURE__ */ React.createElement("div", {
    className: "article-divider"
  }), /* @__PURE__ */ React.createElement(ReactMarkdown, null, html4))));
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  links: () => links14,
  loader: () => loader4
});
var import_react13 = require("@remix-run/react");

// app/styles/index.css
var styles_default = "/build/_assets/index-BQQJIHR6.css";

// app/routes/index.tsx
var import_react_feather3 = require("react-feather"), links14 = () => [
  ...links6(),
  { rel: "stylesheet", href: styles_default }
], loader4 = async () => await getAllMarkdownAttributes();
function Index() {
  let data = (0, import_react13.useLoaderData)();
  return /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("section", {
    className: "hero-section"
  }, /* @__PURE__ */ React.createElement(MaxWidthContainer, null, /* @__PURE__ */ React.createElement("div", {
    className: "hero-layout"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "hero-prefix"
  }, `${data.length} Articles`), /* @__PURE__ */ React.createElement("h1", {
    className: "hero-heading"
  }, "Tom's Blog"), /* @__PURE__ */ React.createElement("h2", {
    className: "hero-subheading"
  }, "Discoveries from the world of web development.")))), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement(MaxWidthContainer, null, /* @__PURE__ */ React.createElement("div", {
    className: "article-preview-grid"
  }, data.map((article) => /* @__PURE__ */ React.createElement("article", {
    key: article.sha
  }, /* @__PURE__ */ React.createElement(import_react13.Link, {
    className: "article-link",
    to: `articles/${article.slug}`
  }, /* @__PURE__ */ React.createElement("p", {
    className: "article-date"
  }, article.date), /* @__PURE__ */ React.createElement("div", {
    className: "article-heading"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "article-title"
  }, article.title), /* @__PURE__ */ React.createElement(import_react_feather3.ArrowUpRight, {
    className: "article-heading-icon",
    color: "var(--color-heading)"
  })), /* @__PURE__ */ React.createElement("p", {
    className: "article-subtitle"
  }, article.subtitle)), /* @__PURE__ */ React.createElement("ul", {
    className: "article-tag-list"
  }, article.tags.map((tag) => /* @__PURE__ */ React.createElement("li", {
    className: "article-tag",
    key: tag
  }, tag)))))))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "bc53bec8", entry: { module: "/build/entry.client-PY4JX7NT.js", imports: ["/build/_shared/chunk-HUBDPFPF.js", "/build/_shared/chunk-G6T7EKFG.js", "/build/_shared/chunk-NHMJRKSG.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-ZUJEMEL3.js", imports: ["/build/_shared/chunk-RAU74I24.js", "/build/_shared/chunk-VTJXBUGI.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/action/set-theme": { id: "routes/action/set-theme", parentId: "root", path: "action/set-theme", index: void 0, caseSensitive: void 0, module: "/build/routes/action/set-theme-ANFOVCES.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/articles/$slug": { id: "routes/articles/$slug", parentId: "root", path: "articles/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/articles/$slug-CRWVYK6C.js", imports: ["/build/_shared/chunk-F7YNPYT6.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-4G77NAP5.js", imports: ["/build/_shared/chunk-F7YNPYT6.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-BC53BEC8.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/action/set-theme": {
    id: "routes/action/set-theme",
    parentId: "root",
    path: "action/set-theme",
    index: void 0,
    caseSensitive: void 0,
    module: set_theme_exports
  },
  "routes/articles/$slug": {
    id: "routes/articles/$slug",
    parentId: "root",
    path: "articles/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};

// server.js
var handleRequest2 = (0, import_cloudflare_pages.createPagesFunctionHandler)({
  build: server_build_exports,
  mode: "development",
  getLoadContext: (context) => context.env
});
function onRequest(context) {
  return handleRequest2(context);
}
module.exports = __toCommonJS(server_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  onRequest
});
//# sourceMappingURL=index.js.map
