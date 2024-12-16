arr1 = [] //create empty array
arr1.push("Milk", "Bread", "Apples") //add items to empty array
console.log(arr1)

arr1.splice(1,1, "Banana", "Eggs") //instead of bread replace with two things
console.log(arr1)

myremove = arr1.pop() //remove last item and print
console.log(myremove) //you can use pop also

console.log(arr1.sort()) //array sorted in alphabetical order

console.log(arr1.indexOf("Milk")) //index of Milk

arr1.splice(arr1.indexOf('Bananas') + 1, 0, 'Carrots', 'Lettuce')
console.log(arr1)

juice = ['cola', 'sprite', 'fruit-juice', 'coffee']
console.log(juice)
console.log(juice.pop()) 

join = arr1.concat(juice, juice)
console.log(join)

removeitem = join.pop()
console.log(join.indexOf(removeitem))

console.log(join)