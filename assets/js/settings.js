/* *************************** *\
Code is poetry.
iam [at] johnho.ca
\* *************************** */

/* Settings *\
\*==========*/
var settings = {
    //"links_path" : "links.txt",

    "links_path" : ["links/gtd.txt","links/personal.txt","links/dev.txt","links/yoga.txt","links/trading.txt","links/keepmoving.txt","links/rmotr.txt", "links/accelerate.txt", "links/jobs.txt","links/music.txt"],
    //\_added support for mulitple links pages
    //  tried using JS to parse all the files in the links directory but that's not possible in JS
    //  tried using JS + php but this will require that a local server to be running (for PHP to work)
    //     so, getting the user to input manually in the setting is best.

    "title":{
	"add_symbol": "&#2384",
	"default":"Here & Now"
    },
    //\_ Page's title: enter your personal mantra

    "navigation": {
	"newWindow": true,
	//\_ open links and search results in new tab?
	"menu_auto_close": false
	//\_ close links dropdown menu after a link is clicked?
    },

    "fonts":{
	"body": "Clear Sans",//"Calibri",
	"links": "Trebuchet MS", //"Helvetica"
	"toUpper": false
	//\_ should links and search engine label be all uppercase?
    },

    "icons": {
	"showIcons": false
    },

    "clock": {
	"IsMilitary": true
    },

    "weather": {
	"show": true,
	"geolocate": false,
	"default_loco": "Hong Kong, Hong Kong",
	"link":"http://wttr.in"
	//\ optional link for weather to a 3rd party app
    },

    "background": {
	"source":{
	    "baseUrl": "https://source.unsplash.com/collection/",
	    "dayColId":"407887",
	    "nightColId":"407877",
	    "dawnColId": "407882",
	    "duskColId": "407878"
	},
	"daily": false
	//\_ should background picture in each collection be only updated once per day?
    },

    "search": {
	"engines": [// format is [search url, search varible name (different for each site), label to be shown]
		    ["https://google.com/search", "q","GOOGLE"],
		    ["https://images.google.com/search", "q","GImg"],
		    ["https://google.com/maps", "q", "GMap"],
		    ["https://google.com/news", "q", "GNews"],
		    ["https://youtube.com/results", "search_query", "YouTube"],
		    ["https://soundcloud.com/search/sounds", "q", "SoundCloud"],
		    ["https://bing.com/search", "q", "Bing"],
		    ["https://github.com/search", "q", "GitHub"],
		    ["https://duckduckgo.com/", "q", "DuckDuckGo"],
		    ["https://wolframalpha.com/input/", "i", "WolframAlpha"]
		    ],
	"focusSearch": true,
	//\_ should the search box be selected on load?
	"showQuotes": true,
	"quotes":[
		  "What you seek is seeking you. ~ Rumi",
		  "This Universe is not outside of you. Look inside yourself; everything that you want, you already are. ~ Rumi",
		  //"You are not a drop in the ocean. You are the entire ocean in a drop. ~ Rumi",
		  "the Universe is in us. ~ Neil DeGrasse Tyson",
		  "What you seek you already are. ~ Deepak Chopra",
		  "All that you seek is already within you. ~ Ram Dass",
		  "Look within! The secret is inside you. ~ Hui Neng",
		  "Everything is within. Everything exists. Seek nothing outside of yourself. ~ Miyamoto Musashi",
		  "Search within... for honest self-expression. ~ Bruce Lee",
		  "Peace comes from within. Do not seek it without. ~ Buddha"
		  ]
    }
};
