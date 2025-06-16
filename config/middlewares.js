module.exports = [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "default-src": ["'self'"],
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "mwonderwijs.xiduzo.com",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "mwonderwijs.xiduzo.com",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  }
];
