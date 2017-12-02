/* The queryStringToObject function takes in a query string parameter.
 * For example, "?query=hello&orderAt=-createdAt"
 * Should return { query: "hello", orderAt: "-createdAt" }
 */ 

import queryStringToObject from '../../client/utils/queryStringToObject'

/* To pass the prompt: 
 * - Write these tests, implement the function incrementally and pass the tests one by one.
 * - Implement the function queryStringToObject in `client/utils/queryStringToObject`
 *
 * Test for these cases:
 * 1. typeof queryStringToObject should be function (Already written for you) DONE
 * 2. `a=1&b=2` should return { a: "1", b: "2" }  DONE
 * 3. `?a=1&b=2` should return { a: "1", b: "2" }
 * 4. `=1&xc2&b=1` should return { b: "1" }
 * 5. `======` should return { }
 * 6. `?&&&&&&&` should return { }
 */

test('typeof queryStringToObject should be function', () => {
  expect(typeof queryStringToObject).toEqual('function')
});

test('a=1&b=2 should return { a: "1", b: "2" }', () => {
    expect(queryStringToObject('a=1&b=2')).toMatchObject({a:'1', b:'2'});
  });

test('?a=1&b=2 should return { a: "1", b: "2" }', () => {
    expect(queryStringToObject('?a=1&b=2')).toMatchObject({a:'1', b:'2'});
  });

test('=1&xc2&b=1 should return { b: "1" }', () => {
    expect(queryStringToObject('=1&xc2&b=1')).toMatchObject({b:'1'});
  });

test('====== should return { }', () => {
    expect(queryStringToObject('======')).toMatchObject({});
  });

test('?&&&&&&& should return { }', () => {
    expect(queryStringToObject('?&&&&&&&')).toMatchObject({});
  });


