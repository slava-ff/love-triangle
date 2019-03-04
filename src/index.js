/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let n = 0;
  let count = 0;
  console.log('count=', count);
  // аррэй[4,q,w,8,r,t,1,u,i,o,p]
  // 1) аррэй[i] = 4
  // 2) аррэй[4-1]=8
  // 3) аррэй[8-1]=1
  // 4) если аррэй[1-1]=4
  // 5) то любовный треугольник есть
  while (n<preferences.length) {
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
                    
    let k = preferences[n];   // k == 2 на месте n == 1'             
    let y = preferences[k-1]; // y == 3 на месте k == 2'           
    let z = preferences[y-1]; // z == 1 на месте y == 3'
    let x = z-1;
                    console.log('n=', n);
                    console.log('preferences[n]=', preferences[n]);
                    console.log('k=', k);
                    console.log('y=', y);
                    console.log('z=', z);
                    console.log('x=', x);
                    console.log('preferences[x]', preferences[x]);
                    console.log('k=', k);
    if (preferences[x] == k) {
      count++;
      console.log('count=', count);
    }
    n++;
  }
  return count;
};




  // 1) аррэй[i] = 4
  // 2) аррэй[аррэй[i]-1]=8
  // 3) аррэй[аррэй[аррэй[i]-1]-1]=1
  // 4) если preferences[preferences[preferences[preferences[i]-1]-1]-1]=preferences[i]
  // 5) то любовный треугольник есть
