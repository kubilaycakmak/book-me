// // class Book {
// //   constructor(title, author, description, pages) {
// //     this.title = title;
// //     this.author = author;
// //     this.description = description;
// //     this.pages = pages;
// //     this.currentPage = 1;
// //     this.read = false;
// //   }

// //   readBook(page) {
// //     if (page < 1 || page > this.pages) {
// //       return 0;
// //     } else if (page >= 1 && page < this.pages) {
// //       this.currentPage = page;
// //       return 1;
// //     } else if (page === this.pages) {
// //       this.currentPage = page;
// //       this.read = true;
// //       return 1;
// //     }
// //   }
// // }

// // const bookOne = new Book("Book One", "Ibrahim S.", "Road Story", 400, 300);
// // const bookTwo = new Book("Book Two", "James S.", "Road Story", 400, 300);
// // const bookThree = new Book("Book Three", "Serkan S.", "Horror", 300, 200);
// // //
// // bookOne.readBook(350);
// // bookTwo.readBook(350);
// // bookThree.readBook(300);
// // //
// // const books = [bookOne, bookTwo, bookThree];

// // console.log(books);

// var arr1 = ["Teacher"];
// var arr2 = [
//   {
//     full_name: "asd",
//     role: ["TA", "Teacher"],
//   },
//   {
//     full_name: "asd1",
//     role: ["Teacher"],
//   },
//   {
//     full_name: "asd2",
//     role: ["TA"],
//   },
//   {
//     full_name: "asd3",
//     role: ["Co-op Manager"],
//   },
// ];

// let newArray = [];

// if (arr1.includes("ALL")) {
// } else {
//   arr2.forEach((item, index) => {
//     // console.log(item);
//     item.role.forEach((role, index) => {
//       if (arr1.includes(role)) {
//         // console.log(item);
//         newArray.push(item);
//       }
//     });
//   });
// }

// console.log(newArray);

// Array Addition I
// Have the function Array Addition I (arr) take the array of numbers stored in arr
//  and return the string true if any combination of numbers in the array (excluding the largest number)
// can be added up to equal the largest number in the array, otherwise return the string false. For example:
//  if arr contains [4, 6, 23, 10, 1, 3] the output should
// return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the same elements,
//  and may contain negative numbers.

function arrayAdditionI(arr) {
  var arrMax = Math.max.apply(Math, arr);
  var found = false;

  function recArrAdd(sub, arr) {
    console.log("sub", sub);
    console.log("arr", arr);

    if (found) return true;

    if (arr.length > 0) {
      var arrSum = sub.concat(arr[0]).reduce(function (prev, curr) {
        return prev + curr;
      });

      console.log("arrSum", arrSum);
      if (arrSum === arrMax) {
        if (arr[0] != arrMax) {
          found = true;
          return found;
        }
      }
      recArrAdd(sub.concat(arr[0]), arr.slice(1));
      recArrAdd(sub, arr.slice(1));
    }
    return found;
  }

  return recArrAdd([], arr);
}

// console.log(arrayAdditionI([2, 2, 4]));

// Examples
// Input: [5,7,16,1,2]
// Output: false
// Input: [3,5,-1,8,12]
// Output: true

function ArrayAdditionI(arr) {
  // find the largest number in array and remove it from array
  // const larg = arr.sort((a, b) => a - b).pop();
  const max = Math.max(...arr);
  const index = arr.indexOf(max);
  arr.splice(index, 1);

  // itirate array on every number and calculate the combination
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
    console.log("arr[i]", arr[i]);

    for (let j = 0; j < arr.length; j++) {
      console.log("in j --------");
      if (i !== j) {
        total += arr[j];
        console.log("add", arr[j]);
        console.log("total", total);

        if (total === max) {
          return true;
        }
      }
      console.log("===================");
    }

    for (let k = 0; k < arr.length; k++) {
      console.log("in k ---------");
      if (i !== k) {
        total -= arr[k];
        console.log("subs", arr[k]);
        console.log("total", total);

        if (total === max) {
          return true;
        }
      }
      console.log("===================");
    }
    total = 0;
  }
  console.log("total", total);

  return false;
}

// keep this function call here
console.log(ArrayAdditionI([4, 6, 23, 10, 1, 3]));
