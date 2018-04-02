const users = [];

class Users {
  constructor() {
    this.users = [];
  }

  addUser(id, name, room) {
    let user = { id, name, room };
    this.users.push(user);
    return user;
  }

  getUser(id) {
    let user = this.users.filter(user => user.id === id);
    return user[0];
  }

  removeUser(id) {
    let removedUser = this.getUser(id);

    if (removedUser) {
      this.users = this.users.filter(user => user.id !== id);
      return removedUser;
    } else {
      return undefined;
    }
  }

  getUserList(room) {
    let users = this.users.filter(user => user.room === room);
    let namesArray = users.map(user => user.name);
    return namesArray;
  }
}

let test = new Users();

test.addUser(1, 'Trevor', '1');
test.addUser(2, 'Mikey', '1');
test.addUser(3, 'Charlie', '1');

console.log(test.getUser(1));

module.exports = { Users };