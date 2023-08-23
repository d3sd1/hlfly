const createServer = require('./server');

const app = require('./app');

async function start() {
	const server = await createServer(app);

  server.get('/', (req, res) => {
    res.send('Welcome to Holafly\'s Technical test!');
  });

	// Start the GraphQL server
  const port = process.env.PORT || 4567;
	server.listen(port , () => {z
		console.log(`Server is running on port: ${port}`);
	});

}

start();
