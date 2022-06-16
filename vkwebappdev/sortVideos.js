var album_id = Args.album_id.split(",");
var owner_id = Args.owner_id.split(",");
var video_id = Args.video_id.split(",");
var after_owner_id = Args.after_owner_id.split(",");
var after_video_id = Args.after_video_id.split(",");

//позволяет сортировать видео блоками по 25 а не по 1 как обычно
  var len = album_id.length;
  var i = 0;
  var kk=0;
  var count =0;
 while (kk<25 && i<len) {
    count= count +   API.video.reorderVideos({
                        album_id: parseInt(album_id[i]),
                        owner_id: parseInt(owner_id[i]),
                        video_id: parseInt(video_id[i]),
                        after_owner_id: parseInt(after_owner_id[i]),
                        after_video_id: parseInt(after_video_id[i])
                    });
     i=i+1;
     kk=kk+1;
  }

//-----------------------------------------------------
  return {count:count};
