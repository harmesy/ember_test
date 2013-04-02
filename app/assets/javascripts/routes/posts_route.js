EmberTest.PostsRoute = Ember.Route.extend({
	model: function() {
		return EmberTest.Post.find();
	}
});