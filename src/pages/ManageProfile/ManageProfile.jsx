import './ManageProfile.css'
import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link, useNavigate } from 'react-router-dom';
import { AgeRatingOptions } from '../../utils';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const ManageProfile = () => {
    const navigate = useNavigate();
    const [image, setImage] = React.useState('');
    const [userInfoFlag, setUserInfoFlag] = React.useState(false);
    const [maturityFlag, setMaturityFlag] = React.useState(false);

    const handleChangeImage = (event) => {
        console.log(event.target.value);
        setImage(event.target.value);
    };
    return (
        <div className='manageprofilebody'>
            <div className="header--logo">
                <a href="/">
                    <img alt="Netflix" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" />
                </a>
            </div>
            <div className='main-body'>
                <div className='main-div'>
                    <h2 className='heading'>
                        Manage Profile
                    </h2>
                    <button className='back-button' onClick={() => { navigate(-1) }} >
                        <ArrowBackIosIcon />
                        Back
                    </button>
                    <hr className='hr' />
                    <div className='top-section'>
                        <h2 className='section-heading'>
                            User Information
                        </h2>
                        <div className='section-1'>
                            <img className='image' src={!image ? '../../../src/assets/Netflix-avatar.png' : image} alt="" />
                            <div className='image-selector'>
                                <Select
                                    className='image-select'
                                    size='small'
                                    id="demo-simple-select"
                                    value={''}
                                    displayEmpty
                                    onChange={handleChangeImage}
                                >
                                    {/* <MenuItem value="">Select Image </MenuItem> */}
                                    <MenuItem value={'../../../src/assets/Netflix-avatar.png'}><img className='image-dropdown' src="../../../src/assets/Netflix-avatar.png" alt="" /> </MenuItem>
                                    <MenuItem value={'../../../src/assets/avatar2.png'}><img className='image-dropdown' src="../../../src/assets/avatar2.png" alt="" /></MenuItem>
                                    <MenuItem value={'../../../src/assets/avatar3.jpg'}><img className='image-dropdown' src="../../../src/assets/avatar3.jpg" alt="" /></MenuItem>
                                    <MenuItem value={'../../../src/assets/avatar4.png'}><img className='image-dropdown' src="../../../src/assets/avatar4.png" alt="" /></MenuItem>
                                    <MenuItem value={'../../../src/assets/avatar5.jpg'}><img className='image-dropdown' src="../../../src/assets/avatar5.jpg" alt="" /></MenuItem>
                                    <MenuItem value={'../../../src/assets/avatar6.png'}><img className='image-dropdown' src="../../../src/assets/avatar6.png" alt="" /></MenuItem>
                                </Select>
                            </div>
                            <div className='main-section'>

                                <div className='user-info'>
                                    ID : dsadsadasdasdasdasdas
                                </div>
                                {
                                    !userInfoFlag ?
                                        <>
                                            <div className='user-info'>
                                                Name : ahmed
                                            </div>
                                            <div className='user-info'>
                                                Email : ahmed@gmail.com
                                            </div>
                                        </> :
                                        <>
                                            <div className='input-div'>
                                                <label htmlFor="">Name:</label>
                                                <input className='input' type="" required />
                                            </div>
                                            <div className='input-div'>
                                                <label htmlFor="">Email:</label>
                                                <input className='input' type='email' required />
                                            </div>
                                        </>
                                }
                                <div className='user-info'>
                                    Subscription : Basic
                                </div>

                            </div>
                            <button className='button-section-2' onClick={() => { setUserInfoFlag(!userInfoFlag); }}>
                                {!userInfoFlag ? 'EDIT' : 'SAVE'}
                            </button>
                        </div>
                        <hr style={{ marginTop: "20px" }} />
                        <div className='section-2'>
                            <h2 className='section-heading'>
                                Maturity Settings
                            </h2>
                            <div className='section-2-maturity'>
                                {
                                    !maturityFlag ?
                                        <>
                                            <span className='span-section-2'>
                                                ALL MATURITY RATINGS
                                            </span>
                                        </> :
                                        <>
                                            <ArrowDropDownIcon className='dropdown-icon'/>
                                            <select className="maturity-select" name='maturity-select'>
                                                {AgeRatingOptions.map((item)=>{
                                                    return  <option className='option-select' value={item.value}>{item.label}</option>
                                                })}
                                            </select>
                                        </>
                                }
                                <p className='p-section-2'>
                                    Show titles of all maturity rating for your profile
                                </p>
                                <button className='button-section-2' onClick={() => { setMaturityFlag(!maturityFlag) }}>
                                    {!maturityFlag ? 'EDIT' : 'SAVE'}
                                </button>
                            </div>
                        </div>
                        <hr style={{ marginTop: "20px" }} />
                        <div className='section-2'>
                            <h2 className='section-heading'>
                                Account Settings
                            </h2>
                            <div className='section-3'>

                                <button className='button-section-3'>
                                    <Link to="/forgetPassword" style={{ color: " rgb(173, 168, 168)" }}>RESET PASSWORD</Link>
                                </button>
                                <p className='p-section-2'>
                                    If you forgot the password or want to reset your password
                                </p>
                            </div>
                        </div>
                        <hr style={{ marginTop: "20px" }} />
                        <div className='section-2'>
                            <div className='section-last'>
                                <button className='button-section-3'>
                                    SAVE
                                </button>
                                <button className='button-section-3'>
                                    CANCEL
                                </button>
                                <button href="/forgetPassword" className='button-section-3'>
                                    DELETE RPOFILE
                                </button>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>

    );
}

export default ManageProfile;