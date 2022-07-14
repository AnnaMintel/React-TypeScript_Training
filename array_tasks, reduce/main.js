const taskManagerID_1 = "jkefjekfj" // v1()
const taskManagerID_2 = "13eqfjskefjekfj" // v1()
const taskManagerID_3 = "13fjskefjekfj" // v1()

const taskManagerLists = [
   {
      id: taskManagerID_1,
      title: "What to learn",
      filter: "all"
   },
   {
      id: taskManagerID_2,
      title: "What to read",
      filter: "all"
   },
   {
      id: taskManagerID_3,
      title: "What to read",
      filter: "all"
   }
]

const tasks = {
   [taskManagerID_1]: [
      { name: "HTML", isDone: true },
      { name: "CSS", isDone: true },
      { name: "React", isDone: false }
   ],
   [taskManagerLists[0].id]: [
      { name: "parrot", isDone: false },
      { name: "food", isDone: true },
      { name: "laptop", isDone: false }
   ],
   [taskManagerID_3]: []
}

// reduce - метод массива,  принимает 1-м параметром callback функцию c 2 аргументами: 
// 1 аргумент - результат вызова на предидущей итерации (аккумулятор), 
// 2 аргумент - следующий эдемент массива
// 2 параметр => начальное значение аккумулятора. 
// Если не указан 2-й параметр, то за начальное значение принимается 1й элемент массива
// acc/sum/another name - переменная, которая аккумулирует в себе результат предыдущего вызова функции
// 0 - передаем стартовое значяние нашей функции

const numbers = [23, 45, 35, 78, 56, 98];

const value = numbers.reduce((sum, el) => {
   sum = sum + el
   return sum
})
console.log(value);

// поиск наибольшего значения
const max = numbers.reduce((acc, el) => acc > el ? acc : el);
console.log(max);

//  
const students = [
   {
      name: "Alya",
      age: 20,
      scores: 30
   },
   {
      name: "Anna",
      age: 19,
      scores: 150
   },
   {
      name: "Alla",
      age: 22,
      scores: 70
   }
]


console.log(
   students.reduce((acc, el) => {
     return acc + el.scores
   }, 0)
)

// пушим в пустой массив
console.log(students.reduce((acc, el) => {
     if(el.scores >= 100){
         acc.push(el)
     }
     return acc;
   }, [])
)

// делаем копию массива
console.log(students.reduce((acc, el) => {
   acc.push(el);
     return {...el}
   }, []))