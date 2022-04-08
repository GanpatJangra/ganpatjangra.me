const client_manifest = {
  "node_modules/nuxt3/dist/app/entry.mjs": {
    "file": "entry-14970d9d.mjs",
    "src": "node_modules/nuxt3/dist/app/entry.mjs",
    "isEntry": true,
    "dynamicImports": [
      "_bootstrap-5e12956d.mjs"
    ]
  },
  "_bootstrap-5e12956d.mjs": {
    "file": "bootstrap-5e12956d.mjs",
    "isDynamicEntry": true,
    "dynamicImports": [
      "pages/index.vue",
      "pages/me.vue",
      "components/darkbutton.vue",
      "components/home.vue",
      "components/project.vue",
      "components/skills.vue"
    ],
    "css": [
      "assets/bootstrap.104f3d13.css"
    ],
    "assets": [
      "assets/Weather-Moon.617d8515.svg",
      "assets/Space_Animal_7.1019bab1.svg",
      "assets/Space_Animal_2.6581623e.svg",
      "assets/Space_Animal_5.3aa2aee6.svg"
    ]
  },
  "components/darkbutton.vue": {
    "file": "darkbutton-e2b77aa7.mjs",
    "src": "components/darkbutton.vue",
    "isDynamicEntry": true,
    "imports": [
      "_bootstrap-5e12956d.mjs"
    ]
  },
  "components/home.vue": {
    "file": "home-5ad73f05.mjs",
    "src": "components/home.vue",
    "isDynamicEntry": true,
    "imports": [
      "_bootstrap-5e12956d.mjs"
    ],
    "assets": [
      "assets/lines-blue1.11a8413a.svg",
      "assets/lines-blue2.5f9a9806.svg",
      "assets/Diploma.2a331dda.svg",
      "assets/Light-Bulb.cb5dbe2b.svg",
      "assets/Plane.29e1f36c.svg",
      "assets/myAvatar.3cd73b2b.svg",
      "assets/github-icon.03573308.svg",
      "assets/linkedin-tile.b66e127c.svg",
      "assets/gmail-icon.e9d865c1.svg",
      "assets/icon1.1227f604.svg"
    ]
  },
  "components/project.vue": {
    "file": "project-af8f6b30.mjs",
    "src": "components/project.vue",
    "isDynamicEntry": true,
    "imports": [
      "_nuxt-dc25c7b3.mjs",
      "_bootstrap-5e12956d.mjs"
    ],
    "css": [
      "assets/project.a352a431.css"
    ],
    "assets": [
      "assets/icons8-broadcasting.1904243b.svg",
      "assets/placeholder-photo.3df78d0e.png",
      "assets/dots.1c4c2d6c.svg",
      "assets/dots2.79aeb633.svg"
    ]
  },
  "_nuxt-dc25c7b3.mjs": {
    "file": "nuxt-dc25c7b3.mjs",
    "imports": [
      "_bootstrap-5e12956d.mjs"
    ],
    "css": [
      "assets/nuxt.f7502460.css"
    ],
    "assets": [
      "assets/html-5.765166f2.svg",
      "assets/tailwindcss.7c29d970.svg",
      "assets/javascript.01c2ca6e.svg",
      "assets/vue.7e7c7361.svg",
      "assets/nuxt.1cd02af8.svg"
    ]
  },
  "components/skills.vue": {
    "file": "skills-f25601ea.mjs",
    "src": "components/skills.vue",
    "isDynamicEntry": true,
    "imports": [
      "_nuxt-dc25c7b3.mjs",
      "_bootstrap-5e12956d.mjs"
    ],
    "css": [
      "assets/skills.a6dba478.css"
    ],
    "assets": [
      "assets/icons8-f-cute.3b02a426.svg",
      "assets/css3.20d99463.svg",
      "assets/icons8-b-cute.19cdcf7e.svg",
      "assets/expressjs-icon.44e8ea18.svg",
      "assets/mongodb-icon.64a21d47.svg",
      "assets/mariadb-icon.5b3b5ddf.svg",
      "assets/icons8-o-cute.44026c20.svg",
      "assets/wordpress-icon.1dbcce02.svg",
      "assets/canva-icon.00b39470.svg",
      "assets/vscode.ac6dde88.svg",
      "assets/git.717a57ea.svg",
      "assets/digitalocean-icon.91247310.svg"
    ]
  },
  "pages/index.vue": {
    "file": "index-bdee2829.mjs",
    "src": "pages/index.vue",
    "isDynamicEntry": true,
    "imports": [
      "components/skills.vue",
      "components/project.vue",
      "components/home.vue",
      "_bootstrap-5e12956d.mjs",
      "_nuxt-dc25c7b3.mjs"
    ]
  },
  "pages/me.vue": {
    "file": "me-6eedbbad.mjs",
    "src": "pages/me.vue",
    "isDynamicEntry": true,
    "imports": [
      "components/home.vue",
      "components/skills.vue",
      "components/project.vue",
      "_bootstrap-5e12956d.mjs",
      "_nuxt-dc25c7b3.mjs"
    ]
  }
};

export { client_manifest as default };
