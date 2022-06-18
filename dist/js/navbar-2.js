// Navbar Fixed Style 2
window.onscroll= function() {
    const header2 = document.querySelector('#navbar2');
    const fixedNav2 = header2.offsetTop;
    const toTop = document.querySelector('#to-top');
  
    if (window.pageYOffset > fixedNav2) {
      header2.classList.remove('py-8');
      header2.classList.add('py-3');

      

      // Button To Top
      toTop .classList.remove('hidden')
      
    } else {
      header2.classList.add('py-8');
      header2.classList.remove('py-3');

      

      // Button To Top
      toTop .classList.add('hidden')
    }
  }