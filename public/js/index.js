// aタグの動作を停止
const Atag=document.querySelectorAll('a');
console.log(Atag);
Atag.forEach((a)=>{
    a.addEventListener('click',(e)=>{
        e.preventDefault();
    })
});

// .news-listと.news-btnを取得
const newsBtn=document.querySelectorAll('.news-btn');
const newsList=document.querySelectorAll('.news-list');
newsBtn[0].classList.add('active');
newsList[0].classList.add('news-list-active');

newsBtn.forEach(change => {
    change.addEventListener('click', function() {
        newsBtn.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
    });
});

newsBtn.forEach((link, index) => {
    link.addEventListener('click', function() {
        // すべての.work-introduction-listを非表示にする
        newsList.forEach(list => list.style.display = 'none');
        // クリックしたli要素のインデックスに対応する.work-introduction-listを表示する
        newsList[index].style.display = 'block';
        });
    });
    //初期状態で最初の.work-introduction-listを表示
    newsList.forEach((list, index) => {
        list.style.display = index === 0 ? 'block' : 'none';
    }
);

