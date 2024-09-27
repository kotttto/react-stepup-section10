// type TodoType = {
//   userId: number;
//   title: string;
//   completed?: boolean; //? not needed
// };

import { FC } from "react";
import { TodoType } from "./types/todo";

export const Todo: FC<Omit<TodoType, "id">> = (
  //   props: Pick<TodoType, "userId" | "title" | "completed">
  //   props: Omit<TodoType, "id">
  props
) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark} ${title}(ユーザー：${userId})`}</p>;
};
