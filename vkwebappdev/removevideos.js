var album_ids = Args.album_ids;
var owner_id = Args.owner_id.split(",");
var video_id = Args.video_id.split(",");

//позволяет сортировать видео блоками по 25 а не по 1 как обычно
  var len = video_id.length;
  var i = 0;
  var kk=0;
  var count =0;
  var albums=[];
 while (kk<25 && i<len) {
albums.push(API.video.removeFromAlbum({
                            album_ids: album_ids,
                            owner_id: parseInt(owner_id[i]),
                            video_id: parseInt(video_id[i])
                        }));
     i=i+1;
     kk=kk+1;
  }

//-----------------------------------------------------
  return {count:i};
