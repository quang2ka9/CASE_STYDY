import {User} from "../model/User";

export class UserManager {
    private userList: User[] = [];

    constructor() {
        this.userList.push(new User("quangteo", "123", 0));
    }

    register(username: string, password: string) {
        this.userList.push(new User(username, password, 1));
    }

    login(username: string, password: string): number {
        let index = -1;
        this.userList.map((user) => {
            if (user.getUsername() === username && user.getPassword() === password) {
                index = user.getRole();
                return;
            }
        })
        return index;
    }
}