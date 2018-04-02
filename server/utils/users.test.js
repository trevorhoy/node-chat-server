const expect = require('expect');

const { Users } = require('./users');


describe('Users', () => {
  let users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Test Room'
    },
    {
      id: '2',
      name: 'Jen',
      room: 'Test Room2'
    },
    {
      id: '3',
      name: 'Julie',
      room: 'Test Room'
    }]
  });


  it('should add new user', () => {
    let users = new Users();
    let user = {
      id: 123,
      name: 'Trevor',
      room: 'The Office Fans'
    };

    let result = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should return names for Test Room', () => {
    let userList = users.getUserList('Test Room');
    expect(userList).toEqual([users.users[0].name, users.users[2].name]);
  });

  it('should return names for Test Room', () => {
    let userList = users.getUserList('Test Room2');
    expect(userList).toEqual([users.users[1].name]);
  });

  it('should return user using their id', () => {
    let user = users.getUser('1');
    expect(user).toEqual(users.users[0]);
  });

  it('should not find the user by wrong id', () => {
    let user = users.getUser('100');
    expect(user).toEqual(undefined);
  })

  it('should remove user from users array', () => {
    let userToRemove = users.users[2];
    let user = users.removeUser('3');
    expect(user).toEqual(userToRemove);
  });
});