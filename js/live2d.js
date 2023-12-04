var resources = performance.getEntriesByType('resource');
var scriptResources = resources.filter(function (entry) {
    return entry.initiatorType === 'script';
});

var loaded = false;
scriptResources.forEach(function (entry) {
    if (entry.name == 'https://fastly.jsdelivr.net/gh/dreamjz/live2d-widget@latest/autoload.js') {
        loaded = true;
    }
});

if (!loaded) {
    // 创建 script 元素
    var scriptElement = document.createElement('script');

    // 设置 script 元素的属性
    scriptElement.src =
        'https://fastly.jsdelivr.net/gh/dreamjz/live2d-widget@latest/autoload.js';
    scriptElement.type = 'text/javascript';

    // 将 script 元素添加到 body 标签中
    document.body.appendChild(scriptElement);
}
