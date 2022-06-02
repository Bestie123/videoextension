anomfuncarr = [];
setInterval(function() {
    anomfuncarr.shift()()
}, 500)
document.body.addEventListener("DOMNodeInserted", function(e) {
    if (e.target.parentElement.getAttribute("class") == "olist") {
        var eeee = vkApi.api('video.getAlbums', {
            count: 100,
            extended: 0,
            need_system: 1,
            v: "5.81"
        }, function(r) {});
        Promise.all([eeee]).then((values) => {
            if (e.target.parentElement.children.length >= values[0].count) {
                checklist2 = {}; // выделенные альбомы
                var albumschecklist = document.getElementsByClassName("olist");
                albumschecklist2 = albumschecklist[0].children;
                listArray3 = [...albumschecklist2];
                listArray3.forEach((item) => {
                    checklist2[item.getAttribute("id")] = item.getAttribute("class");
                    MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
                        observer = new MutationObserver(function(mutations) {
                            mutations.forEach(function(mutation) {
                                checklist2[mutation.target.getAttribute("id")] = mutation.target.getAttribute("class");
                            });
                        });
                    observer.observe(item, {
                        attributes: true
                    });
                });
            };
        })
    } else if (e.target.getAttribute("class") == "FlatButton FlatButton--primary FlatButton--size-m") {
        e.target.addEventListener("click", function() {
            ee22 = Object.keys(checklist2);
            llll3 = [];
            ee22.forEach((item) => {
                checklist2[item].split(" ").forEach((item2) => {
                    if (item2 == "olist_item_wrap_on") {
                        llll3.push(parseInt(item.split("wrap")[1],10)); // ид плейлистов куда добавлять видео
                        delete checklist2[item];
                    }
                });
            })
            ee = Object.keys(araayvideolist)
            ee.forEach((item) => {
                llll1 = item.split("_")[2] // ид владельца
                llll2 = item.split("_")[3] // ид видео
                var darsi = function() {
                    var a2 = parseInt(llll1, 10);
                    var a3 = parseInt(llll2, 10);
                    var a4 = llll3;
                    var anomfunc2 = function() {
                        ajax.post('/al_video.php', {
                            act: 'a_add_to_playlist',
                            oid: a2,
                            vid: a3, //
                            playlists: a4,
                            hash: araayvideolist[item]
                        })
                    }
                    anomfuncarr.push(anomfunc2);
                };
                darsi();
            })
        })
    }
});



var araayvideolist = {};
listItem2 = document.getElementById("video_all_list").children;
listArray2 = Array.from(listItem2);
listArray2 = [...listItem2];
listArray2.forEach((item) => {
    item.addEventListener('click', function(event) {
        if (event.shiftKey === true && event.type === "click") { //	если зажат шивт и кликнуто мышкой то выполнить код
            if (event.target.className === "VideoCard__controls video_item_controls") {
                ggggg = event.path[3].getAttribute("ckeckn1");
                if (ggggg == "null" || ggggg == null || ggggg == 0 || ggggg == "0" || ggggg == '0') {
                    ggggg2 = event.path[3].getAttribute("ckeckn1");
                    araayvideolist[event.path[3].getAttribute("id")] = event.path[3].getAttribute("data-hash");
                    //выделение видео в рамку
                    event.path[3].setAttribute("style", "outline:  4px solid #6640cf; /* Чёрная рамка */    border: 3px solid #fff; /* Белая рамка */    border-radius: 10px; /* Радиус скругления */");
                    event.path[3].setAttribute("ckeckn1", "1")
                } else {
                    delete araayvideolist[event.path[3].getAttribute("id")];
                    event.path[3].setAttribute("style", "");
                    event.path[3].setAttribute("ckeckn1", "0")
                }
            }
        }
    });
});

var fixpositioncrackvideo = document.getElementById("video_all_list").children.length;
document.getElementById("video_all_list").addEventListener("DOMNodeInserted", function(e) {
    if (fixpositioncrackvideo <= document.getElementById("video_all_list").children.length) {
        e.path[0].addEventListener('click', function(event) {
            if (event.shiftKey === true && event.type === "click") { //	если зажат шивт и кликнуто мышкой то выполнить код
                if (event.target.className === "VideoCard__controls video_item_controls") {
                    ggggg = event.path[3].getAttribute("ckeckn1");
                    if (ggggg == "null" || ggggg == null || ggggg == 0 || ggggg == "0" || ggggg == '0') {
                        //выделение видео в рамку
                        araayvideolist[event.path[3].getAttribute("id")] = event.path[3].getAttribute("data-hash");
                        event.path[3].setAttribute("style", "outline:  4px solid #6640cf; /* Чёрная рамка */    border: 3px solid #fff; /* Белая рамка */    border-radius: 10px; /* Радиус скругления */");
                        event.path[3].setAttribute("ckeckn1", "1")
                    } else {
                        delete araayvideolist[event.path[3].getAttribute("id")];
                        event.path[3].setAttribute("style", "");
                        event.path[3].setAttribute("ckeckn1", "0")
                    }
                }
            }
        });
        fixpositioncrackvideo = document.getElementById("video_all_list").children.length;
    }
}, false);
/*
1 выделение видео и создание списка +
2 перехват открытия окна(запретить действия пока не открыто) + // решил пока не запрещать
3 выбор плейлистов и занесение параметров в список +
4 добавление всех видео при нажатии кнопки сохранить +
5 полезность данного скрипта в том, что не требуется обращаться к api запросам разработчика
6 скрипт имеет преимущество над api разработчиков т к там при обращении к приватным видео выдается ошибка доступа и ничего не сделаешь, данный скрипт не выдает ошибки
*/
