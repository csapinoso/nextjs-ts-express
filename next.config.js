const withTypescript = require('@zeit/next-typescript');
const withTM = require('next-transpile-modules');
const withCSS = require('@zeit/next-css');

module.exports = withTypescript(
  withCSS(
    withTM({
      transpileModules: [
        '@atlaskit/avatar',
        '@atlaskit/button',
        '@atlaskit/checkbox',
        '@atlaskit/css-reset',
        '@atlaskit/dropdown-menu',
        '@atlaskit/flag',
        '@atlaskit/icon',
        '@atlaskit/inline-edit',
        '@atlaskit/modal-dialog',
        '@atlaskit/navigation',
        '@atlaskit/page',
        '@atlaskit/page-header',
        '@atlaskit/theme'
      ]
    })
  )
);
