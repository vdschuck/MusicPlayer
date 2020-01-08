const express = require('express');
const UniversityRoutes = require('./UniversityRoutes');
const UserRoutes = require('./UserRoutes');
const AccountRoutes = require('./AccountRoutes');
const MovimentationRoutes = require('./MovimentationRoutes');
const MediaRoutes = require('./MediaRoutes');
const FavoriteRoutes = require('./FavoriteRoutes');
const LibraryRoutes = require('./LibraryRoutes');
const ClassificationRoutes = require('./ClassificationRoutes');
const AlbumRoutes = require('./AlbumRoutes');
const NotificationRoutes = require('./NotificationRoutes');
const AppRoutes = require('./AppRoutes');

const routes = express.Router();

routes.use('/university', UniversityRoutes);
routes.use('/user', UserRoutes);
routes.use('/account', AccountRoutes);
routes.use('/movimentation', MovimentationRoutes);
routes.use('/media', MediaRoutes);
routes.use('/favorite', FavoriteRoutes);
routes.use('/library', LibraryRoutes);
routes.use('/classification', ClassificationRoutes);
routes.use('/album', AlbumRoutes);
routes.use('/notification', NotificationRoutes);
routes.use('/', AppRoutes);

module.exports = routes; 