/* We split he server out into a different file so that our tests don't hang
because the server is listening still */
const app = require('./server.js');
const port = process.env.PORT || 4001;

app.listen(port, () => {
  console.log(`The things, the things are happening on ${port}!!`);
  console.log('You can also do this... to show the port %d', port);
});
