/*!
 * CanJS - 2.3.27
 * http://canjs.com/
 * Copyright (c) 2016 Bitovi
 * Thu, 15 Sep 2016 21:14:18 GMT
 * Licensed MIT
 */

/*can@2.3.27#util/array/diff*/
var slice = [].slice;
module.exports = function (oldList, newList) {
    var oldIndex = 0, newIndex = 0, oldLength = oldList.length, newLength = newList.length, patches = [];
    while (oldIndex < oldLength && newIndex < newLength) {
        var oldItem = oldList[oldIndex], newItem = newList[newIndex];
        if (oldItem === newItem) {
            oldIndex++;
            newIndex++;
            continue;
        }
        if (newIndex + 1 < newLength && newList[newIndex + 1] === oldItem) {
            patches.push({
                index: newIndex,
                deleteCount: 0,
                insert: [newList[newIndex]]
            });
            oldIndex++;
            newIndex += 2;
            continue;
        } else if (oldIndex + 1 < oldLength && oldList[oldIndex + 1] === newItem) {
            patches.push({
                index: newIndex,
                deleteCount: 1,
                insert: []
            });
            oldIndex += 2;
            newIndex++;
            continue;
        } else {
            patches.push({
                index: newIndex,
                deleteCount: oldLength - oldIndex,
                insert: slice.call(newList, newIndex)
            });
            return patches;
        }
    }
    if (newIndex === newLength && oldIndex === oldLength) {
        return patches;
    }
    patches.push({
        index: newIndex,
        deleteCount: oldLength - oldIndex,
        insert: slice.call(newList, newIndex)
    });
    return patches;
};