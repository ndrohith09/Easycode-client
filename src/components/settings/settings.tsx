import React from "react"; 
import instance from "axiosInstance";
 
interface LogsProps {
  
}
 
interface LogsState {  
  project_id : string,  
}
 
class Settings extends React.Component<LogsProps, LogsState> {
  constructor(props : LogsProps ) {
    super(props);
    this.state = { 
      project_id : '', 
    }
  }

 
  async componentDidMount() {
    try {
       await instance({
        url: "project/",
        method: "GET"
      })
      .then((res)=> {
        this.setState({ project_id: res.data.BODY.project.project_id });
        console.log(res.data);
      }) 
    }
    catch (err) {
      console.log(err);
   
    }
  }

  deleteProject = async () => {
       try {
       await instance({
        url: "project/",
        method: "DELETE",
        data : {
          project_id : this.state.project_id
        }
      })
      .then((res)=> {
         console.log(res.data);
      }) 
    }
    catch (err) {
      console.log(err);
   
    }
  }

  render() {  
    return (
        <div className='container'>
          <div className='row'>
        <h3 className="col custom-title"> My Project Settings</h3>
 
          </div>
        <br />
    <label>Delete my project</label>
    <br />
    <br />
      
    <button className="btn btn-danger"
    onClick={this.deleteProject}
    type="button">Delete Project</button>
     

        </div>
    );
  }
}
 
export default Settings; 
 