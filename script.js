// your code here
var form = document.querySelector("form");
var h3 =document.querySelector("h3");
var nameElement = document.querySelector("#name");
var yearElement= document.querySelector("#year");
var btn= document.querySelector("#button");
 function handleSubmit(event) {
 	event.preventDefault();
	 var h3Value= he.innerText;
	 var name = nameElement.value;
	 var year = yearElement.value;
	 if(name)
	 {
		 h3Value += '?name= ${name}';
	 }
	 else if (!name && year)
	 {
		 h3Value += '?year= ${year}';
	 }
	 else if(name && year)
	 {
		 h3Value+= '&year= ${year}';
	 }
	 h3.textContant= h3Value;
 }
btn.addEventListener('click' , handleSubmit);