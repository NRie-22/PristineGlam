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
})({"lxRuA":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "b9f19e36deb4d0d3";
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

},{}],"99uXt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "de", ()=>de);
const de = {
    "link-about": "\xdcber uns",
    "link-pricing": "Preise",
    "link-contacts": "Kontakte",
    "hero-title": "Augenbrauen, Wimpern, N\xe4gel&nbsp;& Haarentfernung",
    "hero-subtitle": "Entfliehe dem hektischen Alltag und g\xf6nn dir eine Auszeit.",
    // 'appoint-plname': 'Your name',
    // 'appoint-plnumber': 'Your phone number',
    // 'appoint-name': 'name',
    // 'appoint-phone': 'telefon',
    // 'appoint-date': 'datum',
    "appoint-mistake1": "Dieses Feld ist erforderlich.",
    "appoint-mistake2": "Dieses Feld ist erforderlich.",
    "appoint-mistake3": "Dieses Feld ist erforderlich.",
    "appoint-btn": "Termin vereinbaren",
    "featured-title": "Unsere leistungen",
    "featured-subtitle": "Wir bieten eine umfassende Palette von Nageldienstleistungen, einschlie\xdflich Styling, F\xe4rben, Augenbrauen- und Wimpern-T\xf6nung, Haarentfernung und vieles mehr.",
    "featured-btn1": "Jetzt  buchen",
    "featured-btn2": "Jetzt  buchen",
    "featured-btn3": "Jetzt  buchen",
    "featured-nails": "N\xe4gel",
    "featured-any": "Alle farben, die du dir vorstellen kannst.",
    "featured-brows": "Augenbrauen & Wimpern",
    "featured-create": "Dein Image gestalten",
    "featured-depilat": "Wachs-enthaarung",
    "featured-treat": "Verw\xf6hnen Sie Ihre Haut",
    "promo-hidden": "promotion-geschenkaktion",
    "promo-subtitle": "Nur 3 Tage",
    "promo-title": "20% Rabatt auf Nagelstyling Dienstleistungen",
    "promo-btn": "mehr anzeigen",
    "portfolio-title": "Unsere Portfolio",
    "portfolio-subtitle": "Schauen Sie sich das Portfolio unserer Arbeiten an, einschlie\xdflich N\xe4gel, Augenbrauen, Wimpern und vielem mehr. Alles, was Sie hier sehen, wurde von unserem Team durchgef\xfchrt.",
    "about-title": "\xdcber Uns",
    "about-top": "Beauty Style ist einer der f\xfchrenden Sch\xf6nheitssalons in Danzig.",
    "about-bottom": "Unser Sch\xf6nheitssalon hat sich einen unglaublichen Ruf erworben, w\xe4hrend unser professionelles Team weiterhin Wunder an den Augen und N\xe4geln der Kunden vollbringt und ihre Vorz\xfcge durch unsere Dienstleistungen betont.",
    "about-btn": "Details anzeigen",
    "equipment-hidden": "Unsere vorteile",
    "equipment-team": "Freundliches Team",
    "equipment-staff": "Unser Personal ist h\xf6flich und zuvorkommend. Wir streben nach Exzellenz sowohl in der Qualit\xe4t unserer Dienstleistungen als auch im Umgang mit Ihnen.",
    "equipment-equip": "Beste Ausstattung",
    "equipment-best": "Wir verwenden die beste Ausr\xfcstung und Produkte, um unseren Kunden das h\xf6chste Ma\xdf an Sch\xf6nheitsdienstleistungen zu bieten.",
    "equipment-sphere": "Perfekte Atmosph\xe4re",
    "equipment-atmosphere": "Wenn Sie zu Beauty Style kommen, erleben Sie garantiert die warme und freundliche Atmosph\xe4re unseres Salons.",
    "pricing-title": "Preise",
    "pricing-lashandbrows": "Wimpern & Augenbrauen",
    "pricing-femail": "Haarentfernung f\xfcr frauen",
    "pricing-mail": "Haarentfernung f\xfcr m\xe4nner",
    "pricing-manicure": "Manik\xfcre & Pedik\xfcre",
    "pricing-lashes": "Wimpern",
    "pricing-laminatelashes": "Augenwimpernlaminierung",
    "pricing-botox": "Wimpernlaminierung + Farbe + Botox",
    "pricing-extense1": "Wimpernverl\xe4ngerung 1:1",
    "pricing-extense2": "Wimpernverl\xe4ngerung 2:1",
    "pricing-extense3": "Wimpernverl\xe4ngerung 3:1",
    "pricing-extense4": "Wimpernverl\xe4ngerung 4/6:1",
    "pricing-wet": "Wet Effect",
    "pricing-kim": "Wimpernverl\xe4ngerung kim effekt",
    "pricing-tips": "Verl\xe4ngerung der Wimpernspitzen",
    "pricing-remove": "Entfernung von verl\xe4ngerten wimpern",
    "pricing-eyebrows": "Augenbrauen",
    "pricing-shaping": "Formgebung der Augenbrauen",
    "pricing-laminatebrows": "Augenbrauen-laminierung",
    "pricing-correction": "Augenbrauen-laminierung, F\xe4rbung und Korrektur",
    "pricing-femdepilat": "Haarentfernung f\xfcr Frauen",
    "pricing-sideburns": "Koteletten",
    "pricing-nose": "Nase",
    "pricing-chin": "Kinn",
    "pricing-neck": "Hals",
    "pricing-armpits": "Achselh\xf6hlen",
    "pricing-arms1": "Arme",
    "pricing-arms2": "Arme 1/2",
    "pricing-line": "Bauchlinie",
    "pricing-lumbar": "Lendenwirbel",
    "pricing-legs": "Ganze Beine",
    "pricing-legs2": "Beine 1/2",
    "pricing-bikinitop": "Traditioneller Bikini",
    "pricing-bikinideep": "Tiefer Bikini",
    "pricing-butt": "Ges\xe4\xdf",
    "pricing-maildepilat": "Haarentfernung f\xfcr M\xe4nner",
    "pricing-mailbrows": "Formgebung der Augenbrauen",
    "pricing-ears": "Ohren",
    "pricing-nose": "Nase",
    "pricing-neck": "Hals",
    "pricing-pits": "Achselh\xf6hlen",
    "pricing-back": "R\xfccken",
    "pricing-backarms": "R\xfccken + Arme",
    "pricing-hands": "H\xe4nde",
    "pricing-tors": "Torso",
    "pricing-stomack": "Bauch",
    "pricing-torsostomack": "Torso + Bauch",
    "pricing-linemale": "Bauchlinie",
    "pricing-maillegs": "Beine",
    "pricing-maibut": "Ges\xe4\xdf",
    "pricing-bikinilegs": "Bikini + Ges\xe4\xdf",
    "pricing-manicuretitle": "Manik\xfcre & Pedik\xfcre",
    "pricing-hybridmanicure": "Hybrid-Manik\xfcre",
    "pricing-hybridpicture": "Hybrid-Manik\xfcre + Bild",
    "pricing-conditioner": "Manik\xfcre mit einem conditioner",
    "pricing-french": "Franz\xf6sische Manik\xfcre",
    "pricing-gel": "Gel-Auff\xfcllung + Hybrid",
    "pricing-geladd": "Erg\xe4nzung mit Gel + Hybrid",
    "pricing-natural": "Gel auf nat\xfcrlichen N\xe4geln",
    "pricing-picturehybrid": "Hybrid-Manik\xfcre mit Bild und Conditioner",
    "pricing-gelpicture": "Gel-Bild-Manik\xfcre mit Conditioner",
    "pricing-hybridpedicure": "Hybrid-Pedik\xfcre",
    "pricing-pedicurefeet": "Hybrid-Pedik\xfcre + Fu\xdfpflege",
    "pricing-pedicurecondicioner": "Pedicure mit einem Conditioner",
    "pricing-reconstruction": "Nagelrekonstruktion in unserem Salon",
    "pricing-gelremove": "Gel-Entfernung (Service als Zusatzleistung)",
    "recommends-title": "Information f\xfcr den Kunden",
    "recommends-check": "Ideale Kundencheckliste",
    "recommends-late": "Versuchen Sie, nicht mehr als 15 Minuten zu sp\xe4t zu kommen. Wenn Sie mehr als 15 Minuten zu sp\xe4t sind, wird der Termin abgesagt oder neu geplant.",
    "recommends-time": "Wenn Sie sich versp\xe4ten, lassen Sie es uns bitte wissen, da die Zeit f\xfcr jeden Kunden begrenzt ist.",
    "recommends-alone": "Kommen Sie alleine.",
    "recommends-sick": "Wenn Sie krank werden, denken Sie bitte daran, uns zu informieren und Ihren Termin neu zu planen.",
    "recommends-plan": "Denken Sie daran, dass hochwertige Arbeit Zeit und Geduld erfordert. Planen Sie entsprechend im Voraus.",
    "recommends-trim": "Warum k\xf6nnen die Augenbrauen nicht getrimmt werden?",
    "recommends-hair": "Das Haar hat von Natur aus eine d\xfcnne, versiegelte Spitze.",
    "recommends-disrupts": "Das Trimmen der Augenbrauen st\xf6rt ihre Struktur. Dicke, getrimmte Haare liegen nicht gut und h\xe4ngen, was im Laufe der Zeit zu einer Ver\xe4nderung der Wachstumsrichtung f\xfchren kann.",
    "recommends-structure": "Aufgrund der durch das F\xe4rben verursachten Ver\xe4nderung der Struktur wird die Farbe der Augenbrauen ungleichm\xe4\xdfig sein. Getrimmte Haare erscheinen heller und ohne eine d\xfcnnere Spitze.",
    "recommends-dye": "Gleichzeitig wird das Pigment schneller verblassen, was die Haltbarkeit der Farbe reduziert.",
    "recommends-fence": "Ein gerader Trimmstrich wird innerhalb einer Woche wie ein Zaun aussehen, da die Haare unterschiedliche Wachstumsphasen durchlaufen.",
    "recommends-whiskers": "Im Tastgef\xfchl werden sich die Haare dick und stachelig anf\xfchlen, \xe4hnlich wie Barthaare.",
    "recommends-depilation": "Haarentfernung",
    "recommends-before": "Vor der Haarentfernung ist es wichtig, die Haut auf eine effektive und minimal traumatische Haarentfernung vorzubereiten. Einige Vorbereitungsstufen sollten mehrere Tage oder sogar Wochen vor dem Eingriff eingeleitet werden. Planen Sie Ihre Haarentfernungsbehandlung mindestens einen Monat im Voraus, um sicherzustellen, dass Ihre Haut gesund und glatt bleibt.",
    "recommends-predepilation": "Empfehlungen vor der Haarentfernung:",
    "recommends-length": "Die Haarl\xe4nge vor der ersten Haarentfernung sollte mindestens 6-7 mm betragen, was etwa 2 Wochen nach dem Rasieren entspricht.",
    "recommends-subsequent": "F\xfcr nachfolgende Behandlungen ist eine L\xe4nge von 5-6 mm ausreichend, da die Haare d\xfcnner sind und sich leichter entfernen lassen.",
    "recommends-peels": "Drei Tage vor der Behandlung wird nicht empfohlen, Peelings durchzuf\xfchren.",
    "recommends-sunbathe": "Es wird nicht empfohlen, sieben Tage vorher zu sonnenbaden oder Sonnenb\xe4nke zu besuchen.",
    "recommends-oils": "Am Tag der Behandlung wird davon abgeraten, \xf6lhaltige Balsame oder \xd6le zu verwenden.",
    "recommends-razor": "Verwenden Sie niemals einen Rasierer, Enthaarungscreme oder Epilierer zwischen den Behandlungen.",
    "recommends-contraindications": "Kontraindikationen f\xfcr die Behandlung. Vorhandensein von:",
    "recommends-burns": "Offene Wunden, Pickel, Schnitte, Verbrennungen (einschlie\xdflich Sonnenbrand) auf der Haut.",
    "recommends-bypass": "In einigen F\xe4llen k\xf6nnen wir die besch\xe4digte Stelle umgehen und mit der Behandlung fortfahren.",
    "recommends-varicose": "Sichtbare Krampfadern.",
    "recommends-pregnancy": "Das erste und letzte Trimester der Schwangerschaft.",
    "recommends-postdepilation": "Empfehlungen nach der Haarentfernung:",
    "recommends-sauna": "Am ersten Tag sollten Sie hei\xdfe Duschen (B\xe4der) und Saunabesuche vermeiden.",
    "recommends-prohibit": "Am ersten Tag ist die Verwendung eines Rasierers strengstens untersagt.",
    "recommends-sports": "Treibe keinen Sport.",
    "recommends-clothing": "Am Tag nach dem Wachsen sollten Sie bequeme Baumwollunterw\xe4sche und lockere, atmungsaktive Kleidung tragen.",
    "recommends-deodorant": "Tragen Sie kein Deodorant auf die enthaarten Bereiche auf. Vermeiden Sie strikt das Sonnenbaden und die Nutzung von Sonnenb\xe4nken.",
    "recommends-scrub": "Reiben Sie die enthaarten Bereiche in den ersten drei Tagen nach der Behandlung nicht ab.",
    "recommends-goal": "Nach mehreren Behandlungen w\xe4chst das Haar viel langsamer und wird d\xfcnner und schw\xe4cher, was auch die Empfindlichkeit der Prozedur beeinflusst! Das Ziel der Haarentfernung mit Wachs ist nicht nur die Haarentfernung, sondern auch eine allm\xe4hliche Ver\xe4nderung in ihrer Qualit\xe4t und Menge.",
    "recommends-difference": "Nach 4-5 Behandlungen werden Sie einen signifikanten Unterschied feststellen:",
    "recommends-softer": "Das Haar wird weicher und heller.",
    "recommends-remnants": "Die \xdcberreste der Haare haben keinen groben Schnitt, wie bei einem Rasierer.",
    "recommends-tolerated": "Die Haut wird empf\xe4nglicher f\xfcr die Haarentfernung, und die Prozedur wird besser vertragen.",
    "recommends-shortened": "Aufgrund der reduzierten Haarmenge wird auch die Dauer der Prozedur verk\xfcrzt.",
    "recommends-silky": "Die Haut wird glatt, elastisch und seidig.",
    "work-title": "Kontakt und \xd6FFNUNGSZEITEN",
    "work-monday": "montag",
    "work-tuesday": "dienstag",
    "work-wednesday ": "mittwoch ",
    "work-thursday": "donnerstag",
    "work-friday": "freitag",
    "work-saturday": "samstag ",
    "work-sunday": "sonntag",
    "work-btn": "Rufen Sie uns an",
    "contacts-title": "Kontakt",
    "contacts-subtitle": "Sie k\xf6nnen uns jederzeit anrufen.",
    "contacts-address": "Lavendelstra\xdfe 9, 80-840 Danzig, Polen",
    "contacts-emailus": "F\xfchlen Sie sich frei, uns Ihre Fragen per E-Mail zu senden.",
    "contacts-touch": "Kontaktieren Sie uns",
    "contacts-mistake1": "Dieses Feld ist erforderlich.",
    "contacts-mistake2": "Dieses Feld ist erforderlich.",
    "contacts-mistake3": "Dieses Feld ist erforderlich.",
    "contacts-btn": "Nachricht senden",
    "footer-hidden": "Fu\xdfzeile",
    "footer-pricing": "Preise",
    "footer-contacts": "Kontakt",
    "footer-gallery": "Galerie",
    "footer-about": "\xdcber uns",
    "mod_about-title": "\xdcber Uns",
    "mod_about-text_top": "Beauty Style ist einer der f\xfchrenden Sch\xf6nheitssalons in Danzig",
    "mod_about-text_middle": " Willkommen bei Beauty Style \u2013 wo Sch\xf6nheit sich in eine Geschichte verwandelt! Unser Team ist eine freundliche Familie von Fachleuten, die nicht nur ein sch\xf6nes Bild schaffen, sondern auch einen ganzheitlichen Lebensstil formen. Bei Beauty Style ist jeder Meister ein Virtuose in seinem Handwerk, mit umfangreicher Erfahrung und Talent, bereit f\xfcr einen individuellen Ansatz. Wir streben danach, dass unsere Kunden nicht nur hochwertige Dienstleistungen genie\xdfen, sondern sich auch in Beauty Style wohlf\xfchlen, Gastfreundschaft und Inspiration erleben.",
    "mod_about-text_bottom": " Vertrauen Sie Ihre Sch\xf6nheit den Experten von Beauty Style an \u2013 wo jeder Gast nicht nur ein Kunde, sondern ein wichtiger Teil unserer Geschichte ist.",
    "mod_about-contact": "Kontaktieren Sie uns",
    "mod_promo-subtitle": "Nur 3 Tage",
    "mod_promo-title": "20% Rabatt auf Nagelstyling Dienstleistungen",
    "mod_promo-text": "Ipsum dolor sit amet, consectetur adipisicing elit. Ea soluta assumenda facilis ex. Aliquid iste optio minus? Aut dolores nisi eum laborum eos error porro, alias, sapiente animi, accusantium officiis. Perspiciatis, magni expedita veritatis, rem eveniet possimus ducimus fugit pariatur alias cupiditate rerum, esse recusandae officia at modi facere aspernatur harum! Quae rerum nostrum eius voluptatum excepturi corrupti earum reprehenderit? Voluptas maxime doloribus earum ex in, est tempore.",
    "mod_promo-contact": "Kontaktieren Sie uns"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["lxRuA"], null, "parcelRequire16ac")

//# sourceMappingURL=de.deb4d0d3.js.map
