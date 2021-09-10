<p align="center">
  <img src="https://raw.githubusercontent.com/valerie-sidman/chaos-frontend/master/screenshots/chaos_logo.png">
</p>
<h1 align="center">Chaos. Приложение органайзер</h1>
<h3 align="center">Дипломное задание к курсу "Продвинутый JavaScript в браузере"</h3>
<p align="center">
  <img src="https://ci.appveyor.com/api/projects/status/fv8vlf7i5usw0a8h">
</p>
<p align="center">
  :point_right: <a href="https://valerie-sidman.github.io/chaos-frontend/">Попробовать приложение Chaos</a> :point_left:
</p>

<h3 align="left">Содержание:</h3>
<ul>
  <li>О приложении</li>
  <li>Основные реализованные функции</li>
  <li>Дополнительные реализованные функции</li>
  <li>Ссылки</li>
  <li>Что можно было бы улучшить</li>
</ul>
      
<h2 align="left">О приложении</h2>
<p align="left">Приложение Chaos призвано собирать и хранить информацию, а также обеспечивать поиск по ней. Но кроме того, в нём есть бот, который может стать Вашим помощником в повседневной жизни. Формат крайне прост и знаком любому пользователю - чат, в который Вы постите заметки и в котором взаимодействуете с ботом. Далее ознакомимся с функциями.</p>
<p align="center">
  <img src="https://raw.githubusercontent.com/valerie-sidman/chaos-frontend/master/screenshots/chaos_main.png">
</p>

<h2 align="center">Основные реализованные функции</h2>
<h3 align="left">Отправка текстового сообщения</h3>
<p align="left">Основная и главная функция органайзера Chaos - отправка и хранение заметок. Для того, чтобы создать новое сообщение достаточно ввести в поле ввода информацию, которую хотите сохранить, и отправить её с помощью клавиши <b>Enter</b> или нажав на специальный значок отправки:</p>
<p align="center">
  <img src="https://raw.githubusercontent.com/valerie-sidman/chaos-frontend/master/screenshots/chaos_send_msg.png">
</p>
<h3 align="left">Отправка ссылок</h3>
<p align="left">Ссылки также можно отправлять на хранение, они остаются кликабельными и корректно отображаются:</p>
<p align="center">
  <img src="https://raw.githubusercontent.com/valerie-sidman/chaos-frontend/master/screenshots/chaos_exmpl_msg_link.png">
</p>
<h3 align="left">Отправка файлов</h3>
<p align="left">Одна из важных функций органайзера - сохранение в истории файлов с любым форматом. Это можно сделать с помощью нажатия на специальный значок:</p>
<p align="center">
  <img src="https://raw.githubusercontent.com/valerie-sidman/chaos-frontend/master/screenshots/chaos_btn_upload_file.png">
</p>
<p align="left">А также достаточно просто перетянуть необходимый файлик в область чата:</p>
<p align="center">
  <img src="https://raw.githubusercontent.com/valerie-sidman/chaos-frontend/master/screenshots/chaos_dnd.png">
</p>
<p align="left">В специальной секции отобразится имя Вашего файла:</p>
<p align="center">
  <img src="https://raw.githubusercontent.com/valerie-sidman/chaos-frontend/master/screenshots/chaos_file_section.png">
</p>
<p align="left">Если вдруг передумали отправлять данный файл - рядом с его названием достаточно нажать на <b>Х</b> и он удалится.</p>
<h3 align="left">Скачивание файлов</h3>
<p align="left">Если Вам необходимо скачать файл, который Вы ранее уже загружали в чат - необходимо нажать на название этого файла в заметке, после чего появится диалоговое окно для последующего сохранения файла на Ваше устройство:</p>
<p align="center">
  <img src="https://raw.githubusercontent.com/valerie-sidman/chaos-frontend/master/screenshots/chaos_file_name.png">
  <img src="https://raw.githubusercontent.com/valerie-sidman/chaos-frontend/master/screenshots/chaos_dialog_download.png">
</p>
<h3 align="left">Ленивая подгрузка</h3>
<p align="left">Несмотря на непродуктивное определение данной функции, она довольно удобна. Чтобы посмотреть информацию, которую Вы отправляли ранее, необходимо прокрутить ползунок вертикальной прокрутки чата вверх до упора, после чего появятся предыдущие 10 заметок:</p>
<p align="center">
  <img src="https://raw.githubusercontent.com/valerie-sidman/chaos-frontend/master/screenshots/chaos_auto_loading.gif">
</p>

<h2 align="center">Дополнительные реализованные функции</h2>
<h3 align="left">Поиск по сообщениям</h3>
<p align="left">Для того чтобы осуществить поиск по заметкам необходимо в верхнем правом углу нажать на иконку лупы, в появившейся строке вбить свой запрос и нажать на клавишу <b>Enter</b>. Над чатом в поле с найденными сообщениями появится их количество, а в самом чате результат поиска подсветится зелёным цветом. Для того, чтобы переключиться на предыдущий или следующий результат, необходимо воспользоваться навигационными стрелочками рядом с полем, где указано количество найденных сообщений. Если же результаты поиска больше Вам не нужны, то можно их сбросить нажав на иконку сброса, которая располагается рядом с навигацией по найденным сообщениям:</p>
<p align="center">
  <img src="https://raw.githubusercontent.com/valerie-sidman/chaos-frontend/master/screenshots/chaos_searching.gif">
</p>
<p align="left">Если результат поиска будет отрицательным, то браузер просто сообщит Вам об этом.</p>
<p align="center">
  <img src="https://raw.githubusercontent.com/valerie-sidman/chaos-frontend/master/screenshots/chaos_no_results.png">
</p>
<h3 align="left">Взаимодействие с ботом</h3>
<p align="left">Благодаря нескольким командам, которые можно отправить в чат, можно не попасть под дождь, приготовить вкусное блюдо к просмотру интересного сериала, а позже по-царски затащить в потной катке, где Вас обвинят в читерстве и пообещают перманентный бан. Итак, по порядку!</p>
<p align="left">Есть несколько полезных команд, которые можно отправить боту и в ответ получить не менее полезное сообщение, например:</p>
<ul>
  <li><b>@weather</b> - в ответ придёт случайный прогноз погоды. Разве это не весело?</li>
  <li><b>@series</b> - в ответ придёт совет к просмотру случайного сериала. Они все реально классные.</li>
  <li><b>@book</b> - в ответ придёт совет к прочтению случайной книги. Теперь Вам больше не будет стыдно в приличном обществе.</li>
  <li><b>@game</b> - в ответ придёт совет к прохождению случайной игры. Тут можно и расслабиться, и в сюжет погрузиться, и знатно прогореть.</li>
  <li><b>@recipe</b> - в ответ придёт случайный рецепт. Еды мало не бывает и она точно никогда не надоест.</li>
</ul>
<p align="center">Для удобства команды располагаются прямо под логотипом сайта:</p>
<p align="center">
  <img src="https://raw.githubusercontent.com/valerie-sidman/chaos-frontend/master/screenshots/chaos_commands.png">
</p>
<p align="left">Команды можно писать вручную, а также можно кликнуть по подсказке под логотипом Chaos и она автоматически вставится в поле отправки сообщения:</p>
<p align="center">
  <img src="https://raw.githubusercontent.com/valerie-sidman/chaos-frontend/master/screenshots/chaos_bot.gif">
</p>
<h3 align="left">Закрепление сообщения</h3>
<p align="left">Если какая-то заметка особенно требует внимания, то её можно поместить в специальную область, с помощью нажатия на иконку кнопки в самой заметке:</p>
<p align="center">
  <img src="https://raw.githubusercontent.com/valerie-sidman/chaos-frontend/master/screenshots/chaos_pin.png">
</p>
<p align="left">После этого, заметка появится в специальной области, над чатом, откуда потом, её при необходимости можно удалить, нажав на <b>Х</b>:</p>
<p align="center">
  <img src="https://raw.githubusercontent.com/valerie-sidman/chaos-frontend/master/screenshots/chaos_pinned_msg.png">
</p>
<h3 align="left">Добавление заметок в избранное</h3>
<p align="left">Иногда необходимо особенным образом отметить несколько определённых сообщений. Для этого есть возможность добавить всё нужное в Избранное. Сделать это можно, нажав на специальную иконку в самой заметке:</p>
<p align="center">
  <img src="https://raw.githubusercontent.com/valerie-sidman/chaos-frontend/master/screenshots/chaos_fav_icon.png">
</p>
<p align="center">После этого иконка видоизменится, что говорит нам о том, что добавление в Избранное прошло успешно:</p>
<p align="center">
  <img src="https://raw.githubusercontent.com/valerie-sidman/chaos-frontend/master/screenshots/chaos_fav_icon_on.png">
</p>
<p align="left">Посмотреть все заметки, которые Вы добавили в Избранное можно, нажав на специальный значок, в правом верхнем углу:</p>
<p align="center">
  <img src="https://raw.githubusercontent.com/valerie-sidman/chaos-frontend/master/screenshots/chaos_favorites.gif">
</p>
<p align="center">Быстро очистить Избранное можно, нажав на:</p>
<p align="center">
  <img src="https://raw.githubusercontent.com/valerie-sidman/chaos-frontend/master/screenshots/chaos_clear_fav.png">
</p>
<h3 align="left">Добавление геолокации</h3>
<p align="center">Если Вы в очередной раз забыли свой зонт и забыли, где его забыли, то функция добавления геолокации Вам точно понравится. Всего лишь необходимо нажать на соответствующую иконку на панели ввода сообщения, затем разрешить получение Вашей локации и в уже отправленной заметке отобразятся Ваши координаты:</p>
<p align="center">
  <img src="https://raw.githubusercontent.com/valerie-sidman/chaos-frontend/master/screenshots/chaos_geolocation.gif">
</p>
<p align="center">Вот так выглядит сообщение с добавленными координатами:</p>
<p align="center">
  <img src="https://raw.githubusercontent.com/valerie-sidman/chaos-frontend/master/screenshots/chaos_coords.png">
</p>
