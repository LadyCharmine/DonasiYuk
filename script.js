// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// Toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
  };

// Toggle class active untuk donasi cart
const donasiCart = document.querySelector('.donasi-cart');
document.querySelector('#log-in-button').onclick = (e) => {
  donasiCart.classList.toggle('active');
  e.preventDefault();
}

// klik diluar elemen hm = hamburger sb = search button
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const dc = document.querySelector('#log-in-button');

document.addEventListener('click', function (e) {
    if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove('active');
    }

    if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
      searchForm.classList.remove('active');
    }
    if (!dc.contains(e.target) && !donasiCart.contains(e.target)) {
      donasiCart.classList.remove('active');
    }
});

// Modal Box
const itemDetailModal = document.querySelector('#donasi-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = 'flex';
    e.preventDefault();
  }
})


// klik tombol close modal
document.querySelector ('.modal .close-icon').onclick = (e) => {
  itemDetailModal.style.display = 'none';
  e.preventDefault();
}

// klik di luar modal
// const modal = document.querySelector('#donasi-detail-modal');
window.onclick = (e) => {
  if (e.target === itemDetailModal){
    itemDetailModal.style.display = 'none';
  }
}

// Script untuk Modal Box Pendidikan
// Modal Box Pendidikan
const pendidikanDetailModal = document.querySelector('#pendidikan-detail-modal');
const pendidikanDetailButtons = document.querySelectorAll('.item-detail-button-pendidikan');

pendidikanDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    pendidikanDetailModal.style.display = 'flex';
    e.preventDefault();
  };
});

// Klik tombol close modal pendidikan
document.querySelector('.modal .close-icon-pendidikan').onclick = (e) => {
  pendidikanDetailModal.style.display = 'none';
  e.preventDefault();
};

// Klik di luar modal
window.onclick = (e) => {
  if (e.target === donasiDetailModal) {
    donasiDetailModal.style.display = 'none';
  } else if (e.target === pendidikanDetailModal) {
    pendidikanDetailModal.style.display = 'none';
  }
};

// Script untuk Modal Box Makanan
// Modal Box Makanan
const makananDetailModal = document.querySelector('#makanan-detail-modal');
const makananDetailButtons = document.querySelectorAll('.item-detail-button-makanan');

makananDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    makananDetailModal.style.display = 'flex';
    e.preventDefault();
  };
});

// Klik tombol close modal pendidikan
document.querySelector('.modal .close-icon-makanan').onclick = (e) => {
  makananDetailModal.style.display = 'none';
  e.preventDefault();
};

// Klik di luar modal
window.onclick = (e) => {
  if (e.target === donasiDetailModal) {
    donasiDetailModal.style.display = 'none';
  } else if (e.target === makananDetailModal) {
    makananDetailModal.style.display = 'none';
  }
};

// Informasi Modal Box
// Modal Box Kesehatan
const infoDetailModalKesehatan = document.querySelector('#info-detail-modal-kesehatan');
const infoDetailButtonsKesehatan = document.querySelectorAll('.info-detail-button-kesehatan');

infoDetailButtonsKesehatan.forEach((btn) => {
  btn.onclick = (e) => {
    infoDetailModalKesehatan.style.display = 'flex';
    e.preventDefault();
  }
});

// Klik tombol close modal
infoDetailModalKesehatan.querySelector('.close-icon-makanan').onclick = (e) => {
  infoDetailModalKesehatan.style.display = 'none';
  e.preventDefault();
};

// Klik di luar modal
window.onclick = (e) => {
  if (e.target === infoDetailModalKesehatan) {
    infoDetailModalKesehatan.style.display = 'none';
  }
};

// Modal Box Kesehatan
const infoDetailModalPendidikan = document.querySelector('#info-detail-modal-pendidikan');
const infoDetailButtonsPendidikan = document.querySelectorAll('.info-detail-button-pendidikan');

infoDetailButtonsPendidikan.forEach((btn) => {
  btn.onclick = (e) => {
    infoDetailModalPendidikan.style.display = 'flex';
    e.preventDefault();
  }
});

// Klik tombol close modal
infoDetailModalPendidikan.querySelector('.close-icon-makanan').onclick = (e) => {
  infoDetailModalPendidikan.style.display = 'none';
  e.preventDefault();
};

// Klik di luar modal
window.onclick = (e) => {
  if (e.target === infoDetailModalPendidikan) {
    infoDetailModalPendidikan.style.display = 'none';
  }
};

// Modal Box Makanan
const infoDetailModalMakanan = document.querySelector('#info-detail-modal-makanan');
const infoDetailButtonsMakanan = document.querySelectorAll('.info-detail-button-makanan');

infoDetailButtonsMakanan.forEach((btn) => {
  btn.onclick = (e) => {
    infoDetailModalMakanan.style.display = 'flex';
    e.preventDefault();
  }
});

// Klik tombol close modal
infoDetailModalMakanan.querySelector('.close-icon-makanan').onclick = (e) => {
  infoDetailModalMakanan.style.display = 'none';
  e.preventDefault();
};

// Klik di luar modal
window.onclick = (e) => {
  if (e.target === infoDetailModalMakanan) {
    infoDetailModalMakanan.style.display = 'none';
  }
};

// Ini untuk elipsis pada bar donasi terkumpul

window.addEventListener('DOMContentLoaded', (event) => {
    const menuCardDonasiEls = document.querySelectorAll('.menu-card-total-donasi');
    const maxWords = 20;
  
    menuCardDonasiEls.forEach((el) => {
      const originalText = el.textContent.trim();
  
      if (originalText.split(' ').length > maxWords) {
        const words = originalText.split(' ').slice(0, maxWords);
        const truncatedText = words.join(' ') + '...';
        el.textContent = truncatedText;
      }
    });
  });

// Untuk menyembunyikan placeholder pada form login user

const usernameInput = document.getElementById('username');
const usernameLabel = document.querySelector('label[for="username"]');
const passwordInput = document.getElementById('password');
const passwordLabel = document.querySelector('label[for="password"]');

usernameInput.addEventListener('input', () => {
  if (usernameInput.value !== '') {
    usernameLabel.style.visibility = 'hidden';
  } else {
    usernameLabel.style.visibility = 'visible';
  }
});

passwordInput.addEventListener('input', () => {
  if (passwordInput.value !== '') {
    passwordLabel.style.visibility = 'hidden';
  } else {
    passwordLabel.style.visibility = 'visible';
  }
});