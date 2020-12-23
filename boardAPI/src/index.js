import express from 'express';
import config from './config';
import loader from './loaders';

async function server() {
  const app = express();

  loader(app);

  app.listen(config.port, err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log('서버 시작');
  });
}

server();
