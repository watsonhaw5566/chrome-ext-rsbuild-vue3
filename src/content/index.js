console.log('Content script loaded');

try {
  const badge = document.createElement('div');
  badge.textContent = 'Vue3-Ext';
  badge.style.cssText = 'position:fixed;right:8px;bottom:8px;padding:4px 6px;background:#42b883;color:#fff;font:12px/1 sans-serif;border-radius:4px;z-index:2147483647;';
  document.documentElement.appendChild(badge);
} catch (e) {
  // noop
}

