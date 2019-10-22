import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('details', { path: '/details/:id' });
  this.route('about');
  this.route('favorites');
});

export default Router;
