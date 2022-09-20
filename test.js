const mergeArrays = (arr1, arr2) => {
  console.log(arr1);
  console.log(arr2);

  arr1.forEach((item) => {
    arr2.forEach((newItem) => {
      if (item.slot == newItem.slot) {
        item.name = newItem.name;
      }
    });
  });

};

mergeArrays(
  [
    { name: 1, slot: 1 },
    { name: 2, slot: 2 },
    { name: 3, slot: 3 },
  ],
  [
    { name: "a", slot: 2 },
    { name: "b", slot: 3 },
  ]
);
