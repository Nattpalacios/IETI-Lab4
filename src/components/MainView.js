import React from 'react';
import ResponsiveDrawer from './ResponsiveDrawer';
import TaskList from './TaskList';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import './MainView.css';

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
            <div>
                <div>
                    <ResponsiveDrawer></ResponsiveDrawer>
                    <br />
                    <br />
                    <br />
                </div>
                <div>
                    <br />
                    <div className="texto">
                        <TaskList tasksList = {task}></TaskList>
                    </div>
                    <br />
                    <Fab href="/newTask" color="secondary" aria-label="add" className="centrar">
                        <AddIcon />
                    </Fab>
                    <Fab href="/addFilter" color="primary" aria-label="add" className="centrar">
                        Filter
                    </Fab>
                </div>
                
                
            </div>
        );

    }

}