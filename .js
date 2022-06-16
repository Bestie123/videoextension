Array.prototype.difference = function symmetricDierence(a1) { // проверяет есть ли в первом массиве совпадения со вторым массивом, удаляет из первого совпавшие элементы и возвращает первый массив
    return this.filter(x => !a1.includes(x));
}
//-------------------------web modul--------------------------------------
Bestie123webmodule2 = {
    170890: () => {
        "use strict";
        var r = Bestie123webmodule2[646217](),
            i = {
                domain: "api.vk.com",
                maxRetries: 10
            },
            o = new r.R,
            a = new r.R,
            s = null;

        function c(e) {
            e = Object.assign({}, i, e),
                i = e
        }

        function _(e, t, n, l) {
            void 0 === l && (l = {});
            var u = i;
            n && (u = Object.assign({}, i, n));
            var d = t.captcha_sid;
            if (s && s.sid !== d)
                return Promise.reject({
                    type: "api_error",
                    error: {
                        error_code: 0,
                        error_msg: "Ddos limit execced"
                    }
                });
            var p, h, m = u.domain,
                f = (0,
                    r.m)((h = {
                        v: (p = u).version || "5.131"
                    },
                    p.appId && (h.client_id = p.appId),
                    h)),
                g = function(e) {
                    return {
                        access_token: e.accessToken
                    }
                }(u),
                v = "https://" + m + "/method/" + e + "?" + f,
                E = Object.assign({}, t, g),
                y = function(e, t) {
                    return void 0 === t && (t = {}),
                        e + "-" + (0,
                            r.m)(Object.assign({}, t))
                }(v, t),
                w = a.get(y) || a.create(y, u.maxRetries),
                b = o.get(y) || o.create(y, u.maxRetries);
            return (0,
                r.w)(w.get() || b.get()).then((function() {
                return (0,
                    r.c)(v, E, l)
            })).then((function(i) {
                var l, p;
                if (i.response)
                    return a.delete(y),
                        o.delete(y),
                        s && s.sid === d && (null === (l = s.task) || void 0 === l || l.resolve(void 0),
                            s = null),
                        i.execute_errors ? (0,
                            r._)((0,
                            r._)({}, i.response), {
                            execute_errors: i.execute_errors
                        }) : i.response;
                var h = i.error;
                if (!h)
                    return Promise.reject({
                        type: "api_error",
                        error: {
                            error_code: 0,
                            error_msg: "Unknown"
                        }
                    });
                if (u.onCaptcha && 14 === h.error_code) {
                    var m = h,
                        f = m.captcha_sid,
                        g = m.captcha_img;
                    if (s) {
                        if (s.sid !== d)
                            return s.task.get().then((function() {
                                return _(e, t, n)
                            }));
                        var v = new r.P;
                        v.get().then(s.task.resolve).catch(s.task.reject),
                            s = {
                                sid: f,
                                task: v
                            }
                    } else
                        s = {
                            sid: f,
                            task: new r.P
                        };
                    return u.onCaptcha({
                        captcha_sid: f,
                        captcha_img: g
                    }).then((function(r) {
                        var i = Object.assign({}, t, r);
                        return _(e, i, n)
                    }))
                }
                if (s && s.sid === d && (null === (p = s.task) || void 0 === p || p.resolve(void 0),
                        s = null),
                    w.isExceeded() || b.isExceeded())
                    return a.delete(y),
                        o.delete(y),
                        Promise.reject({
                            type: "api_error",
                            error: {
                                error_code: 0,
                                error_msg: "Maximum of api retries exceeded"
                            }
                        });
                if (29 === h.error_code)
                    return b.increment(),
                        a.delete(y),
                        _(e, t, n);
                o.delete(y);
                var E = !(null == n ? void 0 : n.accessToken) && (5 === h.error_code || 28 === h.error_code);
                return u.onTokenExpired && E ? u.onTokenExpired().then((function(r) {
                    return w.increment(),
                        c({
                            accessToken: r
                        }),
                        _(e, t, n)
                })) : (a.delete(y),
                    Promise.reject({
                        type: "api_error",
                        error: i.error
                    }))
            }), (function(e) {
                return Promise.reject({
                    type: "network_error",
                    error: e
                })
            }))
        }

        function l(e, t) {
            return fetch(e, {
                method: "POST",
                body: t,
                mode: "cors"
            }).then((function(e) {
                return e.json()
            }))
        }

        return {
            api: _,
            setApiConfig: c,
            upload: l
        }
    },


    646217: () => {
        "use strict";
        /*     n.d(t, {
            O: ()=>_,
            P: ()=>i,
            R: ()=>a,
            _: ()=>r,
            c: ()=>c,
            g: ()=>l,
            m: ()=>s,
            w: ()=>u
        });
		*/
        var r = function() {
                return (r = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }).apply(this, arguments)
            },
            i = function() {
                var e = this;
                this.get = function() {
                        return e.promise
                    },
                    this.resolve = function(t) {
                        return e.resolveHandler(t)
                    },
                    this.reject = function(t) {
                        return e.rejectHandler(t)
                    },
                    this.promise = new Promise((function(t, n) {
                        e.resolveHandler = t,
                            e.rejectHandler = n
                    }))
            },
            o = function(e) {
                var t = this;
                void 0 === e && (e = 1 / 0),
                    this.tries = 0,
                    this.increment = function() {
                        t.tries++
                    },
                    this.get = function() {
                        return t.tries
                    },
                    this.isExceeded = function() {
                        return t.tries >= t.maxTries
                    },
                    this.maxTries = e
            },
            a = function() {
                var e = this;
                this.retries = new Map,
                    this.get = function(t) {
                        return e.retries.get(t)
                    },
                    this.create = function(t, n) {
                        return e.retries.set(t, new o(n)),
                            e.retries.get(t)
                    },
                    this.delete = function(t) {
                        e.retries.delete(t)
                    }
            };

        function s(e) {
            return Object.keys(e).map((function(t) {
                var n = e[t];
                return (t = encodeURIComponent(t || "")) + "=" + encodeURIComponent(n || "")
            })).join("&")
        }

        function c(e, t, n) {
            void 0 === n && (n = {});
            var i = s(t);
            return fetch(e, r({
                method: "POST",
                body: i,
                mode: "cors",
                credentials: "include",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }, n)).then((function(e) {
                return e.json()
            }))
        }
        var _ = 6e4,
            l = function(e, t) {
                return void 0 === e && (e = 500),
                    void 0 === t && (t = 1500),
                    ~~(Math.random() * (t - e + 1) + e)
            },
            u = function(e) {
                return 0 === e ? Promise.resolve() : new Promise((function(t) {
                    var n = function(e) {
                        if (0 === e)
                            return 0;
                        var t = Math.random(),
                            n = 100 * Math.pow(2, e) / 2;
                        return n + n * t
                    }(e);
                    setTimeout((function() {
                        return t()
                    }), n)
                }))
            }

        return {
            O: _,
            P: i,
            R: a,
            _: r,
            c: c,
            g: l,
            m: s,
            w: u
        }
    }
}
Bestie123webmodule = Bestie123webmodule2[170890]()

//-------------------------------------------------------------


init29543 = function() {
    testcheckshiftalt = [];
    anomfuncarr = [];
    anomfuncarr2 = [];
    anomfuncarr3 = [];
    checklist2 = {};
    parametrspostarray = [];
    parametrspostarray2 = [];
    parametrspostarray3 = [];
    var prependcounterhtml = document.getElementById('react_rootEcosystemServicesNavigationEntry');
    var mego = document.createElement('h2');
    //font-size//mego.setAttribute("style", 'color: #17e412; text-shadow: 0 0 7px #0728ef, 0 0 10px #2018ca, 0 0 21px #2e0de6f5, 0 0 42px #0fa, 0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa; text-align: center;  text-transform: uppercase;  font-weight: 400;')
    mego.setAttribute("style", 'font-size:140%');
    mego.textContent = '0';
    prependcounterhtml.before(mego);
    var countseleectvideo = 0;
    switchingselectionvideo = function(e, r, t) {
        console.log(e.target)
        if (e.target.className === "VideoCard__controls video_item_controls") {
            var loc2 = t ? t : e.path[3];
            var loc1 = r ? r : loc2.getAttribute("ckeckn1");
            var loc3 = loc2.getAttribute("ckeckn1");
            if (loc1 == "null" || loc1 == null || loc1 == 0 || loc1 == "0" || loc1 == '0') {
                //выделение видео в рамку

                loc2.setAttribute("style", "outline:  4px solid #6640cf; /* Чёрная рамка */    border: 3px solid #fff; /* Белая рамка */    border-radius: 10px; /* Радиус скругления */");
                loc2.setAttribute("ckeckn1", "1")
                if (loc3 == loc1) {
                    countseleectvideo = countseleectvideo + 1;
                    loc2.parentElement.countseleectvideo = countseleectvideo;
                    mego.textContent = countseleectvideo;
                    console.log(countseleectvideo);
                }
            } else {
                loc2.setAttribute("style", "");
                loc2.setAttribute("ckeckn1", "0")
                if (loc3 == loc1) {
                    countseleectvideo = countseleectvideo - 1;
                    loc2.parentElement.countseleectvideo = countseleectvideo;
                    mego.textContent = countseleectvideo;
                    console.log(countseleectvideo);
                }
            }
        } else if (e.target.className == 'VideoCard__action VideoCard__action--move') {

            var loc2 = t ? t : e.path[5];
            var loc1 = loc2.getAttribute("ckeckn1");
            if (loc1 == "null" || loc1 == null || loc1 == 0 || loc1 == "0" || loc1 == '0') {
                countseleectvideo = countseleectvideo + 1;
                mego.textContent = countseleectvideo;
            }
            loc2.setAttribute("style", "outline:  4px solid #6640cf; /* Чёрная рамка */    border: 3px solid #fff; /* Белая рамка */    border-radius: 10px; /* Радиус скругления */");
            loc2.setAttribute("ckeckn1", "1")
        }
    }

    addeventlistenerclickvideo = function(item) {
        item.addEventListener('click', function(event) {
            if (event.shiftKey === true && event.type === "click") { //	если зажат шивт и кликнуто мышкой то выполнить код
                if (event.altKey != true) {
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
        var fixpositioncrackvideo = videolist.children.length; //проверка на перемещение видео внутри списка, без проверки будут вешаться новые обработчики, засоряющие память
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
        if (document.getElementsByClassName('video_items_list ').length == 0) {
            mego.textContent = 0;
        }
        document.getElementsByClassName('video_items_list ').forEach((videolist) => {
            //проверять стоят ли обработчики на данном списке, чтоб не вешать их повторно	
            if (videolist.initializedvidlist == (false || undefined)) {
                listItem2 = videolist.children;
                listArray2 = [...listItem2];
                listArray2.forEach((item) => {
                    addeventlistenerclickvideo(item);
                });
                videolist.countseleectvideo = 0;
                countseleectvideo = 0;
                mego.textContent = countseleectvideo;
                videolist.initializedvidlist = true;
                // ставит обработчики на новые видео в списке
                listenertonewvideosonlist(videolist); // 
            } else if (videolist.style.position == 'relative') {
                // если список видео был когда-то иницилаизирован то ничего не делать

                countseleectvideo = videolist.countseleectvideo;
                mego.textContent = countseleectvideo;
                console.log(countseleectvideo);
            }
        })
    }

    listenerhasvideos();


    MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
        observer = new MutationObserver((mutations, observer) => {
            mutations.forEach(function(mutation) {
                if (mutation.target.id == 'wrap3') {
                    listenerhasvideos();
                } else if (mutation.target.getAttribute("class") == "olist") {
                    var eeee = Bestie123webmodule.api('video.getAlbums', {
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
                }
            });
        }).observe(document, {
            childList: true,
            subtree: true
        });



    document.body.addEventListener("DOMNodeInserted", function(e) {
        if (e?.target?.getAttribute?.("class") == "FlatButton FlatButton--primary FlatButton--size-m") {
            if (document.getElementsByClassName("olist")[0].children.length > 0) {
                if (document.getElementsByClassName("box_controls")[0].initializedboxcntrl == (false || undefined)) {
                    countersuccesvideolabel = document.createElement('span');
                    countersuccesvideolabel.className = "pl_size";
                    document.getElementsByClassName("box_controls")[0].prepend(countersuccesvideolabel)
                    document.getElementsByClassName("box_controls")[0].initializedboxcntrl = true //защита от переполнения памяти
                } else {}
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
                                loc1[item1111.getAttribute("data-id")] = {
                                    newaddedalbums: {},
                                    hash: item1111.getAttribute("data-hash")
                                }
                            }
                        })
                    })
                    kimiko = Object.keys(loc1).length // количество выделенных видео для вывода счетчика	

                    addremovesortvideo = function() {
                        var succespostcount = 0;
                        var succespostcount2 = 0;
                        var succespostcount3 = 0;
                        // копирование, добавление и удаление видео для не приватных видео
                        addremovevideo = function(param) {
                            var a1 = llll3.toString();
                            var a2 = [];
                            var a3 = [];
                            var a4 = llll4.toString();
                            param.forEach((item) => {
                                a2.push(loc1[item].owner_id);
                                a3.push(loc1[item].id_video);
                            })
                            var anomfunc2 = function() {
                                Bestie123webmodule.api('execute.addvideos', {
                                    album_ids: a1,
                                    owner_id: a2,
                                    video_id: a3
                                }).then(function(values) { // альбомы для добавления
                                    // сделать перебор albums - values
                                    values.forEach((album) => {
                                        loc1[album.item].newaddedalbums = album.albums.reduce((a, v) => ({
                                            ...a,
                                            [v]: ''
                                        }), {});
                                    })
                                    anomfunc222()
                                }, function(err) {
                                    console.log(err)
                                    if (err.error.error_code == 6) {
                                        setTimeout(anomfunc2, 200);
                                    }
                                })
                            }

                            var anomfunc222 = function() {
                                Bestie123webmodule.api('execute.removevideos', {
                                    album_ids: a4,
                                    owner_id: a2,
                                    video_id: a3
                                }, function(r) {}).then(function(values) { //альбомы для удаления
                                    succespostcount = succespostcount + values.count
                                    countersuccesvideolabel.textContent = 'Загружено ' + succespostcount + ' из ' + kimiko + ' видео';
                                    if (parametrspostarray3.length == 0) {
                                        function3();
                                    } else {
                                        addremovevideo(parametrspostarray3.pop())
                                    }
                                }, function(err) {
                                    console.log(err);
                                    if (err.error.error_code == 6) {
                                        setTimeout(anomfunc222, 200);
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
                                    parametrspostarray3 = spl(parametrspostarray3, 25) // объединяет видео в массивы по 25 штук
                                    addremovevideo(parametrspostarray3.pop())
                                }
                            } else {
                                function3();
                            }
                        }
                        //сортировка видео, если поменять, например, метод pop на shift то обязательно нужно переворачивать массив с сортируемыми видео
                        // т.к. в нормальном порядке для 100 видео необходимо 100 запросов на сортировку, в обратном же прийдется сделать около 10 000					
                        var loc333 = function(param) {
                            var a1 = [];
                            var a2 = [];
                            var a3 = [];
                            var a4 = [];
                            var a5 = [];
                            param.forEach((videolist) => {
                                a1.push(videolist.album_id);
                                a2.push(videolist.owner_id);
                                a3.push(videolist.video_id);
                                a4.push(videolist.after_owner_id);
                                a5.push(videolist.after_video_id);
                            })
                            Bestie123webmodule.api('execute.sortVideos', {
                                album_id: a1,
                                owner_id: a2,
                                video_id: a3,
                                after_owner_id: a4,
                                after_video_id: a5
                            }).then(function(values) {
                                console.log(values);
                                succespostcount2 = succespostcount2 + values.count
                                countersuccesvideolabel.textContent = 'Отсортировано ' + succespostcount2 + ' из ' + succespostcount3 + ' видео';
                                if (parametrspostarray2.length == 0) {
                                    boxQueue._hide(boxQueue.curBox)
                                } else {
                                    setTimeout(function() {
                                        loc333(parametrspostarray2.pop())
                                    }, 100);
                                }
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
                                            console.log(item1)
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
                                                            parametrspostarray2.push({
                                                                album_id: a1,
                                                                owner_id: a2,
                                                                video_id: a3,
                                                                after_owner_id: a4,
                                                                after_video_id: a5
                                                            });
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
                                parametrspostarray2 = spl(parametrspostarray2, 25).reverse(); //максиммальное количество видео которое может вернуть запрос
                                console.log(parametrspostarray2)
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
                                if (loc1[item].can_add == 0) { // 	получаем информацию о параметре can_add для разделения видео на приватные и все остальные		
                                    parametrspostarray.push(item);
                                }
                            })
                            if (parametrspostarray.length == 0) {
                                // вызываем следующую функцию
                                function2();
                            } else {
                                anomfunc233(parametrspostarray.pop())
                            }
                        } else {
                            function2();
                        }
                    }

                    function spl(arr, size) {
                        var result = [];
                        var len = arr.length;
                        for (var i = 0; i < len; i += size) {
                            result.push(arr.slice(i, i + size));
                        }
                        return result;
                    }

                    az1111 = spl(Object.keys(loc1), 5000); //максиммальное количество видео которое может вернуть запрос
                    getlistvideos = function(list) {
                        eeeegf = Bestie123webmodule.api('execute.newFuncgh', {
                            count: 200,
                            videos: Object.keys(loc1)
                        }).then(function(mmm) {
                            var b = 0;
                            var ccv = [];
                            var ccv2 = [];
                            var ccv3 = [];
                            var arr = [];
                            var arr2 = [];
                            var arr3 = [];
                            while (b < mmm.owner_id.length) {
                                arr = mmm.owner_id[b];
                                arr2 = mmm.id[b];
                                arr3 = mmm.can_add[b];
                                var i = 0;
                                while (i < arr.length) {
                                    var owner_id = arr[i],
                                        id_video = arr2[i]
                                    Object.assign(loc1[owner_id + '_' + id_video], {
                                        owner_id: owner_id,
                                        id_video: id_video,
                                        can_add: arr3[i]
                                    })
                                    i = i + 1;
                                }
                                b = b + 1
                            }
                            if (az1111.length > 0) {
                                getlistvideos(az1111.pop());
                            } else {
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

if (!localStorage.getItem('auuthorizationoauthtocenthiuserforappsvideoextension')) {
    window.addEventListener('message', function(event) {
        var lom1 = event.data[0];
        if (lom1?.hash?.match('code')?.[0] == 'code') {
            console.log(lom1?.hash?.match('code')?.[0] == 'code')
            var code = lom1.hash.substr(1)
            authorizeocno.postMessage(['https://oauth.vk.com/access_token?client_id=8182193&client_secret=NEZARECHHOMgJVpy06RK&redirect_uri=https://vk.com/blank.html&' + code, '', 1], '*');
        } else if (lom1.href.match('access_token')[0] == 'access_token') {
            Bestie123webmodule.setApiConfig({
                appId: 8182193,
                version: '5.81', //,//,
                accessToken: event.data[1]
            })
            localStorage.setItem('auuthorizationoauthtocenthiuserforappsvideoextension', event.data[1]);
            authorizeocno.close()
            init29543();
        }
    })
    var authorizeocno = window.open('https://oauth.vk.com/authorize?client_id=8182193&display=page&redirect_uri=https://vk.com/blank.html&scope=friends,video,offline&response_type=code&v=5.131')
} else {
    zk = localStorage.getItem('auuthorizationoauthtocenthiuserforappsvideoextension');
    Bestie123webmodule.setApiConfig({
        appId: 8182193,
        version: '5.81',
        accessToken: localStorage.getItem('auuthorizationoauthtocenthiuserforappsvideoextension')
    })
    init29543();
}
