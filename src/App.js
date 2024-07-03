import { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import Task from './Task';

const Wrapper  = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: rgb(245,85,130);
  background: linear-gradient(45deg, rgba(245,85,130,1) 0%, rgba(236,211,0,1) 100%);
`;

const Title = styled.p`
  font-size: 35px;
  color: white;
  font-weight: 800;
`

const TasksWrapper = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  color: #fff0db;
  background: #ff4848;
  width: 450px;
  border: none;
  height: 50px;
  font-size: 15px;
  border-radius: 20px;
  margin: 10px;
  cursor: pointer;
  transition: all .2s ease-in-out;
  &:hover {
    transform: scale(1.02);
  }
  &:active {
    transform: scale(.98);
  }
`;

function App() {
  const [tasks, setTasks] = useState([
    {name: 'Do some coding', done: false},
    {name: '3 job applications', done: false},
    {name: 'Follow @AbdurahmanCodes', done: false},
    {name: 'Go to the gym', done: false},
  ]);

  const onCheckBoxClick = index => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = {
      name: tasks[index].name,
      done: !tasks[index].done
    }

    setTasks(updatedTasks)
  };

  const onDeleteClick = index => {
    const updatedTasks = [...tasks].filter((_, i) => index !== i);
    setTasks(updatedTasks)
  }

  const onChangeTaskName = (index, value) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = {
      name: value,
      done: tasks[index].done
    }

    setTasks(updatedTasks)
  }

  const onTaskAdd = () => {
    const updatedTasks = [...tasks];
    updatedTasks.push({
      name: '',
      done: false
    });
    setTasks(updatedTasks)
  }

  const renderTasks = () => {
    return tasks.map((task, i) => {
      return <Task 
        task={task}
        index={i}
        onCheckboxClick={onCheckBoxClick}
        onDeleteClick={onDeleteClick}
        onChangeTaskName={onChangeTaskName}
      />
    })
  }


  return (
    <Wrapper>
      <Title>Abdurahman's To Do List</Title>
      <TasksWrapper>
        {renderTasks()}
      </TasksWrapper>
      <Button onClick={onTaskAdd} >
        Add Task
      </Button>
    </Wrapper>
  );
}

export default App;
