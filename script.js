const messages = [
	"Hi! I'm Kishoon",
	'I was a simple guy living my life',
	'Running around looking for a perfect partner',
	'But then I saw you Popluu',
	'And I knew you were the one',
	'I was thinking about you all day every day',
	'I thought about this...',
	'...and this...',
	'...and this...',
	'Everything was lovely',
	'And I knew I had to tell you',
	'But what if you denied?',
	"What if you didn't feel the same?",
	"What if you didn't want to be with me?",
	'But then I thought...',
	'What if you did?',
	'What if you felt the same?',
	'What if you wanted to be with me?',
	'What if you loved me?',
	'So I decided to tell you',
	"And I'm telling you now",
	'I love you popluu',
	'Will you be my valentine?',
	'Please say yes',
];

let index = 0;
const root = document.getElementById('root');
const message = document.getElementById('message');
const gifElements = document.getElementsByClassName('tenor-gif-embed');
const next = document.getElementById('next');
const yes = document.getElementById('yes');
const no = document.getElementById('no');

showNext();

function showNext() {
	root.style.opacity = '0';
	setTimeout(() => {
		gifElements[index - 1]?.classList.add('hide');
		root.style.opacity = '1';
		gifElements[index].classList.remove('hide');
		message.innerText = messages[index];
		next.classList.remove('hide');
		index++;
	}, 1000);
	if (index === messages.length - 1) {
		setTimeout(() => {
			next.classList.add('hide');
			yes.classList.remove('hide');
			no.classList.remove('hide');
		}, 1000);
	}
}
function showYes() {
	root.style.opacity = '0';
	setTimeout(() => {
		yes.classList.add('hide');
		no.classList.add('hide');
		message.innerText = 'Thank you for accepting my proposal. I love you popluu.';
		gifElements[index - 1]?.classList.add('hide');
		root.style.opacity = '1';
		gifElements[index].classList.remove('hide');
	}, 1000);
}

function showNo() {
	console.log('mouse over no');
	no.style.position = 'absolute';
	no.style.left = `${Math.random() * 90}vw`;
	no.style.top = `${Math.random() * 90}vh`;
}
