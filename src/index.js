/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let n = 0;
  let count = 0;
  let array = [];
  while (n<preferences.length) {
    let k = preferences[n];
    let y = preferences[k-1];
    let z = preferences[y-1];
    let x = z-1;
    if (preferences[x] == k && k != y && y != z && z != k && find(array, k) == -1 && find(array, y) == -1 && find(array, z) == -1 ) {
      count++;
      array.push (k, y, z)
    }
    n++;
  }
  console.log('count = ', count);
  return count;




  function find(arr, value) {
    if (arr.indexOf) {
      return arr.indexOf(value);
    }
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === value) return i;
    }
    return -1;
  }
  



};




    //if (preferences[preferences[preferences[preferences[i]-1]-1]-1] === preferences[i]) {
    ///  count++;
    //};

                       // 1'  2'  3'  Spichonees
// getLoveTrianglesCount([2,  3,  1]);
/** 1st Spichonee loves 2nd Spichonee.
    2nd Spichonee loves 3rd Spichonee.
    3rd Spichonee love 1st Spichonee.
    There is love triangle.             */

//                       1' 2' 3' 4' 5' 6' 7' 8' 9'
// etLoveTrianglesCount([9, 3, 7, 5, 3, 1, 2, 1, 8]);
//    assert.equal(count, 2);
/** 1' luv 9,
 * 9' luv 8
 * 8' luv 1 
 * n = 1
 * k = pref 1 = 9
 * y = pref 9 = 8
 * z = pref 8 = 1
 * x = z = 1
 * pref x = k ? pref 1 = 9?


*/