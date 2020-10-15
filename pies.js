// TODO: This is actually a nice simple site to test vanilla rxjs, jquery, web components, or
// making vanilla components with pure js, as well as testing fp and OOP techniques.
window.addEventListener('DOMContentLoaded', e => {
  const buttons  = document.querySelectorAll('button[data-order]');
  buttons.forEach(b => b.addEventListener('click', (e) => {
      const button = e.currentTarget;
      const container = button.parentNode;
      const order = {
          id: button.getAttribute('data-order'),
          title: container.querySelector('.title').innerText,
          price: container.querySelector('.price').innerText,
          description: container.querySelector('.pie-description').innerText
      };
      window.localStorage.setItem('order', JSON.stringify(order));
      /* redirect with plain js */
      const nextUrl = window.location.href.replace('pies.html', 'order.html');
      window.location.href = nextUrl;
  }));
});
