import React, { useState } from 'react';
import './ChoosePlan.css';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
const ChoosePlan = () => {
    const Plan={
        "1":'Basic',
        "2":'Standard',
        "3":"Premiuim"
    }
    const [selectPlan, setSelectPlan] = useState('');
    function handlePlan(event)
    {
        setSelectPlan(Plan[event.currentTarget.id])
    }
    function handleSelectPlan()
    {
        console.log(selectPlan,"---------------------")
    }
    return (
        <div className='choose-plan-main-div'>
            <div className='main'>
                <div className='choose-plan-header' style={{padding:"10px"}}>
                    <h1>
                        Choose a plan that's right for you
                    </h1>
                    <h4 style={{color:"gray"}}>
                        UPGRADE ANY TIME
                    </h4>
                </div>
                <div className='choose-plan-body'>
                    <div className='choose-plan-body-child-leftright'>
                        <div className=' section' style={{ color: 'white' }}>
                           <h2>
                                HD available
                           </h2>
                        </div>
                        <div className=' section' style={{ color: 'white' }}>
                            <h2>
                               Ultra HD available
                           </h2>
                        </div>
                        <div className=' section' style={{ color: 'white' }}>
                            <h2>
                                Unlimited Watch
                           </h2>
                        </div>
                        <div className=' section' style={{ color: 'white'}}>
                            <h2>
                                First Month Free
                           </h2>
                        </div>
                    </div>
                    <button className='choose-plan-body-child'  id='1' onClick={handlePlan}>
                        <div style={{ color: " rgb(68, 94, 239)" }} className='section' >
                            <h2>BASIC</h2>
                        </div>
                        <div className='choose-plan-body-child-price' style={{ background: "rgb(68, 94, 239)" }}>
                            <h1>$7.99</h1>
                            <h4>PER MONTH</h4>
                        </div>
                        <div className='child section' style={{ color: 'red' }}>
                            <CloseIcon />
                        </div>
                        <div className='child section' style={{ color: 'red' }}>
                            <CloseIcon />
                        </div>
                        <div className='child section' style={{ color: 'green' }}>
                            <DoneIcon />
                        </div>
                        <div className='child section' style={{ color: 'green', border: 'none' }}>
                            <DoneIcon />
                        </div>

                    </button>
                    <button className='choose-plan-body-child' id='2' onClick={handlePlan}>
                        <div style={{ color: "red" }} className='section' >
                            <h2>STANDARD</h2>
                        </div>
                        <div className='choose-plan-body-child-price' style={{ background: "red" }}>
                            <h1>$9.99</h1>
                            <h4>PER MONTH</h4>
                        </div>
                        <div className='child section' style={{ color: 'red' }}>
                            <CloseIcon />
                        </div>
                        <div className='child section' style={{ color: 'green' }}>
                            <DoneIcon />
                        </div>
                        <div className='child section' style={{ color: 'green' }}>
                            <DoneIcon />
                        </div>
                        <div className='child section' style={{ color: 'green', border: 'none' }}>
                            <DoneIcon />
                        </div>

                    </button>
                    <button className='choose-plan-body-child' id='3' onClick={handlePlan}>
                        <div style={{ color: " blueviolet" }} className='section' >
                            <h2>PREMIUIM</h2>
                        </div>
                        <div className='choose-plan-body-child-price' style={{ background: "blueviolet" }}>
                            <h1>$13.99</h1>
                            <h4>PER MONTH</h4>
                        </div>
                        <div className='child section' style={{ color: 'green' }}>
                            <DoneIcon />
                        </div>
                        <div className='child section' style={{ color: 'green' }}>
                            <DoneIcon />
                        </div>
                        <div className='child section' style={{ color: 'green' }}>
                            <DoneIcon />
                        </div>
                        <div className='child section' style={{ color: 'green', border: 'none' }}>
                            <DoneIcon />
                        </div>

                    </button>
                    <div className='choose-plan-body-child-leftright'>
                        <div className=' section' style={{ color: 'white' }}>
                           <h2>
                                HD available
                           </h2>
                        </div>
                        <div className=' section' style={{ color: 'white' }}>
                            <h2>
                               Ultra HD available
                           </h2>
                        </div>
                        <div className=' section' style={{ color: 'white' }}>
                            <h2>
                                Unlimited Watch
                           </h2>
                        </div>
                        <div className=' section' style={{ color: 'white'}}>
                            <h2>
                                First Month Free
                           </h2>
                        </div>
                    </div>
                </div>
                <div className='choose-plan-footer'>
                    {
                        selectPlan?
                        <button className='button-footer' onClick={handleSelectPlan}>
                            {`Proceed with ${selectPlan}`}
                        </button>
                        :
                        ''
                    }

                </div>
            </div>

        </div>
    );
}

export default ChoosePlan;