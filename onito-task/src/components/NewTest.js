import React from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"
import "./NewTest.css"

const NewTest = () => {
    const schema = yup.object().shape({
        fullName: yup.string().required(),
        dobOrAge: yup.string().required(),
        sex: yup.string().required(),
        mobile: yup
            .string()
            .matches(
                /^[6-9]\d{9}$/,
                "Mobile number must be a valid Indian mobile number"
            )
            .nullable(),
        emergencyContactNumber: yup
            .string()
            .matches(
                /^[6-9]\d{9}$/,
                "Emergency Contact Number must be a valid Indian mobile number"
            )
            .nullable(),
        // idType: yup.string().nullable(),
        // id: yup
        //     .string()
        //     .when('idType', {
        //         is: 'Aadhar',
        //         then: yup.string().matches(/^\d{12}$/, 'Invalid Aadhar number'),
        //         otherwise: yup
        //             .string()
        //             .matches(/^([A-Z]){5}([0-9]){4}([A-Z]){1}$/, 'Invalid PAN number'),
        //     })
        //     .nullable(),

    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = async(data) => {
        console.log(data)
        try {
            const response = await fetch("http://localhost:8000/register/api", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
            });
            const result = await response.json();
            console.log(result);
          } catch (error) {
            console.error(error);
          }
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Personal Details</h3>
                <div className='_details'>
                    <div>
                    <label>Name:</label>
                    <input type='text' placeholder='name' name='Fname' {...register("fullName")} />
                    <h5><span>{errors.fullName?.message}</span></h5>
                    </div>
                    <div>
                    <label className="form-label">Date of Birth / Age :</label>
                    <input
                        className="form-input"
                        type="number"
                        name='age'
                        {...register("dobOrAge")}
                    />
                    <h5><span>{errors.dobOrAge?.message}</span></h5>
                    </div>
                    <div>
                    <label className="form-label">Sex :</label>
                    {/* <input type='text' placeholder='enter sex' {...register("sex")}/> */}
                    <select className="form-select" name='sex' {...register("sex")}>
                        <option></option>
                        <option value="male">male</option>
                        <option value="female">female</option>
                        <option value="other">Other</option>
                    </select>
                    <h5><span>{errors.sex?.message}</span></h5>
                    </div>
                    <div>
                    <label className="form-label">Mobile:</label>
                    <input className="form-input" type="text" name='mobile' {...register("mobile")} />
                    <h5><span>{errors.mobile?.message}</span></h5>
                    </div>
                    <div>
                    <label className="form-label">ID Type:</label>
                    <select className="form-select" name='idType' {...register("idType")}>
                        <option value="">Select ID Type</option>
                        <option value="Aadhar">Aadhar</option>
                        <option value="PAN">PAN</option>
                    </select>
                    <input className="form-input" type="text" name='id' {...register("id")} />
                    <h5><span>{errors.id?.message}</span></h5>
                    </div>
                </div>
                
                <h3>Contact Details</h3>
                <div className='_details'>
                    <div>
                    <label className="form-label">Guardian Details:</label>
                    <select className="form-select" name='guardian' {...register("guardianTitle")}>
                        <option value="Mr.">Mr.</option>
                        <option value="Mrs.">Mrs.</option>
                    </select>
                    
                    
                    <input
                        className="form-input"
                        type="text"
                        name='guardianName'
                        {...register("guardianName")}
                    />
                    </div>
                    <div>
                    <label className="form-label">Emergency contact number:</label>
                    <input
                        className="form-input"
                        type="text"
                        name='emergencyContact'
                        {...register("emergencyContactNumber")}
                    />
                    <h5><span>{errors.emergencyContactNumber?.message}</span></h5>
                    </div>
                    <div>
                    <label>Email:</label>
                    <input type='text' placeholder='email' name="email" {...register("email")} />
                    </div>
                </div>
                
                <h3>Address Details</h3>
                <div className='_details'>
                    <div>
                    <label className="form-label">Address:</label>
                    <input className="form-input" type="text" name='address'  {...register("address")} />
                    </div>
                    
                    <div>
                    <label className="form-label">Country:</label>
                    <input className="form-input" type="text" name='country' {...register("country")} />
                    </div>
                    
                    <div>
                    <label className="form-label">State:</label>
                    <input className="form-input" type="text" name='state' {...register("state")} />
                    </div>
                   
                    <div>
                    <label className="form-label">Pincode:</label>
                    <input className="form-input" type="text" name='pincode' {...register("pincode")} />
                    </div>
                   
                    <div><br />
                    <label className="form-label">City:</label>
                    <input className="form-input" type="text" name='city' {...register("city")} />
                    </div>
                 
                </div>
                
                <h3>Other Details</h3>
                <div className='_details'>
                    <div>
                    <label>Occupation</label>
                    <input
                        className="form-input"
                        type="text"
                        name='occupation'
                        {...register("occupation")}
                    />
                    </div>
                    
                    <div>
                    <label className="form-label">Religion</label>
                    <select className="form-select" name='religion' {...register("religion")}>
                        <option value="Hindu">Hindu</option>
                        <option value="Muslim">Muslim</option>
                        <option value="Christian">Christian</option>
                        <option value="Sikh">Sikh</option>
                        <option value="Jain">Jain</option>
                        <option value="Buddhist">Buddhist</option>
                    </select>
                    </div>
                    
                     <div>
                     <label className="form-label">Marital status</label>
                    <select className="form-select" name='maritalStatus' {...register("marital")}>
                        <option value="Married">Married</option>
                        <option value="Unmarried">Unmarried</option>
                    </select>
                     </div>
                     
                     <div>
                     <label className="form-label">Blood Group</label>
                    <select className="form-select" name='bloodGroup' {...register("blood")}>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="AB">AB</option>
                        <option value="O">O</option>
                    </select>
                     </div>

                     <div>
                     <label className="form-label">Nationality</label>
                    <input
                        className="form-input"
                        type="text"
                        name='nationality'
                        {...register("nationality")}
                    />
                     </div>
                    
                </div>

                <div className='btn'>
                    <button type='submit' >Submit</button>
                </div>


            </form>
        </div>
    )
}

export default NewTest