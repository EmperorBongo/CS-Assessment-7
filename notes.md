
$ node runtime.js
Results for the extraLargeArray
insert 744.6012 ms
append 1.8546 ms

$ node runtime.js
Results for the largeArray
insert 6.941 ms
append 443 μs


$ node runtime.js
Results for the mediumArray
insert 126.8 μs
append 98.6 μs


$ node runtime.js
Results for the smallArray
insert 33.9 μs
append 71.7 μs

$ node runtime.js
Results for the for tinyArray
insert 27.5 μs
append 63.9 μs

The execution times for doublerAppend and doublerInsert, things get interesting as the array sizes go up. doublerAppend stays kind of predictable it goes up as the array grows, doublerInsert goes speedsup drasticly, especially with the medium-sized array. Both get faster with smaller arrays, but insert goes a bit nuts with tinyArray compared to smallArray.

I think the extra work insert does for each array index with .unshift , messes with its scaling, making it slower than doublerAppend.

