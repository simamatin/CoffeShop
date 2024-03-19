let headerTitle = document.querySelector('.header-title');
let menuBtn = document.querySelector('.header__icon');
let menuBtnIcon = document.querySelector('.header__icon i');
let menu = document.querySelector('.menu');

// Start Hamburger Menu

menuBtn.addEventListener('click', () => {
   if (menuBtnIcon.classList.contains('fa-bars')) {
      menu.style.left = '0';
      menuBtnIcon.className = 'fa fa-close';
   } else {
      menu.style.left = '-160px';
      menuBtnIcon.className = 'fa fa-bars';
   }
})
// End Hamburger Menu


let headerTitleTypewriter = new Typewriter(headerTitle, {
   loop: true,
   cursor: '☕',
});

headerTitleTypewriter.typeString('به خوشمزه‌ترین قهوه‌خانۀ دنیا خوش آمدید: ')
   .pauseFor(2000)
   .deleteAll()
   .typeString('جایی که عشق به قهوه به زیبایی تبدیل می‌شود و لحظات‌تان را به شگفتی تبدیل می‌کند.')
   .deleteChars(82)
   .typeString('<strong>زیبایی و شگفتی...</strong>')
   .pauseFor(10000)
   // .stop();
   .start();