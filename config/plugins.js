module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "local",
      sizeLimit: 4_000_000,
    },
  },
  "media-prefix": {
    enabled: true,
  },
});
