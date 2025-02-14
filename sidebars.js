module.exports = {
  home: [
    {
      type: "category",
      label: "Getting Started",
      link: {type: 'doc', id: 'home/index'},
      collapsed: false,
      collapsible: false,
      items: [{ type: "autogenerated", dirName: "home" }],
    }
  ],
  sdks: [
    {
      type: "category",
      label: "SDKs",
      link: {type: 'doc', id: 'sdk/index'},
      collapsed: false,
      collapsible: false,
      items: [{ type: "autogenerated", dirName: "sdk" }],
    }
  ],
  tools: [
    {
      type: "category",
      label: "Tools & Integrations",
      link: {type: 'doc', id: 'tools-and-integrations/index'},
      collapsed: false,
      collapsible: false,
      items: [{ type: "autogenerated", dirName: "tools-and-integrations" }],
    }
  ],
  bestPractices: [
    {
    type: "category",
    label: "Best Practices",
    link: {type: 'doc', id: 'best-practices/index'},
    collapsed: false,
    collapsible: false,
    items: [{ type: "autogenerated", dirName: "best-practices" }],
    }
  ],
};
