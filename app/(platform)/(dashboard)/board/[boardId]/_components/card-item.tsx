"use client";

import { Card } from "@prisma/client";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";

interface CardItemProps {
  index: number;
  data: Card;
}

export const CardItem = ({ data, index }: CardItemProps) => {
  return (
    <Draggable draggableId={data.id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="truncate border-2 border-transparent hover:border-black py-2 px-3 text-sm bg-white rounded-md shadow-sm"
        >
          {data.title}
        </div>
      )}
    </Draggable>
  );
};
