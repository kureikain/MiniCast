exports.config = {
  // See http://brunch.io/#documentation for docs.
  files: {
    javascripts: {
      //joinTo: "js/app.js"
      joinTo: {
        "js/app.js": /^(web\/static\/js)|(node_modules)/,
        "js/ex_admin_common.js": ["web/static/vendor/ex_admin_common.js"],
        "js/admin_lte2.js": ["web/static/vendor/admin_lte2.js"],
        "js/jquery.min.js": ["web/static/vendor/jquery.min.js"],
      }
      // To use a separate vendor.js bundle, specify two files path
      // http://brunch.io/docs/config#-files-
      // joinTo: {
      //  "js/app.js": /^(web\/static\/js)/,
      //  "js/vendor.js": /^(web\/static\/vendor)|(deps)/
      // }
      //
      // To change the order of concatenation of files, explicitly mention here
      // order: {
      //   before: [
      //     "web/static/vendor/js/jquery-2.1.1.js",
      //     "web/static/vendor/js/bootstrap.min.js"
      //   ]
      // }
    },
    stylesheets: {
      //joinTo: "css/app.css",
      joinTo: {
        "css/app.css": /^(web\/static\/css)/,
        "css/admin_lte2.css": ["web/static/vendor/admin_lte2.css"],
        "css/active_admin.css.css": ["web/static/vendor/active_admin.css.css"],
      },
      order: {
        after: ["web/static/css/app.css"] // concat app.css last
      }
    },
    templates: {
      joinTo: "js/app.js"
    }
  },

  conventions: {
    // This option sets where we should place non-css and non-js assets in.
    // By default, we set this to "/web/static/assets". Files in this directory
    // will be copied to `paths.public`, which is "priv/static" by default.
    assets: /^(web\/static\/assets)/
  },

  // Phoenix paths configuration
  paths: {
    // Dependencies and current project directories to watch
    watched: [
      "web/static",
      "test/static"
    ],

    // Where to compile files to
    public: "priv/static"
  },

  // Configure your plugins
  plugins: {
    babel: {
      // Do not use ES6 compiler in vendor code
      ignore: [/web\/static\/vendor/]
    }
  },

  modules: {
    autoRequire: {
      "js/app.js": ["web/static/js/app"]
    }
  },

  npm: {
    enabled: true
  }
};

// To add the ExAdmin generated assets to your brunch build, do the following:
//
// Replace
//
//     javascripts: {
//       joinTo: "js/app.js"
//     }
//
// With
//
//     javascripts: {
//       joinTo: {
//         "js/app.js": /^(web\/static\/js)|(node_modules)/,
//         "js/ex_admin_common.js": ["web/static/vendor/ex_admin_common.js"],
//         "js/admin_lte2.js": ["web/static/vendor/admin_lte2.js"],
//         "js/jquery.min.js": ["web/static/vendor/jquery.min.js"],
//       }
//     },
//
// Replace
//
//     stylesheets: {
//       joinTo: "css/app.css",
//       order: {
//         after: ["web/static/css/app.css"] // concat app.css last
//       }
//     },
//
// With
//
//     stylesheets: {
//       joinTo: {
//         "css/app.css": /^(web\/static\/css)/,
//         "css/admin_lte2.css": ["web/static/vendor/admin_lte2.css"],
//         "css/active_admin.css.css": ["web/static/vendor/active_admin.css.css"],
//       },
//       order: {
//         after: ["web/static/css/app.css"] // concat app.css last
//       }
//     },
//