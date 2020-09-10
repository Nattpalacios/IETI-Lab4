import React from 'react';
import { Typography, Card } from '@material-ui/core';
import moment from "moment";


export default class Task extends React.Component {

    constructor(props){
        super(props);
        this.state = {description: props.description, responsible: props.responsible, 
            status: props.status, dueDate: props.dueDate};

    }

    render() {
        return(
            <Card variant="outlined">
                <Typography color="textSecondary">
                    {this.state.description}
                </Typography>
                <Typography color="textSecondary">
                    {this.state.responsible.name}
                </Typography>
                <Typography color="textSecondary">
                    {this.state.responsible.email}
                </Typography>
                <Typography variant="h5" component="h2">
                {this.state.status} 
                </Typography>
                <Typography color="textSecondary">
                {moment(this.state.dueDate).format('DD/MM/YYYY')}
                </Typography>
            </Card>
        );
    }

    

}
