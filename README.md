# file download

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![License][license-src]][license-href]

封装了对于url和blob类型文件的下载方法。

## downloadFileFromURL

``` ts
function downloadFileFromURL(url: string, filename?: string)
```

url是网络请求的链接，filename不是必填，如果填了那么下载文件名称=filename

## downloadFileFromBlob

``` ts
function downloadFileFromBlob(blob: Blob | MediaSource, filename: string)
```

blob是一个blob对象，一般从后端获取，filename不是必填，如果填了那么下载文件名称=filename

# 地址

npm地址：

[@kzttools/file-downloader - npm](https://www.npmjs.com/package/@kzttools/file-downloader)

github地址：

[GitHub - kzttools/file-downloader](https://github.com/kzttools/file-downloader)

## License

[MIT](./LICENSE) License © 2023-PRESENT [kazoottt](https://github.com/kazoottt)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@kzttools/file-downloader?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@kzttools/file-downloader
[npm-downloads-src]: https://img.shields.io/npm/dm/@kzttools/file-downloader?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@kzttools/file-downloader
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@kzttools/file-downloader?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@kzttools/file-downloader
[license-src]: https://img.shields.io/github/license/kzttools/file-downloader.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/kzttools/file-downloader/blob/main/LICENSE
