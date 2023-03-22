import React from 'react';

const CommentList = ({ comments = [] }) => {
  if (!comments.length) {
    return <h3 className='m-3 font-semibold leading-6 text-gray-900 text-center'>No Comments Yet</h3>;
  }

  return (
    <>
      <h3 className="pt-5  text-center">
        Comments
      </h3>
      <div className="flex-row">
        {comments &&
          comments.map((comment) => (
            <div key={comment._id} className="justify-center container mt-4 rounded-xl">
              <div className="p-3 bg-danger text-light rounded-xl">
                <h5 className="card-header">
                  {comment.commentAuthor} commented{' '}
                  <span style={{ fontSize: '0.825rem' }}>
                    on {comment.createdAt}
                  </span>
                </h5>
                <p className="card-body">{comment.commentText}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default CommentList;
