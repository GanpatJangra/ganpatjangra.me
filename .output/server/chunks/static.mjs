import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/_nuxt/bootstrap-21e22f71.mjs": {
    "type": "application/javascript",
    "etag": "\"1a19b-fjl1OC5rYfrMwFDDve6/qJ36qLM\"",
    "mtime": "2022-04-01T13:31:48.016Z",
    "path": "../public/_nuxt/bootstrap-21e22f71.mjs"
  },
  "/_nuxt/entry-0f52be4f.mjs": {
    "type": "application/javascript",
    "etag": "\"65-J8bgz/LqgDZJiD/pQhswBZgeGOE\"",
    "mtime": "2022-04-01T13:31:48.016Z",
    "path": "../public/_nuxt/entry-0f52be4f.mjs"
  },
  "/_nuxt/home-716fbf0e.mjs": {
    "type": "application/javascript",
    "etag": "\"e04-OabcAvo07wzmnPxKICWqObNP7FE\"",
    "mtime": "2022-04-01T13:31:48.017Z",
    "path": "../public/_nuxt/home-716fbf0e.mjs"
  },
  "/_nuxt/index-725bb411.mjs": {
    "type": "application/javascript",
    "etag": "\"15d-XmmqDlK7zjMx+LhqobvpL7eqalE\"",
    "mtime": "2022-04-01T13:31:48.017Z",
    "path": "../public/_nuxt/index-725bb411.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"6f6-IB7YSURwCYFoI41fQSZbHLvhazM\"",
    "mtime": "2022-04-01T13:31:48.017Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/navigation.min-de0b0133.mjs": {
    "type": "application/javascript",
    "etag": "\"16a61-4NUUJP94Ol2i72Nr3eS1kOX1e3g\"",
    "mtime": "2022-04-01T13:31:48.017Z",
    "path": "../public/_nuxt/navigation.min-de0b0133.mjs"
  },
  "/_nuxt/project-e5bb17ea.mjs": {
    "type": "application/javascript",
    "etag": "\"3a7d-lLpgzrXNNmDIr9yvekGTa9K270Q\"",
    "mtime": "2022-04-01T13:31:48.017Z",
    "path": "../public/_nuxt/project-e5bb17ea.mjs"
  },
  "/_nuxt/skills-0d2251ac.mjs": {
    "type": "application/javascript",
    "etag": "\"2e38-ZqF81HgL81I95LXWO6j6gDCDrjM\"",
    "mtime": "2022-04-01T13:31:48.017Z",
    "path": "../public/_nuxt/skills-0d2251ac.mjs"
  },
  "/_nuxt/assets/bootstrap.ce07aff1.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"322d-lsH5fWtAOUbiHM9AvQadhFlU0kw\"",
    "mtime": "2022-04-01T13:31:48.017Z",
    "path": "../public/_nuxt/assets/bootstrap.ce07aff1.css"
  },
  "/_nuxt/assets/navigation.min.b2d9f00c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2c18-d2HdvEkOoFtXZYFL5ljJP1FK66o\"",
    "mtime": "2022-04-01T13:31:48.017Z",
    "path": "../public/_nuxt/assets/navigation.min.b2d9f00c.css"
  },
  "/_nuxt/assets/project.a352a431.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"9b-PseoAU9HOL8ajpXbahyQk7e+fmo\"",
    "mtime": "2022-04-01T13:31:48.017Z",
    "path": "../public/_nuxt/assets/project.a352a431.css"
  },
  "/_nuxt/assets/skills.a6dba478.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"12e-woIAQsnNRjaAatdgyQcbEhaYy9o\"",
    "mtime": "2022-04-01T13:31:48.017Z",
    "path": "../public/_nuxt/assets/skills.a6dba478.css"
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
const STATIC_ASSETS_BASE = "C:/Users/acer/Downloads/temp/nuxt3-tailwind3-starter-main/nuxt3-tailwind3-starter-main/dist" + "/" + "1648819902";
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
