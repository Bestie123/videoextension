Array.prototype.difference = function symmetricDierence(a1) { // проверяет есть ли в первом массиве совпадения со вторым массивом, удаляет из первого совпавшие элементы и возвращает первый массив
    return this.filter(x => !a1.includes(x));
}

let visitsCountMap = new Map();

// ставит обработчики на видео которые уже есть
document.getElementsByClassName('video_items_list ').forEach((itemxxx) => {
var araayvideolist = {};
listItem2 = itemxxx.children;
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
})

// ставит обработчики на новые видео в списке
document.getElementsByClassName('video_items_list ').forEach((itemxxx) => {
var fixpositioncrackvideo = itemxxx.children.length;
itemxxx.addEventListener("DOMNodeInserted", function(e) {
    if (fixpositioncrackvideo <= itemxxx.children.length) {
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
        fixpositioncrackvideo = itemxxx.children.length;
    }
}, false);
visitsCountMap.set(itemxxx,'');
})


new MutationObserver((mutations, observer) => {

      mutations.forEach(function(mutation) {
                                if (mutation.target.id=='wrap3'){
									console.log(mutation)
								//console.log(	mutation.addedNodes[0].getElementsByClassName('video_items_list VideoGrid  ')[4])
							hg=	document.getElementById('video_layout_contents')
								hg.getElementsByClassName('video_items_list ').forEach((itemxxx) => {
								//проверять соят ли обработчики на данном списке, чтоб не вешать их повторно	
								if (visitsCountMap.has(itemxxx) == false) {	
																
 araayvideolist = {};
listItem2 = itemxxx.children;
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

var fixpositioncrackvideo = itemxxx.children.length;
itemxxx.addEventListener("DOMNodeInserted", function(e) {
    if (fixpositioncrackvideo <= itemxxx.children.length) {
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
        fixpositioncrackvideo = itemxxx.children.length;
    }
}, false);		
									
									
									
									
									
									
									
									
	visitsCountMap.set(itemxxx,'');								
								}	
})

								}
                            });    
  }).observe(document, {childList: true, subtree: true});
  
  
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
		var clone = e.target.cloneNode(true);
		clone.setAttribute("class","FlatButton FlatButton--primary FlatButton--size-m clonebutton1")
		e.relatedNode.replaceChild(clone, e.target);
console.log(e);
        clone.addEventListener("click", function() {
            ee22 = Object.keys(checklist2);
            ee = Object.keys(araayvideolist)
            loc1 = {};
            eeeegf = vkApi.api('video.get', {
                videos: ee.toString()
            }, function(r) {});

            Promise.all([eeeegf]).then((values232) => {
                values232[0].items.forEach((item, item2) => {
                    var owner_id = item.owner_id,
                        id_video = item.id,
                        parent_owner_id = values232[0].items[item2 - 1]?.owner_id,
                        parent_id_video = values232[0].items[item2 - 1]?.id,
                        pointervidobj = loc1[owner_id + '_' + id_video] = {
                            owner_id: owner_id,
                            id_video: id_video,
                            parent_owner_id: parent_owner_id,
                            parent_id_video: parent_id_video,
                            newaddedalbums: {},
                            can_add: item.can_add
                        }
                    if (item.can_add == 0) {
                        pointervidobj.hash = araayvideolist[String(owner_id) + "_" + String(id_video)]
                    }
                });
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
                    function2 = function() {
                    ee68 = Object.keys(loc1);
                    if (ee68.length > 0) {
                        ee68.forEach((item, indx) => {
                            if (loc1[item].can_add == 1) {
                                var darsi = function() {
                                    var a1 = llll4;
                                    var a4 = llll3;
                                    var a2 = loc1[item].owner_id;
                                    var a3 = loc1[item].id_video;
                                    var anomfunc2 = function() {
                                        eeeegf = vkApi.api('video.addToAlbum', {
                                            album_ids: a4.toString(),
                                            owner_id: a2,
                                            video_id: a3,
                                            v: "5.81"
                                        }, function(r) {});
                                        Promise.all([eeeegf]).then((values) => {
                                            loc1[item].newaddedalbums = values[0].reduce((a, v) => ({
                                                ...a,
                                                [v]: ''
                                            }), {});
                                            // показывает в какие альбомы добавлено видео сейчас..............................................
                                            console.log(values.length);
                                            if (ee68.length == indx + 1) {
                                                function3();
                                            }
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
                            } else {
                                if (ee68.length == indx + 1) {
                                    function3();
                                }
                            }
                        })
                    } else {
                        function3();
                    }
                }
                function3 = function() {

                    listItem2 = document.getElementById("video_all_list").children;
                    listArray2 = [...listItem2];
                    parentvideosarray = [];
                    listArray2.forEach((item1) => {
                        ggggg = item1.getAttribute("ckeckn1");
                        if (ggggg == "null" || ggggg == null || ggggg == 0 || ggggg == "0" || ggggg == '0') {} else {
                            if (parentvideosarray.length > 0) {
                                // есть элемент, смотрим в каких альбомах он есть, проверяем есть ли в этом альбоме родительское видео, если да, то сортируем, если нет,  то берем более высокий родительский элемент и проверяем
                                Object.keys(loc1[item1.getAttribute("data-id")].newaddedalbums).forEach((item2) => {
                                    parentvideoindxcount = parentvideosarray.length;
                                    nestedparentvideo = function() {
                                        if (parentvideoindxcount > 0) {
                                            parentvideoindxcount = parentvideoindxcount - 1;
                                            if (item2 in parentvideosarray[parentvideoindxcount].newaddedalbums) {
                                                var loc444 = function() {
                                                    var a6 = item1;
                                                    var a1 = item2, // перебирается для конкретного видео
                                                        a2 = loc1[a6.getAttribute("data-id")].owner_id,
                                                        a3 = loc1[a6.getAttribute("data-id")].id_video,
                                                        a4 = parentvideosarray[parentvideoindxcount].owner_id,
                                                        a5 = parentvideosarray[parentvideoindxcount].id_video
                                                    var loc333 = function() {
                                                        eeeegf = vkApi.api('video.reorderVideos', {
                                                            album_id: a1,
                                                            owner_id: a2,
                                                            video_id: a3,
                                                            after_owner_id: a4,
                                                            after_video_id: a5
                                                        }, function(r) {});
                                                        Promise.all([eeeegf]).then((values) => {
                                                            console.log(values);
                                                        })
                                                    }
                                                    anomfuncarr.push(loc333);
                                                }
                                                loc444();
                                            } else {
                                                nestedparentvideo()
                                            }
                                        }
                                    }
                                    nestedparentvideo();
                                })
                                parentvideosarray.push(loc1[item1.getAttribute("data-id")]);
                            } else {
                                parentvideosarray.push(loc1[item1.getAttribute("data-id")]);
                            }
                        }
                    });
                }
				
				 ee67 = Object.keys(loc1);
                if (ee67.length > 0) {
                    ee67.forEach((item, indx) => {
                        if (loc1[item].can_add == 0) {
                            var darsi = function() {
                                var index = indx;
                                var a2 = loc1[item].owner_id;
                                var a3 = loc1[item].id_video;
                                var a4 = llll3;
                                var a1 = loc1[item];
                                var anomfunc2 = function() {
                                    ajax.post('/al_video.php', {
                                        act: 'a_add_to_playlist',
                                        oid: a2,
                                        vid: a3, //
                                        playlists: a4,
                                        hash: loc1[item].hash
                                    }, {
                                        onDone: function(playlistIds) {
                                            loc1[item].newaddedalbums = a4.difference(playlistIds).reduce((a, v) => ({
                                                ...a,
                                                [v]: ''
                                            }), {});
                                            console.log(playlistIds) // -2 -1 1 2 показывает в каких альбомах видео уже было.................................из  a4 вычитаем playlistIds и получаем в какие альбомы видео сейчас добавлено
                                            if (ee67.length == indx + 1) {
                                                // вызываем следующую функцию
if (ee67.length == indx + 1) {
                                    function2();
                                }                                            };
                                        }
                                    })
                                }
                                anomfuncarr.push(anomfunc2);
                            };
                            darsi();
                        } else {
							if (ee67.length == indx + 1) {
                                    function2();
                                }
                        }
                    })
                } else {
                    function2();
                }
				
            })
			boxQueue._hide(boxQueue.curBox)
        })
    }
});




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
