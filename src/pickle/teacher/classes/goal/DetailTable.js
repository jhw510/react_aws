import React, {useRef} from 'react';
import { useDrag, useDrop,DragSource } from 'react-dnd'

export const subjectTypes = {SUBJECT : 'tAtattendance/SUBJECT'}

export const Subject = ({id, detail, index, moveSubject}) =>{
    const ref = useRef(null)
    const [, drop] = useDrop({
         accept: subjectTypes.SUBJECT,
         hover(item, monitor) {
           if (!ref.current) {
            return
            }
      const dragIndex = item.index
      const hoverIndex = index
      if (dragIndex === hoverIndex) {
        return
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      const clientOffset = monitor.getClientOffset()
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      moveSubject(dragIndex, hoverIndex)
      item.index = hoverIndex
    },
})
const [{isDragging}, drag] = useDrag({
    item : { type: subjectTypes.SUBJECT, id, index},
    collect: (monitor) => ({isDragging: monitor.isDragging(),}),
})
const opacity = isDragging ? 0:1
drag(drop(ref))
}
// const subjectSource = {
//     beginDrag(props) {
//         const subjectName = {id:props.id}
//         return subjectName
//     },

//     endDrag(props, monitor, component) {
//         if(!monitor.didDrop)
//     }
// }

const DetailTable = () => {
    return (
        <div classNmae="Subjectbox_detail">
            {detail}
        </div>
    );
};

export default DetailTable;
