
// bubble sort - сортировка пузырьком

// самое большое число делаем последним, каждый последующий цикл будет упорядочивать 
// предпоследнее, предпредпоследнее и так далее
const array = [34, 0, 45, 778, 3, 94, 1, 9, 67];
for (let i = 0; i < array.length; i++) {
   if (array[i] > array[i + 1]) {
      let temp = array[i + 1]
      array[i + 1] = array[i]
      array[i] = temp
   }
}
console.log(array)

// встанут на место сразу все цифры за 1 проход по возрастанию
for (let j = 0; j < array.length - 1; j++) {
   for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
         let temp = array[i + 1]
         array[i + 1] = array[i]
         array[i] = temp
      }
   }
}
console.log(array)

// модифицируем внутренний цикл, чтобы каждый раз в сравнение не брались уже отсортированные цифры
for (let j = 0; j < array.length - 1; j++) {
   for (let i = 0; i < array.length - 1 - j; i++) {
      if (array[i] > array[i + 1]) {
         let temp = array[i + 1]
         array[i + 1] = array[i]
         array[i] = temp
      }
   }
}
console.log(array)

// используем деструктурирующее присваивание, то есть что мы сделали?
// один массив равен другому, в котором значения переставлены местами
for (let j = 0; j < array.length - 1; j++) {
   for (let i = 0; i < array.length - 1 - j; i++) {
      if (array[i] > array[i + 1]) {
         // let temp = array[i + 1]
         // array[i + 1] = array[i]
         // array[i] = temp
         [array[i + 1], array[i]] = [array[i], array[i + 1]]
      }
   }
}
console.log(array)