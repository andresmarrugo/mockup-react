import React from 'react'
import Switch from '@material-ui/core/Switch'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import './style.css'
export default function index() {
    return (
        <React.Fragment>
            <div className="widgetContainer">
                <h4><span className="entypo-location"></span> Smart Filter</h4>
                <br/>
                <div className="switchCont">
                <FormControlLabel
                    className="switch"
                    value="start"
                    control={<Switch color="primary" />}
                    label={<span className="entypo-target"></span>}
                    labelPlacement="start"
                />
                <FormControlLabel
                    className="switch"
                    value="start"
                    control={<Switch color="primary" />}
                    label={<span className="entypo-heart"></span>}
                    labelPlacement="start"
                />
                <FormControlLabel
                    className="switch"
                    value="start"
                    control={<Switch color="primary" />}
                    label={<span className="entypo-direction"></span>}
                    labelPlacement="start"
                />
                </div>
                <br/>
                <form action="">
                    <h4>Status</h4>
                <input type="text" placeholder="Search"/>
                <button>DELIVERED</button>
            </form>
            </div>
            
        </React.Fragment>
    )
}
