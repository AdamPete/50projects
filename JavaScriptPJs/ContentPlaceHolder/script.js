const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
  header.innerHTML =
    '<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.cbrimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2019%2F10%2FHunter-x-Hunter-Featured-Image-1.jpg&f=1&nofb=1"" alt="" />';
  title.innerHTML = 'Gon';
  excerpt.innerHTML =
    'Is a rookie hunter and the son of Ging Freecss. Finding his father is Gons moviation in becoming a hunter.';
  profile_img.innerHTML =
    '<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimgix.ranker.com%2Fuser_node_img%2F3384%2F67662266%2Foriginal%2Fgon-freecss-fictional-characters-photo-u1%3Fw%3D280%26h%3D280%26fit%3Dcrop%26crop%3Dfaces%26q%3D50%26fmt%3Djpg&f=1&nofb=1" alt="" />';
  name.innerHTML = 'Gon Freecss';
  date.innerHTML = 'Oct 08, 2020';

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'));

  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'));
}
