function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {

    return (yourLeft === friendsLeft && yourRight === friendsRight) ||
        (yourLeft === friendsRight && yourRight === friendsLeft)

}

// Best answer
function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    return yourLeft + yourRight === friendsLeft + friendsRight && (yourLeft === friendsLeft || yourLeft === friendsRight);
}

console.log(areEquallyStrong(10, 15, 15, 10));
