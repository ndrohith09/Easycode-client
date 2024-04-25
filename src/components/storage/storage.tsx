import React from "react";
import { Offcanvas } from "react-bootstrap"; 
import type { UploadProps } from 'antd';
import { Button, Form, Input, message, Upload } from 'antd';
import instance from "axiosInstance";
import Swal from "sweetalert2";

const { Dragger } = Upload;

export type StorageData = {
    pid : number,
    name : string,
    verdict : string,
    score : string
    sharable_link : string
    file: any
}
 
  
interface StorageProps {
  
}
 
interface StorageState {
  password: string,
  show : boolean,
  apiName: string,
  file : any,
  apiUrl: string, 
  storageData :  StorageData[]
}
 
class Storage extends React.Component<StorageProps, StorageState> {
  constructor(props : StorageProps ) {
    super(props);
    this.state = {
      show : false,
      password: '',
      apiName: '',
      file: null,
      apiUrl: '',
      storageData : []
    }
  }


  props: UploadProps = {
    name: 'file',
    multiple: true, 
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  async componentDidMount() {
    try {
       await instance({
        url: "storage/",
        method: "GET"
      })
      .then((res)=> {
        console.log("storageData",res.data);
        this.setState({ storageData: res.data.BODY.storage });
      }) 
    }
    catch (err) {
      console.log(err);
   
    }
  }

  // UploadFile  = (info:any) => {
  //   const { status, file } = info;
  //   console.log(`UploadFile selected` , file);
  //   this.setState({
  //     file : file
  //   })
  //   if (status === 'done') {
  //     message.success(`${file.name} file uploaded successfully!`);
  //   } else if (status === 'error') {
  //     message.error(`${file.name} file upload failed.`);
  //   }
  // };

  // console.log(`UploadFile selected` ,this.state.file.file instanceof Blob, this.state.file  instanceof Blob, this.state.file.file.name);
  submitFileToStorage = async () => {
    const formData = new FormData();
    console.log("typeof(this.state.file.file.data))",typeof(this.state.file));
  
      formData.append('file', this.state.file, this.state.file.name);
      formData.append('password', this.state.password);
      formData.append('file_name', this.state.file.name);
      
      try {
        await instance({
          url: "storage/",
          method: "POST", 
          data: formData
        }).then((res)=> {
          Swal.fire({  
            icon: "success", 
            text: `File Uploaded to storage!`,
            showConfirmButton: false,
            timer: 2000
          }); 
          window.location.reload(); 
          console.log(res)
        })
      } catch (error) {
        console.error("Error submitting file:", error);
      }
   

  }

  handleDelete = async (pid:number , link_id :string) => {
    try {
      await instance({
        url: "storage/",
        method: "DELETE", 
        data: {
          pid: pid,
          sharable_link : link_id
        }
      }).then((res)=> {
        Swal.fire({  
          icon: "success", 
          text: `File Deleted from storage!`,
          showConfirmButton: false,
          timer: 2000
        }); 
        window.location.reload(); 
        console.log(res)
      })
    } catch (error) {
      console.error("Error submitting file:", error);
    }
  }

  handleCopy = (text:string) => { 
    navigator.clipboard.writeText(text);
    alert('copied')
  }

  render() { 
    const { storageData } = this.state;
    console.log("storageData", storageData)
    return (
        <div className='container'>
          <div className='row'>
        <h3 className="col custom-title"> My Storage </h3>
        <button className="col-2 btn btn-primary" 
        onClick={() => this.setState({ show : true})}
        >Add Storage</button>
          </div>
        <br />
        <table className="table table-hover responsive">
            <thead> 
                <tr>  
                    <th>File Name</th>
                    <th>Score</th>
                    <th>Verdict</th>
                    <th>Secure Share Link</th>      
                    <th>Delete</th>      
                </tr>
            </thead>
            <tbody>
              {storageData.length > 0 ?
              storageData.map((storage , index) => (
                <tr key={index}>  
                    <td> {storage.name} </td>  
                    <td> {storage.score}</td>  
                    <td> {storage.verdict} </td>  
                   
                    <td>
                        <div className="col-3 col-md-3 profile-details">
                <div className="appointment-text cursor-pointer"
                onClick={() => this.handleCopy(
                    storage.sharable_link
                )}
                >  
                  <i className=' bx bx-copy' ></i>
                </div>
              </div></td>  

              <td>
                        <div className="col-3 col-md-3 appointment-x-details">
                <div className="appointment-text cursor-pointer"
                onClick={() => this.handleDelete(
                    storage.pid , storage.sharable_link 
                )}
                >  
                  <i className='cursor-pointer bx bx-trash'></i> 
                </div>
              </div></td>  
                </tr>
              )) : (
                <>
                No file storage 
                </>
              )}
                
                
            </tbody>
        </table>

        <Offcanvas show={this.state.show} placement={'end'} backdrop={false}  onHide={() =>  this.setState({ show : false})}>
    <Offcanvas.Header closeButton>
      <Offcanvas.Title>Upload Storage</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
    <Form onFinish={this.submitFileToStorage} >
      <div className="col">
       
        <label>File</label>
        <br />
 
        <input type="file"
        style={{
          appearance: 'none',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
        onChange={(e:any) =>
          this.setState({
            file: e.target.files[0],
          })
        }
        placeholder="uploadfile" />
        <br />
        <label>Secure Share Password</label>

        <Input 
        type="text"
        required
        onChange={(e:any) =>
          this.setState({
            password: e.target.value,
          })
        }
        />
        <br />

{/* 
        <Dragger  
        {...this.props}   
        // onChange={(file:any) =>
        //   this.setState({
        //     file: file,
        //   })
        // } 
        >
    <p className="ant-upload-drag-icon">
    <i className='bx bx-cloud-upload' ></i>
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">
      Support for a single or bulk upload.  
    </p>
  </Dragger>  */}
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
 
export default Storage;
 