export default {
  "node_modules/nuxt3/dist/app/entry.mjs": {
    "file": "entry-0f52be4f.mjs",
    "src": "node_modules/nuxt3/dist/app/entry.mjs",
    "isEntry": true,
    "dynamicImports": [
      "_bootstrap-21e22f71.mjs"
    ]
  },
  "_bootstrap-21e22f71.mjs": {
    "file": "bootstrap-21e22f71.mjs",
    "isDynamicEntry": true,
    "dynamicImports": [
      "pages/index.vue",
      "components/home.vue",
      "components/project.vue",
      "components/skills.vue"
    ],
    "css": [
      "assets/bootstrap.ce07aff1.css"
    ]
  },
  "components/home.vue": {
    "file": "home-716fbf0e.mjs",
    "src": "components/home.vue",
    "isDynamicEntry": true,
    "imports": [
      "_bootstrap-21e22f71.mjs"
    ]
  },
  "components/project.vue": {
    "file": "project-e5bb17ea.mjs",
    "src": "components/project.vue",
    "isDynamicEntry": true,
    "imports": [
      "_navigation.min-de0b0133.mjs",
      "_bootstrap-21e22f71.mjs"
    ],
    "css": [
      "assets/project.a352a431.css"
    ]
  },
  "_navigation.min-de0b0133.mjs": {
    "file": "navigation.min-de0b0133.mjs",
    "imports": [
      "_bootstrap-21e22f71.mjs"
    ],
    "css": [
      "assets/navigation.min.b2d9f00c.css"
    ]
  },
  "components/skills.vue": {
    "file": "skills-0d2251ac.mjs",
    "src": "components/skills.vue",
    "isDynamicEntry": true,
    "imports": [
      "_navigation.min-de0b0133.mjs",
      "_bootstrap-21e22f71.mjs"
    ],
    "css": [
      "assets/skills.a6dba478.css"
    ]
  },
  "pages/index.vue": {
    "file": "index-725bb411.mjs",
    "src": "pages/index.vue",
    "isDynamicEntry": true,
    "imports": [
      "components/skills.vue",
      "components/project.vue",
      "components/home.vue",
      "_bootstrap-21e22f71.mjs",
      "_navigation.min-de0b0133.mjs"
    ]
  }
}