/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.task = []; // 'this' refers to the object being created
  }

  add(str){
    this.task.push(str);
  }
  getAll() {
    return this.task;
  }
  remove(index){
    this.task.splice(index,1); //this should show as invalid when index is out of bounds
  }
  update(index,str){
    if(index >= 0 && index < this.task.length)
      this.task[index]=str;
  }
  get(index){
    if(index >= 0 && index < this.task.length)
      return this.task[index];
    else 
      return null;
    console.log(this.task[index]);
  }
  clear(){
    this.task = [];
  }

}

const obj = new Todo();
obj.add('Task 1');
obj.add('Task 2');
obj.add('Task 3');

obj.get(0);
// obj.get(1);
// obj.get(2);

module.exports = Todo;
