const allFavLink = document.querySelector('.favorite-link');
let allFavMsgs = JSON.parse(window.localStorage.getItem('favorite_msgs'));
if (!allFavMsgs) {
  allFavMsgs = [];
  localStorage.setItem('favorite_msgs', JSON.stringify(allFavMsgs));
}

// Загрузка всех сообщений

const allMessages = document.querySelector('.messages-block');
let fileBase64 = '';
let counter = 1;
let messages = [];

function renderMessages() {
  let partOfMessage;
  let message;

  messages.forEach((element) => {
    const date = new Date(element.date);
    const year = date.getFullYear();
    const month = `0${date.getMonth() + 1}`;
    const day = `0${date.getDate()}`;
    const hours = `0${date.getHours()}`;
    const minutes = `0${date.getMinutes()}`;
    const seconds = `0${date.getSeconds()}`;
    const formattedTime = `${day.substr(-2)}.${month.substr(-2)}.${year} ${hours.substr(-2)}:${minutes.substr(-2)}:${seconds.substr(-2)}`;

    if (element.type === 'user') {
      message = document.createElement('div');
      message.classList.add('message', 'user-msg');
      message.setAttribute('id', `${element.id}`);
      let { text } = element.body;
      const arrayWords = text.split(' ');
      for (let i = 0; i < arrayWords.length; i += 1) {
        if (arrayWords[i].startsWith('http://') || arrayWords[i].startsWith('https://')) {
          // eslint-disable-next-line no-param-reassign
          arrayWords[i] = `<a class="users-link" href="${arrayWords[i]}">${arrayWords[i]}</a>`;
        }
      }
      text = arrayWords.join(' ');
      partOfMessage = ` 
        <div class="user-msg-body">
          <p class="user-msg-text">${text}</p>
          ${element.body.fileName ? `${'<div class="user-msg-file">'
          + '<span class="material-icons attach-icon attach-msg-file">attach_file</span>'}
          ${element.body.fileName}</div>` : ''}
        </div>
        ${element.body.geolocation.latitude && element.body.geolocation.longitude ? `<span class="user-msg-geolocation">${element.body.geolocation.latitude}, ${element.body.geolocation.longitude}</span>` : ''}
      `;
    } else if (element.type === 'bot' && element.body.type === 'book') {
      message = document.createElement('div');
      message.classList.add('message', 'bot-msg', 'msg-book');
      message.setAttribute('id', `${element.id}`);
      partOfMessage = `
        <div class="bot-msg-box">
          <span class="book-intro">Рекомендую почитать:</span>
          <p class="bot-msg-body">
            Название: ${element.body.title}. 
            Автор: ${element.body.author}. 
            Жанр: ${element.body.genre}.
          </p>
        </div>
      `;
    } else if (element.type === 'bot' && element.body.type === 'forecast') {
      message = document.createElement('div');
      message.classList.add('message', 'bot-msg', 'msg-weather');
      message.setAttribute('id', `${element.id}`);
      partOfMessage = `
        <div class="bot-msg-box">
          <span class="weather-intro">Погода на сегодня:</span>
          <p class="bot-msg-body">${element.body.temperature}, ${element.body.description}</p>
        </div>
      `;
    } else if (element.type === 'bot' && element.body.type === 'game') {
      message = document.createElement('div');
      message.classList.add('message', 'bot-msg', 'msg-games');
      message.setAttribute('id', `${element.id}`);
      partOfMessage = `
        <div class="bot-msg-box">
          <span class="games-intro">Рекомендую поиграть:</span>
          <p class="bot-msg-body">
            Название: ${element.body.title}, 
            Жанр: ${element.body.genre},
            Описание: ${element.body.description}
          </p>
        </div>
      `;
    } else if (element.type === 'bot' && element.body.type === 'recipe') {
      message = document.createElement('div');
      message.classList.add('message', 'bot-msg', 'msg-recipes');
      message.setAttribute('id', `${element.id}`);
      partOfMessage = `
        <div class="bot-msg-box">
          <span class="recipes-intro">Рекомендую приготовить:</span>
          <p class="bot-msg-body">
            ${element.body.title}, 
            Способ приготовления: ${element.body.cooking}
          </p>
        </div>
      `;
    } else if (element.type === 'bot' && element.body.type === 'serie') {
      message = document.createElement('div');
      message.classList.add('message', 'bot-msg', 'msg-series');
      message.setAttribute('id', `${element.id}`);
      partOfMessage = `
        <div class="bot-msg-box">
          <span class="series-intro">Рекомендую посмотреть:</span>
          <p class="bot-msg-body">
            Название: ${element.body.title}, 
            Жанр: ${element.body.genre},
            Описание: ${element.body.description}
          </p>
        </div>
      `;
    } else {
      console.error('Something wrong');
      console.log(element);
      console.log('type: ', element.type, 'body.type: ', element.body.type);
    }
    allFavMsgs = JSON.parse(window.localStorage.getItem('favorite_msgs'));
    const favoriteType = allFavMsgs && allFavMsgs.find((favMsg) => favMsg.includes(`id="${element.id}"`)) ? 'favorite' : 'favorite_border';
    const messageBody = `
      <ul class="msg-tools">
        <li class="msg-tool">
          <button class="material-icons favorite-tool">${favoriteType}</button>
        </li>
        <li class="msg-tool">
          <button class="material-icons pin-tool">push_pin</button>
        </li>
      </ul>
      ${partOfMessage}
      <ul class="msg-info-panel">
        <li class="msg-info-item">
          <button class="more-btn more-off">More</button>
        </li>
        <li class="msg-info-item">
          <span class="msg-date">${formattedTime}</span>
        </li>
      </ul>`;
    message.insertAdjacentHTML('beforeend', messageBody);

    // Добавление сообщений в избранное

    const favBtn = message.querySelector('.favorite-tool');

    favBtn.addEventListener('click', () => {
      if (favBtn.textContent === 'favorite_border') {
        favBtn.textContent = 'favorite';
        allFavMsgs.push(favBtn.closest('.message').outerHTML);
      } else if (favBtn.textContent === 'favorite') {
        favBtn.textContent = 'favorite_border';
        const favMsgId = favBtn.closest('.message').getAttribute('id');
        const favMsgIndex = allFavMsgs.findIndex((favMsg) => favMsg.includes(`id="${favMsgId}"`));
        allFavMsgs.splice(favMsgIndex, 1);
      }
      window.localStorage.setItem('favorite_msgs', JSON.stringify(allFavMsgs));
    });

    allMessages.appendChild(message);

    // Закрепление сообщения

    const pinBtn = message.querySelector('.pin-tool');
    const pinBlock = document.querySelector('.pin-block');
    const msgToPin = pinBtn.closest('.message');

    pinBtn.addEventListener('click', () => {
      if (pinBlock.children.length !== 0) {
        alert('You already have a pinned post. Only one message can be pinned.');
      } else {
        msgToPin.classList.add('pin-msg');
        pinBlock.insertAdjacentHTML('afterbegin', msgToPin.outerHTML);
        const pinnedMsg = document.querySelector('.pin-msg');
        const pinFromPinnedMsg = pinnedMsg.querySelector('.pin-tool');
        pinFromPinnedMsg.textContent = 'close';
        pinFromPinnedMsg.classList.remove('pin-tool');
        pinFromPinnedMsg.classList.add('unpin');

        const unpinMsgBtn = pinnedMsg.querySelector('.unpin');
        unpinMsgBtn.addEventListener('click', () => {
          pinBlock.innerHTML = '';
        });
      }
    });
  });
}

// Запрос на получение сообщений с сервера

function getAllMessages(elementId) {
  const xhr = new XMLHttpRequest();
  const url = `http://localhost:7071/api/messages?page=${counter}`;
  let id = elementId;
  xhr.open('GET', url, true);
  xhr.addEventListener('load', () => {
    if (xhr.status === 200) {
      const body = JSON.parse(xhr.response);
      if (body.length > 0) {
        allMessages.innerHTML = '';
        messages = body.concat(messages);
        renderMessages();
        if (id < 0) {
          id = messages[messages.length - 1].id;
        }
        const lastElement = document.getElementById(id);
        lastElement.scrollIntoView();
      } else {
        counter -= 1;
      }
    }
  });

  xhr.send();
}

const messagesBlock = document.querySelector('.messages-block');
messagesBlock.addEventListener('scroll', (event) => {
  if (event.target.scrollTop === 0) {
    counter += 1;
    const lastElementId = messages[0].id;
    getAllMessages(lastElementId);
  }
}, false);

getAllMessages(-1);

// Отправка текстового сообщения и файлов

const typingField = document.querySelector('.typing-field');
const sendBtn = document.querySelector('.send-icon');
const spinner = document.querySelector('.loader');
const fileName = document.querySelector('.file-name-text');
const closeFileBtn = document.querySelector('.close-file');
const file = document.querySelector('.file');
let latitude = '';
let longitude = '';

function sendingMessage() {
  if (typingField.value !== '' || fileBase64 !== '' || latitude !== '' || longitude !== '') {
    const xhr = new XMLHttpRequest();
    const url = 'http://localhost:7071/api/messages/new';

    const data = {};
    data.text = typingField.value;
    data.file = fileBase64;
    data.fileName = fileName.textContent;
    data.latitude = latitude;
    data.longitude = longitude;

    fileBase64 = '';
    latitude = '';
    longitude = '';

    const json = JSON.stringify(data);
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const body = JSON.parse(xhr.response);
          console.log(body.id);
          // messages.push(body);
          // renderMessages();
          typingField.value = '';
          fileName.textContent = '';
          closeFileBtn.classList.add('inactive');
          sendBtn.classList.add('send-inactive');
        }
      }
    });

    xhr.send(json);
  }
}

// Работа с файлами и полем для отправки сообщений

function getBase64(loadingFile) {
  const reader = new FileReader();
  reader.readAsDataURL(loadingFile);
  reader.onload = () => {
    fileBase64 = reader.result;
    spinner.classList.add('inactive');
    sendBtn.classList.remove('send-inactive');
  };
}

function fileUpload() {
  if (fileName.textContent !== '') {
    spinner.classList.remove('inactive');
  }

  closeFileBtn.classList.remove('inactive');
  closeFileBtn.addEventListener('click', (e) => {
    e.preventDefault();
    fileName.innerHTML = '';
    closeFileBtn.classList.add('inactive');
    spinner.classList.add('inactive');
    if (typingField.value === '') {
      sendBtn.classList.add('send-inactive');
    }
  });
}

file.addEventListener('change', () => {
  getBase64(file.files[0]);
  fileName.innerHTML = file.files[0].name;
  fileUpload();
});

typingField.addEventListener('input', () => {
  if (typingField.value !== '') {
    sendBtn.classList.remove('send-inactive');
  } else {
    sendBtn.classList.add('send-inactive');
  }
});

function enterSendingMessage(e) {
  if (e.key === 'Enter') {
    sendingMessage();
  }
}

const botCommands = document.querySelectorAll('.bot-command');
botCommands.forEach((command) => {
  command.addEventListener('click', () => {
    sendBtn.classList.remove('send-inactive');
    if (typingField.value !== '') {
      typingField.value += ` ${command.textContent}`;
    } else {
      typingField.value += command.textContent;
    }
  });
});

window.addEventListener('keypress', enterSendingMessage, false);
sendBtn.addEventListener('click', sendingMessage, false);

// Drag-and-Drop

const dropArea = document.querySelector('.drop-area');

function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}

function handleFiles(files) {
  getBase64(files[0]);
  fileName.innerHTML = files[0].name;
  fileUpload();
}

function handleDrop(e) {
  const dt = e.dataTransfer;
  const { files } = dt;
  handleFiles(files);
}

// Prevent default drag behaviors

['dragenter', 'dragover', 'dragleave', 'drop'].forEach((eventName) => {
  dropArea.addEventListener(eventName, preventDefaults, false);
  document.body.addEventListener(eventName, preventDefaults, false);
});

// Handle dropped files

dropArea.addEventListener('drop', handleDrop, false);

// Геолокация

const locationBtn = document.querySelector('.location-icon');
locationBtn.addEventListener('click', () => {
  navigator.geolocation.getCurrentPosition((position) => {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    // eslint-disable-next-line no-alert
    alert('Your geolocation has been successfully received!');
  });
});

// Модальное окно с избранными сообщениями

const favModal = document.querySelector('.favorites_modal');
const modalFavContent = document.querySelector('.modal_content');
const clearBtn = modalFavContent.querySelector('.clear-favorite_msgs');

clearBtn.addEventListener('click', () => {
  allFavMsgs = [];
  window.localStorage.setItem('favorite_msgs', JSON.stringify(allFavMsgs));
  window.location.reload();
});

allFavLink.addEventListener('click', (e) => {
  e.preventDefault();
  favModal.classList.remove('inactive');
  const favList = document.querySelector('.favorite_msgs');
  favList.innerHTML = '';
  allFavMsgs = JSON.parse(window.localStorage.getItem('favorite_msgs'));
  allFavMsgs.forEach((favMsg) => {
    const favListEl = document.createElement('li');
    favListEl.innerHTML = favMsg;
    favList.appendChild(favListEl);
  });
});

const closeModalBtn = document.querySelector('.close_modal_btn');

closeModalBtn.addEventListener('click', () => {
  favModal.classList.add('inactive');
});

// Поиск по сообщениям

const searchField = document.querySelector('.search-field');
const findedCounter = document.querySelector('.finded-counter');
const findedClear = document.querySelector('.finded-clear');
const findPrevious = document.querySelector('.finded-left');
const findNext = document.querySelector('.finded-right');
let allFindedMsgs = [];
let findedCurrentMsgIndex;
let findedMsgInFocus;

function clearingFoundMessages() {
  findedCounter.textContent = 0;
  const findedMsgs = document.querySelectorAll('.finded-msg');
  findedMsgs.forEach((msg) => {
    msg.classList.remove('finded-msg');
  });
  if (findedMsgInFocus) {
    if (findedMsgInFocus.classList.contains('current-finded-msg')) {
      findedMsgInFocus.classList.remove('current-finded-msg');
    }
  }
}

findPrevious.addEventListener('click', () => {
  if (allFindedMsgs.length > 1) {
    findedMsgInFocus.classList.remove('current-finded-msg');
    findedCurrentMsgIndex -= 1;
    findedMsgInFocus = document.getElementById(allFindedMsgs[findedCurrentMsgIndex].id);
    findedMsgInFocus.classList.add('current-finded-msg');
    findedMsgInFocus.scrollIntoView({ behavior: 'smooth' });
  }
});

findNext.addEventListener('click', () => {
  if (allFindedMsgs.length > 1) {
    findedMsgInFocus.classList.remove('current-finded-msg');
    findedCurrentMsgIndex += 1;
    findedMsgInFocus = document.getElementById(allFindedMsgs[findedCurrentMsgIndex].id);
    findedMsgInFocus.classList.add('current-finded-msg');
    findedMsgInFocus.scrollIntoView({ behavior: 'smooth' });
  }
});

findedClear.addEventListener('click', () => {
  clearingFoundMessages();
});

function searchMessage(searchRequest) {
  const xhr = new XMLHttpRequest();
  const url = `http://localhost:7071/api/messages/find?query=${searchRequest}`;
  xhr.open('GET', url, true);
  xhr.addEventListener('load', () => {
    if (xhr.status === 200) {
      const body = JSON.parse(xhr.response);
      if (body.length > 0) {
        allFindedMsgs = body;
        allFindedMsgs.forEach((element) => {
          const findedMsg = document.getElementById(element.id);
          findedMsg.classList.add('finded-msg');
          findedCounter.textContent = allFindedMsgs.length;
        });
        findedCurrentMsgIndex = allFindedMsgs.length - 1;
        findedMsgInFocus = document.getElementById(allFindedMsgs[findedCurrentMsgIndex].id);
        findedMsgInFocus.classList.add('current-finded-msg');
        findedMsgInFocus.scrollIntoView({ behavior: 'smooth' });
        searchField.value = '';
      } else {
        alert('No results found for this search.');
        searchField.value = '';
      }
    }
  });

  xhr.send();
}

searchField.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    if (searchField.value !== '') {
      clearingFoundMessages();
      searchMessage(searchField.value);
    } else {
      alert('Enter your request.');
    }
  }
});
