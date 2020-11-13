const burger=document.querySelector(".burger");
const navMenu=document.querySelector(".nav-menu");
const navMenuItems=document.querySelectorAll(".nav-menu li");
burger.addEventListener("click",()=>{
	burger.classList.toggle("active");
	navMenu.classList.toggle("open");
	navMenuItems.forEach(function(item,index){
		if(item.style.animation){
			item.style.animation="";
		}else{
			item.style.animation='0.3s linear '+(0.3+index*0.1)+'s slidIn forwards';
		}
	});
});