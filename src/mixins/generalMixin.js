import alanBtn from "@alan-ai/alan-sdk-web";
import axios from "axios";
import wtn from "words-to-numbers";
export default {
	data() {
		return {
			alanKey: process.env.VUE_APP_ALAN_KEY,
			NEWS_API_KEY: process.env.VUE_APP_NEWS_KEY,
			savedSources: [],
			newsQueried: [],
			activeArticle: 0,
		};
	},
	methods: {
		openNotification(config) {
			let { title, position, text } = config;
			title = title || "Welcome";
			position = position || "top-right";
			text = text || "";
			this.$vs.notification({
				title: title,
				position: position,
				text: `${text}`,
			});
		},
		async getNews(type) {
			type = type || "headlines";
			let NEWS_API_URL;
			let title = "Headlines";
			let text = "Here are today's top headlines for US";
			let config = {
				title: title,
				text: text,
			};
			let baseUrl = "https://newsapi.org/v2/";
			switch (type) {
				case "sources":
					title = "Sources";
					NEWS_API_URL = ` ${baseUrl}sources&apiKey=${this.NEWS_API_KEY}`;
					break;
				case "headlines":
					NEWS_API_URL = ` ${baseUrl}top-headlines?country=us&category=general&apiKey=${this.NEWS_API_KEY}`;
					break;
			}
			try {
				const response = await axios.get(NEWS_API_URL);
				if (type == "headlines") {
					const { articles, totalResults } = response.data;
					console.log(articles, totalResults);
					this.newsQueried = articles;
				} else if (type == "sources") {
					const { sources, totalResults } = response.data;
					console.log(sources, totalResults);
					this.savedSources = sources;
				}
			} catch (error) {
				console.log(error);
				config.text = "Error retrieving today's top headlines for US";
				this.openNotification(config);
			} finally {
				//dance
			}
		},
		openFullscreen() {
			const elem = document.documentElement;
			if (elem.requestFullscreen) {
				elem.requestFullscreen();
			} else if (elem.webkitRequestFullscreen) {
				/* Safari */
				elem.webkitRequestFullscreen();
			} else if (elem.msRequestFullscreen) {
				/* IE11 */
				elem.msRequestFullscreen();
			}
		},
	},
	mounted() {
		console.log(process.env.VUE_APP_ALAN_KEY);
	},
	created() {
		let alanBtnInstance = alanBtn({
			key: this.alanKey,
			onConnectionStatus: async function(status) {
				console.log(status);
				// if (status === "authorized") {
				// 	await alanBtnInstance.activate();
				// 	alanBtnInstance.playText("Hey, welcome! You can ask me for the news");
				// 	alanBtnInstance.deactivate();
				// }
			},
			onCommand: (commandData) => {
				console.log(commandData);
				let parsedNumber;
				let article;
				const {
					command,
					number,
					articles,
					savedArticles,
					search_url,
				} = commandData;
				switch (command) {
					case "netflix":
					case "youtube":
					case "google":
					case "googlesnow":
						window.open(search_url, "_blank");
						this.openFullscreen();
						break;
					case "newsSources":
						this.newsQueried = [];
						this.savedSources = commandData.savedArticles;
						break;
					case "newHeadlines":
					case "todaysHeadlines":
					case "categoryNews":
					case "terms":
						this.savedSources = [];
						if (command === "newHeadlines") {
							this.newsQueried = savedArticles;
						} else {
							this.newsQueried = commandData.searchedNews;
						}
						console.log(this.newsQueried);
						break;
					case "highlight":
						++this.activeArticle;
						console.log(this.activeArticle);
						break;
					case "open":
						parsedNumber =
							number.length > 2 ? wtn(number, { fuzzy: true }) : number;
						article = articles[parsedNumber - 1];

						if (parsedNumber > articles.length) {
							alanBtnInstance.playText("Please try that again...");
						} else if (article) {
							window.open(article.url, "_blank");
							alanBtnInstance.playText("Opening...");
						} else {
							alanBtnInstance.playText("Please try that again...");
						}
						break;
				}
				this.savedSources["type"] = this.newsQueried["type"] = command;
			},
		});
		// setTimeout(
		// 	() =>
		// 		(this.savedSources = [
		// 			{
		// 				category: "general",
		// 				country: "us",
		// 				description:
		// 					"Your trusted source for breaking news, analysis, exclusive interviews, headlines, and videos at ABCNews.com.",
		// 				id: "abc-news",
		// 				language: "en",
		// 				name: "ABC News",
		// 				url: "https://abcnews.go.com",
		// 			},
		// 			{
		// 				category: "general",
		// 				country: "au",
		// 				description:
		// 					"Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
		// 				id: "abc-news-au",
		// 				language: "en",
		// 				name: "ABC News (AU)",
		// 				url: "http://www.abc.net.au/news",
		// 			},
		// 		])
		// );
	},
};
