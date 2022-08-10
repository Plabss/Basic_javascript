//problem 1:

function radianToDegree(x) {
    if (typeof x != 'number') {
        return "Please input numeric value!"
    }
    return (180 / Math.PI) * x;
}
/*
let ans = radianToDegree(3);
console.log(ans);
*/

//problem 2:

function isJavaScriptFile(str) {
    if (typeof str != 'string') {
        return "Please input a string!"
    }
    let size_of_str = str.length;
    let cnt = 0;
    for (let i = 0; i < size_of_str; i++) {
        if (str[i] == '.') {
            cnt++;
        }
    }
    if (str[size_of_str - 1] != 's' || str[size_of_str - 2] != 'j' || str[size_of_str - 3] != '.' || cnt > 1) {
        return false;
    }
    return true;
}

console.log(isJavaScriptFile("index.js"));


//problem 3:

function oilPrice(diesel, petrol, octane) {
    if (typeof diesel != 'number' || typeof petrol != 'number' || typeof octane != 'number') {
        return "Please input numeric value!"
    }
    return (diesel * 114) + (petrol * 130) + (octane * 135);
}
/*
console.log(oilPrice(3, 2, 3));
*/

//problem 4:

function publicBusFare(x) {
    if (typeof x != 'number') {
        return "Please input numeric value!"
    }
    //remain after bus
    let micro = x % 50;
    //remain after micro
    let public = micro % 11;

    return public * 250;
}
/*
console.log(publicBusFare(45))
*/

//problem 5:

function isBestFriend(first, second) {
    if (typeof first != 'object' || typeof second != 'object') {
        return "Please input object!"
    }
    if (first.name != second.friend || first.friend != second.name) {
        return false;
    }
    return true;
}
/*
console.log(isBestFriend({ name: "anik", friend: "dip" }, { name: "dip", friend: "anik" }));
*/