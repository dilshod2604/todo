import { api as index } from "..";
const api = index.injectEndpoints({
  endpoints: (build) => ({
    postToDo: build.mutation<TODO.postToDoResponse, TODO.postToDoRequest>({
      query: (data) => ({
        url: "",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["todo"],
    }),
    getTodo: build.query<TODO.getTodoResponse, TODO.getTodoRequest>({
      query: () => ({
        url: "",
        method: "GET",
      }),
      providesTags: ["todo"],
    }),
    deleteTodo: build.mutation<TODO.DeleteToDoResponse, TODO.DeleteToDoRequest>(
      {
        query: (id) => ({
          url: `/${id}`,
          method: "DELETE",
        }),
        invalidatesTags:["todo"]
      }
    ),
    editTodo: build.mutation<TODO.EditToDoResponse, TODO.EditToDoRequest>({
      query: ({ id, update }) => ({
        url: `/${id}`,
        method: "PUT",
        body: {
          title: update,
          isChecked: false,
        },
      }),
      invalidatesTags: ["todo"],
    }),
  }),
});
export const {
  usePostToDoMutation,
  useGetTodoQuery,
  useDeleteTodoMutation,
  useEditTodoMutation,
} = api;
