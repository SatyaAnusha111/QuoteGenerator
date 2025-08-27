let  btn =document.querySelector('#new-quote');
let quote=document.querySelector('.quote');
let person=document.querySelector('.person');

const quotes=[{
	quote:'"The best way to find yourself is to lose yourself in the service of others. "',
	person:'Mahatma Gandhi'
},{
	quote:'"The greatest glory in living lies not in never falling, but in rising every time we fall."', 
	person:'Nelson Mandela'
},{
	quote:'"The way to get started is to quit talking and begin doing."',
	person:'Walt Disney'
},{
	quote:'"The future belongs to those who believe in the beauty of their dreams."',
	person:'Eleanor Roosevelt'
},{
	quote:'"If you set your goals ridiculously high and its a failure, you will fail above everyone else success."',
	person:'James Cameron'
},{
	quote:'"You may say Im a dreamer, but Im not the only one. I hope someday youll join us. And the world will live as one. "',
	person:'John Lennon'
},{
	quote:'"You must be the change you wish to see in the world. "',
	person:'Mahatma Gandhi'
},{
	quote:'"Spread love everywhere you go. Let no one ever come to you without leaving happier. "',
	person:'Mother Teresa'
},{
	quote:'"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that"',
	person:'Martin Luther King Jr.'
},{
	quote:'"Do one thing every day that scares you."',
	person:'Eleanor Roosevelt'
},];

    btn.addEventListener('click',function() {
		let random =Math.floor(Math.random() * quotes.length);
 
 console.log('random');
	quote.innerText = quotes[random].quote;
	person.innerText = quotes[random].person;

});

