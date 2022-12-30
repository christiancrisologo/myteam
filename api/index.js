var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
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
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react");
var import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/christiancrisologo/dev/remix/myteam/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react5 = require("@remix-run/react");

// app/components/Layout.tsx
var import_react4 = __toESM(require("react"));

// app/components/TopNav.tsx
var import_react2 = __toESM(require("react"));
var import_react3 = require("@remix-run/react");
var NavLinkItem = (props) => {
  const { to, children } = props;
  const commonClassName = "flex text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium";
  const defaultClassName = `${commonClassName} hover:bg-gray-700`;
  const activeClassName = `${commonClassName}  hover:text-red-100  text-red-300`;
  return /* @__PURE__ */ import_react2.default.createElement(import_react3.NavLink, {
    to,
    className: ({ isActive }) => isActive ? activeClassName : defaultClassName
  }, children);
};
var Logo = () => {
  return /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "flex-shrink-0 flex items-center"
  }, /* @__PURE__ */ import_react2.default.createElement(import_react3.NavLink, {
    to: "/"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ import_react2.default.createElement("img", {
    src: "https://assets.2k.com/1a6ngf98576c/4hvwczkP71ziNNydQczzpv/9053398d9c1a9cae1a95dbfec37f7193/logo_2k22_s.png",
    className: 'mr-3 h-6 sm:h-9" alt="NBA2K22 Logo',
    alt: "NBA2k22 logo"
  }), /* @__PURE__ */ import_react2.default.createElement("span", {
    className: "self-center text-xl font-semibold whitespace-nowrap dark:text-white"
  }, "MyTeam"))));
};
var RightSection = () => {
  const [open, setOpen] = import_react2.default.useState(false);
  return /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "ml-3 relative"
  }, /* @__PURE__ */ import_react2.default.createElement("button", {
    type: "button",
    className: "bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",
    id: "user-menu-button",
    "aria-expanded": "false",
    "aria-haspopup": "true",
    onClick: () => setOpen(!open)
  }, /* @__PURE__ */ import_react2.default.createElement("span", {
    className: "sr-only"
  }, "Developer Menu"), /* @__PURE__ */ import_react2.default.createElement("img", {
    className: "h-8 w-8 rounded-full",
    src: "https://avatars.githubusercontent.com/u/6817833?v=4",
    alt: ""
  })), open && /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",
    role: "menu",
    "aria-orientation": "vertical",
    "aria-labelledby": "user-menu-button",
    tabIndex: -1
  }, /* @__PURE__ */ import_react2.default.createElement("a", {
    href: "#",
    className: "block px-4 py-2 text-sm text-gray-700",
    role: "menuitem",
    tabIndex: -1,
    id: "user-menu-item-0"
  }, "About Me"), /* @__PURE__ */ import_react2.default.createElement("a", {
    href: "#",
    className: "block px-4 py-2 text-sm text-gray-700",
    role: "menuitem",
    tabIndex: -1,
    id: "user-menu-item-1"
  }, "More"))));
};
var LeftSection = () => {
  return /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
  }, /* @__PURE__ */ import_react2.default.createElement(Logo, null), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "hidden sm:block sm:ml-6 flex-1"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "flex space-x-4 justify-end mr-10"
  }, /* @__PURE__ */ import_react2.default.createElement(NavLinkItem, {
    to: "/"
  }, "Home"), /* @__PURE__ */ import_react2.default.createElement(NavLinkItem, {
    to: "/players"
  }, "Players"), /* @__PURE__ */ import_react2.default.createElement(NavLinkItem, {
    to: "/cards"
  }, "Cards"))));
};
var MenuButton = () => {
  return /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "absolute inset-y-0 left-0 flex items-center sm:hidden"
  }, /* @__PURE__ */ import_react2.default.createElement("button", {
    type: "button",
    className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
    "aria-controls": "mobile-menu",
    "aria-expanded": "false"
  }, /* @__PURE__ */ import_react2.default.createElement("span", {
    className: "sr-only"
  }, "Open main menu"), /* @__PURE__ */ import_react2.default.createElement("svg", {
    className: "block h-6 w-6",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "2",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, /* @__PURE__ */ import_react2.default.createElement("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M4 6h16M4 12h16M4 18h16"
  })), /* @__PURE__ */ import_react2.default.createElement("svg", {
    className: "hidden h-6 w-6",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "2",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, /* @__PURE__ */ import_react2.default.createElement("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18L18 6M6 6l12 12"
  }))));
};
var SmallScreenMenu = () => {
  return /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "sm:hidden",
    id: "mobile-menu"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "px-2 pt-2 pb-3 space-y-1 flex flex-col"
  }, /* @__PURE__ */ import_react2.default.createElement(NavLinkItem, {
    to: "/"
  }, "Home"), /* @__PURE__ */ import_react2.default.createElement(NavLinkItem, {
    to: "/players"
  }, "Players"), /* @__PURE__ */ import_react2.default.createElement(NavLinkItem, {
    to: "/cards"
  }, "Cards")));
};
function TopNav() {
  return /* @__PURE__ */ import_react2.default.createElement("nav", {
    className: "dark:bg-slate-900 bg-slate-700 border-gray-700 px-5 w-full lg:px-8 py-2.5 "
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "relative flex items-center justify-between h-16"
  }, /* @__PURE__ */ import_react2.default.createElement(MenuButton, null), /* @__PURE__ */ import_react2.default.createElement(LeftSection, null), /* @__PURE__ */ import_react2.default.createElement(RightSection, null))), /* @__PURE__ */ import_react2.default.createElement(SmallScreenMenu, null));
}

// app/components/Layout.tsx
function Layout(props) {
  return /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "flex flex-col items-center justify-center \n            min-h-screen text-gray-700 mt-0\n            from-gray-100  to-gray-300 bg-gradient-to-br\n             rounded-lg shadow-lg"
  }, /* @__PURE__ */ import_react4.default.createElement(TopNav, null), /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "flex flex-col flex-grow m-10 p-8 xs:m-4 xs:p-4 overflow-hidden bg-white rounded-lg shadow-lg w-5/6 xs:w-[70%] xs:min-w-[360px] sm:w-3/4 "
  }, props.children));
}

// app/styles/app.css
var app_default = "/build/_assets/app-M4BDF45T.css";

// route:/Users/christiancrisologo/dev/remix/myteam/app/root.tsx
function links() {
  return [{ rel: "stylesheet", href: app_default }];
}
var meta = () => ({
  charset: "utf-8",
  title: "NBA2k MyTeam",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react5.Meta, null), /* @__PURE__ */ React.createElement(import_react5.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_react5.Outlet, null), /* @__PURE__ */ React.createElement(import_react5.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react5.Scripts, null), /* @__PURE__ */ React.createElement(import_react5.LiveReload, null))));
}

// route:/Users/christiancrisologo/dev/remix/myteam/app/routes/players/index.tsx
var players_exports = {};
__export(players_exports, {
  default: () => Players,
  loader: () => loader
});
var import_node = require("@remix-run/node");
var import_react7 = require("@remix-run/react");

// app/services/db.server.ts
var import_client = require("@prisma/client");
var db;
if (false) {
  db = new import_client.PrismaClient();
} else {
  if (!global.__db) {
    global.__db = new import_client.PrismaClient();
  }
  db = global.__db;
}

// app/services/players.server.ts
var getPlayers = () => db.player.findMany();

// app/components/Table.tsx
var import_react6 = __toESM(require("react"));
var HeaderCol = (props) => {
  return /* @__PURE__ */ import_react6.default.createElement("th", {
    className: "px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
  }, props.children);
};
var TableRow = (props) => {
  const { avatar, columns = [] } = props;
  return /* @__PURE__ */ import_react6.default.createElement("tr", null, columns.map((column, index) => /* @__PURE__ */ import_react6.default.createElement("td", {
    key: index,
    className: "px-6 py-4 whitespace-no-wrap border-b border-gray-200"
  }, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "flex items-center"
  }, index === 0 && /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "flex-shrink-0 w-10 h-10"
  }, /* @__PURE__ */ import_react6.default.createElement("img", {
    className: "round-avatar-clip",
    src: avatar,
    alt: "avatar"
  })), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "ml-4"
  }, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "text-sm font-medium leading-5 text-gray-900"
  }, column))))));
};
var Table = function Table2(props) {
  const { headers, records } = props;
  return /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "flex flex-col mt-8"
  }, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
  }, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"
  }, /* @__PURE__ */ import_react6.default.createElement("table", {
    className: "min-w-full"
  }, /* @__PURE__ */ import_react6.default.createElement("thead", null, /* @__PURE__ */ import_react6.default.createElement("tr", null, headers.map((header, index) => /* @__PURE__ */ import_react6.default.createElement(HeaderCol, {
    key: index
  }, header)))), /* @__PURE__ */ import_react6.default.createElement("tbody", {
    className: "bg-white"
  }, records.map((record, index) => /* @__PURE__ */ import_react6.default.createElement(TableRow, __spreadValues({
    key: index
  }, record))))))));
};
var Table_default = Table;

// route:/Users/christiancrisologo/dev/remix/myteam/app/routes/players/index.tsx
var loader = async () => {
  const data = { players: await getPlayers() };
  return (0, import_node.json)(data);
};
function Players() {
  const { players } = (0, import_react7.useLoaderData)();
  const headers = ["Player", "Position", "Team", "Height", "Weight"];
  const records = players.map((player) => {
    return {
      avatar: player.avatar,
      columns: [
        `${player.firstName} ${player.lastName}`,
        player.position,
        player.team,
        player.height,
        player.weight
      ]
    };
  });
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col m-4 "
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "font-prompt text-2xl font-bold"
  }, "Players Profile"), /* @__PURE__ */ React.createElement(Table_default, {
    headers,
    records
  }), /* @__PURE__ */ React.createElement(import_react7.Outlet, null));
}

// route:/Users/christiancrisologo/dev/remix/myteam/app/routes/players/temp.tsx
var temp_exports = {};
__export(temp_exports, {
  default: () => Players2
});
function Players2() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col flex-grow m-8 overflow-hidden bg-white rounded-lg shadow-lg"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col m-4 "
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "font-prompt text-3xl font-bold"
  }, "??")));
}

// route:/Users/christiancrisologo/dev/remix/myteam/app/routes/cards.tsx
var cards_exports = {};
__export(cards_exports, {
  default: () => Index
});
var import_react8 = __toESM(require("react"));
function Index() {
  return /* @__PURE__ */ import_react8.default.createElement("div", null, "Cards");
}

// route:/Users/christiancrisologo/dev/remix/myteam/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index2
});
var import_react9 = __toESM(require("react"));
var AttrBox = ({ label, value, className = "", type = "row", grow = false }) => {
  const _type = type === "row" ? "flex-row" : "flex-col";
  const style = grow ? { flexGrow: 1, flexBasis: 0 } : {};
  return /* @__PURE__ */ import_react9.default.createElement("div", {
    className: `${grow ? "block" : "flex"} p-2 mb-2 xs:mb-0 xs:w-full ${_type} ${className}`,
    style
  }, /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "text-slate-900 text-sm sm:w-32 w-full"
  }, label), /* @__PURE__ */ import_react9.default.createElement("span", {
    className: "text-gray-400 text-sm "
  }, value));
};
var BadgesBox = ({ image, label, className = "" }) => {
  return /* @__PURE__ */ import_react9.default.createElement("div", {
    className: `block p-2 m-4 ${className}`
  }, /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "sm:w-32 w-full"
  }, /* @__PURE__ */ import_react9.default.createElement("img", {
    src: image,
    alt: "badges",
    className: "object-fit w-12 h-12"
  })), /* @__PURE__ */ import_react9.default.createElement("p", {
    className: "text-gray-400 text-sm text-center w-16"
  }, label));
};
var AttrContainer = ({ children, title }) => {
  return /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "block p-4 m-1 mb-2 xs:w-full border border-neutral-100 rounded-md",
    style: { flexGrow: 1, flexBasis: 0 }
  }, /* @__PURE__ */ import_react9.default.createElement("h3", {
    className: "text-indigo-900 font-semibold"
  }, title), children);
};
function Index2() {
  return /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "flex flex-col items-center min-w-[240px] "
  }, /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "flex xs:flex-col flex-col md:flex-row m-2 xs:m-1 w-full h-full"
  }, /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "md:w-[25%] w-full"
  }, /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "xs:w-full sm:w-full min-w-fit p-1 sm:p-1 md:p-4 bg-white rounded-md shadow-md hover:shadow-2xl hover:scale-105 transition-all transform duration-500"
  }, /* @__PURE__ */ import_react9.default.createElement("img", {
    src: "https://2kdb.net/storage/players/2k22/giannis_antetokounmpo_61710.jpg",
    alt: "avatar",
    className: "object-cover rounded-t-md"
  }))), /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "xs:flex-col xs:w-full sm:flex-col sm:w-full md:w-[75%] bg-slate-100 rounded-md shadow-md p-4 overflow-auto"
  }, /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "text-lg font-semibold md:text-3xl mb-2 flex"
  }, /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "text-white bg-purple-900 p-2 rounded-sm text-sm mr-2 h-9"
  }, "99"), " ", /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "text-purple-700"
  }, "Giannis Antetokounmpo")), /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "flex flex-wrap md:flex-row w-full mb-4",
    style: { flex: "0 0 auto" }
  }, /* @__PURE__ */ import_react9.default.createElement(AttrBox, {
    label: "Position",
    value: "PF/PG",
    className: "bg-green-100",
    type: "col",
    grow: true
  }), /* @__PURE__ */ import_react9.default.createElement(AttrBox, {
    label: "Offense",
    value: "PF/PG",
    className: "bg-emerald-100",
    type: "col",
    grow: true
  }), /* @__PURE__ */ import_react9.default.createElement(AttrBox, {
    label: "Defense",
    value: "PF/PG",
    className: "bg-emerald-200",
    type: "col",
    grow: true
  }), /* @__PURE__ */ import_react9.default.createElement(AttrBox, {
    label: "Height",
    value: "PF/PG",
    type: "col",
    grow: true
  }), /* @__PURE__ */ import_react9.default.createElement(AttrBox, {
    label: "Weight",
    value: "PF/PG",
    type: "col",
    grow: true
  })))), /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "flex-col w-full bg-slate-100 bg-opacity-25 rounded-md shadow-md p-4"
  }, /* @__PURE__ */ import_react9.default.createElement("h2", {
    className: "font-semibold my-4 text-indigo-900"
  }, "Attributes"), /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "flex flex-wrap md:flex-row w-full mb-4",
    style: { flex: "0 0 auto" }
  }, /* @__PURE__ */ import_react9.default.createElement(AttrContainer, {
    title: "Shooting"
  }, /* @__PURE__ */ import_react9.default.createElement(AttrBox, {
    label: "Driving Layup",
    value: "PF/PG"
  }), /* @__PURE__ */ import_react9.default.createElement(AttrBox, {
    label: "Standing Dunk",
    value: "PF/PG"
  }), /* @__PURE__ */ import_react9.default.createElement(AttrBox, {
    label: "Driving Dunk",
    value: "PF/PG"
  }), /* @__PURE__ */ import_react9.default.createElement(AttrBox, {
    label: "Post Fade",
    value: "PF/PG"
  }), /* @__PURE__ */ import_react9.default.createElement(AttrBox, {
    label: "Post Hook",
    value: "PF/PG"
  }), /* @__PURE__ */ import_react9.default.createElement(AttrBox, {
    label: "Post Control",
    value: "PF/PG"
  }), /* @__PURE__ */ import_react9.default.createElement(AttrBox, {
    label: "Draw Foul",
    value: "PF/PG"
  }), /* @__PURE__ */ import_react9.default.createElement(AttrBox, {
    label: "Close Shot",
    value: "PF/PG"
  }), /* @__PURE__ */ import_react9.default.createElement(AttrBox, {
    label: "Mid-Range Shot",
    value: "PF/PG"
  }), /* @__PURE__ */ import_react9.default.createElement(AttrBox, {
    label: "Three-Point Shot",
    value: "PF/PG"
  }), /* @__PURE__ */ import_react9.default.createElement(AttrBox, {
    label: "Free Throw",
    value: "PF/PG"
  })), /* @__PURE__ */ import_react9.default.createElement(AttrContainer, {
    title: "Defense"
  }, /* @__PURE__ */ import_react9.default.createElement(AttrBox, {
    label: "Block",
    value: "PF/PG"
  }), /* @__PURE__ */ import_react9.default.createElement(AttrBox, {
    label: "Steal",
    value: "PF/PG"
  }), /* @__PURE__ */ import_react9.default.createElement(AttrBox, {
    label: "Perimeter Defense",
    value: "PF/PG"
  }), /* @__PURE__ */ import_react9.default.createElement(AttrBox, {
    label: "Interior Defense",
    value: "PF/PG"
  })), /* @__PURE__ */ import_react9.default.createElement(AttrContainer, {
    title: "Rebounding"
  }, /* @__PURE__ */ import_react9.default.createElement(AttrBox, {
    label: "Offensive Rebound",
    value: "PF/PG"
  }), /* @__PURE__ */ import_react9.default.createElement(AttrBox, {
    label: "Defensive Rebound",
    value: "PF/PG"
  })), /* @__PURE__ */ import_react9.default.createElement(AttrContainer, {
    title: "Athleticism"
  }, /* @__PURE__ */ import_react9.default.createElement(AttrBox, {
    label: "Speed",
    value: "PF/PG"
  }), /* @__PURE__ */ import_react9.default.createElement(AttrBox, {
    label: "Speed With Ball",
    value: "PF/PG"
  }), /* @__PURE__ */ import_react9.default.createElement(AttrBox, {
    label: "Acceleration",
    value: "PF/PG"
  }), /* @__PURE__ */ import_react9.default.createElement(AttrBox, {
    label: "Vertical",
    value: "PF/PG"
  }), /* @__PURE__ */ import_react9.default.createElement(AttrBox, {
    label: "Strength",
    value: "PF/PG"
  }), /* @__PURE__ */ import_react9.default.createElement(AttrBox, {
    label: "Stamina",
    value: "PF/PG"
  }), /* @__PURE__ */ import_react9.default.createElement(AttrBox, {
    label: "Hustle",
    value: "PF/PG"
  }), /* @__PURE__ */ import_react9.default.createElement(AttrBox, {
    label: "Lateral Quickness",
    value: "PF/PG"
  })), /* @__PURE__ */ import_react9.default.createElement(AttrContainer, {
    title: "Mental"
  }, /* @__PURE__ */ import_react9.default.createElement(AttrBox, {
    label: "Pass Perception",
    value: "PF/PG"
  }), /* @__PURE__ */ import_react9.default.createElement(AttrBox, {
    label: "Defensive Consistency",
    value: "PF/PG"
  }), /* @__PURE__ */ import_react9.default.createElement(AttrBox, {
    label: "Offensive Consistency",
    value: "PF/PG"
  }), /* @__PURE__ */ import_react9.default.createElement(AttrBox, {
    label: "Help Defense",
    value: "PF/PG"
  }), /* @__PURE__ */ import_react9.default.createElement(AttrBox, {
    label: "Shot IQ",
    value: "PF/PG"
  })))), /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "flex-col w-full bg-slate-100 bg-opacity-25 rounded-md shadow-md p-4"
  }, /* @__PURE__ */ import_react9.default.createElement("h2", {
    className: "font-semibold my-4 text-indigo-900"
  }, "Badges"), /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "flex flex-wrap md:flex-row xs:flex-col w-full mb-4",
    style: { flex: "0 0 auto" }
  }, /* @__PURE__ */ import_react9.default.createElement(AttrContainer, {
    title: "Shooting Badges"
  }, /* @__PURE__ */ import_react9.default.createElement("div", {
    className: "flex flex-wrap md:flex-row w-full mb-4",
    style: { flex: "0 0 auto" }
  }, /* @__PURE__ */ import_react9.default.createElement(BadgesBox, {
    image: "https://2kdb.net/storage/assets/badges/blinders_hof.png",
    label: "Blinders something"
  }), /* @__PURE__ */ import_react9.default.createElement(BadgesBox, {
    image: "https://2kdb.net/storage/assets/badges/blinders_hof.png",
    label: "Blinders"
  }))), /* @__PURE__ */ import_react9.default.createElement(AttrContainer, {
    title: "Playmaking Badges"
  }, /* @__PURE__ */ import_react9.default.createElement(BadgesBox, {
    image: "https://2kdb.net/storage/assets/badges/blinders_hof.png",
    label: "Blinders"
  })), /* @__PURE__ */ import_react9.default.createElement(AttrContainer, {
    title: "Defensive Badges"
  }, /* @__PURE__ */ import_react9.default.createElement(BadgesBox, {
    image: "https://2kdb.net/storage/assets/badges/blinders_hof.png",
    label: "Blinders"
  })))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "620eb3e4", "entry": { "module": "/build/entry.client-M5FI3OPV.js", "imports": ["/build/_shared/chunk-WME34PFE.js", "/build/_shared/chunk-6BO74FWO.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-NPKNKYSQ.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/cards": { "id": "routes/cards", "parentId": "root", "path": "cards", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/cards-HZ7FYQSF.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-JZFWVRDT.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/players/index": { "id": "routes/players/index", "parentId": "root", "path": "players", "index": true, "caseSensitive": void 0, "module": "/build/routes/players/index-RNDB7HJC.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/players/temp": { "id": "routes/players/temp", "parentId": "root", "path": "players/temp", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/players/temp-DJYRV22C.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-620EB3E4.js" };

// server-entry-module:@remix-run/dev/server-build
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
  "routes/players/index": {
    id: "routes/players/index",
    parentId: "root",
    path: "players",
    index: true,
    caseSensitive: void 0,
    module: players_exports
  },
  "routes/players/temp": {
    id: "routes/players/temp",
    parentId: "root",
    path: "players/temp",
    index: void 0,
    caseSensitive: void 0,
    module: temp_exports
  },
  "routes/cards": {
    id: "routes/cards",
    parentId: "root",
    path: "cards",
    index: void 0,
    caseSensitive: void 0,
    module: cards_exports
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
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=index.js.map
