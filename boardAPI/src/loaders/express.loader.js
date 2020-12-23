import { json, urlencoded } from 'express';
import router from '../api/routes';

function loadExpress(app) {
  // middleware
  app.use(json());
  app.use(urlencoded({ extended: true }));

  // router
  app.use('/api', router());
  app.use('/favicon.ico', (req, res) => res.status(204));
  app.use('*', (req, res) => res.status(404).end());

  // error
  app.use((err, req, res, next) => {
    let code = err.status || 500;
    res.status(code).json({ success: false, message: err.message });
  });
}

export default loadExpress;
