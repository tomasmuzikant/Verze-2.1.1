const navSlide = function() {
	const burger = document.querySelector('.burger')
	const nav = document.querySelector('.nav-links')

	burger.addEventListener('click', function() {
		nav.classList.toggle('nav-active')
		burger.classList.toggle('taggle')
	});
};

const currentLocation = location.href
const menuItemMobile = document.querySelectorAll(".menu-item-mobile")
for(let i = 0; i < menuItemMobile.length; i++){
	if(menuItemMobile[i].href === currentLocation){
		menuItemMobile[i].className = "active-mobile-page"
	}
}

const menuItem = document.querySelectorAll(".menu-item")
for(let i = 0; i < menuItem.length; i++){
	if(menuItem[i].href === currentLocation){
		menuItem[i].classList.add("active-page")
	}
}

const showHideMenu = document.querySelectorAll(".show-hide-menu")
showHideMenu.forEach(function(element, index){
	element.addEventListener("click", function(){
		const mobileDropDownMenu = document.querySelectorAll(".drop-down-mobile")
		let displayResult = window.getComputedStyle(mobileDropDownMenu[index]).display

		if (displayResult === "none"){
			mobileDropDownMenu[index].style.display ="block"
		} else {
			mobileDropDownMenu[index].style.display = "none"
		}
	})
})

navSlide()

