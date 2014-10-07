steal("./app.js",
  "./activitySummary.js",
  "./article.js",
	"./chatLine.js",
	"./configuration.js",
	"./forumPost.js",
	"./githubEvent.js",
	"./githubIssue.js",
	"./plugin.js",
	"./tweet.js", function(app, activitySummary, article, chatLine, configuration, forumPost, githubEvent, githubIssue, plugin, tweet){
		return {
			app: app,
			activitySummary: activitySummary,
			article: article,
			chatLine: chatLine,
			configuration: configuration,
			forumPost: forumPost,
			githubEvent: githubEvent,
			githubIssue: githubIssue,
			plugin: plugin,
			tweet: tweet
		};
	});
