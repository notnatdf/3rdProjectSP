const path = require("path");
// storybook을 위한 config설정들
module.exports = {
  // stories 파일이 어디에 있는지 경로 설정
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  // addons 세팅 , 유니버스엔 하얀 컴포넌트들이 많아서 다크모드를 적용시켜줌
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-styled-component-theme/dist/preset",
    "storybook-dark-mode",
  ],
  webpackFinal: async (config) => {
    // node_mules폴더와 styles 폴더 안의 모듈을 인식할 수 있게 함
    config.resolve.modules = [
      path.resolve(__dirname, ".."),
      "node_modules",
      "styles",
    ];

    // 절대 경로 설정
    config.resolve.alias = {
      ...config.resolve.alias,
      "@components": path.resolve(__dirname, "../components"),
      "@assets": path.resolve(__dirname, "../public/assets"),
    };

    return config;
  },
};
