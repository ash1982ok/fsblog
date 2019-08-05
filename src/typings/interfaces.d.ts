// **********************************
// Common application interface
// **********************************
declare module 'redux-form';
declare module 'uuid';

interface IBlogItem {
    id: string,
    title: string,
    datePosted: number,
    category?: string,
    tags?: string,
    content: string,
    deleteBlog?: (event: React.MouseEvent<HTMLButtonElement>) => void
}