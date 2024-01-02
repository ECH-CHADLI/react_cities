// CommentsCard.js
import React from 'react';

const CommentsCard = (props) => {
  return (
    <div className="flex justify-center items-center ">
    <div className="bg-white p-4 md:p-5 lg:p-12 shadow-md rounded-md  md:w-7/8 lg:w-6/7 xl:w-5/6 mb-4 mt-4">
      <h2 className="text-lg font-semibold mb-2">Captures de commentaires</h2>
      {/* Ajoutez ici vos captures d'écran de commentaires */}
      <img src="commentaire1.png" alt="Capture d'écran 1" className="mb-2 w-full" />
      <img src="commentaire2.png" alt="Capture d'écran 2" className="mb-2 w-full" />
      {/* Ajoutez autant de captures d'écran que nécessaire */}
      {props.children}
    </div>
  </div>
  );
}

export default CommentsCard;
