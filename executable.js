(() => {
  if (document.getElementById('demo-menu')) return; // prevent duplicates

  const menu = document.createElement('div');
  menu.id = 'demo-menu';
  menu.style.position = 'fixed';
  menu.style.top = '10px';
  menu.style.right = '10px';
  menu.style.width = '200px';
  menu.style.background = 'rgba(0,0,0,0.8)';
  menu.style.color = '#fff';
  menu.style.padding = '10px';
  menu.style.borderRadius = '8px';
  menu.style.zIndex = 999999;
  menu.style.fontFamily = 'Arial, sans-serif';
  menu.style.userSelect = 'none';

  const title = document.createElement('h3');
  title.textContent = 'Demo Menu';
  title.style.margin = '0 0 10px 0';
  title.style.fontSize = '18px';
  menu.appendChild(title);

  const btnAlert = document.createElement('button');
  btnAlert.textContent = 'Alert Hello';
  btnAlert.style.marginBottom = '8px';
  btnAlert.onclick = () => alert('Hello from Demo Menu!');
  menu.appendChild(btnAlert);

  const btnChangeBG = document.createElement('button');
  btnChangeBG.textContent = 'Toggle BG Color';
  btnChangeBG.style.marginBottom = '8px';
  let toggled = false;
  btnChangeBG.onclick = () => {
    document.body.style.backgroundColor = toggled ? '' : '#222';
    toggled = !toggled;
  };
  menu.appendChild(btnChangeBG);

  const btnClose = document.createElement('button');
  btnClose.textContent = 'Close Menu';
  btnClose.onclick = () => menu.remove();
  menu.appendChild(btnClose);

  document.body.appendChild(menu);
})();
