/**
 * Created by hubery on 2017/6/2.
 */
import Comment from './Comment';

function showDescendant (item){
  if (!item){
    return ;
  }

  let commentListHtml = [];
  for (let i =0, len=item.length; i< len; i++){
    let comment = item[i];
    if(comment.subs){
      let descendantHtml = showDescendant(comment.subs);
      let commentHtml = <Comment item={comment} key={comment.id}>{descendantHtml}</Comment>;
      commentListHtml.push(commentHtml);
    }else {
      let commentHtml = <Comment item={comment} key={comment.id}></Comment>;
      commentListHtml.push(commentHtml);
    }
  }

  return commentListHtml;
}

const CommentList = ({items})=> {

  var comments = showDescendant(items);
  return (
    <div>{comments}</div>
  );
}

export default CommentList;
