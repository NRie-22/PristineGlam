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
})({"bvL7r":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "4d8e234dace8532c";
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

},{}],"65Acf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "en", ()=>en);
const en = {
    "link-about": "About",
    "link-pricing": "Pricing",
    "link-contacts": "Contacts",
    "hero-title": "Eyebrows, Lashes, Nails &&nbsp;Depilation",
    "hero-subtitle": "Escape from everyday hustle and take care of yourself",
    // 'appoint-plname': 'Your name',
    // 'appoint-plnumber': 'Your phone number',
    // 'appoint-name': 'name',
    // 'appoint-phone': 'phone',
    // 'appoint-date': 'date',
    "appoint-mistake1": "This field is required",
    "appoint-mistake2": "This field is required",
    "appoint-mistake3": "This field is required",
    "appoint-btn": "Make an appointment",
    "featured-title": "Featured Offers",
    "featured-subtitle": "We offer a complete range of nail services including styling,coloring, eyebrow and eyelash tinting, depilation and a lot more.",
    "featured-btn1": "book now",
    "featured-btn2": "book now",
    "featured-btn3": "book now",
    "featured-nails": "Nails",
    "featured-any": "Any Colors You Can Imagine",
    "featured-brows": "Eyebrows & Lashes",
    "featured-create": "Creating Your Image",
    "featured-depilat": "Waxing",
    "featured-treat": "Treat your skin",
    "promo-hidden": "promotion giveaway",
    "promo-subtitle": "only 3 days",
    "promo-title": "20% off Nailstyling Services",
    "promo-btn": "view more",
    "portfolio-title": "Our Portfolio",
    "portfolio-subtitle": "Check out the full portfolio of our works including nails, eyebrows, eyelashes and more. Everything you see here was performed by our team.",
    "about-title": "About Us",
    "about-top": "Beauty Style is one of the premier beauty saloons in Gdansk.",
    "about-bottom": "Our beauty saloon has earned an incredible reputation as our professional team continues to work wonders on clients\u2019 eyes and nails and enhance their assets through our services.",
    "about-btn": "view more",
    "equipment-hidden": "Our advantages",
    "equipment-team": "Friendly Team",
    "equipment-staff": "Our staff is polite and courteous. We strive for excellence both in the quality of our services and interaction with you.",
    "equipment-equip": "Best Equipment",
    "equipment-best": "We use the best equipment and products to deliver the highest level of beauty services to our clients.",
    "equipment-sphere": "Perfect Atmosphere",
    "equipment-atmosphere": "When you come to Beauty Style , you are guaranteed to experience the warm and friendly atmosphere of our salon.",
    "pricing-title": "Pricing",
    "pricing-lashandbrows": "Eyelashes & Eyebrows",
    "pricing-femail": "Femail depilation",
    "pricing-mail": "Mail depilation",
    "pricing-manicure": "Manicure & Pedicure",
    "pricing-lashes": "Eyelashes",
    "pricing-laminatelashes": "LAMINATION OF EYELASHES",
    "pricing-botox": "LAMINATION OF EYELASHES + COLOR + BOTOX",
    "pricing-extense1": "EYELASH EXTENSION 1:1",
    "pricing-extense2": "EYELASH EXTENSION 2:1",
    "pricing-extense3": "EYELASH EXTENSION 3:1",
    "pricing-extense4": "EYELASH EXTENSION 4/6:1",
    "pricing-wet": "WET EFFECT",
    "pricing-kim": "EYELASH EXTENSION KIM EFFECT",
    "pricing-tips": "EXTENSION OF LASH TIPS",
    "pricing-remove": "REMOVAL OF EXTENDED EYELASHES",
    "pricing-eyebrows": "Eyebrows",
    "pricing-shaping": "EYEBROW SHAPING",
    "pricing-laminatebrows": "EYEBROW LAMINATION",
    "pricing-correction": "EYEBROW LAMINATION, COLORING, AND CORRECTION",
    "pricing-femdepilat": "Femail depilation",
    "pricing-sideburns": "SIDEBURNS",
    "pricing-nose": "NOSE",
    "pricing-chin": "CHIN",
    "pricing-neck": "NECK",
    "pricing-armpits": "ARMPITS",
    "pricing-arms1": "ARMS",
    "pricing-arms2": "ARMS 1/2",
    "pricing-line": "ABDOMINAL LINE",
    "pricing-lumbar": "LUMBAR",
    "pricing-legs": "WHOLE LEGS",
    "pricing-legs2": "LEGS 1/2",
    "pricing-bikinitop": "TRADICIONAL BIKINI",
    "pricing-bikinideep": "DEEP BIKINI",
    "pricing-butt": "BUTTOCKS",
    "pricing-maildepilat": "Mail depilation",
    "pricing-mailbrows": "EYEBROW SHAPING",
    "pricing-ears": "EARS",
    "pricing-nose": "NOSE",
    "pricing-neck": "NECK",
    "pricing-pits": "BACK",
    "pricing-back": "BACK",
    "pricing-backarms": "BACK + ARMS",
    "pricing-hands": "ARMS",
    "pricing-tors": "TORSO",
    "pricing-stomack": "STOMACK",
    "pricing-torsostomack": "TORSO + STOMACK",
    "pricing-linemale": "ABDOMINAL LINE",
    "pricing-maillegs": "LEGS",
    "pricing-maibut": "BUTTOCKS",
    "pricing-bikinilegs": "BIKINI + BUTTOCKS",
    "pricing-manicuretitle": "Manicure & Pedicure",
    "pricing-hybridmanicure": "HYBRID MANICURE",
    "pricing-hybridpicture": "HYBRID MANICURE + PICTURE",
    "pricing-conditioner": "MANICURE WITH A CONDITIONER",
    "pricing-french": "FRENCH",
    "pricing-gel": "Gel Extension + HYBRID",
    "pricing-geladd": "GEL REFILL + HYBRID",
    "pricing-natural": "GEL ON NATURAL NAILS",
    "pricing-picturehybrid": "HYBRID MANICURE PICTURE WITH A CONDITIONER",
    "pricing-gelpicture": "GEL PICTURE MANICURE WITH A CONDITIONER",
    "pricing-hybridpedicure": "HYBRID PEDICURE",
    "pricing-pedicurefeet": "HYBRID PEDICURE + FEET",
    "pricing-pedicurecondicioner": "PEDICURE WITH A CONDITIONER",
    "pricing-reconstruction": "NAIL RECONSTRUCTION AT OUR SALON",
    "pricing-gelremove": "GEL REMOVAL (SERVICE ADDED TO ANOTHER)",
    "recommends-title": "Information for the client",
    "recommends-check": "Ideal client Checklist",
    "recommends-late": "Try not to be late by more than 15 minutes .If you are late by more than 15 minutes, the appointment will be canceled or rescheduled.",
    "recommends-time": "If you are running late, please let us know, as time for each client is limited.",
    "recommends-alone": "Come alone.",
    "recommends-sick": "If you get sick, please remember to inform us and reschedule your appointment.",
    "recommends-plan": "Remember that high-quality work takes time and patience, so plan ahead accordingly.",
    "recommends-trim": "Why can't you trim the eyebrows?",
    "recommends-hair": "The hair naturally has a thin, sealed tip.",
    "recommends-disrupts": "Trimming eyebrows disrupts their structure. Thick, trimmed hairs do not lay well and hang, which over time can lead to a change in the growth direction.",
    "recommends-structure": "Due to the change in structure resulting from dyeing, the eyebrow color will be uneven. Trimmed hairs will appear lighter, without a thin tip.",
    "recommends-dye": "At the same time, the pigment will fade faster, reducing the durability of the dye.",
    "recommends-fence": "A straight trimming line will look like a fence within a week, as the hairs go through different growth phases.",
    "recommends-whiskers": "In touch, the hairs will feel thick and prickly, similar to whiskers.",
    "recommends-depilation": "Depilation",
    "recommends-before": "Before depilation, it is important to prepare the skin for effective and minimally traumatic hair removal. Some preparatory stages should be initiated several days, or even weeks, before the procedure. Plan your depilation treatment at least a month in advance to ensure that your skin remains healthy and smooth.",
    "recommends-predepilation": "Pre-depilation recommendations:",
    "recommends-length": "The hair length before the first depilation should be at least 6-7 mm, which is approximately 2 weeks after shaving.",
    "recommends-subsequent": "For subsequent treatments, a length of 5-6 mm is sufficient, as the hairs will be thinner and easier to remove.",
    "recommends-peels": "Three days before the treatment, it is not recommended to perform peels.",
    "recommends-sunbathe": "It is not recommended to sunbathe or visit tanning beds for seven days.",
    "recommends-oils": "On the day of the treatment, it is not advisable to use oily balms or oils.",
    "recommends-razor": "Never use a razor, depilatory cream, or an epilator between treatments.",
    "recommends-contraindications": "Contraindications to the treatment. Presence of:",
    "recommends-burns": "Open wounds, pimples, cuts, burns (including sunburns) on the skin.",
    "recommends-bypass": "In some cases, we can bypass the area with damage and proceed with the treatment.",
    "recommends-varicose": "Visible varicose veins.",
    "recommends-pregnancy": "The first and last trimester of pregnancy.",
    "recommends-postdepilation": "Post-depilation recommendations:",
    "recommends-sauna": "On the first day, avoid taking hot showers (baths) and using the sauna.",
    "recommends-prohibit": "Strictly prohibit the use of a razor on the first day.",
    "recommends-sports": "Do not engage in sports.",
    "recommends-clothing": "The day after waxing, wear comfortable cotton underwear and loose, breathable clothing.",
    "recommends-deodorant": "Do not apply deodorant to the depilated areas. Strictly avoid sunbathing and using tanning beds.",
    "recommends-scrub": "Do not scrub the depilated areas for the first three days after the treatment.",
    "recommends-goal": "After several treatments, hair grows much slower and becomes thinner and weaker, which also affects the sensitivity of the procedure! The goal of waxing is not only hair removal but also a gradual change in their quality and quantity.",
    "recommends-difference": "After 4-5 treatments, you will notice a significant difference:",
    "recommends-softer": "The hair becomes softer and lighter.",
    "recommends-remnants": "The remnants of hair do not have a rough cut, as with a razor.",
    "recommends-tolerated": "The skin becomes more receptive to depilation, and the procedure is more easily tolerated.",
    "recommends-shortened": "Due to the reduced amount of hair, the duration of the procedure is also shortened.",
    "recommends-silky": "The skin becomes smooth, elastic, and silky.",
    "work-title": "Contact and working hours",
    "work-monday": "monday",
    "work-tuesday": "tuesday",
    "work-wednesday ": "wednesday ",
    "work-thursday": "thursday",
    "work-friday": "friday",
    "work-saturday": "saturday",
    "work-sunday": "sunday",
    "work-btn": "Call us",
    "contacts-title": "Contacts",
    "contacts-subtitle": "You can call us anytime",
    "contacts-address": "Lavender street 9, 80-840 Gda\u0144sk, Poland",
    "contacts-emailus": "Feel free to email us your questions",
    "contacts-touch": "GET IN TOUCH",
    "contacts-mistake1": "This field is required",
    "contacts-mistake2": "This field is required",
    "contacts-mistake3": "This field is required",
    "contacts-btn": "send message",
    "footer-hidden": "footer",
    "footer-pricing": "Pricing",
    "footer-contacts": "Contacts",
    "footer-gallery": "Gallery",
    "footer-about": "About",
    "mod_about-title": "About Us",
    "mod_about-text_top": "Beauty Style is one of the premier beauty saloons in Gdansk, visited not only by Poles but also by Ukrainians, Germans, and representatives of many other countries.",
    "mod_about-text_middle": "Welcome to Beauty Style \u2013 where beauty transforms into a story! Our team is a friendly family of professionals who not only create a beautiful image but also shape a holistic way of life. At Beauty Style, each master is a virtuoso in their craft, with extensive experience and talent, ready for an individual approach. We strive for our clients to not only enjoy high-quality services but also feel comfort, hospitality, and inspiration at Beauty Style.",
    "mod_about-text_bottom": "Entrust your beauty to the experts at Beauty Style \u2013 where every guest is not just a client but an important part of our story.",
    "mod_about-contact": "Contact Us",
    "mod_promo-subtitle": "only 3 days",
    "mod_promo-title": "20% off Nailstyling Services",
    "mod_promo-text": "Lorem ipsum sit amet, consectetur adipisicing elit. Ea soluta assumenda facilis ex. Aliquid iste optio minus? Aut dolores nisi eum laborum eos error porro, alias, sapiente animi, accusantium officiis. Perspiciatis, magni expedita veritatis, rem eveniet possimus ducimus fugit pariatur alias cupiditate rerum, esse recusandae officia at modi facere aspernatur harum! Quae rerum nostrum eius voluptatum excepturi corrupti earum reprehenderit? Voluptas maxime doloribus earum ex in, est tempore.",
    "mod_promo-contact": "Contact Us"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["bvL7r"], null, "parcelRequire5d69")

//# sourceMappingURL=en.ace8532c.js.map
