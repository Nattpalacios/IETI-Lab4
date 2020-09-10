import React from 'react';
import ResponsiveDrawer from './ResponsiveDrawer';
import TaskList from './TaskList';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';


export class MainView extends React.Component {

    constructor(props){
        super(props)
        this.applyFilters = this.applyFilters.bind(this);
    }


    applyFilters = (list) => {
        const descriptionFilter = localStorage.getItem("descriptionFilter");
        const descriptionList = descriptionFilter != null ? 
            list.filter(item => descriptionFilter === item.description): list;
        
        const responsibleFilter = localStorage.getItem("responsibleFilter");
        const responsibleList = responsibleFilter != null ? 
            descriptionList.filter(item => responsibleFilter === item.responsible.email) : descriptionList;
        
        const statusFilter = localStorage.getItem("statusFilter");
        const statusList = statusFilter != null ? 
            responsibleList.filter(item => statusFilter === item.status) : responsibleList;
        
        return statusList;
        
    }

    render() {

        const task = this.applyFilters(JSON.parse(localStorage.getItem("tasksLists")));
        console.log(task);

        return(
            <div className = "MainView">
                <div>
                    <ResponsiveDrawer></ResponsiveDrawer>
                    <br />
                    <br />
                    <TaskList tasksList = {task}></TaskList>
                    <br />
                    <Fab href="/newTask" color="secondary" aria-label="add">
                        <AddIcon />
                    </Fab>
                    <Fab href="/addFilter" color="primary" aria-label="add">
                        Filter
                    </Fab>
                </div>
                <br />
                <div>
                    <Button
                        href="/userProfile"
                        variant="contained"
                        color="info"
                    >
                        Edit Profile
                    </Button>
                </div>
                
            </div>
        );

    }

}