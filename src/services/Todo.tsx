import { useGetUserByNameQuery } from "./usersAPI";
import { useGetPostByNameQuery } from "./postsAPI";
function Todo() {
  const {
    data: users,
    error: usersError,
    isLoading: usersLoading,
  } = useGetUserByNameQuery({});
  const {
    data: posts,
    error: postsError,
    isLoading: postsLoading,
  } = useGetPostByNameQuery({ id: 3 /*, name: "ali"  */ });

  return (
    <div>
      {users?.title}
      {posts?.body}
    </div>
  );
}

export default Todo;
