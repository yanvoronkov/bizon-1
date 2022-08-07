
const TOKEN = "569789751:AAFetoJSU1beksK8FXXED2oUI4nCWLu5CPI";
const CHAT_ID = "-673031897";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const success = document.getElementById('success');



document.getElementById('form').addEventListener('submit', function (e) {
	e.preventDefault();

	let message = `Заявка с сайта!\n`;
	message += `Имя: ${this.name.value}\n`;
	message += `Телефон: ${this.phone.value}\n`;
	message += `Вид кофе: ${this.message.value}`;

	axios.post(URI_API, {
		chat_id: CHAT_ID,
		parse_mod: 'html',
		text: message
	})
		.then((res) => {
			this.name.value = "";
			this.phone.value = "";
			this.message.value = "";
			success.style.display = "flex";
			form.style.display = "none";
		})
		.catch((err) => {
			console.warn(err);
		})
		.finally(() => {
			console.log('Конец');

		})

}) 
