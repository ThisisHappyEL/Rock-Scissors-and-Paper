import readlineSync from 'readline-sync';

const RockAndScissorsAndPaperGame = () => {
  const itemToGame = ['Камень', 'Ножницы', 'Бумага'];
  const chooseModificator = 3;
  const compChoise = Math.floor(Math.random() * chooseModificator);
  console.log('Добро пожаловать в игру "Камень, Ножницы, Бумага"!');
  const youChoise = readlineSync.keyInSelect(itemToGame, 'Выберите ваш предмет:');
  // console.log('Проверка выбора игроком', youChoise); Если нужно проверить индекс игрока
  if (youChoise < 0 || youChoise > 2) {
    return console.log('Напишите node.index.js ещё раз и на этот раз выберите предмет под порядковым номером 1, 2 или 3, пожалуйста.');
  }
  console.log(`Вы выбрали ${itemToGame[youChoise]}`);
  console.log(`Компьютер выбирает: ${itemToGame[compChoise]}`);
  // console.log('Проверка генерации выбора', compChoise);  Если нужно проверить индекс компа
  switch (true) {
    case youChoise === compChoise:
      return console.log('Результат: Ничья!. Чтобы на этот раз попробовать победить наберите "node index.js" в консоли ;)');
    case youChoise + 1 === compChoise || (youChoise === 2 && compChoise === 0):
      return console.log(`Результат: Вы победили :)! ${itemToGame[youChoise]} выигрывают у ${itemToGame[compChoise]}.
      Чтобы ещё раз показать этой глупой железяке наберите "node index.js" в консоли ;)`);
    case youChoise - 1 === compChoise || (youChoise === 0 && compChoise === 2):
      return console.log(`Результат: Вы Проиграли :(! ${itemToGame[youChoise]} проигрывает ${itemToGame[compChoise]}.
      Для ещё одной попытки вновь наберите "node index.js" в консоли ;)`);
    default:
      return console.log('Неа, этого произойти не должно. Просто для усмирения линтера, окаянного');
  }
};

RockAndScissorsAndPaperGame();
