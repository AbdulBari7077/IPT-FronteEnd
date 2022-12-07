import './ManageProfile.css'
import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link, useNavigate } from 'react-router-dom';
import { AgeRatingOptions } from '../../utils';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { EditProfile, getUserData } from '../../api/Api';
import { ToastContainer, toast } from 'react-toastify';

const ManageProfile = () => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const navigate = useNavigate();
    const [image, setImage] = React.useState('../../../src/assets/Netflix-avatar.png');
    const [subscription, setsubscription] = React.useState();
    const [Id, setId] = React.useState();
    const [name, setName] = React.useState();
    const [email, setEmail] = React.useState();
    const [maturity, setMaturity] = React.useState('General audiences (G)');
    const [userInfoFlag, setUserInfoFlag] = React.useState(false);
    const [maturityFlag, setMaturityFlag] = React.useState(false);
    
    async function handleSave(event) {
        event.preventDefault();
        const userUpdatedData = {
            UserId:Id,
            Name: name,
            Email: email,
            Avatar: image,
            Restriction: maturity,
            Subscription:subscription,
        }
        // console.log(userUpdatedData,"MANAGE PROFILE");
        // console.log("USERDATA: ",userData["token"]);
        const response = await EditProfile(userUpdatedData,userData["token"]);
        console.log(response,"MANAGE PROFILE response");
        if(response?.data?.userId)
        {
            console.log(response)
            toast.success("User Sucessfully Updated", {
                position: toast.POSITION.TOP_RIGHT,
                classNames:'toster'
            })
        }
        else{
            toast.error("Usaaaer Updation Failed", {
                position: toast.POSITION.TOP_RIGHT,
                classNames:'toster'
            })
        }

    }
    function handleResetPassword(event)
    {
        event.preventDefault();
        navigate(`/forgetPassword/${email}`);

    }
    React.useEffect(() => {
       
        if (!userData) {
            return navigate('/login');
        }
        else {
            (async ()=>{
                const getUserDataResponse = await getUserData(userData.uid,userData.token);
                console.log(getUserDataResponse.data,"MANAGE PROFILE")
                setId(getUserDataResponse.data.UserId)
                setEmail(getUserDataResponse.data.Email)
                setName(getUserDataResponse.data.Name)
                setsubscription(getUserDataResponse.data.Subscription)
                setMaturity(getUserDataResponse.data.Restriction)
                setImage(getUserDataResponse.data.Avatar)
            })();
           
            // return isSubscribed.data.message?navigate('/home'):navigate('/choosePlan');
            return navigate('/manageProfile');
        }
    }, []);
    return (
        <div className='manageprofilebody'>
            <ToastContainer />
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
                    <button className='back-button' onClick={() => { navigate('/home') }} >
                        <ArrowBackIosIcon />
                        Back
                    </button>
                    <hr className='hr' />
                    <div className='top-section'>
                        <h2 className='section-heading'>
                            User Information
                        </h2>
                        <div className='section-1'>
                            <img className='image' src={image} alt="" />
                            <div className='image-selector'>
                                <Select
                                    className='image-select'
                                    size='small'
                                    id="demo-simple-select"
                                    value={''}
                                    displayEmpty
                                    onChange={(event) => { setImage(event.target.value); }}
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
                                    ID : {Id}
                                </div>
                                {
                                    !userInfoFlag ?
                                        <>
                                            <div className='user-info'>
                                                Name : {name}
                                            </div>
                                            <div className='user-info'>
                                                Email : {email}
                                            </div>
                                        </> :
                                        <>
                                            <div className='input-div'>
                                                <label htmlFor="">Name:</label>
                                                <input className='input' value={name} type="" onChange={(event) => { setName(event.target.value) }} />
                                            </div>
                                            <div className='input-div'>
                                                <label htmlFor="">Email:</label>
                                                <input className='input' value={email} type='email' onChange={(event) => { setEmail(event.target.value) }} />
                                            </div>
                                        </>
                                }
                                <div className='user-info'>
                                    Subscription : {subscription}
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
                                                {maturity}
                                            </span>
                                        </> :
                                        <>
                                            <ArrowDropDownIcon className='dropdown-icon' />
                                            <select className="maturity-select" name='maturity-select' onChange={(event) => { setMaturity(event.target.value) }}>
                                                {AgeRatingOptions.map((item,index) => {
                                                    return <option key={index} className='option-select' value={item.label}>{item.label}</option>
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

                                <button  className='button-section-3' onClick={handleResetPassword}>
                                    RESET PASSWORD
                                </button>
                                <p className='p-section-2'>
                                    If you forgot the password or want to reset your password
                                </p>
                            </div>
                        </div>
                        <hr style={{ marginTop: "20px" }} />
                        <div className='section-2'>
                            <div className='section-last'>
                                <button className='button-section-3' onClick={handleSave}>
                                    SAVE
                                </button>
                                <button className='button-section-3' onClick={() => { window.location.reload(false); }}>
                                    CANCEL
                                </button>
                                <button href="/forgetPassword" className='button-section-3'>
                                    DELETE PROFILE
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