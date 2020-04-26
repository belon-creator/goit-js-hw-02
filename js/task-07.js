console.log('================== task 7 =============================');

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
  let minValue = 4;
  let maxValue = 16;

  if (login.length >= minValue && login.length <= maxValue) {
    return true;
  } else {
    return false;
  }
};

const isLoginUnique = function (AllLogins, login) {
  for (const word of AllLogins) {
    if (word === login) {
      return false;
      break;
    }
  }
};

const addLogin = function (AllLogins, login) {
  if (isLoginValid(login) === false) {
    alert('Ошибка! Логин должен быть от 4 до 16 символов.');
  } else if (isLoginUnique(AllLogins, login) === false) {
    alert('Такой логин уже используется!');
  } else {
    alert('Логин успешно добавлен!');
    AllLogins.push(login);
  }
};

addLogin(logins, prompt('Введите логин:'));

console.log(logins);
