import { Card } from 'primereact/card';
import { IComment } from '../store/types/car';
import { useTypedSelector } from '../hooks/useTypedSelector';

export const Comments = () => {
  const carId = window.location.href.split('/').pop()!;

  const commentsFromState: IComment[] = useTypedSelector((state) => {
    return state.cars.cars.filter((car) => car._id === carId)[0].comments;
  });

  const comments = commentsFromState.map((comment: IComment) => {
    return (
      <Card
        title={`${comment.userFullName}`}
        style={{ width: '25rem', marginBottom: '0.2em' }}
      >
        <p
          className="p-m-0"
          style={{ lineHeight: '0.5' }}
        >{`${comment.commentText}`}</p>
      </Card>
    );
  });

  const emptyCommentsTitle = <h6>Комментариев пока нет</h6>;

  return (
    <div className="commentsBlock">
      {commentsFromState.length > 0 ? comments : emptyCommentsTitle}
    </div>
  );
};
