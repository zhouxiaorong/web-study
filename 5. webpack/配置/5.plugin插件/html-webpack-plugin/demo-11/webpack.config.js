var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'title',
      filename: 'index-1.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'title',
      filename: 'index-2.html',
      templateContent: `<!DOCTYPE html>
                          <html lang="en">
                          <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Document</title>
                            <style>
                              body {color: green;}
                            </style>
                          </head>
                          <body>
                            
                          </body>
                          </html>`,
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'title',
      filename: 'index-3.html',
      templateContent: function (a) {
        console.log('a:'+a.constructor)
        return `<!DOCTYPE html>
                  <html lang="en">
                  <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Document</title>
                    <style>
                      body {color: yellow;}
                    </style>
                  </head>
                  <body>
                    
                  </body>
                  </html>`
      },
    }),
  ]
}