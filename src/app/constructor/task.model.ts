export class Task {
    private name: string;
    private completed: boolean = false;
    constructor(name: string, status?: boolean) {
        this.name = name;
        this.completed = status || false;
    }
    complete() {
        this.completed = !this.completed;
    }
}
