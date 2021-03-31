const nums = [3,2,2,3];
const val = 3;

let removeelement = (nums1, val) => {
  let p = 0;
  for(let i = 0; i < nums1.length; i++){

    if(nums1[i]!= val){
      nums1[p] = nums1[i];
      p++;
    }
  }
  return nums1;
}
console.log(removeelement(nums, val));