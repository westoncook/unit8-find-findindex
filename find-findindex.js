function findUserByUsername(usersArray, user) {
  return usersArray.find((obj) => {
    return obj.username === user;
  })
}

function removeUser(arr,  user) {
  let removeIndex = arr.findIndex((obj) => {
    return obj.username === user;
  })
  console.log(removeIndex);
  if (removeIndex >= 0) return arr.splice(removeIndex, 1)[0];
}