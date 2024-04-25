import React, { Component } from "react";
import { Offcanvas } from "react-bootstrap";
import { Card, Col, Form, Input, Row, Select, Tag } from "antd";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineEdit } from "react-icons/ai";
import { LiaEllipsisVSolid } from "react-icons/lia";
import instance from "axiosInstance";
import Swal from "sweetalert2";
import { MdDeleteOutline } from "react-icons/md";
interface DatabaseProps {}

export type APIData = {
  api_id: number;
  name: string;
  url: string;
  mode: string;
  is_active: boolean;
  developement_url: string;
};

export type DBData = {
  pid: string;
  name: string;
  type: string;
  status: string;
};

interface DatabaseState {
  show: boolean;
  dbName: string;
  dbType: string;
  dbProvider: string;
  dbData: DBData[]; 
}

class Database extends React.Component<DatabaseProps, DatabaseState> {
  constructor(props: DatabaseProps) {
    super(props);
    this.state = {
      show: false,
      dbName: "",
      dbType: "mongoDB",
      dbProvider: "",
      dbData: [],
  
    };
  }

  async componentDidMount() {
    try {
      await instance({
        url: "database/",
        method: "GET",
      }).then((res: any) => {
        console.log(res);
        this.setState({
          dbData: res.data.BODY.databases,
        });
      });
    } catch (e) {
      console.error(e);
    }
  }

  handleChange = (value: string) => {
    console.log(`selected ${value}`);
    this.setState({ 
      dbType : value
    })
  };

  handleDatabaseCreate = async () => {    
    try {
      await instance({ 
        url: "database/",
        method: "POST",
        data : {
          type :  this.state.dbType,
          uri: this.state.dbProvider,
          name: this.state.dbName
        }
      }).then((res:any) => { 

        Swal.fire({  
          icon: "success", 
          text: `Database Connected!`,
          showConfirmButton: false,
          timer: 1500
        }); 
        window.location.reload();
        console.log(res);
    
      });
    } catch (e) {
      // handle error
      Swal.fire({  
        icon: "error", 
        text: `Error in Database Connection!`,
        showConfirmButton: false,
        timer: 1500
      }); 
      console.error(e);
    }

  }


  handleDatabaseDelete = async (pid: string) => {  
    console.log(pid , "pid")  
    try {
      await instance({ 
        url: "database/",
        method: "DELETE",
        data : {
          pid :  pid, 
        }
      }).then((res:any) => { 

        Swal.fire({  
          icon: "success", 
          text: `Database Deleted!`,
          showConfirmButton: false,
          timer: 2000
        }); 
        window.location.reload();
        console.log(res);
    
      });
    } catch (e) {
      // handle error
      Swal.fire({  
        icon: "error", 
        text: `Error in Database Deletion!`,
        showConfirmButton: false,
        timer: 2000
      }); 
      console.error(e);
    }

  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h3 className="col custom-title"> My Database </h3>
          <button
            className="col-2 btn btn-primary"
            onClick={() => this.setState({ show: true })}
          >
            Add Database
          </button>
        </div>
        <br />

        <Row gutter={16}>

          {this.state.dbData.length > 0 ?
          this.state.dbData.map((db, index) => (
            <Col span={8} key={index}>
            <Card
              title={db.name}
              bordered={false}
              actions={[
                <IoSettingsOutline key="setting" />, 
                <MdDeleteOutline 
                onClick={() => this.handleDatabaseDelete(db.pid)}
                key="delete" />,
              ]}
            >
              Database: {db.type} <br /> 
              Status : <Tag color="green">{db.status}</Tag>
            </Card>
          </Col>
          ))
           
           :
           <p>No database create a new database</p>
           }
         
        </Row>

        <Offcanvas
          show={this.state.show}
          placement={"end"}
          backdrop={false}
          onHide={() => this.setState({ show: false })}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Create New Database</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Form onFinish={this.handleDatabaseCreate}>
              <div className="col">
                <label>Database Name</label>
                <br />
                <Input
                  type="text"
                  className="form-control"
                  onChange={(e) =>
                    this.setState({
                      dbName: e.target.value,
                    })
                  }
                />
                <br />
                <label>Database Type</label>
                <br />
                <Select
                  id="dbType"
                  defaultValue="mongoDB"
                  style={{ width: "100%" }}
                  size="large"
                  onChange={this.handleChange}
                  disabled
                  options={[{ value: "mongoDB", label: "MongoDB" }]}
                />
                <br />
                <br />
                <label>Database URI</label>
                <br />
                <Input
                  type="text"
                  className="form-control"
                  onChange={(e) =>
                    this.setState({
                      dbProvider: e.target.value,
                    })
                  }
                  id="dbProvider"
                />
             
                <br />
                <br />
                <button className="btn btn-primary" type="submit">
                 Connect
                </button>
              </div>
            </Form>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    );
  }
}

export default Database;
