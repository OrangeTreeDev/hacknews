/**
 * Created by hubery on 2017/6/2.
 */
import Comment from './Comment';

function showDescendant (item){

  if ( item instanceof Array){
    return item.map( (elem)=>{
      return showDescendant(elem);
    } );
  }else {
    return <Comment item={item}></Comment>
  }
}

const CommentList = ({items})=> {
  var comments = showDescendant(items);
  return ( {comments} );
}

export default CommentList;
