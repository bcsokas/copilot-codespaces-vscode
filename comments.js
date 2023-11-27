// Create web server
// Run: node comments.js
// Output: http://localhost:3000/
//         http://localhost:3000/comments
//         http://localhost:3000/comments/1
//         http://localhost:3000/comments/2
//         http://localhost:3000/comments/3
//         http://localhost:3000/comments/4

var http = require('http');
var url = require('url');

var comments = [
  { name: 'Tom', comment: 'Hello World' },
  { name: 'Jack', comment: 'Nice to meet you' },
  { name: 'Jane', comment: 'Good morning' },
  { name: 'John', comment: 'Good night' }
];

var server = http.createServer(function(req, res) {
  var urlObj = url.parse(req.url, true);

  if (urlObj.pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body>');
    res.write('<h1>Comment list</h1>');
    res.write('<ul>');
    comments.forEach(function(comment) {
      res.write('<li>');
      res.write(comment.name + ': ' + comment.comment);
      res.write('</li>');
    });
    res.write('</ul>');
    res.write('<form method="post" action="/comments">');
    res.write('<input type="text" name="name">');
    res.write('<textarea name="comment"></textarea>');
    res.write('<input type="submit" value="Submit">');
    res.write('</form>');
    res.write('</body></html>');
    res.end();
  } else if (urlObj.pathname === '/comments') {
    if (req.method === 'GET') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write('<html><body>');
      res.write('<h1>Comment list</h1>');
      res.write('<ul>');
      comments.forEach(function(comment) {
        res.write('<li>');
        res.write(comment.name + ': ' + comment.comment);
        res.write('</li>');
      });
      res.write('</ul>');
      res.write('<form method="post" action="/comments">');
      res.write('<input type="text" name="name">');
      res.write('<textarea name="comment"></textarea>');
      res.write('<input type="submit" value="Submit">');
      res.write('</