import React from 'react';
import { InputLabel, TextField, Fab, Select, MenuItem } from '@material-ui/core';
import moment from "moment";

export default class Filter extends React.Component {

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
        if(this.state.description !== ""){
            localStorage.setItem("descriptionFilter", this.state.description);
        }
        if(this.state.responsible !== "") {
            localStorage.setItem("responsibleFilter", this.state.responsible);
        }
        if(this.state.status !== "") {
            localStorage.setItem("statusFilter", this.state.status);
        }
        window.location.href = "/";
    }

    handleClear() {
        localStorage.removeItem("descriptionFilter");
        localStorage.removeItem("responsibleFilter");
        localStorage.removeItem("statusFilter");
        window.location.href = "/";

    }

    render() {

        return (
            <div className="App">
                <form onSubmit={this.handleSubmit} className="todo-form">
                    <h1>Task Filters</h1>
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
                    <Fab type="submit" variant="round" color="secondary" className="fab">
                        Apply
                    </Fab>
                    <Fab onClick={(e) => {this.handleClear()}} color="primary" aria-label="add">
                        Clear All
                    </Fab>
                    
                </form>
                <br />
                <br />
            </div>
        );
    }
    
}
