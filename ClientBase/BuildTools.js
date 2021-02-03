function newDiv(id) {
        let div = document.createElement('div');
        div.id = id;
        div.style.padding = "5px;";
        div.style.background = "#525252";
        div.style.border = "solid";
        div.style.borderWidth = "1px";
        return div;
}
function newButton(id, DisplayName, onclick) {
        let button = document.createElement('input');
        button.type = "button";
        button.id = id;
        button.value = DisplayName;
        button.style.padding = "5px";
        button.onclick = onclick;
        return button;
}