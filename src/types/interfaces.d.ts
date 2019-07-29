// import { RouteComponentProps } from "react-router";

interface IBlogItem {
    id: string,
    title: string,
    datePosted: number,
    category?: string,
    tags?: string,
    content: string,
    deleteBlog?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

// interface IBlogsProps extends RouteComponentProps <{blogs: IBlogItem[]}>{
//     blogs?: IBlogItem [];
// }

// interface IBlogItemState {
//     showingAllBlogs?: boolean;
//     addingBlog?: boolean;
// }

// interface ITodoFooterProps {
//     completedCount: number;
//     onClearCompleted: any;
//     nowShowing: string;
//     count: number;
// }

// interface ITodoModel {
//     key: any;
//     todos: Array<ITodo>;
//     onChanges: Array<any>;
//     subscribe(onChange);
//     inform();
//     addTodo(title: string);
//     toggleAll(checked);
//     toggle(todoToToggle);
//     destroy(todo);
//     save(todoToSave, text);
//     clearCompleted();
// }

// interface IAppProps {
//     model: ITodoModel;
// }

// interface IAppState {
//     editing?: string;
//     nowShowing?: string
// }