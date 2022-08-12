//adding loop to every element
function nFacRuntimeFunc(n) {
  for (i = 0; i < n; i++) {
    nFacRuntimeFunc(n - 1);
  }
}
/**
 * n * n-1 * n-2 * n-3 * .... 1
 * O(n!)
 */
