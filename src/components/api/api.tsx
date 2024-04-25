import React, { Component } from 'react'; 
import { Offcanvas } from 'react-bootstrap';
import { Form, Input, Select } from 'antd';
import { APIData } from '../database/database';
import instance from 'axiosInstance';
import Swal from 'sweetalert2';

interface APIProps {
    
}
 
interface APIState {
  show : boolean,
  apiName: string,
  apiUrl: string, 
  apiMode : string,
  apiData :  APIData[]
}
 
class API extends React.Component<APIProps, APIState> {
  constructor(props : APIProps ) {
    super(props);
    this.state = {
      show : false,
      apiName: '',
      apiUrl: '',
      apiMode: 'development',
      apiData : [ ]
    }
  }


  async componentDidMount() {
    try {
       await instance({
        url: "apiflow/",
        method: "GET"
      })
      .then((res)=> {
        console.log(res.data);
        this.setState({ apiData: res.data.BODY.api });
      }) 
    }
    catch (err) {
      console.log(err);
   
    }
  }


  getIdFromUrl = (url : string) => {
    if (url) {
    const regex = /development\/([^/]+)\//; 
    const match = url.match(regex);
    console.log(match , "match")
    return match ? match[1] : null; 
  }
  }
    
  handleAddFlowAPI = async () => {
    const formData = new FormData(); 
  
      formData.append('name', this.state.apiName );
      formData.append('url', this.state.apiUrl);
      formData.append('mode', this.state.apiMode);
      
      try {
        await instance({
          url: "apiflow/",
          method: "POST", 
          data: formData
        }).then((res)=> {
          Swal.fire({  
            icon: "success", 
            text: `Api Created successfully!`,
            showConfirmButton: false,
            timer: 2000
          }); 
          window.location.reload(); 
          console.log(res)
        })
      } catch (error) {
        console.error("Error creating Api:", error);
      }
   

  }
 
  render() { 
    const { apiData } = this.state;
    return (
        <div className='container'>
          <div className='row'>
        <h3 className="col custom-title"> My Apis </h3>
        <button className="col-1 btn btn-primary" 
        onClick={() => this.setState({ show : true})}
        >Add Api</button>
          </div>
        <br />
        <table className="table table-hover responsive">
            <thead> 
                <tr>
                    <th>Api Name</th>
                    <th>Development Url</th>  
                    <th>Api Route</th> 
                    <th>Mode</th>  
                    <th>Enabled</th> 
                </tr>
            </thead>
            <tbody>
              {apiData.length > 0 ?
              apiData.map((api , index) => (
                <tr key={index}>
                        <td><a    
                    style={{ 'cursor' : 'pointer' , fontWeight :'bolder'}}                     
                     onClick={() => {
                       window.location.href = `http://localhost:3001/api/${api.api_id}?route=${api.url}`
                     }
                      }
                       >
                        {api.name}</a></td>  
                    <td>{api.developement_url}</td> 
              
                    <td>/{api.url}</td> 
                    <td>{api.mode}</td> 
                   
                    <td>
                        <div className="col-3 col-md-3 profile-details">
                <div className="appointment-text"> 
                {api.is_active ? (
                  <i className="bx bxs-check-circle"></i>
                ) : (
                  <i className="bx bxs-x-circle"></i>
                )}                       
                </div>
              </div></td>  
                </tr>
              )) : (
                <>
                No API data
                </>
              )}
                
                
            </tbody>
        </table>

        <Offcanvas show={this.state.show} placement={'end'} backdrop={false}  onHide={() =>  this.setState({ show : false})}>
    <Offcanvas.Header closeButton>
      <Offcanvas.Title>Create New API</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
    <Form onFinish={this.handleAddFlowAPI} >
      <div className="col">
        <label>Api Name</label>
        <br />
        <Input type="text" className="form-control"
         onChange={(e) =>
            this.setState({
              apiName: e.target.value,
            })
          } />
        <br />
        <label>Api Url</label>
        <br />
        <Input type="text" 
        className="form-control"
         onChange={(e) =>
            this.setState({
              apiUrl: e.target.value,
            })
          } />
        <br />
        <label>Mode</label>
        <br />
        <Select
          defaultValue="development"
          style={{ width: '100%' }}
          size='large' 
          onChange={(val) =>
            this.setState({
              apiMode: val,
            })
          }
          options={[
            { value: 'development', label: 'development' },
            { value: 'production', label: 'production' }, 
          ]}
        />
        <br />
        <br />
        <button className="btn btn-primary" type="submit">Create</button>
      </div>
      </Form>
    </Offcanvas.Body>
  </Offcanvas>

        </div>
    );
  }
}
 
export default API;
 