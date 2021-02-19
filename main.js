window.addEventListener('load', () => {

   /* These two element will be mentioned more than once. So, it is preferred to bring them first  */
   const navbar = document.querySelector('.navbar');
   const sideNavigationMenu = document.querySelector('.navbar-2');


   //! Show/Hide the navigation menu 
   document.querySelector('[data-toggle="slide-collapse"]').addEventListener('click', function () {
      this.firstElementChild.classList.toggle('open');
      sideNavigationMenu.classList.toggle('left-0');
      document.body.classList.toggle('noScroll');
      document.documentElement.classList.toggle('noScroll');
   });
   /* ################################################### */


   //! This script sets the height of the side navigation menu for small and extra-small screens so that its height + the height of header = the height of the window. 

   function setSideMenuHeight() {
      const sideNavigationMenuHeight = window.innerHeight - navbar.clientHeight;

      if (window.innerWidth <= 767) {
         sideNavigationMenu.style.setProperty('height', `${sideNavigationMenuHeight}px`);
      }
   }

   setSideMenuHeight();
   window.addEventListener('resize', setSideMenuHeight);
   /* ################################################# */


   //! Setting a dynamic 'top' property for the side navigation menu. 
   //TODO Add the top property for small and extra-small screens. 
   function addDynamicTopProperty() {
      if (window.innerWidth <= 767) {
         sideNavigationMenu.style.setProperty('top', `${navbar.clientHeight}px`);
      }
   }

   addDynamicTopProperty();
   window.addEventListener('resize', addDynamicTopProperty);
   /* ################################################# */


   //! Positioning the full-screen dropdown-menu
   //? Get the dropdown
   const dropdown =
      document.getElementById('full-screen-dropdown');

   function setDynamicProps() {
      //TODO Get the bottom of the navbar 
      const navbarBottom = navbar.getBoundingClientRect().bottom;

      // Get the .showcase .container-lg element 
      const showcase = document.querySelector('.showcase .container-lg'),
         showcaseWidth =
            getComputedStyle(showcase).getPropertyValue('width'),
         showcaseLeft = showcase.getBoundingClientRect().left;

      dropdown.style.setProperty('top', `${navbarBottom}px`);
      dropdown.style.setProperty('width', showcaseWidth);
      dropdown.style.setProperty('left', `${showcaseLeft}px`);
   }

   setDynamicProps();
   window.addEventListener('resize', setDynamicProps);
   /* ################################################# */


   //! Show/Hide the full-screen dropdown-menu.
   //? Get the button (the last list item) first 
   const allMicrosoftBtn = document.getElementById('lastItem');
   allMicrosoftBtn.addEventListener('click', function () {
      this.classList.toggle('decorate-md');
      dropdown.classList.toggle('d-none');
      dropdown.classList.toggle('d-md-block');
   });

   /* ################################################# */



   //! This script is dedicated for the dropdown menus in small and extra-small screens. It simply show the dropdown menu of the list item that gets clicked. 

   // Get all the elements in the navbar with class: .wrapper . 
   const wrappers = document.querySelectorAll('.dropdown .wrapper');
   // Get the all the dropdown menus
   const dropdownMenus = document.querySelectorAll('.dropdown-menu');
   // Get all icons 
   const icons = document.querySelectorAll('.dropdown i');


   // Iterate over all the navbar items containing dropdown menus. 
   wrappers.forEach((wrapper, index) => {
      wrapper.addEventListener('click', () => {
         dropdownMenus[index].classList.toggle('show-dropdown');
         icons[index].classList.toggle('rotate180');
      });
   });
   /* ################################################ */


   //! This script is dedicated for the search input container on all medias.  
   const mediumSearchBox = document.getElementById('search-md');
   const smallSearchBox = document.getElementById('search-sm');
   const cancelBtn = mediumSearchBox.querySelector('button');
   const navbarListHolder = document.getElementById('collapsibleNavbar');
   const searchIcon = document.getElementById('searchIcon');
   const loginIcon = document.querySelector('.fa-user-circle');
   const togglerBtn = document.querySelector('nav.navbar-1 [data-toggle]');
   const brand = document.querySelector('.navbar-brand');
   const goBackBtn = document.getElementById('goBack');



   searchIcon.addEventListener('click', function () {
      this.classList.add('hide');
      if (window.innerWidth >= 768) {
         navbarListHolder.classList.add('hide');
         loginIcon.classList.add('hide');
         mediumSearchBox.classList.remove('hide');
      } else {
         brand.classList.add('hide');
         loginIcon.classList.add('hide');
         togglerBtn.classList.add('hide');
         smallSearchBox.classList.remove('hide');
      }
   });

   cancelBtn.addEventListener('click', () => {
      mediumSearchBox.classList.add('hide');
      navbarListHolder.classList.remove('hide');
      searchIcon.classList.remove('hide');
      loginIcon.classList.remove('hide');
   });


   goBackBtn.addEventListener('click', () => {
      searchIcon.classList.remove('hide');
      brand.classList.remove('hide');
      loginIcon.classList.remove('hide');
      togglerBtn.classList.remove('hide');
      smallSearchBox.classList.add('hide');
   });

   /* ################################################# */

   //! Set an event listener when the user clicks the search icon inside besides the input field of the form so that when it gets clicked the form is submitted. 
   const searchIcons = document.querySelectorAll('form i');
   searchIcons.forEach(icon => {
      icon.addEventListener('click', () => {
         icon.closest('form').submit();
      });
   });
   /* ################################################ */


   //! Stop propagating the click event when clicking any .nav-link element in the side navigation menu. 
   const sideMenuLinks = sideNavigationMenu.querySelectorAll('li.nav-item.dropdown .nav-link');

   sideMenuLinks.forEach(link => {
      link.addEventListener('click', e => {
         e.stopPropagation();
      });
   });


});
