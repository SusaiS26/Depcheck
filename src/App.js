import logo from './logo.svg';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import Table from 'react-bootstrap/Table';

function App() {
  const [cname, setCName] = useState("");
  const [cnameError, setCNameError] = useState("");
  const [department, setDepartment] = useState("");
  const [departmentError, setDepartmentError] = useState("");
  const [ageval, setAgeVal] = useState("");
  const [agevalError, setAgeValError] = useState("");
  const [markVal, setMarkVal] = useState("");
  console.log("Susai123", markVal);
  const [markValError, setMarkValError] = useState("");
  const [companyval, setCompanyVal] = useState([]);
  console.log(companyval, "LLL");
  const [deleteVal, setDeleteVal] = useState("");
  const [postVal, setPostVal] = useState([]);
  const [saveUpdateVal, setSaveUpdateVal] = useState("Save");
  const [updatepost, setUpdatepost] = useState([]);
  const [idaval, setIdaval] = useState("");
  const [resulttext, setResultText] = useState()
  const [photoerror, setPhotoError] = useState("")
  console.log("PPP", photoerror);

  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("");

  const [CompanyLogoUpload, setCompanyLogoUpload] = useState('');

  console.log("images", CompanyLogoUpload);

  // const uploadImage = (e, flag) => {

  //     let file = e.target.files[0];
  //     if (file) {
  //         const reader = new FileReader();
  //         reader.onload = handleReaderLoaded.bind(this, flag);
  //         reader.readAsBinaryString(file);
  //     }
  // };

  // const handleReaderLoaded = (flag, e) => {
  //     console.log('file uploaded 2: ', e);
  //     let binaryString = e.target.result;
  //     console.log('bin', binaryString);
  //     if (flag == 'logo1') {
  //         console.log('$%$%', flag);
  //         setCompanyLogoUpload({
  //             base64Data: btoa(binaryString),
  //         });
  //     }
  // };
  // const { base64Data } = CompanyLogoUpload;

  
  console.log("AAA", companyval);


  // const cNameClickVal = (e) => {
  //   setCName(e.target.value)
  //   if (e.target.value === "") {
  //     setCNameError("Please Enter Name")
  //   }
  //   else {
  //     setCNameError("")
  //   }
  // }
  // const cDepartment = (e) => {
  //   setDepartment(e.target.value)
  //   if (e.target.value === "") {
  //     setDepartmentError("Please Enter Father's Name")
  //   }
  //   else {
  //     setDepartmentError("")
  //   }
  // }
  // const cAgeVal = (e) => {
  //   setAgeVal(e.target.value)
  //   if (e.target.value === "") {
  //     setAgeValError("Please Enter DOB:")
  //   }
  //   else {
  //     setAgeValError("")
  //   }
  // }
  // const cMarkVal = (e) => {
  //   setMarkVal(e.target.value)
  //   if (e.target.value === "") {
  //     setMarkValError("Please Enter Class & Section:")
  //   }
  //   else {
  //     setMarkValError("");
  //   }
  // }
  //  const validform = () => {
  //   let Valid = true;
  //   if (cname === "") {
  //     setCNameError("Please Enter Name");
  //     Valid = false;
  //   }
  //   else {
  //     setCNameError("");
  //   }
  //   if (department === "") {
  //     setDepartmentError("Please Enter Father's Name");
  //     Valid = false;
  //   }
  //   else {
  //     setDepartmentError("");
  //   }
  //   if (ageval === "") {
  //     // || isNaN(ageval) || ageval < 1 || ageval > 100
  //     setAgeValError("Please Enter DOB");
  //     Valid = false;
  //   }
  //   else {
  //     setAgeValError("");
  //   }
  //   if (filename === "") {
  //     // setResultText(res.data.message)
  //     setPhotoError("Please upload the image");
  //     Valid = false;
  //   }
  //   else {
  //     setPhotoError("");
  //   }

  //   if (markVal === "") {
  //     setMarkValError("Please Enter Class & Section:");
  //     Valid = false;
  //   }
  //   else {
  //     setMarkValError("");
  //   }
  //   return Valid;

  // }

  const [newvalues, setNewvalues] = useState("")

  const onchangevalnew = (e) => {
    setNewvalues(e.target.value)
  }

  return (
    <div >
      <div className="heightpic" id='myDivtwo'>
        <div id='myDivtwo'>
          <div className="header ">
            <h1 className="schoolname">Sacred Heart Higher Secondary School, Anilady</h1>
          </div>
          <div class="navigate">
            <ul class="d-flex justify-content-between">
              <li><a className="arefer" href="/company"> Admission</a></li>
              <li><a className="arefer" href="/Susai"> Fees</a></li>
              <li><a className="arefer" href="/Susai"> Exam</a></li>
              <li><a className="arefer" href="/Susai"> Staff</a></li>
              <li><a className="arefer" href="/Susai"> Management</a></li>
            </ul>
          </div>

          {/* <div className="company-container" >

            <div className="row">
              <h1 className="txtcomp staddmission">Student Admission Form:-</h1>
            </div>

            <div className="container full-container">
              <div className="row" style={{ marginTop: '50px' }}>
                <div className="col-4">
                  <div className="company-formtile">
                    <span className="student-color">Student Name:</span>
                  </div>
                </div>
                <div className="col-6">
                  <div>
                    <input type="text" className='form-control' value={cname} onChange={cNameClickVal}></input>
                    <p className="error-colour">{cnameError}</p>
                  </div>
                </div>
              </div>


              <div className="row ">
                <div className="col-4">
                  <div className="company-formtile">
                    <span className="student-color">Father's Name:</span>
                  </div>
                </div>
                <div className="col-6">
                  <input type="text" className='form-control' value={department} onChange={cDepartment}></input>
                  <p className="error-colour"> {departmentError}</p>
                </div>
              </div>
              <div className="row ">
                <div className="col-4">
                  <div className="company-formtile">
                    <span className="student-color">Student Photo:</span>
                  </div>
                </div>
                <div className="col-6">
                  <div>
                    <input type="file" accept="image/*" ></input>
                   
                    <p className="error-colour">{photoerror}</p>
                    <p>{resulttext} </p>

                  </div>
                </div>
              </div>

              <div className="row dobaligment">
                <div className="col-4">
                  <div className="company-formtile">
                    <span className="student-color">DOB:</span>
                  </div>
                </div>
                <div className="col-6">
                  <input type="date" className='form-control' value={ageval} onChange={cAgeVal}></input>
                  <p className="error-colour"> {agevalError}</p>
                </div>
              </div>

              <div className="row ">
                <div className="col-4">
                  <div className="company-formtile">
                    <span className="student-color">Class & Section:</span>
                  </div>
                </div>
                <div className="col-6">
                  <input type="text" className='form-control' value={markVal} onChange={cMarkVal}></input>
                  <p className="error-colour"> {markValError}</p>
                </div>
               
              </div>

            </div>

            <div className="row btn-colour">
              <div className="col">
                <div className="save-btn-cent">

                </div>

              </div>
            </div>

            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>
                    S.No:
                  </th>
                  <th>
                    Student Name:
                  </th>
                  <th>
                    Father's Name:
                  </th>
                  <th>
                    Photo
                  </th>
                  <th>
                    DOB:
                  </th>
                  <th>
                    Class & Section
                  </th>
                  <th>
                    Actions:
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sa</td>
                </tr>
              </tbody>
            </Table>
            <div className="row btn-colour">
              <div className="col">
                <div className="save-btn-cent">


                </div>

              </div>
            </div>

          </div> */}

        </div>

      </div>
    </div>
  );
}

export default App;
