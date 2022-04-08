import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/_nuxt/bootstrap-5e12956d.mjs": {
    "type": "application/javascript",
    "etag": "\"1aa2a-KwMd3wCHfIkmK5PCa+zVLZ/CheE\"",
    "mtime": "2022-04-08T17:50:30.191Z",
    "path": "../public/_nuxt/bootstrap-5e12956d.mjs"
  },
  "/_nuxt/darkbutton-e2b77aa7.mjs": {
    "type": "application/javascript",
    "etag": "\"fa32-HrfoOCw8k+i++l1FCOmo0fTvasc\"",
    "mtime": "2022-04-08T17:50:30.191Z",
    "path": "../public/_nuxt/darkbutton-e2b77aa7.mjs"
  },
  "/_nuxt/entry-14970d9d.mjs": {
    "type": "application/javascript",
    "etag": "\"65-HUZ2nN42jXrOsCiTnL2jRFwqEO8\"",
    "mtime": "2022-04-08T17:50:30.191Z",
    "path": "../public/_nuxt/entry-14970d9d.mjs"
  },
  "/_nuxt/home-5ad73f05.mjs": {
    "type": "application/javascript",
    "etag": "\"12d2-clpZ9pHVyjIYM0DjYpHGcf4JC3Y\"",
    "mtime": "2022-04-08T17:50:30.191Z",
    "path": "../public/_nuxt/home-5ad73f05.mjs"
  },
  "/_nuxt/index-bdee2829.mjs": {
    "type": "application/javascript",
    "etag": "\"17e-kQ+oj61YtPdmBtqc5+zKP3UvYyU\"",
    "mtime": "2022-04-08T17:50:30.191Z",
    "path": "../public/_nuxt/index-bdee2829.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"ec4-Kr6o6nRpJ150OD6/g9xu8/qOv+s\"",
    "mtime": "2022-04-08T17:50:30.192Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/me-6eedbbad.mjs": {
    "type": "application/javascript",
    "etag": "\"179-ngCcQsXaCjktK2br5hw/tHZVAxk\"",
    "mtime": "2022-04-08T17:50:30.191Z",
    "path": "../public/_nuxt/me-6eedbbad.mjs"
  },
  "/_nuxt/nuxt-dc25c7b3.mjs": {
    "type": "application/javascript",
    "etag": "\"16b54-pODsJIqmwLq0tjrgial1UMHapsg\"",
    "mtime": "2022-04-08T17:50:30.193Z",
    "path": "../public/_nuxt/nuxt-dc25c7b3.mjs"
  },
  "/_nuxt/project-af8f6b30.mjs": {
    "type": "application/javascript",
    "etag": "\"39ac-Pq3oOElR2za4HE6x79wvjOPko4Q\"",
    "mtime": "2022-04-08T17:50:30.191Z",
    "path": "../public/_nuxt/project-af8f6b30.mjs"
  },
  "/_nuxt/skills-f25601ea.mjs": {
    "type": "application/javascript",
    "etag": "\"2f47-p4TZNmQAgzJRmMrqCkBb6UorXq8\"",
    "mtime": "2022-04-08T17:50:30.191Z",
    "path": "../public/_nuxt/skills-f25601ea.mjs"
  },
  "/_nuxt/assets/bootstrap.104f3d13.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"49d6-i+bbUL126iG2baL51717Q3syX14\"",
    "mtime": "2022-04-08T17:50:30.192Z",
    "path": "../public/_nuxt/assets/bootstrap.104f3d13.css"
  },
  "/_nuxt/assets/canva-icon.00b39470.svg": {
    "type": "image/svg+xml",
    "etag": "\"42c-2MyxsArEjIOUcHex3lRAhjt8OiM\"",
    "mtime": "2022-04-08T17:50:30.191Z",
    "path": "../public/_nuxt/assets/canva-icon.00b39470.svg"
  },
  "/_nuxt/assets/css3.20d99463.svg": {
    "type": "image/svg+xml",
    "etag": "\"1d9-uXULEbRk9/QeuaputtVXiMeSSpY\"",
    "mtime": "2022-04-08T17:50:30.190Z",
    "path": "../public/_nuxt/assets/css3.20d99463.svg"
  },
  "/_nuxt/assets/digitalocean-icon.91247310.svg": {
    "type": "image/svg+xml",
    "etag": "\"1d3-h5yK4q7fmTYpZk+CODYko57wdwk\"",
    "mtime": "2022-04-08T17:50:30.191Z",
    "path": "../public/_nuxt/assets/digitalocean-icon.91247310.svg"
  },
  "/_nuxt/assets/Diploma.2a331dda.svg": {
    "type": "image/svg+xml",
    "etag": "\"970-ljd/oBixqv4uWFJCOECkNrPb+V0\"",
    "mtime": "2022-04-08T17:50:30.190Z",
    "path": "../public/_nuxt/assets/Diploma.2a331dda.svg"
  },
  "/_nuxt/assets/dots.1c4c2d6c.svg": {
    "type": "image/svg+xml",
    "etag": "\"944-GEUKRHJzgwVac5mrfC6pPF3Ep8k\"",
    "mtime": "2022-04-08T17:50:30.191Z",
    "path": "../public/_nuxt/assets/dots.1c4c2d6c.svg"
  },
  "/_nuxt/assets/dots2.79aeb633.svg": {
    "type": "image/svg+xml",
    "etag": "\"14c-+KAp8DHgTuEgDqoBMpv7ahq2pWY\"",
    "mtime": "2022-04-08T17:50:30.191Z",
    "path": "../public/_nuxt/assets/dots2.79aeb633.svg"
  },
  "/_nuxt/assets/expressjs-icon.44e8ea18.svg": {
    "type": "image/svg+xml",
    "etag": "\"309-qAHz0EtMWshs2eMsLlHxMP3ZK0Q\"",
    "mtime": "2022-04-08T17:50:30.191Z",
    "path": "../public/_nuxt/assets/expressjs-icon.44e8ea18.svg"
  },
  "/_nuxt/assets/git.717a57ea.svg": {
    "type": "image/svg+xml",
    "etag": "\"30a-0JCxi490z7fI+NpE3tLXOsuVCC4\"",
    "mtime": "2022-04-08T17:50:30.191Z",
    "path": "../public/_nuxt/assets/git.717a57ea.svg"
  },
  "/_nuxt/assets/github-icon.03573308.svg": {
    "type": "image/svg+xml",
    "etag": "\"13bb-QrZsClxV4ABtX9ww6QeDTdkWk/k\"",
    "mtime": "2022-04-08T17:50:30.190Z",
    "path": "../public/_nuxt/assets/github-icon.03573308.svg"
  },
  "/_nuxt/assets/gmail-icon.e9d865c1.svg": {
    "type": "image/svg+xml",
    "etag": "\"758-Mz4Sy+K65SpqChzOEcKRm+YdQTM\"",
    "mtime": "2022-04-08T17:50:30.190Z",
    "path": "../public/_nuxt/assets/gmail-icon.e9d865c1.svg"
  },
  "/_nuxt/assets/html-5.765166f2.svg": {
    "type": "image/svg+xml",
    "etag": "\"1b5-kFcZ+IiutHumBgzndfMkbaPWjmg\"",
    "mtime": "2022-04-08T17:50:30.190Z",
    "path": "../public/_nuxt/assets/html-5.765166f2.svg"
  },
  "/_nuxt/assets/icon1.1227f604.svg": {
    "type": "image/svg+xml",
    "etag": "\"b71-N8bgvQWK8lCSPGqcckDhee5ci6M\"",
    "mtime": "2022-04-08T17:50:30.190Z",
    "path": "../public/_nuxt/assets/icon1.1227f604.svg"
  },
  "/_nuxt/assets/icons8-b-cute.19cdcf7e.svg": {
    "type": "image/svg+xml",
    "etag": "\"4ee-ICKFFfVVoVLDBsFQGzQpnz0CQZk\"",
    "mtime": "2022-04-08T17:50:30.191Z",
    "path": "../public/_nuxt/assets/icons8-b-cute.19cdcf7e.svg"
  },
  "/_nuxt/assets/icons8-broadcasting.1904243b.svg": {
    "type": "image/svg+xml",
    "etag": "\"356-y9T0rmHG+Z1Us/OkDJvLeI3+V08\"",
    "mtime": "2022-04-08T17:50:30.191Z",
    "path": "../public/_nuxt/assets/icons8-broadcasting.1904243b.svg"
  },
  "/_nuxt/assets/icons8-f-cute.3b02a426.svg": {
    "type": "image/svg+xml",
    "etag": "\"42a-c7ItN2xHhDJA7S6Ka1303ZZq7C0\"",
    "mtime": "2022-04-08T17:50:30.190Z",
    "path": "../public/_nuxt/assets/icons8-f-cute.3b02a426.svg"
  },
  "/_nuxt/assets/icons8-o-cute.44026c20.svg": {
    "type": "image/svg+xml",
    "etag": "\"8bc-kuydm/KOQdXLWLzs6Wfw6j2/BX0\"",
    "mtime": "2022-04-08T17:50:30.191Z",
    "path": "../public/_nuxt/assets/icons8-o-cute.44026c20.svg"
  },
  "/_nuxt/assets/javascript.01c2ca6e.svg": {
    "type": "image/svg+xml",
    "etag": "\"309-D3dtWm5bryvyRSM/aFNbTVBk2Ys\"",
    "mtime": "2022-04-08T17:50:30.191Z",
    "path": "../public/_nuxt/assets/javascript.01c2ca6e.svg"
  },
  "/_nuxt/assets/Light-Bulb.cb5dbe2b.svg": {
    "type": "image/svg+xml",
    "etag": "\"78f-kBp575LjB6bxgVvNHOBHxw9S8tQ\"",
    "mtime": "2022-04-08T17:50:30.190Z",
    "path": "../public/_nuxt/assets/Light-Bulb.cb5dbe2b.svg"
  },
  "/_nuxt/assets/lines-blue1.11a8413a.svg": {
    "type": "image/svg+xml",
    "etag": "\"2a8-9s7F5gQhPC9YIHVTZTmKxv/uDwk\"",
    "mtime": "2022-04-08T17:50:30.190Z",
    "path": "../public/_nuxt/assets/lines-blue1.11a8413a.svg"
  },
  "/_nuxt/assets/lines-blue2.5f9a9806.svg": {
    "type": "image/svg+xml",
    "etag": "\"2db-MlXy/kdmcEBaJmoY8DP9PYsi3Ys\"",
    "mtime": "2022-04-08T17:50:30.190Z",
    "path": "../public/_nuxt/assets/lines-blue2.5f9a9806.svg"
  },
  "/_nuxt/assets/linkedin-tile.b66e127c.svg": {
    "type": "image/svg+xml",
    "etag": "\"154-p4FoRfy0NBT5E3RQQLm1WuDvCGY\"",
    "mtime": "2022-04-08T17:50:30.190Z",
    "path": "../public/_nuxt/assets/linkedin-tile.b66e127c.svg"
  },
  "/_nuxt/assets/mariadb-icon.5b3b5ddf.svg": {
    "type": "image/svg+xml",
    "etag": "\"950-hqtYrvnB1MXOqylu+HIifsSBiuE\"",
    "mtime": "2022-04-08T17:50:30.191Z",
    "path": "../public/_nuxt/assets/mariadb-icon.5b3b5ddf.svg"
  },
  "/_nuxt/assets/mongodb-icon.64a21d47.svg": {
    "type": "image/svg+xml",
    "etag": "\"49e-iTAXlmKqPYZxfBN+yZvhdVItaWk\"",
    "mtime": "2022-04-08T17:50:30.191Z",
    "path": "../public/_nuxt/assets/mongodb-icon.64a21d47.svg"
  },
  "/_nuxt/assets/myAvatar.3cd73b2b.svg": {
    "type": "image/svg+xml",
    "etag": "\"1131b-brtMtxuniY1o8aj24DJmu5kN1xI\"",
    "mtime": "2022-04-08T17:50:30.190Z",
    "path": "../public/_nuxt/assets/myAvatar.3cd73b2b.svg"
  },
  "/_nuxt/assets/nuxt.1cd02af8.svg": {
    "type": "image/svg+xml",
    "etag": "\"25a-Gj7Bd+2a1VqhYtBG0CX3GShfDyo\"",
    "mtime": "2022-04-08T17:50:30.190Z",
    "path": "../public/_nuxt/assets/nuxt.1cd02af8.svg"
  },
  "/_nuxt/assets/nuxt.f7502460.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2c18-d2HdvEkOoFtXZYFL5ljJP1FK66o\"",
    "mtime": "2022-04-08T17:50:30.192Z",
    "path": "../public/_nuxt/assets/nuxt.f7502460.css"
  },
  "/_nuxt/assets/placeholder-photo.3df78d0e.png": {
    "type": "image/png",
    "etag": "\"2174-ylrtXLGuIal8f7ExDjSO1wYWeo8\"",
    "mtime": "2022-04-08T17:50:30.191Z",
    "path": "../public/_nuxt/assets/placeholder-photo.3df78d0e.png"
  },
  "/_nuxt/assets/Plane.29e1f36c.svg": {
    "type": "image/svg+xml",
    "etag": "\"6d3-E6GgXdvGKbrB2zjM5MIwCp5XdmY\"",
    "mtime": "2022-04-08T17:50:30.190Z",
    "path": "../public/_nuxt/assets/Plane.29e1f36c.svg"
  },
  "/_nuxt/assets/project.a352a431.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"9b-PseoAU9HOL8ajpXbahyQk7e+fmo\"",
    "mtime": "2022-04-08T17:50:30.192Z",
    "path": "../public/_nuxt/assets/project.a352a431.css"
  },
  "/_nuxt/assets/skills.a6dba478.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"12e-woIAQsnNRjaAatdgyQcbEhaYy9o\"",
    "mtime": "2022-04-08T17:50:30.191Z",
    "path": "../public/_nuxt/assets/skills.a6dba478.css"
  },
  "/_nuxt/assets/Space_Animal_2.6581623e.svg": {
    "type": "image/svg+xml",
    "etag": "\"4eb9-NUMqcVvNrI39nNZex/GMJfCpD+Y\"",
    "mtime": "2022-04-08T17:50:30.190Z",
    "path": "../public/_nuxt/assets/Space_Animal_2.6581623e.svg"
  },
  "/_nuxt/assets/Space_Animal_5.3aa2aee6.svg": {
    "type": "image/svg+xml",
    "etag": "\"4b94-YXmTQTUmAsxdShFRGNDq8Sd5dMw\"",
    "mtime": "2022-04-08T17:50:30.190Z",
    "path": "../public/_nuxt/assets/Space_Animal_5.3aa2aee6.svg"
  },
  "/_nuxt/assets/Space_Animal_7.1019bab1.svg": {
    "type": "image/svg+xml",
    "etag": "\"4f12-EOhkJixqhrNz9nIYH8jtlhtdFyU\"",
    "mtime": "2022-04-08T17:50:30.190Z",
    "path": "../public/_nuxt/assets/Space_Animal_7.1019bab1.svg"
  },
  "/_nuxt/assets/tailwindcss.7c29d970.svg": {
    "type": "image/svg+xml",
    "etag": "\"303-PFRB/HoZD7GADUpcfwe6SxNFqcg\"",
    "mtime": "2022-04-08T17:50:30.190Z",
    "path": "../public/_nuxt/assets/tailwindcss.7c29d970.svg"
  },
  "/_nuxt/assets/vscode.ac6dde88.svg": {
    "type": "image/svg+xml",
    "etag": "\"625-HaW75is4SxwJkoCn03oJgbPNtJY\"",
    "mtime": "2022-04-08T17:50:30.191Z",
    "path": "../public/_nuxt/assets/vscode.ac6dde88.svg"
  },
  "/_nuxt/assets/vue.7e7c7361.svg": {
    "type": "image/svg+xml",
    "etag": "\"115-0XLg58Wc5BvFZ7BhlRCmuN9pT+8\"",
    "mtime": "2022-04-08T17:50:30.190Z",
    "path": "../public/_nuxt/assets/vue.7e7c7361.svg"
  },
  "/_nuxt/assets/Weather-Moon.617d8515.svg": {
    "type": "image/svg+xml",
    "etag": "\"51d-wPvghuPhkGlcFBNfykkmH+3T+hk\"",
    "mtime": "2022-04-08T17:50:30.190Z",
    "path": "../public/_nuxt/assets/Weather-Moon.617d8515.svg"
  },
  "/_nuxt/assets/wordpress-icon.1dbcce02.svg": {
    "type": "image/svg+xml",
    "etag": "\"467-HZABqv/qh+rA7du8cgb7yCHZTM4\"",
    "mtime": "2022-04-08T17:50:30.191Z",
    "path": "../public/_nuxt/assets/wordpress-icon.1dbcce02.svg"
  }
};

const mainDir = dirname(fileURLToPath(globalThis.entryURL));

function readAsset (id) {
  return promises.readFile(resolve(mainDir, getAsset(id).path))
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const PUBLIC_PATH = "/_nuxt/";
const TWO_DAYS = 2 * 60 * 60 * 24;
const STATIC_ASSETS_BASE = "C:/Users/acer/Desktop/ganpatjangra.me/dist" + "/" + "1649440221";
async function serveStatic(req, res) {
  if (!METHODS.includes(req.method)) {
    return;
  }
  let id = withLeadingSlash(withoutTrailingSlash(parseURL(req.url).pathname));
  let asset = getAsset(id);
  if (!asset) {
    const _id = id + "/index.html";
    const _asset = getAsset(_id);
    if (_asset) {
      asset = _asset;
      id = _id;
    }
  }
  if (!asset) {
    if (id.startsWith(PUBLIC_PATH) && !id.startsWith(STATIC_ASSETS_BASE)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    res.statusCode = 304;
    return res.end("Not Modified (etag)");
  }
  const ifModifiedSinceH = req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      res.statusCode = 304;
      return res.end("Not Modified (mtime)");
    }
  }
  if (asset.type) {
    res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    res.setHeader("Last-Modified", asset.mtime);
  }
  if (id.startsWith(PUBLIC_PATH)) {
    res.setHeader("Cache-Control", `max-age=${TWO_DAYS}, immutable`);
  }
  const contents = await readAsset(id);
  return res.end(contents);
}

export { serveStatic as default };
