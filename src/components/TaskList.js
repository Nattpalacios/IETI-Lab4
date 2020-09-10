import React from 'react';
import Task from './Task';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import './TaskList.css'

export default class TaskList extends React.Component {

    render() {
        
        return (
            
            <Container component="main" maxWidth="xs">
            <CssBaseline />
                <div className="cajita">
                    {this.props.tasksList.map((task, i) => {
                        return (
                            <Task
                                key={'task_' + i}
                                description={task.description}
                                responsible={task.responsible}
                                name={task.name}
                                email={task.email}
                                status={task.status}
                                dueDate={task.dueDate} />
                        );
                    })}
                </div>
             </Container>
        );

    }

    

}
