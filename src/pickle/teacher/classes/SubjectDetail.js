import React, { useRef, useState, useCallback } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import update from 'immutability-helper'
import './classesMain.css'
import './subjectDetail.css'
import Axios from 'axios'
import { NavLink } from 'react-router-dom'

const style = {
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'transparent',
  boxShadow: '2px 2px 15px 2px rgb(206, 205, 205)',
  float: 'right',
  width : '80%',
  cursor: 'move',
}
export const ItemTypes = {GOAL : 'goal'}

export const Goal = ({ id, text, index, moveGoal }) => {
  const ref = useRef(null)
  const [, drop] = useDrop({
    accept: ItemTypes.GOAL,
    hover(item, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      // Determine mouse position
      const clientOffset = monitor.getClientOffset()
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      // Time to actually perform the action
      moveGoal(dragIndex, hoverIndex)
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex
    },
  })
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.GOAL, id, index },
    collect: (monitor) => ({isDragging: monitor.isDragging(),}),
  })
  const opacity = isDragging ? 0 : 1
  drag(drop(ref))
  return (
    <>
        <div className="detailno_container"></div>
        <div style={style}>
          {index}
        </div>
        <div ref={ref} style={{ ...style, opacity }}>
           {text}
        </div>
    </>
  )
}



const SubjectDetail = ({ match}) => {
    const [lessonDetail, setLessonDetail] = useState(false)
    const [lessonTitle, setLessonTitle] = useState('타이틀 가져오기')
    const [lessonContent, setLessonContent] = useState('학습목표 내용 가져오기')
    const [lessonFile, setLessonFile] = useState('학습자료 가져오기')
    {
        const [goals, setGoals] = useState([
          {
            id: 1,
            text: 'Write a cool JS library',
          },
          {
            id: 2,
            text: 'Make it generic enough',
          },
          {
            id: 3,
            text: 'Write README',
          },
          {
            id: 4,
            text: 'Create some examples',
          },
          {
            id: 5,
            text:
              'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
          },
          {
            id: 6,
            text: '???',
          },
          {
            id: 7,
            text: 'PROFIT',
          },
        ])
        const moveGoal = useCallback(
          (dragIndex, hoverIndex) => {
            const dragGoal = goals[dragIndex]
            setGoals(
              update(goals, {
                $splice: [
                  [dragIndex, 1],
                  [hoverIndex, 0, dragGoal],
                ],
              }),
            )
          },
          [goals],
        )
        const handleInsertLesson = () =>{
            setLessonDetail(!lessonDetail)
            setLessonTitle(document.getElementById('lesson_title_input').value)
            setLessonContent(document.getElementById('lesson_content_input').value)
            //리듀서, thunk 코딩해서 자바로 넘겨주기
        }
        
        const renderGoal = (goal, index) => {
          return (
            <Goal
              key={goal.id}
              index={index}
              id={goal.id}
              text={goal.text}
              moveGoal={moveGoal}
            />
          )
        }
        return (
          <>
          <div className="classes_wrapper">
              {lessonDetail === true &&
                  <div className="classes_container">
                  <div className="detail_title detail_align"><h3>학습목표 추가</h3></div>
                  <input id="lesson_title_input" type="text" className="detail_title detail_align"placeholder="Title"></input>
                  <div className="detail_title detail_align detail_border"S>
                  <label for="file">Choose file to upload</label>
                  <input  type="file"
                    id="upload_file"
                    accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document">
                    </input>
                  </div>
                <textarea id="lesson_content_input"className="detail_content" placeholder="내용을 입력하세요"/>
                <button className="timetable_button detail_pointer" onClick={handleInsertLesson}>학습목표 추가</button>
              </div>
              }
              {lessonDetail === false &&
                <div className="classes_container ">
                    <div className="detail_title detail_align detail_border "><h3>lessonTitle</h3></div>
                    <div className="detail_title detail_border ">
                      
                      </div>
                    <div className="detail_content detail_border detail_margin detail_overflow">
                        <h3>lessonDetail</h3>
                    </div>
                    <div>
                        <img className="detail_icon detail_pointer" onClick={()=>{setLessonDetail(!lessonDetail)}} src="https://www.kindpng.com/picc/b/112/1121065.png"/>
                    </div>
                    <div>
                       <NavLink to={`${match.url}/class`}>
                       <button style={{width :'70%', float:"right", marginTop:"1.5rem" }} className="timetable_button detail_pointer">목록으로</button>
                       </NavLink>
                    </div>
                 </div>
              }
              <div className="classes_container">
                  <div className="detail_list">{goals.map((goal, i) => renderGoal(goal, i))}</div>
                  
              </div>
          </div>
          </>
        )
      }
    
};

export default SubjectDetail;