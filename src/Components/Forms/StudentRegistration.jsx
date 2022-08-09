import React, { useState } from 'react'
import './StudentRegistration.css'

const StudentRegistraion = () => {
    const [studentRegistraion, setStudentRegistration] = useState({
        sFirstName: '',
        sLastName: '',
        // tGender: '',
        sBirthDay: '',
        sReligion: '',
        sEmail: '',
        sPhone: '',
        sFatherName: '',
        sFatherEmail: '',
        sFatherPhone: '',
        sFatherAltPhone: '',
        sFatherOccupation: '',
        sMotherName: '',
        sMotherEmail: '',
        sMotherPhone: '',
        sMotherAltPhone: '',
        sMotherOccupation: '',
        sLocalGuardianName: '',
        sLocalGuardianEmail: '',
        sLocalGuardianPhone: '',
        sLocalGuardianAltPhone: '',
        sLocalGuardianOccupation: '',
        sPermanentAddress: '',
        sPermanentCity: '',
        sPermanentState: '',
        sPermanentPincode: '',
        sCorrespondenceAddress: '',
        sCorrespondenceCity: '',
        sCorrespondenceState: '',
        sCorrespondencePincode: '',
        sAadharNumber: '',
        sFile: '',
    })

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);

        setStudentRegistration({ ...studentRegistraion, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newRecord = { ...studentRegistraion, id: new Date().getTime().toString() }
        console.log(newRecord)
        setStudentRegistration(
            {
                sFirstName: '',
                sLastName: '',
                // tGender: '',
                sBirthDay: '',
                sReligion: '',
                sEmail: '',
                sPhone: '',
                sFatherName: '',
                sFatherEmail: '',
                sFatherPhone: '',
                sFatherAltPhone: '',
                sFatherOccupation: '',
                sMotherName: '',
                sMotherEmail: '',
                sMotherPhone: '',
                sMotherAltPhone: '',
                sMotherOccupation: '',
                sLocalGuardianName: '',
                sLocalGuardianEmail: '',
                sLocalGuardianPhone: '',
                sLocalGuardianAltPhone: '',
                sLocalGuardianOccupation: '',
                sPermanentAddress: '',
                sPermanentCity: '',
                sPermanentState: '',
                sPermanentPincode: '',
                sCorrespondenceAddress: '',
                sCorrespondenceCity: '',
                sCorrespondenceState: '',
                sCorrespondencePincode: '',
                sAadharNumber: '',
                sFile: '',
            }
        )
    }

    return (
        <div className="container">
            <header>Registration</header>

            <form action="#" onSubmit={handleSubmit}>
                <div className="form first">
                    <div className="details personal">
                        <span className='title'>Personal Details</span>

                        <div className="fields">
                            <div className="input-field">
                                <label htmlFor="sFirstName">First Name</label>
                                <input type="text"
                                    name='sFirstName'
                                    value={studentRegistraion.sFirstName}
                                    onChange={handleInput}
                                    id='sFirstName'
                                />
                            </div>

                            <div className="input-field">
                                <label htmlFor="sLastName">Last Name</label>
                                <input type="text"
                                    name='sLastName'
                                    value={studentRegistraion.sLastName}
                                    onChange={handleInput}
                                    id='sLastName'
                                />
                            </div>

                            <div className="input-field">
                                <label htmlFor="sBirthDay">Date of Birth</label>
                                <input type="date"
                                    name='sBirthDay'
                                    value={studentRegistraion.sBirthDay}
                                    onChange={handleInput}
                                    id='sBirthDay'

                                />
                            </div>

                            <div className="input-field">
                                <label htmlFor="sEmail">Email</label>
                                <input type="email"
                                    name='sEmail'
                                    value={studentRegistraion.sEmail}
                                    onChange={handleInput}
                                    id='sEmail'
                                />
                            </div>

                            <div className="input-field">
                                <label htmlFor="sPhone">Contact Number</label>
                                <input type="number"
                                    name='sPhone'
                                    value={studentRegistraion.sPhone}
                                    onChange={handleInput}
                                    id='sPhone'

                                />

                            </div>
                            <div className="input-field">
                                <label htmlFor="sReligion">Religion</label>
                                <input type="text"
                                    name='sReligion'
                                    value={studentRegistraion.sReligion}
                                    onChange={handleInput}
                                    id='sReligion'

                                />
                            </div>
                            <div className="input-field">
                                <label htmlFor="sAadharNumber">Aadhar Numer</label>
                                <input type="number"
                                    name='sAadharNumber'
                                    value={studentRegistraion.sAadharNumber}
                                    onChange={handleInput}
                                    id='sAadharNumber'

                                />
                            </div>
                        </div>
                    </div>

                    <div className="details ID">
                        <span className="title">Parent Details</span>

                        <div className="fields">
                            <div className="input-field">
                                <label htmlFor="sFatherName">Father's Name</label>
                                <input type="text"
                                    name='sFatherName'
                                    value={studentRegistraion.sFatherName}
                                    onChange={handleInput}
                                    id='sFatherName'
                                />
                            </div>
                            <div className="input-field">
                                <label htmlFor="sFatherEmail">Father's Email</label>
                                <input type="email"
                                    name='sFatherEmail'
                                    value={studentRegistraion.sFatherEmail}
                                    onChange={handleInput}
                                    id='sFatherEmail'
                                />
                            </div>
                            <div className="input-field">
                                <label htmlFor="sFatherPhone">Father's Contact Number</label>
                                <input type="number"
                                    name='sFatherPhone'
                                    value={studentRegistraion.sFatherPhone}
                                    onChange={handleInput}
                                    id='sFatherPhone'
                                />
                            </div>
                            <div className="input-field">
                                <label htmlFor="sFatherAltPhone">Father's Alternative Contact Number</label>
                                <input type="number"
                                    name='sFatherAltPhone'
                                    value={studentRegistraion.sFatherAltPhone}
                                    onChange={handleInput}
                                    id='sFatherAltPhone'
                                />
                            </div>
                            <div className="input-field">
                                <label htmlFor="sFatherOccupation">Father's Occupation</label>
                                <input type="text"
                                    name='sFatherOccupation'
                                    value={studentRegistraion.sFatherOccupation}
                                    onChange={handleInput}
                                    id='sFatherOccupation'
                                />
                            </div>
                            <hr />
                            <div className="input-field">
                                <label htmlFor="sMotherName">Mother's Name</label>
                                <input type="text"
                                    name='sMotherName'
                                    value={studentRegistraion.sMotherName}
                                    onChange={handleInput}
                                    id='sMotherName'
                                />
                            </div>
                            <div className="input-field">
                                <label htmlFor="sMotherEmail">Mother's Email</label>
                                <input type="email"
                                    name='sMotherEmail'
                                    value={studentRegistraion.sMotherEmail}
                                    onChange={handleInput}
                                    id='sMotherEmail'
                                />
                            </div>
                            <div className="input-field">
                                <label htmlFor="sMotherPhone">Mother's Contact Number</label>
                                <input type="number"
                                    name='sMotherPhone'
                                    value={studentRegistraion.sMotherPhone}
                                    onChange={handleInput}
                                    id='sMotherPhone'
                                />
                            </div>
                            <div className="input-field">
                                <label htmlFor="sMotherAltPhone">Mother's Alternative Contact Number</label>
                                <input type="number"
                                    name='sMotherAltPhone'
                                    value={studentRegistraion.sMotherAltPhone}
                                    onChange={handleInput}
                                    id='sMotherAltPhone'
                                />
                            </div>
                            <div className="input-field">
                                <label htmlFor="sMotherOccupation">Mother's Occupation</label>
                                <input type="text"
                                    name='sMotherOccupation'
                                    value={studentRegistraion.sMotherOccupation}
                                    onChange={handleInput}
                                    id='sMotherOccupation'
                                />
                            </div>
                            <hr />
                            <div className="input-field">
                                <label htmlFor="sLocalGuardianName">Local Guardian's Name</label>
                                <input type="text"
                                    name='sLocalGuardianName'
                                    value={studentRegistraion.sLocalGuardianName}
                                    onChange={handleInput}
                                    id='sLocalGuardianName'
                                />
                            </div>
                            <div className="input-field">
                                <label htmlFor="sLocalGuardianEmail">Local Guardian's Email</label>
                                <input type="email"
                                    name='sLocalGuardianEmail'
                                    value={studentRegistraion.sLocalGuardianEmail}
                                    onChange={handleInput}
                                    id='sLocalGuardianEmail'
                                />
                            </div>
                            <div className="input-field">
                                <label htmlFor="sLocalGuardianPhone">Local Guardian's Contact Number</label>
                                <input type="number"
                                    name='sLocalGuardianPhone'
                                    value={studentRegistraion.sLocalGuardianPhone}
                                    onChange={handleInput}
                                    id='sLocalGuardianPhone'
                                />
                            </div>
                            <div className="input-field">
                                <label htmlFor="sLocalGuardianAltPhone">Local Guardian's Alternative Number</label>
                                <input type="number"
                                    name='sLocalGuardianAltPhone'
                                    value={studentRegistraion.sLocalGuardianAltPhone}
                                    onChange={handleInput}
                                    id='sLocalGuardianAltPhone'
                                />
                            </div>
                            <div className="input-field">
                                <label htmlFor="sLocalGuardianOccupation">Local Guardian's Occupation</label>
                                <input type="text"
                                    name='sLocalGuardianOccupation'
                                    value={studentRegistraion.sLocalGuardianOccupation}
                                    onChange={handleInput}
                                    id='sLocalGuardianOccupation'
                                />
                            </div>

                        </div>
                    </div>
                    <div className="details Address">
                        <span className="title">Address Details</span>

                        <div className="fields">
                            <div className="input-field">
                                <label htmlFor="sPermanentAddress">Permanent Address</label>
                                <input type="text"
                                    name='sPermanentAddress'
                                    value={studentRegistraion.sPermanentAddress}
                                    onChange={handleInput}
                                    id='sPermanentAddress'
                                />
                            </div>

                            <div className="input-field">
                                <label htmlFor="sPermanentCity">City</label>
                                <input type="text"
                                    name='sPermanentCity'
                                    value={studentRegistraion.sPermanentCity}
                                    onChange={handleInput}
                                    id='sPermanentCity'
                                />
                            </div>
                            <div className="input-field">
                                <label htmlFor="sPermanentState">State</label>
                                <input type="text"
                                    name='sPermanentState'
                                    value={studentRegistraion.sPermanentState}
                                    onChange={handleInput}
                                    id='sPermanentState'
                                />
                            </div>
                            <div className="input-field">
                                <label htmlFor="sPermanentPincode">Pincode</label>
                                <input type="number"
                                    name='sPermanentPincode'
                                    value={studentRegistraion.sPermanentPincode}
                                    onChange={handleInput}
                                    id='sPermanentPincode'
                                />
                            </div>
                            <hr />
                            <div className="input-field">
                                <label htmlFor="sCorrespondenceAddress">Correspondance Address</label>
                                <input type="text"
                                    name='sCorrespondenceAddress'
                                    value={studentRegistraion.sCorrespondenceAddress}
                                    onChange={handleInput}
                                    id='sCorrespondenceAddress'
                                />
                            </div>
                            <div className="input-field">
                                <label htmlFor="sCorrespondenceCity">City</label>
                                <input type="text"
                                    name='sCorrespondenceCity'
                                    value={studentRegistraion.sCorrespondenceCity}
                                    onChange={handleInput}
                                    id='sCorrespondenceCity'
                                />
                            </div>
                            <div className="input-field">
                                <label htmlFor="sCorrespondenceState">State</label>
                                <input type="text"
                                    name='sCorrespondenceState'
                                    value={studentRegistraion.sCorrespondenceState}
                                    onChange={handleInput}
                                    id='sCorrespondenceState'
                                />
                            </div>
                            <div className="input-field">
                                <label htmlFor="sCorrespondencePincode">Pincode</label>
                                <input type="number"
                                    name='sCorrespondencePincode'
                                    value={studentRegistraion.sCorrespondencePincode}
                                    onChange={handleInput}
                                    id='sCorrespondencePincode'
                                />
                            </div>
                        </div>
                    </div>
                    <div className="details document file-box">
                        <span className="title">Documents</span>

                        <div className="fields">
                            <div className="input-field">
                                <label htmlFor="sFile">Document  File</label>
                                <input type="file"
                                    name='sFile'
                                    value={studentRegistraion.sFile}
                                    onChange={handleInput}
                                    id='sFile'
                                />
                            </div>
                        </div>
                    </div>
                    <div className="button">
                        <button type='submit'>Register</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default StudentRegistraion
