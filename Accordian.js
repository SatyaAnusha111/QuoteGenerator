var accordion=document.getElementsByClassName('Content-Container');

for (i=0 ; i< accordion.length ; i++){

	accordion[i].addEventListener('click',function(){
		this.classList.toggle('active');
	})
};