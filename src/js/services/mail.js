import axios from "axios";
import { NotificationManager } from 'react-notifications';

class Mail {
	constructor(token, who, to, subject, url) {
		this.token = token;
		this.who = who;
		this.to = to;
		this.subject = subject;
		this.url = url;
	}
	dispatchSend(html) {
		return axios({
			method: "POST",
			url: this.url,
			headers: {
				"x-access-token": this.token 
			},
			data: {
				who: this.who,
				to: this.to,
				subject: this.subject,
				html,
			}
		}).then((response) => {
			const { success, message } = response.data;
			if(success) {
				NotificationManager.success(message, 'Успех');
				return true
			} else {
				NotificationManager.error(message, 'Ошибка');
				return false
			}
		}).catch((err) => {
			console.log(err);
			NotificationManager.error('Ошибка клиента', 'Ошибка');
			return false
		})
	}
}

export default Mail;
