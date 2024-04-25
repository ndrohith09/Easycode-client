import React, { Component } from 'react'; 
import { Offcanvas } from 'react-bootstrap'; 

import { Avatar, Card, Col, Form, Input, message, Row, Select, Switch, Tag } from 'antd'; 
import { IoSettingsOutline } from "react-icons/io5";  
import { APIData } from '../database/database';
import {  PangeaSecurityDataType, PangeaServicesDataEnumMapping, PangeaServicesTypeEnum } from './security.data'; 
import instance  from 'axiosInstance';
import Swal from 'sweetalert2';

const { Meta } = Card;
type Settings = { 
  api_key : string
pid : string
domain : string 

}
interface PangeaSecurityProps {
  
}
 
interface PangeaSecurityState {
  show : boolean,
  securityDomain: string,
  activeCard: string,
  securityApi: string, 
  pangeaSecurity : PangeaSecurityDataType[], 
  pangeaSecurityData : PangeaSecurityDataType,  
  token: string;
  apiKey: string;   
  pangeaSettings : Settings;
}
 
class PangeaSecurity extends React.Component<PangeaSecurityProps, PangeaSecurityState> {
  constructor(props : PangeaSecurityProps) {
    super(props);
    this.state = {
      show : false, 
      token: '',
      apiKey:'',
      pangeaSecurityData : {} as PangeaSecurityDataType,
      pangeaSettings: {} as Settings,
      securityDomain: '',
      activeCard: '',
      securityApi: '', 
      pangeaSecurity : [], 
    }
  }


  
  async componentDidMount() {
 
    try {
      await instance({ 
        url: "services/",
        method: "GET",
      }).then((res:any) => {
        // handle success
        console.log(res);
        this.setState({
          pangeaSecurity : res.data.BODY.services
        })
      });
    } catch (e) { 
      console.error(e);
    }  


    try {
      await instance({ 
        url: "settings/",
        method: "GET",
      }).then((res:any) => {  
        console.log("pangeaSettings", res);
        this.setState({
          pangeaSettings : res.data.BODY.security
        })
      });
    } catch (e) { 
      console.error(e);
    }  
 
    
  }


  handleChange = (value : string) => {
    console.log(`selected ${value}`);
  };
 

  handleClickSettings = (security: PangeaSecurityDataType) => {
  
    this.setState({
      pangeaSecurityData: security,
      activeCard: security.name,
      show : true
    });
  }

  onSetInactive = async (checked : boolean , pid : number) => {  
   
    console.log(`switch to ${checked}`); 
    try {
      await instance({ 
        url: "services/",
        method: "PUT",
        data : {
          pid :  pid,
          is_active: checked,
        }
      }).then((res:any) => { 

        Swal.fire({  
          icon: "success", 
          text: `Service ${checked ? 'Activate' : 'Inactive'}!`,
          showConfirmButton: false,
          timer: 1500
        }); 
        window.location.reload();
        console.log(res);
    
      });
    } catch (e) {
      // handle error
      console.error(e);
    }  
 
  }

  onSubmitToken = async () => {  
   
    try {
      await instance({ 
        url: "services/",
        method: "POST",
        data : {
          pid :  this.state.pangeaSecurityData.pid,
          token: this.state.token
        }
      }).then((res:any) => { 

        Swal.fire({  
          icon: "success", 
          text: "Token added!",
          showConfirmButton: false,
          timer: 1500
        }); 
        window.location.reload();
        console.log(res);
    
      });
    } catch (e) {
      // handle error
      console.error(e);
    }  
 
  }



  onUpdateSecuritySettings = async () => {  
   
    try {
      await instance({ 
        url: "settings/",
        method: "PUT",
        data : {
          pid :  this.state.pangeaSettings.pid,
          domain: this.state.securityDomain,
          api_key: this.state.securityApi
        }
      }).then((res:any) => { 

        Swal.fire({  
          icon: "success", 
          text: "Settings Updated!",
          showConfirmButton: false,
          timer: 1500
        });  
        console.log(res);
    
      });
    } catch (e) {
      // handle error
      console.error(e);
    }  
 
  }


  render() { 
 
    
    return (
      <div className='container'>
      <div className='row'>
    <h3 className="col custom-title">Pangea Security </h3>
    {/* <button className="col-2 btn btn-primary" 
    onClick={() => this.setState({ show : true})}
    >Add Database</button> */}
      </div>
    <br /> 
    <Form onFinish={this.onUpdateSecuritySettings} >
    <div className="col-6">
    <label>Pangea API Key</label>
    <br />
    <Input type="text"
     className="form-control"
     placeholder={this.state.pangeaSettings.api_key ?? 'Not Set'}
     onChange={(e) =>
        this.setState({
          securityApi: e.target.value,
        })
      } />
    <br />
    <label>Pangea Domain</label>
    <br />
    <Input type="text" 
     className="form-control"
     placeholder={this.state.pangeaSettings.domain ?? 'Not Set'}
     onChange={(e) =>
        this.setState({
          securityDomain: e.target.value,
        })
      } />
     </div> 
    <br /> 
    <button className="btn btn-primary" type="submit">Save Security Settings</button>
    <br />
    <br /> 
    <h3 className="col custom-title">Pangea Services </h3>
    <br />
    <Row gutter={16}>
      {this.state.pangeaSecurity && (
        this.state.pangeaSecurity.map((security, index) => (
          <Col span={8}
          key={security.pid}>
        <Card  
        bordered={false}
        actions={[
          <Switch defaultChecked={security.is_active}  
          onChange={(e) => this.onSetInactive(e , security.pid)}
           />, 
          <div
            onClick= {()=> this.handleClickSettings(security) }
          >
          <IoSettingsOutline key="settings" 
          />
          </div>
        ]}
        >
          
            <Meta
        avatar={<div style={{ fill : 'rgb(85, 27, 118)'}} dangerouslySetInnerHTML={{ __html:  PangeaServicesDataEnumMapping[security.name as PangeaServicesTypeEnum].img as string }}  ></div>}
        title={security.name}
        description={
           PangeaServicesDataEnumMapping[security.name as PangeaServicesTypeEnum].desc
        } 
        />  
        </Card>
        <br />
        </Col>
        ))

              )} 
  </Row>

    <br />
    <br />
  
  </Form> 

  <Offcanvas show={this.state.show} placement={'end'} backdrop={false}  onHide={() =>  this.setState({ show : false})}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Configure {this.state.pangeaSecurityData.name}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Form onFinish={this.onSubmitToken}>
          <div className="col">
             
            <label>Pangea {this.state.pangeaSecurityData.name} Token</label>
            <br />
            <Input 
            type="text"
             className="form-control"
             placeholder={this.state.pangeaSecurityData.token ?? 'Not Set'}
             onChange={(e) =>
                this.setState({
                  token: e.target.value,
                })
              } 
              required
              /> 
      
            <br />
            <button className="btn btn-primary" type="submit">Configure Security</button>
          </div>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
      );
  }
}
 
export default PangeaSecurity; 

 