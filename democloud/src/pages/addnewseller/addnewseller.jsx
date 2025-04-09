import React, { useState } from "react";
import './addnewseller.css'
import { LuUserRoundCog } from "react-icons/lu";
import { RiUserFill } from "react-icons/ri";
import { PiWarningCircleBold } from "react-icons/pi";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from "@mui/material"; 
import axios from "axios";



 
const AddNewSeller = ()=>{
    const [imagepreview, setImagePreview] = useState('./images/defaultimg.png');

  const [addseller, setAddSeller] = useState({
    firstname: '',
    lastname: '',
    phoneno: '',
    role: '',
    sellerimage: null,  // Will store file object here
    selleremail: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddSeller((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];  
    if (file) {
      setAddSeller((prevState) => ({
        ...prevState,
        sellerimage: file 
      }));

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);  
      }
      reader.readAsDataURL(file);
    
    }
  };

  const handleadd = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('firstname', addseller.firstname);
    formData.append('lastname', addseller.lastname);
    formData.append('phoneno', addseller.phoneno);
    formData.append('role', addseller.role);
    formData.append('selleremail', addseller.selleremail);

    // Append the seller image as a file object
    if (addseller.sellerimage) {
      formData.append('sellerimage', addseller.sellerimage); 

    } else {
      console.error('Seller image is missing');
    }

    try {
      const response = await axios.post('/api/addnewseller', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Seller added successfully', response.data);
    } catch (error) {
      console.error('Error while adding seller:', error);
    }
  };

      
      
    return(
        <>
       <div className="addnew-seller-section">
       <div className="addnew-seller-header">
        <form onSubmit={handleadd}>
        <div className="addnew-e-top">
          <div className="addnew-e-heading">
            <div className="addnew-e-icon"><LuUserRoundCog/></div>
            <h2>Add New Seller</h2>
          </div>
        </div>
        <div className="e-genral-info-box">
           <div className="e-genral-info">
            <div className="e-genral-info-top">
                <div className="e-genral-heading">
                    <div className="e-genral-icon"><RiUserFill/></div>
                    <h3>Genral Infomation</h3>
                </div>
            </div>
            <div className="addnew-e-form-box">
                <div className="addnew-left">
                    <form onSubmit={handleadd} >
                    <div className="addnew-input-box">
                        <div className="boxf">
                       <label >First Name</label>
                       </div>
                       <div className="add-input">
                        <input  name="firstname" value={addseller.firstname}  onChange={handleChange}  type="text" placeholder=" Ex: Sakeel Ameer" />
                       </div>
                    </div>
                    <div className="addnew-input-box">
                        <div className="boxf">
                       <label >Last Name</label>
                       </div>
                       <div className="add-input">
                        <input type="text" name="lastname" value={addseller.lastname} onChange={handleChange} placeholder=" Ex: Sakeel Ameer" />
                       </div>
                    </div>
                    <div className="addnew-input-box">
                        <div className="boxp">
                       <label >Phone</label>
                       </div>
                       <div className="add-input">
                        <input type="number" name="phoneno"  value={addseller.phoneno}  onChange={handleChange} placeholder=" Ex: 1113*****" />
                       </div>
                    </div>
                    <div className="addnew-input-box">
                        <div className="boxp">
                       <label >Role</label>
                       </div>
                       <div className="add-inputs">
                       <div className="select-menu">
                                        <FormControl className="f-bg" size="large" fullWidth  >
                                            <InputLabel className="s-bg" >Select Role</InputLabel>
                                            <Select  name="role" value={addseller.role}  onChange={handleChange}>

                                                <MenuItem value="">None</MenuItem>
                                                <MenuItem value="customer">Customer</MenuItem>
                                                <MenuItem value="deliverymen">Deliveryman</MenuItem>
                                                
                                            </Select>
                                        </FormControl>

                            </div>
                            </div>
                    </div>
                    </form>
                </div>
                <div className="addnew-right">
                    <div className="seller-image">
                        <div className="image-e-top">
                            <h4>seller Image Ratio (1:1)</h4>
                        </div>
                        <div className="image-show-box">
                            <div className="image-show">
                            {addseller && <img src={imagepreview} alt="" />}
                            </div>
                        </div>
                        <div className="image-size">
                        <div className="image-size-heading">
                            <h4>Employee Image Size Max 2 MB *</h4>
                        </div>
                        <div className="image-choose">
                        <input type="file" name="sellerimage"    accept="image/*"  onChange={handleImageChange} />
           
         
           
          
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="account-info">
                <div className="account-epp-info">
                   <div className="account-epp-top">
                    <div className="epp-heading">
                        <div className="epp-icon"><RiUserFill/></div>
                        <h3>Account Information</h3>
                    </div>
                   </div>
                   <div className="e-p-c">
                    <div className="e-box">
                        <div className="e-lable">
                            <lable>Email</lable>
                        </div>
                        <div className="e-input">
                            <input type="email" name="selleremail"  value={addseller.selleremail}  onChange={handleChange}   placeholder="Ex: exa@gmail.com"/>
                        </div>
                    </div>
                    <div className="e-box">
                        <div className="e-lable">
                            <lable>Password</lable>
                            <div className="pass-war-icon"><PiWarningCircleBold/></div>
                        </div>
                        <div className="e-input">
                            <input type="password"  placeholder="password"/>
                        </div>
                    </div>
                    <div className="e-box">
                        <div className="e-lable">
                            <lable>Confirm Password</lable>
                        </div>
                        <div className="e-input">
                            <input type="password"  placeholder="confirm password"/>
                        </div>
                    </div>
                   </div>
                   <div className="srbtn-box">
                                    <div className="r1btn">
                                        <Button className="rst-btn">Reset</Button>
                                        <Button type="submit"  className="subt-btn">Submit</Button>
                                    </div>
                                </div>
                </div>
            </div>
           </div>
        </div>
      </form>
       </div>
       </div>
        </>
    )
}
export default AddNewSeller;