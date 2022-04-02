const ddd = {
  id: '@id',
  des: '@cparagraph()'
}
module.exports = [{
  url: '/api/permission',
  type: 'post',
  response (ctx) {
    const { id, userName, token } = ctx.body;
    console.log('mock，/api/permission, body: ', id, userName, token );
    return ddd;
  }
}]