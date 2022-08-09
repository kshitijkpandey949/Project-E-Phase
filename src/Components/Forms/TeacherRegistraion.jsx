import React, { useState } from 'react'
import './TeacherRegistration.css'

const TeacherRegistraion = () => {
    const [teacherRegistraion, setTeacherRegistration] = useState({
        tFirstName: '',
        tLastName: '',
        // tGender: '',
        tBirthday: '',
        tFatherName: '',
        tMotherName: '',
        tAadharNumber: '',
        tEmail: '',
        tPhone: '',
        tAltPhone: '',
        tPermanentAddress: '',
        tCorrespondenceAddress: '',
        tFile: '',
    })

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);

        setTeacherRegistration({ ...teacherRegistraion, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newRecord = { ...teacherRegistraion, id: new Date().getTime().toString() }
        console.log(newRecord)
        setTeacherRegistration(
            {
                tFirstName: '',
                tLastName: '',
                // tGender: '',
                tBirthday: '',
                tFatherName: '',
                tMotherName: '',
                tAadharNumber: '',
                tEmail: '',
                tPhone: '',
                tAltPhone: '',
                tPermanentAddress: '',
                tCorrespondenceAddress: '',
                tFile: '',
            }
        )
    }

    return (
        <div className='container'>
            <div className='title'> Registration</div>
            <div className="content">
                <form action="" onSubmit={handleSubmit}>
                    <div className="user-details">
                        <div className='input-box'>
                            <span htmlFor="tFirstName">First Name</span>
                            <input type="text"
                                name='tFirstName'
                                value={teacherRegistraion.tFirstName}
                                onChange={handleInput}
                                id='tFirstName'
                                required
                            />

                        </div>

                        <div className='input-box'>
                            <span htmlFor="tLastName">Last Name</span>
                            <input type="text"
                                name='tLastName'
                                value={teacherRegistraion.tLastName}
                                onChange={handleInput}
                                id='tLastName'
                                required
                            />

                        </div>

                        <div className='input-box'>
                            <span htmlFor="tBirthday">Date of Birth</span>
                            <input type="date"
                                name='tBirthday'
                                value={teacherRegistraion.tBirthday}
                                onChange={handleInput}
                                id='tBirthday'
                                required
                            />

                        </div>

                        <div className='input-box'>
                            <span htmlFor="tFatherName">Father's Name</span>
                            <input type="text"
                                name='tFatherName'
                                value={teacherRegistraion.tFatherName}
                                onChange={handleInput}
                                id='tFatherName'
                                required
                            />

                        </div>

                        <div className='input-box'>
                            <span htmlFor="tMotherName">Mother's Name</span>
                            <input type="text"
                                name='tMotherName'
                                value={teacherRegistraion.tMotherName}
                                onChange={handleInput}
                                id='tMotherName'
                                required

                            />

                        </div>

                        <div className='input-box'>
                            <span htmlFor="tAadharNumber">Aadhar Numer</span>
                            <input type="number"
                                name='tAadharNumber'
                                value={teacherRegistraion.tAadharNumber}
                                onChange={handleInput}
                                id='tAadharNumber'
                                required

                            />

                        </div>

                        <div className='input-box'>
                            <span htmlFor="tEmail">Email</span>
                            <input type="email"
                                name='tEmail'
                                value={teacherRegistraion.tEmail}
                                onChange={handleInput}
                                id='tEmail'
                                required

                            />

                        </div>
                        <div className='input-box'>
                            <span htmlFor="tPhone">Contact Number</span>
                            <input type="number"
                                name='tPhone'
                                value={teacherRegistraion.tPhone}
                                onChange={handleInput}
                                id='tPhone'
                                required

                            />

                        </div>

                        <div className='input-box'>
                            <span htmlFor="tAltPhone">Alternate Contact Number</span>
                            <input type="number"
                                name='tAltPhone'
                                value={teacherRegistraion.tAltPhone}
                                onChange={handleInput}
                                id='tAltPhone'
                                required

                            />

                        </div>

                        <div className='input-box'>
                            <span htmlFor="tPermanentAddress">Permanent Address</span>
                            <input type="text"
                                name='tPermanentAddress'
                                value={teacherRegistraion.tPermanentAddress}
                                onChange={handleInput}
                                id='tPermanentAddress'
                                required

                            />

                        </div>

                        <div className='input-box'>
                            <span htmlFor="tCorrespondenceAddress">Correspondance Address</span>
                            <input type="text"
                                name='tCorrespondenceAddress'
                                value={teacherRegistraion.tCorrespondenceAddress}
                                onChange={handleInput}
                                id='tCorrespondenceAddress'
                                required

                            />

                        </div>

                        <div className='input-box file-box'>
                            <span htmlFor="tFile">Document  File</span>
                            <input type="file"
                                name='tFile'
                                value={teacherRegistraion.tFile}
                                onChange={handleInput}
                                id='tFile'
                                required

                            />

                        </div>
                    </div>
                    <div className="button">
                        <button type='submit'>Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TeacherRegistraion
