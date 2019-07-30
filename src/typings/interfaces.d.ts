// **********************************
// Common application interface
// **********************************

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
