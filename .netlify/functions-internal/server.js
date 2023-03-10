var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react4 = require("@remix-run/react");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-5ADOD2D2.css";

// app/components/BaseHeader.tsx
var import_react3 = require("@remix-run/react");

// app/components/LogoLink.tsx
var import_react2 = require("@remix-run/react"), import_jsx_runtime2 = require("react/jsx-runtime");
function LogoLink() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h1", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_react2.Link, { to: "/", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "text-green-800", children: "Hacker" }),
    " ",
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "text-green-600", children: "News" })
  ] }) });
}

// app/components/BaseHeader.tsx
var import_solid = require("@heroicons/react/24/solid"), import_jsx_runtime3 = require("react/jsx-runtime");
function BaseHeader({ withBackBtn }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("header", { className: "sticky-header flex justify-center mb-1 w-[100%]", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex p-5 text-center justify-between items-center w-[350px] sm:w-[450px] lg:w-[550px]", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(LogoLink, {}),
    withBackBtn && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_solid.ArrowUturnLeftIcon, { className: " w-8 p-1 text-white bg-green-800 rounded" }) })
  ] }) });
}

// app/root.tsx
var import_jsx_runtime4 = require("react/jsx-runtime"), meta = () => ({
  charset: "utf-8",
  title: "News",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react4.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react4.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react4.Outlet, {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react4.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react4.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react4.LiveReload, {})
    ] })
  ] });
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react4.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react4.Links, {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("title", { children: "Error" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(BaseHeader, {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("section", { className: "error-message", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("h1", { className: "text-center w-[350px] sm:w-[450px] lg:w-[550px]", children: [
          "Something went wrong during fetching a news feed",
          " "
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-center w-[350px] sm:w-[450px] lg:w-[550px]", children: "Please, try again later" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react4.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react4.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react4.LiveReload, {})
    ] })
  ] });
}
var links = () => [{ rel: "stylesheet", href: tailwind_default }];

// app/routes/$newsItemId.tsx
var newsItemId_exports = {};
__export(newsItemId_exports, {
  ErrorBoundary: () => ErrorBoundary2,
  default: () => NewsItemDetailsPage,
  loader: () => loader
});

// app/components/NewsItemDetails.tsx
var import_react9 = require("@remix-run/react");

// app/utils/helpers.ts
var cheerio = require("cheerio");
function decode(text) {
  return typeof text == "string" && text.length > 0 ? cheerio.load(text).root().text().trim() : "...";
}
function getCuttedString(str, length) {
  return str.slice(0, length) + "...";
}
function getDateString(time) {
  return time ? new Date(time * 1e3).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }) : "";
}

// app/components/BadgeComments.tsx
var import_outline = require("@heroicons/react/24/outline"), import_jsx_runtime5 = require("react/jsx-runtime");
function BadgeComments({
  amount,
  clickable
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "flex items-center", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_outline.ChatBubbleLeftRightIcon, { className: `w-4 ${clickable ? "text-green-500" : ""}` }),
    amount && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "ml-1 text-xs", children: amount })
  ] });
}

// app/components/Comments.tsx
var import_outline3 = require("@heroicons/react/24/outline"), import_react_router = require("react-router");

// app/hooks/useRevalidate.ts
var import_react5 = require("@remix-run/react"), import_react6 = require("react");
function useRevalidate() {
  let navigate = (0, import_react5.useNavigate)();
  return (0, import_react6.useCallback)(
    function() {
      console.log("revalidate"), navigate(".", { replace: !0 });
    },
    [navigate]
  );
}

// app/components/HNComment.tsx
var import_react8 = require("react");

// app/loaders/newsLoaders.ts
var baseURL = "https://hacker-news.firebaseio.com/v0/", newStoriesQuery = "newstories.json?print=pretty";
async function fetchNewsFeed() {
  let urlLatestNewsIds = `${baseURL}${newStoriesQuery}`;
  try {
    let newsIds = (await (await fetch(urlLatestNewsIds)).json()).slice(0, 100), latestNewsResponces = await Promise.all(
      newsIds.map(
        (itemId) => fetch(`${baseURL}item/${itemId}.json?print=pretty`)
      )
    ), latestNews = await Promise.all(
      latestNewsResponces.map((res) => res.json())
    );
    return addDateStringToAll(latestNews);
  } catch (err) {
    err instanceof Error && console.warn(err.message);
  }
}
async function fetchNewsItem(newsItemId) {
  try {
    let newsItem = await (await fetch(`${baseURL}item/${newsItemId}.json?print=pretty`)).json();
    return newsItem.date = getDateString(newsItem.time), newsItem;
  } catch (err) {
    err instanceof Error && console.warn(err.message);
  }
}
async function fetchComments(commentsIds) {
  try {
    let rootCommentsResponces = await Promise.all(
      commentsIds.map(
        (commentId) => fetch(`${baseURL}item/${commentId}.json?print=pretty`)
      )
    ), rootComments = await Promise.all(
      rootCommentsResponces.map((res) => res.json())
    );
    return addDateStringToAll(rootComments);
  } catch (err) {
    err instanceof Error && console.warn(err.message);
  }
}
function addDateStringToAll(items) {
  return items.map((item) => (item.date = getDateString(item.time), item));
}

// app/components/CollapsedText.tsx
var import_react7 = require("react"), import_jsx_runtime6 = require("react/jsx-runtime");
function CollapsedText({
  text,
  length
}) {
  let [showHidden, setShowHidden] = (0, import_react7.useState)(!1), shownText = text.slice(0, length), hiddenText = text.slice(length);
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
    "p",
    {
      className: "text-green text-s cursor-pointer",
      onClick: () => setShowHidden(!showHidden),
      children: [
        shownText,
        !showHidden && hiddenText && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "text-green-400 text-xs", children: "...read more" }),
        showHidden && /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("span", { children: [
          hiddenText,
          " "
        ] }),
        showHidden && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "text-green-300 text-xs", children: "...show less" })
      ]
    }
  );
}

// app/components/HNComment.tsx
var import_outline2 = require("@heroicons/react/24/outline");
var import_jsx_runtime7 = require("react/jsx-runtime");
function HNComment({ comment }) {
  let { text, date, by, kids } = comment, [showSubcomments, setShowSubcomments] = (0, import_react8.useState)(!1), [subcomments, setSubcomments] = (0, import_react8.useState)([]);
  (0, import_react8.useEffect)(() => ((async () => {
    if (showSubcomments && kids && Array.isArray(kids) && kids.length > 0) {
      let comments = await fetchComments(kids);
      setSubcomments(comments);
    }
  })(), () => {
  }), [showSubcomments]);
  let decodedText = decode(text);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("article", { className: "mb-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(CollapsedText, { text: decodedText, length: 100 }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("p", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "text-xs bold", children: by }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "text-xs ml-4 opacity-40", children: date })
      ] }),
      kids && kids.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        "span",
        {
          className: "cursor-pointer",
          onClick: () => setShowSubcomments(!showSubcomments),
          children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(BadgeComments, { clickable: !0 })
        }
      )
    ] }),
    showSubcomments && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("section", { className: "ml-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_outline2.ArrowUpIcon, { className: "w-4" }),
      subcomments == null ? void 0 : subcomments.map((subcomment) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(HNComment, { comment: subcomment }, subcomment.id))
    ] })
  ] });
}

// app/components/Comments.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
function Comments() {
  let { comments } = (0, import_react_router.useLoaderData)(), revalidate = useRevalidate();
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("section", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("h2", { className: "flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { children: "Comments" }),
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        "button",
        {
          className: "p-2",
          onClick: () => {
            revalidate();
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_outline3.ArrowPathIcon, { className: "w-5 p-1 text-white bg-green-600 rounded" })
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("hr", { className: "mb-2" }),
    comments.map((comment) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(HNComment, { comment }, comment.by))
  ] });
}

// app/components/NewsItemDetails.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
function NewsItemDetails() {
  let { newsItem, comments } = (0, import_react9.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("article", { className: "news-details p-5 flex flex-col gap-2 w-[350px] sm:w-[450px] lg:w-[550px]", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("header", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h1", { className: "mb-2 text-xl", children: newsItem.title }),
      newsItem.url ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("a", { className: "text-blue-500 text-sm", href: newsItem.url, children: getCuttedString(newsItem.url, 40) }) : /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "text-red-400 text-sm", children: "URL is not provided" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex gap-1 justify-between items-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "text-sm", children: newsItem.date }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { children: newsItem.by }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(BadgeComments, { amount: newsItem.descendants })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Comments, {})
  ] });
}

// app/routes/$newsItemId.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
function NewsItemDetailsPage() {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(BaseHeader, { withBackBtn: !0 }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(NewsItemDetails, {}) })
  ] });
}
async function loader({ params }) {
  let newsItemId = params.newsItemId;
  if (newsItemId)
    try {
      let newsItem = await fetchNewsItem(newsItemId), comments = [];
      if (newsItem != null && newsItem.kids && (comments = await fetchComments(newsItem == null ? void 0 : newsItem.kids) || []), newsItem && comments)
        return { newsItem, comments };
    } catch (err) {
      err instanceof Error && console.log(err);
    }
}
function ErrorBoundary2({ error }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(BaseHeader, { withBackBtn: !0 }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("section", { className: "error-message", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h1", { className: "text-center w-[350px] sm:w-[450px] lg:w-[550px]", children: "Something wrong with fetching this news item..." }) })
  ] });
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  loader: () => loader2,
  meta: () => meta2
});
var import_react11 = require("react");

// app/components/NewsList.tsx
var import_react10 = require("@remix-run/react");

// app/assets/star.svg
var star_default = "/build/_assets/star-NPXVD3PV.svg";

// app/components/Score.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
function Score({ score }) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex items-center", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("img", { src: star_default, alt: "score" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "ml-1 text-xs", children: score })
  ] });
}

// app/components/NewsItem.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
function NewsItem({ newsItem }) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("article", { className: "p-2  rounded bg-green-200 shadow-md w-[350px] sm:w-[450px] lg:w-[550px]", children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h1", { className: "text-m font-semibold text-left mb-2", children: newsItem.title }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "flex gap-1 justify-between items-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Score, { score: newsItem.score }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "text-sm", children: newsItem.by }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "text-sm", children: newsItem.date })
    ] })
  ] });
}

// app/components/NewsList.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
function NewsList() {
  let newsData = (0, import_react10.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("ul", { className: "flex flex-col items-center gap-3", children: newsData.map((newsItem) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react10.Link, { to: newsItem.id.toString(), children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(NewsItem, { newsItem }) }) }, newsItem.id)) });
}

// app/routes/_index.tsx
var import_solid2 = require("@heroicons/react/24/solid");
var import_jsx_runtime14 = require("react/jsx-runtime"), REFRESH_TIME = 60 * 1e3, meta2 = () => ({
  charset: "utf-8",
  title: "News",
  viewport: "width=device-width,initial-scale=1"
});
function Index() {
  let revalidate = useRevalidate();
  return (0, import_react11.useEffect)(() => {
    let updateInterval = setInterval(revalidate, REFRESH_TIME);
    return () => {
      clearInterval(updateInterval);
    };
  }, []), /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_jsx_runtime14.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("header", { className: "sticky-header flex justify-center mb-1 w-[100%]", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "flex p-5 text-center justify-between items-center w-[350px] sm:w-[450px] lg:w-[550px]", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(LogoLink, {}),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("button", { className: "p-2", onClick: () => revalidate(), children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_solid2.ArrowPathIcon, { className: " w-8 p-1 text-white bg-green-800 rounded" }) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(NewsList, {}) })
  ] });
}
async function loader2({ request, params }) {
  return await fetchNewsFeed();
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "19d1df2f", entry: { module: "/build/entry.client-2MAEZGAC.js", imports: ["/build/_shared/chunk-C4F4GX2T.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-2KYRXLI3.js", imports: ["/build/_shared/chunk-NWEF6JSL.js", "/build/_shared/chunk-5LNV43EA.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/$newsItemId": { id: "routes/$newsItemId", parentId: "root", path: ":newsItemId", index: void 0, caseSensitive: void 0, module: "/build/routes/$newsItemId-TNL2CUI4.js", imports: ["/build/_shared/chunk-AP4KLXUO.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-MMU2LNKH.js", imports: ["/build/_shared/chunk-AP4KLXUO.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-19D1DF2F.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !0, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !1, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/$newsItemId": {
    id: "routes/$newsItemId",
    parentId: "root",
    path: ":newsItemId",
    index: void 0,
    caseSensitive: void 0,
    module: newsItemId_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
