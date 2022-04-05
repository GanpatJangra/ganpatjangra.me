globalThis.__timing__.logStart('Load chunks/vue3');import { s as serverRenderer } from './index.mjs';
import 'unenv/runtime/mock/proxy';
import 'stream';

const renderToString = (...args) => {
  return serverRenderer.exports.renderToString(...args).then((result) => `<div id="__nuxt">${result}</div>`);
};

export { renderToString };;globalThis.__timing__.logEnd('Load chunks/vue3');
