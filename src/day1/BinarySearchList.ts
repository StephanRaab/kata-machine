export default function bs_list(haystack: number[], needle: number): boolean {
  // get the length and divide it by two
  // check if value at the middle === needle, is greater or smaller
  // update start and end indices
  //

  function search (arr: number[], lo: number, hi: number, needle: number) {
    let middle = Math.floor(lo + (hi - lo)/2)
  
    do {
     if (arr[middle] === needle){
      return true;
    } else if (needle > arr[middle]){
      lo = middle +1;
      search(arr, lo, hi, needle);
    } else {
      hi = middle;
      search(arr, lo, hi, needle);
    }
    }
    while (lo < hi);

    return false;
  }
  
  search(haystack, 0, haystack.length, needle);
}
