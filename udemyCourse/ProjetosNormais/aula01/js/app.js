// const request = obj => {
//   const xhr = new XMLHttpRequest();
//   xhr.open(obj.method, obj.url, true);
//   xhr.send();

//   xhr.addEventListener('load', () => {
//     if (xhr.status >= 200 && xhr.status < 300) {
//       obj.success(xhr.responseText);
//     } else {
//       obj.error(xhr.statusText);
//     }
//   });
// };

document.addEventListener('click', e => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();
  if (tag === 'a') {
    e.preventDefault();
    loadPage(el);
  }
});

async function loadPage(el) {
  try {
    const href = el.getAttribute('href');
    const response = await fetch(href);
    const html = await response.text();
    loadHtml(html);
  } catch(e){
    console.error(e);
  }  
}

function loadHtml(res) {
  const result = document.querySelector('.resultado');
  result.innerHTML = res;
}
