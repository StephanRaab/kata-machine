export default function bs_list(haystack: number[], needle: number): boolean {
  // get the length and divide it by two
  // check if value at the middle === needle, is greater or smaller
  // update start and end indices
  //
  let lo = 0;
  let hi = haystack.length;

  do{
    const m = Math.floor(lo + (hi - lo)/2);
    const v = haystack[m];

    if (v === needle){
      return true;
    } else if (v > needle){
      hi = m;
    } else {
      lo = m +1;
    }

  }while(lo < hi);
  
  return false;
}
