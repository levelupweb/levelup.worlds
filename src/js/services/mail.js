import axios from 'axios';
import { NotificationManager } from 'react-notifications';
import config from '../utils/config';

const isHTML = response => response["content-type"].indexOf("html");

export default (data) => {
	return axios({
		method: "POST",
		url: config.emailurl,
		data
	})
	.then(({ data }) => {
		if(data.isSended) {
			NotificationManager.success("Сообщение успешно отправлен", 'Успех');
			return Promise.resolve();
		} else {
			NotificationManager.error("Сообщение успешно отправлен", 'Ошибка');
			return Promise.reject();
		}
	})
	.catch((err) => {
		if (err.response && err.response.status === 422) {
			NotificationManager.error('Пожалуйста, заполните форму правильными данными', 'Ошибка');
			return Promise.reject(err);
		}
		if (err.response && err.response.data === 'string') {
			NotificationManager.error(err.response.data, 'Ошибка');
			return Promise.reject(err);
		}
		return Promise.reject(err);
	})
	
}
