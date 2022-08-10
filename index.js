//problem 1:

function radianToDegree(x) {
    return (180 / Math.PI) * x;
}
/*
let ans = radianToDegree(3);
console.log(ans);
*/

//problem 2:

function isJavaScriptFile(str) {
    let size_of_str = str.length;
    let cnt = 0;
    for (var i = 0; i < size_of_str; i++) {
        if (str[i] == '.') {
            cnt++;
        }
    }
    if (str[size_of_str - 1] != 's' || str[size_of_str - 2] != 'j' || str[size_of_str - 3] != '.' || cnt > 1) {
        return false;
    }
    return true;
}
/*
console.log(isJavaScriptFile("anikSarkar.js"));
*/

//problem 3:

function oilPrice(diesel, petrol, octane) {
    return (diesel * 114) + (petrol * 130) + (octane * 135);
}
/*
console.log(oilPrice(3, 2, 3));
*/

//problem 4:

function publicBusFare(x) {
    //remain after bus
    var micro = x % 50;
    //remain after micro
    var public = micro % 11;

    return public * 250;
}
/*
console.log(publicBusFare(9))
*/

//problem 5:

function isBestFriend(first, second) {
    if (first.name != second.friend || first.friend != second.name) {
        return false;
    }
    return true;
}
/*
console.log(isBestFriend({ name: "anik", friend: "dip" }, { name: "dip", friend: "ani" }));
*/