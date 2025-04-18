function showTab(tabId, element) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab').forEach(el => el.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    element.classList.add('active');

    // Активируем первый подтаб при смене категории
    if (tabId === 'dushevye') {
      document.querySelectorAll('.sub-tab').forEach(el => el.classList.remove('active'));
      document.querySelectorAll('.sub-tab-content').forEach(el => el.classList.remove('active'));
      document.querySelector('.sub-tab').classList.add('active');
      document.querySelector('.sub-tab-content').classList.add('active');
    }
}

function showSubTab(subTabId, element) {
    document.querySelectorAll('.sub-tab').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.sub-tab-content').forEach(el => el.classList.remove('active'));
    document.getElementById(subTabId).classList.add('active');
    element.classList.add('active');
}

function showInnerTab(tabId, element) {
    // Скрываем все inner-tab-content
    document.querySelectorAll('.inner-tab-content').forEach(function(content) {
        content.classList.remove('active');
    });

    // Показываем выбранную
    document.getElementById(tabId).classList.add('active');

    // Меняем активную inner-tab
    let innerTabs = element.parentElement.querySelectorAll('.inner-tab');
    innerTabs.forEach(tab => tab.classList.remove('active'));
    element.classList.add('active');
}

const productImages = document.querySelectorAll('.customer-gallery-img');
const productPopup = document.getElementById('productPopup');
const productPopupImg = document.getElementById('productPopupImg');
const productPopupClose = document.getElementById('productPopupClose');

productImages.forEach(img => {
    img.addEventListener('click', () => {
        productPopupImg.src = img.src;
        productPopup.style.display = 'flex';
        document.body.classList.add('prod-popup-open');
    });

    img.addEventListener('dblclick', (e) => {
        e.preventDefault();
    });
});

productPopupClose.addEventListener('click', () => {
    productPopup.style.display = 'none';
    document.body.classList.remove('prod-popup-open');
});

productPopup.addEventListener('click', (e) => {
    if (e.target === productPopup) {
        productPopup.style.display = 'none';
        document.body.classList.remove('prod-popup-open');
    }
});

















