// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"idB4P":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "a1d1c68becb4f059";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"7QUTA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "uk", ()=>uk);
const uk = {
    "link-about": "\u041F\u0440\u043E \u043D\u0430\u0441",
    "link-pricing": "\u0426i\u043D\u0438",
    "link-contacts": "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438",
    "hero-title": "\u0411\u0440\u043E\u0432\u0438, \u0412\u0456\u0457, \u041Di\u0433\u0442i i&nbsp;\u0414\u0435\u043Fi\u043B\u044F\u0446i\u044F",
    "hero-subtitle": "\u0412\u0442i\u0447\u0438 \u0432\u0456\u0434 \u0449\u043E\u0434\u0435\u043D\u043D\u043E\u0457 \u0441\u0443\u0454\u0442\u0438 \u0442\u0430 \u0434\u043E\u0433\u043B\u044F\u043D\u044C \u0437\u0430 \u0441\u043E\u0431\u043E\u044E.",
    // 'appoint-plname': 'Твоє Ім`я',
    // 'appoint-plnumber': 'Your phone number',
    // 'appoint-name': 'Ім`я',
    // 'appoint-phone': 'Телефон',
    // 'appoint-date': 'Дата',
    "appoint-mistake1": "\u0426\u0435 \u043F\u043E\u043B\u0435 \u043E\u0431\u043E\u0432&rsquo;\u044F\u0437\u043A\u043E\u0432\u0435.",
    "appoint-mistake2": "\u0426\u0435 \u043F\u043E\u043B\u0435 \u043E\u0431\u043E\u0432&rsquo;\u044F\u0437\u043A\u043E\u0432\u0435.",
    "appoint-mistake3": "\u0426\u0435 \u043F\u043E\u043B\u0435 \u043E\u0431\u043E\u0432&rsquo;\u044F\u0437\u043A\u043E\u0432\u0435.",
    "appoint-btn": "\u0417\u0430\u043F\u0438\u0441 \u043D\u0430 \u043F\u0440\u0438\u0439\u043E\u043C",
    "featured-title": "\u041D\u0430\u0448\u0456 \u043F\u043E\u0441\u043B\u0443\u0433\u0438",
    "featured-subtitle": "\u041C\u0438 \u043F\u0440\u043E\u043F\u043E\u043D\u0443\u0454\u043C\u043E \u043F\u043E\u0432\u043D\u0438\u0439 \u0441\u043F\u0435\u043A\u0442\u0440 \u043F\u043E\u0441\u043B\u0443\u0433 \u0437 \u0434\u043E\u0433\u043B\u044F\u0434\u0443 \u0437\u0430 \u043D\u0456\u0433\u0442\u044F\u043C\u0438, \u0432\u043A\u043B\u044E\u0447\u0430\u044E\u0447\u0438 \u0441\u0442\u0430\u0439\u043B\u0456\u043D\u0433, \u0444\u0430\u0440\u0431\u0443\u0432\u0430\u043D\u043D\u044F, \u0442\u043E\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u0431\u0440\u0456\u0432 \u0442\u0430 \u0432\u0456\u0439, \u0434\u0435\u043F\u0456\u043B\u044F\u0446\u0456\u044E \u0442\u0430 \u0431\u0430\u0433\u0430\u0442\u043E \u0456\u043D\u0448\u043E\u0433\u043E.",
    "featured-btn1": "\u0437\u0430\u043A\u0430\u0436\u0438 \u0437\u0430\u0440\u0430\u0437",
    "featured-btn2": "\u0437\u0430\u043A\u0430\u0436\u0438 \u0437\u0430\u0440\u0430\u0437",
    "featured-btn3": "\u0437\u0430\u043A\u0430\u0436\u0438 \u0437\u0430\u0440\u0430\u0437",
    "featured-nails": "\u041D\u0456\u0433\u0442\u0456",
    "featured-any": "\u0411\u0443\u0434\u044C-\u044F\u043A\u0456 \u043A\u043E\u043B\u044C\u043E\u0440\u0438, \u044F\u043A\u0456 \u0432\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u0443\u044F\u0432\u0438\u0442\u0438",
    "featured-brows": "\u0411\u0440\u043E\u0432\u0438 \u0442\u0430 \u0432\u0456\u0457",
    "featured-create": "\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F \u0432\u0430\u0448\u043E\u0433\u043E \u043E\u0431\u0440\u0430\u0437\u0443",
    "featured-depilat": "\u0412\u043E\u0441\u043A\u043E\u0432\u0430 \u0434\u0435\u043F\u0456\u043B\u044F\u0446\u0456\u044F",
    "featured-treat": "\u041F\u043E\u0434\u0431\u0430\u0439 \u043F\u0440\u043E \u0441\u0432\u043E\u044E \u0448\u043A\u0456\u0440\u0443",
    "promo-hidden": "\u0410\u043A\u0446\u0456\u0439\u043D\u0456 \u0437\u043D\u0438\u0436\u043A\u0438",
    "promo-subtitle": "\u0442\u0456\u043B\u044C\u043A\u0438 3 \u0434\u043D\u0456",
    "promo-title": "20% \u0437\u043D\u0438\u0436\u043A\u0430 \u043D\u0430 \u0434\u0438\u0437\u0430\u0439\u043D \u043D\u0456\u0433\u0442\u0456\u0432",
    "promo-btn": "\u043F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u0449\u0435",
    "portfolio-title": "\u041D\u0430\u0448\u0435 \u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0456\u043E",
    "portfolio-subtitle": "\u041F\u0435\u0440\u0435\u0433\u043B\u044F\u043D\u044C\u0442\u0435 \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0456\u043E \u043D\u0430\u0448\u0438\u0445 \u0440\u043E\u0431\u0456\u0442, \u0432\u043A\u043B\u044E\u0447\u0430\u044E\u0447\u0438 \u043D\u0456\u0433\u0442\u0456, \u0431\u0440\u043E\u0432\u0438, \u0432\u0456\u0457 \u0442\u0430 \u0456\u043D\u0448\u0435. \u0412\u0441\u0435, \u0449\u043E \u0432\u0438 \u0431\u0430\u0447\u0438\u0442\u0435 \u0442\u0443\u0442, \u0432\u0438\u043A\u043E\u043D\u0430\u043B\u0430 \u043D\u0430\u0448\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430.",
    "about-title": "\u041F\u0440\u043E \u041D\u0430\u0441",
    "about-top": "Beauty Style \u0454 \u043E\u0434\u043D\u0438\u043C \u0437 \u043F\u0440\u043E\u0432\u0456\u0434\u043D\u0438\u0445 \u0441\u0430\u043B\u043E\u043D\u0456\u0432 \u043A\u0440\u0430\u0441\u0438 \u0432 \u0413\u0434\u0430\u043D\u0441\u044C\u043A\u0443.",
    "about-bottom": "\u041D\u0430\u0448 \u0441\u0430\u043B\u043E\u043D \u043A\u0440\u0430\u0441\u0438 \u0437\u0434\u043E\u0431\u0443\u0432 \u043D\u0435\u0439\u043C\u043E\u0432\u0456\u0440\u043D\u0443 \u0440\u0435\u043F\u0443\u0442\u0430\u0446\u0456\u044E, \u043E\u0441\u043A\u0456\u043B\u044C\u043A\u0438 \u043D\u0430\u0448 \u043F\u0440\u043E\u0444\u0435\u0441\u0456\u0439\u043D\u0438\u0439 \u043A\u043E\u043B\u0435\u043A\u0442\u0438\u0432 \u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0443\u0454 \u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u0434\u0438\u0432\u0430 \u0437 \u043E\u0447\u0438\u043C\u0430 \u0456 \u043D\u0456\u0433\u0442\u044F\u043C\u0438 \u043A\u043B\u0456\u0454\u043D\u0442\u0456\u0432 \u0442\u0430 \u043F\u043E\u043A\u0440\u0430\u0449\u0443\u0432\u0430\u0442\u0438 \u0457\u0445\u043D\u0456 \u043F\u0440\u0438\u0440\u043E\u0434\u043D\u0456 \u043F\u0435\u0440\u0435\u0432\u0430\u0433\u0438 \u0447\u0435\u0440\u0435\u0437 \u043D\u0430\u0448\u0456 \u043F\u043E\u0441\u043B\u0443\u0433\u0438.",
    "about-btn": "\u043F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u0449\u0435",
    "equipment-hidden": "\u041D\u0430\u0448\u0456 \u043F\u0435\u0440\u0435\u0432\u0430\u0433\u0438",
    "equipment-team": "\u0414\u0440\u0443\u0436\u043D\u044F \u041A\u043E\u043C\u0430\u043D\u0434\u0430",
    "equipment-staff": "\u041D\u0430\u0448 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B \u0432\u0432\u0456\u0447\u043B\u0438\u0432\u0438\u0439 \u0456 \u0443\u0432\u0430\u0436\u043D\u0438\u0439. \u041C\u0438 \u043F\u0440\u0430\u0433\u043D\u0435\u043C\u043E \u0434\u043E \u0432\u0438\u0441\u043E\u043A\u0438\u0445 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u0456\u0432 \u044F\u043A\u043E\u0441\u0442\u0456 \u044F\u043A \u0443 \u043D\u0430\u0434\u0430\u043D\u043D\u0456 \u043F\u043E\u0441\u043B\u0443\u0433, \u0442\u0430\u043A \u0456 \u0432 \u0441\u043F\u0456\u043B\u043A\u0443\u0432\u0430\u043D\u043D\u0456 \u0437 \u0432\u0430\u043C\u0438.",
    "equipment-equip": "\u041D\u0430\u0439\u043A\u0440\u0430\u0449\u0435 \u043E\u0431\u043B\u0430\u0434\u043D\u0430\u043D\u043D\u044F",
    "equipment-best": "\u041C\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454\u043C\u043E \u043D\u0430\u0439\u043A\u0440\u0430\u0449\u0435 \u043E\u0431\u043B\u0430\u0434\u043D\u0430\u043D\u043D\u044F \u0442\u0430 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0438, \u0449\u043E\u0431 \u043D\u0430\u0434\u0430\u0432\u0430\u0442\u0438 \u043D\u0430\u0448\u0438\u043C \u043A\u043B\u0456\u0454\u043D\u0442\u0430\u043C \u043F\u043E\u0441\u043B\u0443\u0433\u0438 \u043D\u0430\u0439\u0432\u0438\u0449\u043E\u0433\u043E \u0440\u0456\u0432\u043D\u044F \u0432 \u0433\u0430\u043B\u0443\u0437\u0456 \u043A\u0440\u0430\u0441\u0438.",
    "equipment-sphere": "\u0406\u0434\u0435\u0430\u043B\u044C\u043D\u0430 \u0430\u0442\u043C\u043E\u0441\u0444\u0435\u0440\u0430",
    "equipment-atmosphere": "\u041A\u043E\u043B\u0438 \u0432\u0438 \u0437\u0430\u0432\u0456\u0442\u0430\u0454\u0442\u0435 \u0434\u043E Beauty Style, \u0432\u0430\u043C \u0433\u0430\u0440\u0430\u043D\u0442\u043E\u0432\u0430\u043D\u043E \u0432\u0456\u0434\u0447\u0443\u0442\u0438 \u0442\u0435\u043F\u043B\u0443 \u0442\u0430 \u0434\u0440\u0443\u0436\u043D\u044E \u0430\u0442\u043C\u043E\u0441\u0444\u0435\u0440\u0443 \u043D\u0430\u0448\u043E\u0433\u043E \u0441\u0430\u043B\u043E\u043D\u0443.",
    "pricing-title": "\u0426\u0456\u043D\u0438",
    "pricing-lashandbrows": "\u0412\u0456\u0457 \u0442\u0430 \u0411\u0440\u043E\u0432\u0438",
    "pricing-femail": "\u0416\u0456\u043D\u043E\u0447\u0430 \u0434\u0435\u043F\u0456\u043B\u044F\u0446\u0456\u044F",
    "pricing-mail": "\u0427\u043E\u043B\u043E\u0432\u0456\u0447\u0430 \u0434\u0435\u043F\u0456\u043B\u044F\u0446\u0456\u044F",
    "pricing-manicure": "\u041C\u0430\u043D\u0456\u043A\u044E\u0440 \u0456 \u041F\u0435\u0434\u0456\u043A\u044E\u0440",
    "pricing-lashes": "\u0412\u0456\u0457",
    "pricing-laminatelashes": "\u041B\u0410\u041C\u0406\u041D\u0423\u0412\u0410\u041D\u041D\u042F \u0412\u0406\u0419",
    "pricing-botox": "\u041B\u0410\u041C\u0406\u041D\u0423\u0412\u0410\u041D\u041D\u042F \u0412\u0406\u0419 + \u0424\u0410\u0420\u0411\u0423\u0412\u0410\u041D\u041D\u042F + \u0411\u041E\u0422\u041E\u041A\u0421",
    "pricing-extense1": "\u041D\u0410\u0420\u041E\u0429\u0415\u041D\u041D\u042F \u0412\u0406\u0419 1:1",
    "pricing-extense2": "\u041D\u0410\u0420\u041E\u0429\u0415\u041D\u041D\u042F \u0412\u0406\u0419 2:1",
    "pricing-extense3": "\u041D\u0410\u0420\u041E\u0429\u0415\u041D\u041D\u042F \u0412\u0406\u0419 3:1",
    "pricing-extense4": "\u041D\u0410\u0420\u041E\u0429\u0415\u041D\u041D\u042F \u0412\u0406\u0419 4/6:1",
    "pricing-wet": "\u041C\u041E\u041A\u0420\u0418\u0419 \u0415\u0424\u0415\u041A\u0422",
    "pricing-kim": "\u041D\u0410\u0420\u041E\u0429\u0415\u041D\u041D\u042F \u0412\u0406\u0419 \u041A\u0406\u041C \u0415\u0424\u0415\u041A\u0422",
    "pricing-tips": "\u041D\u0410\u0420\u041E\u0429\u0415\u041D\u041D\u042F \u041A\u0406\u041D\u0426\u0406\u0412\u041E\u041A \u0412\u0406\u0419",
    "pricing-remove": "\u0417\u041D\u042F\u0422\u0422\u042F \u041D\u0410\u0420\u041E\u0429\u0415\u041D\u0418\u0425 \u0412\u0406\u0419",
    "pricing-eyebrows": "\u0411\u0440\u043E\u0432\u0438",
    "pricing-shaping": "\u041C\u041E\u0414\u0415\u041B\u042E\u0412\u0410\u041D\u041D\u042F \u0411\u0420\u0406\u0412",
    "pricing-laminatebrows": "\u041B\u0410\u041C\u0406\u041D\u0423\u0412\u0410\u041D\u041D\u042F \u0411\u0420\u0406\u0412",
    "pricing-correction": "\u041B\u0410\u041C\u0406\u041D\u0423\u0412\u0410\u041D\u041D\u042F, \u0424\u041E\u0420\u041C\u0423\u0412\u0410\u041D\u041D\u042F \u0406 \u041A\u041E\u0420\u0415\u041A\u0426\u0406\u042F \u0411\u0420\u0406\u0412",
    "pricing-femdepilat": "\u0416\u0456\u043D\u043E\u0447\u0430 \u0434\u0435\u043F\u0456\u043B\u044F\u0446\u0456\u044F",
    "pricing-sideburns": "\u0411\u0410\u041A\u0415\u041D\u0411\u0410\u0420\u0414\u0418",
    "pricing-nose": "\u041D\u0406\u0421",
    "pricing-chin": "\u041F\u0406\u0414\u0411\u041E\u0420\u0406\u0414\u0414\u042F",
    "pricing-neck": "\u0428\u0418\u042F",
    "pricing-armpits": "\u041F\u0410\u0425\u0412\u0418",
    "pricing-arms1": "\u0420\u0423\u041A\u0418",
    "pricing-arms2": "\u0420\u0423\u041A\u0418 1/2",
    "pricing-line": "\u041B\u0406\u041D\u0406\u042F \u041D\u0410 \u0416\u0418\u0412\u041E\u0422\u0406",
    "pricing-lumbar": "\u041F\u041E\u041F\u0415\u0420\u0415\u041A",
    "pricing-legs": "\u0426\u0406\u041B\u0406 \u041D\u041E\u0413\u0418",
    "pricing-legs2": "\u041D\u041E\u0413\u0418 1/2",
    "pricing-bikinitop": "\u0422\u0420\u0410\u0414\u0418\u0426\u0406\u0419\u041D\u0415 \u0411\u0406\u041A\u0406\u041D\u0406",
    "pricing-bikinideep": "\u0413\u041B\u0418\u0411\u041E\u041A\u0415 \u0411\u0406\u041A\u0406\u041D\u0406",
    "pricing-butt": "\u0421\u0406\u0414\u041D\u0418\u0426\u0406",
    "pricing-maildepilat": "\u0427\u043E\u043B\u043E\u0432\u0456\u0447\u0430 \u0434\u0435\u043F\u0456\u043B\u044F\u0446\u0456\u044F",
    "pricing-mailbrows": "\u041C\u041E\u0414\u0415\u041B\u042E\u0412\u0410\u041D\u041D\u042F \u0411\u0420\u0406\u0412",
    "pricing-ears": "\u0432\u0443\u0445\u0430",
    "pricing-nose": "\u041D\u0406\u0421",
    "pricing-neck": "\u0428\u0418\u042F",
    "pricing-pits": "\u041F\u0410\u0425\u0412\u0418",
    "pricing-back": "\u0421\u041F\u0418\u041D\u0410",
    "pricing-backarms": "\u0421\u041F\u0418\u041D\u0410 + \u0420\u0423\u041A\u0418",
    "pricing-hands": "\u0420\u0423\u041A\u0418",
    "pricing-tors": "\u0422\u0423\u041B\u0423\u0411",
    "pricing-stomack": "\u0416\u0418\u0412\u0406\u0422",
    "pricing-torsostomack": "\u0422\u0423\u041B\u0423\u0411 + \u0416\u0418\u0412\u0406\u0422",
    "pricing-linemale": "\u041B\u0406\u041D\u0406\u042F \u043D\u0430 \u0416\u0418\u0412\u041E\u0422\u0406",
    "pricing-maillegs": "\u041D\u041E\u0413\u0418",
    "pricing-maibut": "\u0421\u0406\u0414\u041D\u0418\u0426\u0406",
    "pricing-bikinilegs": "\u0411\u0406\u041A\u0406\u041D\u0406 + \u0421\u0406\u0414\u041D\u0418\u0426\u0406",
    "pricing-manicuretitle": "\u041C\u0430\u043D\u0456\u043A\u044E\u0440 \u0456 \u041F\u0435\u0434\u0456\u043A\u044E\u0440",
    "pricing-hybridmanicure": "\u0413\u0406\u0411\u0420\u0418\u0414\u041D\u0418\u0419 \u041C\u0410\u041D\u0406\u041A\u042E\u0420",
    "pricing-hybridpicture": "\u0413\u0406\u0411\u0420\u0418\u0414\u041D\u0418\u0419 \u041C\u0410\u041D\u0406\u041A\u042E\u0420 + \u041C\u0410\u041B\u042E\u041D\u041E\u041A",
    "pricing-conditioner": "\u041C\u0410\u041D\u0406\u041A\u042E\u0420 \u0417 \u041A\u041E\u041D\u0414\u0418\u0426\u0406\u041E\u041D\u0415\u0420\u041E\u041C",
    "pricing-french": "\u0424\u0420\u0415\u041D\u0427",
    "pricing-gel": "\u0413\u0415\u041B\u0415\u0412\u0415 \u041D\u0410\u0420\u041E\u0429\u0415\u041D\u041D\u042F + \u0413\u0406\u0411\u0420\u0418\u0414",
    "pricing-geladd": "\u0414\u043E\u043F\u043E\u0432\u043D\u0435\u043D\u043D\u044F \u0433\u0435\u043B\u0435\u043C + \u0413\u0406\u0411\u0420\u0418\u0414",
    "pricing-natural": "\u0413\u0415\u041B\u042C \u041D\u0410 \u041D\u0410\u0422\u0423\u0420\u0410\u041B\u042C\u041D\u0418\u0425 \u041F\u041B\u0410\u0421\u0422\u0418\u041D\u0410\u0425",
    "pricing-picturehybrid": "\u0424\u041E\u0422\u041E \u0413\u0406\u0411\u0420\u0418\u0414\u0423 \u0406 \u041C\u0410\u041D\u0406\u041A\u042E\u0420\u0423 \u0417 \u041A\u041E\u041D\u0414\u0418\u0426\u0406\u041E\u041D\u0415\u0420\u041E\u041C",
    "pricing-gelpicture": "\u0424\u041E\u0422\u041E\u0413\u0415\u041B\u042C + \u041C\u0410\u041D\u0406\u041A\u042E\u0420 \u0417 \u041A\u041E\u041D\u0414\u0418\u0426\u0406\u041E\u041D\u0415\u0420\u041E\u041C",
    "pricing-hybridpedicure": "\u0413\u0406\u0411\u0420\u0418\u0414\u041D\u0418\u0419 \u041F\u0415\u0414\u0418\u041A\u042E\u0420",
    "pricing-pedicurefeet": "\u0413\u0406\u0411\u0420\u0418\u0414\u041D\u0418\u0419 \u041F\u0415\u0414\u0418\u041A\u042E\u0420 + \u0421\u0422\u041E\u041F\u0418",
    "pricing-pedicurecondicioner": "\u041F\u0415\u0414\u0418\u041A\u042E\u0420 \u0417 \u041A\u041E\u041D\u0414\u0418\u0426\u0406\u041E\u041D\u0415\u0420\u041E\u041C",
    "pricing-reconstruction": "\u0420\u0415\u041A\u041E\u041D\u0421\u0422\u0420\u0423\u041A\u0426\u0406\u042F \u041D\u0406\u0413\u0422\u0406\u0412 \u0412 \u041D\u0410\u0428\u041E\u041C\u0423 \u0421\u0410\u041B\u041E\u041D\u0406",
    "pricing-gelremove": "\u0417\u041D\u042F\u0422\u0422\u042F \u0413\u0415\u041B\u042E (\u041F\u041E\u0421\u041B\u0423\u0413\u0410 \u0414\u041E\u0414\u0410\u041D\u0410 \u0414\u041E \u0406\u041D\u0428\u041E\u0407)",
    "recommends-title": "\u0406\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F \u0434\u043B\u044F \u043A\u043B\u0456\u0454\u043D\u0442\u0430",
    "recommends-check": "\u0427\u0415\u041A-\u041B\u0418\u0421\u0422 \u0406\u0414\u0415\u0410\u041B\u042C\u041D\u041E\u0413\u041E \u041A\u041B\u0406\u0404\u041D\u0422\u0410",
    "recommends-late": "\u041D\u0430\u043C\u0430\u0433\u0430\u0439\u0442\u0435\u0441\u044F \u043D\u0435 \u0437\u0430\u043F\u0456\u0437\u043D\u044E\u0432\u0430\u0442\u0438\u0441\u044F \u0431\u0456\u043B\u044C\u0448\u0435 \u043D\u0456\u0436 \u043D\u0430 15 \u0445\u0432\u0438\u043B\u0438\u043D. \u042F\u043A\u0449\u043E \u0432\u0438 \u0437\u0430\u043F\u0456\u0437\u043D\u0438\u043B\u0438\u0441\u044F \u0431\u0456\u043B\u044C\u0448\u0435, \u043D\u0456\u0436 \u043D\u0430 15 \u0445\u0432\u0438\u043B\u0438\u043D, \u0437\u0443\u0441\u0442\u0440\u0456\u0447 \u0431\u0443\u0434\u0435 \u0441\u043A\u0430\u0441\u043E\u0432\u0430\u043D\u0430 \u0430\u0431\u043E \u043F\u0435\u0440\u0435\u043D\u0435\u0441\u0435\u043D\u0430.",
    "recommends-time": "\u042F\u043A\u0449\u043E \u0432\u0438 \u0437\u0430\u043F\u0456\u0437\u0434\u043D\u044E\u0454\u0442\u0435\u0441\u044F, \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u0442\u0435 \u043D\u0430\u0441, \u043E\u0441\u043A\u0456\u043B\u044C\u043A\u0438 \u0447\u0430\u0441 \u0434\u043B\u044F \u043A\u043E\u0436\u043D\u043E\u0433\u043E \u043A\u043B\u0456\u0454\u043D\u0442\u0430 \u043E\u0431\u043C\u0435\u0436\u0435\u043D\u0438\u0439.",
    "recommends-alone": "\u041F\u0440\u0438\u0445\u043E\u0434\u044C\u0442\u0435 \u0431\u0435\u0437 \u0441\u0443\u043F\u0440\u043E\u0432\u043E\u0434\u0443.",
    "recommends-sick": "\u042F\u043A\u0449\u043E \u0432\u0438 \u0437\u0430\u0445\u0432\u043E\u0440\u0456\u043B\u0438, \u043E\u0431\u043E\u0432`\u044F\u0437\u043A\u043E\u0432\u043E \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u0442\u0435 \u0456 \u043F\u0435\u0440\u0435\u043D\u0435\u0441\u0456\u0442\u044C \u043F\u0440\u0438\u0439\u043E\u043C.",
    "recommends-plan": "\u041F\u0430\u043C`\u044F\u0442\u0430\u0439\u0442\u0435, \u0449\u043E \u044F\u043A\u0456\u0441\u043D\u0430 \u0440\u043E\u0431\u043E\u0442\u0430 \u0432\u0438\u043C\u0430\u0433\u0430\u0454 \u0447\u0430\u0441\u0443 \u0456 \u0442\u0435\u0440\u043F\u0456\u043D\u043D\u044F, \u0437\u0430\u043F\u0430\u0441\u0456\u0442\u044C\u0441\u044F \u043D\u0438\u043C \u0437\u0430\u0437\u0434\u0430\u043B\u0435\u0433\u0456\u0434\u044C.",
    "recommends-trim": "\u0427\u043E\u043C\u0443 \u043D\u0435 \u043C\u043E\u0436\u043D\u0430 \u0441\u0442\u0440\u0438\u0433\u0442\u0438 \u0431\u0440\u043E\u0432\u0438?",
    "recommends-hair": "\u041F\u043E \u0441\u0432\u043E\u0457\u0439 \u043F\u0440\u0438\u0440\u043E\u0434\u0456, \u0432\u043E\u043B\u043E\u0441\u0438\u043D\u043A\u0430 \u043C\u0430\u0454 \u0442\u043E\u043D\u043A\u0438\u0439 \u0437\u0430\u043F\u0430\u044F\u043D\u0438\u0439 \u043A\u0456\u043D\u0447\u0438\u043A.",
    "recommends-disrupts": "\u0421\u0442\u0440\u0438\u0436\u043A\u0430 \u0431\u0440\u0456\u0432 \u043F\u043E\u0440\u0443\u0448\u0443\u0454 \u0439\u043E\u0433\u043E \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0443. \u0422\u043E\u0432\u0441\u0442\u0438\u0439, \u0441\u0442\u0440\u0438\u0436\u0435\u043D\u0438\u0439 \u0432\u043E\u043B\u043E\u0441\u043E\u043A \u043F\u043E\u0433\u0430\u043D\u043E \u0443\u043A\u043B\u0430\u0434\u0430\u0454\u0442\u044C\u0441\u044F \u0456 \u043F\u0440\u043E\u0432\u0438\u0441\u0430\u0454, \u0449\u043E \u0437 \u0447\u0430\u0441\u043E\u043C \u043C\u043E\u0436\u0435 \u043F\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u0434\u043E \u0437\u043C\u0456\u043D\u0438 \u043D\u0430\u043F\u0440\u044F\u043C\u043A\u0443 \u0440\u043E\u0441\u0442\u0443.",
    "recommends-structure": "\u0427\u0435\u0440\u0435\u0437 \u0437\u043C\u0456\u043D\u0443 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0438 \u0432 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0456 \u0444\u0430\u0440\u0431\u0443\u0432\u0430\u043D\u043D\u044F, \u043A\u043E\u043B\u0456\u0440 \u0431\u0440\u0456\u0432 \u0431\u0443\u0434\u0435 \u043D\u0435\u043E\u0434\u043D\u043E\u0440\u0456\u0434\u043D\u0438\u043C. \u0421\u0442\u0440\u0438\u0436\u0435\u043D\u0438\u0439 \u0432\u043E\u043B\u043E\u0441\u043E\u043A \u0431\u0443\u0434\u0435 \u0431\u0456\u043B\u044C\u0448 \u044F\u0441\u043A\u0440\u0430\u0432\u0438\u043C, \u0431\u0435\u0437 \u0442\u043E\u043D\u043A\u043E\u0433\u043E \u043A\u0456\u043D\u0447\u0438\u043A\u0430.",
    "recommends-dye": "\u041F\u0440\u0438 \u0446\u044C\u043E\u043C\u0443, \u0437 \u043D\u044C\u043E\u0433\u043E \u0431\u0438\u0441\u0442\u0440\u0456\u0448\u0435 \u0432\u0438\u0439\u0434\u0435 \u043F\u0456\u0433\u043C\u0435\u043D\u0442, \u0449\u043E \u0437\u043C\u0435\u043D\u0448\u0443\u0454 \u0442\u0435\u0440\u043C\u0456\u043D \u043D\u043E\u0441\u0456\u043D\u043D\u044F \u0444\u0430\u0440\u0431\u0438.",
    "recommends-fence": "\u0420\u0456\u0432\u043D\u0430 \u043B\u0456\u043D\u0456\u044F \u0441\u0442\u0440\u0438\u0436\u043A\u0438 \u0443\u0436\u0435 \u0447\u0435\u0440\u0435\u0437 \u0442\u0438\u0436\u0434\u0435\u043D\u044C \u0431\u0443\u0434\u0435 \u0432\u0438\u0433\u043B\u044F\u0434\u0430\u0442\u0438 \u044F\u043A \u043F\u0430\u0440\u043A\u0430\u043D, \u0442\u0430\u043A \u044F\u043A \u0443 \u0432\u043E\u043B\u043E\u0441\u043A\u0456\u0432 \u0440\u0456\u0437\u043D\u0456 \u0444\u0430\u0437\u0438 \u0440\u043E\u0441\u0442\u0443.",
    "recommends-whiskers": "\u041D\u0430 \u0434\u043E\u0442\u0438\u043A \u0432\u043E\u043B\u043E\u0441\u043A\u0438 \u0431\u0443\u0434\u0443\u0442\u044C \u0442\u043E\u0432\u0441\u0442\u0438\u043C\u0438 \u0456 \u043A\u043E\u043B\u044E\u0447\u0438\u043C\u0438, \u044F\u043A \u0432\u0443\u0441\u0430.",
    "recommends-depilation": "\u0414\u0435\u043F\u0456\u043B\u044F\u0446\u0456\u044F",
    "recommends-before": "\u041F\u0435\u0440\u0435\u0434 \u0434\u0435\u043F\u0456\u043B\u044F\u0446\u0456\u0454\u044E \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u043E \u043F\u0456\u0434\u0433\u043E\u0442\u0443\u0432\u0430\u0442\u0438 \u0448\u043A\u0456\u0440\u0443, \u0449\u043E\u0431 \u0434\u0435\u043F\u0456\u043B\u044F\u0446\u0456\u044F \u0431\u0443\u043B\u0430 \u0435\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u044E \u0456 \u044F\u043A\u043E\u043C\u043E\u0433\u0430 \u043C\u0435\u043D\u0448 \u0442\u0440\u0430\u0432\u043C\u0430\u0442\u0438\u0447\u043D\u043E\u044E. \u0414\u0435\u044F\u043A\u0456 \u043F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u0447\u0456 \u0434\u0456\u0457 \u0441\u043B\u0456\u0434 \u043F\u043E\u0447\u0438\u043D\u0430\u0442\u0438 \u0437\u0430 \u043A\u0456\u043B\u044C\u043A\u0430 \u0434\u043D\u0456\u0432 \u0430\u0431\u043E \u043D\u0430\u0432\u0456\u0442\u044C \u0442\u0438\u0436\u043D\u0456\u0432 \u0434\u043E \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u0438. \u0417\u0430\u043F\u043B\u0430\u043D\u0443\u0439\u0442\u0435 \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u0443 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u0432\u043E\u043B\u043E\u0441\u0441\u044F \u043F\u0440\u0438\u043D\u0430\u0439\u043C\u043D\u0456 \u0437\u0430 \u043C\u0456\u0441\u044F\u0446\u044C, \u0449\u043E\u0431 \u0432\u0430\u0448\u0430 \u0448\u043A\u0456\u0440\u0430 \u0437\u0430\u043B\u0438\u0448\u0430\u043B\u0430\u0441\u044F \u0437\u0434\u043E\u0440\u043E\u0432\u043E\u044E \u0442\u0430 \u0433\u043B\u0430\u0434\u043A\u043E\u044E",
    "recommends-predepilation": "\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0456\u0457 \u043F\u0435\u0440\u0435\u0434 \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u043E\u044E \u0434\u0435\u043F\u0456\u043B\u044F\u0446\u0456\u0457:",
    "recommends-length": "\u0414\u043E\u0432\u0436\u0438\u043D\u0430 \u0432\u043E\u043B\u043E\u0441\u0441\u044F \u043F\u0435\u0440\u0435\u0434 \u043F\u0435\u0440\u0448\u043E\u044E \u0434\u0435\u043F\u0456\u043B\u044F\u0446\u0456\u0454\u044E \u043D\u0435 \u043C\u0435\u043D\u0448\u0435 6-7 \u043C\u043C. \u0426\u0435 \u043F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u043E 2 \u0442\u0438\u0436\u043D\u0456 \u043F\u0456\u0441\u043B\u044F \u0433\u043E\u043B\u0456\u043D\u043D\u044F.",
    "recommends-subsequent": "\u0414\u043B\u044F \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u0445 \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440 \u0434\u043E\u0441\u0442\u0430\u0442\u043D\u044C\u043E 5-6 \u043C\u043C, \u0442\u043E\u043C\u0443 \u0449\u043E \u0432\u043E\u043B\u043E\u0441\u0441\u044F \u0431\u0443\u0434\u0435 \u0442\u043E\u043D\u0448\u0438\u043C \u0456 \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0439\u043E\u0433\u043E \u0431\u0443\u0434\u0435 \u043B\u0435\u0433\u0448\u0435.",
    "recommends-peels": "\u0417\u0430 \u0442\u0440\u0438 \u0434\u043D\u0456 \u0434\u043E \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u0438 \u043D\u0435 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0454\u0442\u044C\u0441\u044F \u0440\u043E\u0431\u0438\u0442\u0438 \u043F\u0456\u043B\u0456\u043D\u0433\u0438.",
    "recommends-sunbathe": "\u0417\u0430 \u0441\u0456\u043C \u0434\u043D\u0456\u0432 \u043D\u0435 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0454\u0442\u044C\u0441\u044F \u0437\u0430\u0441\u043C\u0430\u0433\u0430\u0442\u0438 \u043D\u0430 \u0441\u043E\u043D\u0446\u0456 \u0442\u0430 \u0432\u0456\u0434\u0432\u0456\u0434\u0443\u0432\u0430\u0442\u0438 \u0441\u043E\u043B\u044F\u0440\u0456\u0439.",
    "recommends-oils": "\u0423 \u0434\u0435\u043D\u044C \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u0438 \u043D\u0435 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438 \u0436\u0438\u0440\u043D\u0456 \u043B\u043E\u0441\u044C\u0439\u043E\u043D\u0438, \u043C\u0430\u0441\u043B\u0430.",
    "recommends-razor": "\u041C\u0456\u0436 \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u0430\u043C\u0438 \u0432 \u0436\u043E\u0434\u043D\u043E\u043C\u0443 \u0440\u0430\u0437\u0456 \u043D\u0435 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438 \u0431\u0440\u0438\u0442\u0432\u0443, \u043A\u0440\u0435\u043C \u0434\u043B\u044F \u0434\u0435\u043F\u0456\u043B\u044F\u0446\u0456\u0457 \u0442\u0430 \u0435\u043F\u0456\u043B\u044F\u0442\u043E\u0440.",
    "recommends-contraindications": "\u041F\u0440\u043E\u0442\u0438\u043F\u043E\u043A\u0430\u0437\u0430\u043D\u043D\u044F \u0434\u043E \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u0438 \u0434\u0435\u043F\u0456\u043B\u044F\u0446\u0456\u0457:",
    "recommends-burns": "\u041D\u0430\u044F\u0432\u043D\u0456\u0441\u0442\u044C \u043D\u0430 \u0448\u043A\u0456\u0440\u0456 \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u0438\u0445 \u0440\u0430\u043D\u043E\u043A, \u0433\u043D\u0456\u0439\u043D\u0438\u0447\u043A\u0456\u0432, \u043F\u043E\u0440\u0456\u0437\u0456\u0432, \u043E\u043F\u0456\u043A\u0456\u0432 (\u0443 \u0442\u043E\u043C\u0443 \u0447\u0438\u0441\u043B\u0456 \u0441\u043E\u043D\u044F\u0447\u043D\u0438\u0445).",
    "recommends-bypass": "\u0423 \u0434\u0435\u044F\u043A\u0438\u0445 \u0432\u0438\u043F\u0430\u0434\u043A\u0430\u0445 \u043C\u0438 \u043C\u043E\u0436\u0435\u043C\u043E \u043E\u0431\u0456\u0439\u0442\u0438 \u0434\u0456\u043B\u044F\u043D\u043A\u0443 \u043D\u0430 \u044F\u043A\u0438\u0445 \u0454 \u043F\u043E\u0448\u043A\u043E\u0434\u0436\u0435\u043D\u043D\u044F \u0456 \u0437\u0440\u043E\u0431\u0438\u0442\u0438 \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u0443.",
    "recommends-varicose": "\u042F\u0441\u043A\u0440\u0430\u0432\u043E \u0432\u0438\u0440\u0430\u0436\u0435\u043D\u0435 \u0440\u043E\u0437\u0448\u0438\u0440\u0435\u043D\u043D\u044F \u0432\u0435\u043D.",
    "recommends-pregnancy": "\u041F\u0435\u0440\u0448\u0438\u0439 \u0442\u0430 \u043E\u0441\u0442\u0430\u043D\u043D\u0456\u0439 \u0442\u0440\u0438\u043C\u0435\u0441\u0442\u0440 \u0432\u0430\u0433\u0456\u0442\u043D\u043E\u0441\u0442\u0456.",
    "recommends-postdepilation": "\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0456\u0457 \u043F\u0456\u0441\u043B\u044F \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u0438 \u0434\u0435\u043F\u0456\u043B\u044F\u0446\u0456\u0457:",
    "recommends-sauna": "\u0423 \u043F\u0435\u0440\u0448\u0438\u0439 \u0434\u0435\u043D\u044C \u043D\u0435 \u0432\u0456\u0434\u0432\u0456\u0434\u0443\u0439\u0442\u0435 \u0441\u0430\u0443\u043D\u0443 \u0442\u0430 \u043D\u0435 \u043F\u0440\u0438\u0439\u043C\u0430\u0439\u0442\u0435 \u0433\u0430\u0440\u044F\u0447\u0443 \u0432\u0430\u043D\u043D\u0443, \u0456 \u043D\u0435 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0439\u0442\u0435\u0441\u044F \u0433\u0430\u0440\u044F\u0447\u0438\u043C \u0434\u0443\u0448\u0435\u043C.",
    "recommends-prohibit": "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0447\u043D\u043E \u0437\u0430\u0431\u043E\u0440\u043E\u043D\u044F\u0454\u0442\u044C\u0441\u044F \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438 \u043E\u043C\u0438\u0432\u0430\u0447 \u0432 \u043F\u0435\u0440\u0448\u0443 \u0434\u043E\u0431\u0443.",
    "recommends-sports": "\u041D\u0435 \u0437\u0430\u0439\u043C\u0430\u0439\u0442\u0435\u0441\u044F \u0441\u043F\u043E\u0440\u0442\u043E\u043C.",
    "recommends-clothing": "\u041D\u0430 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u0439 \u0434\u0435\u043D\u044C \u043F\u0456\u0441\u043B\u044F \u0434\u0435\u043F\u0456\u043B\u044F\u0446\u0456\u0457 \u0432\u043E\u0441\u043A\u043E\u043C \u043E\u0434\u044F\u0433\u043D\u0456\u0442\u044C \u0437\u0440\u0443\u0447\u043D\u0443 \u0431\u0430\u0432\u043E\u0432\u043D\u044F\u043D\u0443 \u0431\u0456\u043B\u0438\u0437\u043D\u0443 \u0456 \u0432\u0456\u043B\u044C\u043D\u0438\u0439, \u0434\u0438\u0445\u0430\u044E\u0447\u0438\u0439 \u043E\u0434\u044F\u0433.",
    "recommends-deodorant": "\u041D\u0435 \u043D\u0430\u043D\u043E\u0441\u044C\u0442\u0435 \u0434\u0435\u0437\u043E\u0434\u043E\u0440\u0430\u043D\u0442 \u043D\u0430 \u0434\u0456\u043B\u044F\u043D\u043A\u0438, \u0449\u043E \u043F\u0456\u0434\u043B\u044F\u0433\u0430\u044E\u0442\u044C \u0434\u0435\u043F\u0456\u043B\u044F\u0446\u0456\u0457. \u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0447\u043D\u043E \u0437\u0430\u0431\u043E\u0440\u043E\u043D\u0435\u043D\u043E \u0437\u0430\u0441\u043C\u0430\u0433\u0430\u0442\u0438 \u043D\u0430 \u0441\u043E\u043D\u0446\u0456 \u0456 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u0441\u043E\u043B\u044F\u0440\u0456\u0454\u043C.",
    "recommends-scrub": "\u041D\u0435 \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u043E \u043C\u0430\u0441\u043A\u0443\u0432\u0430\u0442\u0438 \u043E\u0431\u0440\u043E\u0431\u043B\u0435\u043D\u0456 \u0437\u043E\u043D\u0438 \u043F\u0440\u043E\u0442\u044F\u0433\u043E\u043C \u043F\u0435\u0440\u0448\u0438\u0445 \u0442\u0440\u044C\u043E\u0445 \u0434\u043D\u0456\u0432 \u043F\u0456\u0441\u043B\u044F \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u0438.",
    "recommends-goal": "\u041F\u0456\u0441\u043B\u044F \u0434\u0435\u043A\u0456\u043B\u044C\u043A\u043E\u0445 \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440 \u0432\u043E\u043B\u043E\u0441\u0441\u044F \u0440\u043E\u0441\u0442\u0435 \u043D\u0430\u0431\u0430\u0433\u0430\u0442\u043E \u043F\u043E\u0432\u0456\u043B\u044C\u043D\u0456\u0448\u0435 \u0456 \u0441\u0442\u0430\u0454 \u0442\u043E\u043D\u0448\u0438\u043C \u0456 \u0441\u043B\u0430\u0431\u043A\u0456\u0448\u0438\u043C, \u0430&nbsp;\u0446\u0435 \u0432\u043F\u043B\u0438\u0432\u0430\u0454 \u0442\u0430\u043A \u0441\u0430\u043C\u043E \u0456 \u043D\u0430 \u0447\u0443\u0442\u043B\u0438\u0432\u0456\u0441\u0442\u044C \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440! \u041C\u0435\u0442\u0430 \u0432\u043E\u0441\u043A\u043E\u0432\u043E\u0457 \u0434\u0435\u043F\u0456\u043B\u044F\u0446\u0456\u0457 - \u0446\u0435 \u043D\u0435 \u043F\u0440\u043E\u0441\u0442\u043E \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0432\u043E\u043B\u043E\u0441\u0441\u044F, \u0430 \u043F\u043E\u0441\u0442\u0443\u043F\u043E\u0432\u043E \u0437\u043C\u0456\u043D\u0438\u0442\u0438 \u0457\u0445 \u044F\u043A\u0456\u0441\u0442\u044C \u0456 \u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C.",
    "recommends-difference": "\u0412\u0436\u0435 \u043F\u0456\u0441\u043B\u044F 4-5 \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440 \u0432\u0438 \u043F\u043E\u043C\u0456\u0442\u0438\u0442\u0435 \u043A\u043E\u043B\u043E\u0441\u0430\u043B\u044C\u043D\u0443 \u0440\u0456\u0437\u043D\u0438\u0446\u044E:",
    "recommends-softer": "\u0412\u043E\u043B\u043E\u0441\u043A\u0438 \u0441\u0442\u0430\u044E\u0442\u044C \u043C&rsquo;\u044F\u043A\u0438\u043C\u0438 \u0456 \u0441\u0432\u0456\u0442\u043B\u0456\u0448\u0438\u043C\u0438.",
    "recommends-remnants": "\u0417\u0430\u043B\u0438\u0448\u043A\u0456\u0432 \u0432\u043E\u043B\u043E\u0441\u043A\u0456\u0432 \u043D\u0435\u043C\u0430\u0454 \u0433\u0440\u0443\u0431\u043E\u0433\u043E \u0437\u0440\u0456\u0437\u0443, \u044F\u043A \u043F\u0456\u0441\u043B\u044F \u0431\u0440\u0438\u0442\u0432\u0438.",
    "recommends-tolerated": "\u0428\u043A\u0456\u0440\u0430 \u0441\u0442\u0430\u0454 \u0441\u043F\u0440\u0438\u0439\u043D\u044F\u0442\u043B\u0438\u0432\u0456\u0448\u043E\u044E \u0434\u043E \u0434\u0435\u043F\u0456\u043B\u044F\u0446\u0456\u0457, \u0456 \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u0430 \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u0438\u0442\u044C\u0441\u044F \u043B\u0435\u0433\u0448\u0435.",
    "recommends-shortened": "\u0417\u0430 \u0440\u0430\u0445\u0443\u043D\u043E\u043A \u0442\u043E\u0433\u043E, \u0449\u043E \u0432\u043E\u043B\u043E\u0441\u043A\u0456\u0432 \u0441\u0442\u0430\u0454 \u043C\u0435\u043D\u0448\u0435, \u0441\u043A\u043E\u0440\u043E\u0447\u0443\u0454\u0442\u044C\u0441\u044F \u0456 \u0447\u0430\u0441 \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u0438.",
    "recommends-silky": "\u0428\u043A\u0456\u0440\u0430 \u0441\u0442\u0430\u0454 \u0433\u043B\u0430\u0434\u043A\u043E\u044E, \u0435\u043B\u0430\u0441\u0442\u0438\u0447\u043D\u043E\u044E \u0442\u0430 \u0448\u043E\u0432\u043A\u043E\u0432\u0438\u0441\u0442\u043E\u044E.",
    "work-title": "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438 \u0442\u0430 \u0440\u043E\u0431\u043E\u0447\u0456 \u0433\u043E\u0434\u0438\u043D\u0438",
    "work-monday": "\u043F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A",
    "work-tuesday": "\u0432\u0456\u0432\u0442\u043E\u0440\u043E\u043A",
    "work-wednesday ": "\u0441\u0435\u0440\u0435\u0434\u0430 ",
    "work-thursday": "\u0447\u0435\u0442\u0432\u0435\u0440",
    "work-friday": "\u043F`\u044F\u0442\u043D\u0438\u0446\u044F",
    "work-saturday": "\u0441\u0443\u0431\u043E\u0442\u0430",
    "work-sunday": "\u043D\u0435\u0434\u0456\u043B\u044F",
    "work-btn": "\u041F\u043E\u0434\u0437\u0432\u043E\u043D\u0438\u0442\u0438",
    "contacts-title": "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438",
    "contacts-subtitle": "\u0414\u0437\u0432\u043E\u043D\u0438 \u043D\u0430\u043C \u043A\u043E\u043B\u0438 \u0437\u0430\u0432\u0433\u043E\u0434\u043D\u043E",
    "contacts-address": " \u0432\u0443\u043B. \u041B\u0430\u0432\u0430\u043D\u0434\u043E\u0432\u0430 9, 80-840 \u0413\u0434\u0430\u043D\u044C\u0441\u043A, \u041F\u043E\u043B\u044C\u0449\u0430",
    "contacts-emailus": "\u041D\u0435 \u0441\u043E\u0440\u043E\u043C\u0442\u0435\u0441\u044F \u043D\u0430\u0434\u0441\u0438\u043B\u0430\u0442\u0438 \u043D\u0430\u043C \u0441\u0432\u043E\u0457 \u043F\u0438\u0442\u0430\u043D\u043D\u044F \u043D\u0430 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443 \u043F\u043E\u0448\u0442\u0443.",
    "contacts-touch": "\u0417\u0432&rsquo;\u044F\u0436\u0456\u0442\u044C\u0441\u044F \u0437 \u043D\u0430\u043C\u0438",
    "contacts-mistake1": "\u0426\u0435 \u043F\u043E\u043B\u0435 \u043E\u0431\u043E\u0432&rsquo;\u044F\u0437\u043A\u043E\u0432\u0435.",
    "contacts-mistake2": "\u0426\u0435 \u043F\u043E\u043B\u0435 \u043E\u0431\u043E\u0432&rsquo;\u044F\u0437\u043A\u043E\u0432\u0435.",
    "contacts-mistake3": "\u0426\u0435 \u043F\u043E\u043B\u0435 \u043E\u0431\u043E\u0432&rsquo;\u044F\u0437\u043A\u043E\u0432\u0435.",
    "contacts-btn": "\u0412\u0456\u0434\u043F\u0440\u0430\u0432\u0438\u0442\u0438 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F",
    "footer-hidden": "\u0444\u0443\u0442\u0435\u0440 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438",
    "footer-pricing": "\u0426\u0456\u043D\u0438",
    "footer-contacts": "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438",
    "footer-gallery": "\u0413\u0430\u043B\u0435\u0440\u0435\u044F",
    "footer-about": "\u041F\u0440\u043E \u043D\u0430\u0441",
    "mod_about-title": "\u041F\u0440\u043E \u041D\u0430\u0441",
    "mod_about-text_top": "Beauty Style \u0454 \u043E\u0434\u043D\u0438\u043C \u0437 \u043F\u0440\u043E\u0432\u0456\u0434\u043D\u0438\u0445 \u0441\u0430\u043B\u043E\u043D\u0456\u0432 \u043A\u0440\u0430\u0441\u0438 \u0432 \u0413\u0434\u0430\u043D\u0441\u044C\u043A\u0443.",
    "mod_about-text_middle": " \u0412\u0456\u0442\u0430\u0454\u043C\u043E \u0432 Beauty Style \u2013 \u0434\u0435 \u043A\u0440\u0430\u0441\u0430 \u043F\u0435\u0440\u0435\u0442\u0432\u043E\u0440\u044E\u0454\u0442\u044C\u0441\u044F \u043D\u0430 \u0456\u0441\u0442\u043E\u0440\u0456\u044E! \u041D\u0430\u0448 \u043A\u043E\u043B\u0435\u043A\u0442\u0438\u0432 - \u0446\u0435 \u0434\u0440\u0443\u0436\u043D\u044F \u0441\u0456\u043C&rsquo;\u044F \u0444\u0430\u0445\u0456\u0432\u0446\u0456\u0432, \u044F\u043A\u0456 \u043D\u0435 \u043B\u0438\u0448\u0435 \u0441\u0442\u0432\u043E\u0440\u044E\u044E\u0442\u044C \u043A\u0440\u0430\u0441\u0438\u0432\u0438\u0439 \u043E\u0431\u0440\u0430\u0437, \u0430 \u0439 \u0444\u043E\u0440\u043C\u0443\u044E\u0442\u044C \u0446\u0456\u043B\u0456\u0441\u043D\u0438\u0439 \u0441\u043F\u043E\u0441\u0456\u0431 \u0436\u0438\u0442\u0442\u044F. \u0412 Beauty Style \u043A\u043E\u0436\u0435\u043D \u043C\u0430\u0439\u0441\u0442\u0435\u0440 \u2013 \u0432\u0456\u0440\u0442\u0443\u043E\u0437 \u0441\u0432\u043E\u0454\u0457 \u0441\u043F\u0440\u0430\u0432\u0438, \u0456\u0437 \u043E\u0431\u0448\u0438\u0440\u043D\u0438\u043C \u0434\u043E\u0441\u0432\u0456\u0434\u043E\u043C \u0442\u0430 \u0442\u0430\u043B\u0430\u043D\u0442\u043E\u043C, \u0433\u043E\u0442\u043E\u0432\u0438\u0439 \u0434\u043E \u0456\u043D\u0434\u0438\u0432\u0456\u0434\u0443\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u0456\u0434\u0445\u043E\u0434\u0443. \u041C\u0438 \u043F\u0440\u0430\u0433\u043D\u0435\u043C\u043E, \u0449\u043E\u0431 \u043D\u0430\u0448\u0456 \u043A\u043B\u0456\u0454\u043D\u0442\u0438 \u043D\u0435 \u043B\u0438\u0448\u0435 \u043D\u0430\u0441\u043E\u043B\u043E\u0434\u0436\u0443\u0432\u0430\u043B\u0438\u0441\u044F \u0432\u0438\u0441\u043E\u043A\u043E\u044F\u043A\u0456\u0441\u043D\u0438\u043C\u0438 \u043F\u043E\u0441\u043B\u0443\u0433\u0430\u043C\u0438, \u0430\u043B\u0435 \u0439 \u0432\u0456\u0434\u0447\u0443\u0432\u0430\u043B\u0438 \u0437\u0430\u0442\u0438\u0448\u043E\u043A, \u0433\u043E\u0441\u0442\u0438\u043D\u043D\u0456\u0441\u0442\u044C \u0442\u0430 \u043D\u0430\u0442\u0445\u043D\u0435\u043D\u043D\u044F \u0432 Beauty Style.",
    "mod_about-text_bottom": "\u0414\u043E\u0432\u0456\u0440\u0442\u0435 \u0441\u0432\u043E\u044E \u043A\u0440\u0430\u0441\u0443 \u0444\u0430\u0445\u0456\u0432\u0446\u044F\u043C Beauty Style \u2013 \u0434\u0435 \u043A\u043E\u0436\u0435\u043D \u0433\u0456\u0441\u0442\u044C \u2013 \u043D\u0435 \u043F\u0440\u043E\u0441\u0442\u043E \u043A\u043B\u0456\u0454\u043D\u0442, \u0430 \u0432\u0430\u0436\u043B\u0438\u0432\u0430 \u0447\u0430\u0441\u0442\u0438\u043D\u0430 \u043D\u0430\u0448\u043E\u0457 \u0456\u0441\u0442\u043E\u0440\u0456\u0457.",
    "mod_about-contact": "\u0417\u0432&rsquo;\u044F\u0436\u0456\u0442\u044C\u0441\u044F \u0437 \u043D\u0430\u043C\u0438",
    "mod_promo-subtitle": "\u0442\u0456\u043B\u044C\u043A\u0438 3 \u0434\u043D\u0456",
    "mod_promo-title": "\u0410\u043A\u0446\u0456\u044F 3 \u0414\u043D\u0456 \u041A\u0440\u0430\u0441\u0438 \u043D\u0430 \u043F\u043E\u0447\u0430\u0442\u043A\u0443 \u043C\u0456\u0441\u044F\u0446\u044F:",
    "mod_promo-text": "\u0420\u043E\u0437\u043A\u0456\u0448 \u0456 \u0441\u0442\u0438\u043B\u044C \u0447\u0435\u043A\u0430\u044E\u0442\u044C \u0432\u0430\u0441 \u0449\u043E\u043C\u0456\u0441\u044F\u0446\u044F \u0432 \u043D\u0430\u0448\u043E\u043C\u0443 \u0441\u0430\u043B\u043E\u043D\u0456 \u043A\u0440\u0430\u0441\u0438 Beauty Style! \u0422\u0456\u043B\u044C\u043A\u0438 \u043F\u0440\u043E\u0442\u044F\u0433\u043E\u043C \u043F\u0435\u0440\u0448\u0438\u0445 \u0442\u0440\u044C\u043E\u0445 \u0434\u043D\u0456\u0432 \u043C\u0456\u0441\u044F\u0446\u044F \u043C\u0438 \u043F\u0440\u043E\u043F\u043E\u043D\u0443\u0454\u043C\u043E \u0432\u0430\u043C \u043D\u0435\u0439\u043C\u043E\u0432\u0456\u0440\u043D\u0456 20% \u0437\u043D\u0438\u0436\u043A\u0438 \u043D\u0430 \u0434\u0438\u0437\u0430\u0439\u043D \u043D\u0456\u0433\u0442\u0456\u0432. \u0417\u0430\u043F\u0438\u0448\u0456\u0442\u044C\u0441\u044F \u0432\u0436\u0435 \u0437\u0430\u0440\u0430\u0437 \u0442\u0430 \u0432\u0456\u0434\u0447\u0443\u0439\u0442\u0435 \u043C\u0430\u0433\u0456\u044E \u0456\u0434\u0435\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043C\u0430\u043D\u0456\u043A\u044E\u0440\u0443. \u0410\u043A\u0446\u0456\u044F \u0434\u0456\u0454 \u043E\u0431\u043C\u0435\u0436\u0435\u043D\u0438\u0439 \u0447\u0430\u0441 - \u043D\u0435 \u043F\u0440\u043E\u043F\u0443\u0441\u0442\u0456\u0442\u044C \u0441\u0432\u0456\u0439 \u0448\u0430\u043D\u0441!",
    "mod_promo-contact": "\u0417\u0432&rsquo;\u044F\u0436\u0456\u0442\u044C\u0441\u044F \u0437 \u043D\u0430\u043C\u0438"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["idB4P"], null, "parcelRequire5d69")

//# sourceMappingURL=uk.ecb4f059.js.map
