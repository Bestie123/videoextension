Array.prototype.difference = function symmetricDierence(a1) { // проверяет есть ли в первом массиве совпадения со вторым массивом, удаляет из первого совпавшие элементы и возвращает первый массив
    return this.filter(x => !a1.includes(x));
}

let visitsCountMap = new Map();
testcheckshiftalt = [];
switchingselectionvideo = function(e, r, t) {
    if (e.target.className === "VideoCard__controls video_item_controls") {
        var loc2 = t ? t : e.path[3];
        var loc1 = r ? r : loc2.getAttribute("ckeckn1");
        if (loc1 == "null" || loc1 == null || loc1 == 0 || loc1 == "0" || loc1 == '0') {
            //выделение видео в рамку
            loc2.setAttribute("style", "outline:  4px solid #6640cf; /* Чёрная рамка */    border: 3px solid #fff; /* Белая рамка */    border-radius: 10px; /* Радиус скругления */");
            loc2.setAttribute("ckeckn1", "1")
        } else {
            loc2.setAttribute("style", "");
            loc2.setAttribute("ckeckn1", "0")
        }
    }
}

listenertonewvideosonlist = function(videolist){
var fixpositioncrackvideo = videolist.children.length;
                    videolist.addEventListener("DOMNodeInserted", function(e) {
                        if (fixpositioncrackvideo <= videolist.children.length) {
                            e.path[0].addEventListener('click', function(event) {
                                if (event.shiftKey === true && event.type === "click") { //	если зажат шивт и кликнуто мышкой то выполнить код
                                    switchingselectionvideo(event);
                                }
                            });
                            fixpositioncrackvideo = videolist.children.length;
                        }
                    }, false);	
}

document.addEventListener('keyup', function(event) {
    if ((event.code == 'ShiftLeft' && event.altKey == true) || (event.code == 'AltLeft' && event.shiftKey == true)) { //если зажаты обе клавиши и одна или обе отпущены
        testcheckshiftalt = [];
    }
})

// ставит обработчики на видео которые уже есть
listenerhasvideos = function(){
document.getElementsByClassName('video_items_list ').forEach((videolist) => {
	                //проверять стоят ли обработчики на данном списке, чтоб не вешать их повторно	
	if (visitsCountMap.has(videolist) == false) {
    listItem2 = videolist.children;
    listArray2 = [...listItem2];
    listArray2.forEach((item) => {
        item.addEventListener('click', function(event) {
            if (event.shiftKey === true && event.type === "click") { //	если зажат шивт и кликнуто мышкой то выполнить код
                if (event.altKey != true) {
               //     -- -- -- -- -- -- -- -- -- --помеенять на правильное
                    switchingselectionvideo(event);
                } else {
                    if (testcheckshiftalt.length > 0) {
                        var lok1 = Array.prototype.indexOf.call(testcheckshiftalt[0].parentElement.children, testcheckshiftalt[0]);
                        var lok2 = Array.prototype.indexOf.call(event.path[4].children, event.path[3]);
                        var lok3 = new Int32Array([lok1, lok2]).sort()
                        ggggg = testcheckshiftalt[0].getAttribute("ckeckn1");

                        for (let i = lok3[0]; i <= lok3[1]; i++) { // выведет 0, затем 1, затем 2
                                switchingselectionvideo(event, ggggg, event.path[4].children[i])                           
                        }
                    } else {
                        testcheckshiftalt.push(event.path[3])
                    }
                    //	проверка глобальной переменной на зажатость и выделение первого видео
                    //если первое видео выделено то выделять видео между прошлым и этим			

                }
            }
        });
    });
}else {
                    visitsCountMap.clear(); // защита от переполнения памяти указателями на новые списки видео
                    visitsCountMap.set(videolist, '');
                }
				// ставит обработчики на новые видео в списке
				 listenertonewvideosonlist(videolist);
    visitsCountMap.set(videolist, '');
	})
}

listenerhasvideos();

new MutationObserver((mutations, observer) => {
    mutations.forEach(function(mutation) {
        if (mutation.target.id == 'wrap3') {
        listenerhasvideos();
        }
    });
}).observe(document, {
    childList: true,
    subtree: true
});


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
        clone.setAttribute("class", "FlatButton FlatButton--primary FlatButton--size-m clonebutton1")
        e.relatedNode.replaceChild(clone, e.target);
        console.log(e);
        clone.addEventListener("click", function() {
            ee22 = Object.keys(checklist2);
            araayvideolist = {};
			
			
			
			
			
			
			
			
		document.getElementsByClassName('video_items_list ').forEach((videolist) => {
	                //проверять стоят ли обработчики на данном списке, чтоб не вешать их повторно	
	if (visitsCountMap.has(videolist) == false) {
    listItem23 = videolist.children;
    listArray23 = [...listItem23];
    listArray23.forEach((item1111) => {
                ggggg = item1111.getAttribute("ckeckn1");
                if (ggggg == "null" || ggggg == null || ggggg == 0 || ggggg == "0" || ggggg == '0') {} else {
                    araayvideolist[item1111.getAttribute("data-id")] = item1111.getAttribute("data-hash");

                }
            })
		}})
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

                    document.getElementsByClassName('video_items_list ').forEach((videolist) => {
	                //проверять стоят ли обработчики на данном списке, чтоб не вешать их повторно	
	if (visitsCountMap.has(videolist) == false) {
    listItem234 = videolist.children;
    listArray234 = [...listItem234];
    listArray234.forEach((item1) => {
                        ggggg = item1.getAttribute("ckeckn1");
                        if (ggggg == "null" || ggggg == null || ggggg == 0 || ggggg == "0" || ggggg == '0') {} else {
                            item1.setAttribute("style", "");
                            item1.setAttribute("ckeckn1", "0")
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
					}})
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
                                                }
                                            };
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
