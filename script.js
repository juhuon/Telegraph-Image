// 获取页面元素
var adContainer = document.getElementById('ad-container');
var adCloseBtn = document.getElementById('ad-close-btn');
var body = document.getElementsByTagName('body')[0];

// 关闭广告
function closeAd() {
  adContainer.classList.remove('show'); // 隐藏广告容器
  body.style.overflow = 'auto'; // 恢复滚动条
}

// 显示广告
function showAd() {
  adContainer.classList.add('show'); // 显示广告容器
  body.style.overflow = 'hidden'; // 禁用滚动条
}

// 点击关闭按钮关闭广告
adCloseBtn.onclick = closeAd;

// 页面加载完成后显示广告
window.onload = showAd;
// 使网站变暗
function darken() {
  var overlay = document.createElement('div');
  overlay.id = 'overlay';
  overlay.style.position = 'fixed';
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.background = 'rgba(0, 0, 0, 0.5)';
  overlay.style.zIndex = 9998;
  body.appendChild(overlay);
}

// 恢复网站亮度
function restore() {
  var overlay = document.getElementById('overlay');
  if (overlay) {
    body.removeChild(overlay);
  }
}

// 显示广告时使网站变暗
function showAd() {
  darken(); // 使网站变暗
  adContainer.classList.add('show'); // 显示广告容器
  body.style.overflow = 'hidden'; // 禁用滚动条
}

// 关闭广告时恢复网站亮度
function closeAd() {
  restore(); // 恢复网站亮度
  adContainer.classList.remove('show'); // 隐藏广告容器
  body.style.overflow = 'auto'; // 恢复滚动条
}
