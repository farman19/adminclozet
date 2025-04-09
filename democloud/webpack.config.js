module.exports = {
    resolve: {
      fallback: {
        path: require.resolve('path-browserify'),
        stream: require.resolve('stream-browserify'),
        crypto: require.resolve('crypto-browserify'),
        buffer: require.resolve('buffer/'),
        zlib: require.resolve('browserify-zlib'),
        url: require.resolve('url/'),
        querystring: require.resolve('querystring-es3'),
        fs: false,  // You can set `false` if fs is not required in the browser
        net: false,  // You can set `false` if net is not required in the browser
        http: require.resolve('stream-http'),
        util: require.resolve('util/')
      }
    }
  };
  