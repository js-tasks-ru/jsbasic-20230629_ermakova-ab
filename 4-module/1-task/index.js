function makeFriendsList(friends) {
  let names = friends.map(item => `${item.firstName} ${item.lastName}`);
  let ul = document.createElement('ul');

for (let name of names) {
  let li = document.createElement('li');
  li.innerHTML = name;
  ul.appendChild(li);
}
return(ul)

}
