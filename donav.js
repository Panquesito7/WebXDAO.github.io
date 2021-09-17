let output = document.querySelector('.debugger');
if (output) {
  list.addEventListener('click', e => {
    if (e.target.nodeName === 'A') {
      output.innerHTML = `This would go to ${e.target.href}`;
      e.preventDefault();
    } else {
      output.innerHTML = 'Button clicked';
    }
  });
}

let steps = [
  'index.html'
];
let nav = document.createElement('nav');
let navlist = document.createElement('ul');
nav.appendChild(navlist);
out = '';
steps.forEach(s => {
  let name = s.replace(/\d?-/g,' ');
  if(document.location.href.includes(s)) {
    out += `<li class="current">${name.replace(/.html/,'').trim()}</li>`;

  } else {
    out += `<li><a href="${s}">${name.replace(/.html/,'').trim()}</a></li>`;
  }
});
navlist.innerHTML = out;
document.body.appendChild(nav)
