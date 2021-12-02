const employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений', ' Дарья', ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'];
const nameCourse = 'Базовый React';
const command = [];
// for (let i = 0; i < employers.length; i++) {
// 	if (employers[i].length > 0 && employers[i].trim() != '') {
// 		command.push(employers[i]);
// 	}
// }
employers.forEach(ich => {
    if (ich.trim().length > 0) {
        command.push(ich)
    }
})

// for (var i = 0; i < command.length; i++) {
// 	command[i] = command[i].toLowerCase().trim();
// 	command[i] = command[i][0].toUpperCase() + command[i].slice(1);
// }
const newCommand = [];
command.forEach(ich => {
    let one = ich.toLowerCase().trim();
    newCommand.push(one[0].toUpperCase() + one.slice(1))
})

const data = {
    cash: [3, 8, 3],
    react: ['JSX', 'components', 'props', 'state', 'hooks'],
    add: ['styled-components', 'firebase']
};

// function calcCash(own) {
// 	own = own || 0;
// 	var everyCash = Array.prototype.slice.call(arguments);
// 	console.log(everyCash)
// 	console.log(arguments)
// 	var total = own;
// 	for (var i = 0; i < everyCash[1].length; i++) {
// 		total += +everyCash[1][i];
// 	}
// 	return total;
// }

const calcCash = (own, {cash}) => {
    own = own || 0;
    let total = own;
    cash.forEach(ich => {
        total += ich
    })
    return total
}

// var lesson = calcCash(null, data.cash);
const lesson = calcCash(null, data)

// function makeBusiness(director, teacher, allModule, gang, course) {
// 	teacher = teacher || 'Максим';
// 	var sumTech = data.react.concat(data.add, 'и другие');
// 	console.log('Стартуем новый курс: "' + course + '". Владелец: ' + director + ', преподаватель: ' + teacher + '. Всего уроков: ' + allModule + '. \nКоманда Академии: ' +
// 		gang);
// 	console.log('Первое что изучим будет ' + data.react[0] + ". Он очень похож на HTML!");
// 	console.log('Технологии которые мы изучим: ');
// 	console.log.apply(null, sumTech);
// }

const makeBusiness = (director, teacher, allModule, gang, course) => {
    teacher = teacher || 'Максим';
    const sumTech = data.react.concat(data.add, 'и другие');
    console.log(`Стартуем новый курс: "${course}". Владелец: ${director}, преподаватель:${teacher}. Всего уроков: ${allModule}. \nКоманда Академии: ${gang}`);
    console.log(`Первое что изучим будет ${data.react[0]}. Он очень похож на HTML!`);
    console.log(`Технологии которые мы изучим: `);
    console.log(...sumTech);
}

// makeBusiness.apply(null, ['Артем', null, lesson, newCommand, nameCourse]);
makeBusiness(...['Артем', null, lesson, newCommand, nameCourse]);
