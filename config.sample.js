const config = new function() {
	const config = this;

	this.dev = "TRUE OR FALSE";
	this.ssl = "TRUE OR FALSE";
	this.port = "PORT";
	this.staticFolder = "/dist" // don't change
	this.type = this.ssl ? "https://" : "http://";
	this.domain = this.type + (this.dev ? "localhost:" + this.port : "YOUR DOMAIN");
	this.staticURL = this.domain + this.staticFolder;
	this.host = this.dev ? "127.0.0.1" : "YOUR HOST";
	this.hosturl = this.type + this.host;
	this.sitename = "YOUR SITE NAME";
	this.token = "APPLICATION TOKEN";
	this.mail = new function() {
		this.port = "MAIL PORT";
		this.sendURL = config.hosturl + ':' + this.port;
		this.who = "FROM WHO MAIL";
		this.to = "TO";
	}
};


export default config;