module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pwa: {
    name: 'Trading Net',
    themeColor: '#FFFFFF',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // 配置 workbox 插件
    // workboxPluginMode: 'InjectManifest',
    // workboxOptions: {
    //   // InjectManifest 模式下 swSrc 是必填的。
    //   swSrc: 'dev/sw.js',
    //   // ...其它 Workbox 选项...
    // }
  }
}
