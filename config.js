const config = new function() {
	const config = this;

	this.dev = true;
	this.ssl = false;
	this.port = "3060";
	this.staticFolder = "/dist"
	this.type = this.ssl ? "https://" : "http://";
	this.domain = this.type + "levelupworlds.com";
	this.staticURL = this.domain + this.staticFolder;
	this.host = this.dev ? "185.22.232.114" : "127.0.0.1";
	this.hosturl = this.type + this.host;
	this.sitename = "levelupworlds.com";
	this.token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsZXZlbHVwd29ybGRzLmNvbSIsImlhdCI6MTUwMzg0MDY5NCwiZXhwIjoxNTM1Mzc2NjkzLCJhdWQiOiJsZXZlbHVwd29ybGRzLmNvbSIsInN1YiI6IjUzOTkzNDg1IiwiYXBwbGljYXRpb25faWQiOiI1Mzk5MzQ4NSJ9.cgJLvuJYqbuVwz2mtwZ65kOENe1L1DCNkQe4qzVIx-o";
	this.mail = new function() {
		this.port = "3080";
		this.sendURL = config.hosturl + ':' + this.port + '/send';
		this.who = "Николас из Levelup Worlds";
		this.to = "beatzhitta@gmail.com";
	}
};


export default config;