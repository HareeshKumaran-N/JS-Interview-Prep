import './styles.css';

interface Comment {
  id: string;
  author: string;
  text: string;
  replies: Comment[];
}

const SEED_COMMENTS: Comment[] = [
  {
    id: '1',
    author: 'Asha',
    text: 'This pattern is a classic recursion exercise.',
    replies: [
      {
        id: '1-1',
        author: 'Rahul',
        text: 'Agreed, the tricky part is updating deeply nested state immutably.',
        replies: [],
      },
    ],
  },
];

interface CommentNodeProps {
  comment: Comment;
}

function CommentNode({ comment }: CommentNodeProps) {
  return (
    <li className="comments__node">
      <div className="comments__body">
        <span className="comments__author">{comment.author}</span>
        <p className="comments__text">{comment.text}</p>
        <button className="comments__reply-btn" type="button">
          Reply
        </button>
      </div>
      {comment.replies.length > 0 && (
        <ul className="comments__replies">
          {comment.replies.map((reply) => (
            <CommentNode key={reply.id} comment={reply} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function NestedComments() {
  // TODO: comments state, seeded from SEED_COMMENTS
  // TODO: addComment(parentId | null, text) -> immutably insert into the right place in the tree
  // TODO: deleteComment(id) -> remove that node and its subtree

  return (
    <div className="comments">
      <form className="comments__form">
        <input className="comments__input" type="text" placeholder="Add a comment..." />
        <button className="comments__submit" type="submit">
          Post
        </button>
      </form>
      <ul className="comments__list">
        {SEED_COMMENTS.map((comment) => (
          <CommentNode key={comment.id} comment={comment} />
        ))}
      </ul>
    </div>
  );
}
