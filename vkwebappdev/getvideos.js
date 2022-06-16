var items2=[];
//разделение на блоки
var result = [];
var videos = Args.videos;
//разбивает строку с видео на массив, получает по 200 видео в одном 
//запросе и суммирует результат
// можно получть до 25*200 = 5000 видео за раз
var response=[];
  var bukk = videos.split(',');
var size=200;
var arr = videos;
  var len = bukk.length;
  var i = 0;
  var kk=0;
  var owner_id=[];
  var id=[];
  var can_add=[];
  var tmp2={};
 while (kk<25 && i<len) {
     items2 = API.video.get({count: 200, videos: bukk.slice(i,i+size)})["items"];//@.id;
 
 var tmp={};
  owner_id.push(items2@.owner_id);
 id.push(items2@.id);
 can_add.push(items2@.can_add);
     i=i+size;
     kk=kk+1;
  }
  tmp2.owner_id=owner_id;
 tmp2.id=id;
 tmp2.can_add=can_add;
//-----------------------------------------------------
  return tmp2;
