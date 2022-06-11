Array.prototype.difference = function symmetricDierence(a1) { // проверяет есть ли в первом массиве совпадения со вторым массивом, удаляет из первого совпавшие элементы и возвращает первый массив
    return this.filter(x => !a1.includes(x));
}

init29543 = function(){
		
alert(console.log(data));


let visitsCountMap = new Map();
let visitsCountMap2 = new Map();
testcheckshiftalt = [];
anomfuncarr = [];
anomfuncarr2 = [];
anomfuncarr3 = [];
checklist2 = {};
parametrspostarray = [];
parametrspostarray2 = [];
parametrspostarray3 = [];

switchingselectionvideo = function(e, r, t) {
    console.log(e.target)
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
    } else if (e.target.className == 'VideoCard__action VideoCard__action--move') {
        var loc2 = t ? t : e.path[5];
        loc2.setAttribute("style", "outline:  4px solid #6640cf; /* Чёрная рамка */    border: 3px solid #fff; /* Белая рамка */    border-radius: 10px; /* Радиус скругления */");
        loc2.setAttribute("ckeckn1", "1")
    }
}

addeventlistenerclickvideo = function(item) {
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
        } else if (event.target.className != "VideoCard__controls video_item_controls") {
            switchingselectionvideo(event);
        }
    });
}
listenertonewvideosonlist = function(videolist) {
    var fixpositioncrackvideo = videolist.children.length;
    videolist.addEventListener("DOMNodeInserted", function(e) {
        if (fixpositioncrackvideo <= videolist.children.length) {
            addeventlistenerclickvideo(e.path[0]);
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
listenerhasvideos = function() {
    document.getElementsByClassName('video_items_list ').forEach((videolist) => {
        //проверять стоят ли обработчики на данном списке, чтоб не вешать их повторно	
        if (visitsCountMap.has(videolist) == false) {
            listItem2 = videolist.children;
            listArray2 = [...listItem2];
            listArray2.forEach((item) => {
                addeventlistenerclickvideo(item);
            });
        } else {
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

document.body.addEventListener("DOMNodeInserted", function(e) {
    if (e.target.parentElement.getAttribute("class") == "olist") {
        var eeee = vkApi.api('video.getAlbums', {
            count: 100,
            extended: 0,
            need_system: 1,
            v: "5.81"
        }, function(r) {}).then(function(values) {
                checklist2 = {}; // выделенные альбомы
                var albumschecklist = document.getElementsByClassName("olist");
                albumschecklist2 = albumschecklist[0].children;
                listArray3 = [...albumschecklist2];
                listArray3.forEach((item) => {
                    checklist2[item.getAttribute("id")] = item.getAttribute("class");
                    MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
                        observer = new MutationObserver(function(mutations) {
                            mutations.forEach(function(mutation) {
								console.log(mutation);
                                checklist2[mutation.target.getAttribute("id")] = mutation.target.getAttribute("class");
                            });
                        });
                    observer.observe(albumschecklist[0], {
                        childList: true,
                        attributes: true,
						 subtree: true
                    });
                });

        }, function(err) {
            console.log(err)
        })
    } else if (e?.target?.getAttribute?.("class") == "FlatButton FlatButton--primary FlatButton--size-m") {
		if (document.getElementsByClassName("olist").length >0){
		
        if (visitsCountMap2.has(document.getElementsByClassName("box_controls")[0]) == false) {
            countersuccesvideolabel = document.createElement('span');
            countersuccesvideolabel.className = "pl_size";
            document.getElementsByClassName("box_controls")[0].prepend(countersuccesvideolabel)
            visitsCountMap2.set(document.getElementsByClassName("box_controls")[0], '');
        } else {
            visitsCountMap2.clear(); // защита от переполнения памяти указателями на новые списки видео
            visitsCountMap2.set(document.getElementsByClassName("box_controls")[0], '');
        }

        var clone = e.target.cloneNode(true);
        clone.setAttribute("class", "FlatButton FlatButton--primary FlatButton--size-m clonebutton1")
        e.relatedNode.replaceChild(clone, e.target);
        clone.addEventListener("click", function() {
            araayvideolist = {};
            llll3 = [];
            llll4 = [];
            loc1 = {};

            // id альбомов куда добавлять				
            Object.keys(checklist2).forEach((item) => {
                checklist2[item].split(" ").forEach((item2) => {
                    if (item2 == "olist_item_wrap_on") {
                        llll3.push(parseInt(item.split("wrap")[1], 10)); // ид плейлистов куда добавлять видео
                        delete checklist2[item];
                    }
                });
            })
            //ид альбомов откуда удалять
            Object.keys(checklist2).forEach((item3) => {
                llll4.push(parseInt(item3.split("wrap")[1], 10));
            })
            //получаем список выделенных видео
            document.getElementsByClassName('video_items_list ').forEach((videolist) => {
                listItem23 = videolist.children;
                listArray23 = [...listItem23];
                listArray23.forEach((item1111) => {
                    ggggg = item1111.getAttribute("ckeckn1");
                    if (ggggg == "null" || ggggg == null || ggggg == 0 || ggggg == "0" || ggggg == '0') {} else {
                        araayvideolist[item1111.getAttribute("data-id")] = item1111.getAttribute("data-hash");

                    }
                })
            })
            kimiko = Object.keys(araayvideolist).length // количество выделенных видео для вывода счетчика	

   addremovesortvideo = function() {
                var succespostcount = 0;
                var succespostcount2 = 0;
                var succespostcount3 = 0;


                // копирование, добавление и удаление видео для не приватных видео
                addremovevideo = function(item) {
                    var anomfunc2 = function() {
                        eeeegf = vkApi.api('video.addToAlbum', {
                            album_ids: llll3.toString(),
                            owner_id: loc1[item].owner_id,
                            video_id: loc1[item].id_video,
                            v: "5.81"
                        }, function(r) {}).then(function(values) {
                            loc1[item].newaddedalbums = values.reduce((a, v) => ({
                                ...a,
                                [v]: ''
                            }), {});
                            anomfunc222()
                        }, function(err) {
                            console.log(err)
                            if (err.error.error_code == 6) {
                                setTimeout(anomfunc2, 1000);
                            }
                        });
                    }
                    var anomfunc222 = function() {
                        vkApi.api('video.removeFromAlbum', {
                            album_ids: llll4,
                            owner_id: loc1[item].owner_id,
                            video_id: loc1[item].id_video,
                            v: "5.81"
                        }, function(r) {}).then(function(values) {
                            console.log(values);
                            succespostcount++;
                            countersuccesvideolabel.textContent = 'Загружено ' + succespostcount + ' из ' + kimiko + ' видео';
                            if (parametrspostarray3.length == 0) {
                                function3();
                            } else {
                                addremovevideo(parametrspostarray3.pop())
                            }
                        }, function(err) {
                            console.log(err);
                            if (err.error.error_code == 6) {
                                setTimeout(anomfunc222, 1000);
                            }
                        });;
                    }
                    anomfunc2();
                }

                function2 = function() {
                    console.log('function2')
                    ee68 = Object.keys(loc1);
                    if (ee68.length > 0) {
                        ee68.forEach((item, indx) => {
                            if (loc1[item].can_add == 1) {
                                parametrspostarray3.push(item);
                            }
                        })
                        if (parametrspostarray3.length == 0) {
                            function3();
                        } else {
							console.log(parametrspostarray3.length)
                            addremovevideo(parametrspostarray3.pop())
                        }
                    } else {
                        function3();
                    }
                }

                //сортировка видео, если поменять, например, метод pop на shift то обязательно нужно переворачивать массив с сортируемыми видео
                // т.к. в нормальном порядке для 100 видео необходимо 100 запросов на сортировку, в обратном же прийдется сделать около 10 000					
                var loc333 = function(param) {
                    vkApi.api('video.reorderVideos', {
                        album_id: param[0],
                        owner_id: param[1],
                        video_id: param[2],
                        after_owner_id: param[3],
                        after_video_id: param[4]
                    }, function(r) {}).then(function(values) {
                        console.log(values);
                        succespostcount2++;
                        countersuccesvideolabel.textContent = 'Отсортировано ' + succespostcount2 + ' из ' + succespostcount3 + ' видео';
                        if (parametrspostarray2.length == 0) {
                            boxQueue._hide(boxQueue.curBox)
                        }
                        setTimeout(function() {
                            loc333(parametrspostarray2.pop())
                        }, 100);
                    }, function(err) {
                        console.log(err)
                        if (err.error.error_code == 6) {
                            setTimeout(loc333, 100, param);
                        }
                    })
                }


                function3 = function() {
                    console.log('function3')
                    document.getElementsByClassName('video_items_list ').forEach((videolist) => {
                        //проверять стоят ли обработчики на данном списке, чтоб не вешать их повторно	
                        listItem234 = videolist.children;
                        listArray234 = [...listItem234];
                        var parentvideosarray = [];
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
                                                    var a1 = item2, // перебирается для конкретного видео
                                                        a2 = loc1[item1.getAttribute("data-id")].owner_id,
                                                        a3 = loc1[item1.getAttribute("data-id")].id_video,
                                                        a4 = parentvideosarray[parentvideoindxcount].owner_id,
                                                        a5 = parentvideosarray[parentvideoindxcount].id_video
                                                    parametrspostarray2.push([a1, a2, a3, a4, a5]);
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
                    })
                    succespostcount3 = parametrspostarray2.length;
                    if (parametrspostarray2.length == 0) {
                        boxQueue._hide(boxQueue.curBox)
                    } else {
                        parametrspostarray2 = parametrspostarray2.reverse()
                        loc333(parametrspostarray2.pop())
                    }
                }

                // копирование, добавление и удаление видео для  ПРИВАТНЫХ видео

                anomfunc233 = function(param) {
                    ajax.post('/al_video.php', {
                        act: 'a_add_to_playlist',
                        oid: loc1[param].owner_id,
                        vid: loc1[param].id_video,
                        playlists: llll3,
                        hash: loc1[param].hash
                    }, {
                        onDone: function(playlistIds) {
                            loc1[param].newaddedalbums = llll3.difference(playlistIds).reduce((a, v) => ({
                                ...a,
                                [v]: ''
                            }), {});
                            // -2 -1 1 2 показывает в каких альбомах видео уже было.................................из  a4 вычитаем playlistIds и получаем в какие альбомы видео сейчас добавлено
                            succespostcount++;
                            countersuccesvideolabel.textContent = 'Загружено ' + succespostcount + ' из ' + kimiko + ' видео';
                            if (parametrspostarray.length == 0) {
                                // вызываем следующую функцию
                                function2();
                            } else anomfunc233(parametrspostarray.pop())
                        },
                        onFail: function(e) {
                            console.log(e)
                            if (e == 'Ошибка доступа') {
                                succespostcount++;
                                countersuccesvideolabel.textContent = 'Загружено ' + succespostcount + ' из ' + kimiko + ' видео';
                                if (parametrspostarray.length == 0) {
                                    // вызываем следующую функцию
                                    function2();
                                };
                                anomfunc233(parametrspostarray.pop())
                            }
                        }
                    })
                }

                console.log('function1')
                ee67 = Object.keys(loc1);
                if (ee67.length > 0) {
                    ee67.forEach((item, indx) => {
                        if (loc1[item].can_add == 0) {
                            parametrspostarray.push(item);
                        }
                    })
                    if (parametrspostarray.length == 0) {
                        // вызываем следующую функцию
                        function2();
                    } else {
						console.log(parametrspostarray.lengt);
                        anomfunc233(parametrspostarray.pop())
                    }
                } else {
                    function2();
                }
            }
			
			
			       // 	получаем информацию о параметре can_add для разделения видео на приватные и все остальные		
			
			 
 function spl(arr, size) {
  var result = [];
  var len = arr.length;
  for (var i=0; i<len; i+=size) {
     result.push(arr.slice(i,i+size));
  }
  return result;
}

 az1111 = spl(Object.keys(araayvideolist),200);

	getlistvideos = function(list){		
			 eeeegf = vkApi.api('video.get', {
				count: 200,
                videos: list.toString()
            }).then(function(values232){
			   //добавляем подмножества
			    // создаем объект с информацией о всех видео, отдельно для приватных ставим хеш
                values232.items.forEach((item, item2) => {
                    var owner_id = item.owner_id,
                        id_video = item.id,
                        parent_owner_id = values232.items[item2 - 1]?.owner_id,
                        parent_id_video = values232.items[item2 - 1]?.id,
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
				
				if(az1111.length>0){
getlistvideos(az1111.pop());
				}else{
addremovesortvideo();					
				}
			}, function(err) {
                console.log(err)
            })
	}
	getlistvideos(az1111.pop());
        })
    }
}
});

};


window.addEventListener('message', function(event) {
	console.log(event)
var  lom1 = event.data[0];
//console.log(lom1.hash.match('code')[0])

if (lom1?.hash?.match('code')?.[0] == 'code'){
	console.log(lom1?.hash?.match('code')?.[0] == 'code')
var code = lom1.hash.substr(1)
console.log(code)
	authorizeocno.postMessage(['https://oauth.vk.com/access_token?client_id=8182193&client_secret=NEZARECHHOMgJVpy06RK&redirect_uri=https://vk.com/blank.html&'+code,'',1], '*');
	console.log(authorizeocno)
    }else if(lom1.href.match('access_token')[0]=='access_token'){
			//console.log(event.data[1])
console.log(333)
zzzzzzzzzzzzzzzzzzz=event.data[1];
			vkApi.setApiConfig({
        appId: 8182193,
        version: '5.81',//,//,
		accessToken: event.data[1]
		// onTokenExpired: function() {
        //    return m("web_token", {}, {}, !0).then((function(e) {
             //   return e.access_token || ""
          //  }))
      //  }
    })
	//console.log(event.data[1])
	init29543();
}
})
var authorizeocno = window.open('https://oauth.vk.com/authorize?client_id=8182193&display=page&redirect_uri=https://vk.com/blank.html&scope=friends,video,offline&response_type=code&v=5.131')
		

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




//---------- добавлена возможность перемещать и копировать видео из всех альбомов, раньше работало только с альбомом добавленные
//-- скрипт будет работать при переключении между альбомами, раньше он сбрасывался
//-- при копировании или перемещнии видео убирются рамки с выделенных видео
// добавлена возможность выделять сразу много видео двумя кликам, необходимо зажать и удерживать shift + alt, кликнуть по вервому видео, затем по второму




//когда идет сортировка то убирать рамку с текущего видео

//удалять текущее видео если оно удалено из данного альбома


//----------- сломан родной отправитель видео, починить кнопку
//--------возможно если обрабатывать ответ то получится обрабатывать капчу


// пофикшена кнопка добавления альбомов
// добавлен счетчик добавления видео и счетчик сортировки видео в альбомах 
// оптимизирован код: раньше запросы отправлялись асинхронно  и появление капчи провоцировало ошибку сортировки видео, теперь запросы отправляются последовательно
// если появляется капча, то обработка всех видео приостанавливается и продолжается после ввода капчи( при открытии консоли был обнаружен баг, что ввод капчи ломался и приходилось сбарсывать обработку видео)
// добавлен обработка некоторых частых ошибок при запросах
// пофикшено выделение альбомов для чужих видео, раньше выделение ломалось если выбрано видео которое не загружено лично пользователем и все видео удалялись со всех альбомов кроме альбома загруженные
// --внедрено приложение вконтакте для ускорения обработки запросов, если обычным способом потребуется отсортировать 1000 копий видео в нескольких альбомах, то с внедрением приложения потребуется всего 40 запросов
//-- для внедрения приложения создан отдельный скрипт, он необходим для создания связи для междоменной авторизации приложения
//--при получении ключа доступа для приложения при попытке переадресации на домен vk.com, вконтакте принудительно перенаправляет на api.vk.com, поэтому появляется запрет
//-- на междоменное общение между окнами и фреймами, поэтому создан отдельный скрипт для внедрения в окно получения токена доступа и создания связи между vk.com, oauth.vk.com и api.vk.com


//--добавить сохранение токена
// -- закрытие страницы авторизации
