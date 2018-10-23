var celebrationNames = [
    'Ngô Thị Mai',
    'Giang Thị Tình',
    'Giang Thị Hạnh',
    'Trần Thị Hương Ly',
    'Đặng Danh Quảng'
];
var showMore = document.getElementById('show-more');
showMore.onclick = function () {
    this.classList.add('hidden-tag');
    var listName=document.getElementById('list-name');
    for (var i = 0; i < celebrationNames ; i++) {
        listName.innerHTML += '<li>'+ celebrationNames[i]+'</li>';
    }
}