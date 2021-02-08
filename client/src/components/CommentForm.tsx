import React from 'react';

export const CommentForm: React.FC = () => {
  return (
    <div>
      <form action="">
        <p>Введите ваш комментарий</p>
        <p>
          <textarea name="comment"></textarea>
        </p>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};
