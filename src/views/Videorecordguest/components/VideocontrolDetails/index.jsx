import React, { Component } from 'react';

// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Button, TextField} from '@material-ui/core';

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
//import SwipeableViews from 'react-swipeable-views';

// Shared components
import {
  Portlet,
  PortletHeader,
  PortletLabel,
  PortletContent,
  PortletFooter
} from 'components';

// Component styles
import styles from './styles';



class Videoedit extends Component {

  state = {
values:{
    title:'',
    description:'',
   guestlec1:false,
   guestlec2:false,
    lecturename:'',
    room:'',
    value:'',
    sem:'',
    faculty:'',
    classroom:'',
    course:''


  },


  };


  handleChangeTitle = e => {
    this.setState({
      title: e.target.value
    });
  };
  handleChangeDescription = e => {
    this.setState({
      description: e.target.value
    });
  };

       handleChangeRoom = e => {
         this.setState({
           room: e.target.value
         });
       };
       handleChangeLecturername = e => {
         this.setState({
           lecturername: e.target.value
         });
       };

       handleChangeSem = e => {
         this.setState({
           sem: e.target.value
         });
       };
       handleChangecourse = e => {
         this.setState({
           course: e.target.value
         });
       };

       handleChangeclassroom = e => {
         this.setState({
           classroom: e.target.value
         });
       };
       handleChangefaculty = e => {
         this.setState({
           faculty: e.target.value
         });
       };


       clicked1=(e)=>{
         this.setState({
           guestlec:!this.state.guestlec,
            facultylec:false
         })
       }
       clicked2=(e)=>{
         this.setState({
           facultylec:!this.state.facultylec,
              guestlec:false,
         })
       }



 renderForm1(classes,lecturername,room){
   if(this.state.guestlec)
  {
    return (
      <div>
      <TextField
        className={classes.textField}
        //helperText="Please enter the description"
        label="Lecturer name"
        margin="dense"
        required
        value={lecturername}
        variant="outlined"
        onChange={this.handleChangeLecturername}
        variant="outlined"
      required
    />
    <br/><br/>
    <TextField
      className={classes.textField}

      label="Room number"
      margin="dense"
      required
      value={room}
      variant="outlined"
      onChange={this.handleChangeRoom}
      variant="outlined"
    required
  />
  <br/>
      </div>
    )

  }


}

renderForm2(classes,sem,classroom,faculty,course){
  if(this.state.facultylec)
 {

   return (
     <div>

             <TextField

                 select
                 label="Sem"
                 className={classes.textField}
                 value={sem}
                 onChange={this.handleChangeSem}
                 SelectProps={{
                   MenuProps: {
                     className: classes.menu,
                   },
                 }}
                 helperText="Please select the sem"
                 margin="dense"
                 variant="outlined"
               >
                   <MenuItem value="">
                     <em>None</em>
                   </MenuItem>
                   <MenuItem value={"1"}>1</MenuItem>
                   <MenuItem value={"2"}>2</MenuItem>
                   <MenuItem value={"3"}>3</MenuItem>
               </TextField>

       <br/><br/>



         <TextField

             select
             label="course"
             className={classes.textField}
             value={course}
             onChange={this.handleChangecourse}
             SelectProps={{
               MenuProps: {
                 className: classes.menu,
               },
             }}
             helperText="Please select the course"
             margin="dense"
             variant="outlined"
           >
               <MenuItem value="">
                 <em>None</em>
               </MenuItem>
               <MenuItem value={"DC"}>DC</MenuItem>
               <MenuItem value={"DS"}>DS</MenuItem>
               <MenuItem value={"JAVA"}>JAVA</MenuItem>
           </TextField>

     <br/><br/>


     <TextField

         select
         label="faculty"
         className={classes.textField}
         value={faculty}
         onChange={this.handleChangefaculty}
         SelectProps={{
           MenuProps: {
             className: classes.menu,
           },
         }}
         //helperText="Please select the faculty"
         margin="dense"
         variant="outlined"
       >
           <MenuItem value="">
             <em>None</em>
           </MenuItem>
           <MenuItem value={"grp"}>grp</MenuItem>
           <MenuItem value={"grp"}>grp</MenuItem>

       </TextField>

     <br/><br/>
     <TextField


         label="class room"
         className={classes.textField}
         value={classroom}
         onChange={this.handleChangeclassroom}
       required
         helperText="Enter classroom number"
         margin="dense"
         variant="outlined"
       >

       </TextField>

     <br/><br/>

     </div>
   )

 }


}



  render() {


    const { classes, className, ...rest } = this.props;
    const { title,description,lecturername,room,sem,classroom,faculty,course} = this.state;



    const rootClassName = classNames(classes.root, className);


    return (
      <Portlet
        {...rest}
        className={rootClassName}
      >
        <PortletHeader>
          <PortletLabel
            //subtitle="The Video details can be editted"
            title="Record"
          />
        </PortletHeader>
        <PortletContent noPadding>
          <form
            autoComplete="off"
            noValidate
          >
          <div className={classes.field}>


            <TextField
              className={classes.textField}
              //helperText="Please enter the title"
              label="Title"
              margin="dense"
              required
              value={title}
              variant="outlined"
              onChange={this.handleChangeTitle}
              variant="outlined"
            required
            />
            <br/>
            <br/>
            <TextField
              className={classes.textField}
              //helperText="Please enter the description"
              label="Description"
              margin="dense"
              required
              value={description}
              variant="outlined"
              onChange={this.handleChangeDescription}
              variant="outlined"
            required
          />
          <br/>
          <br/>
          <Button variant="contained" size="medium" color=""
          className={classes.margin}
          onClick={this.clicked1 }
                    >
            Guest Lecturer
          </Button>

          <Button variant="contained" size="medium" color=""
          className={classes.margin}
          onClick={this.clicked2 }
                    >
             Lecturer
          </Button>

<br/><br/>

  {this.renderForm1(classes,lecturername,room)}
 {this.renderForm2(classes,sem,classroom,faculty,course)}

<br/>

</div>
  <div>

        <Button variant="contained" size="medium" color="" className={classes.margin}>
          Start
        </Button>
        <Button variant="contained" size="medium" color="" className={classes.margin}>
          Pause/Resume
        </Button>
        <Button variant="contained" size="medium" color="" className={classes.margin}>
          Stop
        </Button>


      </div>

  </form>
        </PortletContent>
        <PortletFooter className={classes.portletFooter}>
          <Button
            color="primary"
            variant="contained"
          >
            Save
          </Button>
        </PortletFooter>
      </Portlet>
    );
  }
}

Videoedit.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Videoedit);
