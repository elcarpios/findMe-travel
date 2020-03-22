const glob = require('glob');

export const routesGenerator = () =>
  glob
    .sync('explore/*.md', { cwd: 'content' })
    .map(slug => slug.slice(0, -3))
