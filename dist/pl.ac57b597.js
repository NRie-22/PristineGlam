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
})({"frCXN":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "7eef6d7fac57b597";
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

},{}],"lNwFs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pl", ()=>pl);
const pl = {
    "link-about": "O nas",
    "link-pricing": "Ceny",
    "link-contacts": "Kontakty",
    "hero-title": "Brwi, Rz\u0119sy, Paznokcie i&nbsp;Depilacja",
    "hero-subtitle": "Ucieknij od codziennego zgie\u0142ku i zadbaj o siebie.",
    // 'appoint-plname': 'Your imię',
    // 'appoint-plnumber': 'Your telefon',
    // 'appoint-name': 'imię',
    // 'appoint-phone': 'telefon',
    // 'appoint-date': 'date',
    "appoint-mistake1": "To pole jest wymagane",
    "appoint-mistake2": "To pole jest wymagane",
    "appoint-mistake3": "To pole jest wymagane",
    "appoint-btn": "Um\xf3w si\u0119 na wizyt\u0119",
    "featured-title": "Najnowsze Oferty",
    "featured-subtitle": "Oferujemy kompleksow\u0105 gam\u0119 us\u0142ug paznokciowych, obejmuj\u0105c\u0105 stylizacj\u0119, koloryzacj\u0119, barwienie brwi i rz\u0119s, depilacj\u0119 i wiele innych.",
    "featured-btn1": "zarezerwuj teraz",
    "featured-btn2": "zarezerwuj teraz",
    "featured-btn3": "zarezerwuj teraz",
    "featured-nails": "Paznokcie",
    "featured-any": "Wszystkie kolory, jakie sobie wyobra\u017Casz",
    "featured-brows": "Brwi i Rz\u0119sy",
    "featured-create": "Tworzenie Twojego Wizerunku",
    "featured-depilat": "Depilacja woskova",
    "featured-treat": "Zadbaj o swoj\u0105 sk\xf3r\u0119",
    "promo-hidden": "promocyjna zni\u017Cka",
    "promo-subtitle": "tylko 3 dni",
    "promo-title": "20% zni\u017Cki na us\u0142ugi stylizacji paznokci",
    "promo-btn": "zobacz wi\u0119cej",
    "portfolio-title": "Nasze Portfolio",
    "portfolio-subtitle": "Sprawd\u017A pe\u0142ne portfolio naszych prac, obejmuj\u0105ce paznokcie, brwi, rz\u0119sy i wiele wi\u0119cej. Wszystko, co widzisz tutaj, zosta\u0142o wykonane przez nasz zesp\xf3\u0142.",
    "about-title": "O Nas",
    "about-top": "Beauty Style to jeden z najlepszych salon\xf3w urody w Gda\u0144sku.",
    "about-bottom": "Nasz salon urody zyska\u0142 niesamowit\u0105 reputacj\u0119, poniewa\u017C nasz profesjonalny zesp\xf3\u0142 nadal zdumiewa klient\xf3w poprzez prac\u0119 nad oczami i paznokciami, podkre\u015Blaj\u0105c ich atuty za pomoc\u0105 naszych us\u0142ug",
    "about-btn": "wi\u0119cej informacji",
    "equipment-hidden": "Nasze zalety",
    "equipment-team": "Przyjazny Zesp\xf3\u0142",
    "equipment-staff": "Nasz personel jest uprzejmy i grzeczny. D\u0105\u017Cymy do doskona\u0142o\u015Bci zar\xf3wno pod wzgl\u0119dem jako\u015Bci naszych us\u0142ug, jak i interakcji z Tob\u0105.",
    "equipment-equip": "Najlepszy Sprz\u0119t",
    "equipment-best": "Korzystamy z najlepszego sprz\u0119tu i produkt\xf3w, aby \u015Bwiadczy\u0107 najwy\u017Cszy poziom us\u0142ug kosmetycznych naszym klientom",
    "equipment-sphere": "Doskona\u0142a Atmosfera",
    "equipment-atmosphere": "Kiedy przychodzisz do Beauty Style, masz gwarancj\u0119 do\u015Bwiadczenia ciep\u0142ej i przyjaznej atmosfery naszego salonu.",
    "pricing-title": "Cennik",
    "pricing-lashandbrows": "Rz\u0119sy i Brwi",
    "pricing-femail": "Depilacja kobieta",
    "pricing-mail": "Depilacja m\u0119\u017Cczyzn\u0105",
    "pricing-manicure": "Manicure & Pedicure",
    "pricing-lashes": "Rz\u0119sy",
    "pricing-laminatelashes": "LAMINACJA RZ\u0118S",
    "pricing-botox": "LAMINACJA RZ\u0118S + KOLOR + BOTOX",
    "pricing-extense1": "PRZED\u0141U\u017BENIE RZ\u0118S 1:1",
    "pricing-extense2": "PRZED\u0141U\u017BENIE RZ\u0118S 2:1",
    "pricing-extense3": "PRZED\u0141U\u017BENIE RZ\u0118S 3:1",
    "pricing-extense4": "PRZED\u0141U\u017BENIE RZ\u0118S 4/6:1",
    "pricing-wet": "MOKRY EFEKT",
    "pricing-kim": "PRZED\u0141U\u017BENIE RZ\u0118S EFEKT KIM",
    "pricing-tips": "PRZED\u0141U\u017BENIE RZ\u0118S KONC\xd3WEK",
    "pricing-remove": "USUWANIE PRZED\u0141U\u017BONYCH RZ\u0118S",
    "pricing-eyebrows": "BRWI",
    "pricing-shaping": "REGULACJA BRWI",
    "pricing-laminatebrows": "LAMINACJA BRWI",
    "pricing-correction": "LAMINACJA, KOLORYZACJA I KOREKCJA BRWI",
    "pricing-femdepilat": "DEPILACJA KOBIETA",
    "pricing-sideburns": "BAKI",
    "pricing-nose": "NOS",
    "pricing-chin": "BRODA",
    "pricing-neck": "SZYJA",
    "pricing-armpits": "PACHY",
    "pricing-arms1": "R\u0118CE",
    "pricing-arms2": "R\u0118CE 1/2",
    "pricing-line": "LINIA NA BRUCHU",
    "pricing-lumbar": "L\u0118D\u0179WIE",
    "pricing-legs": "NOGI CA\u0141E",
    "pricing-legs": "NOGI 1/2",
    "pricing-bikinitop": "BIKINI TRADYCYNE",
    "pricing-bikinideep": "BIKINI G\u0141\u0118BOKE",
    "pricing-butt": "PO\u015ALADKI",
    "pricing-maildepilat": "Depilacja m\u0119\u017Cczyzn\u0105",
    "pricing-mailbrows": "REGULACJA BRWI",
    "pricing-ears": "USZY",
    "pricing-nose": "NOS",
    "pricing-neck": "KARK",
    "pricing-pits": "PACHY",
    "pricing-back": "PLECY",
    "pricing-backarms": "PLECY + RAMIONA",
    "pricing-hands": "R\u0118CE",
    "pricing-tors": "TORS",
    "pricing-stomack": "BRZUCH",
    "pricing-torsostomack": "TORS + BRZUCH",
    "pricing-linemale": "LINIA NA BRZUCHU",
    "pricing-maillegs": "NOGI",
    "pricing-maibut": "PO\u015ALADKI",
    "pricing-bikinilegs": "BIKINI + PO\u015ALADKI",
    "pricing-manicuretitle": "Manicure & Pedicure",
    "pricing-hybridmanicure": "MANICURE HYBRYDOWY",
    "pricing-hybridpicture": "MANICURE HYBRYDOWY + OBRAZEK",
    "pricing-conditioner": "MANICURE Z OD\u017BYWK\u0104",
    "pricing-french": "FRENCH",
    "pricing-gel": "PRZED\u0141U\u017BENIE \u017BELEM + HYBRYDA",
    "pricing-geladd": "DOPELNIENIE \u017BELEM + HYBRYDA",
    "pricing-natural": "\u017BEL NA NATURALNE P\u0141YTCE",
    "pricing-picturehybrid": "ZDJ\u0118CIE HYBRYDY I MANICURE Z OD\u017BYWK\u0104",
    "pricing-gelpicture": "ZDJ\u0118CIE HYBRYDY I MANICURE Z OD\u017BYWK\u0104",
    "pricing-hybridpedicure": "PEDICURE HYBRYDOWY",
    "pricing-pedicurefeet": "PEDICURE HYBRYDOWY + STOPY",
    "pricing-pedicurecondicioner": "PEDICURE Z OD\u017BYWK\u0104",
    "pricing-reconstruction": "REKONSTRUKCJA PAZNOKCIA W NASZYM SALONIE",
    "pricing-gelremove": "SCI\u0104GANIE \u017BELU (US\u0141UGA DODANA DO INNEJ)",
    "recommends-title": "Informacja dla klienta",
    "recommends-check": "Lista kontrolna idealnego klienta",
    "recommends-late": "Staraj si\u0119 nie sp\xf3\u017Ania\u0107 wi\u0119cej ni\u017C 15 minut (je\u015Bli sp\xf3\u017Anisz si\u0119 wi\u0119cej ni\u017C 15 minut, spotkanie zostanie odwo\u0142ane lub prze\u0142o\u017Cone).",
    "recommends-time": "Je\u015Bli si\u0119 sp\xf3\u017Anisz, daj nam zna\u0107, poniewa\u017C czas dla ka\u017Cdego klienta jest ograniczony.",
    "recommends-alone": "Przyjd\u017A bez opieki.",
    "recommends-sick": "Je\u015Bli zachorujesz, pami\u0119taj, aby ostrzec i prze\u0142o\u017Cy\u0107 wizyt\u0119.",
    "recommends-plan": "Pami\u0119taj, \u017Ce wysokiej jako\u015Bci praca wymaga czasu i cierpliwo\u015Bci, zaopatrz si\u0119 w ni\u0105 z wyprzedzeniem.",
    "recommends-trim": "Dlaczego nie mo\u017Cesz obci\u0105\u0107 brwi",
    "recommends-hair": "Z natury w\u0142osy maj\u0105 cienk\u0105, uszczelnion\u0105 ko\u0144c\xf3wk\u0119.",
    "recommends-disrupts": "Przycinanie brwi zaburza ich struktur\u0119. Grube, strzy\u017Cone w\u0142osy nie uk\u0142adaj\u0105 si\u0119 dobrze i zwisaj\u0105, co z czasem mo\u017Ce prowadzi\u0107 do zmiany kierunku wzrostu.",
    "recommends-structure": "Ze wzgl\u0119du na zmian\u0119 struktury w wyniku farbowania, kolor brwi b\u0119dzie niejednorodny. Przyci\u0119te w\u0142osy b\u0119d\u0105 ja\u015Bniejsze, bez cienkiej ko\u0144c\xf3wki.",
    "recommends-dye": "Jednocze\u015Bnie pigment wyjdzie z nich szybciej, co skraca trwa\u0142o\u015B\u0107 farby.",
    "recommends-fence": "Prosta linia strzy\u017Cenia b\u0119dzie wygl\u0105da\u0107 jak p\u0142ot za tydzie\u0144, poniewa\u017C w\u0142osy przechodz\u0105 przez r\xf3\u017Cne fazy wzrostu.",
    "recommends-whiskers": "W dotyku w\u0142osy b\u0119d\u0105 grube i k\u0142uj\u0105ce, podob\u043D\u043E w\u0105som.",
    "recommends-depilation": "Depilacj\u0105",
    "recommends-before": "Przed depilacj\u0105 nale\u017Cy przygotowa\u0107 sk\xf3r\u0119 tak, aby depilacja by\u0142a skuteczna i jak najmniej traumatyczna. Niekt\xf3re etapy przygotowawcze nale\u017Cy rozpocz\u0105\u0107 na kilka dni, a nawet tygodni przed zabiegiem. Zaplanuj zabieg depilacji przynajmniej na miesi\u0105c wcze\u015Bniej, aby mie\u0107 pewno\u015B\u0107, \u017Ce Twoja sk\xf3ra pozostanie zdrowa i g\u0142adka.",
    "recommends-predepilation": "Zalecenia przed zabiegiem depilacji:",
    "recommends-length": "D\u0142ugo\u015B\u0107 w\u0142os\xf3w przed pierwsz\u0105 depilacj\u0105 wynosi co najmniej 6-7 mm. To oko\u0142o 2 tygodnie po goleniu.",
    "recommends-subsequent": "Do kolejnych zabieg\xf3w wystarczy 5-6 mm, poniewa\u017C w\u0142osy b\u0119d\u0105 cie\u0144sze i \u0142atwiejsze do usuni\u0119cia.",
    "recommends-peels": "Na trzy dni przed zabiegiem nie zaleca si\u0119 wykonywania peeling\xf3w.",
    "recommends-sunbathe": "Nie zaleca si\u0119 opalania si\u0119 na s\u0142o\u0144cu i odwiedzania solarium przez siedem dni.",
    "recommends-oils": "W dniu zabiegu nie nale\u017Cy stosowa\u0107 t\u0142ustych balsam\xf3w ani olejk\xf3w.",
    "recommends-razor": "Nigdy nie u\u017Cywaj maszynki do golenia, kremu do depilacji ani depilatora mi\u0119dzy zabiegami.",
    "recommends-contraindications": "Przeciwwskazania do zabiegu. Obecno\u015B\u0107:",
    "recommends-burns": "\u041Etwartych ran, krost, skalecze\u0144, oparze\u0144 (w tym oparze\u0144 s\u0142onecznych) na sk\xf3rze.",
    "recommends-bypass": "W niekt\xf3rych przypadkach mo\u017Cemy omin\u0105\u0107 obszar, w kt\xf3rym wyst\u0119puj\u0105 uszkodzenia i wykona\u0107 zabieg.",
    "recommends-varicose": "Wyra\u017Ane \u017Cylaki.",
    "recommends-pregnancy": "Pierwszy i ostatni trymestr ci\u0105\u017Cy",
    "recommends-postdepilation": "Zalecenia po zabiegu depilacji:",
    "recommends-sauna": "Pierwszego dnia nie nale\u017Cy bra\u0107 gor\u0105cego prysznica (k\u0105pieli) oraz nie korzysta\u0107 z sauny.",
    "recommends-prohibit": "Surowo zabrania si\u0119 u\u017Cywania myjki pierwszego dnia.",
    "recommends-sports": "Nie uprawiaj sportu.",
    "recommends-clothing": "Nast\u0119pnego dnia po depilacji woskiem za\u0142\xf3\u017C wygodn\u0105 bawe\u0142nian\u0105 bielizn\u0119 i lu\u017An\u0105, oddychaj\u0105c\u0105 odzie\u017C.",
    "recommends-deodorant": "Nie nak\u0142adaj dezodorantu na depilowane miejsca. Surowo zabrania si\u0119 opalania si\u0119 na s\u0142o\u0144cu i korzystania z solarium.",
    "recommends-scrub": "Nie szoruj depilowanych miejsc przez pierwsze trzy dni po zabiegu.",
    "recommends-goal": "Po kilku zabiegach w\u0142osy rosn\u0105 znacznie wolniej i staj\u0105 si\u0119 cie\u0144sze i s\u0142absze, a to r\xf3wnie\u017C wp\u0142ywa na czu\u0142o\u015B\u0107 zabiegu! Celem depilacji woskiem jest nie tylko usuwanie w\u0142os\xf3w, ale stopniowa zmiana ich jako\u015Bci i ilo\u015Bci.",
    "recommends-difference": "Po 4-5 zabiegach zauwa\u017Cysz ogromn\u0105 r\xf3\u017Cnic\u0119:",
    "recommends-softer": "W\u0142osy staj\u0105 si\u0119 bardziej mi\u0119kkie i ja\u015Bniejsze.",
    "recommends-remnants": "Resztki w\u0142os\xf3w nie maj\u0105 szorstkiego ci\u0119cia, jak po brzytwie.",
    "recommends-tolerated": "Sk\xf3ra staje si\u0119 bardziej podatna na depilacj\u0119, a zabieg jest \u0142atwiej tolerowany.",
    "recommends-shortened": "Ze wzgl\u0119du na to, \u017Ce w\u0142os\xf3w jest mniej, skraca si\u0119 r\xf3wnie\u017C czas zabiegu.",
    "recommends-silky": "Sk\xf3ra staje si\u0119 g\u0142adka, elastyczna i jedwabista.",
    "work-title": "Kontakt i godziny otwarcia",
    "work-monday": "poniedzia\u0142ek",
    "work-tuesday": "wtorek",
    "work-wednesday ": "\u015Broda ",
    "work-thursday": "czwartek",
    "work-friday": "pi\u0105tek",
    "work-saturday": "sobota",
    "work-sunday": "niedziela",
    "work-btn": "Zadzwo\u0144",
    "contacts-title": "Kontakty",
    "contacts-subtitle": "Mo\u017Cesz do nas dzwoni\u0107 o ka\u017Cdej porze",
    "contacts-address": " ul. Lawendowa 9, 80-840 Gda\u0144sk, Polska",
    "contacts-emailus": "Nie wahaj si\u0119 wys\u0142a\u0107 nam swoich pyta\u0144 drog\u0105 mailow\u0105",
    "contacts-touch": "SKONTAKTUJ SI\u0118",
    "contacts-mistake1": "To pole jest wymagane",
    "contacts-mistake2": "To pole jest wymagane",
    "contacts-mistake3": "To pole jest wymagane",
    "contacts-btn": "wy\u015Blij wiadomo\u015B\u0107",
    "footer-hidden": "stopka strony",
    "footer-pricing": "Cennik",
    "footer-contacts": "Kontakty",
    "footer-gallery": "Galeria",
    "footer-about": "O Nas",
    "mod_about-title": "O Nas",
    "mod_about-text_top": "Beauty Style to jeden z najlepszych salon\xf3w urody w Gda\u0144sku.",
    "mod_about-text_middle": " Witamy w Beauty Style \u2013 tam, gdzie pi\u0119kno przekszta\u0142ca si\u0119 w histori\u0119! Nasz zesp\xf3\u0142 to przyjazna rodzina specjalist\xf3w, kt\xf3rzy nie tylko tworz\u0105 pi\u0119kny wizerunek, ale tak\u017Ce kszta\u0142tuj\u0105 kompleksowy spos\xf3b \u017Cycia. W Beauty Style ka\u017Cdy mistrz to wirtuoz w swoim fachu, z szerokim do\u015Bwiadczeniem i talentem, gotowy do indywidualnego podej\u015Bcia. D\u0105\u017Cymy do tego, aby nasi klienci nie tylko cieszyli si\u0119 us\u0142ugami najwy\u017Cszej jako\u015Bci, ale tak\u017Ce odczuwali wygod\u0119, go\u015Bcinno\u015B\u0107 i inspiracj\u0119 w Beauty Style.",
    "mod_about-text_bottom": "Powierz swoje pi\u0119kno ekspertom z Beauty Style \u2013 gdzie ka\u017Cdy go\u015B\u0107 to nie tylko klient, ale wa\u017Cna cz\u0119\u015B\u0107 naszej historii.",
    "mod_about-contact": "Skontaktuj si\u0119 z nami",
    "mod_promo-subtitle": "tylko 3 dni",
    "mod_promo-title": "20% zni\u017Cki na us\u0142ugi stylizacji paznokci",
    "mod_promo-text": "Lorem ipsum dolor, consectetur adipisicing elit. Ea soluta assumenda facilis ex. Aliquid iste optio minus? Aut dolores nisi eum laborum eos error porro, alias, sapiente animi, accusantium officiis. Perspiciatis, magni expedita veritatis, rem eveniet possimus ducimus fugit pariatur alias cupiditate rerum, esse recusandae officia at modi facere aspernatur harum! Quae rerum nostrum eius voluptatum excepturi corrupti earum reprehenderit? Voluptas maxime doloribus earum ex in, est tempore.",
    "mod_promo-contact": "Skontaktuj si\u0119 z nami"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["frCXN"], null, "parcelRequire16ac")

//# sourceMappingURL=pl.ac57b597.js.map
