import { GitContributors } from "E:/vuepress/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_cfa8cb8a9fb969915ba86aea99d277fd/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "E:/vuepress/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_cfa8cb8a9fb969915ba86aea99d277fd/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
