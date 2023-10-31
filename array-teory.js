const names = ["Даня", "Ваня", "Андрей", "Саня"]
const nums = [5, 1, 2, 3, 4, 5, 6]

names.push("Anuya") //ДОБАВЛЯТЕ ЭЛЕМЕНТ В КОНЕЦ МАССИВА

console.log(names.length) // УЗНАЕМ ЗНАЧЕНИЕ ДЛИННЫЕ МАССИВА
console.log(names)

names.unshift("Эльдар") // ДОБАВЛЯЕТ ЭЛЕМЕНТ В НАЧАЛА МАССИВА, ОЧЕНЬ ПЛОХ ПОТОМУ ЧТО ВСЕ ЭЛЕМЕНТЫ МЕНЯЮТ СВОЙ ИНДЕКС
console.log(names)

const firstName = names.shift() //Вырезает элемент и возвращает его при этом массив у нас меняется 
console.log(names)

names.pop()
console.log(names)


// const ageNums = nums.reverse() //ПЕРЕВОРАЧИВАЕТ МАССИВ ПРИ ЭТОМ ОСНОВНОЙ МАССИМВ МУТИРУЕТ использовать плохо
// console.log("revers/master:", nums)
// console.log("revers/test", ageNums)

const reversedNums = nums.toReversed() //ПЕРЕВОРАЧИВАЕТ МАССИВ ПРИ ЭТОМ ОСНОВНОЙ МАССИМВ НЕЕЕЕЕ МУТИРУЕТ
console.log("Revers/master:", nums)
console.log("Revers/test", reversedNums)

// const sortedNums = nums.sort() //Сортирует массив при этом основной мутирует
// console.log("revers/master:", nums)
// console.log("revers/test", sortedNums)

const sortedNums = nums.toSorted() //Сортирует массив при этом основной НЕ мутирует 
console.log("Sort/master:", nums)
console.log("Sort/test", sortedNums)


// const splicedNums = nums.splice(0, 4) // ВЫРЕЗАЕТ ЭЛЕМЕНТ С Тактим индексом и колличесвтом и МУТИРУЕТ ОСНОВНОЙ МАССИВ
// console.log("Splice/master:", nums)
// console.log("Splice/test", splicedNums)

const splicedNums = nums.toSpliced(0, 2) // ВЫРЕЗАЕТ ЭЛЕМЕНТ С Тактим индексом и колличесвтом и  НЕ МУТИРУЕТ ОСНОВНОЙ МАССИВ
console.log("Splice/master:", nums)
console.log("Splice/test", splicedNums)

const smartestStydent = "Андрей"
const index = names.indexOf("Андрей") // Возвращает индекс по значению 
console.log(index)
names[index] = "Андрей АЛКАШ"
console.log(names)
const newNames = names.with(1, "Ваня руинер")// Возвразает новый массив с изменненыым значением ОСНОВНОЙ МАССИВ НЕ МУТИРУЕТ 
console.log(newNames)


const capitalNames = names.map(function (name, index) {
	//МЕТОД MAP : работает с функцией его работа похожа на работу цикла for он проходится по каждому элементу и изменяет его очень ОЧЕНЬ часто используется
	// return name+'!'
	// return name.toLocaleUpperCase()
	// if (index === 1) {
	// 	return "kola"
	// }
	// return name
})
console.log(capitalNames)

console.log(names.includes('Даня!!'))// МЕТОД INCLUDES ПРОВЕРЯЕТ НА НАЛИЧИЕ СТРОКУ ВОЗВРАЩАЕТ BOOLEAN ТИП ПЕРЕМЕННОЙ

const companyStaff = [
	{ name: "Oleg", budget: 7600 },
	{ name: "Alla", budget: 400 },
	{ name: "Polina", budget: 3000 },
	{ name: "Maksim", budget: 777 }]

// findPerson = companyStaff.map(function (person) {
// 	if (person.budget===3000) {
// 		return person
// 	}
// 	return person
// })
// console.log(findPerson)

// let findPerson

// for (const person of companyStaff) {
// 	if (person.budget === 3000) {
// 		findPerson = person
// 	}
// }

// console.log(findPerson)

const findPerson = companyStaff.find(function (person) { //РЕАЛИЗАЦИЯ МЕТОДА FIND ПОМОГАЕТ НАЙТИ НЕОБХОДИМОЕ ЗНАЧЕНИЕ ПРИ РАБОТЕ С ОБЪЕКТАМИ
	return person.budget === 777
	// if (person.budget===777) {
	// 	return true
	// }
})
console.log(findPerson)

// const finded = companyStaff.find((p) => p.budget === 3000)// СТРЕЛОЧНАЯ ЗАПИСЬ МЕТОДА FIND

// console.log(finded)


const finded = companyStaff.findIndex(function (person) { //РЕАЛИЗАЦИЯ МЕТОДА FINDedindex ПОМОГАЕТ НАЙТИ НЕОБХОДИМОЕ ЗНАЧЕНИЕ ПРИ РАБОТЕ С ОБЪЕКТАМИ
	return person.budget === 3000
	// if (person.budget===777) {
	// 	return true
	// }
})
console.log(companyStaff[finded])
console.log(companyStaff.with(finded, { name: "vasiya", budget: 10000 }))

const filtered = companyStaff.filter(function (p) {
	//Метод FILTER возвращает объекск который отфильтровали очень часто используется на практике 
	return p.budget > 1000
})
console.log(filtered)


let countBudget = 0
filtered.forEach(function (person) { // реализация метода forEach пробега по массиву 
	countBudget += person.budget
})

console.log(countBudget)

const byBudget = (p) => p.budget > 1000
const pickBudget = (p) => p.budget

const sumBudget = companyStaff
	.filter(byBudget)
	.map(pickBudget)
	.reduce((acc, p) => acc + p, 0)

const string = "Аня не моет попу"
const reverse = string.split("").toReversed().join('-').split("").filter((c) => c != "-").join('')
//Метод SPLIT МЕТОД ДЛЯ РАБОТЫ СО СТРОКАМИ он делит строку на предложенный сепаратор и превращает строку в объект 
//МЕтод JOIN МЕТОД ДЛЯ РАБОТЫ СО МАССИВОМ он делает обратную опацию метода SPLIT только наоборот 
console.log(reverse)