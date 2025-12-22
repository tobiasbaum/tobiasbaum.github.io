function stdCmp(a, b) {
    if (a < b) {
		return -1;
	} else if (a > b) {
		return 1;
	} else {
		return 0;
	}
}

QUnit.test( "double out empty", function( assert ) {
  assert.deepEqual( doubleOutSort([], stdCmp), [], "Passed!" );
});
QUnit.test( "double out one item", function( assert ) {
  assert.deepEqual( doubleOutSort([1], stdCmp), [1], "Passed!" );
});
QUnit.test( "double out two items", function( assert ) {
  assert.deepEqual( doubleOutSort([1, 2], stdCmp), [1, 2], "Passed!" );
});
QUnit.test( "double out three items", function( assert ) {
  assert.deepEqual( doubleOutSort([1, 2, 3], stdCmp), [1, 2, 3], "Passed!" );
});
QUnit.test( "double out four items", function( assert ) {
  assert.deepEqual( doubleOutSort([1, 2, 3, 4], stdCmp), [1, 2, 3, 4], "Passed!" );
});
QUnit.test( "double out four items is uses direct comparison", function( assert ) {
  knownComparisons = {}
  knownComparisons["1\n4"] = -1;
  knownComparisons["2\n3"] = -1;
  knownComparisons["1\n2"] = -1;
  knownComparisons["3\n4"] = -1;
  assert.deepEqual( doubleOutSort([4, 3, 2, 1], cmp), [1, 2, 3, 4], "Passed!" );
});
QUnit.test( "double out five items", function( assert ) {
  assert.deepEqual( doubleOutSort([1, 2, 3, 4, 5], stdCmp), [1, 2, 3, 4, 5], "Passed!" );
  assert.deepEqual( doubleOutSort([2, 1, 3, 4, 5], stdCmp), [1, 2, 3, 4, 5], "Passed!" );
  assert.deepEqual( doubleOutSort([2, 3, 1, 4, 5], stdCmp), [1, 2, 3, 4, 5], "Passed!" );
  assert.deepEqual( doubleOutSort([2, 3, 4, 1, 5], stdCmp), [1, 2, 3, 4, 5], "Passed!" );
  assert.deepEqual( doubleOutSort([2, 3, 4, 5, 1], stdCmp), [1, 2, 3, 4, 5], "Passed!" );
});
QUnit.test( "double out eight items", function( assert ) {
  assert.deepEqual( doubleOutSort([1, 2, 3, 4, 5, 6, 7, 8], stdCmp), [1, 2, 3, 4, 5, 6, 8, 7], "Passed!" );
});
QUnit.test( "double out eight items with Buchholz", function( assert ) {
  assert.deepEqual( doubleOutSort([8, 7, 6, 5, 4, 3, 2, 1], stdCmp), [1, 2, 3, 4, 5, 6, 8, 7], "Passed!" );
});
QUnit.test( "double out eight items with Buchholz 2", function( assert ) {
  assert.deepEqual( doubleOutSort([4, 8, 7, 3, 2, 1, 6, 5], stdCmp), [1, 2, 3, 4, 7, 6, 5, 8], "Passed!" );
});
QUnit.test( "double out nine items", function( assert ) {
  assert.deepEqual( doubleOutSort([1, 2, 3, 4, 5, 6, 7, 8, 9], stdCmp), [1, 2, 3, 4, 5, 7, 6, 9, 8], "Passed!" );
});


QUnit.test( "quickselect 1-element array", function( assert ) {
  assert.deepEqual( quickselect([1], stdCmp, 1), [1], "Passed!" );
  assert.deepEqual( quickselect([1], stdCmp, 2), [1], "Passed!" );
});
QUnit.test( "quickselect 2-element array", function( assert ) {
  assert.deepEqual( quickselect([1, 2], stdCmp, 1), [1, 2], "Passed!" );
  assert.deepEqual( quickselect([2, 1], stdCmp, 1), [1, 2], "Passed!" );
  assert.deepEqual( quickselect([1, 2], stdCmp, 2), [1, 2], "Passed!" );
  assert.deepEqual( quickselect([2, 1], stdCmp, 2), [2, 1], "Passed!" );
});
QUnit.test( "quickselect 3-element array", function( assert ) {
  assert.deepEqual( quickselect([1, 2, 3], stdCmp, 1), [1, 2, 3], "Passed!" );
  assert.deepEqual( quickselect([3, 2, 1], stdCmp, 1), [1, 2, 3], "Passed!" );
  assert.deepEqual( quickselect([2, 3, 1], stdCmp, 1), [1, 2, 3], "Passed!" );
  assert.deepEqual( quickselect([1, 2, 3], stdCmp, 2), [1, 2, 3], "Passed!" );
  assert.deepEqual( quickselect([3, 2, 1], stdCmp, 2), [1, 2, 3], "Passed!" );
  assert.deepEqual( quickselect([2, 3, 1], stdCmp, 2), [2, 1, 3], "Passed!" );
});
QUnit.test( "quickselect longer array", function( assert ) {
  assert.deepEqual( quickselect([1, 2, 3, 4, 5, 6], stdCmp, 3), [1, 2, 3, 4, 6, 5], "Passed!" );
  assert.deepEqual( quickselect([1, 2, 3, 4, 5, 6, 7, 8, 9], stdCmp, 1), [1, 2, 3, 4, 5, 7, 8, 9, 6], "Passed!" );
  assert.deepEqual( quickselect([9, 8, 7, 6, 5, 4, 3, 2, 1], stdCmp, 1), [1, 2, 3, 4, 5, 6, 7, 8, 9], "Passed!" );
  assert.deepEqual( quickselect([1, 2, 3, 4, 5, 6, 7, 8, 9], stdCmp, 3), [1, 2, 3, 4, 5, 7, 8, 9, 6], "Passed!" );
  assert.deepEqual( quickselect([9, 8, 7, 6, 5, 4, 3, 2, 1], stdCmp, 3), [1, 2, 3, 4, 5, 6, 7, 8, 9], "Passed!" );
  assert.deepEqual( quickselect([3, 3, 3, 2, 2, 2, 1, 1, 1], stdCmp, 3), [1, 1, 1, 2, 2, 2, 3, 3, 3], "Passed!" );
});
