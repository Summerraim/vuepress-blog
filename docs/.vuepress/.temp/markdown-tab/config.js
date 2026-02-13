import { CodeTabs } from "E:/vuepress/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-t_3abf037f5de5e4dee885337552b5a929/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "E:/vuepress/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-t_3abf037f5de5e4dee885337552b5a929/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "E:/vuepress/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-t_3abf037f5de5e4dee885337552b5a929/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
