
// --------------------
// Request: C:/Users/acer/Desktop/ganpatjangra.me/node_modules/nuxt3/dist/app/entry
// Parents: 
// - <entry> ($id_c757eb9e)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/bootstrap.mjs ($id_fef466a9)
// --------------------
const $id_0bdfba74 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const entry = true ? (ctx) => __vite_ssr_dynamic_import__('/node_modules/nuxt3/dist/app/bootstrap.mjs').then((m) => m.default(ctx)) : () => __vite_ssr_dynamic_import__('/node_modules/nuxt3/dist/app/bootstrap.mjs').then((m) => m.default);
if (false) {
  entry();
}
__vite_ssr_exports__.default = entry;
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/bootstrap.mjs
// Parents: 
// - C:/Users/acer/Desktop/ganpatjangra.me/node_modules/nuxt3/dist/app/entry ($id_0bdfba74)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /@id/__x00__virtual:C:/Users/acer/Desktop/ganpatjangra.me/.nuxt/css.mjs ($id_838a58c0)
// - /@id/__x00__virtual:C:/Users/acer/Desktop/ganpatjangra.me/.nuxt/plugins/server.mjs ($id_197ba429)
// - /@id/__x00__virtual:C:/Users/acer/Desktop/ganpatjangra.me/.nuxt/root-component.mjs ($id_f92004e9)
// - /@id/__x00__virtual:C:/Users/acer/Desktop/ganpatjangra.me/.nuxt/app-component.mjs ($id_f17181d1)
// --------------------
const $id_fef466a9 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/__x00__virtual:C:/Users/acer/Desktop/ganpatjangra.me/.nuxt/css.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/__x00__virtual:C:/Users/acer/Desktop/ganpatjangra.me/.nuxt/plugins/server.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__virtual:C:/Users/acer/Desktop/ganpatjangra.me/.nuxt/root-component.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__virtual:C:/Users/acer/Desktop/ganpatjangra.me/.nuxt/app-component.mjs");

let entry;
const plugins = __vite_ssr_import_1__.normalizePlugins(__vite_ssr_import_3__.default);
if (true) {
  entry = async function createNuxtAppServer(ssrContext = {}) {
    const vueApp = __vite_ssr_import_0__.createApp(__vite_ssr_import_4__.default);
    vueApp.component("App", __vite_ssr_import_5__.default);
    const nuxt = __vite_ssr_import_1__.createNuxtApp({ vueApp, ssrContext });
    await __vite_ssr_import_1__.applyPlugins(nuxt, plugins);
    await nuxt.hooks.callHook("app:created", vueApp);
    return vueApp;
  };
}
if (false) {
  if (true && __vite_ssr_import_meta__.webpackHot) {
    __vite_ssr_import_meta__.webpackHot.accept();
  }
  entry = async function initApp() {
    const isSSR = Boolean(window.__NUXT__?.serverRendered);
    const vueApp = isSSR ? __vite_ssr_import_0__.createSSRApp(__vite_ssr_import_4__.default) : __vite_ssr_import_0__.createApp(__vite_ssr_import_4__.default);
    vueApp.component("App", __vite_ssr_import_5__.default);
    const nuxt = __vite_ssr_import_1__.createNuxtApp({ vueApp });
    await __vite_ssr_import_1__.applyPlugins(nuxt, plugins);
    await nuxt.hooks.callHook("app:created", vueApp);
    await nuxt.hooks.callHook("app:beforeMount", vueApp);
    nuxt.hooks.hookOnce("page:finish", () => {
      nuxt.isHydrating = false;
    });
    vueApp.mount("#__nuxt");
    await nuxt.hooks.callHook("app:mounted", vueApp);
    await __vite_ssr_import_0__.nextTick();
  };
  entry().catch((error) => {
    console.error("Error while mounting app:", error);
  });
}
__vite_ssr_exports__.default = (ctx) => entry(ctx);
;
}


// --------------------
// Request: /node_modules/vue/dist/vue.cjs.js
// Parents: 
// - /node_modules/nuxt3/dist/app/bootstrap.mjs ($id_fef466a9)
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// - /node_modules/nuxt3/dist/app/composables/state.mjs ($id_d232db97)
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// - /node_modules/@vueuse/head/dist/index.mjs ($id_c032264e)
// - /node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs ($id_cbe5172d)
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// - /node_modules/nuxt3/dist/meta/runtime/components.mjs ($id_94744df3)
// - /node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_ca9295be)
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// - /node_modules/nuxt3/dist/pages/runtime/nested-page.vue ($id_c268603a)
// - /node_modules/nuxt3/dist/pages/runtime/page.vue ($id_10628d40)
// - /node_modules/nuxt3/dist/pages/runtime/layout.mjs ($id_9b68c93f)
// - /@id/__x00__virtual:C:/Users/acer/Desktop/ganpatjangra.me/.nuxt/layouts.mjs ($id_45f47c42)
// - /components/skills.vue ($id_43fa255d)
// - /components/project.vue ($id_9aa3dd9e)
// - /components/home.vue ($id_4ae345a3)
// - /pages/index.vue ($id_cca58e97)
// - /@id/__x00__virtual:C:/Users/acer/Desktop/ganpatjangra.me/.nuxt/components.mjs ($id_46c29c57)
// - /node_modules/nuxt3/dist/app/components/nuxt-root.vue ($id_f8564e04)
// - /node_modules/nuxt3/dist/pages/runtime/app.vue ($id_0851ff57)
// Dependencies: 

// --------------------
const $id_60f0615f = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///C:/Users/acer/Desktop/ganpatjangra.me/node_modules/vue/dist/vue.cjs.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "C:/Users/acer/Desktop/ganpatjangra.me/node_modules/vue/dist/vue.cjs.js".') })


// --------------------
// Request: /node_modules/nuxt3/dist/app/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/bootstrap.mjs ($id_fef466a9)
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// - /node_modules/nuxt3/dist/app/composables/hydrate.mjs ($id_43a772c2)
// - /node_modules/nuxt3/dist/app/composables/state.mjs ($id_d232db97)
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// - /node_modules/nuxt3/dist/app/composables/ssr.mjs ($id_4d0dc923)
// - /node_modules/nuxt3/dist/app/plugins/preload.server.mjs ($id_b9f3c557)
// - /node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs ($id_cbe5172d)
// - /node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_ca9295be)
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// - /node_modules/nuxt3/dist/pages/runtime/page.vue ($id_10628d40)
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// - /node_modules/nuxt3/dist/app/components/nuxt-root.vue ($id_f8564e04)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// --------------------
const $id_d8c2af0f = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/nuxt.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/index.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_1__);
const isVue2 = false;
Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return isVue2 }});
const isVue3 = true;
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return isVue3 }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/nuxt.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /node_modules/nuxt3/dist/app/compat/legacy-app.mjs ($id_75047751)
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/hookable/dist/index.mjs ($id_a2c811c4)
// - /node_modules/nuxt3/dist/app/compat/legacy-app.mjs ($id_75047751)
// --------------------
const $id_bf77ef36 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/hookable/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/compat/legacy-app.mjs");

const NuxtPluginIndicator = "__nuxt_plugin";
Object.defineProperty(__vite_ssr_exports__, "NuxtPluginIndicator", { enumerable: true, configurable: true, get(){ return NuxtPluginIndicator }});
function createNuxtApp(options) {
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    payload: __vite_ssr_import_0__.reactive({
      data: {},
      state: {},
      _errors: {},
      ...false ? window.__NUXT__ : { serverRendered: true }
    }),
    isHydrating: false,
    _asyncDataPromises: {},
    ...options
  };
  nuxtApp.hooks = __vite_ssr_import_1__.createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  if (nuxtApp.ssrContext) {
    nuxtApp.ssrContext.nuxt = nuxtApp;
  }
  if (true) {
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    nuxtApp.ssrContext.payload = nuxtApp.payload;
  }
  if (true) {
    nuxtApp.provide("config", options.ssrContext.runtimeConfig.private);
    nuxtApp.payload.config = options.ssrContext.runtimeConfig.public;
  } else {
    nuxtApp.provide("config", __vite_ssr_import_0__.reactive(nuxtApp.payload.config));
  }
  return nuxtApp;
}
Object.defineProperty(__vite_ssr_exports__, "createNuxtApp", { enumerable: true, configurable: true, get(){ return createNuxtApp }});
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide } = await callWithNuxt(nuxtApp, () => plugin(nuxtApp)) || {};
  if (provide && typeof provide === "object") {
    for (const key in provide) {
      nuxtApp.provide(key, provide[key]);
    }
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugin", { enumerable: true, configurable: true, get(){ return applyPlugin }});
async function applyPlugins(nuxtApp, plugins) {
  for (const plugin of plugins) {
    await applyPlugin(nuxtApp, plugin);
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugins", { enumerable: true, configurable: true, get(){ return applyPlugins }});
function normalizePlugins(_plugins) {
  let needsLegacyContext = false;
  const plugins = _plugins.map((plugin) => {
    if (typeof plugin !== "function") {
      return () => {
      };
    }
    if (isLegacyPlugin(plugin)) {
      needsLegacyContext = true;
      return (nuxtApp) => plugin(nuxtApp._legacyContext, nuxtApp.provide);
    }
    return plugin;
  });
  if (needsLegacyContext) {
    plugins.unshift(__vite_ssr_import_2__.legacyPlugin);
  }
  return plugins;
}
Object.defineProperty(__vite_ssr_exports__, "normalizePlugins", { enumerable: true, configurable: true, get(){ return normalizePlugins }});
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtPlugin", { enumerable: true, configurable: true, get(){ return defineNuxtPlugin }});
function isLegacyPlugin(plugin) {
  return !plugin[NuxtPluginIndicator];
}
Object.defineProperty(__vite_ssr_exports__, "isLegacyPlugin", { enumerable: true, configurable: true, get(){ return isLegacyPlugin }});
let currentNuxtAppInstance;
const setNuxtAppInstance = (nuxt) => {
  currentNuxtAppInstance = nuxt;
};
Object.defineProperty(__vite_ssr_exports__, "setNuxtAppInstance", { enumerable: true, configurable: true, get(){ return setNuxtAppInstance }});
function callWithNuxt(nuxt, setup) {
  setNuxtAppInstance(nuxt);
  const p = setup();
  if (true) {
    setNuxtAppInstance(null);
  }
  return p;
}
Object.defineProperty(__vite_ssr_exports__, "callWithNuxt", { enumerable: true, configurable: true, get(){ return callWithNuxt }});
function useNuxtApp() {
  const vm = __vite_ssr_import_0__.getCurrentInstance();
  if (!vm) {
    if (!currentNuxtAppInstance) {
      throw new Error("nuxt instance unavailable");
    }
    return currentNuxtAppInstance;
  }
  return vm.appContext.app.$nuxt;
}
Object.defineProperty(__vite_ssr_exports__, "useNuxtApp", { enumerable: true, configurable: true, get(){ return useNuxtApp }});
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
Object.defineProperty(__vite_ssr_exports__, "useRuntimeConfig", { enumerable: true, configurable: true, get(){ return useRuntimeConfig }});
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
;
}


// --------------------
// Request: /node_modules/hookable/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// Dependencies: 

// --------------------
const $id_a2c811c4 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///C:/Users/acer/Desktop/ganpatjangra.me/node_modules/hookable/dist/index.mjs').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "C:/Users/acer/Desktop/ganpatjangra.me/node_modules/hookable/dist/index.mjs".') })


// --------------------
// Request: /node_modules/nuxt3/dist/app/compat/legacy-app.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// Dependencies: 
// - /node_modules/unenv/runtime/mock/proxy.mjs ($id_39e12da7)
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// --------------------
const $id_75047751 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/unenv/runtime/mock/proxy.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/nuxt.mjs");

function mock(warning) {
  console.warn(warning);
  return __vite_ssr_import_0__.default;
}
const unsupported = new Set([
  "store",
  "spa",
  "fetchCounters"
]);
const todo = new Set([
  "isHMR",
  "base",
  "payload",
  "from",
  "next",
  "error",
  "redirect",
  "redirected",
  "enablePreview",
  "$preview",
  "beforeNuxtRender",
  "beforeSerialize"
]);
const serverProperties = new Set([
  "req",
  "res",
  "ssrContext"
]);
const routerKeys = ["route", "params", "query"];
const staticFlags = {
  isClient: false,
  isServer: true,
  isDev: true,
  isStatic: void 0,
  target: "server",
  modern: false
};
const legacyPlugin = (nuxtApp) => {
  nuxtApp._legacyContext = new Proxy(nuxtApp, {
    get(nuxt, p) {
      if (unsupported.has(p)) {
        return mock(`Accessing ${p} is not supported in Nuxt 3.`);
      }
      if (todo.has(p)) {
        return mock(`Accessing ${p} is not yet supported in Nuxt 3.`);
      }
      if (routerKeys.includes(p)) {
        if (!("$router" in nuxtApp)) {
          return mock("vue-router is not being used in this project.");
        }
        switch (p) {
          case "route":
            return nuxt.$router.currentRoute.value;
          case "params":
          case "query":
            return nuxt.$router.currentRoute.value[p];
        }
      }
      if (p === "$config" || p === "env") {
        return __vite_ssr_import_1__.useRuntimeConfig();
      }
      if (p in staticFlags) {
        return staticFlags[p];
      }
      if (false && serverProperties.has(p)) {
        return void 0;
      }
      if (p === "ssrContext") {
        return nuxt._legacyContext;
      }
      if (nuxt.ssrContext && p in nuxt.ssrContext) {
        return nuxt.ssrContext[p];
      }
      if (p === "nuxt") {
        return nuxt.payload;
      }
      if (p === "nuxtState") {
        return nuxt.payload.data;
      }
      if (p in nuxtApp.vueApp) {
        return nuxtApp.vueApp[p];
      }
      if (p in nuxtApp) {
        return nuxtApp[p];
      }
      return mock(`Accessing ${p} is not supported in Nuxt3.`);
    }
  });
  if (false) {
    nuxtApp.hook("app:created", () => {
      const legacyApp = { ...nuxtApp.vueApp };
      legacyApp.$root = legacyApp;
      legacyApp.constructor = legacyApp;
      window[`$${nuxtApp.globalName}`] = legacyApp;
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "legacyPlugin", { enumerable: true, configurable: true, get(){ return legacyPlugin }});
;
}


// --------------------
// Request: /node_modules/unenv/runtime/mock/proxy.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/compat/legacy-app.mjs ($id_75047751)
// Dependencies: 

// --------------------
const $id_39e12da7 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///C:/Users/acer/Desktop/ganpatjangra.me/node_modules/unenv/runtime/mock/proxy.mjs').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "C:/Users/acer/Desktop/ganpatjangra.me/node_modules/unenv/runtime/mock/proxy.mjs".') })


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// - /node_modules/nuxt3/dist/app/composables/hydrate.mjs ($id_43a772c2)
// - /node_modules/nuxt3/dist/app/composables/state.mjs ($id_d232db97)
// - /node_modules/nuxt3/dist/app/composables/fetch.mjs ($id_765a0ed7)
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// - /node_modules/nuxt3/dist/app/composables/ssr.mjs ($id_4d0dc923)
// --------------------
const $id_42ae3d5d = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/component.mjs");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.defineNuxtComponent }});
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/asyncData.mjs");

Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useLazyAsyncData }});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/hydrate.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useHydration }});
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/state.mjs");

Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useState }});
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/fetch.mjs");

Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.useFetch }});
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.useLazyFetch }});
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/cookie.mjs");

Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useCookie }});
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/ssr.mjs");

Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.useRequestHeaders }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/component.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// --------------------
const $id_b47c3881 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/nuxt.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/asyncData.mjs");

const NuxtComponentIndicator = "__nuxt_component";
Object.defineProperty(__vite_ssr_exports__, "NuxtComponentIndicator", { enumerable: true, configurable: true, get(){ return NuxtComponentIndicator }});
async function runLegacyAsyncData(res, fn) {
  const nuxt = __vite_ssr_import_2__.useNuxtApp();
  const route = __vite_ssr_import_1__.useRoute();
  const vm = __vite_ssr_import_0__.getCurrentInstance();
  const { fetchKey } = vm.proxy.$options;
  const key = typeof fetchKey === "function" ? fetchKey(() => "") : fetchKey || route.fullPath;
  const { data } = await __vite_ssr_import_3__.useAsyncData(`options:asyncdata:${key}`, () => fn(nuxt._legacyContext));
  Object.assign(await res, __vite_ssr_import_0__.toRefs(data));
}
const defineNuxtComponent = function defineNuxtComponent2(options) {
  const { setup } = options;
  if (!setup && !options.asyncData) {
    return {
      [NuxtComponentIndicator]: true,
      ...options
    };
  }
  return {
    [NuxtComponentIndicator]: true,
    ...options,
    setup(props, ctx) {
      const res = setup?.(props, ctx) || {};
      let promises = [];
      promises = promises || [];
      if (options.asyncData) {
        promises.push(runLegacyAsyncData(res, options.asyncData));
      }
      return Promise.resolve(res).then(() => Promise.all(promises)).then(() => res).finally(() => {
        promises.length = 0;
        promises = null;
      });
    }
  };
};
Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return defineNuxtComponent }});
;
}


// --------------------
// Request: /node_modules/vue-router/dist/vue-router.cjs.js
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// Dependencies: 

// --------------------
const $id_f9a4a698 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///C:/Users/acer/Desktop/ganpatjangra.me/node_modules/vue-router/dist/vue-router.cjs.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "C:/Users/acer/Desktop/ganpatjangra.me/node_modules/vue-router/dist/vue-router.cjs.js".') })


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/asyncData.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// - /node_modules/nuxt3/dist/app/composables/fetch.mjs ($id_765a0ed7)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_a2ef143e = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const getDefault = () => null;
function useAsyncData(key, handler, options = {}) {
  if (typeof key !== "string") {
    throw new TypeError("asyncData key must be a string");
  }
  if (typeof handler !== "function") {
    throw new TypeError("asyncData handler must be a function");
  }
  options = { server: true, default: getDefault, ...options };
  if (options.defer) {
    console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC.");
  }
  options.lazy = options.lazy ?? options.defer ?? false;
  const nuxt = __vite_ssr_import_1__.useNuxtApp();
  const instance = __vite_ssr_import_0__.getCurrentInstance();
  if (instance && !instance._nuxtOnBeforeMountCbs) {
    const cbs = instance._nuxtOnBeforeMountCbs = [];
    if (instance && false) {
      __vite_ssr_import_0__.onBeforeMount(() => {
        cbs.forEach((cb) => {
          cb();
        });
        cbs.splice(0, cbs.length);
      });
      __vite_ssr_import_0__.onUnmounted(() => cbs.splice(0, cbs.length));
    }
  }
  const asyncData = {
    data: __vite_ssr_import_0__.ref(nuxt.payload.data[key] ?? options.default()),
    pending: __vite_ssr_import_0__.ref(true),
    error: __vite_ssr_import_0__.ref(nuxt.payload._errors[key] ?? null)
  };
  asyncData.refresh = (force) => {
    if (nuxt._asyncDataPromises[key] && !force) {
      return nuxt._asyncDataPromises[key];
    }
    asyncData.pending.value = true;
    nuxt._asyncDataPromises[key] = Promise.resolve(handler(nuxt)).then((result) => {
      if (options.transform) {
        result = options.transform(result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
    }).catch((error) => {
      asyncData.error.value = error;
      asyncData.data.value = options.default();
    }).finally(() => {
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = true;
      }
      delete nuxt._asyncDataPromises[key];
    });
    return nuxt._asyncDataPromises[key];
  };
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (true && fetchOnServer) {
    const promise = asyncData.refresh();
    __vite_ssr_import_0__.onServerPrefetch(() => promise);
  }
  if (false) {
    if (fetchOnServer && nuxt.isHydrating) {
      asyncData.pending.value = false;
    } else if (instance && (nuxt.isHydrating || options.lazy)) {
      instance._nuxtOnBeforeMountCbs.push(asyncData.refresh);
    } else {
      asyncData.refresh();
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return useAsyncData }});
function useLazyAsyncData(key, handler, options = {}) {
  return useAsyncData(key, handler, { ...options, lazy: true });
}
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return useLazyAsyncData }});
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/hydrate.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_43a772c2 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const useHydration = (key, get, set) => {
  const nuxt = __vite_ssr_import_0__.useNuxtApp();
  if (true) {
    nuxt.hooks.hook("app:rendered", () => {
      nuxt.payload[key] = get();
    });
  }
  if (false) {
    nuxt.hooks.hook("app:created", () => {
      set(nuxt.payload[key]);
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return useHydration }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/state.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_d232db97 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const useState = (key, init) => {
  const nuxt = __vite_ssr_import_1__.useNuxtApp();
  const state = __vite_ssr_import_0__.toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    state.value = init();
  }
  return state;
};
Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return useState }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/fetch.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/murmurhash-es/dist/index.mjs ($id_fbf6dac3)
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// --------------------
const $id_765a0ed7 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/murmurhash-es/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/asyncData.mjs");

function useFetch(url, opts = {}) {
  if (!opts.key) {
    const keys = { u: url };
    if (opts.baseURL) {
      keys.b = opts.baseURL;
    }
    if (opts.method && opts.method.toLowerCase() !== "get") {
      keys.m = opts.method.toLowerCase();
    }
    if (opts.params) {
      keys.p = opts.params;
    }
    opts.key = generateKey(keys);
  }
  return __vite_ssr_import_1__.useAsyncData(opts.key, () => $fetch(url, opts), opts);
}
Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return useFetch }});
function useLazyFetch(url, opts = {}) {
  return useFetch(url, { ...opts, lazy: true });
}
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return useLazyFetch }});
function generateKey(keys) {
  return "$f" + __vite_ssr_import_0__.murmurHashV3(JSON.stringify(keys));
}
;
}


// --------------------
// Request: /node_modules/murmurhash-es/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/fetch.mjs ($id_765a0ed7)
// Dependencies: 

// --------------------
const $id_fbf6dac3 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///C:/Users/acer/Desktop/ganpatjangra.me/node_modules/murmurhash-es/dist/index.mjs').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "C:/Users/acer/Desktop/ganpatjangra.me/node_modules/murmurhash-es/dist/index.mjs".') })


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/cookie.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/cookie-es/dist/index.mjs ($id_f4975261)
// - /node_modules/h3/dist/index.mjs ($id_57d7ded6)
// - /node_modules/destr/dist/index.mjs ($id_03d15ecd)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_792d64c4 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/cookie-es/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/destr/dist/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const CookieDefaults = {
  decode: (val) => __vite_ssr_import_3__.default(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts);
  const cookie = __vite_ssr_import_0__.ref(cookies[name] ?? opts.default?.());
  if (false) {
    __vite_ssr_import_0__.watch(cookie, () => {
      writeClientCookie(name, cookie.value, opts);
    });
  } else if (true) {
    const initialValue = cookie.value;
    const nuxtApp = __vite_ssr_import_4__.useNuxtApp();
    nuxtApp.hooks.hookOnce("app:rendered", () => {
      if (cookie.value !== initialValue) {
        writeServerCookie(useSSRRes(nuxtApp), name, cookie.value, opts);
      }
    });
  }
  return cookie;
}
Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return useCookie }});
function useSSRReq(nuxtApp = __vite_ssr_import_4__.useNuxtApp()) {
  return nuxtApp.ssrContext?.req;
}
function useSSRRes(nuxtApp = __vite_ssr_import_4__.useNuxtApp()) {
  return nuxtApp.ssrContext?.res;
}
function readRawCookies(opts = {}) {
  if (true) {
    return __vite_ssr_import_1__.parse(useSSRReq().headers.cookie || "", opts);
  } else if (false) {
    return __vite_ssr_import_1__.parse(document.cookie, opts);
  }
}
function serializeCookie(name, value, opts = {}) {
  if (value === null || value === void 0) {
    return __vite_ssr_import_1__.serialize(name, value, { ...opts, maxAge: -1 });
  }
  return __vite_ssr_import_1__.serialize(name, value, opts);
}
function writeClientCookie(name, value, opts = {}) {
  if (false) {
    document.cookie = serializeCookie(name, value, opts);
  }
}
function writeServerCookie(res, name, value, opts = {}) {
  if (res) {
    __vite_ssr_import_2__.appendHeader(res, "Set-Cookie", serializeCookie(name, value, opts));
  }
}
;
}


// --------------------
// Request: /node_modules/cookie-es/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// Dependencies: 

// --------------------
const $id_f4975261 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///C:/Users/acer/Desktop/ganpatjangra.me/node_modules/cookie-es/dist/index.mjs').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "C:/Users/acer/Desktop/ganpatjangra.me/node_modules/cookie-es/dist/index.mjs".') })


// --------------------
// Request: /node_modules/h3/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// Dependencies: 

// --------------------
const $id_57d7ded6 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///C:/Users/acer/Desktop/ganpatjangra.me/node_modules/h3/dist/index.mjs').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "C:/Users/acer/Desktop/ganpatjangra.me/node_modules/h3/dist/index.mjs".') })


// --------------------
// Request: /node_modules/destr/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// Dependencies: 

// --------------------
const $id_03d15ecd = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///C:/Users/acer/Desktop/ganpatjangra.me/node_modules/destr/dist/index.mjs').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "C:/Users/acer/Desktop/ganpatjangra.me/node_modules/destr/dist/index.mjs".') })


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/ssr.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_4d0dc923 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

function useRequestHeaders(include) {
  if (false) {
    return {};
  }
  const headers = __vite_ssr_import_0__.useNuxtApp().ssrContext?.req.headers ?? {};
  if (!include) {
    return headers;
  }
  return Object.fromEntries(include.filter((key) => headers[key]).map((key) => [key, headers[key]]));
}
Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return useRequestHeaders }});
;
}


// --------------------
// Request: /@id/__x00__virtual:C:/Users/acer/Desktop/ganpatjangra.me/.nuxt/css.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/bootstrap.mjs ($id_fef466a9)
// Dependencies: 
// - /assets/css/tailwind.css ($id_f75548e1)
// --------------------
const $id_838a58c0 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/assets/css/tailwind.css");
;
}


// --------------------
// Request: /assets/css/tailwind.css
// Parents: 
// - /@id/__x00__virtual:C:/Users/acer/Desktop/ganpatjangra.me/.nuxt/css.mjs ($id_838a58c0)
// Dependencies: 

// --------------------
const $id_f75548e1 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/*\n! tailwindcss v3.0.8 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: \"DM Sans\", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #777e8e; /* 2 */\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1; /* 1 */\n  color: #777e8e; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #777e8e; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}\n\n*, *::before, *::after {\n  --animation-duration: 1s;\n  --animation-iteration-count: infinite;\n}\n\n@-webkit-keyframes tracking-in-expand {\n\n  0% {\n    letter-spacing: -.5em;\n    opacity: 0;\n  }\n\n  40% {\n    opacity: .6;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes tracking-in-expand {\n\n  0% {\n    letter-spacing: -.5em;\n    opacity: 0;\n  }\n\n  40% {\n    opacity: .6;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes pulsate-bck {\n\n  0%,to {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: scale(.9);\n  }\n}\n\n@keyframes pulsate-bck {\n\n  0%,to {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: scale(.9);\n  }\n}\n\n@-webkit-keyframes shake-horizontal {\n\n  0%,to {\n    transform: translateX(0);\n  }\n\n  10%,30%,50%,70% {\n    transform: translateX(-10px);\n  }\n\n  20%,40%,60% {\n    transform: translateX(10px);\n  }\n\n  80% {\n    transform: translateX(8px);\n  }\n\n  90% {\n    transform: translateX(-8px);\n  }\n}\n\n@keyframes shake-horizontal {\n\n  0%,to {\n    transform: translateX(0);\n  }\n\n  10%,30%,50%,70% {\n    transform: translateX(-10px);\n  }\n\n  20%,40%,60% {\n    transform: translateX(10px);\n  }\n\n  80% {\n    transform: translateX(8px);\n  }\n\n  90% {\n    transform: translateX(-8px);\n  }\n}\n\n@-webkit-keyframes vibrate-1 {\n\n  0%,to {\n    transform: translate(0);\n  }\n\n  20% {\n    transform: translate(-2px, 2px);\n  }\n\n  40% {\n    transform: translate(-2px, -2px);\n  }\n\n  60% {\n    transform: translate(2px, 2px);\n  }\n\n  80% {\n    transform: translate(2px, -2px);\n  }\n}\n\n@keyframes vibrate-1 {\n\n  0%,to {\n    transform: translate(0);\n  }\n\n  20% {\n    transform: translate(-2px, 2px);\n  }\n\n  40% {\n    transform: translate(-2px, -2px);\n  }\n\n  60% {\n    transform: translate(2px, 2px);\n  }\n\n  80% {\n    transform: translate(2px, -2px);\n  }\n}\n\n@-webkit-keyframes spin {\n\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes jump {\n\n  0% {\n    transform: translateY(0%);\n  }\n\n  50% {\n    transform: translateY(-100%);\n  }\n\n  100% {\n    transform: translateY(0%);\n  }\n}\n\n@keyframes jump {\n\n  0% {\n    transform: translateY(0%);\n  }\n\n  50% {\n    transform: translateY(-100%);\n  }\n\n  100% {\n    transform: translateY(0%);\n  }\n}\r\n*, ::before, ::after {\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  --tw-border-opacity: 1;\n  border-color: rgb(206 209 215 / var(--tw-border-opacity));\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-backdrop-blur: var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-brightness: var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-contrast: var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-grayscale: var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-hue-rotate: var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-invert: var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-opacity: var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-saturate: var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-sepia: var(--tw-empty,/*!*/ /*!*/);\n  --tw-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\r\n.container {\n  width: 100%;\n}\r\n@media (min-width: 640px) {\n\n  .container {\n    max-width: 640px;\n  }\n}\r\n@media (min-width: 768px) {\n\n  .container {\n    max-width: 768px;\n  }\n}\r\n@media (min-width: 1024px) {\n\n  .container {\n    max-width: 1024px;\n  }\n}\r\n@media (min-width: 1280px) {\n\n  .container {\n    max-width: 1280px;\n  }\n}\r\n@media (min-width: 1536px) {\n\n  .container {\n    max-width: 1536px;\n  }\n}\r\n/* code  */\r\n.absolute {\n  position: absolute;\n}\r\n.relative {\n  position: relative;\n}\r\n.inset-0 {\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n}\r\n.top-5 {\n  top: 1.25rem;\n}\r\n.right-2 {\n  right: 0.5rem;\n}\r\n.top-0 {\n  top: 0px;\n}\r\n.left-1\\/2 {\n  left: 50%;\n}\r\n.left-\\[38\\%\\] {\n  left: 38%;\n}\r\n.left-\\[62\\%\\] {\n  left: 62%;\n}\r\n.left-\\[40\\%\\] {\n  left: 40%;\n}\r\n.left-\\[60\\%\\] {\n  left: 60%;\n}\r\n.left-\\[35\\%\\] {\n  left: 35%;\n}\r\n.left-\\[65\\%\\] {\n  left: 65%;\n}\r\n.z-10 {\n  z-index: 10;\n}\r\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\r\n.mx-4 {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\r\n.-mx-4 {\n  margin-left: -1rem;\n  margin-right: -1rem;\n}\r\n.-mx-1 {\n  margin-left: -0.25rem;\n  margin-right: -0.25rem;\n}\r\n.mx-10 {\n  margin-left: 2.5rem;\n  margin-right: 2.5rem;\n}\r\n.mx-5 {\n  margin-left: 1.25rem;\n  margin-right: 1.25rem;\n}\r\n.mx-2 {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\r\n.mb-24 {\n  margin-bottom: 6rem;\n}\r\n.mb-16 {\n  margin-bottom: 4rem;\n}\r\n.mt-1 {\n  margin-top: 0.25rem;\n}\r\n.-mt-9 {\n  margin-top: -2.25rem;\n}\r\n.mb-5 {\n  margin-bottom: 1.25rem;\n}\r\n.mb-6 {\n  margin-bottom: 1.5rem;\n}\r\n.mr-6 {\n  margin-right: 1.5rem;\n}\r\n.mb-20 {\n  margin-bottom: 5rem;\n}\r\n.mb-4 {\n  margin-bottom: 1rem;\n}\r\n.mb-10 {\n  margin-bottom: 2.5rem;\n}\r\n.mb-8 {\n  margin-bottom: 2rem;\n}\r\n.-mt-8 {\n  margin-top: -2rem;\n}\r\n.mb-14 {\n  margin-bottom: 3.5rem;\n}\r\n.mr-2 {\n  margin-right: 0.5rem;\n}\r\n.mt-8 {\n  margin-top: 2rem;\n}\r\n.mb-12 {\n  margin-bottom: 3rem;\n}\r\n.mt-10 {\n  margin-top: 2.5rem;\n}\r\n.ml-2 {\n  margin-left: 0.5rem;\n}\r\n.-mb-\\[11px\\] {\n  margin-bottom: -11px;\n}\r\n.-mr-1 {\n  margin-right: -0.25rem;\n}\r\n.mt-14 {\n  margin-top: 3.5rem;\n}\r\n.mb-1 {\n  margin-bottom: 0.25rem;\n}\r\n.mr-\\[64px\\] {\n  margin-right: 64px;\n}\r\n.-mb-\\[13px\\] {\n  margin-bottom: -13px;\n}\r\n.-mr-\\[3px\\] {\n  margin-right: -3px;\n}\r\n.block {\n  display: block;\n}\r\n.inline-block {\n  display: inline-block;\n}\r\n.flex {\n  display: flex;\n}\r\n.grid {\n  display: grid;\n}\r\n.hidden {\n  display: none;\n}\r\n.h-32 {\n  height: 8rem;\n}\r\n.h-44 {\n  height: 11rem;\n}\r\n.h-96 {\n  height: 24rem;\n}\r\n.h-64 {\n  height: 16rem;\n}\r\n.h-56 {\n  height: 14rem;\n}\r\n.h-48 {\n  height: 12rem;\n}\r\n.h-80 {\n  height: 20rem;\n}\r\n.h-14 {\n  height: 3.5rem;\n}\r\n.h-20 {\n  height: 5rem;\n}\r\n.h-1 {\n  height: 0.25rem;\n}\r\n.h-1\\/2 {\n  height: 50%;\n}\r\n.h-full {\n  height: 100%;\n}\r\n.w-32 {\n  width: 8rem;\n}\r\n.w-full {\n  width: 100%;\n}\r\n.w-10 {\n  width: 2.5rem;\n}\r\n.w-96 {\n  width: 24rem;\n}\r\n.w-64 {\n  width: 16rem;\n}\r\n.w-56 {\n  width: 14rem;\n}\r\n.w-48 {\n  width: 12rem;\n}\r\n.w-36 {\n  width: 9rem;\n}\r\n.w-44 {\n  width: 11rem;\n}\r\n.w-20 {\n  width: 5rem;\n}\r\n.w-6 {\n  width: 1.5rem;\n}\r\n.w-1\\/3 {\n  width: 33.333333%;\n}\r\n.w-5 {\n  width: 1.25rem;\n}\r\n.max-w-xl {\n  max-width: 36rem;\n}\r\n.max-w-none {\n  max-width: none;\n}\r\n.max-w-sm {\n  max-width: 24rem;\n}\r\n.shrink-0 {\n  flex-shrink: 0;\n}\r\n.translate-x-1\\/2 {\n  --tw-translate-x: 50%;\n  transform: var(--tw-transform);\n}\r\n.-translate-x-1\\/2 {\n  --tw-translate-x: -50%;\n  transform: var(--tw-transform);\n}\r\n.-translate-y-1\\/2 {\n  --tw-translate-y: -50%;\n  transform: var(--tw-transform);\n}\r\n.rotate-180 {\n  --tw-rotate: 180deg;\n  transform: var(--tw-transform);\n}\r\n.transform {\n  transform: var(--tw-transform);\n}\r\n@-webkit-keyframes slide-tl {\n\n  0% {\n    transform: translateY(0) translateX(0);\n  }\n\n  to {\n    transform: translateY(-100px) translateX(-100px);\n  }\n\n  from {\n    transform: translateY(100px) translateX(-100px);\n  }\n}\r\n@keyframes slide-tl {\n\n  0% {\n    transform: translateY(0) translateX(0);\n  }\n\n  to {\n    transform: translateY(-100px) translateX(-100px);\n  }\n\n  from {\n    transform: translateY(100px) translateX(-100px);\n  }\n}\r\n.animate-slide-tl {\n  animation: slide-tl 20s cubic-bezier(0.250, 0.460, 0.450, 0.940)  infinite alternate-reverse both;\n}\r\n.animate-tracking-in-expand {\n  -webkit-animation: tracking-in-expand 5s ease-in 2s  alternate both;\n          animation: tracking-in-expand 5s ease-in 2s  alternate both;\n}\r\n@-webkit-keyframes slide-left {\n\n  0% {\n    transform: translateX(0);\n  }\n\n  to {\n    transform: translateX(-100px);\n  }\n\n  from {\n    transform: translateX(100px);\n  }\n}\r\n@keyframes slide-left {\n\n  0% {\n    transform: translateX(0);\n  }\n\n  to {\n    transform: translateX(-100px);\n  }\n\n  from {\n    transform: translateX(100px);\n  }\n}\r\n.animate-slide-left {\n  animation: slide-left 10s ease-in-out  infinite alternate-reverse both;\n}\r\n@-webkit-keyframes slide-tr {\n\n  0% {\n    transform: translateY(0) translateX(0);\n  }\n\n  to {\n    transform: translateY(-100px) translateX(100px);\n  }\n\n  from {\n    transform: translateY(100px) translateX(-100px);\n  }\n}\r\n@keyframes slide-tr {\n\n  0% {\n    transform: translateY(0) translateX(0);\n  }\n\n  to {\n    transform: translateY(-100px) translateX(100px);\n  }\n\n  from {\n    transform: translateY(100px) translateX(-100px);\n  }\n}\r\n.animate-slide-tr {\n  animation: slide-tr 20s cubic-bezier(0.250, 0.460, 0.450, 0.940)  infinite alternate-reverse both;\n}\r\n.cursor-pointer {\n  cursor: pointer;\n}\r\n.select-none {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\r\n.flex-col {\n  flex-direction: column;\n}\r\n.flex-wrap {\n  flex-wrap: wrap;\n}\r\n.place-items-center {\n  place-items: center;\n}\r\n.items-start {\n  align-items: flex-start;\n}\r\n.items-center {\n  align-items: center;\n}\r\n.justify-center {\n  justify-content: center;\n}\r\n.justify-between {\n  justify-content: space-between;\n}\r\n.space-y-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));\n}\r\n.space-x-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.5rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\r\n.space-x-8 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(2rem * var(--tw-space-x-reverse));\n  margin-left: calc(2rem * calc(1 - var(--tw-space-x-reverse)));\n}\r\n.overflow-hidden {\n  overflow: hidden;\n}\r\n.rounded-full {\n  border-radius: 9999px;\n}\r\n.rounded-7xl {\n  border-radius: 1.5rem;\n}\r\n.rounded-md {\n  border-radius: 0.375rem;\n}\r\n.rounded-lg {\n  border-radius: 0.5rem;\n}\r\n.rounded-b-10xl {\n  border-bottom-right-radius: 5rem;\n  border-bottom-left-radius: 5rem;\n}\r\n.border-4 {\n  border-width: 4px;\n}\r\n.border-gray-700 {\n  --tw-border-opacity: 1;\n  border-color: rgb(45 53 71 / var(--tw-border-opacity));\n}\r\n.border-gray-400 {\n  --tw-border-opacity: 1;\n  border-color: rgb(119 126 142 / var(--tw-border-opacity));\n}\r\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\r\n.bg-gray-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(245 246 247 / var(--tw-bg-opacity));\n}\r\n.bg-gray-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(236 237 239 / var(--tw-bg-opacity));\n}\r\n.bg-purple-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(109 50 240 / var(--tw-bg-opacity));\n}\r\n.bg-moon {\n  background-image: url(/_nuxt/assets/images/animals/Weather-Moon.svg);\n}\r\n.bg-elephant {\n  background-image: url(/_nuxt/assets/images/animals/Space_Animal_7.svg);\n}\r\n.bg-tiger {\n  background-image: url(/_nuxt/assets/images/animals/Space_Animal_2.svg);\n}\r\n.bg-animal {\n  background-image: url(/_nuxt/assets/images/animals/Space_Animal_5.svg);\n}\r\n.bg-\\[length\\:400px_150px\\] {\n  background-size: 400px 150px;\n}\r\n.bg-\\[length\\:200px\\] {\n  background-size: 200px;\n}\r\n.bg-left-top {\n  background-position: left top;\n}\r\n.bg-center {\n  background-position: center;\n}\r\n.bg-no-repeat {\n  background-repeat: no-repeat;\n}\r\n.p-2 {\n  padding: 0.5rem;\n}\r\n.py-16 {\n  padding-top: 4rem;\n  padding-bottom: 4rem;\n}\r\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\r\n.py-10 {\n  padding-top: 2.5rem;\n  padding-bottom: 2.5rem;\n}\r\n.px-1 {\n  padding-left: 0.25rem;\n  padding-right: 0.25rem;\n}\r\n.px-6 {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\r\n.pt-10 {\n  padding-top: 2.5rem;\n}\r\n.pb-12 {\n  padding-bottom: 3rem;\n}\r\n.pb-6 {\n  padding-bottom: 1.5rem;\n}\r\n.pt-16 {\n  padding-top: 4rem;\n}\r\n.pb-8 {\n  padding-bottom: 2rem;\n}\r\n.pb-4 {\n  padding-bottom: 1rem;\n}\r\n.text-center {\n  text-align: center;\n}\r\n.text-justify {\n  text-align: justify;\n}\r\n.font-heading {\n  font-family: \"Poppins\", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n}\r\n.text-9xl {\n  font-size: 3rem;\n}\r\n.text-xl {\n  font-size: 1.25rem;\n}\r\n.text-lg {\n  font-size: 1.125rem;\n}\r\n.text-6xl {\n  font-size: 2rem;\n}\r\n.text-3xl {\n  font-size: 1.5rem;\n}\r\n.text-sm {\n  font-size: 0.875rem;\n}\r\n.text-2xl {\n  font-size: 1.375rem;\n}\r\n.font-medium {\n  font-weight: 500;\n}\r\n.font-semibold {\n  font-weight: 600;\n}\r\n.font-bold {\n  font-weight: 700;\n}\r\n.uppercase {\n  text-transform: uppercase;\n}\r\n.lowercase {\n  text-transform: lowercase;\n}\r\n.capitalize {\n  text-transform: capitalize;\n}\r\n.leading-none {\n  line-height: 1;\n}\r\n.leading-snug {\n  line-height: 1.375;\n}\r\n.text-blueGray-700 {\n  --tw-text-opacity: 1;\n  color: rgb(60 98 149 / var(--tw-text-opacity));\n}\r\n.text-darkBlueGray-400 {\n  --tw-text-opacity: 1;\n  color: rgb(90 93 123 / var(--tw-text-opacity));\n}\r\n.text-gray-500 {\n  --tw-text-opacity: 1;\n  color: rgb(60 71 94 / var(--tw-text-opacity));\n}\r\n.text-blue-500 {\n  --tw-text-opacity: 1;\n  color: rgb(50 107 255 / var(--tw-text-opacity));\n}\r\n.text-red-500 {\n  --tw-text-opacity: 1;\n  color: rgb(255 77 53 / var(--tw-text-opacity));\n}\r\n.text-black {\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n}\r\n.text-indigo-400 {\n  --tw-text-opacity: 1;\n  color: rgb(167 139 250 / var(--tw-text-opacity));\n}\r\n.text-\\[\\#00749A\\] {\n  --tw-text-opacity: 1;\n  color: rgb(0 116 154 / var(--tw-text-opacity));\n}\r\n.underline {\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n}\r\n.shadow-2xl {\n  --tw-shadow: 14px 13px 32px 0 rgba(0, 0, 0, 0.03);\n  --tw-shadow-colored: 14px 13px 32px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\r\n.shadow-sm {\n  --tw-shadow: 0 8px 10px rgba(0, 0, 0, 0.08);\n  --tw-shadow-colored: 0 8px 10px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\r\n.shadow-inner {\n  --tw-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);\n  --tw-shadow-colored: inset 0 2px 4px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\r\n.shadow-gray-900 {\n  --tw-shadow-color: #1d232e;\n  --tw-shadow: var(--tw-shadow-colored);\n}\r\n.shadow-gray-300 {\n  --tw-shadow-color: #b1b5bf;\n  --tw-shadow: var(--tw-shadow-colored);\n}\r\n.shadow-blueGray-900 {\n  --tw-shadow-color: #1c2d45;\n  --tw-shadow: var(--tw-shadow-colored);\n}\r\n.backdrop-blur-sm {\n  --tw-backdrop-blur: blur(4px);\n  -webkit-backdrop-filter: var(--tw-backdrop-filter);\n          backdrop-filter: var(--tw-backdrop-filter);\n}\r\n.transition {\n  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\r\n.hover\\:text-blueGray-500:hover {\n  --tw-text-opacity: 1;\n  color: rgb(120 155 201 / var(--tw-text-opacity));\n}\r\n@media (min-width: 640px) {\n\n  .sm\\:w-40 {\n    width: 10rem;\n  }\n\n  .sm\\:w-4\\/5 {\n    width: 80%;\n  }\n\n  .sm\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .sm\\:flex-row {\n    flex-direction: row;\n  }\n\n  .sm\\:space-x-20 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-x-reverse: 0;\n    margin-right: calc(5rem * var(--tw-space-x-reverse));\n    margin-left: calc(5rem * calc(1 - var(--tw-space-x-reverse)));\n  }\n}\r\n@media (min-width: 768px) {\n\n  .md\\:mb-16 {\n    margin-bottom: 4rem;\n  }\n\n  .md\\:mb-0 {\n    margin-bottom: 0px;\n  }\n\n  .md\\:block {\n    display: block;\n  }\n\n  .md\\:w-1\\/2 {\n    width: 50%;\n  }\n\n  .md\\:grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n\n  .md\\:text-10xl {\n    font-size: 4rem;\n  }\n}\r\n@media (min-width: 1024px) {\n\n  .lg\\:right-7 {\n    right: 1.75rem;\n  }\n\n  .lg\\:top-7 {\n    top: 1.75rem;\n  }\n\n  .lg\\:mx-7 {\n    margin-left: 1.75rem;\n    margin-right: 1.75rem;\n  }\n\n  .lg\\:mx-14 {\n    margin-left: 3.5rem;\n    margin-right: 3.5rem;\n  }\n\n  .lg\\:-mx-24 {\n    margin-left: -6rem;\n    margin-right: -6rem;\n  }\n\n  .lg\\:mb-0 {\n    margin-bottom: 0px;\n  }\n\n  .lg\\:mt-2 {\n    margin-top: 0.5rem;\n  }\n\n  .lg\\:mb-24 {\n    margin-bottom: 6rem;\n  }\n\n  .lg\\:mt-20 {\n    margin-top: 5rem;\n  }\n\n  .lg\\:block {\n    display: block;\n  }\n\n  .lg\\:w-1\\/2 {\n    width: 50%;\n  }\n\n  .lg\\:w-1\\/4 {\n    width: 25%;\n  }\n\n  .lg\\:px-10 {\n    padding-left: 2.5rem;\n    padding-right: 2.5rem;\n  }\n}\r\n@media (min-width: 1280px) {\n\n  .xl\\:-left-8 {\n    left: -2rem;\n  }\n\n  .xl\\:-right-8 {\n    right: -2rem;\n  }\n\n  .xl\\:ml-4 {\n    margin-left: 1rem;\n  }\n\n  .xl\\:mt-8 {\n    margin-top: 2rem;\n  }\n\n  .xl\\:mb-16 {\n    margin-bottom: 4rem;\n  }\n\n  .xl\\:mb-0 {\n    margin-bottom: 0px;\n  }\n\n  .xl\\:block {\n    display: block;\n  }\n\n  .xl\\:w-1\\/2 {\n    width: 50%;\n  }\n\n  .xl\\:w-auto {\n    width: auto;\n  }\n\n  .xl\\:grid-cols-4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n\n  .xl\\:flex-nowrap {\n    flex-wrap: nowrap;\n  }\n\n  .xl\\:bg-right {\n    background-position: right;\n  }\n\n  .xl\\:pt-20 {\n    padding-top: 5rem;\n  }\n\n  .xl\\:text-11xl {\n    font-size: 5rem;\n  }\n}\r\n@media (min-width: 1536px) {\n\n  .\\32xl\\:py-20 {\n    padding-top: 5rem;\n    padding-bottom: 5rem;\n  }\n}\r\n";
}


// --------------------
// Request: /@id/__x00__virtual:C:/Users/acer/Desktop/ganpatjangra.me/.nuxt/plugins/server.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/bootstrap.mjs ($id_fef466a9)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/plugins/preload.server.mjs ($id_b9f3c557)
// - /node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs ($id_cbe5172d)
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// - /node_modules/@nuxt/nitro/dist/runtime/app/nitro.client.mjs ($id_7b587af2)
// - /@id/__x00__virtual:C:/Users/acer/Desktop/ganpatjangra.me/.nuxt/components.mjs ($id_46c29c57)
// --------------------
const $id_197ba429 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/plugins/preload.server.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/plugin.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/router.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/@nuxt/nitro/dist/runtime/app/nitro.client.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__virtual:C:/Users/acer/Desktop/ganpatjangra.me/.nuxt/components.mjs");

__vite_ssr_exports__.default = [
  __vite_ssr_import_0__.default,
__vite_ssr_import_1__.default,
  __vite_ssr_import_2__.default,
  __vite_ssr_import_3__.default,
  __vite_ssr_import_4__.default,
  __vite_ssr_import_5__.default
];
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/plugins/preload.server.mjs
// Parents: 
// - /@id/__x00__virtual:C:/Users/acer/Desktop/ganpatjangra.me/.nuxt/plugins/server.mjs ($id_197ba429)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_b9f3c557 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.mixin({
    beforeCreate() {
      const { _registeredComponents } = this.$nuxt.ssrContext;
      const { __moduleIdentifier } = this.$options;
      _registeredComponents.add(__moduleIdentifier);
    }
  });
});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs
// Parents: 
// - /@id/__x00__virtual:C:/Users/acer/Desktop/ganpatjangra.me/.nuxt/plugins/server.mjs ($id_197ba429)
// Dependencies: 
// - /node_modules/@vueuse/head/dist/index.mjs ($id_c032264e)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_cbe5172d = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vueuse/head/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_2__.defineNuxtPlugin((nuxtApp) => {
  const head = __vite_ssr_import_0__.createHead();
  nuxtApp.vueApp.use(head);
  nuxtApp._useMeta = (meta) => {
    const headObj = __vite_ssr_import_1__.ref(meta);
    head.addHeadObjs(headObj);
    if (true) {
      return;
    }
    __vite_ssr_import_1__.watchEffect(() => {
      head.updateDOM();
    });
    const vm = __vite_ssr_import_1__.getCurrentInstance();
    if (!vm) {
      return;
    }
    __vite_ssr_import_1__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  };
  if (true) {
    nuxtApp.ssrContext.renderMeta = () => __vite_ssr_import_0__.renderHeadToString(head);
  }
});
;
}


// --------------------
// Request: /node_modules/@vueuse/head/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs ($id_cbe5172d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_c032264e = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
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

// src/index.ts
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


// src/constants.ts
var PROVIDE_KEY = `usehead`;
var HEAD_COUNT_KEY = `head:count`;
var HEAD_ATTRS_KEY = `data-head-attrs`;
var SELF_CLOSING_TAGS = ["meta", "link", "base"];

// src/create-element.ts
var createElement = (tag, attrs, document) => {
  const el = document.createElement(tag);
  for (const key of Object.keys(attrs)) {
    let value = attrs[key];
    if (key === "key" || value === false) {
      continue;
    }
    if (key === "children") {
      el.textContent = value;
    } else {
      el.setAttribute(key, value);
    }
  }
  return el;
};

// src/stringify-attrs.ts
var htmlEscape = (str) => str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var stringifyAttrs = (attributes) => {
  const handledAttributes = [];
  for (let [key, value] of Object.entries(attributes)) {
    if (key === "children" || key === "key") {
      continue;
    }
    if (value === false || value == null) {
      continue;
    }
    let attribute = htmlEscape(key);
    if (value !== true) {
      attribute += `="${htmlEscape(String(value))}"`;
    }
    handledAttributes.push(attribute);
  }
  return handledAttributes.length > 0 ? " " + handledAttributes.join(" ") : "";
};

// src/utils.ts
function isEqualNode(oldTag, newTag) {
  if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
    const nonce = newTag.getAttribute("nonce");
    if (nonce && !oldTag.getAttribute("nonce")) {
      const cloneTag = newTag.cloneNode(true);
      cloneTag.setAttribute("nonce", "");
      cloneTag.nonce = nonce;
      return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
    }
  }
  return oldTag.isEqualNode(newTag);
}

// src/index.ts
var getTagKey = (props) => {
  const names = ["key", "id", "name", "property"];
  for (const n of names) {
    const value = typeof props.getAttribute === "function" ? props.getAttribute(n) : props[n];
    if (value !== void 0) {
      return { name: n, value };
    }
  }
};
var injectHead = () => {
  const head = __vite_ssr_import_0__.inject(PROVIDE_KEY);
  if (!head) {
    throw new Error(`You may forget to apply app.use(head)`);
  }
  return head;
};
var acceptFields = [
  "title",
  "meta",
  "link",
  "base",
  "style",
  "script",
  "htmlAttrs",
  "bodyAttrs"
];
var headObjToTags = (obj) => {
  const tags = [];
  for (const key of Object.keys(obj)) {
    if (obj[key] == null)
      continue;
    if (key === "title") {
      tags.push({ tag: key, props: { children: obj[key] } });
    } else if (key === "base") {
      tags.push({ tag: key, props: __spreadValues({ key: "default" }, obj[key]) });
    } else if (acceptFields.includes(key)) {
      const value = obj[key];
      if (Array.isArray(value)) {
        value.forEach((item) => {
          tags.push({ tag: key, props: item });
        });
      } else if (value) {
        tags.push({ tag: key, props: value });
      }
    }
  }
  return tags;
};
var setAttrs = (el, attrs) => {
  const existingAttrs = el.getAttribute(HEAD_ATTRS_KEY);
  if (existingAttrs) {
    for (const key of existingAttrs.split(",")) {
      if (!(key in attrs)) {
        el.removeAttribute(key);
      }
    }
  }
  const keys = [];
  for (const key in attrs) {
    const value = attrs[key];
    if (value == null)
      continue;
    if (value === false) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
    keys.push(key);
  }
  if (keys.length) {
    el.setAttribute(HEAD_ATTRS_KEY, keys.join(","));
  } else {
    el.removeAttribute(HEAD_ATTRS_KEY);
  }
};
var updateElements = (document = window.document, type, tags) => {
  var _a;
  const head = document.head;
  let headCountEl = head.querySelector(`meta[name="${HEAD_COUNT_KEY}"]`);
  const headCount = headCountEl ? Number(headCountEl.getAttribute("content")) : 0;
  const oldElements = [];
  if (headCountEl) {
    for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = j.previousElementSibling) {
      if (((_a = j == null ? void 0 : j.tagName) == null ? void 0 : _a.toLowerCase()) === type) {
        oldElements.push(j);
      }
    }
  } else {
    headCountEl = document.createElement("meta");
    headCountEl.setAttribute("name", HEAD_COUNT_KEY);
    headCountEl.setAttribute("content", "0");
    head.append(headCountEl);
  }
  let newElements = tags.map((tag) => createElement(tag.tag, tag.props, document));
  newElements = newElements.filter((newEl) => {
    for (let i = 0; i < oldElements.length; i++) {
      const oldEl = oldElements[i];
      if (isEqualNode(oldEl, newEl)) {
        oldElements.splice(i, 1);
        return false;
      }
    }
    return true;
  });
  oldElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  newElements.forEach((t) => {
    var _a2;
    const key = getTagKey(t);
    if (key) {
      const uncontrolled = head.querySelector(`${t.tagName.toLowerCase()}[${key.name}="${key.value}"]`);
      if (uncontrolled) {
        (_a2 = uncontrolled.parentNode) == null ? void 0 : _a2.removeChild(uncontrolled);
      }
    }
    head.insertBefore(t, headCountEl);
  });
  headCountEl.setAttribute("content", "" + (headCount - oldElements.length + newElements.length));
};
var createHead = () => {
  let allHeadObjs = [];
  const head = {
    install(app) {
      app.config.globalProperties.$head = head;
      app.provide(PROVIDE_KEY, head);
    },
    get headTags() {
      const deduped = [];
      allHeadObjs.forEach((objs) => {
        const tags = headObjToTags(objs.value);
        tags.forEach((tag) => {
          if (tag.tag === "meta" || tag.tag === "base" || tag.tag === "script") {
            const key = getTagKey(tag.props);
            if (key) {
              let index = -1;
              for (let i = 0; i < deduped.length; i++) {
                const prev = deduped[i];
                const prevValue = prev.props[key.name];
                const nextValue = tag.props[key.name];
                if (prev.tag === tag.tag && prevValue === nextValue) {
                  index = i;
                  break;
                }
              }
              if (index !== -1) {
                deduped.splice(index, 1);
              }
            }
          }
          deduped.push(tag);
        });
      });
      return deduped;
    },
    addHeadObjs(objs) {
      allHeadObjs.push(objs);
    },
    removeHeadObjs(objs) {
      allHeadObjs = allHeadObjs.filter((_objs) => _objs !== objs);
    },
    updateDOM(document = window.document) {
      let title;
      let htmlAttrs = {};
      let bodyAttrs = {};
      const actualTags = {};
      for (const tag of head.headTags) {
        if (tag.tag === "title") {
          title = tag.props.children;
          continue;
        }
        if (tag.tag === "htmlAttrs") {
          Object.assign(htmlAttrs, tag.props);
          continue;
        }
        if (tag.tag === "bodyAttrs") {
          Object.assign(bodyAttrs, tag.props);
          continue;
        }
        actualTags[tag.tag] = actualTags[tag.tag] || [];
        actualTags[tag.tag].push(tag);
      }
      if (title !== void 0) {
        document.title = title;
      }
      setAttrs(document.documentElement, htmlAttrs);
      setAttrs(document.body, bodyAttrs);
      for (const name of Object.keys(actualTags)) {
        updateElements(document, name, actualTags[name]);
      }
    }
  };
  return head;
};
var IS_BROWSER = "undefined" !== "undefined";
var useHead = (obj) => {
  const headObj = __vite_ssr_import_0__.ref(obj);
  const head = injectHead();
  head.addHeadObjs(headObj);
  if (IS_BROWSER) {
    __vite_ssr_import_0__.watchEffect(() => {
      head.updateDOM();
    });
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  }
};
var tagToString = (tag) => {
  let attrs = stringifyAttrs(tag.props);
  if (SELF_CLOSING_TAGS.includes(tag.tag)) {
    return `<${tag.tag}${attrs}>`;
  }
  return `<${tag.tag}${attrs}>${tag.props.children || ""}</${tag.tag}>`;
};
var renderHeadToString = (head) => {
  const tags = [];
  let titleTag = "";
  let htmlAttrs = {};
  let bodyAttrs = {};
  for (const tag of head.headTags) {
    if (tag.tag === "title") {
      titleTag = tagToString(tag);
    } else if (tag.tag === "htmlAttrs") {
      Object.assign(htmlAttrs, tag.props);
    } else if (tag.tag === "bodyAttrs") {
      Object.assign(bodyAttrs, tag.props);
    } else {
      tags.push(tagToString(tag));
    }
  }
  tags.push(`<meta name="${HEAD_COUNT_KEY}" content="${tags.length}">`);
  return {
    get headTags() {
      return titleTag + tags.join("");
    },
    get htmlAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, htmlAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(htmlAttrs).join(",")
      }));
    },
    get bodyAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, bodyAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(bodyAttrs).join(",")
      }));
    }
  };
};
var vnodesToHeadObj = (nodes) => {
  const obj = {
    title: void 0,
    htmlAttrs: void 0,
    bodyAttrs: void 0,
    base: void 0,
    meta: [],
    link: [],
    style: [],
    script: []
  };
  for (const node of nodes) {
    const type = node.type === "html" ? "htmlAttrs" : node.type === "body" ? "bodyAttrs" : node.type;
    if (typeof type !== "string" || !(type in obj))
      continue;
    const props = __spreadProps(__spreadValues({}, node.props), {
      children: Array.isArray(node.children) ? node.children[0].children : node.children
    });
    if (Array.isArray(obj[type])) {
      ;
      obj[type].push(props);
    } else if (type === "title") {
      obj.title = props.children;
    } else {
      ;
      obj[type] = props;
    }
  }
  return obj;
};
var Head = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  name: "Head",
  setup(_, { slots }) {
    const head = injectHead();
    let obj;
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      if (obj) {
        head.removeHeadObjs(obj);
        head.updateDOM();
      }
    });
    return () => {
      __vite_ssr_import_0__.watchEffect(() => {
        if (!slots.default)
          return;
        if (obj) {
          head.removeHeadObjs(obj);
        }
        obj = __vite_ssr_import_0__.ref(vnodesToHeadObj(slots.default()));
        head.addHeadObjs(obj);
        if (IS_BROWSER) {
          head.updateDOM();
        }
      });
      return null;
    };
  }
});

Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
Object.defineProperty(__vite_ssr_exports__, "createHead", { enumerable: true, configurable: true, get(){ return createHead }});
Object.defineProperty(__vite_ssr_exports__, "injectHead", { enumerable: true, configurable: true, get(){ return injectHead }});
Object.defineProperty(__vite_ssr_exports__, "renderHeadToString", { enumerable: true, configurable: true, get(){ return renderHeadToString }});
Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return useHead }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/meta/runtime/plugin.mjs
// Parents: 
// - /@id/__x00__virtual:C:/Users/acer/Desktop/ganpatjangra.me/.nuxt/plugins/server.mjs ($id_197ba429)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/meta/runtime/components.mjs ($id_94744df3)
// - /node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_ca9295be)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /@id/__x00__virtual:C:/Users/acer/Desktop/ganpatjangra.me/.nuxt/meta.config.mjs ($id_36430d24)
// --------------------
const $id_9fd5f35e = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/components.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/composables.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__virtual:C:/Users/acer/Desktop/ganpatjangra.me/.nuxt/meta.config.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_3__.defineNuxtPlugin((nuxtApp) => {
  __vite_ssr_import_2__.useMeta(__vite_ssr_import_4__.default.globalMeta);
  nuxtApp.vueApp.mixin({
    [__vite_ssr_import_4__.default.mixinKey]() {
      const instance = __vite_ssr_import_0__.getCurrentInstance();
      const options = instance?.type || instance?.proxy?.$options;
      if (!options || !("head" in options)) {
        return;
      }
      __vite_ssr_import_2__.useMeta(options.head);
    }
  });
  for (const name in __vite_ssr_import_1__) {
    nuxtApp.vueApp.component(name, __vite_ssr_import_1__[name]);
  }
});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/meta/runtime/components.mjs
// Parents: 
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_ca9295be)
// --------------------
const $id_94744df3 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/meta/runtime/composables.mjs");

const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  __vite_ssr_import_1__.useMeta(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => renderChild ? ctx.slots.default?.() : null;
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: String,
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
const Script = __vite_ssr_import_0__.defineComponent({
  name: "Script",
  props: {
    ...globalProps,
    async: Boolean,
    crossorigin: {
      type: [Boolean, String],
      default: void 0
    },
    defer: Boolean,
    integrity: String,
    nomodule: Boolean,
    nonce: String,
    referrerpolicy: String,
    src: String,
    type: String,
    charset: String,
    language: String
  },
  setup: setupForUseMeta((script) => ({
    script: [script]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Script", { enumerable: true, configurable: true, get(){ return Script }});
const Link = __vite_ssr_import_0__.defineComponent({
  name: "Link",
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    methods: String,
    target: String
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Link", { enumerable: true, configurable: true, get(){ return Link }});
const Base = __vite_ssr_import_0__.defineComponent({
  name: "Base",
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base) => ({
    base
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Base", { enumerable: true, configurable: true, get(){ return Base }});
const Title = __vite_ssr_import_0__.defineComponent({
  name: "Title",
  setup: setupForUseMeta((_, { slots }) => {
    const title = slots.default()?.[0]?.children || null;
    if (true && title && typeof title !== "string") {
      console.error("<Title> can only take a string in its default slot.");
    }
    return {
      title
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Title", { enumerable: true, configurable: true, get(){ return Title }});
const Meta = __vite_ssr_import_0__.defineComponent({
  name: "Meta",
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    key: String,
    name: String
  },
  setup: setupForUseMeta((meta) => ({
    meta: [meta]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Meta", { enumerable: true, configurable: true, get(){ return Meta }});
const Style = __vite_ssr_import_0__.defineComponent({
  name: "Style",
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    scoped: {
      type: Boolean,
      default: void 0
    }
  },
  setup: setupForUseMeta((props, { slots }) => {
    const style = { ...props };
    const textContent = slots.default?.()?.[0]?.children;
    if (textContent) {
      if (true && typeof textContent !== "string") {
        console.error("<Style> can only take a string in its default slot.");
      }
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Style", { enumerable: true, configurable: true, get(){ return Style }});
const Head = __vite_ssr_import_0__.defineComponent({
  name: "Head",
  setup: (_props, ctx) => ctx.slots.default
});
Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
const Html = __vite_ssr_import_0__.defineComponent({
  name: "Html",
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Html", { enumerable: true, configurable: true, get(){ return Html }});
const Body = __vite_ssr_import_0__.defineComponent({
  name: "Body",
  props: globalProps,
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Body", { enumerable: true, configurable: true, get(){ return Body }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/meta/runtime/composables.mjs
// Parents: 
// - /node_modules/nuxt3/dist/meta/runtime/components.mjs ($id_94744df3)
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// Dependencies: 
// - /node_modules/@vue/shared/dist/shared.cjs.js ($id_852b06a2)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_ca9295be = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vue/shared/dist/shared.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

function useMeta(meta) {
  const resolvedMeta = __vite_ssr_import_0__.isFunction(meta) ? __vite_ssr_import_1__.computed(meta) : meta;
  __vite_ssr_import_2__.useNuxtApp()._useMeta(resolvedMeta);
}
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return useMeta }});
;
}


// --------------------
// Request: /node_modules/@vue/shared/dist/shared.cjs.js
// Parents: 
// - /node_modules/nuxt3/dist/meta/runtime/composables.mjs ($id_ca9295be)
// Dependencies: 

// --------------------
const $id_852b06a2 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///C:/Users/acer/Desktop/ganpatjangra.me/node_modules/@vue/shared/dist/shared.cjs.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "C:/Users/acer/Desktop/ganpatjangra.me/node_modules/@vue/shared/dist/shared.cjs.js".') })


// --------------------
// Request: /@id/__x00__virtual:C:/Users/acer/Desktop/ganpatjangra.me/.nuxt/meta.config.mjs
// Parents: 
// - /node_modules/nuxt3/dist/meta/runtime/plugin.mjs ($id_9fd5f35e)
// Dependencies: 

// --------------------
const $id_36430d24 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = {"globalMeta":{"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"}],"link":[],"style":[],"script":[]},"mixinKey":"created"};
}


// --------------------
// Request: /node_modules/nuxt3/dist/pages/runtime/router.mjs
// Parents: 
// - /@id/__x00__virtual:C:/Users/acer/Desktop/ganpatjangra.me/.nuxt/plugins/server.mjs ($id_197ba429)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/nuxt3/dist/pages/runtime/nested-page.vue ($id_c268603a)
// - /node_modules/nuxt3/dist/pages/runtime/page.vue ($id_10628d40)
// - /node_modules/nuxt3/dist/pages/runtime/layout.mjs ($id_9b68c93f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /@id/__x00__virtual:C:/Users/acer/Desktop/ganpatjangra.me/.nuxt/routes.mjs ($id_313442dd)
// --------------------
const $id_a4d6cb5b = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/nested-page.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/page.vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/layout.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/__x00__virtual:C:/Users/acer/Desktop/ganpatjangra.me/.nuxt/routes.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_5__.defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("NuxtNestedPage", __vite_ssr_import_2__.default);
  nuxtApp.vueApp.component("NuxtPage", __vite_ssr_import_3__.default);
  nuxtApp.vueApp.component("NuxtLayout", __vite_ssr_import_4__.default);
  nuxtApp.vueApp.component("NuxtLink", __vite_ssr_import_1__.RouterLink);
  nuxtApp.vueApp.component("NuxtChild", __vite_ssr_import_2__.default);
  const routerHistory = false ? __vite_ssr_import_1__.createWebHistory() : __vite_ssr_import_1__.createMemoryHistory();
  const router = __vite_ssr_import_1__.createRouter({
    history: routerHistory,
    routes: __vite_ssr_import_6__.default
  });
  nuxtApp.vueApp.use(router);
  const previousRoute = __vite_ssr_import_0__.shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const route = {};
  for (const key in router.currentRoute.value) {
    route[key] = __vite_ssr_import_0__.computed(() => router.currentRoute.value[key]);
  }
  nuxtApp._route = __vite_ssr_import_0__.reactive(route);
  nuxtApp.hook("app:created", async () => {
    if (true) {
      router.push(nuxtApp.ssrContext.url);
    }
    await router.isReady();
    const is404 = router.currentRoute.value.matched.length === 0;
    if (true && is404) {
      const error = new Error(`Page not found: ${nuxtApp.ssrContext.url}`);
      error.statusCode = 404;
      nuxtApp.ssrContext.error = error;
    }
  });
  return { provide: { router } };
});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/pages/runtime/nested-page.vue
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_c268603a = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {



const _sfc_main = {
  name: 'NuxtNestedPage'
}

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_RouterView = __vite_ssr_import_0__.resolveComponent("RouterView")

  _push(__vite_ssr_import_1__.ssrRenderComponent(_component_RouterView, _attrs, {
    default: __vite_ssr_import_0__.withCtx(({ Component }, _push, _parent, _scopeId) => {
      if (_push) {
        __vite_ssr_import_1__.ssrRenderVNode(_push, __vite_ssr_import_0__.createVNode(__vite_ssr_import_0__.resolveDynamicComponent(Component), {
          key: _ctx.$route.path
        }, null), _parent, _scopeId)
      } else {
        return [
          (__vite_ssr_import_0__.openBlock(), __vite_ssr_import_0__.createBlock(__vite_ssr_import_0__.resolveDynamicComponent(Component), {
            key: _ctx.$route.path
          }))
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt3/dist/pages/runtime/nested-page.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/acer/Desktop/ganpatjangra.me/node_modules/nuxt3/dist/pages/runtime/nested-page.vue"]]);
}


// --------------------
// Request: /node_modules/vue/server-renderer/index.js
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/nested-page.vue ($id_c268603a)
// - /node_modules/nuxt3/dist/pages/runtime/page.vue ($id_10628d40)
// - /components/skills.vue ($id_43fa255d)
// - /components/project.vue ($id_9aa3dd9e)
// - /components/home.vue ($id_4ae345a3)
// - /pages/index.vue ($id_cca58e97)
// - /node_modules/nuxt3/dist/app/components/nuxt-root.vue ($id_f8564e04)
// - /node_modules/nuxt3/dist/pages/runtime/app.vue ($id_0851ff57)
// Dependencies: 

// --------------------
const $id_b215fa1c = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///C:/Users/acer/Desktop/ganpatjangra.me/node_modules/vue/server-renderer/index.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "C:/Users/acer/Desktop/ganpatjangra.me/node_modules/vue/server-renderer/index.js".') })


// --------------------
// Request: /@id/plugin-vue:export-helper
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/nested-page.vue ($id_c268603a)
// - /node_modules/nuxt3/dist/pages/runtime/page.vue ($id_10628d40)
// - /components/skills.vue ($id_43fa255d)
// - /components/project.vue ($id_9aa3dd9e)
// - /components/home.vue ($id_4ae345a3)
// - /pages/index.vue ($id_cca58e97)
// - /node_modules/nuxt3/dist/app/components/nuxt-root.vue ($id_f8564e04)
// - /node_modules/nuxt3/dist/pages/runtime/app.vue ($id_0851ff57)
// Dependencies: 

// --------------------
const $id_bbb863c1 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

__vite_ssr_exports__.default = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
}
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/pages/runtime/page.vue
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/pages/runtime/layout.mjs ($id_9b68c93f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_10628d40 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {



const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/layout.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");


const _sfc_main = {
  name: 'NuxtPage',
  components: { NuxtLayout: __vite_ssr_import_1__.default },
  props: {
    layout: {
      type: String,
      default: null
    }
  },
  setup () {
    // Disable HMR reactivity in production
    const updatedComponentLayout = true ? __vite_ssr_import_0__.ref(null) : null

    const nuxtApp = __vite_ssr_import_2__.useNuxtApp()

    function onSuspensePending (Component) {
      if (true) {
        updatedComponentLayout.value = Component.type.layout || null
      }
      return nuxtApp.callHook('page:start', Component)
    }

    function onSuspenseResolved (Component) {
      return nuxtApp.callHook('page:finish', Component)
    }

    return {
      updatedComponentLayout,
      onSuspensePending,
      onSuspenseResolved
    }
  }
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_RouterView = __vite_ssr_import_3__.resolveComponent("RouterView")
  const _component_NuxtLayout = __vite_ssr_import_3__.resolveComponent("NuxtLayout")

  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_RouterView, _attrs, {
    default: __vite_ssr_import_3__.withCtx(({ Component }, _push, _parent, _scopeId) => {
      if (_push) {
        if (Component) {
          _push(__vite_ssr_import_4__.ssrRenderComponent(_component_NuxtLayout, {
            name: $props.layout || $setup.updatedComponentLayout || Component.type.layout
          }, {
            default: __vite_ssr_import_3__.withCtx((_, _push, _parent, _scopeId) => {
              if (_push) {
                _push(`<!-- <keep-alive> -->`)
                __vite_ssr_import_4__.ssrRenderSuspense(_push, {
                  default: () => {
                    __vite_ssr_import_4__.ssrRenderVNode(_push, __vite_ssr_import_3__.createVNode(__vite_ssr_import_3__.resolveDynamicComponent(Component), {
                      key: _ctx.$route.path
                    }, null), _parent, _scopeId)
                  },
                  _: 2 /* DYNAMIC */
                })
                _push(`<!-- <keep-alive -->`)
              } else {
                return [
                  __vite_ssr_import_3__.createVNode(__vite_ssr_import_3__.Transition, {
                    name: "page",
                    mode: "out-in"
                  }, {
                    default: __vite_ssr_import_3__.withCtx(() => [
                      (__vite_ssr_import_3__.openBlock(), __vite_ssr_import_3__.createBlock(__vite_ssr_import_3__.Suspense, {
                        onPending: () => $setup.onSuspensePending(Component),
                        onResolve: () => $setup.onSuspenseResolved(Component)
                      }, {
                        default: __vite_ssr_import_3__.withCtx(() => [
                          (__vite_ssr_import_3__.openBlock(), __vite_ssr_import_3__.createBlock(__vite_ssr_import_3__.resolveDynamicComponent(Component), {
                            key: _ctx.$route.path
                          }))
                        ]),
                        _: 2 /* DYNAMIC */
                      }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onPending", "onResolve"]))
                    ]),
                    _: 2 /* DYNAMIC */
                  }, 1024 /* DYNAMIC_SLOTS */)
                ]
              }
            }),
            _: 2 /* DYNAMIC */
          }, _parent, _scopeId))
        } else {
          _push(`<!---->`)
        }
        _push(`<!-- TODO: Handle 404 placeholder -->`)
      } else {
        return [
          Component
            ? (__vite_ssr_import_3__.openBlock(), __vite_ssr_import_3__.createBlock(_component_NuxtLayout, {
                key: 0,
                name: $props.layout || $setup.updatedComponentLayout || Component.type.layout
              }, {
                default: __vite_ssr_import_3__.withCtx(() => [
                  __vite_ssr_import_3__.createVNode(__vite_ssr_import_3__.Transition, {
                    name: "page",
                    mode: "out-in"
                  }, {
                    default: __vite_ssr_import_3__.withCtx(() => [
                      (__vite_ssr_import_3__.openBlock(), __vite_ssr_import_3__.createBlock(__vite_ssr_import_3__.Suspense, {
                        onPending: () => $setup.onSuspensePending(Component),
                        onResolve: () => $setup.onSuspenseResolved(Component)
                      }, {
                        default: __vite_ssr_import_3__.withCtx(() => [
                          (__vite_ssr_import_3__.openBlock(), __vite_ssr_import_3__.createBlock(__vite_ssr_import_3__.resolveDynamicComponent(Component), {
                            key: _ctx.$route.path
                          }))
                        ]),
                        _: 2 /* DYNAMIC */
                      }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onPending", "onResolve"]))
                    ]),
                    _: 2 /* DYNAMIC */
                  }, 1024 /* DYNAMIC_SLOTS */)
                ]),
                _: 2 /* DYNAMIC */
              }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["name"]))
            : __vite_ssr_import_3__.createCommentVNode("v-if", true),
          __vite_ssr_import_3__.createCommentVNode(" TODO: Handle 404 placeholder ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt3/dist/pages/runtime/page.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/acer/Desktop/ganpatjangra.me/node_modules/nuxt3/dist/pages/runtime/page.vue"]]);
}


// --------------------
// Request: /node_modules/nuxt3/dist/pages/runtime/layout.mjs
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/page.vue ($id_10628d40)
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/__x00__virtual:C:/Users/acer/Desktop/ganpatjangra.me/.nuxt/layouts.mjs ($id_45f47c42)
// --------------------
const $id_9b68c93f = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/__x00__virtual:C:/Users/acer/Desktop/ganpatjangra.me/.nuxt/layouts.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  props: {
    name: {
      type: [String, Boolean],
      default: "default"
    }
  },
  setup(props, context) {
    return () => {
      const layout = props.name;
      if (!__vite_ssr_import_1__.default[layout]) {
        if (true && layout && layout !== "default") {
          console.warn(`Invalid layout \`${layout}\` selected.`);
        }
        return context.slots.default();
      }
      return __vite_ssr_import_0__.h(__vite_ssr_import_1__.default[layout], props, context.slots);
    };
  }
});
;
}


// --------------------
// Request: /@id/__x00__virtual:C:/Users/acer/Desktop/ganpatjangra.me/.nuxt/layouts.mjs
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/layout.mjs ($id_9b68c93f)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_45f47c42 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

__vite_ssr_exports__.default = {};
}


// --------------------
// Request: /@id/__x00__virtual:C:/Users/acer/Desktop/ganpatjangra.me/.nuxt/routes.mjs
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// Dependencies: 
// - /pages/index.vue ($id_cca58e97)
// --------------------
const $id_313442dd = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = [
  {
    "name": "index",
    "path": "/",
    "file": "C:/Users/acer/Desktop/ganpatjangra.me/pages/index.vue",
    "children": [],
    "component": () => __vite_ssr_dynamic_import__('/pages/index.vue')
  }
];
}


// --------------------
// Request: /pages/index.vue
// Parents: 
// - /@id/__x00__virtual:C:/Users/acer/Desktop/ganpatjangra.me/.nuxt/routes.mjs ($id_313442dd)
// Dependencies: 
// - /components/skills.vue ($id_43fa255d)
// - /components/project.vue ($id_9aa3dd9e)
// - /components/home.vue ($id_4ae345a3)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_cca58e97 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/skills.vue");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/project.vue");
const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/home.vue");

const _sfc_main = {}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_skills = __vite_ssr_import_0__.default
  const _component_project = __vite_ssr_import_1__.default
  const _component_home = __vite_ssr_import_2__.default

  _push(`<div${__vite_ssr_import_4__.ssrRenderAttrs(_attrs)}>`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_skills, null, null, _parent))
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_project, null, null, _parent))
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_home, null, null, _parent))
  _push(`</div>`)
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/acer/Desktop/ganpatjangra.me/pages/index.vue"]]);
}


// --------------------
// Request: /components/skills.vue
// Parents: 
// - /pages/index.vue ($id_cca58e97)
// - /@id/__x00__virtual:C:/Users/acer/Desktop/ganpatjangra.me/.nuxt/components.mjs ($id_46c29c57)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/swiper/vue/swiper-vue.js ($id_72e3deca)
// - /node_modules/swiper/swiper.min.css ($id_9d54fdba)
// - /node_modules/swiper/modules/pagination/pagination.min.css ($id_d3ef010f)
// - /node_modules/swiper/modules/navigation/navigation.min.css ($id_9b8672f2)
// - /node_modules/swiper/swiper.esm.js ($id_d1eb9a9e)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /assets/images/icons8/icons8-f-cute.svg ($id_6417dc97)
// - /assets/images/mycollection/html-5.svg ($id_9d898b84)
// - /assets/images/mycollection/css3.svg ($id_687c4c7a)
// - /assets/images/mycollection/tailwindcss.svg ($id_efe33b41)
// - /assets/images/mycollection/javascript.svg ($id_188644a4)
// - /assets/images/mycollection/vue.svg ($id_abef9de1)
// - /assets/images/mycollection/nuxt.svg ($id_b2bb126b)
// - /assets/images/icons8/icons8-b-cute.svg ($id_5321ef9e)
// - /assets/images/mycollection/expressjs-icon.svg ($id_25e013d0)
// - /assets/images/mycollection/mongodb-icon.svg ($id_6efcfe6b)
// - /assets/images/mycollection/mariadb-icon.svg ($id_da57e3e6)
// - /assets/images/icons8/icons8-o-cute.svg ($id_b6503303)
// - /assets/images/mycollection/wordpress-icon.svg ($id_9d8e64d7)
// - /assets/images/mycollection/canva-icon.svg ($id_bc6cd90f)
// - /assets/images/mycollection/vscode.svg ($id_1b35e04e)
// - /assets/images/mycollection/git.svg ($id_8f65d5a4)
// - /assets/images/mycollection/digitalocean-icon.svg ($id_a2d143a7)
// - /components/skills.vue?vue&type=style&index=0&lang.css ($id_cfe411c4)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_43fa255d = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


// Import Swiper Vue.js components
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/swiper/vue/swiper-vue.js");


// Import Swiper styles
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/swiper/swiper.min.css");


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/swiper/modules/pagination/pagination.min.css");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/swiper/modules/navigation/navigation.min.css");


// import required modules
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/swiper/swiper.esm.js");


const _sfc_main = {
  head: {
    title: "skills",
    meta: [
      {
        hid: "description",
        name: "MEVN developer | website developer",
        content: "I know front end and some basic of backend. html, css, javascript, vscode, vue js, nuxt js, many more.",
      },
    ],
  },

  components: {
    Swiper: __vite_ssr_import_1__.Swiper,
    SwiperSlide: __vite_ssr_import_1__.SwiperSlide,
  },
  setup() {
    return {
      modules: [__vite_ssr_import_5__.Pagination, __vite_ssr_import_5__.Navigation, __vite_ssr_import_5__.Keyboard],
    };
  },
};

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/assets/images/icons8/icons8-f-cute.svg");

const __vite_ssr_import_9__ = await __vite_ssr_import__("/assets/images/mycollection/html-5.svg");

const __vite_ssr_import_10__ = await __vite_ssr_import__("/assets/images/mycollection/css3.svg");

const __vite_ssr_import_11__ = await __vite_ssr_import__("/assets/images/mycollection/tailwindcss.svg");

const __vite_ssr_import_12__ = await __vite_ssr_import__("/assets/images/mycollection/javascript.svg");

const __vite_ssr_import_13__ = await __vite_ssr_import__("/assets/images/mycollection/vue.svg");

const __vite_ssr_import_14__ = await __vite_ssr_import__("/assets/images/mycollection/nuxt.svg");

const __vite_ssr_import_15__ = await __vite_ssr_import__("/assets/images/icons8/icons8-b-cute.svg");

const __vite_ssr_import_16__ = await __vite_ssr_import__("/assets/images/mycollection/expressjs-icon.svg");

const __vite_ssr_import_17__ = await __vite_ssr_import__("/assets/images/mycollection/mongodb-icon.svg");

const __vite_ssr_import_18__ = await __vite_ssr_import__("/assets/images/mycollection/mariadb-icon.svg");

const __vite_ssr_import_19__ = await __vite_ssr_import__("/assets/images/icons8/icons8-o-cute.svg");

const __vite_ssr_import_20__ = await __vite_ssr_import__("/assets/images/mycollection/wordpress-icon.svg");

const __vite_ssr_import_21__ = await __vite_ssr_import__("/assets/images/mycollection/canva-icon.svg");

const __vite_ssr_import_22__ = await __vite_ssr_import__("/assets/images/mycollection/vscode.svg");

const __vite_ssr_import_23__ = await __vite_ssr_import__("/assets/images/mycollection/git.svg");

const __vite_ssr_import_24__ = await __vite_ssr_import__("/assets/images/mycollection/digitalocean-icon.svg");



function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = __vite_ssr_import_6__.resolveComponent("swiper")
  const _component_swiper_slide = __vite_ssr_import_6__.resolveComponent("swiper-slide")

  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_swiper, __vite_ssr_import_6__.mergeProps({
    navigation: true,
    keyboard: { enabled: true },
    pagination: { dynamicBullets: true, clickable: true },
    modules: $setup.modules,
    class: "mySwiper cursor-pointer select-none mt-10"
  }, _attrs), {
    default: __vite_ssr_import_6__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(__vite_ssr_import_7__.ssrRenderComponent(_component_swiper_slide, null, {
          default: __vite_ssr_import_6__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<section class="bg-white"${
                _scopeId
              }><div class="container px-4 mx-auto"${
                _scopeId
              }><div class="flex flex-col justify-center"${
                _scopeId
              }><!-- <div class="ml-2">
              <img class="w-5 -mb-[11px] mx-auto" src="~/assets/images/icons8/icons8-penguin.svg" alt="" />
            </div> --><div class="flex items-center justify-center"${
                _scopeId
              }><img class="w-6 -mr-1"${
                __vite_ssr_import_7__.ssrRenderAttr("src", __vite_ssr_import_8__.default)
              } alt=""${
                _scopeId
              }><h1 class="text-2xl font-semibold text-center text-red-500"${
                _scopeId
              }>RONT END</h1></div><span class="text-sm text-center text-black"${
                _scopeId
              }>MEVN Learner</span></div><div class="flex flex-wrap items-center justify-center -mx-4 lg:-mx-24"${
                _scopeId
              }><!-- html skills for slider  --><div class="w-full px-4 mb-10 mt-14 sm:w-4/5 md:mb-0"${
                _scopeId
              }><div class="flex flex-wrap items-start -mx-4"${
                _scopeId
              }><div class="w-full px-4 md:w-1/2 lg:w-1/4 mb-14 lg:mb-0"${
                _scopeId
              }><div class="relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm shrink-0 rounded-7xl shadow-gray-300"${
                _scopeId
              }><img class="absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-1/2"${
                __vite_ssr_import_7__.ssrRenderAttr("src", __vite_ssr_import_9__.default)
              } alt=""${
                _scopeId
              }><h4 class="mb-1 text-sm font-medium font-heading"${
                _scopeId
              }>Advance</h4><h4 class="mb-4 text-sm font-medium font-heading"${
                _scopeId
              }>Semantic Tags Structure, SEO Tags <span class="lowercase"${
                _scopeId
              }>etc</span></h4><span class="p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900"${
                _scopeId
              }>HTML 5</span></div></div><div class="w-full px-4 md:w-1/2 lg:w-1/4 mb-14 lg:mb-0 lg:mt-20"${
                _scopeId
              }><div class="relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm rounded-7xl shadow-gray-300"${
                _scopeId
              }><img class="absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-[38%]"${
                __vite_ssr_import_7__.ssrRenderAttr("src", __vite_ssr_import_10__.default)
              } alt=""${
                _scopeId
              }><img class="absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-[62%]"${
                __vite_ssr_import_7__.ssrRenderAttr("src", __vite_ssr_import_11__.default)
              } alt=""${
                _scopeId
              }><h4 class="mb-1 text-sm font-medium font-heading"${
                _scopeId
              }>Advance</h4><h4 class="mb-4 text-sm font-medium capitalize font-heading"${
                _scopeId
              }>class, id, flex, grid, animation, transition <span class="lowercase"${
                _scopeId
              }>etc</span></h4><span class="p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900"${
                _scopeId
              }>CSS 3 <span class="text-indigo-400"${
                _scopeId
              }>||</span> TAILWINd CSS</span></div></div><div class="w-full px-4 md:w-1/2 lg:w-1/4 mb-14 lg:mt-20"${
                _scopeId
              }><div class="relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm rounded-7xl shadow-gray-300"${
                _scopeId
              }><img class="absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 rounded-lg left-1/2"${
                __vite_ssr_import_7__.ssrRenderAttr("src", __vite_ssr_import_12__.default)
              } alt=""${
                _scopeId
              }><h4 class="mb-1 text-sm font-medium font-heading"${
                _scopeId
              }>Basic</h4><h4 class="mb-4 text-sm font-medium capitalize font-heading"${
                _scopeId
              }>DOM, loop,validation, condition,event <span class="lowercase"${
                _scopeId
              }>etc</span></h4><span class="p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900"${
                _scopeId
              }>Java script</span></div></div><div class="w-full px-4 pb-4 md:w-1/2 lg:w-1/4"${
                _scopeId
              }><div class="relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm rounded-7xl shadow-gray-300"${
                _scopeId
              }><img class="absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-[40%]"${
                __vite_ssr_import_7__.ssrRenderAttr("src", __vite_ssr_import_13__.default)
              } alt=""${
                _scopeId
              }><img class="absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-[60%]"${
                __vite_ssr_import_7__.ssrRenderAttr("src", __vite_ssr_import_14__.default)
              } alt=""${
                _scopeId
              }><h4 class="mb-1 text-sm font-medium font-heading"${
                _scopeId
              }>Basic</h4><h4 class="mb-4 text-sm font-medium capitalize font-heading"${
                _scopeId
              }>fundamentals, advanced components, transitions &amp; animations, vuex, form validation, routing <span class="lowercase"${
                _scopeId
              }>etc</span></h4><span class="p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900"${
                _scopeId
              }>vue js <span class="text-indigo-400"${
                _scopeId
              }>||</span> nuxt js</span></div></div></div></div><!-- skills for slider end  --></div></div></section>`)
            } else {
              return [
                __vite_ssr_import_6__.createVNode("section", { class: "bg-white" }, [
                  __vite_ssr_import_6__.createVNode("div", { class: "container px-4 mx-auto" }, [
                    __vite_ssr_import_6__.createVNode("div", { class: "flex flex-col justify-center" }, [
                      __vite_ssr_import_6__.createCommentVNode(" <div class=\"ml-2\">\r\n              <img class=\"w-5 -mb-[11px] mx-auto\" src=\"~/assets/images/icons8/icons8-penguin.svg\" alt=\"\" />\r\n            </div> "),
                      __vite_ssr_import_6__.createVNode("div", { class: "flex items-center justify-center" }, [
                        __vite_ssr_import_6__.createVNode("img", {
                          class: "w-6 -mr-1",
                          src: __vite_ssr_import_8__.default,
                          alt: ""
                        }),
                        __vite_ssr_import_6__.createVNode("h1", { class: "text-2xl font-semibold text-center text-red-500" }, "RONT END")
                      ]),
                      __vite_ssr_import_6__.createVNode("span", { class: "text-sm text-center text-black" }, "MEVN Learner")
                    ]),
                    __vite_ssr_import_6__.createVNode("div", { class: "flex flex-wrap items-center justify-center -mx-4 lg:-mx-24" }, [
                      __vite_ssr_import_6__.createCommentVNode(" html skills for slider  "),
                      __vite_ssr_import_6__.createVNode("div", { class: "w-full px-4 mb-10 mt-14 sm:w-4/5 md:mb-0" }, [
                        __vite_ssr_import_6__.createVNode("div", { class: "flex flex-wrap items-start -mx-4" }, [
                          __vite_ssr_import_6__.createVNode("div", { class: "w-full px-4 md:w-1/2 lg:w-1/4 mb-14 lg:mb-0" }, [
                            __vite_ssr_import_6__.createVNode("div", { class: "relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm shrink-0 rounded-7xl shadow-gray-300" }, [
                              __vite_ssr_import_6__.createVNode("img", {
                                class: "absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-1/2",
                                src: __vite_ssr_import_9__.default,
                                alt: ""
                              }),
                              __vite_ssr_import_6__.createVNode("h4", { class: "mb-1 text-sm font-medium font-heading" }, "Advance"),
                              __vite_ssr_import_6__.createVNode("h4", { class: "mb-4 text-sm font-medium font-heading" }, [
                                __vite_ssr_import_6__.createTextVNode("Semantic Tags Structure, SEO Tags "),
                                __vite_ssr_import_6__.createVNode("span", { class: "lowercase" }, "etc")
                              ]),
                              __vite_ssr_import_6__.createVNode("span", { class: "p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900" }, "HTML 5")
                            ])
                          ]),
                          __vite_ssr_import_6__.createVNode("div", { class: "w-full px-4 md:w-1/2 lg:w-1/4 mb-14 lg:mb-0 lg:mt-20" }, [
                            __vite_ssr_import_6__.createVNode("div", { class: "relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm rounded-7xl shadow-gray-300" }, [
                              __vite_ssr_import_6__.createVNode("img", {
                                class: "absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-[38%]",
                                src: __vite_ssr_import_10__.default,
                                alt: ""
                              }),
                              __vite_ssr_import_6__.createVNode("img", {
                                class: "absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-[62%]",
                                src: __vite_ssr_import_11__.default,
                                alt: ""
                              }),
                              __vite_ssr_import_6__.createVNode("h4", { class: "mb-1 text-sm font-medium font-heading" }, "Advance"),
                              __vite_ssr_import_6__.createVNode("h4", { class: "mb-4 text-sm font-medium capitalize font-heading" }, [
                                __vite_ssr_import_6__.createTextVNode("class, id, flex, grid, animation, transition "),
                                __vite_ssr_import_6__.createVNode("span", { class: "lowercase" }, "etc")
                              ]),
                              __vite_ssr_import_6__.createVNode("span", { class: "p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900" }, [
                                __vite_ssr_import_6__.createTextVNode("CSS 3 "),
                                __vite_ssr_import_6__.createVNode("span", { class: "text-indigo-400" }, "||"),
                                __vite_ssr_import_6__.createTextVNode(" TAILWINd CSS")
                              ])
                            ])
                          ]),
                          __vite_ssr_import_6__.createVNode("div", { class: "w-full px-4 md:w-1/2 lg:w-1/4 mb-14 lg:mt-20" }, [
                            __vite_ssr_import_6__.createVNode("div", { class: "relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm rounded-7xl shadow-gray-300" }, [
                              __vite_ssr_import_6__.createVNode("img", {
                                class: "absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 rounded-lg left-1/2",
                                src: __vite_ssr_import_12__.default,
                                alt: ""
                              }),
                              __vite_ssr_import_6__.createVNode("h4", { class: "mb-1 text-sm font-medium font-heading" }, "Basic"),
                              __vite_ssr_import_6__.createVNode("h4", { class: "mb-4 text-sm font-medium capitalize font-heading" }, [
                                __vite_ssr_import_6__.createTextVNode("DOM, loop,validation, condition,event "),
                                __vite_ssr_import_6__.createVNode("span", { class: "lowercase" }, "etc")
                              ]),
                              __vite_ssr_import_6__.createVNode("span", { class: "p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900" }, "Java script")
                            ])
                          ]),
                          __vite_ssr_import_6__.createVNode("div", { class: "w-full px-4 pb-4 md:w-1/2 lg:w-1/4" }, [
                            __vite_ssr_import_6__.createVNode("div", { class: "relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm rounded-7xl shadow-gray-300" }, [
                              __vite_ssr_import_6__.createVNode("img", {
                                class: "absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-[40%]",
                                src: __vite_ssr_import_13__.default,
                                alt: ""
                              }),
                              __vite_ssr_import_6__.createVNode("img", {
                                class: "absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-[60%]",
                                src: __vite_ssr_import_14__.default,
                                alt: ""
                              }),
                              __vite_ssr_import_6__.createVNode("h4", { class: "mb-1 text-sm font-medium font-heading" }, "Basic"),
                              __vite_ssr_import_6__.createVNode("h4", { class: "mb-4 text-sm font-medium capitalize font-heading" }, [
                                __vite_ssr_import_6__.createTextVNode("fundamentals, advanced components, transitions & animations, vuex, form validation, routing "),
                                __vite_ssr_import_6__.createVNode("span", { class: "lowercase" }, "etc")
                              ]),
                              __vite_ssr_import_6__.createVNode("span", { class: "p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900" }, [
                                __vite_ssr_import_6__.createTextVNode("vue js "),
                                __vite_ssr_import_6__.createVNode("span", { class: "text-indigo-400" }, "||"),
                                __vite_ssr_import_6__.createTextVNode(" nuxt js")
                              ])
                            ])
                          ])
                        ])
                      ]),
                      __vite_ssr_import_6__.createCommentVNode(" skills for slider end  ")
                    ])
                  ])
                ])
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(__vite_ssr_import_7__.ssrRenderComponent(_component_swiper_slide, null, {
          default: __vite_ssr_import_6__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<section class="bg-white"${
                _scopeId
              }><div class="container px-4 mx-auto"${
                _scopeId
              }><!-- <div class="mr-[64px]">
              <img class="w-5 -mb-[13px] mx-auto" src="~/assets/images/icons8/icons8-snoopy.svg" alt="" />
            </div> --><div class="flex items-center justify-center"${
                _scopeId
              }><img class="w-6 -mr-1"${
                __vite_ssr_import_7__.ssrRenderAttr("src", __vite_ssr_import_15__.default)
              } alt=""${
                _scopeId
              }><h1 class="flex justify-center text-2xl font-semibold text-black"${
                _scopeId
              }>ACK END</h1></div><div class="flex flex-wrap items-center justify-center -mx-4"${
                _scopeId
              }><!-- html skills for slider  --><div class="w-full px-4 mb-10 mt-14 sm:w-4/5 md:mb-0"${
                _scopeId
              }><div class="flex flex-wrap items-start -mx-4"${
                _scopeId
              }><div class="w-full px-4 md:w-1/2 lg:w-1/4 mb-14 lg:mb-0"${
                _scopeId
              }><div class="relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm shrink-0 rounded-7xl shadow-gray-300"${
                _scopeId
              }><img class="absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-1/2"${
                __vite_ssr_import_7__.ssrRenderAttr("src", __vite_ssr_import_16__.default)
              } alt=""${
                _scopeId
              }><h4 class="mb-4 text-sm font-medium capitalize font-heading"${
                _scopeId
              }>newbie</h4><span class="p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900"${
                _scopeId
              }>express js</span></div></div><div class="w-full px-4 md:w-1/2 lg:w-1/4 mb-14 lg:mb-0 lg:mt-20"${
                _scopeId
              }><div class="relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm rounded-7xl shadow-gray-300"${
                _scopeId
              }><img class="absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-1/2"${
                __vite_ssr_import_7__.ssrRenderAttr("src", __vite_ssr_import_17__.default)
              } alt=""${
                _scopeId
              }><h4 class="mb-1 text-sm font-medium capitalize font-heading"${
                _scopeId
              }>newbie</h4><h4 class="mb-4 text-sm font-medium capitalize font-heading"${
                _scopeId
              }>crud, connection</h4><span class="p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900"${
                _scopeId
              }>mongo db</span></div></div><div class="w-full px-4 md:w-1/2 lg:w-1/4 mb-14 md:mb-0 lg:mt-20"${
                _scopeId
              }><div class="relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm rounded-7xl shadow-gray-300"${
                _scopeId
              }><img class="absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 rounded-lg left-1/2"${
                __vite_ssr_import_7__.ssrRenderAttr("src", __vite_ssr_import_18__.default)
              } alt=""${
                _scopeId
              }><h4 class="mb-1 text-sm font-medium capitalize font-heading"${
                _scopeId
              }>basic</h4><h4 class="mb-4 text-sm font-medium capitalize font-heading"${
                _scopeId
              }>crud oppression <span class="lowercase"${
                _scopeId
              }>etc</span></h4><span class="p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900"${
                _scopeId
              }>maria db</span></div></div></div></div></div></div></section>`)
            } else {
              return [
                __vite_ssr_import_6__.createVNode("section", { class: "bg-white" }, [
                  __vite_ssr_import_6__.createVNode("div", { class: "container px-4 mx-auto" }, [
                    __vite_ssr_import_6__.createCommentVNode(" <div class=\"mr-[64px]\">\r\n              <img class=\"w-5 -mb-[13px] mx-auto\" src=\"~/assets/images/icons8/icons8-snoopy.svg\" alt=\"\" />\r\n            </div> "),
                    __vite_ssr_import_6__.createVNode("div", { class: "flex items-center justify-center" }, [
                      __vite_ssr_import_6__.createVNode("img", {
                        class: "w-6 -mr-1",
                        src: __vite_ssr_import_15__.default,
                        alt: ""
                      }),
                      __vite_ssr_import_6__.createVNode("h1", { class: "flex justify-center text-2xl font-semibold text-black" }, "ACK END")
                    ]),
                    __vite_ssr_import_6__.createVNode("div", { class: "flex flex-wrap items-center justify-center -mx-4" }, [
                      __vite_ssr_import_6__.createCommentVNode(" html skills for slider  "),
                      __vite_ssr_import_6__.createVNode("div", { class: "w-full px-4 mb-10 mt-14 sm:w-4/5 md:mb-0" }, [
                        __vite_ssr_import_6__.createVNode("div", { class: "flex flex-wrap items-start -mx-4" }, [
                          __vite_ssr_import_6__.createVNode("div", { class: "w-full px-4 md:w-1/2 lg:w-1/4 mb-14 lg:mb-0" }, [
                            __vite_ssr_import_6__.createVNode("div", { class: "relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm shrink-0 rounded-7xl shadow-gray-300" }, [
                              __vite_ssr_import_6__.createVNode("img", {
                                class: "absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-1/2",
                                src: __vite_ssr_import_16__.default,
                                alt: ""
                              }),
                              __vite_ssr_import_6__.createVNode("h4", { class: "mb-4 text-sm font-medium capitalize font-heading" }, "newbie"),
                              __vite_ssr_import_6__.createVNode("span", { class: "p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900" }, "express js")
                            ])
                          ]),
                          __vite_ssr_import_6__.createVNode("div", { class: "w-full px-4 md:w-1/2 lg:w-1/4 mb-14 lg:mb-0 lg:mt-20" }, [
                            __vite_ssr_import_6__.createVNode("div", { class: "relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm rounded-7xl shadow-gray-300" }, [
                              __vite_ssr_import_6__.createVNode("img", {
                                class: "absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-1/2",
                                src: __vite_ssr_import_17__.default,
                                alt: ""
                              }),
                              __vite_ssr_import_6__.createVNode("h4", { class: "mb-1 text-sm font-medium capitalize font-heading" }, "newbie"),
                              __vite_ssr_import_6__.createVNode("h4", { class: "mb-4 text-sm font-medium capitalize font-heading" }, "crud, connection"),
                              __vite_ssr_import_6__.createVNode("span", { class: "p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900" }, "mongo db")
                            ])
                          ]),
                          __vite_ssr_import_6__.createVNode("div", { class: "w-full px-4 md:w-1/2 lg:w-1/4 mb-14 md:mb-0 lg:mt-20" }, [
                            __vite_ssr_import_6__.createVNode("div", { class: "relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm rounded-7xl shadow-gray-300" }, [
                              __vite_ssr_import_6__.createVNode("img", {
                                class: "absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 rounded-lg left-1/2",
                                src: __vite_ssr_import_18__.default,
                                alt: ""
                              }),
                              __vite_ssr_import_6__.createVNode("h4", { class: "mb-1 text-sm font-medium capitalize font-heading" }, "basic"),
                              __vite_ssr_import_6__.createVNode("h4", { class: "mb-4 text-sm font-medium capitalize font-heading" }, [
                                __vite_ssr_import_6__.createTextVNode("crud oppression "),
                                __vite_ssr_import_6__.createVNode("span", { class: "lowercase" }, "etc")
                              ]),
                              __vite_ssr_import_6__.createVNode("span", { class: "p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900" }, "maria db")
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(__vite_ssr_import_7__.ssrRenderComponent(_component_swiper_slide, null, {
          default: __vite_ssr_import_6__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<section class="bg-white"${
                _scopeId
              }><div class="container px-4 mx-auto"${
                _scopeId
              }><!-- <div class="ml-2">
              <img class="w-5 -mb-[11px] mx-auto" src="~/assets/images/icons8/icons8-penguin.svg" alt="" />
            </div> --><div class="flex items-center justify-center"${
                _scopeId
              }><img class="w-6 -mr-[3px]"${
                __vite_ssr_import_7__.ssrRenderAttr("src", __vite_ssr_import_19__.default)
              } alt=""${
                _scopeId
              }><h1 class="text-[#00749A] text-2xl justify-center flex font-semibold"${
                _scopeId
              }>THER</h1></div><div class="flex flex-wrap items-center justify-center -mx-4"${
                _scopeId
              }><!-- html skills for slider  --><div class="w-full px-4 mb-10 mt-14 sm:w-4/5 md:mb-0"${
                _scopeId
              }><div class="flex flex-wrap items-start -mx-4"${
                _scopeId
              }><div class="w-full px-4 md:w-1/2 lg:w-1/4 mb-14 lg:mb-0"${
                _scopeId
              }><div class="relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm shrink-0 rounded-7xl shadow-gray-300"${
                _scopeId
              }><img class="absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-1/2"${
                __vite_ssr_import_7__.ssrRenderAttr("src", __vite_ssr_import_20__.default)
              } alt=""${
                _scopeId
              }><h4 class="mb-1 text-sm font-medium font-heading"${
                _scopeId
              }>Advance</h4><h4 class="mb-4 text-sm font-medium capitalize font-heading"${
                _scopeId
              }>theme create &amp; edit, plugin <span class="lowercase"${
                _scopeId
              }>etc</span></h4><span class="p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900"${
                _scopeId
              }>wordpress</span></div></div><div class="w-full px-4 md:w-1/2 lg:w-1/4 mb-14 lg:mb-0 lg:mt-20"${
                _scopeId
              }><div class="relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm rounded-7xl shadow-gray-300"${
                _scopeId
              }><img class="absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-1/2"${
                __vite_ssr_import_7__.ssrRenderAttr("src", __vite_ssr_import_21__.default)
              } alt=""${
                _scopeId
              }><h4 class="mb-1 text-sm font-medium font-heading"${
                _scopeId
              }>Advance</h4><h4 class="mb-4 text-sm font-medium capitalize font-heading"${
                _scopeId
              }>video banner &amp; ads, image editor <span class="lowercase"${
                _scopeId
              }>etc</span></h4><span class="p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900"${
                _scopeId
              }>canva</span></div></div><!-- <div class="w-full px-4 md:w-1/2 lg:w-1/4 mb-14 md:mb-0 lg:mt-20">
                  <div class="relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm rounded-7xl shadow-gray-300">
                    <img class="absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 rounded-lg left-1/2" src="~/assets/images/mycollection/vscode.svg" alt="">
                    <h4 class="mb-4 text-sm font-medium font-heading">Advance</h4>
                    <h4 class="mb-4 text-sm font-medium capitalize font-heading">.vscode, theme, plugin, shortcut <span class="lowercase">etc</span> </h4>
                    <span class="p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900 ">vs code</span>
                  </div>
                </div> --><div class="w-full px-4 md:w-1/2 lg:w-1/4 mb-14 lg:mb-0 lg:mt-20"${
                _scopeId
              }><div class="relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm shrink-0 rounded-7xl shadow-gray-300"${
                _scopeId
              }><img class="absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-[35%]"${
                __vite_ssr_import_7__.ssrRenderAttr("src", __vite_ssr_import_22__.default)
              } alt=""${
                _scopeId
              }><img class="absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-[65%]"${
                __vite_ssr_import_7__.ssrRenderAttr("src", __vite_ssr_import_23__.default)
              } alt=""${
                _scopeId
              }><h4 class="mb-1 text-sm font-medium font-heading"${
                _scopeId
              }>Advance</h4><h4 class="mb-4 text-sm font-medium capitalize font-heading"${
                _scopeId
              }>vscode, theme, plugin, shortcut, pull, put, repo, clone <span class="lowercase"${
                _scopeId
              }>etc</span></h4><span class="p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900"${
                _scopeId
              }>vs code <span class="text-indigo-400"${
                _scopeId
              }>||</span> git</span></div></div><div class="w-full px-4 md:w-1/2 lg:w-1/4 mb-14 lg:mb-0"${
                _scopeId
              }><div class="relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm shrink-0 rounded-7xl shadow-gray-300"${
                _scopeId
              }><img class="absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-1/2"${
                __vite_ssr_import_7__.ssrRenderAttr("src", __vite_ssr_import_24__.default)
              } alt=""${
                _scopeId
              }><h4 class="mb-4 text-sm font-medium font-heading"${
                _scopeId
              }>Newbie</h4><span class="p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900"${
                _scopeId
              }>digital ocean</span></div></div></div></div></div></div></section>`)
            } else {
              return [
                __vite_ssr_import_6__.createVNode("section", { class: "bg-white" }, [
                  __vite_ssr_import_6__.createVNode("div", { class: "container px-4 mx-auto" }, [
                    __vite_ssr_import_6__.createCommentVNode(" <div class=\"ml-2\">\r\n              <img class=\"w-5 -mb-[11px] mx-auto\" src=\"~/assets/images/icons8/icons8-penguin.svg\" alt=\"\" />\r\n            </div> "),
                    __vite_ssr_import_6__.createVNode("div", { class: "flex items-center justify-center" }, [
                      __vite_ssr_import_6__.createVNode("img", {
                        class: "w-6 -mr-[3px]",
                        src: __vite_ssr_import_19__.default,
                        alt: ""
                      }),
                      __vite_ssr_import_6__.createVNode("h1", { class: "text-[#00749A] text-2xl justify-center flex font-semibold" }, "THER")
                    ]),
                    __vite_ssr_import_6__.createVNode("div", { class: "flex flex-wrap items-center justify-center -mx-4" }, [
                      __vite_ssr_import_6__.createCommentVNode(" html skills for slider  "),
                      __vite_ssr_import_6__.createVNode("div", { class: "w-full px-4 mb-10 mt-14 sm:w-4/5 md:mb-0" }, [
                        __vite_ssr_import_6__.createVNode("div", { class: "flex flex-wrap items-start -mx-4" }, [
                          __vite_ssr_import_6__.createVNode("div", { class: "w-full px-4 md:w-1/2 lg:w-1/4 mb-14 lg:mb-0" }, [
                            __vite_ssr_import_6__.createVNode("div", { class: "relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm shrink-0 rounded-7xl shadow-gray-300" }, [
                              __vite_ssr_import_6__.createVNode("img", {
                                class: "absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-1/2",
                                src: __vite_ssr_import_20__.default,
                                alt: ""
                              }),
                              __vite_ssr_import_6__.createVNode("h4", { class: "mb-1 text-sm font-medium font-heading" }, "Advance"),
                              __vite_ssr_import_6__.createVNode("h4", { class: "mb-4 text-sm font-medium capitalize font-heading" }, [
                                __vite_ssr_import_6__.createTextVNode("theme create & edit, plugin "),
                                __vite_ssr_import_6__.createVNode("span", { class: "lowercase" }, "etc")
                              ]),
                              __vite_ssr_import_6__.createVNode("span", { class: "p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900" }, "wordpress")
                            ])
                          ]),
                          __vite_ssr_import_6__.createVNode("div", { class: "w-full px-4 md:w-1/2 lg:w-1/4 mb-14 lg:mb-0 lg:mt-20" }, [
                            __vite_ssr_import_6__.createVNode("div", { class: "relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm rounded-7xl shadow-gray-300" }, [
                              __vite_ssr_import_6__.createVNode("img", {
                                class: "absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-1/2",
                                src: __vite_ssr_import_21__.default,
                                alt: ""
                              }),
                              __vite_ssr_import_6__.createVNode("h4", { class: "mb-1 text-sm font-medium font-heading" }, "Advance"),
                              __vite_ssr_import_6__.createVNode("h4", { class: "mb-4 text-sm font-medium capitalize font-heading" }, [
                                __vite_ssr_import_6__.createTextVNode("video banner & ads, image editor "),
                                __vite_ssr_import_6__.createVNode("span", { class: "lowercase" }, "etc")
                              ]),
                              __vite_ssr_import_6__.createVNode("span", { class: "p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900" }, "canva")
                            ])
                          ]),
                          __vite_ssr_import_6__.createCommentVNode(" <div class=\"w-full px-4 md:w-1/2 lg:w-1/4 mb-14 md:mb-0 lg:mt-20\">\r\n                  <div class=\"relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm rounded-7xl shadow-gray-300\">\r\n                    <img class=\"absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 rounded-lg left-1/2\" src=\"~/assets/images/mycollection/vscode.svg\" alt=\"\">\r\n                    <h4 class=\"mb-4 text-sm font-medium font-heading\">Advance</h4>\r\n                    <h4 class=\"mb-4 text-sm font-medium capitalize font-heading\">.vscode, theme, plugin, shortcut <span class=\"lowercase\">etc</span> </h4>\r\n                    <span class=\"p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900 \">vs code</span>\r\n                  </div>\r\n                </div> "),
                          __vite_ssr_import_6__.createVNode("div", { class: "w-full px-4 md:w-1/2 lg:w-1/4 mb-14 lg:mb-0 lg:mt-20" }, [
                            __vite_ssr_import_6__.createVNode("div", { class: "relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm shrink-0 rounded-7xl shadow-gray-300" }, [
                              __vite_ssr_import_6__.createVNode("img", {
                                class: "absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-[35%]",
                                src: __vite_ssr_import_22__.default,
                                alt: ""
                              }),
                              __vite_ssr_import_6__.createVNode("img", {
                                class: "absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-[65%]",
                                src: __vite_ssr_import_23__.default,
                                alt: ""
                              }),
                              __vite_ssr_import_6__.createVNode("h4", { class: "mb-1 text-sm font-medium font-heading" }, "Advance"),
                              __vite_ssr_import_6__.createVNode("h4", { class: "mb-4 text-sm font-medium capitalize font-heading" }, [
                                __vite_ssr_import_6__.createTextVNode("vscode, theme, plugin, shortcut, pull, put, repo, clone "),
                                __vite_ssr_import_6__.createVNode("span", { class: "lowercase" }, "etc")
                              ]),
                              __vite_ssr_import_6__.createVNode("span", { class: "p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900" }, [
                                __vite_ssr_import_6__.createTextVNode("vs code "),
                                __vite_ssr_import_6__.createVNode("span", { class: "text-indigo-400" }, "||"),
                                __vite_ssr_import_6__.createTextVNode(" git")
                              ])
                            ])
                          ]),
                          __vite_ssr_import_6__.createVNode("div", { class: "w-full px-4 md:w-1/2 lg:w-1/4 mb-14 lg:mb-0" }, [
                            __vite_ssr_import_6__.createVNode("div", { class: "relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm shrink-0 rounded-7xl shadow-gray-300" }, [
                              __vite_ssr_import_6__.createVNode("img", {
                                class: "absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-1/2",
                                src: __vite_ssr_import_24__.default,
                                alt: ""
                              }),
                              __vite_ssr_import_6__.createVNode("h4", { class: "mb-4 text-sm font-medium font-heading" }, "Newbie"),
                              __vite_ssr_import_6__.createVNode("span", { class: "p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900" }, "digital ocean")
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
      } else {
        return [
          __vite_ssr_import_6__.createVNode(_component_swiper_slide, null, {
            default: __vite_ssr_import_6__.withCtx(() => [
              __vite_ssr_import_6__.createVNode("section", { class: "bg-white" }, [
                __vite_ssr_import_6__.createVNode("div", { class: "container px-4 mx-auto" }, [
                  __vite_ssr_import_6__.createVNode("div", { class: "flex flex-col justify-center" }, [
                    __vite_ssr_import_6__.createCommentVNode(" <div class=\"ml-2\">\r\n              <img class=\"w-5 -mb-[11px] mx-auto\" src=\"~/assets/images/icons8/icons8-penguin.svg\" alt=\"\" />\r\n            </div> "),
                    __vite_ssr_import_6__.createVNode("div", { class: "flex items-center justify-center" }, [
                      __vite_ssr_import_6__.createVNode("img", {
                        class: "w-6 -mr-1",
                        src: __vite_ssr_import_8__.default,
                        alt: ""
                      }),
                      __vite_ssr_import_6__.createVNode("h1", { class: "text-2xl font-semibold text-center text-red-500" }, "RONT END")
                    ]),
                    __vite_ssr_import_6__.createVNode("span", { class: "text-sm text-center text-black" }, "MEVN Learner")
                  ]),
                  __vite_ssr_import_6__.createVNode("div", { class: "flex flex-wrap items-center justify-center -mx-4 lg:-mx-24" }, [
                    __vite_ssr_import_6__.createCommentVNode(" html skills for slider  "),
                    __vite_ssr_import_6__.createVNode("div", { class: "w-full px-4 mb-10 mt-14 sm:w-4/5 md:mb-0" }, [
                      __vite_ssr_import_6__.createVNode("div", { class: "flex flex-wrap items-start -mx-4" }, [
                        __vite_ssr_import_6__.createVNode("div", { class: "w-full px-4 md:w-1/2 lg:w-1/4 mb-14 lg:mb-0" }, [
                          __vite_ssr_import_6__.createVNode("div", { class: "relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm shrink-0 rounded-7xl shadow-gray-300" }, [
                            __vite_ssr_import_6__.createVNode("img", {
                              class: "absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-1/2",
                              src: __vite_ssr_import_9__.default,
                              alt: ""
                            }),
                            __vite_ssr_import_6__.createVNode("h4", { class: "mb-1 text-sm font-medium font-heading" }, "Advance"),
                            __vite_ssr_import_6__.createVNode("h4", { class: "mb-4 text-sm font-medium font-heading" }, [
                              __vite_ssr_import_6__.createTextVNode("Semantic Tags Structure, SEO Tags "),
                              __vite_ssr_import_6__.createVNode("span", { class: "lowercase" }, "etc")
                            ]),
                            __vite_ssr_import_6__.createVNode("span", { class: "p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900" }, "HTML 5")
                          ])
                        ]),
                        __vite_ssr_import_6__.createVNode("div", { class: "w-full px-4 md:w-1/2 lg:w-1/4 mb-14 lg:mb-0 lg:mt-20" }, [
                          __vite_ssr_import_6__.createVNode("div", { class: "relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm rounded-7xl shadow-gray-300" }, [
                            __vite_ssr_import_6__.createVNode("img", {
                              class: "absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-[38%]",
                              src: __vite_ssr_import_10__.default,
                              alt: ""
                            }),
                            __vite_ssr_import_6__.createVNode("img", {
                              class: "absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-[62%]",
                              src: __vite_ssr_import_11__.default,
                              alt: ""
                            }),
                            __vite_ssr_import_6__.createVNode("h4", { class: "mb-1 text-sm font-medium font-heading" }, "Advance"),
                            __vite_ssr_import_6__.createVNode("h4", { class: "mb-4 text-sm font-medium capitalize font-heading" }, [
                              __vite_ssr_import_6__.createTextVNode("class, id, flex, grid, animation, transition "),
                              __vite_ssr_import_6__.createVNode("span", { class: "lowercase" }, "etc")
                            ]),
                            __vite_ssr_import_6__.createVNode("span", { class: "p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900" }, [
                              __vite_ssr_import_6__.createTextVNode("CSS 3 "),
                              __vite_ssr_import_6__.createVNode("span", { class: "text-indigo-400" }, "||"),
                              __vite_ssr_import_6__.createTextVNode(" TAILWINd CSS")
                            ])
                          ])
                        ]),
                        __vite_ssr_import_6__.createVNode("div", { class: "w-full px-4 md:w-1/2 lg:w-1/4 mb-14 lg:mt-20" }, [
                          __vite_ssr_import_6__.createVNode("div", { class: "relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm rounded-7xl shadow-gray-300" }, [
                            __vite_ssr_import_6__.createVNode("img", {
                              class: "absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 rounded-lg left-1/2",
                              src: __vite_ssr_import_12__.default,
                              alt: ""
                            }),
                            __vite_ssr_import_6__.createVNode("h4", { class: "mb-1 text-sm font-medium font-heading" }, "Basic"),
                            __vite_ssr_import_6__.createVNode("h4", { class: "mb-4 text-sm font-medium capitalize font-heading" }, [
                              __vite_ssr_import_6__.createTextVNode("DOM, loop,validation, condition,event "),
                              __vite_ssr_import_6__.createVNode("span", { class: "lowercase" }, "etc")
                            ]),
                            __vite_ssr_import_6__.createVNode("span", { class: "p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900" }, "Java script")
                          ])
                        ]),
                        __vite_ssr_import_6__.createVNode("div", { class: "w-full px-4 pb-4 md:w-1/2 lg:w-1/4" }, [
                          __vite_ssr_import_6__.createVNode("div", { class: "relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm rounded-7xl shadow-gray-300" }, [
                            __vite_ssr_import_6__.createVNode("img", {
                              class: "absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-[40%]",
                              src: __vite_ssr_import_13__.default,
                              alt: ""
                            }),
                            __vite_ssr_import_6__.createVNode("img", {
                              class: "absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-[60%]",
                              src: __vite_ssr_import_14__.default,
                              alt: ""
                            }),
                            __vite_ssr_import_6__.createVNode("h4", { class: "mb-1 text-sm font-medium font-heading" }, "Basic"),
                            __vite_ssr_import_6__.createVNode("h4", { class: "mb-4 text-sm font-medium capitalize font-heading" }, [
                              __vite_ssr_import_6__.createTextVNode("fundamentals, advanced components, transitions & animations, vuex, form validation, routing "),
                              __vite_ssr_import_6__.createVNode("span", { class: "lowercase" }, "etc")
                            ]),
                            __vite_ssr_import_6__.createVNode("span", { class: "p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900" }, [
                              __vite_ssr_import_6__.createTextVNode("vue js "),
                              __vite_ssr_import_6__.createVNode("span", { class: "text-indigo-400" }, "||"),
                              __vite_ssr_import_6__.createTextVNode(" nuxt js")
                            ])
                          ])
                        ])
                      ])
                    ]),
                    __vite_ssr_import_6__.createCommentVNode(" skills for slider end  ")
                  ])
                ])
              ])
            ]),
            _: 1 /* STABLE */
          }),
          __vite_ssr_import_6__.createVNode(_component_swiper_slide, null, {
            default: __vite_ssr_import_6__.withCtx(() => [
              __vite_ssr_import_6__.createVNode("section", { class: "bg-white" }, [
                __vite_ssr_import_6__.createVNode("div", { class: "container px-4 mx-auto" }, [
                  __vite_ssr_import_6__.createCommentVNode(" <div class=\"mr-[64px]\">\r\n              <img class=\"w-5 -mb-[13px] mx-auto\" src=\"~/assets/images/icons8/icons8-snoopy.svg\" alt=\"\" />\r\n            </div> "),
                  __vite_ssr_import_6__.createVNode("div", { class: "flex items-center justify-center" }, [
                    __vite_ssr_import_6__.createVNode("img", {
                      class: "w-6 -mr-1",
                      src: __vite_ssr_import_15__.default,
                      alt: ""
                    }),
                    __vite_ssr_import_6__.createVNode("h1", { class: "flex justify-center text-2xl font-semibold text-black" }, "ACK END")
                  ]),
                  __vite_ssr_import_6__.createVNode("div", { class: "flex flex-wrap items-center justify-center -mx-4" }, [
                    __vite_ssr_import_6__.createCommentVNode(" html skills for slider  "),
                    __vite_ssr_import_6__.createVNode("div", { class: "w-full px-4 mb-10 mt-14 sm:w-4/5 md:mb-0" }, [
                      __vite_ssr_import_6__.createVNode("div", { class: "flex flex-wrap items-start -mx-4" }, [
                        __vite_ssr_import_6__.createVNode("div", { class: "w-full px-4 md:w-1/2 lg:w-1/4 mb-14 lg:mb-0" }, [
                          __vite_ssr_import_6__.createVNode("div", { class: "relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm shrink-0 rounded-7xl shadow-gray-300" }, [
                            __vite_ssr_import_6__.createVNode("img", {
                              class: "absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-1/2",
                              src: __vite_ssr_import_16__.default,
                              alt: ""
                            }),
                            __vite_ssr_import_6__.createVNode("h4", { class: "mb-4 text-sm font-medium capitalize font-heading" }, "newbie"),
                            __vite_ssr_import_6__.createVNode("span", { class: "p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900" }, "express js")
                          ])
                        ]),
                        __vite_ssr_import_6__.createVNode("div", { class: "w-full px-4 md:w-1/2 lg:w-1/4 mb-14 lg:mb-0 lg:mt-20" }, [
                          __vite_ssr_import_6__.createVNode("div", { class: "relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm rounded-7xl shadow-gray-300" }, [
                            __vite_ssr_import_6__.createVNode("img", {
                              class: "absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-1/2",
                              src: __vite_ssr_import_17__.default,
                              alt: ""
                            }),
                            __vite_ssr_import_6__.createVNode("h4", { class: "mb-1 text-sm font-medium capitalize font-heading" }, "newbie"),
                            __vite_ssr_import_6__.createVNode("h4", { class: "mb-4 text-sm font-medium capitalize font-heading" }, "crud, connection"),
                            __vite_ssr_import_6__.createVNode("span", { class: "p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900" }, "mongo db")
                          ])
                        ]),
                        __vite_ssr_import_6__.createVNode("div", { class: "w-full px-4 md:w-1/2 lg:w-1/4 mb-14 md:mb-0 lg:mt-20" }, [
                          __vite_ssr_import_6__.createVNode("div", { class: "relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm rounded-7xl shadow-gray-300" }, [
                            __vite_ssr_import_6__.createVNode("img", {
                              class: "absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 rounded-lg left-1/2",
                              src: __vite_ssr_import_18__.default,
                              alt: ""
                            }),
                            __vite_ssr_import_6__.createVNode("h4", { class: "mb-1 text-sm font-medium capitalize font-heading" }, "basic"),
                            __vite_ssr_import_6__.createVNode("h4", { class: "mb-4 text-sm font-medium capitalize font-heading" }, [
                              __vite_ssr_import_6__.createTextVNode("crud oppression "),
                              __vite_ssr_import_6__.createVNode("span", { class: "lowercase" }, "etc")
                            ]),
                            __vite_ssr_import_6__.createVNode("span", { class: "p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900" }, "maria db")
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            _: 1 /* STABLE */
          }),
          __vite_ssr_import_6__.createVNode(_component_swiper_slide, null, {
            default: __vite_ssr_import_6__.withCtx(() => [
              __vite_ssr_import_6__.createVNode("section", { class: "bg-white" }, [
                __vite_ssr_import_6__.createVNode("div", { class: "container px-4 mx-auto" }, [
                  __vite_ssr_import_6__.createCommentVNode(" <div class=\"ml-2\">\r\n              <img class=\"w-5 -mb-[11px] mx-auto\" src=\"~/assets/images/icons8/icons8-penguin.svg\" alt=\"\" />\r\n            </div> "),
                  __vite_ssr_import_6__.createVNode("div", { class: "flex items-center justify-center" }, [
                    __vite_ssr_import_6__.createVNode("img", {
                      class: "w-6 -mr-[3px]",
                      src: __vite_ssr_import_19__.default,
                      alt: ""
                    }),
                    __vite_ssr_import_6__.createVNode("h1", { class: "text-[#00749A] text-2xl justify-center flex font-semibold" }, "THER")
                  ]),
                  __vite_ssr_import_6__.createVNode("div", { class: "flex flex-wrap items-center justify-center -mx-4" }, [
                    __vite_ssr_import_6__.createCommentVNode(" html skills for slider  "),
                    __vite_ssr_import_6__.createVNode("div", { class: "w-full px-4 mb-10 mt-14 sm:w-4/5 md:mb-0" }, [
                      __vite_ssr_import_6__.createVNode("div", { class: "flex flex-wrap items-start -mx-4" }, [
                        __vite_ssr_import_6__.createVNode("div", { class: "w-full px-4 md:w-1/2 lg:w-1/4 mb-14 lg:mb-0" }, [
                          __vite_ssr_import_6__.createVNode("div", { class: "relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm shrink-0 rounded-7xl shadow-gray-300" }, [
                            __vite_ssr_import_6__.createVNode("img", {
                              class: "absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-1/2",
                              src: __vite_ssr_import_20__.default,
                              alt: ""
                            }),
                            __vite_ssr_import_6__.createVNode("h4", { class: "mb-1 text-sm font-medium font-heading" }, "Advance"),
                            __vite_ssr_import_6__.createVNode("h4", { class: "mb-4 text-sm font-medium capitalize font-heading" }, [
                              __vite_ssr_import_6__.createTextVNode("theme create & edit, plugin "),
                              __vite_ssr_import_6__.createVNode("span", { class: "lowercase" }, "etc")
                            ]),
                            __vite_ssr_import_6__.createVNode("span", { class: "p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900" }, "wordpress")
                          ])
                        ]),
                        __vite_ssr_import_6__.createVNode("div", { class: "w-full px-4 md:w-1/2 lg:w-1/4 mb-14 lg:mb-0 lg:mt-20" }, [
                          __vite_ssr_import_6__.createVNode("div", { class: "relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm rounded-7xl shadow-gray-300" }, [
                            __vite_ssr_import_6__.createVNode("img", {
                              class: "absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-1/2",
                              src: __vite_ssr_import_21__.default,
                              alt: ""
                            }),
                            __vite_ssr_import_6__.createVNode("h4", { class: "mb-1 text-sm font-medium font-heading" }, "Advance"),
                            __vite_ssr_import_6__.createVNode("h4", { class: "mb-4 text-sm font-medium capitalize font-heading" }, [
                              __vite_ssr_import_6__.createTextVNode("video banner & ads, image editor "),
                              __vite_ssr_import_6__.createVNode("span", { class: "lowercase" }, "etc")
                            ]),
                            __vite_ssr_import_6__.createVNode("span", { class: "p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900" }, "canva")
                          ])
                        ]),
                        __vite_ssr_import_6__.createCommentVNode(" <div class=\"w-full px-4 md:w-1/2 lg:w-1/4 mb-14 md:mb-0 lg:mt-20\">\r\n                  <div class=\"relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm rounded-7xl shadow-gray-300\">\r\n                    <img class=\"absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 rounded-lg left-1/2\" src=\"~/assets/images/mycollection/vscode.svg\" alt=\"\">\r\n                    <h4 class=\"mb-4 text-sm font-medium font-heading\">Advance</h4>\r\n                    <h4 class=\"mb-4 text-sm font-medium capitalize font-heading\">.vscode, theme, plugin, shortcut <span class=\"lowercase\">etc</span> </h4>\r\n                    <span class=\"p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900 \">vs code</span>\r\n                  </div>\r\n                </div> "),
                        __vite_ssr_import_6__.createVNode("div", { class: "w-full px-4 md:w-1/2 lg:w-1/4 mb-14 lg:mb-0 lg:mt-20" }, [
                          __vite_ssr_import_6__.createVNode("div", { class: "relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm shrink-0 rounded-7xl shadow-gray-300" }, [
                            __vite_ssr_import_6__.createVNode("img", {
                              class: "absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-[35%]",
                              src: __vite_ssr_import_22__.default,
                              alt: ""
                            }),
                            __vite_ssr_import_6__.createVNode("img", {
                              class: "absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-[65%]",
                              src: __vite_ssr_import_23__.default,
                              alt: ""
                            }),
                            __vite_ssr_import_6__.createVNode("h4", { class: "mb-1 text-sm font-medium font-heading" }, "Advance"),
                            __vite_ssr_import_6__.createVNode("h4", { class: "mb-4 text-sm font-medium capitalize font-heading" }, [
                              __vite_ssr_import_6__.createTextVNode("vscode, theme, plugin, shortcut, pull, put, repo, clone "),
                              __vite_ssr_import_6__.createVNode("span", { class: "lowercase" }, "etc")
                            ]),
                            __vite_ssr_import_6__.createVNode("span", { class: "p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900" }, [
                              __vite_ssr_import_6__.createTextVNode("vs code "),
                              __vite_ssr_import_6__.createVNode("span", { class: "text-indigo-400" }, "||"),
                              __vite_ssr_import_6__.createTextVNode(" git")
                            ])
                          ])
                        ]),
                        __vite_ssr_import_6__.createVNode("div", { class: "w-full px-4 md:w-1/2 lg:w-1/4 mb-14 lg:mb-0" }, [
                          __vite_ssr_import_6__.createVNode("div", { class: "relative h-full px-6 pt-16 pb-8 text-center bg-gray-100 shadow-sm shrink-0 rounded-7xl shadow-gray-300" }, [
                            __vite_ssr_import_6__.createVNode("img", {
                              class: "absolute top-0 w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 left-1/2",
                              src: __vite_ssr_import_24__.default,
                              alt: ""
                            }),
                            __vite_ssr_import_6__.createVNode("h4", { class: "mb-4 text-sm font-medium font-heading" }, "Newbie"),
                            __vite_ssr_import_6__.createVNode("span", { class: "p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900" }, "digital ocean")
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            _: 1 /* STABLE */
          })
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
}

const __vite_ssr_import_25__ = await __vite_ssr_import__("/components/skills.vue?vue&type=style&index=0&lang.css");


const __vite_ssr_import_26__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_26__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/skills.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_27__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_27__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/acer/Desktop/ganpatjangra.me/components/skills.vue"]]);
}


// --------------------
// Request: /node_modules/swiper/vue/swiper-vue.js
// Parents: 
// - /components/skills.vue ($id_43fa255d)
// - /components/project.vue ($id_9aa3dd9e)
// Dependencies: 

// --------------------
const $id_72e3deca = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///C:/Users/acer/Desktop/ganpatjangra.me/node_modules/swiper/vue/swiper-vue.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "C:/Users/acer/Desktop/ganpatjangra.me/node_modules/swiper/vue/swiper-vue.js".') })


// --------------------
// Request: /node_modules/swiper/swiper.min.css
// Parents: 
// - /components/skills.vue ($id_43fa255d)
// - /components/project.vue ($id_9aa3dd9e)
// Dependencies: 

// --------------------
const $id_9d54fdba = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/**\n * Swiper 8.0.7\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * https://swiperjs.com\n *\n * Copyright 2014-2022 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: March 4, 2022\n */\n\n@font-face{font-family:swiper-icons;src:url('data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA');font-weight:400;font-style:normal}\n\n:root{--swiper-theme-color:#007aff}\n\n.swiper{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}\n\n.swiper-vertical>.swiper-wrapper{flex-direction:column}\n\n.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;box-sizing:content-box}\n\n.swiper-android .swiper-slide,.swiper-wrapper{transform:translate3d(0px,0,0)}\n\n.swiper-pointer-events{touch-action:pan-y}\n\n.swiper-pointer-events.swiper-vertical{touch-action:pan-x}\n\n.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform}\n\n.swiper-slide-invisible-blank{visibility:hidden}\n\n.swiper-autoheight,.swiper-autoheight .swiper-slide{height:auto}\n\n.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}\n\n.swiper-backface-hidden .swiper-slide{transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}\n\n.swiper-3d,.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}\n\n.swiper-3d .swiper-cube-shadow,.swiper-3d .swiper-slide,.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top,.swiper-3d .swiper-wrapper{transform-style:preserve-3d}\n\n.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}\n\n.swiper-3d .swiper-slide-shadow{background:rgba(0,0,0,.15)}\n\n.swiper-3d .swiper-slide-shadow-left{background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}\n\n.swiper-3d .swiper-slide-shadow-right{background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}\n\n.swiper-3d .swiper-slide-shadow-top{background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}\n\n.swiper-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}\n\n.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}\n\n.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}\n\n.swiper-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}\n\n.swiper-horizontal.swiper-css-mode>.swiper-wrapper{-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory}\n\n.swiper-vertical.swiper-css-mode>.swiper-wrapper{-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory}\n\n.swiper-centered>.swiper-wrapper::before{content:'';flex-shrink:0;order:9999}\n\n.swiper-centered.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{-webkit-margin-start:var(--swiper-centered-offset-before);margin-inline-start:var(--swiper-centered-offset-before)}\n\n.swiper-centered.swiper-horizontal>.swiper-wrapper::before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}\n\n.swiper-centered.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{-webkit-margin-before:var(--swiper-centered-offset-before);margin-block-start:var(--swiper-centered-offset-before)}\n\n.swiper-centered.swiper-vertical>.swiper-wrapper::before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}\n\n.swiper-centered>.swiper-wrapper>.swiper-slide{scroll-snap-align:center center}";
}


// --------------------
// Request: /node_modules/swiper/modules/pagination/pagination.min.css
// Parents: 
// - /components/skills.vue ($id_43fa255d)
// - /components/project.vue ($id_9aa3dd9e)
// Dependencies: 

// --------------------
const $id_d3ef010f = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,8px));height:var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,8px));display:inline-block;border-radius:50%;background:var(--swiper-pagination-bullet-inactive-color,#000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-pagination-vertical.swiper-pagination-bullets,.swiper-vertical>.swiper-pagination-bullets{right:10px;top:50%;transform:translate3d(0px,-50%,0)}.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap,6px) 0;display:block}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap,4px)}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}.swiper-pagination-lock{display:none}";
}


// --------------------
// Request: /node_modules/swiper/modules/navigation/navigation.min.css
// Parents: 
// - /components/skills.vue ($id_43fa255d)
// - /components/project.vue ($id_9aa3dd9e)
// Dependencies: 

// --------------------
const $id_9b8672f2 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ":root{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:calc(var(--swiper-navigation-size)/ 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size)/ 2));z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:var(--swiper-navigation-size);letter-spacing:0;text-transform:none;font-variant:initial;line-height:1}.swiper-button-prev,.swiper-rtl .swiper-button-next{left:10px;right:auto}.swiper-button-prev:after,.swiper-rtl .swiper-button-next:after{content:'prev'}.swiper-button-next,.swiper-rtl .swiper-button-prev{right:10px;left:auto}.swiper-button-next:after,.swiper-rtl .swiper-button-prev:after{content:'next'}.swiper-button-lock{display:none}";
}


// --------------------
// Request: /node_modules/swiper/swiper.esm.js
// Parents: 
// - /components/skills.vue ($id_43fa255d)
// - /components/project.vue ($id_9aa3dd9e)
// Dependencies: 
// - /node_modules/swiper/core/core.js ($id_413488a5)
// - /node_modules/swiper/modules/virtual/virtual.js ($id_cdb0752d)
// - /node_modules/swiper/modules/keyboard/keyboard.js ($id_b79f366d)
// - /node_modules/swiper/modules/mousewheel/mousewheel.js ($id_ff1b73b2)
// - /node_modules/swiper/modules/navigation/navigation.js ($id_3cbacc13)
// - /node_modules/swiper/modules/pagination/pagination.js ($id_9d25ff48)
// - /node_modules/swiper/modules/scrollbar/scrollbar.js ($id_b7c15973)
// - /node_modules/swiper/modules/parallax/parallax.js ($id_2bc0dda6)
// - /node_modules/swiper/modules/zoom/zoom.js ($id_b6094d1d)
// - /node_modules/swiper/modules/lazy/lazy.js ($id_27878f55)
// - /node_modules/swiper/modules/controller/controller.js ($id_224f2e59)
// - /node_modules/swiper/modules/a11y/a11y.js ($id_7fc5b0be)
// - /node_modules/swiper/modules/history/history.js ($id_f5205ad9)
// - /node_modules/swiper/modules/hash-navigation/hash-navigation.js ($id_39f6940c)
// - /node_modules/swiper/modules/autoplay/autoplay.js ($id_11d42465)
// - /node_modules/swiper/modules/thumbs/thumbs.js ($id_7f241531)
// - /node_modules/swiper/modules/free-mode/free-mode.js ($id_adae43c1)
// - /node_modules/swiper/modules/grid/grid.js ($id_be08b669)
// - /node_modules/swiper/modules/manipulation/manipulation.js ($id_9ffdf8ef)
// - /node_modules/swiper/modules/effect-fade/effect-fade.js ($id_ed5701f6)
// - /node_modules/swiper/modules/effect-cube/effect-cube.js ($id_03914d04)
// - /node_modules/swiper/modules/effect-flip/effect-flip.js ($id_24c07261)
// - /node_modules/swiper/modules/effect-coverflow/effect-coverflow.js ($id_0ea540eb)
// - /node_modules/swiper/modules/effect-creative/effect-creative.js ($id_3ab2d8b1)
// - /node_modules/swiper/modules/effect-cards/effect-cards.js ($id_597d31c2)
// --------------------
const $id_d1eb9a9e = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
/**
 * Swiper 8.0.7
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2022 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: March 4, 2022
 */

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/swiper/core/core.js");

Object.defineProperty(__vite_ssr_exports__, "Swiper", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});
Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/swiper/modules/virtual/virtual.js");

Object.defineProperty(__vite_ssr_exports__, "Virtual", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.default }});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/swiper/modules/keyboard/keyboard.js");

Object.defineProperty(__vite_ssr_exports__, "Keyboard", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.default }});
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/swiper/modules/mousewheel/mousewheel.js");

Object.defineProperty(__vite_ssr_exports__, "Mousewheel", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.default }});
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/swiper/modules/navigation/navigation.js");

Object.defineProperty(__vite_ssr_exports__, "Navigation", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.default }});
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/swiper/modules/pagination/pagination.js");

Object.defineProperty(__vite_ssr_exports__, "Pagination", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.default }});
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/swiper/modules/scrollbar/scrollbar.js");

Object.defineProperty(__vite_ssr_exports__, "Scrollbar", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.default }});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/swiper/modules/parallax/parallax.js");

Object.defineProperty(__vite_ssr_exports__, "Parallax", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.default }});
const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/swiper/modules/zoom/zoom.js");

Object.defineProperty(__vite_ssr_exports__, "Zoom", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.default }});
const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/swiper/modules/lazy/lazy.js");

Object.defineProperty(__vite_ssr_exports__, "Lazy", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.default }});
const __vite_ssr_import_10__ = await __vite_ssr_import__("/node_modules/swiper/modules/controller/controller.js");

Object.defineProperty(__vite_ssr_exports__, "Controller", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_10__.default }});
const __vite_ssr_import_11__ = await __vite_ssr_import__("/node_modules/swiper/modules/a11y/a11y.js");

Object.defineProperty(__vite_ssr_exports__, "A11y", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_11__.default }});
const __vite_ssr_import_12__ = await __vite_ssr_import__("/node_modules/swiper/modules/history/history.js");

Object.defineProperty(__vite_ssr_exports__, "History", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_12__.default }});
const __vite_ssr_import_13__ = await __vite_ssr_import__("/node_modules/swiper/modules/hash-navigation/hash-navigation.js");

Object.defineProperty(__vite_ssr_exports__, "HashNavigation", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_13__.default }});
const __vite_ssr_import_14__ = await __vite_ssr_import__("/node_modules/swiper/modules/autoplay/autoplay.js");

Object.defineProperty(__vite_ssr_exports__, "Autoplay", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.default }});
const __vite_ssr_import_15__ = await __vite_ssr_import__("/node_modules/swiper/modules/thumbs/thumbs.js");

Object.defineProperty(__vite_ssr_exports__, "Thumbs", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_15__.default }});
const __vite_ssr_import_16__ = await __vite_ssr_import__("/node_modules/swiper/modules/free-mode/free-mode.js");

Object.defineProperty(__vite_ssr_exports__, "FreeMode", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_16__.default }});
const __vite_ssr_import_17__ = await __vite_ssr_import__("/node_modules/swiper/modules/grid/grid.js");

Object.defineProperty(__vite_ssr_exports__, "Grid", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_17__.default }});
const __vite_ssr_import_18__ = await __vite_ssr_import__("/node_modules/swiper/modules/manipulation/manipulation.js");

Object.defineProperty(__vite_ssr_exports__, "Manipulation", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_18__.default }});
const __vite_ssr_import_19__ = await __vite_ssr_import__("/node_modules/swiper/modules/effect-fade/effect-fade.js");

Object.defineProperty(__vite_ssr_exports__, "EffectFade", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_19__.default }});
const __vite_ssr_import_20__ = await __vite_ssr_import__("/node_modules/swiper/modules/effect-cube/effect-cube.js");

Object.defineProperty(__vite_ssr_exports__, "EffectCube", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_20__.default }});
const __vite_ssr_import_21__ = await __vite_ssr_import__("/node_modules/swiper/modules/effect-flip/effect-flip.js");

Object.defineProperty(__vite_ssr_exports__, "EffectFlip", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_21__.default }});
const __vite_ssr_import_22__ = await __vite_ssr_import__("/node_modules/swiper/modules/effect-coverflow/effect-coverflow.js");

Object.defineProperty(__vite_ssr_exports__, "EffectCoverflow", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_22__.default }});
const __vite_ssr_import_23__ = await __vite_ssr_import__("/node_modules/swiper/modules/effect-creative/effect-creative.js");

Object.defineProperty(__vite_ssr_exports__, "EffectCreative", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_23__.default }});
const __vite_ssr_import_24__ = await __vite_ssr_import__("/node_modules/swiper/modules/effect-cards/effect-cards.js");

Object.defineProperty(__vite_ssr_exports__, "EffectCards", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_24__.default }});;
}


// --------------------
// Request: /node_modules/swiper/core/core.js
// Parents: 
// - /node_modules/swiper/swiper.esm.js ($id_d1eb9a9e)
// Dependencies: 

// --------------------
const $id_413488a5 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///C:/Users/acer/Desktop/ganpatjangra.me/node_modules/swiper/core/core.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "C:/Users/acer/Desktop/ganpatjangra.me/node_modules/swiper/core/core.js".') })


// --------------------
// Request: /node_modules/swiper/modules/virtual/virtual.js
// Parents: 
// - /node_modules/swiper/swiper.esm.js ($id_d1eb9a9e)
// Dependencies: 

// --------------------
const $id_cdb0752d = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///C:/Users/acer/Desktop/ganpatjangra.me/node_modules/swiper/modules/virtual/virtual.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "C:/Users/acer/Desktop/ganpatjangra.me/node_modules/swiper/modules/virtual/virtual.js".') })


// --------------------
// Request: /node_modules/swiper/modules/keyboard/keyboard.js
// Parents: 
// - /node_modules/swiper/swiper.esm.js ($id_d1eb9a9e)
// Dependencies: 

// --------------------
const $id_b79f366d = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///C:/Users/acer/Desktop/ganpatjangra.me/node_modules/swiper/modules/keyboard/keyboard.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "C:/Users/acer/Desktop/ganpatjangra.me/node_modules/swiper/modules/keyboard/keyboard.js".') })


// --------------------
// Request: /node_modules/swiper/modules/mousewheel/mousewheel.js
// Parents: 
// - /node_modules/swiper/swiper.esm.js ($id_d1eb9a9e)
// Dependencies: 

// --------------------
const $id_ff1b73b2 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///C:/Users/acer/Desktop/ganpatjangra.me/node_modules/swiper/modules/mousewheel/mousewheel.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "C:/Users/acer/Desktop/ganpatjangra.me/node_modules/swiper/modules/mousewheel/mousewheel.js".') })


// --------------------
// Request: /node_modules/swiper/modules/navigation/navigation.js
// Parents: 
// - /node_modules/swiper/swiper.esm.js ($id_d1eb9a9e)
// Dependencies: 

// --------------------
const $id_3cbacc13 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///C:/Users/acer/Desktop/ganpatjangra.me/node_modules/swiper/modules/navigation/navigation.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "C:/Users/acer/Desktop/ganpatjangra.me/node_modules/swiper/modules/navigation/navigation.js".') })


// --------------------
// Request: /node_modules/swiper/modules/pagination/pagination.js
// Parents: 
// - /node_modules/swiper/swiper.esm.js ($id_d1eb9a9e)
// Dependencies: 

// --------------------
const $id_9d25ff48 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///C:/Users/acer/Desktop/ganpatjangra.me/node_modules/swiper/modules/pagination/pagination.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "C:/Users/acer/Desktop/ganpatjangra.me/node_modules/swiper/modules/pagination/pagination.js".') })


// --------------------
// Request: /node_modules/swiper/modules/scrollbar/scrollbar.js
// Parents: 
// - /node_modules/swiper/swiper.esm.js ($id_d1eb9a9e)
// Dependencies: 

// --------------------
const $id_b7c15973 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///C:/Users/acer/Desktop/ganpatjangra.me/node_modules/swiper/modules/scrollbar/scrollbar.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "C:/Users/acer/Desktop/ganpatjangra.me/node_modules/swiper/modules/scrollbar/scrollbar.js".') })


// --------------------
// Request: /node_modules/swiper/modules/parallax/parallax.js
// Parents: 
// - /node_modules/swiper/swiper.esm.js ($id_d1eb9a9e)
// Dependencies: 

// --------------------
const $id_2bc0dda6 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///C:/Users/acer/Desktop/ganpatjangra.me/node_modules/swiper/modules/parallax/parallax.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "C:/Users/acer/Desktop/ganpatjangra.me/node_modules/swiper/modules/parallax/parallax.js".') })


// --------------------
// Request: /node_modules/swiper/modules/zoom/zoom.js
// Parents: 
// - /node_modules/swiper/swiper.esm.js ($id_d1eb9a9e)
// Dependencies: 

// --------------------
const $id_b6094d1d = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///C:/Users/acer/Desktop/ganpatjangra.me/node_modules/swiper/modules/zoom/zoom.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "C:/Users/acer/Desktop/ganpatjangra.me/node_modules/swiper/modules/zoom/zoom.js".') })


// --------------------
// Request: /node_modules/swiper/modules/lazy/lazy.js
// Parents: 
// - /node_modules/swiper/swiper.esm.js ($id_d1eb9a9e)
// Dependencies: 

// --------------------
const $id_27878f55 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///C:/Users/acer/Desktop/ganpatjangra.me/node_modules/swiper/modules/lazy/lazy.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "C:/Users/acer/Desktop/ganpatjangra.me/node_modules/swiper/modules/lazy/lazy.js".') })


// --------------------
// Request: /node_modules/swiper/modules/controller/controller.js
// Parents: 
// - /node_modules/swiper/swiper.esm.js ($id_d1eb9a9e)
// Dependencies: 

// --------------------
const $id_224f2e59 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///C:/Users/acer/Desktop/ganpatjangra.me/node_modules/swiper/modules/controller/controller.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "C:/Users/acer/Desktop/ganpatjangra.me/node_modules/swiper/modules/controller/controller.js".') })


// --------------------
// Request: /node_modules/swiper/modules/a11y/a11y.js
// Parents: 
// - /node_modules/swiper/swiper.esm.js ($id_d1eb9a9e)
// Dependencies: 

// --------------------
const $id_7fc5b0be = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///C:/Users/acer/Desktop/ganpatjangra.me/node_modules/swiper/modules/a11y/a11y.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "C:/Users/acer/Desktop/ganpatjangra.me/node_modules/swiper/modules/a11y/a11y.js".') })


// --------------------
// Request: /node_modules/swiper/modules/history/history.js
// Parents: 
// - /node_modules/swiper/swiper.esm.js ($id_d1eb9a9e)
// Dependencies: 

// --------------------
const $id_f5205ad9 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///C:/Users/acer/Desktop/ganpatjangra.me/node_modules/swiper/modules/history/history.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "C:/Users/acer/Desktop/ganpatjangra.me/node_modules/swiper/modules/history/history.js".') })


// --------------------
// Request: /node_modules/swiper/modules/hash-navigation/hash-navigation.js
// Parents: 
// - /node_modules/swiper/swiper.esm.js ($id_d1eb9a9e)
// Dependencies: 

// --------------------
const $id_39f6940c = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///C:/Users/acer/Desktop/ganpatjangra.me/node_modules/swiper/modules/hash-navigation/hash-navigation.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "C:/Users/acer/Desktop/ganpatjangra.me/node_modules/swiper/modules/hash-navigation/hash-navigation.js".') })


// --------------------
// Request: /node_modules/swiper/modules/autoplay/autoplay.js
// Parents: 
// - /node_modules/swiper/swiper.esm.js ($id_d1eb9a9e)
// Dependencies: 

// --------------------
const $id_11d42465 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///C:/Users/acer/Desktop/ganpatjangra.me/node_modules/swiper/modules/autoplay/autoplay.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "C:/Users/acer/Desktop/ganpatjangra.me/node_modules/swiper/modules/autoplay/autoplay.js".') })


// --------------------
// Request: /node_modules/swiper/modules/thumbs/thumbs.js
// Parents: 
// - /node_modules/swiper/swiper.esm.js ($id_d1eb9a9e)
// Dependencies: 

// --------------------
const $id_7f241531 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///C:/Users/acer/Desktop/ganpatjangra.me/node_modules/swiper/modules/thumbs/thumbs.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "C:/Users/acer/Desktop/ganpatjangra.me/node_modules/swiper/modules/thumbs/thumbs.js".') })


// --------------------
// Request: /node_modules/swiper/modules/free-mode/free-mode.js
// Parents: 
// - /node_modules/swiper/swiper.esm.js ($id_d1eb9a9e)
// Dependencies: 

// --------------------
const $id_adae43c1 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///C:/Users/acer/Desktop/ganpatjangra.me/node_modules/swiper/modules/free-mode/free-mode.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "C:/Users/acer/Desktop/ganpatjangra.me/node_modules/swiper/modules/free-mode/free-mode.js".') })


// --------------------
// Request: /node_modules/swiper/modules/grid/grid.js
// Parents: 
// - /node_modules/swiper/swiper.esm.js ($id_d1eb9a9e)
// Dependencies: 

// --------------------
const $id_be08b669 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///C:/Users/acer/Desktop/ganpatjangra.me/node_modules/swiper/modules/grid/grid.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "C:/Users/acer/Desktop/ganpatjangra.me/node_modules/swiper/modules/grid/grid.js".') })


// --------------------
// Request: /node_modules/swiper/modules/manipulation/manipulation.js
// Parents: 
// - /node_modules/swiper/swiper.esm.js ($id_d1eb9a9e)
// Dependencies: 

// --------------------
const $id_9ffdf8ef = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///C:/Users/acer/Desktop/ganpatjangra.me/node_modules/swiper/modules/manipulation/manipulation.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "C:/Users/acer/Desktop/ganpatjangra.me/node_modules/swiper/modules/manipulation/manipulation.js".') })


// --------------------
// Request: /node_modules/swiper/modules/effect-fade/effect-fade.js
// Parents: 
// - /node_modules/swiper/swiper.esm.js ($id_d1eb9a9e)
// Dependencies: 

// --------------------
const $id_ed5701f6 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///C:/Users/acer/Desktop/ganpatjangra.me/node_modules/swiper/modules/effect-fade/effect-fade.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "C:/Users/acer/Desktop/ganpatjangra.me/node_modules/swiper/modules/effect-fade/effect-fade.js".') })


// --------------------
// Request: /node_modules/swiper/modules/effect-cube/effect-cube.js
// Parents: 
// - /node_modules/swiper/swiper.esm.js ($id_d1eb9a9e)
// Dependencies: 

// --------------------
const $id_03914d04 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///C:/Users/acer/Desktop/ganpatjangra.me/node_modules/swiper/modules/effect-cube/effect-cube.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "C:/Users/acer/Desktop/ganpatjangra.me/node_modules/swiper/modules/effect-cube/effect-cube.js".') })


// --------------------
// Request: /node_modules/swiper/modules/effect-flip/effect-flip.js
// Parents: 
// - /node_modules/swiper/swiper.esm.js ($id_d1eb9a9e)
// Dependencies: 

// --------------------
const $id_24c07261 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///C:/Users/acer/Desktop/ganpatjangra.me/node_modules/swiper/modules/effect-flip/effect-flip.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "C:/Users/acer/Desktop/ganpatjangra.me/node_modules/swiper/modules/effect-flip/effect-flip.js".') })


// --------------------
// Request: /node_modules/swiper/modules/effect-coverflow/effect-coverflow.js
// Parents: 
// - /node_modules/swiper/swiper.esm.js ($id_d1eb9a9e)
// Dependencies: 

// --------------------
const $id_0ea540eb = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///C:/Users/acer/Desktop/ganpatjangra.me/node_modules/swiper/modules/effect-coverflow/effect-coverflow.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "C:/Users/acer/Desktop/ganpatjangra.me/node_modules/swiper/modules/effect-coverflow/effect-coverflow.js".') })


// --------------------
// Request: /node_modules/swiper/modules/effect-creative/effect-creative.js
// Parents: 
// - /node_modules/swiper/swiper.esm.js ($id_d1eb9a9e)
// Dependencies: 

// --------------------
const $id_3ab2d8b1 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///C:/Users/acer/Desktop/ganpatjangra.me/node_modules/swiper/modules/effect-creative/effect-creative.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "C:/Users/acer/Desktop/ganpatjangra.me/node_modules/swiper/modules/effect-creative/effect-creative.js".') })


// --------------------
// Request: /node_modules/swiper/modules/effect-cards/effect-cards.js
// Parents: 
// - /node_modules/swiper/swiper.esm.js ($id_d1eb9a9e)
// Dependencies: 

// --------------------
const $id_597d31c2 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///C:/Users/acer/Desktop/ganpatjangra.me/node_modules/swiper/modules/effect-cards/effect-cards.js').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "C:/Users/acer/Desktop/ganpatjangra.me/node_modules/swiper/modules/effect-cards/effect-cards.js".') })


// --------------------
// Request: /assets/images/icons8/icons8-f-cute.svg
// Parents: 
// - /components/skills.vue ($id_43fa255d)
// Dependencies: 

// --------------------
const $id_6417dc97 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/images/icons8/icons8-f-cute.svg";
}


// --------------------
// Request: /assets/images/mycollection/html-5.svg
// Parents: 
// - /components/skills.vue ($id_43fa255d)
// - /components/project.vue ($id_9aa3dd9e)
// Dependencies: 

// --------------------
const $id_9d898b84 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/images/mycollection/html-5.svg";
}


// --------------------
// Request: /assets/images/mycollection/css3.svg
// Parents: 
// - /components/skills.vue ($id_43fa255d)
// Dependencies: 

// --------------------
const $id_687c4c7a = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/images/mycollection/css3.svg";
}


// --------------------
// Request: /assets/images/mycollection/tailwindcss.svg
// Parents: 
// - /components/skills.vue ($id_43fa255d)
// - /components/project.vue ($id_9aa3dd9e)
// Dependencies: 

// --------------------
const $id_efe33b41 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/images/mycollection/tailwindcss.svg";
}


// --------------------
// Request: /assets/images/mycollection/javascript.svg
// Parents: 
// - /components/skills.vue ($id_43fa255d)
// - /components/project.vue ($id_9aa3dd9e)
// Dependencies: 

// --------------------
const $id_188644a4 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/images/mycollection/javascript.svg";
}


// --------------------
// Request: /assets/images/mycollection/vue.svg
// Parents: 
// - /components/skills.vue ($id_43fa255d)
// - /components/project.vue ($id_9aa3dd9e)
// Dependencies: 

// --------------------
const $id_abef9de1 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/images/mycollection/vue.svg";
}


// --------------------
// Request: /assets/images/mycollection/nuxt.svg
// Parents: 
// - /components/skills.vue ($id_43fa255d)
// - /components/project.vue ($id_9aa3dd9e)
// Dependencies: 

// --------------------
const $id_b2bb126b = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/images/mycollection/nuxt.svg";
}


// --------------------
// Request: /assets/images/icons8/icons8-b-cute.svg
// Parents: 
// - /components/skills.vue ($id_43fa255d)
// Dependencies: 

// --------------------
const $id_5321ef9e = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/images/icons8/icons8-b-cute.svg";
}


// --------------------
// Request: /assets/images/mycollection/expressjs-icon.svg
// Parents: 
// - /components/skills.vue ($id_43fa255d)
// Dependencies: 

// --------------------
const $id_25e013d0 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/images/mycollection/expressjs-icon.svg";
}


// --------------------
// Request: /assets/images/mycollection/mongodb-icon.svg
// Parents: 
// - /components/skills.vue ($id_43fa255d)
// Dependencies: 

// --------------------
const $id_6efcfe6b = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/images/mycollection/mongodb-icon.svg";
}


// --------------------
// Request: /assets/images/mycollection/mariadb-icon.svg
// Parents: 
// - /components/skills.vue ($id_43fa255d)
// Dependencies: 

// --------------------
const $id_da57e3e6 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/images/mycollection/mariadb-icon.svg";
}


// --------------------
// Request: /assets/images/icons8/icons8-o-cute.svg
// Parents: 
// - /components/skills.vue ($id_43fa255d)
// Dependencies: 

// --------------------
const $id_b6503303 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/images/icons8/icons8-o-cute.svg";
}


// --------------------
// Request: /assets/images/mycollection/wordpress-icon.svg
// Parents: 
// - /components/skills.vue ($id_43fa255d)
// Dependencies: 

// --------------------
const $id_9d8e64d7 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/images/mycollection/wordpress-icon.svg";
}


// --------------------
// Request: /assets/images/mycollection/canva-icon.svg
// Parents: 
// - /components/skills.vue ($id_43fa255d)
// Dependencies: 

// --------------------
const $id_bc6cd90f = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/images/mycollection/canva-icon.svg";
}


// --------------------
// Request: /assets/images/mycollection/vscode.svg
// Parents: 
// - /components/skills.vue ($id_43fa255d)
// Dependencies: 

// --------------------
const $id_1b35e04e = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/images/mycollection/vscode.svg";
}


// --------------------
// Request: /assets/images/mycollection/git.svg
// Parents: 
// - /components/skills.vue ($id_43fa255d)
// Dependencies: 

// --------------------
const $id_8f65d5a4 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/images/mycollection/git.svg";
}


// --------------------
// Request: /assets/images/mycollection/digitalocean-icon.svg
// Parents: 
// - /components/skills.vue ($id_43fa255d)
// Dependencies: 

// --------------------
const $id_a2d143a7 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/images/mycollection/digitalocean-icon.svg";
}


// --------------------
// Request: /components/skills.vue?vue&type=style&index=0&lang.css
// Parents: 
// - /components/skills.vue ($id_43fa255d)
// Dependencies: 

// --------------------
const $id_cfe411c4 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.swiper-pagination-bullet {\r\n  height: 15px;\r\n  width: 15px;\r\n\r\n  background-color: red;\n}\n.swiper-button-next,\r\n.swiper-button-prev {\r\n  color: gray;\r\n  top: 5%;\r\n  height: 100%;\r\n  width: 80px;\n}\n.swiper-button-next:hover {\r\n  opacity: 0.2;\r\n\r\n  margin-bottom: 20px;\r\n  background: #e9e9ef;\n}\n.swiper-button-prev:hover {\r\n  opacity: 0.2;\r\n  border-radius: 20px;\r\n  background: #e9e9ef;\n}\r\n";
}


// --------------------
// Request: /components/project.vue
// Parents: 
// - /pages/index.vue ($id_cca58e97)
// - /@id/__x00__virtual:C:/Users/acer/Desktop/ganpatjangra.me/.nuxt/components.mjs ($id_46c29c57)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/swiper/vue/swiper-vue.js ($id_72e3deca)
// - /node_modules/swiper/swiper.min.css ($id_9d54fdba)
// - /node_modules/swiper/modules/pagination/pagination.min.css ($id_d3ef010f)
// - /node_modules/swiper/modules/free-mode/free-mode.min.css ($id_6f2c3b0e)
// - /node_modules/swiper/modules/navigation/navigation.min.css ($id_9b8672f2)
// - /node_modules/swiper/modules/thumbs/thumbs.min.css ($id_14412fe5)
// - /node_modules/swiper/swiper.esm.js ($id_d1eb9a9e)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /assets/images/icons8/icons8-broadcasting.svg ($id_c5664f3a)
// - /assets/images/team/placeholder-photo.png ($id_2895cd70)
// - /assets/images/mycollection/html-5.svg ($id_9d898b84)
// - /assets/images/mycollection/tailwindcss.svg ($id_efe33b41)
// - /assets/images/mycollection/javascript.svg ($id_188644a4)
// - /assets/images/mycollection/vue.svg ($id_abef9de1)
// - /assets/images/mycollection/nuxt.svg ($id_b2bb126b)
// - /assets/images/team/photo4.png ($id_5e76e404)
// - /assets/images/team/dots.svg ($id_ed8d99e0)
// - /assets/images/team/dots2.svg ($id_e24d19d5)
// - /assets/images/team/quote.png ($id_4c8c4a03)
// - /components/project.vue?vue&type=style&index=0&lang.css ($id_ebf4cadc)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_9aa3dd9e = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


// Import Swiper Vue.js components
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/swiper/vue/swiper-vue.js");


// Import Swiper styles
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/swiper/swiper.min.css");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/swiper/modules/pagination/pagination.min.css");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/swiper/modules/free-mode/free-mode.min.css");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/swiper/modules/navigation/navigation.min.css");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/swiper/modules/thumbs/thumbs.min.css");


// import "./style.css";

// import Swiper core and required modules
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/swiper/swiper.esm.js");


// install Swiper modules
__vite_ssr_import_7__.default.use([__vite_ssr_import_7__.FreeMode, __vite_ssr_import_7__.Navigation, __vite_ssr_import_7__.Thumbs, __vite_ssr_import_7__.Pagination]);

const _sfc_main = {
  head: {
    title: "Projects",
    meta: [
      {
        hid: "description",
        name: "MEVN developer | website developer",
        content: "I am create multiple websites and also modified existing websites.",
      },
    ],
  },
  components: {
    Swiper: __vite_ssr_import_1__.Swiper,
    SwiperSlide: __vite_ssr_import_1__.SwiperSlide,
  },
  data() {
    return {
      thumbsSwiper: null,
    };
  },
  methods: {
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
    },
  },
};

const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

const __vite_ssr_import_10__ = await __vite_ssr_import__("/assets/images/icons8/icons8-broadcasting.svg");

const __vite_ssr_import_11__ = await __vite_ssr_import__("/assets/images/team/placeholder-photo.png");

const __vite_ssr_import_12__ = await __vite_ssr_import__("/assets/images/mycollection/html-5.svg");

const __vite_ssr_import_13__ = await __vite_ssr_import__("/assets/images/mycollection/tailwindcss.svg");

const __vite_ssr_import_14__ = await __vite_ssr_import__("/assets/images/mycollection/javascript.svg");

const __vite_ssr_import_15__ = await __vite_ssr_import__("/assets/images/mycollection/vue.svg");

const __vite_ssr_import_16__ = await __vite_ssr_import__("/assets/images/mycollection/nuxt.svg");

const __vite_ssr_import_17__ = await __vite_ssr_import__("/assets/images/team/photo4.png");

const __vite_ssr_import_18__ = await __vite_ssr_import__("/assets/images/team/dots.svg");

const __vite_ssr_import_19__ = await __vite_ssr_import__("/assets/images/team/dots2.svg");

const __vite_ssr_import_20__ = await __vite_ssr_import__("/assets/images/team/quote.png");



function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = __vite_ssr_import_8__.resolveComponent("swiper")
  const _component_swiper_slide = __vite_ssr_import_8__.resolveComponent("swiper-slide")

  _push(`<section${__vite_ssr_import_9__.ssrRenderAttrs(__vite_ssr_import_8__.mergeProps({ class: "bg-white xl:pt-20" }, _attrs))}><div class="container px-4 mx-auto"><div class="relative flex flex-wrap -mx-4"><div class="w-full px-4 lg:w-1/2"><div class="text-center"><h2 class="mb-20 font-medium xl:mt-8 xl:mb-16 text-9xl md:text-10xl xl:text-11xl font-heading">Projects</h2></div><div class="flex flex-wrap justify-center mb-20 -mx-1 xl:flex-nowrap lg:px-10">`)
  _push(__vite_ssr_import_9__.ssrRenderComponent(_component_swiper, {
    spaceBetween: 10,
    pagination: { dynamicBullets: true, clickable: true },
    modules: _ctx.modules,
    thumbs: { swiper: $data.thumbsSwiper },
    class: "mx-10 select-none mySwiper2"
  }, {
    default: __vite_ssr_import_8__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(__vite_ssr_import_9__.ssrRenderComponent(_component_swiper_slide, null, {
          default: __vite_ssr_import_8__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<div class="w-full px-1 mb-4 xl:w-auto xl:mb-0"${
                _scopeId
              }><div class="px-6 pt-10 pb-12 mb-10 text-center shadow-sm bg-gray-50 rounded-7xl shadow-gray-300"${
                _scopeId
              }><div class="flex items-center justify-center mb-8 -mt-8"${
                _scopeId
              }><h4 class="text-xl font-medium uppercase font-heading"${
                _scopeId
              }>Project TechnologieS</h4><img${
                __vite_ssr_import_9__.ssrRenderAttr("src", __vite_ssr_import_10__.default)
              } alt=""${
                _scopeId
              }></div><div class="flex flex-col justify-between sm:flex-row lg:mx-14"${
                _scopeId
              }><div${
                _scopeId
              }><img class="w-20 h-20 mx-auto mb-5"${
                __vite_ssr_import_9__.ssrRenderAttr("src", __vite_ssr_import_11__.default)
              } alt=""${
                _scopeId
              }></div><!-- <div class="flex sm:space-x-20 mb-14"> --><div class="flex flex-col"${
                _scopeId
              }><h1 class="flex items-center uppercase"${
                _scopeId
              }><img class="w-6 mr-2"${
                __vite_ssr_import_9__.ssrRenderAttr("src", __vite_ssr_import_12__.default)
              } alt=""${
                _scopeId
              }>html</h1><h1 class="flex items-center uppercase"${
                _scopeId
              }><img class="w-6 mr-2"${
                __vite_ssr_import_9__.ssrRenderAttr("src", __vite_ssr_import_13__.default)
              } alt=""${
                _scopeId
              }>tailwind css</h1><h1 class="flex items-center uppercase"${
                _scopeId
              }><img class="w-6 mr-2"${
                __vite_ssr_import_9__.ssrRenderAttr("src", __vite_ssr_import_14__.default)
              } alt=""${
                _scopeId
              }>java</h1></div><div${
                _scopeId
              }><h1 class="flex items-center uppercase"${
                _scopeId
              }><img class="w-6 mr-2"${
                __vite_ssr_import_9__.ssrRenderAttr("src", __vite_ssr_import_15__.default)
              } alt=""${
                _scopeId
              }>vue js</h1><h1 class="flex items-center uppercase"${
                _scopeId
              }><img class="w-6 mr-2"${
                __vite_ssr_import_9__.ssrRenderAttr("src", __vite_ssr_import_16__.default)
              } alt=""${
                _scopeId
              }>nuxt js</h1></div><!-- </div> --></div><span class="p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900"${
                _scopeId
              }>Founder</span></div></div>`)
            } else {
              return [
                __vite_ssr_import_8__.createVNode("div", { class: "w-full px-1 mb-4 xl:w-auto xl:mb-0" }, [
                  __vite_ssr_import_8__.createVNode("div", { class: "px-6 pt-10 pb-12 mb-10 text-center shadow-sm bg-gray-50 rounded-7xl shadow-gray-300" }, [
                    __vite_ssr_import_8__.createVNode("div", { class: "flex items-center justify-center mb-8 -mt-8" }, [
                      __vite_ssr_import_8__.createVNode("h4", { class: "text-xl font-medium uppercase font-heading" }, "Project TechnologieS"),
                      __vite_ssr_import_8__.createVNode("img", {
                        src: __vite_ssr_import_10__.default,
                        alt: ""
                      })
                    ]),
                    __vite_ssr_import_8__.createVNode("div", { class: "flex flex-col justify-between sm:flex-row lg:mx-14" }, [
                      __vite_ssr_import_8__.createVNode("div", null, [
                        __vite_ssr_import_8__.createVNode("img", {
                          class: "w-20 h-20 mx-auto mb-5",
                          src: __vite_ssr_import_11__.default,
                          alt: ""
                        })
                      ]),
                      __vite_ssr_import_8__.createCommentVNode(" <div class=\"flex sm:space-x-20 mb-14\"> "),
                      __vite_ssr_import_8__.createVNode("div", { class: "flex flex-col" }, [
                        __vite_ssr_import_8__.createVNode("h1", { class: "flex items-center uppercase" }, [
                          __vite_ssr_import_8__.createVNode("img", {
                            class: "w-6 mr-2",
                            src: __vite_ssr_import_12__.default,
                            alt: ""
                          }),
                          __vite_ssr_import_8__.createTextVNode("html")
                        ]),
                        __vite_ssr_import_8__.createVNode("h1", { class: "flex items-center uppercase" }, [
                          __vite_ssr_import_8__.createVNode("img", {
                            class: "w-6 mr-2",
                            src: __vite_ssr_import_13__.default,
                            alt: ""
                          }),
                          __vite_ssr_import_8__.createTextVNode("tailwind css")
                        ]),
                        __vite_ssr_import_8__.createVNode("h1", { class: "flex items-center uppercase" }, [
                          __vite_ssr_import_8__.createVNode("img", {
                            class: "w-6 mr-2",
                            src: __vite_ssr_import_14__.default,
                            alt: ""
                          }),
                          __vite_ssr_import_8__.createTextVNode("java")
                        ])
                      ]),
                      __vite_ssr_import_8__.createVNode("div", null, [
                        __vite_ssr_import_8__.createVNode("h1", { class: "flex items-center uppercase" }, [
                          __vite_ssr_import_8__.createVNode("img", {
                            class: "w-6 mr-2",
                            src: __vite_ssr_import_15__.default,
                            alt: ""
                          }),
                          __vite_ssr_import_8__.createTextVNode("vue js")
                        ]),
                        __vite_ssr_import_8__.createVNode("h1", { class: "flex items-center uppercase" }, [
                          __vite_ssr_import_8__.createVNode("img", {
                            class: "w-6 mr-2",
                            src: __vite_ssr_import_16__.default,
                            alt: ""
                          }),
                          __vite_ssr_import_8__.createTextVNode("nuxt js")
                        ])
                      ]),
                      __vite_ssr_import_8__.createCommentVNode(" </div> ")
                    ]),
                    __vite_ssr_import_8__.createVNode("span", { class: "p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900" }, "Founder")
                  ])
                ])
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(__vite_ssr_import_9__.ssrRenderComponent(_component_swiper_slide, null, {
          default: __vite_ssr_import_8__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<div class="w-full px-1 mb-4 xl:w-auto xl:mb-0"${
                _scopeId
              }><div class="px-6 pt-10 pb-12 mb-10 text-center shadow-sm bg-gray-50 rounded-7xl shadow-gray-300"${
                _scopeId
              }><div class="flex items-center justify-center mb-8 -mt-8"${
                _scopeId
              }><h4 class="text-xl font-medium uppercase font-heading"${
                _scopeId
              }>Project TechnologieS</h4><img${
                __vite_ssr_import_9__.ssrRenderAttr("src", __vite_ssr_import_10__.default)
              } alt=""${
                _scopeId
              }></div><div class="flex flex-col items-center justify-between sm:flex-row"${
                _scopeId
              }><img class="w-20 pb-6 mx-auto rounded-md sm:w-40"${
                __vite_ssr_import_9__.ssrRenderAttr("src", __vite_ssr_import_17__.default)
              } alt=""${
                _scopeId
              }><div class="flex space-x-8 sm:space-x-20"${
                _scopeId
              }><div${
                _scopeId
              }><h1 class="flex items-center uppercase"${
                _scopeId
              }><img class="w-6 mr-2"${
                __vite_ssr_import_9__.ssrRenderAttr("src", __vite_ssr_import_12__.default)
              } alt=""${
                _scopeId
              }>html</h1><h1 class="flex items-center uppercase"${
                _scopeId
              }><img class="w-6 mr-2"${
                __vite_ssr_import_9__.ssrRenderAttr("src", __vite_ssr_import_13__.default)
              } alt=""${
                _scopeId
              }>tailwind css</h1><h1 class="flex items-center uppercase"${
                _scopeId
              }><img class="w-6 mr-2"${
                __vite_ssr_import_9__.ssrRenderAttr("src", __vite_ssr_import_14__.default)
              } alt=""${
                _scopeId
              }>java</h1></div><div${
                _scopeId
              }><h1 class="flex items-center uppercase"${
                _scopeId
              }><img class="w-6 mr-2"${
                __vite_ssr_import_9__.ssrRenderAttr("src", __vite_ssr_import_15__.default)
              } alt=""${
                _scopeId
              }>vue js</h1><h1 class="flex items-center uppercase"${
                _scopeId
              }><img class="w-6 mr-2"${
                __vite_ssr_import_9__.ssrRenderAttr("src", __vite_ssr_import_16__.default)
              } alt=""${
                _scopeId
              }>nuxt js</h1></div></div></div><span class="p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900"${
                _scopeId
              }>Founder</span></div></div>`)
            } else {
              return [
                __vite_ssr_import_8__.createVNode("div", { class: "w-full px-1 mb-4 xl:w-auto xl:mb-0" }, [
                  __vite_ssr_import_8__.createVNode("div", { class: "px-6 pt-10 pb-12 mb-10 text-center shadow-sm bg-gray-50 rounded-7xl shadow-gray-300" }, [
                    __vite_ssr_import_8__.createVNode("div", { class: "flex items-center justify-center mb-8 -mt-8" }, [
                      __vite_ssr_import_8__.createVNode("h4", { class: "text-xl font-medium uppercase font-heading" }, "Project TechnologieS"),
                      __vite_ssr_import_8__.createVNode("img", {
                        src: __vite_ssr_import_10__.default,
                        alt: ""
                      })
                    ]),
                    __vite_ssr_import_8__.createVNode("div", { class: "flex flex-col items-center justify-between sm:flex-row" }, [
                      __vite_ssr_import_8__.createVNode("img", {
                        class: "w-20 pb-6 mx-auto rounded-md sm:w-40",
                        src: __vite_ssr_import_17__.default,
                        alt: ""
                      }),
                      __vite_ssr_import_8__.createVNode("div", { class: "flex space-x-8 sm:space-x-20" }, [
                        __vite_ssr_import_8__.createVNode("div", null, [
                          __vite_ssr_import_8__.createVNode("h1", { class: "flex items-center uppercase" }, [
                            __vite_ssr_import_8__.createVNode("img", {
                              class: "w-6 mr-2",
                              src: __vite_ssr_import_12__.default,
                              alt: ""
                            }),
                            __vite_ssr_import_8__.createTextVNode("html")
                          ]),
                          __vite_ssr_import_8__.createVNode("h1", { class: "flex items-center uppercase" }, [
                            __vite_ssr_import_8__.createVNode("img", {
                              class: "w-6 mr-2",
                              src: __vite_ssr_import_13__.default,
                              alt: ""
                            }),
                            __vite_ssr_import_8__.createTextVNode("tailwind css")
                          ]),
                          __vite_ssr_import_8__.createVNode("h1", { class: "flex items-center uppercase" }, [
                            __vite_ssr_import_8__.createVNode("img", {
                              class: "w-6 mr-2",
                              src: __vite_ssr_import_14__.default,
                              alt: ""
                            }),
                            __vite_ssr_import_8__.createTextVNode("java")
                          ])
                        ]),
                        __vite_ssr_import_8__.createVNode("div", null, [
                          __vite_ssr_import_8__.createVNode("h1", { class: "flex items-center uppercase" }, [
                            __vite_ssr_import_8__.createVNode("img", {
                              class: "w-6 mr-2",
                              src: __vite_ssr_import_15__.default,
                              alt: ""
                            }),
                            __vite_ssr_import_8__.createTextVNode("vue js")
                          ]),
                          __vite_ssr_import_8__.createVNode("h1", { class: "flex items-center uppercase" }, [
                            __vite_ssr_import_8__.createVNode("img", {
                              class: "w-6 mr-2",
                              src: __vite_ssr_import_16__.default,
                              alt: ""
                            }),
                            __vite_ssr_import_8__.createTextVNode("nuxt js")
                          ])
                        ])
                      ])
                    ]),
                    __vite_ssr_import_8__.createVNode("span", { class: "p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900" }, "Founder")
                  ])
                ])
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(__vite_ssr_import_9__.ssrRenderComponent(_component_swiper_slide, null, {
          default: __vite_ssr_import_8__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<div class="w-full px-1 mb-4 xl:w-auto xl:mb-0"${
                _scopeId
              }><div class="px-6 pt-10 pb-12 mb-10 text-center shadow-sm bg-gray-50 rounded-7xl shadow-gray-300"${
                _scopeId
              }><div class="flex items-center justify-center mb-8 -mt-8"${
                _scopeId
              }><h4 class="text-xl font-medium uppercase font-heading"${
                _scopeId
              }>Project TechnologieS</h4><img${
                __vite_ssr_import_9__.ssrRenderAttr("src", __vite_ssr_import_10__.default)
              } alt=""${
                _scopeId
              }></div><div class="flex justify-between"${
                _scopeId
              }><div class="mx-auto"${
                _scopeId
              }><img class="w-20 h-20 mx-auto mb-5"${
                __vite_ssr_import_9__.ssrRenderAttr("src", __vite_ssr_import_11__.default)
              } alt=""${
                _scopeId
              }></div><div class="flex sm:space-x-20 mb-14"${
                _scopeId
              }><div${
                _scopeId
              }><h1 class="flex items-center uppercase"${
                _scopeId
              }><img class="w-6 mr-2"${
                __vite_ssr_import_9__.ssrRenderAttr("src", __vite_ssr_import_12__.default)
              } alt=""${
                _scopeId
              }>html</h1><h1 class="flex items-center uppercase"${
                _scopeId
              }><img class="w-6 mr-2"${
                __vite_ssr_import_9__.ssrRenderAttr("src", __vite_ssr_import_13__.default)
              } alt=""${
                _scopeId
              }>tailwind css</h1><h1 class="flex items-center uppercase"${
                _scopeId
              }><img class="w-6 mr-2"${
                __vite_ssr_import_9__.ssrRenderAttr("src", __vite_ssr_import_14__.default)
              } alt=""${
                _scopeId
              }>java</h1></div><div${
                _scopeId
              }><h1 class="flex items-center uppercase"${
                _scopeId
              }><img class="w-6 mr-2"${
                __vite_ssr_import_9__.ssrRenderAttr("src", __vite_ssr_import_15__.default)
              } alt=""${
                _scopeId
              }>vue js</h1><h1 class="flex items-center uppercase"${
                _scopeId
              }><img class="w-6 mr-2"${
                __vite_ssr_import_9__.ssrRenderAttr("src", __vite_ssr_import_16__.default)
              } alt=""${
                _scopeId
              }>nuxt js</h1></div></div></div><span class="p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900"${
                _scopeId
              }>Founder</span></div></div>`)
            } else {
              return [
                __vite_ssr_import_8__.createVNode("div", { class: "w-full px-1 mb-4 xl:w-auto xl:mb-0" }, [
                  __vite_ssr_import_8__.createVNode("div", { class: "px-6 pt-10 pb-12 mb-10 text-center shadow-sm bg-gray-50 rounded-7xl shadow-gray-300" }, [
                    __vite_ssr_import_8__.createVNode("div", { class: "flex items-center justify-center mb-8 -mt-8" }, [
                      __vite_ssr_import_8__.createVNode("h4", { class: "text-xl font-medium uppercase font-heading" }, "Project TechnologieS"),
                      __vite_ssr_import_8__.createVNode("img", {
                        src: __vite_ssr_import_10__.default,
                        alt: ""
                      })
                    ]),
                    __vite_ssr_import_8__.createVNode("div", { class: "flex justify-between" }, [
                      __vite_ssr_import_8__.createVNode("div", { class: "mx-auto" }, [
                        __vite_ssr_import_8__.createVNode("img", {
                          class: "w-20 h-20 mx-auto mb-5",
                          src: __vite_ssr_import_11__.default,
                          alt: ""
                        })
                      ]),
                      __vite_ssr_import_8__.createVNode("div", { class: "flex sm:space-x-20 mb-14" }, [
                        __vite_ssr_import_8__.createVNode("div", null, [
                          __vite_ssr_import_8__.createVNode("h1", { class: "flex items-center uppercase" }, [
                            __vite_ssr_import_8__.createVNode("img", {
                              class: "w-6 mr-2",
                              src: __vite_ssr_import_12__.default,
                              alt: ""
                            }),
                            __vite_ssr_import_8__.createTextVNode("html")
                          ]),
                          __vite_ssr_import_8__.createVNode("h1", { class: "flex items-center uppercase" }, [
                            __vite_ssr_import_8__.createVNode("img", {
                              class: "w-6 mr-2",
                              src: __vite_ssr_import_13__.default,
                              alt: ""
                            }),
                            __vite_ssr_import_8__.createTextVNode("tailwind css")
                          ]),
                          __vite_ssr_import_8__.createVNode("h1", { class: "flex items-center uppercase" }, [
                            __vite_ssr_import_8__.createVNode("img", {
                              class: "w-6 mr-2",
                              src: __vite_ssr_import_14__.default,
                              alt: ""
                            }),
                            __vite_ssr_import_8__.createTextVNode("java")
                          ])
                        ]),
                        __vite_ssr_import_8__.createVNode("div", null, [
                          __vite_ssr_import_8__.createVNode("h1", { class: "flex items-center uppercase" }, [
                            __vite_ssr_import_8__.createVNode("img", {
                              class: "w-6 mr-2",
                              src: __vite_ssr_import_15__.default,
                              alt: ""
                            }),
                            __vite_ssr_import_8__.createTextVNode("vue js")
                          ]),
                          __vite_ssr_import_8__.createVNode("h1", { class: "flex items-center uppercase" }, [
                            __vite_ssr_import_8__.createVNode("img", {
                              class: "w-6 mr-2",
                              src: __vite_ssr_import_16__.default,
                              alt: ""
                            }),
                            __vite_ssr_import_8__.createTextVNode("nuxt js")
                          ])
                        ])
                      ])
                    ]),
                    __vite_ssr_import_8__.createVNode("span", { class: "p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900" }, "Founder")
                  ])
                ])
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
      } else {
        return [
          __vite_ssr_import_8__.createVNode(_component_swiper_slide, null, {
            default: __vite_ssr_import_8__.withCtx(() => [
              __vite_ssr_import_8__.createVNode("div", { class: "w-full px-1 mb-4 xl:w-auto xl:mb-0" }, [
                __vite_ssr_import_8__.createVNode("div", { class: "px-6 pt-10 pb-12 mb-10 text-center shadow-sm bg-gray-50 rounded-7xl shadow-gray-300" }, [
                  __vite_ssr_import_8__.createVNode("div", { class: "flex items-center justify-center mb-8 -mt-8" }, [
                    __vite_ssr_import_8__.createVNode("h4", { class: "text-xl font-medium uppercase font-heading" }, "Project TechnologieS"),
                    __vite_ssr_import_8__.createVNode("img", {
                      src: __vite_ssr_import_10__.default,
                      alt: ""
                    })
                  ]),
                  __vite_ssr_import_8__.createVNode("div", { class: "flex flex-col justify-between sm:flex-row lg:mx-14" }, [
                    __vite_ssr_import_8__.createVNode("div", null, [
                      __vite_ssr_import_8__.createVNode("img", {
                        class: "w-20 h-20 mx-auto mb-5",
                        src: __vite_ssr_import_11__.default,
                        alt: ""
                      })
                    ]),
                    __vite_ssr_import_8__.createCommentVNode(" <div class=\"flex sm:space-x-20 mb-14\"> "),
                    __vite_ssr_import_8__.createVNode("div", { class: "flex flex-col" }, [
                      __vite_ssr_import_8__.createVNode("h1", { class: "flex items-center uppercase" }, [
                        __vite_ssr_import_8__.createVNode("img", {
                          class: "w-6 mr-2",
                          src: __vite_ssr_import_12__.default,
                          alt: ""
                        }),
                        __vite_ssr_import_8__.createTextVNode("html")
                      ]),
                      __vite_ssr_import_8__.createVNode("h1", { class: "flex items-center uppercase" }, [
                        __vite_ssr_import_8__.createVNode("img", {
                          class: "w-6 mr-2",
                          src: __vite_ssr_import_13__.default,
                          alt: ""
                        }),
                        __vite_ssr_import_8__.createTextVNode("tailwind css")
                      ]),
                      __vite_ssr_import_8__.createVNode("h1", { class: "flex items-center uppercase" }, [
                        __vite_ssr_import_8__.createVNode("img", {
                          class: "w-6 mr-2",
                          src: __vite_ssr_import_14__.default,
                          alt: ""
                        }),
                        __vite_ssr_import_8__.createTextVNode("java")
                      ])
                    ]),
                    __vite_ssr_import_8__.createVNode("div", null, [
                      __vite_ssr_import_8__.createVNode("h1", { class: "flex items-center uppercase" }, [
                        __vite_ssr_import_8__.createVNode("img", {
                          class: "w-6 mr-2",
                          src: __vite_ssr_import_15__.default,
                          alt: ""
                        }),
                        __vite_ssr_import_8__.createTextVNode("vue js")
                      ]),
                      __vite_ssr_import_8__.createVNode("h1", { class: "flex items-center uppercase" }, [
                        __vite_ssr_import_8__.createVNode("img", {
                          class: "w-6 mr-2",
                          src: __vite_ssr_import_16__.default,
                          alt: ""
                        }),
                        __vite_ssr_import_8__.createTextVNode("nuxt js")
                      ])
                    ]),
                    __vite_ssr_import_8__.createCommentVNode(" </div> ")
                  ]),
                  __vite_ssr_import_8__.createVNode("span", { class: "p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900" }, "Founder")
                ])
              ])
            ]),
            _: 1 /* STABLE */
          }),
          __vite_ssr_import_8__.createVNode(_component_swiper_slide, null, {
            default: __vite_ssr_import_8__.withCtx(() => [
              __vite_ssr_import_8__.createVNode("div", { class: "w-full px-1 mb-4 xl:w-auto xl:mb-0" }, [
                __vite_ssr_import_8__.createVNode("div", { class: "px-6 pt-10 pb-12 mb-10 text-center shadow-sm bg-gray-50 rounded-7xl shadow-gray-300" }, [
                  __vite_ssr_import_8__.createVNode("div", { class: "flex items-center justify-center mb-8 -mt-8" }, [
                    __vite_ssr_import_8__.createVNode("h4", { class: "text-xl font-medium uppercase font-heading" }, "Project TechnologieS"),
                    __vite_ssr_import_8__.createVNode("img", {
                      src: __vite_ssr_import_10__.default,
                      alt: ""
                    })
                  ]),
                  __vite_ssr_import_8__.createVNode("div", { class: "flex flex-col items-center justify-between sm:flex-row" }, [
                    __vite_ssr_import_8__.createVNode("img", {
                      class: "w-20 pb-6 mx-auto rounded-md sm:w-40",
                      src: __vite_ssr_import_17__.default,
                      alt: ""
                    }),
                    __vite_ssr_import_8__.createVNode("div", { class: "flex space-x-8 sm:space-x-20" }, [
                      __vite_ssr_import_8__.createVNode("div", null, [
                        __vite_ssr_import_8__.createVNode("h1", { class: "flex items-center uppercase" }, [
                          __vite_ssr_import_8__.createVNode("img", {
                            class: "w-6 mr-2",
                            src: __vite_ssr_import_12__.default,
                            alt: ""
                          }),
                          __vite_ssr_import_8__.createTextVNode("html")
                        ]),
                        __vite_ssr_import_8__.createVNode("h1", { class: "flex items-center uppercase" }, [
                          __vite_ssr_import_8__.createVNode("img", {
                            class: "w-6 mr-2",
                            src: __vite_ssr_import_13__.default,
                            alt: ""
                          }),
                          __vite_ssr_import_8__.createTextVNode("tailwind css")
                        ]),
                        __vite_ssr_import_8__.createVNode("h1", { class: "flex items-center uppercase" }, [
                          __vite_ssr_import_8__.createVNode("img", {
                            class: "w-6 mr-2",
                            src: __vite_ssr_import_14__.default,
                            alt: ""
                          }),
                          __vite_ssr_import_8__.createTextVNode("java")
                        ])
                      ]),
                      __vite_ssr_import_8__.createVNode("div", null, [
                        __vite_ssr_import_8__.createVNode("h1", { class: "flex items-center uppercase" }, [
                          __vite_ssr_import_8__.createVNode("img", {
                            class: "w-6 mr-2",
                            src: __vite_ssr_import_15__.default,
                            alt: ""
                          }),
                          __vite_ssr_import_8__.createTextVNode("vue js")
                        ]),
                        __vite_ssr_import_8__.createVNode("h1", { class: "flex items-center uppercase" }, [
                          __vite_ssr_import_8__.createVNode("img", {
                            class: "w-6 mr-2",
                            src: __vite_ssr_import_16__.default,
                            alt: ""
                          }),
                          __vite_ssr_import_8__.createTextVNode("nuxt js")
                        ])
                      ])
                    ])
                  ]),
                  __vite_ssr_import_8__.createVNode("span", { class: "p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900" }, "Founder")
                ])
              ])
            ]),
            _: 1 /* STABLE */
          }),
          __vite_ssr_import_8__.createVNode(_component_swiper_slide, null, {
            default: __vite_ssr_import_8__.withCtx(() => [
              __vite_ssr_import_8__.createVNode("div", { class: "w-full px-1 mb-4 xl:w-auto xl:mb-0" }, [
                __vite_ssr_import_8__.createVNode("div", { class: "px-6 pt-10 pb-12 mb-10 text-center shadow-sm bg-gray-50 rounded-7xl shadow-gray-300" }, [
                  __vite_ssr_import_8__.createVNode("div", { class: "flex items-center justify-center mb-8 -mt-8" }, [
                    __vite_ssr_import_8__.createVNode("h4", { class: "text-xl font-medium uppercase font-heading" }, "Project TechnologieS"),
                    __vite_ssr_import_8__.createVNode("img", {
                      src: __vite_ssr_import_10__.default,
                      alt: ""
                    })
                  ]),
                  __vite_ssr_import_8__.createVNode("div", { class: "flex justify-between" }, [
                    __vite_ssr_import_8__.createVNode("div", { class: "mx-auto" }, [
                      __vite_ssr_import_8__.createVNode("img", {
                        class: "w-20 h-20 mx-auto mb-5",
                        src: __vite_ssr_import_11__.default,
                        alt: ""
                      })
                    ]),
                    __vite_ssr_import_8__.createVNode("div", { class: "flex sm:space-x-20 mb-14" }, [
                      __vite_ssr_import_8__.createVNode("div", null, [
                        __vite_ssr_import_8__.createVNode("h1", { class: "flex items-center uppercase" }, [
                          __vite_ssr_import_8__.createVNode("img", {
                            class: "w-6 mr-2",
                            src: __vite_ssr_import_12__.default,
                            alt: ""
                          }),
                          __vite_ssr_import_8__.createTextVNode("html")
                        ]),
                        __vite_ssr_import_8__.createVNode("h1", { class: "flex items-center uppercase" }, [
                          __vite_ssr_import_8__.createVNode("img", {
                            class: "w-6 mr-2",
                            src: __vite_ssr_import_13__.default,
                            alt: ""
                          }),
                          __vite_ssr_import_8__.createTextVNode("tailwind css")
                        ]),
                        __vite_ssr_import_8__.createVNode("h1", { class: "flex items-center uppercase" }, [
                          __vite_ssr_import_8__.createVNode("img", {
                            class: "w-6 mr-2",
                            src: __vite_ssr_import_14__.default,
                            alt: ""
                          }),
                          __vite_ssr_import_8__.createTextVNode("java")
                        ])
                      ]),
                      __vite_ssr_import_8__.createVNode("div", null, [
                        __vite_ssr_import_8__.createVNode("h1", { class: "flex items-center uppercase" }, [
                          __vite_ssr_import_8__.createVNode("img", {
                            class: "w-6 mr-2",
                            src: __vite_ssr_import_15__.default,
                            alt: ""
                          }),
                          __vite_ssr_import_8__.createTextVNode("vue js")
                        ]),
                        __vite_ssr_import_8__.createVNode("h1", { class: "flex items-center uppercase" }, [
                          __vite_ssr_import_8__.createVNode("img", {
                            class: "w-6 mr-2",
                            src: __vite_ssr_import_16__.default,
                            alt: ""
                          }),
                          __vite_ssr_import_8__.createTextVNode("nuxt js")
                        ])
                      ])
                    ])
                  ]),
                  __vite_ssr_import_8__.createVNode("span", { class: "p-2 text-sm font-bold text-gray-500 uppercase bg-white rounded-full shadow-inner shadow-blueGray-900" }, "Founder")
                ])
              ])
            ]),
            _: 1 /* STABLE */
          })
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></div><img class="absolute top-0 hidden transform translate-x-1/2 xl:block left-1/2"${__vite_ssr_import_9__.ssrRenderAttr("src", __vite_ssr_import_18__.default)} alt=""><div class="w-full px-4 lg:w-1/2"><div class="text-center lg:px-10 md:mb-16"><h2 class="mt-8 font-medium text-9xl md:text-10xl xl:text-11xl font-heading">Details</h2>`)
  _push(__vite_ssr_import_9__.ssrRenderComponent(_component_swiper, {
    spaceBetween: 10,
    slidesPerView: 1,
    freeMode: false,
    watchSlidesProgress: true,
    class: "mx-5 mySwiper"
  }, {
    default: __vite_ssr_import_8__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(__vite_ssr_import_9__.ssrRenderComponent(_component_swiper_slide, null, {
          default: __vite_ssr_import_8__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<img class="block mx-auto mb-12"${
                __vite_ssr_import_9__.ssrRenderAttr("src", __vite_ssr_import_19__.default)
              } alt=""${
                _scopeId
              }><div class="flex items-start mb-10"${
                _scopeId
              }><img class="rotate-180"${
                __vite_ssr_import_9__.ssrRenderAttr("src", __vite_ssr_import_20__.default)
              } alt=""${
                _scopeId
              }><div class="max-w-sm mx-auto text-justify -mt-9"${
                _scopeId
              }><h1 class="mx-2 text-2xl font-medium text-blue-500 capitalize"${
                _scopeId
              }>project Ideas :-</h1><p class="mx-2 text-2xl font-medium"${
                _scopeId
              }> Morbi ut nisl placerat, suscipit urna non, fringilla leo. Aenean mi libero, pretium eu convallis non, feugiat non ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia! </p></div><img${
                __vite_ssr_import_9__.ssrRenderAttr("src", __vite_ssr_import_20__.default)
              } alt=""${
                _scopeId
              }></div>`)
            } else {
              return [
                __vite_ssr_import_8__.createVNode("img", {
                  class: "block mx-auto mb-12",
                  src: __vite_ssr_import_19__.default,
                  alt: ""
                }),
                __vite_ssr_import_8__.createVNode("div", { class: "flex items-start mb-10" }, [
                  __vite_ssr_import_8__.createVNode("img", {
                    class: "rotate-180",
                    src: __vite_ssr_import_20__.default,
                    alt: ""
                  }),
                  __vite_ssr_import_8__.createVNode("div", { class: "max-w-sm mx-auto text-justify -mt-9" }, [
                    __vite_ssr_import_8__.createVNode("h1", { class: "mx-2 text-2xl font-medium text-blue-500 capitalize" }, "project Ideas :-"),
                    __vite_ssr_import_8__.createVNode("p", { class: "mx-2 text-2xl font-medium" }, " Morbi ut nisl placerat, suscipit urna non, fringilla leo. Aenean mi libero, pretium eu convallis non, feugiat non ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia! ")
                  ]),
                  __vite_ssr_import_8__.createVNode("img", {
                    src: __vite_ssr_import_20__.default,
                    alt: ""
                  })
                ])
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(__vite_ssr_import_9__.ssrRenderComponent(_component_swiper_slide, null, {
          default: __vite_ssr_import_8__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<img class="block mx-auto mb-12"${
                __vite_ssr_import_9__.ssrRenderAttr("src", __vite_ssr_import_19__.default)
              } alt=""${
                _scopeId
              }><div class="flex items-start mb-10"${
                _scopeId
              }><img class="rotate-180"${
                __vite_ssr_import_9__.ssrRenderAttr("src", __vite_ssr_import_20__.default)
              } alt=""${
                _scopeId
              }><div class="max-w-sm mx-auto text-justify -mt-9"${
                _scopeId
              }><h1 class="mx-2 text-2xl font-medium text-blue-500 capitalize"${
                _scopeId
              }>project Ideas :-</h1><p class="mx-2 text-2xl font-medium"${
                _scopeId
              }> Morbi ut nisl placerat, suscipit urna non, fringilla leo. Aenean mi libero, pretium eu convallis non, feugiat non ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia! </p></div><img${
                __vite_ssr_import_9__.ssrRenderAttr("src", __vite_ssr_import_20__.default)
              } alt=""${
                _scopeId
              }></div>`)
            } else {
              return [
                __vite_ssr_import_8__.createVNode("img", {
                  class: "block mx-auto mb-12",
                  src: __vite_ssr_import_19__.default,
                  alt: ""
                }),
                __vite_ssr_import_8__.createVNode("div", { class: "flex items-start mb-10" }, [
                  __vite_ssr_import_8__.createVNode("img", {
                    class: "rotate-180",
                    src: __vite_ssr_import_20__.default,
                    alt: ""
                  }),
                  __vite_ssr_import_8__.createVNode("div", { class: "max-w-sm mx-auto text-justify -mt-9" }, [
                    __vite_ssr_import_8__.createVNode("h1", { class: "mx-2 text-2xl font-medium text-blue-500 capitalize" }, "project Ideas :-"),
                    __vite_ssr_import_8__.createVNode("p", { class: "mx-2 text-2xl font-medium" }, " Morbi ut nisl placerat, suscipit urna non, fringilla leo. Aenean mi libero, pretium eu convallis non, feugiat non ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia! ")
                  ]),
                  __vite_ssr_import_8__.createVNode("img", {
                    src: __vite_ssr_import_20__.default,
                    alt: ""
                  })
                ])
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
        _push(__vite_ssr_import_9__.ssrRenderComponent(_component_swiper_slide, null, {
          default: __vite_ssr_import_8__.withCtx((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<img class="block mx-auto mb-12"${
                __vite_ssr_import_9__.ssrRenderAttr("src", __vite_ssr_import_19__.default)
              } alt=""${
                _scopeId
              }><div class="flex items-start mb-10"${
                _scopeId
              }><img class="rotate-180"${
                __vite_ssr_import_9__.ssrRenderAttr("src", __vite_ssr_import_20__.default)
              } alt=""${
                _scopeId
              }><div class="max-w-sm mx-auto text-justify -mt-9"${
                _scopeId
              }><h1 class="mx-2 text-2xl font-medium text-blue-500 capitalize"${
                _scopeId
              }>project Ideas :-</h1><p class="mx-2 text-2xl font-medium"${
                _scopeId
              }> Morbi ut nisl placerat, suscipit urna non, fringilla leo. Aenean mi libero, pretium eu convallis non, feugiat non ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia! </p></div><img${
                __vite_ssr_import_9__.ssrRenderAttr("src", __vite_ssr_import_20__.default)
              } alt=""${
                _scopeId
              }></div>`)
            } else {
              return [
                __vite_ssr_import_8__.createVNode("img", {
                  class: "block mx-auto mb-12",
                  src: __vite_ssr_import_19__.default,
                  alt: ""
                }),
                __vite_ssr_import_8__.createVNode("div", { class: "flex items-start mb-10" }, [
                  __vite_ssr_import_8__.createVNode("img", {
                    class: "rotate-180",
                    src: __vite_ssr_import_20__.default,
                    alt: ""
                  }),
                  __vite_ssr_import_8__.createVNode("div", { class: "max-w-sm mx-auto text-justify -mt-9" }, [
                    __vite_ssr_import_8__.createVNode("h1", { class: "mx-2 text-2xl font-medium text-blue-500 capitalize" }, "project Ideas :-"),
                    __vite_ssr_import_8__.createVNode("p", { class: "mx-2 text-2xl font-medium" }, " Morbi ut nisl placerat, suscipit urna non, fringilla leo. Aenean mi libero, pretium eu convallis non, feugiat non ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia! ")
                  ]),
                  __vite_ssr_import_8__.createVNode("img", {
                    src: __vite_ssr_import_20__.default,
                    alt: ""
                  })
                ])
              ]
            }
          }),
          _: 1 /* STABLE */
        }, _parent, _scopeId))
      } else {
        return [
          __vite_ssr_import_8__.createVNode(_component_swiper_slide, null, {
            default: __vite_ssr_import_8__.withCtx(() => [
              __vite_ssr_import_8__.createVNode("img", {
                class: "block mx-auto mb-12",
                src: __vite_ssr_import_19__.default,
                alt: ""
              }),
              __vite_ssr_import_8__.createVNode("div", { class: "flex items-start mb-10" }, [
                __vite_ssr_import_8__.createVNode("img", {
                  class: "rotate-180",
                  src: __vite_ssr_import_20__.default,
                  alt: ""
                }),
                __vite_ssr_import_8__.createVNode("div", { class: "max-w-sm mx-auto text-justify -mt-9" }, [
                  __vite_ssr_import_8__.createVNode("h1", { class: "mx-2 text-2xl font-medium text-blue-500 capitalize" }, "project Ideas :-"),
                  __vite_ssr_import_8__.createVNode("p", { class: "mx-2 text-2xl font-medium" }, " Morbi ut nisl placerat, suscipit urna non, fringilla leo. Aenean mi libero, pretium eu convallis non, feugiat non ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia! ")
                ]),
                __vite_ssr_import_8__.createVNode("img", {
                  src: __vite_ssr_import_20__.default,
                  alt: ""
                })
              ])
            ]),
            _: 1 /* STABLE */
          }),
          __vite_ssr_import_8__.createVNode(_component_swiper_slide, null, {
            default: __vite_ssr_import_8__.withCtx(() => [
              __vite_ssr_import_8__.createVNode("img", {
                class: "block mx-auto mb-12",
                src: __vite_ssr_import_19__.default,
                alt: ""
              }),
              __vite_ssr_import_8__.createVNode("div", { class: "flex items-start mb-10" }, [
                __vite_ssr_import_8__.createVNode("img", {
                  class: "rotate-180",
                  src: __vite_ssr_import_20__.default,
                  alt: ""
                }),
                __vite_ssr_import_8__.createVNode("div", { class: "max-w-sm mx-auto text-justify -mt-9" }, [
                  __vite_ssr_import_8__.createVNode("h1", { class: "mx-2 text-2xl font-medium text-blue-500 capitalize" }, "project Ideas :-"),
                  __vite_ssr_import_8__.createVNode("p", { class: "mx-2 text-2xl font-medium" }, " Morbi ut nisl placerat, suscipit urna non, fringilla leo. Aenean mi libero, pretium eu convallis non, feugiat non ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia! ")
                ]),
                __vite_ssr_import_8__.createVNode("img", {
                  src: __vite_ssr_import_20__.default,
                  alt: ""
                })
              ])
            ]),
            _: 1 /* STABLE */
          }),
          __vite_ssr_import_8__.createVNode(_component_swiper_slide, null, {
            default: __vite_ssr_import_8__.withCtx(() => [
              __vite_ssr_import_8__.createVNode("img", {
                class: "block mx-auto mb-12",
                src: __vite_ssr_import_19__.default,
                alt: ""
              }),
              __vite_ssr_import_8__.createVNode("div", { class: "flex items-start mb-10" }, [
                __vite_ssr_import_8__.createVNode("img", {
                  class: "rotate-180",
                  src: __vite_ssr_import_20__.default,
                  alt: ""
                }),
                __vite_ssr_import_8__.createVNode("div", { class: "max-w-sm mx-auto text-justify -mt-9" }, [
                  __vite_ssr_import_8__.createVNode("h1", { class: "mx-2 text-2xl font-medium text-blue-500 capitalize" }, "project Ideas :-"),
                  __vite_ssr_import_8__.createVNode("p", { class: "mx-2 text-2xl font-medium" }, " Morbi ut nisl placerat, suscipit urna non, fringilla leo. Aenean mi libero, pretium eu convallis non, feugiat non ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia! ")
                ]),
                __vite_ssr_import_8__.createVNode("img", {
                  src: __vite_ssr_import_20__.default,
                  alt: ""
                })
              ])
            ]),
            _: 1 /* STABLE */
          })
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`<div class="flex items-center justify-center -mx-4"></div></div><div class="hidden h-1 md:block"><div class="w-64 mx-auto bg-gray-100 rounded-full h-1/2"><div class="w-1/3 h-full bg-purple-500 rounded-full"></div></div></div></div></div></div></section>`)
}

const __vite_ssr_import_21__ = await __vite_ssr_import__("/components/project.vue?vue&type=style&index=0&lang.css");


const __vite_ssr_import_22__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_22__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/project.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_23__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_23__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/acer/Desktop/ganpatjangra.me/components/project.vue"]]);
}


// --------------------
// Request: /node_modules/swiper/modules/free-mode/free-mode.min.css
// Parents: 
// - /components/project.vue ($id_9aa3dd9e)
// Dependencies: 

// --------------------
const $id_6f2c3b0e = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".swiper-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}";
}


// --------------------
// Request: /node_modules/swiper/modules/thumbs/thumbs.min.css
// Parents: 
// - /components/project.vue ($id_9aa3dd9e)
// Dependencies: 

// --------------------
const $id_14412fe5 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "";
}


// --------------------
// Request: /assets/images/icons8/icons8-broadcasting.svg
// Parents: 
// - /components/project.vue ($id_9aa3dd9e)
// Dependencies: 

// --------------------
const $id_c5664f3a = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/images/icons8/icons8-broadcasting.svg";
}


// --------------------
// Request: /assets/images/team/placeholder-photo.png
// Parents: 
// - /components/project.vue ($id_9aa3dd9e)
// Dependencies: 

// --------------------
const $id_2895cd70 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/images/team/placeholder-photo.png";
}


// --------------------
// Request: /assets/images/team/photo4.png
// Parents: 
// - /components/project.vue ($id_9aa3dd9e)
// Dependencies: 

// --------------------
const $id_5e76e404 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/images/team/photo4.png";
}


// --------------------
// Request: /assets/images/team/dots.svg
// Parents: 
// - /components/project.vue ($id_9aa3dd9e)
// Dependencies: 

// --------------------
const $id_ed8d99e0 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/images/team/dots.svg";
}


// --------------------
// Request: /assets/images/team/dots2.svg
// Parents: 
// - /components/project.vue ($id_9aa3dd9e)
// Dependencies: 

// --------------------
const $id_e24d19d5 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/images/team/dots2.svg";
}


// --------------------
// Request: /assets/images/team/quote.png
// Parents: 
// - /components/project.vue ($id_9aa3dd9e)
// Dependencies: 

// --------------------
const $id_4c8c4a03 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/images/team/quote.png";
}


// --------------------
// Request: /components/project.vue?vue&type=style&index=0&lang.css
// Parents: 
// - /components/project.vue ($id_9aa3dd9e)
// Dependencies: 

// --------------------
const $id_ebf4cadc = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.swiper-pagination-bullet {\r\n  height: 15px;\r\n  width: 15px;\r\n\r\n  background-color: red;\n}\r\n";
}


// --------------------
// Request: /components/home.vue
// Parents: 
// - /pages/index.vue ($id_cca58e97)
// - /@id/__x00__virtual:C:/Users/acer/Desktop/ganpatjangra.me/.nuxt/components.mjs ($id_46c29c57)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /assets/images/mycollection/lines-blue1.svg ($id_bb982fe0)
// - /assets/images/mycollection/lines-blue2.svg ($id_9b39567b)
// - /assets/images/mycollection/Diploma.svg ($id_f20728b3)
// - /assets/images/mycollection/Light-Bulb.svg ($id_6c58f639)
// - /assets/images/mycollection/Plane.svg ($id_37ed14ad)
// - /assets/images/mycollection/myAvatar.svg ($id_fb98ae54)
// - /assets/images/mycollection/github-icon.svg ($id_9d6b8ac8)
// - /assets/images/mycollection/linkedin-tile.svg ($id_0d8c80e1)
// - /assets/images/mycollection/gmail-icon.svg ($id_08559e13)
// - /assets/images/mycollection/icon1.svg ($id_4304f31b)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_4ae345a3 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {



const _sfc_main = {
  name: "home",
  head: {
    title: "Home",
    meta: [
      {
        hid: "description",
        name: "MEVN developer | website developer",
        content: "I am create multiple websites and also modified existing websites.",
      },
    ],
  },
};

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/assets/images/mycollection/lines-blue1.svg");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/assets/images/mycollection/lines-blue2.svg");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/assets/images/mycollection/Diploma.svg");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/assets/images/mycollection/Light-Bulb.svg");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/assets/images/mycollection/Plane.svg");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/assets/images/mycollection/myAvatar.svg");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/assets/images/mycollection/github-icon.svg");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/assets/images/mycollection/linkedin-tile.svg");

const __vite_ssr_import_9__ = await __vite_ssr_import__("/assets/images/mycollection/gmail-icon.svg");

const __vite_ssr_import_10__ = await __vite_ssr_import__("/assets/images/mycollection/icon1.svg");



function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_0__.ssrRenderAttrs(_attrs)
  }><section id="home" class="py-16 overflow-hidden 2xl:py-20"><div class="relative shadow-2xl shadow-gray-900 rounded-b-10xl"><div class="container px-4 mx-auto relative"><!-- moon bg   --><div class="absolute bg-moon hidden lg:block w-32 h-32 bg-no-repeat top-5 right-2 lg:right-7 lg:top-7"></div><!-- moon bg   --><div class="flex flex-wrap items-center py-10 mx-4 xl:bg-right"><div class="w-full px-4 mb-24 lg:w-1/2 lg:mb-0 relative"><div class="absolute animate-slide-tl h-44 w-full bg-elephant bg-no-repeat bg-left-top bg-[length:400px_150px]"></div><h1 class="relative max-w-xl mb-16 font-medium leading-none font-heading text-9xl md:text-10xl xl:text-11xl animate-tracking-in-expand"><span>Hi, it&#39;s me <span class="underline text-blueGray-700">G</span>anpat <span class="underline text-blueGray-700">J</span>angra and I am a </span><span class="relative inline-block"><span class="absolute inset-0 xl:-left-8 xl:-right-8"><img class="absolute inset-0 w-full max-w-non"${
    __vite_ssr_import_0__.ssrRenderAttr("src", __vite_ssr_import_1__.default)
  } alt=""><img class="absolute inset-0 w-full mt-1 lg:mt-2 xl:ml-4 max-w-none"${
    __vite_ssr_import_0__.ssrRenderAttr("src", __vite_ssr_import_2__.default)
  } alt=""></span><!-- full stack --><span class="relative z-10"> web dev.</span></span></h1><div class="space-y-2"><div class="flex space-x-2 items-center"><img class="w-10"${
    __vite_ssr_import_0__.ssrRenderAttr("src", __vite_ssr_import_3__.default)
  } alt=""><h1 class="text-xl capitalize">previous study</h1></div><p class="text-lg leading-snug lg:mb-24 text-darkBlueGray-400">In 2020, I complete my engineering.</p><div class="flex space-x-2 items-center"><img class="w-10"${
    __vite_ssr_import_0__.ssrRenderAttr("src", __vite_ssr_import_4__.default)
  } alt=""><h1 class="text-xl capitalize">currently study</h1></div><p class="text-lg leading-snug lg:mb-24 text-darkBlueGray-400">leaning MEVN and communication skills in English language.</p><div class="flex space-x-2 items-center"><img class="w-10"${
    __vite_ssr_import_0__.ssrRenderAttr("src", __vite_ssr_import_5__.default)
  } alt=""><h1 class="text-xl capitalize">future study</h1></div><p class="text-lg leading-snug lg:mb-24 text-darkBlueGray-400">BCA in Australia.</p></div></div><div class="w-full px-4 lg:w-1/2 relative"><div class="hidden lg:block h-96 w-96 animate-slide-left absolute bg-tiger bg-no-repeat bg-center"></div><div class="relative mx-auto"><div class="w-64 h-64 mx-auto border-4 border-gray-700 rounded-full"><!-- profile image second circule  --><div class="w-56 h-56 mx-auto border-4 border-gray-400 rounded-full"><!-- profile image third circule  --><div class="relative flex items-center justify-center w-48 h-48 mx-auto border-4 rounded-full backdrop-blur-sm"><img class="w-36 -mt-9"${
    __vite_ssr_import_0__.ssrRenderAttr("src", __vite_ssr_import_6__.default)
  } alt=""></div></div></div></div></div></div><div class="mb-5 mx-4 z-10 lg:mx-7 relative"><h1 class="capitalize text-6xl font-semibold mb-5">Contact</h1><div class="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 place-items-center relative"><!-- bg image  --><div class="absolute h-80 w-44 bg-animal bg-no-repeat bg-[length:200px] bg-center animate-slide-tr"></div><!-- bg image  --><div class="flex items-center w-full mb-6 xl:w-1/2 relative"><img class="mr-6 h-14"${
    __vite_ssr_import_0__.ssrRenderAttr("src", __vite_ssr_import_7__.default)
  } alt=""><a class="text-3xl font-medium hover:text-blueGray-500" target="blankpage" href="https://github.com/GanpatJangra">Github <h1 class="text-sm">@ganpatjangra</h1></a></div><div class="flex items-center w-full mb-6 xl:w-1/2 relative"><img class="mr-6 h-14"${
    __vite_ssr_import_0__.ssrRenderAttr("src", __vite_ssr_import_8__.default)
  } alt=""><a class="text-3xl font-medium hover:text-blueGray-500" target="blankpage" href="https://www.linkedin.com/in/ganpat-jangra-4b3a9621a/">Linkdin <h1 class="text-sm">@ganpatjangra</h1></a></div><div class="flex items-center w-full mb-6 xl:w-1/2 relative"><img class="mr-6 h-14"${
    __vite_ssr_import_0__.ssrRenderAttr("src", __vite_ssr_import_9__.default)
  } alt=""><a class="text-3xl font-medium hover:text-blueGray-500" target="blankpage" href="#">Mail <h1 class="text-sm">ganpatjangra@gmail.com</h1></a></div><div class="flex items-center w-full mb-6 xl:w-1/2 relative"><img class="mr-6 h-14"${
    __vite_ssr_import_0__.ssrRenderAttr("src", __vite_ssr_import_10__.default)
  } alt=""><a class="text-3xl font-medium hover:text-blueGray-500" target="blankpage" href="#">Call <h1 class="text-sm">+91 8708423836</h1></a></div></div></div></div></div></section></div>`)
}


const __vite_ssr_import_11__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_11__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/home.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_12__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_12__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/acer/Desktop/ganpatjangra.me/components/home.vue"]]);
}


// --------------------
// Request: /assets/images/mycollection/lines-blue1.svg
// Parents: 
// - /components/home.vue ($id_4ae345a3)
// Dependencies: 

// --------------------
const $id_bb982fe0 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/images/mycollection/lines-blue1.svg";
}


// --------------------
// Request: /assets/images/mycollection/lines-blue2.svg
// Parents: 
// - /components/home.vue ($id_4ae345a3)
// Dependencies: 

// --------------------
const $id_9b39567b = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/images/mycollection/lines-blue2.svg";
}


// --------------------
// Request: /assets/images/mycollection/Diploma.svg
// Parents: 
// - /components/home.vue ($id_4ae345a3)
// Dependencies: 

// --------------------
const $id_f20728b3 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/images/mycollection/Diploma.svg";
}


// --------------------
// Request: /assets/images/mycollection/Light-Bulb.svg
// Parents: 
// - /components/home.vue ($id_4ae345a3)
// Dependencies: 

// --------------------
const $id_6c58f639 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/images/mycollection/Light-Bulb.svg";
}


// --------------------
// Request: /assets/images/mycollection/Plane.svg
// Parents: 
// - /components/home.vue ($id_4ae345a3)
// Dependencies: 

// --------------------
const $id_37ed14ad = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/images/mycollection/Plane.svg";
}


// --------------------
// Request: /assets/images/mycollection/myAvatar.svg
// Parents: 
// - /components/home.vue ($id_4ae345a3)
// Dependencies: 

// --------------------
const $id_fb98ae54 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/images/mycollection/myAvatar.svg";
}


// --------------------
// Request: /assets/images/mycollection/github-icon.svg
// Parents: 
// - /components/home.vue ($id_4ae345a3)
// Dependencies: 

// --------------------
const $id_9d6b8ac8 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/images/mycollection/github-icon.svg";
}


// --------------------
// Request: /assets/images/mycollection/linkedin-tile.svg
// Parents: 
// - /components/home.vue ($id_4ae345a3)
// Dependencies: 

// --------------------
const $id_0d8c80e1 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/images/mycollection/linkedin-tile.svg";
}


// --------------------
// Request: /assets/images/mycollection/gmail-icon.svg
// Parents: 
// - /components/home.vue ($id_4ae345a3)
// Dependencies: 

// --------------------
const $id_08559e13 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/images/mycollection/gmail-icon.svg";
}


// --------------------
// Request: /assets/images/mycollection/icon1.svg
// Parents: 
// - /components/home.vue ($id_4ae345a3)
// Dependencies: 

// --------------------
const $id_4304f31b = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/assets/images/mycollection/icon1.svg";
}


// --------------------
// Request: /node_modules/@nuxt/nitro/dist/runtime/app/nitro.client.mjs
// Parents: 
// - /@id/__x00__virtual:C:/Users/acer/Desktop/ganpatjangra.me/.nuxt/plugins/server.mjs ($id_197ba429)
// Dependencies: 
// - /node_modules/ohmyfetch/dist/index.mjs ($id_780217c4)
// --------------------
const $id_7b587af2 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/ohmyfetch/dist/index.mjs");


if (!globalThis.$fetch) {
  globalThis.$fetch = __vite_ssr_import_0__.$fetch
}

__vite_ssr_exports__.default = () => {}
;
}


// --------------------
// Request: /node_modules/ohmyfetch/dist/index.mjs
// Parents: 
// - /node_modules/@nuxt/nitro/dist/runtime/app/nitro.client.mjs ($id_7b587af2)
// Dependencies: 

// --------------------
const $id_780217c4 = (global, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) => import('file:///C:/Users/acer/Desktop/ganpatjangra.me/node_modules/ohmyfetch/dist/index.mjs').then(r => { exports.default = r.default; ssrExportAll(r) }).catch(e => { console.error(e); throw new Error('[vite dev] Error loading external "C:/Users/acer/Desktop/ganpatjangra.me/node_modules/ohmyfetch/dist/index.mjs".') })


// --------------------
// Request: /@id/__x00__virtual:C:/Users/acer/Desktop/ganpatjangra.me/.nuxt/components.mjs
// Parents: 
// - /@id/__x00__virtual:C:/Users/acer/Desktop/ganpatjangra.me/.nuxt/plugins/server.mjs ($id_197ba429)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /components/home.vue ($id_4ae345a3)
// - /components/project.vue ($id_9aa3dd9e)
// - /components/skills.vue ($id_43fa255d)
// --------------------
const $id_46c29c57 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const components = {
  'Home': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/home.vue').then(c => c.default || c)),
  'Project': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/project.vue').then(c => c.default || c)),
  'Skills': __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/components/skills.vue').then(c => c.default || c))
}

__vite_ssr_exports__.default = function (nuxtApp) {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name])
    nuxtApp.vueApp.component('Lazy' + name, components[name])
  }
}
;
}


// --------------------
// Request: /@id/__x00__virtual:C:/Users/acer/Desktop/ganpatjangra.me/.nuxt/root-component.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/bootstrap.mjs ($id_fef466a9)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/components/nuxt-root.vue ($id_f8564e04)
// --------------------
const $id_f92004e9 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/components/nuxt-root.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/components/nuxt-root.vue
// Parents: 
// - /@id/__x00__virtual:C:/Users/acer/Desktop/ganpatjangra.me/.nuxt/root-component.mjs ($id_f92004e9)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_f8564e04 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {



const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");


const _sfc_main = {
  setup () {
    const nuxtApp = __vite_ssr_import_0__.useNuxtApp()
    const results = nuxtApp.hooks.callHookWith(hooks => hooks.map(hook => hook()), 'vue:setup')
    if (true && results && results.some(i => i && 'then' in i)) {
      console.error('[nuxt] Error in `vue:setup`. Callbacks must be synchronous.')
    }
  }
}

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_App = __vite_ssr_import_1__.resolveComponent("App")

  __vite_ssr_import_2__.ssrRenderSuspense(_push, {
    default: () => {
      _push(__vite_ssr_import_2__.ssrRenderComponent(_component_App, null, null, _parent))
    },
    _: 1 /* STABLE */
  })
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt3/dist/app/components/nuxt-root.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/acer/Desktop/ganpatjangra.me/node_modules/nuxt3/dist/app/components/nuxt-root.vue"]]);
}


// --------------------
// Request: /@id/__x00__virtual:C:/Users/acer/Desktop/ganpatjangra.me/.nuxt/app-component.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/bootstrap.mjs ($id_fef466a9)
// Dependencies: 
// - /node_modules/nuxt3/dist/pages/runtime/app.vue ($id_0851ff57)
// --------------------
const $id_f17181d1 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/app.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt3/dist/pages/runtime/app.vue
// Parents: 
// - /@id/__x00__virtual:C:/Users/acer/Desktop/ganpatjangra.me/.nuxt/app-component.mjs ($id_f17181d1)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_0851ff57 = async function (global, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtPage = __vite_ssr_import_0__.resolveComponent("NuxtPage")

  _push(__vite_ssr_import_1__.ssrRenderComponent(_component_NuxtPage, _attrs, null, _parent))
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt3/dist/pages/runtime/app.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/acer/Desktop/ganpatjangra.me/node_modules/nuxt3/dist/pages/runtime/app.vue"]]);
}


const __modules__ = {
 'C:/Users/acer/Desktop/ganpatjangra.me/node_modules/nuxt3/dist/app/entry': $id_0bdfba74,
 '/node_modules/nuxt3/dist/app/bootstrap.mjs': $id_fef466a9,
 '/node_modules/vue/dist/vue.cjs.js': $id_60f0615f,
 '/node_modules/nuxt3/dist/app/index.mjs': $id_d8c2af0f,
 '/node_modules/nuxt3/dist/app/nuxt.mjs': $id_bf77ef36,
 '/node_modules/hookable/dist/index.mjs': $id_a2c811c4,
 '/node_modules/nuxt3/dist/app/compat/legacy-app.mjs': $id_75047751,
 '/node_modules/unenv/runtime/mock/proxy.mjs': $id_39e12da7,
 '/node_modules/nuxt3/dist/app/composables/index.mjs': $id_42ae3d5d,
 '/node_modules/nuxt3/dist/app/composables/component.mjs': $id_b47c3881,
 '/node_modules/vue-router/dist/vue-router.cjs.js': $id_f9a4a698,
 '/node_modules/nuxt3/dist/app/composables/asyncData.mjs': $id_a2ef143e,
 '/node_modules/nuxt3/dist/app/composables/hydrate.mjs': $id_43a772c2,
 '/node_modules/nuxt3/dist/app/composables/state.mjs': $id_d232db97,
 '/node_modules/nuxt3/dist/app/composables/fetch.mjs': $id_765a0ed7,
 '/node_modules/murmurhash-es/dist/index.mjs': $id_fbf6dac3,
 '/node_modules/nuxt3/dist/app/composables/cookie.mjs': $id_792d64c4,
 '/node_modules/cookie-es/dist/index.mjs': $id_f4975261,
 '/node_modules/h3/dist/index.mjs': $id_57d7ded6,
 '/node_modules/destr/dist/index.mjs': $id_03d15ecd,
 '/node_modules/nuxt3/dist/app/composables/ssr.mjs': $id_4d0dc923,
 '/@id/__x00__virtual:C:/Users/acer/Desktop/ganpatjangra.me/.nuxt/css.mjs': $id_838a58c0,
 '/assets/css/tailwind.css': $id_f75548e1,
 '/@id/__x00__virtual:C:/Users/acer/Desktop/ganpatjangra.me/.nuxt/plugins/server.mjs': $id_197ba429,
 '/node_modules/nuxt3/dist/app/plugins/preload.server.mjs': $id_b9f3c557,
 '/node_modules/nuxt3/dist/meta/runtime/lib/vueuse-head.plugin.mjs': $id_cbe5172d,
 '/node_modules/@vueuse/head/dist/index.mjs': $id_c032264e,
 '/node_modules/nuxt3/dist/meta/runtime/plugin.mjs': $id_9fd5f35e,
 '/node_modules/nuxt3/dist/meta/runtime/components.mjs': $id_94744df3,
 '/node_modules/nuxt3/dist/meta/runtime/composables.mjs': $id_ca9295be,
 '/node_modules/@vue/shared/dist/shared.cjs.js': $id_852b06a2,
 '/@id/__x00__virtual:C:/Users/acer/Desktop/ganpatjangra.me/.nuxt/meta.config.mjs': $id_36430d24,
 '/node_modules/nuxt3/dist/pages/runtime/router.mjs': $id_a4d6cb5b,
 '/node_modules/nuxt3/dist/pages/runtime/nested-page.vue': $id_c268603a,
 '/node_modules/vue/server-renderer/index.js': $id_b215fa1c,
 '/@id/plugin-vue:export-helper': $id_bbb863c1,
 '/node_modules/nuxt3/dist/pages/runtime/page.vue': $id_10628d40,
 '/node_modules/nuxt3/dist/pages/runtime/layout.mjs': $id_9b68c93f,
 '/@id/__x00__virtual:C:/Users/acer/Desktop/ganpatjangra.me/.nuxt/layouts.mjs': $id_45f47c42,
 '/@id/__x00__virtual:C:/Users/acer/Desktop/ganpatjangra.me/.nuxt/routes.mjs': $id_313442dd,
 '/pages/index.vue': $id_cca58e97,
 '/components/skills.vue': $id_43fa255d,
 '/node_modules/swiper/vue/swiper-vue.js': $id_72e3deca,
 '/node_modules/swiper/swiper.min.css': $id_9d54fdba,
 '/node_modules/swiper/modules/pagination/pagination.min.css': $id_d3ef010f,
 '/node_modules/swiper/modules/navigation/navigation.min.css': $id_9b8672f2,
 '/node_modules/swiper/swiper.esm.js': $id_d1eb9a9e,
 '/node_modules/swiper/core/core.js': $id_413488a5,
 '/node_modules/swiper/modules/virtual/virtual.js': $id_cdb0752d,
 '/node_modules/swiper/modules/keyboard/keyboard.js': $id_b79f366d,
 '/node_modules/swiper/modules/mousewheel/mousewheel.js': $id_ff1b73b2,
 '/node_modules/swiper/modules/navigation/navigation.js': $id_3cbacc13,
 '/node_modules/swiper/modules/pagination/pagination.js': $id_9d25ff48,
 '/node_modules/swiper/modules/scrollbar/scrollbar.js': $id_b7c15973,
 '/node_modules/swiper/modules/parallax/parallax.js': $id_2bc0dda6,
 '/node_modules/swiper/modules/zoom/zoom.js': $id_b6094d1d,
 '/node_modules/swiper/modules/lazy/lazy.js': $id_27878f55,
 '/node_modules/swiper/modules/controller/controller.js': $id_224f2e59,
 '/node_modules/swiper/modules/a11y/a11y.js': $id_7fc5b0be,
 '/node_modules/swiper/modules/history/history.js': $id_f5205ad9,
 '/node_modules/swiper/modules/hash-navigation/hash-navigation.js': $id_39f6940c,
 '/node_modules/swiper/modules/autoplay/autoplay.js': $id_11d42465,
 '/node_modules/swiper/modules/thumbs/thumbs.js': $id_7f241531,
 '/node_modules/swiper/modules/free-mode/free-mode.js': $id_adae43c1,
 '/node_modules/swiper/modules/grid/grid.js': $id_be08b669,
 '/node_modules/swiper/modules/manipulation/manipulation.js': $id_9ffdf8ef,
 '/node_modules/swiper/modules/effect-fade/effect-fade.js': $id_ed5701f6,
 '/node_modules/swiper/modules/effect-cube/effect-cube.js': $id_03914d04,
 '/node_modules/swiper/modules/effect-flip/effect-flip.js': $id_24c07261,
 '/node_modules/swiper/modules/effect-coverflow/effect-coverflow.js': $id_0ea540eb,
 '/node_modules/swiper/modules/effect-creative/effect-creative.js': $id_3ab2d8b1,
 '/node_modules/swiper/modules/effect-cards/effect-cards.js': $id_597d31c2,
 '/assets/images/icons8/icons8-f-cute.svg': $id_6417dc97,
 '/assets/images/mycollection/html-5.svg': $id_9d898b84,
 '/assets/images/mycollection/css3.svg': $id_687c4c7a,
 '/assets/images/mycollection/tailwindcss.svg': $id_efe33b41,
 '/assets/images/mycollection/javascript.svg': $id_188644a4,
 '/assets/images/mycollection/vue.svg': $id_abef9de1,
 '/assets/images/mycollection/nuxt.svg': $id_b2bb126b,
 '/assets/images/icons8/icons8-b-cute.svg': $id_5321ef9e,
 '/assets/images/mycollection/expressjs-icon.svg': $id_25e013d0,
 '/assets/images/mycollection/mongodb-icon.svg': $id_6efcfe6b,
 '/assets/images/mycollection/mariadb-icon.svg': $id_da57e3e6,
 '/assets/images/icons8/icons8-o-cute.svg': $id_b6503303,
 '/assets/images/mycollection/wordpress-icon.svg': $id_9d8e64d7,
 '/assets/images/mycollection/canva-icon.svg': $id_bc6cd90f,
 '/assets/images/mycollection/vscode.svg': $id_1b35e04e,
 '/assets/images/mycollection/git.svg': $id_8f65d5a4,
 '/assets/images/mycollection/digitalocean-icon.svg': $id_a2d143a7,
 '/components/skills.vue?vue&type=style&index=0&lang.css': $id_cfe411c4,
 '/components/project.vue': $id_9aa3dd9e,
 '/node_modules/swiper/modules/free-mode/free-mode.min.css': $id_6f2c3b0e,
 '/node_modules/swiper/modules/thumbs/thumbs.min.css': $id_14412fe5,
 '/assets/images/icons8/icons8-broadcasting.svg': $id_c5664f3a,
 '/assets/images/team/placeholder-photo.png': $id_2895cd70,
 '/assets/images/team/photo4.png': $id_5e76e404,
 '/assets/images/team/dots.svg': $id_ed8d99e0,
 '/assets/images/team/dots2.svg': $id_e24d19d5,
 '/assets/images/team/quote.png': $id_4c8c4a03,
 '/components/project.vue?vue&type=style&index=0&lang.css': $id_ebf4cadc,
 '/components/home.vue': $id_4ae345a3,
 '/assets/images/mycollection/lines-blue1.svg': $id_bb982fe0,
 '/assets/images/mycollection/lines-blue2.svg': $id_9b39567b,
 '/assets/images/mycollection/Diploma.svg': $id_f20728b3,
 '/assets/images/mycollection/Light-Bulb.svg': $id_6c58f639,
 '/assets/images/mycollection/Plane.svg': $id_37ed14ad,
 '/assets/images/mycollection/myAvatar.svg': $id_fb98ae54,
 '/assets/images/mycollection/github-icon.svg': $id_9d6b8ac8,
 '/assets/images/mycollection/linkedin-tile.svg': $id_0d8c80e1,
 '/assets/images/mycollection/gmail-icon.svg': $id_08559e13,
 '/assets/images/mycollection/icon1.svg': $id_4304f31b,
 '/node_modules/@nuxt/nitro/dist/runtime/app/nitro.client.mjs': $id_7b587af2,
 '/node_modules/ohmyfetch/dist/index.mjs': $id_780217c4,
 '/@id/__x00__virtual:C:/Users/acer/Desktop/ganpatjangra.me/.nuxt/components.mjs': $id_46c29c57,
 '/@id/__x00__virtual:C:/Users/acer/Desktop/ganpatjangra.me/.nuxt/root-component.mjs': $id_f92004e9,
 '/node_modules/nuxt3/dist/app/components/nuxt-root.vue': $id_f8564e04,
 '/@id/__x00__virtual:C:/Users/acer/Desktop/ganpatjangra.me/.nuxt/app-component.mjs': $id_f17181d1,
 '/node_modules/nuxt3/dist/pages/runtime/app.vue': $id_0851ff57
}


const __pendingModules__ = new Map()
const __pendingImports__ = new Map()
const __ssrContext__ = { global: globalThis }

function __ssrLoadModule__(url, urlStack = []) {
  const pendingModule = __pendingModules__.get(url)
  if (pendingModule) { return pendingModule }
  const modulePromise = __instantiateModule__(url, urlStack)
  __pendingModules__.set(url, modulePromise)
  modulePromise.catch(() => { __pendingModules__.delete(url) })
         .finally(() => { __pendingModules__.delete(url) })
  return modulePromise
}

async function __instantiateModule__(url, urlStack) {
  const mod = __modules__[url]
  if (mod.stubModule) { return mod.stubModule }
  const stubModule = { [Symbol.toStringTag]: 'Module' }
  Object.defineProperty(stubModule, '__esModule', { value: true })
  mod.stubModule = stubModule
  // https://vitejs.dev/guide/api-hmr.html
  const importMeta = { url, hot: { accept() {}, prune() {}, dispose() {}, invalidate() {}, decline() {}, on() {} } }
  urlStack = urlStack.concat(url)
  const isCircular = url => urlStack.includes(url)
  const pendingDeps = []
  const ssrImport = async (dep) => {
    // TODO: Handle externals if dep[0] !== '.' | '/'
    if (!isCircular(dep) && !__pendingImports__.get(dep)?.some(isCircular)) {
      pendingDeps.push(dep)
      if (pendingDeps.length === 1) {
        __pendingImports__.set(url, pendingDeps)
      }
      await __ssrLoadModule__(dep, urlStack)
      if (pendingDeps.length === 1) {
        __pendingImports__.delete(url)
      } else {
        pendingDeps.splice(pendingDeps.indexOf(dep), 1)
      }
    }
    return __modules__[dep].stubModule
  }
  function ssrDynamicImport (dep) {
    // TODO: Handle dynamic import starting with . relative to url
    return ssrImport(dep)
  }

  function ssrExportAll(sourceModule) {
    for (const key in sourceModule) {
      if (key !== 'default') {
        try {
          Object.defineProperty(stubModule, key, {
            enumerable: true,
            configurable: true,
            get() { return sourceModule[key] }
          })
        } catch (_err) { }
      }
    }
  }

  await mod(
    __ssrContext__.global,
    stubModule,
    importMeta,
    ssrImport,
    ssrDynamicImport,
    ssrExportAll
  )

  return stubModule
}


export default await __ssrLoadModule__('C:/Users/acer/Desktop/ganpatjangra.me/node_modules/nuxt3/dist/app/entry')