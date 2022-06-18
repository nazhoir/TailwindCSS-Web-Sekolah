// Navbar Fixed Style 1
window.onscroll = function() {
    const header = document.querySelector('#navbar');
    const fixedNav = header.offsetTop;
    const daftar = document.querySelector('#tombol-daftar');
    const toTop = document.querySelector('#to-top');


    if (window.pageYOffset  > fixedNav ) {
        header.classList.remove('bg-transparent');
        header.classList.remove('text-white');
        header.classList.remove('py-8');
        header.classList.add('py-4');
        header.classList.add('bg-white');
        header.classList.add('dark:bg-slate-900');
        header.classList.add('dark:text-white');
        // Button daftar
        daftar.classList.remove('border-white');
        daftar.classList.add('bg-slate-900');
        daftar.classList.add('dark:border-black');
        daftar.classList.add('text-white');

        // Button To Top
        toTop .classList.remove('hidden')
    } else {
        header.classList.add('bg-transparent');
        header.classList.add('text-white');
        header.classList.add('py-8');
        header.classList.remove('py-4');
        header.classList.remove('bg-white');
        header.classList.remove('dark:bg-slate-900');
        header.classList.remove('dark:text-white');
        // Button daftar
        daftar.classList.add('border-white');
        daftar.classList.remove('bg-slate-900');
        daftar.classList.remove('text-white');
        daftar.classList.remove('dark:border-black');

        // Button To Top
        toTop .classList.add('hidden')
    }
};