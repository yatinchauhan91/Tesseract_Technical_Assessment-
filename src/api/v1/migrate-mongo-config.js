require('dotenv').config({ path: '../../../.env' });
require('dotenv').config({ path: `../../../.${process.env.NODE_ENV}.env` });

const config = {
  mongodb: {
    url: `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}`,
    databaseName: process.env.DB_NAME,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  },
  migrationsDir: "migrations",
  changelogCollectionName: "changelog",
  migrationFileExtension: ".js",
  useFileHash: false
};

module.exports = config;
