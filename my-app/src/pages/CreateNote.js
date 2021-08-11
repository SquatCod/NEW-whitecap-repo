import React, { useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

class CreateNote extends React.Component {

    state = {
            title: '',
            content: '',
            lists: []
        };
    
    
    handleChangeTitle = (event) => {

        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        })
    }

    handleChangeContent(event){
        
        const target = event.target;
        const name = target.name;
        const value = target.value

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        //Uploading file to database

        const payload = {
            title: this.state.title,
            content: this.state.content
        };

        axios.post('http://localhost:5000/create', payload)

        //Redirecting the window to a new page
        //window.location.href='/pages/Submitted'
    };

    render() {

        return (
            <>
                <div className="title">
                    ROV3D Upload
                </div>

                <div bp="grid 4">

                    <div> </div>

                    <div className="main_div1">
                        Name and Upload your files here:
                        <form onSubmit={this.handleSubmit} >
                            <div className="form-group">
                                <input onChange={(event)=>this.handleChangeTitle(event)} name="title" value={this.state.title} autoComplete="off" className="form-control" placeholder="note title"></input>
                            </div>

                            <div className="form-group">
                                <input type="file" onChange={(event)=>this.handleChangeContent(event)} name="content" value={this.state.content} autoComplete="off" className="form-control" placeholder="note content"></input>
                            </div>

                            <div>
                                <button>ADD NOTE</button>
                            </div>
                        </form>
                    </div>

                    <div> </div>

                </div>
            </>
        )
        
    }
}

export default CreateNote;