const glob = require('glob');

export const routesGenerator = () =>
  glob
    .sync('{posts,stories}/*.md', { cwd: 'content' })
    .map(slug => slug.slice(0, -3))
