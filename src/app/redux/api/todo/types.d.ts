namespace TODO {
  interface ITodo {
    title: string;
    isChecked: boolean;
  }
  interface IGetTodo {
    _id: string;
    title: string;
    isChecked: boolean;
  }

  type postToDoResponse = void;
  type postToDoRequest = ITodo;

  type getTodoResponse = IGetTodo[];
  type getTodoRequest = void;

  type DeleteToDoResponse = void;
  type DeleteToDoRequest = string;

  type EditToDoResponse = void;
  type EditToDoRequest = { id: string; update: string };
}
