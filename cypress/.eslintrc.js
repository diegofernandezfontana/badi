module.exports = {
  root:true,
  extends:["plugin:cypress/recommend"] ,
  plugins:["eslint-plugin-cypress"],
  env: {"cypress/globals": true},
};
