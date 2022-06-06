# videoextension!
1.скрипт, позволяющий выделяться несколько видео одновременно при зажатии клавиши shift и клике мышкой по видео
2. нажимается как обычно в любом из видео кнопка выбора в какие плейлисты добавить видео, выбираются плейлисты и нажимается кнопка сохранить, все видео автоматически переносятся в отмеченные альбомы.
Плюсы:
- в отличии от api разработчиков позволяет перемещать даже приватные видео
- можно выделить сразу несколько нужных видео и разом перенести в необходимые плейлисты

был проверен в Opera и Google Chrome, можно запустить либо добавлением в консоль или с помощью расширений для пользовательских скриптов

Минусы
необходимо добавлять  обработчик ошибок на высокую скорость загрузки или капчу т к таким методом видео можно переносить в албомы только по одному

Что добавить:
- обработчик ошибок на высокую скорость загрузки или капчу т к таким методом видео можно переносить в албомы только по одному
- проверку и сортировку чтобы видео переносились точно в таком же порядке в котором они находятся в  альбоме
- возможность выделять двумя кликами сразу много видео
- проверку в каком альбоме находится видео и если после нажатия кнопки сохранить видео удаляетсяя из альбома, то удалить его html элемент(проверить не ломается ли перемещение смежных элементов после удаления видео)
- убирать рамки после выполнения перемещений видео(если видео не удалено из альбома)
- разделить запросы на добавление видео на различные методы отправки  [метод доступный практически для всех видео(более совершенный)] , [метод доступный абсолютно для всех видео, включая видео, помеченные как доступные только для приватных альбомов]. Второй метод плох тем, что при его вызове намного более высока вероятность появления капчи
- добавить счетчик очереди переноса видео в альбомы

Ответ из техподдержке по ошибке 204 acces denied:
Если у видео установлены настройки приватности, то обойти их при использовании API никак не выйдет. Ошибка 15 зачастую встречается, когда у токена недостаточно прав для вызова метода. Здесь же речь немного о другом.
![Безымянный](https://user-images.githubusercontent.com/15684883/171671625-6668fdf6-4989-4490-976f-1513662e12b4.png)
![Безымянный](https://user-images.githubusercontent.com/15684883/171754643-d77ef901-40bf-4c41-9abb-eb72ad661be1.png)


**v2**

**1** Методы перемещения разделены на два варианта запроса к серверам вконтакте:

один метод работает только с приватными видео пользователя, перемещение приватных видео, помеченных как "доступно только для добавление в приватный альбом", он также может работать с остальными видео, но является неэффективным т к велика вероятность получить капчу.
второй метод работает с помощью api вконтакте, с помощью него можно отправлять несколько запросов сразу и тем самым снижать вероятность появления капчи, но в этой версии просто реализован данный метод, без групповых запросов.

**2** В предыдущей версии все видео перемещались в альбом в том порядке, в котором их выделяли, в данной версии эта проблема решена и после добавления все видео автоматически сортируются. Если среди перемещаемых видео есть те, которые уже ест в других альбомах, то эти видео не будут сортироваться также как в открытом альбоме и останутся на своих местах.

**3** Пофикшена кнопка "сохранить", в старой версии при ее нажатии запускались ее родные действия и данный скрипт, в этой версии запускается только данный скрипт
