; (function () {
    const $dropdownMenu = document.getElementById('drop-menu');
    const $arrowSvg = document.getElementById('chevron-circle-down');
    const $asideMenu = document.getElementById('aside-toggle');
    const $asideArrowSvg = document.getElementById('svg-toggle');
    const $dropContent = document.getElementById('drop-content');

    function addDropdownAnimation() {
        $arrowSvg.classList.add('arrow-rotation');
        $dropContent.classList.add('dropdown-animation');
        $dropdownMenu.removeEventListener('click', addDropdownAnimation);
    };
    function addHideAnimation() {
        $asideArrowSvg.classList.add('svg-aside-toggle');
        $asideMenu.removeEventListener('click', addHideAnimation);
    }
    $dropdownMenu.addEventListener('click', addDropdownAnimation);
    $asideMenu.addEventListener('click', addHideAnimation);
})();