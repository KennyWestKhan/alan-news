module.exports = {
	publicPath:
		process.env.NODE_ENV === "production"
			? "/alan-news.github.io/dist/"
			: "/dist",
};
