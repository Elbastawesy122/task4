// Back to Top Button
const backToTopBtn = document.getElementById('back-to-top');
window.onscroll = () => {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

backToTopBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
