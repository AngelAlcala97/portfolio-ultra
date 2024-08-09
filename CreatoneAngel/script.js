const sidebar= document.querySelector('header .sidebar')
const menuIcon= document.querySelector('#menuIcon')
const overview= document.querySelector('header .overview')
const main= document.querySelector('.main')



menuIcon.addEventListener('click', function () {
  if (sidebar.classList.contains('oculto')){
    sidebar.classList.remove('oculto');
    overview.classList.add('posicionAbierta')
    main.classList.add('posicionAbierta')
    menuIcon.innerHTML='<path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>'

  } else {
    sidebar.classList.add('oculto');
    overview.classList.remove('posicionAbierta')
    main.classList.remove('posicionAbierta')
    menuIcon.innerHTML='<path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>'

  }
  // listView.classList.remove('active');
  // projectsList.classList.remove('jsListView');
  // projectsList.classList.add('jsGridView');
});