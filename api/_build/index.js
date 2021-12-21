var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toModule(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require("remix"));
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/home/edsion/project/remix/app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links
});
var import_remix2 = __toModule(require("remix"));

// app/styles/global.css
var global_default = "/build/_assets/global-AGO7PAC3.css";

// route-module:/home/edsion/project/remix/app/root.tsx
var links = () => {
  return [
    { rel: "stylesheet", href: global_default }
  ];
};
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null)));
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement(Document, {
    title: "Error!"
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "There was an error"), /* @__PURE__ */ React.createElement("p", null, error.message), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("p", null, "Hey, developer, you should replace this with what you want your users to see."))));
}
function CatchBoundary() {
  let caught = (0, import_remix2.useCatch)();
  let message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ React.createElement("p", null, "Oops! Looks like you tried to visit a page that you do not have access to.");
      break;
    case 404:
      message = /* @__PURE__ */ React.createElement("p", null, "Oops! Looks like you tried to visit a page that does not exist.");
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ React.createElement(Document, {
    title: `${caught.status} ${caught.statusText}`
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("h1", null, caught.status, ": ", caught.statusText), message));
}
function Document({
  children,
  title
}) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), title ? /* @__PURE__ */ React.createElement("title", null, title) : null, /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, children, /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), process.env.NODE_ENV === "development" && /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}
function Layout({ children }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "remix-app"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "remix-app__main"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container remix-app__main-content"
  }, children)));
}

// route-module:/home/edsion/project/remix/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader,
  meta: () => meta
});
var import_react3 = __toModule(require("react"));
var import_remix3 = __toModule(require("remix"));

// app/components/card/index.tsx
var import_react = __toModule(require("react"));
var Card = ({ text, id, selected, onClick }) => {
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: `card ${selected ? "selected-card" : ""}`,
    onClick: () => {
      onClick(id);
    }
  }, text);
};

// app/components/settingCard/index.tsx
var SettingCard = ({
  title,
  data,
  selectedId,
  onSelected
}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "setting-card"
  }, /* @__PURE__ */ React.createElement("h4", null, title), data == null ? void 0 : data.map((item) => /* @__PURE__ */ React.createElement(Card, {
    key: item.id.toString(),
    id: item.id,
    onClick: onSelected,
    text: (item == null ? void 0 : item.value) || (item == null ? void 0 : item.title),
    selected: selectedId instanceof Array ? selectedId.includes(item.id) : selectedId === item.id
  })));
};

// app/store/store.ts
var import_react2 = __toModule(require("react"));
var import_rxjs = __toModule(require("rxjs"));

// app/store/data.ts
var data_default = {
  data: {
    specList: [
      {
        id: "blue_1",
        type: 1,
        value: "blue"
      },
      {
        id: "red_1",
        type: 1,
        value: "red"
      },
      {
        id: "yellow_1",
        type: 1,
        value: "yellow"
      },
      {
        id: "wheel_1",
        type: 2,
        value: "17 wheel"
      },
      {
        id: "wheel_2",
        type: 2,
        value: "19 wheel"
      },
      {
        id: "red_yellow_1",
        type: 3,
        value: "red_interior"
      },
      {
        id: "yellow_red_1",
        type: 3,
        value: "yellow_interior"
      },
      {
        id: "optinal_1",
        type: 4,
        value: "optional111111"
      },
      {
        id: "optinal_2",
        type: 4,
        value: "optional22222"
      }
    ],
    versionList: [
      {
        id: "version_1",
        title: "version_1"
      },
      {
        id: "version_2",
        title: "version_2"
      },
      {
        id: "version_3",
        title: "version_3"
      }
    ]
  }
};

// app/store/store.ts
var StoreContext = import_react2.default.createContext({});
var SettingService = () => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const versionList = data_default.data.versionList;
  const specList = data_default.data.specList;
  const selectedStore = (0, import_react2.useRef)({
    version: (_a = versionList == null ? void 0 : versionList[0]) == null ? void 0 : _a.id,
    color: (_c = (_b = specList == null ? void 0 : specList.filter((item) => item.type === 1)) == null ? void 0 : _b[0]) == null ? void 0 : _c.id,
    wheel: (_e = (_d = specList == null ? void 0 : specList.filter((item) => item.type === 2)) == null ? void 0 : _d[0]) == null ? void 0 : _e.id,
    interior: (_g = (_f = specList == null ? void 0 : specList.filter((item) => item.type === 3)) == null ? void 0 : _f[0]) == null ? void 0 : _g.id,
    optional: [(_i = (_h = specList == null ? void 0 : specList.filter((item) => item.type === 4)) == null ? void 0 : _h[0]) == null ? void 0 : _i.id]
  });
  const reducer = (state, action) => {
    switch (action.type) {
      case "version":
        return __spreadProps(__spreadValues({}, state), { version: action.data });
      case "color":
        return __spreadProps(__spreadValues({}, state), { color: action.data });
      case "interior":
        return __spreadProps(__spreadValues({}, state), { interior: action.data });
      case "wheel":
        return __spreadProps(__spreadValues({}, state), { wheel: action.data });
      case "optional":
        return __spreadProps(__spreadValues({}, state), { optional: action.data });
      default:
        throw new Error();
    }
  };
  const [selectedState, selectedDispatch] = (0, import_react2.useReducer)(reducer, selectedStore.current);
  const select$ = new import_rxjs.BehaviorSubject(selectedStore.current);
  return {
    select$,
    selectedStore,
    versionList,
    specList,
    selectedState,
    selectedDispatch
  };
};

// route-module:/home/edsion/project/remix/app/routes/index.tsx
var loader = () => {
  return (0, import_remix3.json)({ name: "edsion" });
};
var meta = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!"
  };
};
function Setting() {
  const {
    selectedStore,
    versionList,
    specList,
    selectedDispatch
  } = (0, import_react3.useContext)(StoreContext);
  const { version, color, wheel, interior, optional } = selectedStore.current;
  return /* @__PURE__ */ React.createElement("div", {
    className: "setting"
  }, /* @__PURE__ */ React.createElement(SettingCard, {
    title: "version",
    data: versionList,
    selectedId: version,
    onSelected: (value) => {
      selectedDispatch({
        type: "version",
        data: value
      });
      selectedStore.current.version = value;
    }
  }), /* @__PURE__ */ React.createElement(SettingCard, {
    title: "color",
    data: specList == null ? void 0 : specList.filter((item) => item.type === 1),
    selectedId: color,
    onSelected: (value) => {
      selectedDispatch({
        type: "color",
        data: value
      });
      selectedStore.current.color = value;
    }
  }), /* @__PURE__ */ React.createElement(SettingCard, {
    title: "wheel",
    data: specList == null ? void 0 : specList.filter((item) => item.type === 2),
    selectedId: wheel,
    onSelected: (value) => {
      selectedDispatch({
        type: "wheel",
        data: value
      });
      selectedStore.current.wheel = value;
    }
  }), /* @__PURE__ */ React.createElement(SettingCard, {
    title: "interior",
    data: specList == null ? void 0 : specList.filter((item) => item.type === 3),
    selectedId: interior,
    onSelected: (value) => {
      selectedDispatch({
        type: "interior",
        data: value
      });
      selectedStore.current.interior = value;
    }
  }), /* @__PURE__ */ React.createElement(SettingCard, {
    title: "optional",
    data: specList == null ? void 0 : specList.filter((item) => item.type === 4),
    selectedId: optional,
    onSelected: (value) => {
      const index = selectedStore.current.optional.lastIndexOf(value);
      if (index > -1) {
        selectedStore.current.optional.splice(index, 1);
      } else {
        selectedStore.current.optional.push(value);
      }
    }
  }));
}
function Index() {
  return /* @__PURE__ */ React.createElement(StoreContext.Provider, {
    value: SettingService()
  }, /* @__PURE__ */ React.createElement(Setting, null));
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=/build/index.js.map
