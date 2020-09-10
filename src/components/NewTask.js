import React from 'react';
import { InputLabel, TextField, Fab, Select, MenuItem } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";

export default class NewTask extends React.Component {

    constructor(props) {
        super(props);
        this.state = {description: "", responsible: "", status: "", dueDate: moment()}
        this.handleDescription = this.handleDescription.bind(this);
        this.handleResponsibleEmail = this.handleResponsibleEmail.bind(this);
        this.handleStatus = this.handleStatus.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleDescription(descript) {
        this.setState({description : descript.target.value});
    }

    handleResponsibleEmail(respons) {
        this.setState({responsible : respons.target.value});
    }

    handleStatus(stats) {
        this.setState({status : stats.target.value});
    }

    handleDate(date) {
        this.setState({dueDate: date.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        const newTask = {
            description: this.state.description,
            responsible: {
                name: this.state.responsible,
                email: this.state.responsible
            },
            status: this.state.status,
            dueDate: this.state.dueDate
        }
        const currentList = JSON.parse(localStorage.getItem("tasksLists"));
        currentList.push(newTask);
        localStorage.setItem("tasksLists", JSON.stringify(currentList));
        window.location.href = "/";
    }

    render() {

        return (
            <div className="App">
                <form onSubmit={this.handleSubmit} className="todo-form">
                    <h1>New Task</h1>
                    <InputLabel htmlFor="description" className="right-margin">
                        Description:
                    </InputLabel>

                    <TextField
                        id="description"
                        onChange={this.handleDescription}
                        value={this.state.description}>
                    </TextField>

                    <br />
                    <br />

                    <InputLabel htmlFor="responsibleEmail" className="right-margin">
                        Responsible Email:
                    </InputLabel>

                    <TextField
                        id="responsibleEmail"
                        onChange={this.handleResponsibleEmail}
                        value={this.state.responsible}>
                    </TextField>

                    <br />
                    <br />
                    <InputLabel htmlFor="status" className="right-margin">
                        Status:
                    </InputLabel>
                    <Select
                        id="status"
                        value={this.state.status}
                        onChange={this.handleStatus}
                    >
                        <MenuItem value={"IN_PROGRESS"}>in progress</MenuItem>
                        <MenuItem value={"COMPLETED"}>completed</MenuItem>
                        <MenuItem value={"READY"}>ready</MenuItem>
                        <MenuItem value={"NO_STATUS"}>unknown</MenuItem>
                    </Select>
                    <br />
                    <br />

                    <DatePicker
                        id="due-date"
                        selected={this.state.dueDate}
                        placeholderText="Due date"
                        onChange={this.handleDate}>
                    </DatePicker>
                    <br />
                    <Fab type="submit" variant="round" size="small" className="fab">
                        <CheckIcon />
                    </Fab>
                </form>
                <br />
                <br />
            </div>
        );
    }
    
}
