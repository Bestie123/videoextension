Array.prototype.difference = function symmetricDierence(a1){
return this.filter(x => !a1.includes(x));
}

////////////////////  
// Examples  
////////////////////
/*

var dif1 = [1,2,3,4,5,6].diff( [3,4,5] );  
console.log(dif1); // => [1, 2, 6]


var dif2 = ["test1", "test2","test3","test4","test5","test6"].diff(["test1","test2","test3","test4"]);  
console.log(dif2); // => ["test5", "test6"]
*/
anomfuncarr = [];
setInterval(function() {
    anomfuncarr.shift()?.()
}, 2000)
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
    } else if (e?.target?.getAttribute?.("class") == "FlatButton FlatButton--primary FlatButton--size-m") {
        e.target.addEventListener("click", function() {
            ee22 = Object.keys(checklist2);
            ee = Object.keys(araayvideolist)
             loc1 = [];
             loc2 = [];
            eeeegf = vkApi.api('video.get', {
                videos: ee.toString()
            }, function(r) {});

            Promise.all([eeeegf]).then((values232) => {
                values232[0].items.forEach((item, item2) => {
                    if (item.can_add == 1) {
                        var owner_id = item.owner_id,
                            id_video = item.id,
                            parent_owner_id = values232[0].items[item2 - 1]?.owner_id,
                            parent_id_video = values232[0].items[item2 - 1]?.id;

                        loc1.push({
                            owner_id: owner_id,
                            id_video: id_video,
                            parent_owner_id: parent_owner_id,
                            parent_id_video: parent_id_video
                        })
                    } else {
                        var owner_id = item.owner_id,
                            id_video = item.id,
                            parent_owner_id = values232[0].items[item2 - 1]?.owner_id,
                            parent_id_video = values232[0].items[item2 - 1]?.id;
                        loc2.push({
                            hash: araayvideolist[String(owner_id) + "_" + String(id_video)],
                            owner_id: owner_id,
                            id_video: id_video,
                            parent_owner_id: parent_owner_id,
                            parent_id_video: parent_id_video
                        })

                    }
                });
                console.log(loc1)
                console.log(loc2)
                llll3 = [];
                ee22.forEach((item) => {
                    checklist2[item].split(" ").forEach((item2) => {
                        if (item2 == "olist_item_wrap_on") {
                            llll3.push(parseInt(item.split("wrap")[1], 10)); // ид плейлистов куда добавлять видео
                            delete checklist2[item];
                        }
                    });
                })
                llll4 = [];
                ee23 = Object.keys(checklist2);
                ee23.forEach((item3) => {
                    llll4.push(parseInt(item3.split("wrap")[1], 10));
                })

                loc2.forEach((item,indx) => {
                    //  llll1 = item.split("_")[0] // ид владельца
                    // llll2 = item.split("_")[1] // ид видео
                    var darsi = function() {
                        var a2 = item.owner_id; //parseInt(llll1, 10);
                        var a3 = item.id_video; //parseInt(llll2, 10);
                        var a4 = llll3;
                        var a1 = item;
                        var anomfunc2 = function() {
                            console.log(a4);
                            ajax.post('/al_video.php', {
                                act: 'a_add_to_playlist',
                                oid: a2,
                                vid: a3, //
                                playlists: a4,
                                hash: item.hash
                            },{onDone: function(playlistIds) {
								loc2[indx].newaddedalbums = a4.difference(playlistIds);
                  console.log(playlistIds) // -2 -1 1 2 показывает в каких альбомах видео уже было.................................из  a4 вычитаем playlistIds и получаем в какие альбомы видео сейчас добавлено
                }})
                        }
                        anomfuncarr.push(anomfunc2);
                    };
                    darsi();
                })


                loc1.forEach((item,indx) => {
                    var darsi = function() {
                        var a1 = llll4;
                        var a4 = llll3;
                        var a2 = item.owner_id;
                        var a3 = item.id_video;
                        var anomfunc2 = function() {

                            eeeegf = vkApi.api('video.addToAlbum', {
                                album_ids: a4.toString(),
                                owner_id: a2,
                                video_id: a3,
                                v: "5.81"
                            }, function(r) {});

                            Promise.all([eeeegf]).then((values) => {
								loc1[indx].newaddedalbums = values[0];
								 // показывает в какие альбомы добавлено видео сейчас..............................................
								console.log(5656)
                                console.log(values.length);
                            })
                        }
                        var anomfunc222 = function() {
                            eeeegf = vkApi.api('video.removeFromAlbum', {
                                album_ids: a1.toString(),
                                owner_id: a2,
                                video_id: a3,
                                v: "5.81"
                            }, function(r) {});

                            Promise.all([eeeegf]).then((values) => {
								    console.log(values);
                            })
                        }
                        anomfuncarr.push(anomfunc2);
                        anomfuncarr.push(anomfunc222);

                    }
                    darsi();
                })
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				loc2.forEach((item,indx) => {
					// перебирать параметр newaddedalbums и устанавливать в качестве album_id и сравнивать в loc1 и loc2 по иерархии (after_owner_id и after_video_id) вверх, если есть совпадение, то брать видео after_owner_id и after_video_id
					// добавить сортировку по выбранным видео исползуя порядковый номер childlist либо при запросе информации о всех видео в альбоме 
					eeeegf = vkApi.api('video.reorderVideos', {
                                album_id: album_id,
                                owner_id: item.owner_id,  //
								video_id: item.id_video,  //
								after_owner_id: after_owner_id, // 
								after_video_id: after_video_id
                            }, function(r) {});

                            Promise.all([eeeegf]).then((values) => {
                                console.log(values);
                            })
				})
				
				loc1.forEach((item,indx) => {
				eeeegf = vkApi.api('video.reorderVideos', {
                                album_id: album_id,
                                owner_id: owner_id,
								video_id: video_id,
								after_owner_id: after_owner_id,
								after_video_id: after_video_id
                            }, function(r) {});

                            Promise.all([eeeegf]).then((values) => {
                                console.log(values);
                            })	
				});




















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
                    araayvideolist[event.path[3].getAttribute("data-id")] = event.path[3].getAttribute("data-hash");
                    //выделение видео в рамку
                    event.path[3].setAttribute("style", "outline:  4px solid #6640cf; /* Чёрная рамка */    border: 3px solid #fff; /* Белая рамка */    border-radius: 10px; /* Радиус скругления */");
                    event.path[3].setAttribute("ckeckn1", "1")
                } else {
                    delete araayvideolist[event.path[3].getAttribute("data-id")];
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
                        araayvideolist[event.path[3].getAttribute("data-id")] = event.path[3].getAttribute("data-hash");
                        event.path[3].setAttribute("style", "outline:  4px solid #6640cf; /* Чёрная рамка */    border: 3px solid #fff; /* Белая рамка */    border-radius: 10px; /* Радиус скругления */");
                        event.path[3].setAttribute("ckeckn1", "1")
                    } else {
                        delete araayvideolist[event.path[3].getAttribute("data-id")];
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

1 присвоить к идентификатору каждой записи[хеш, идентификатор доступа] +
2 разбить записи на два массива - один для api, второй для приватных видео +
3 перебрать каждый массив и добавить видеозаписи в альбомы +
4 с помощью api узнать в каких альбомах видео уже есть, восстановить порядковый номер видеозаписей без перемещения тех которые уже находятся в альбомах
если видео уже находилось в альбоме и идет попытка сортировки, игнорировать сортировку, сортировку пробрасыват на предыдущее видео


первый метод если cann_add = 0 = [
    [ид владельца, ид видео, хеш, ид видео за которым находилось в массиве, ид владельца за которым находилось в массиве]
]
второй метод если cann add = 1 = [
    [ид владельца, ид видео, ид видео за которым находилось в массиве, ид владельца за которым находилось в массиве]
]

*/
