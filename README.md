# functional-goodies
output -->
[ 1, 2, 3 ]
[ 2, 3 ]
[ 3 ]
[]
[]
[ 3 ]
[ 2, 3 ]
[ 1, 2, 3 ]

JS -- 
var items = [1,2,3]
var k  = items.reduce((acc, item, currentIndex) => acc.concat([items.slice(items.length - currentIndex - 1)]), [[]]).reduce((acc, item, index, array) => [item].concat(acc).concat([item]))
--


