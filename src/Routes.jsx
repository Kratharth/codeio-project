import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Views
import Dashboard from './views/Dashboard';
import ProductList from './views/ProductList';
import UserList from './views/UserList';
import Typography from './views/Typography';
import Icons from './views/Icons';
import Account from './views/Account';
import Settings from './views/Settings';
import SignIn from './views/SignIn';
import NotFound from './views/NotFound';
import  MappingList  from './views/mapping';
import ProcessorList from './views/processor';
import CameraList from './views/camera';
import Timetable from 'views/Timetable';
import NotFound from './views/NotFound';
import AddUser from './views/Admin/index';
import TransferSession from './components/TransferSession/index';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Redirect
          exact
          from="/"
          to="/sign-in"
        />
        <Route
           exact
           path="/:type/dashboard"
           render={({match}) => 
          <Dashboard type={match.params.type} />
          }
          />
             <Route
           exact
           path="/:type/sem7"
           render={({match}) => 
          <ProductList type={match.params.type} />
          }
          />
             <Route
           exact
           path="/:type/sem8"
           render={({match}) => 
          <ProductList type={match.params.type} />
          }
          />
             <Route
           exact
           path="/:type/sem1"
           render={({match}) => 
          <ProductList type={match.params.type} />
          }
          />
             <Route
           exact
           path="/:type/sem2"
           render={({match}) => 
          <ProductList type={match.params.type} />
          }
          />
             <Route
           exact
           path="/:type/sem3"
           render={({match}) => 
          <ProductList type={match.params.type} />
          }
          />
             <Route
           exact
           path="/:type/sem4"
           render={({match}) => 
          <ProductList type={match.params.type} />
          }
          />
             <Route
           exact
           path="/:type/sem5"
           render={({match}) => 
          <ProductList type={match.params.type} />
          }
          />
             <Route
           exact
           path="/:type/sem6"
           render={({match}) => 
          <ProductList type={match.params.type} />
          }
          />
           <Route
           exact
           path="/:type/account"
           render={({match}) => 
          <Account type={match.params.type} />
          }
          />
          {/* <Route
           exact
           path="/:type/:userType"
           render={({match}) => 
          <Account type={match.params.type} userType={match.params.userType} /> 
          
          }
        /> */}
           <Route
           exact
           path="/:type/help"
           render={({match}) => 
          <UserList type={match.params.type} />
          }
          />
            <Route
           exact
           path="/:type/transfer"
           render={({match}) => 
          <TransferSession type={match.params.type} />
          }
          />
          <Route
           exact
           path="/:type/create-time-table"
           render={({match}) => 
          <Timetable type={match.params.type} />
          }
          />
            <Route
           exact
           path="/:type/view-time-table"
           render={({match}) => 
          <Icons type={match.params.type} />
          }
          />
            <Route
           exact
           path="/adduser/:userType"
           render={({match}) => 
          <AddUser type="admin" userType={match.params.userType}/>
          }
          />
            {/* <Route
           exact
           path="/:type/student"
           render={({match}) => 
          <AddUser type={match.params.type} />
          }
          />
            <Route
           exact
           path="/:type/Lecturer"
           render={({match}) => 
          <AddUser type={match.params.type} />
          }
          /> */}
            <Route
           exact
           path="/:type/camera"
           render={({match}) => 
          <CameraList type={match.params.type} />
          }
          />
            <Route
           exact
           path="/:type/mapping"
           render={({match}) => 
          <MappingList type={match.params.type} />
          }
          />
          <Route
           exact
           path="/:type/processor"
           render={({match}) => 
          <ProcessorList type={match.params.type} />
          }
          />
            <Route
           exact
           path="/:type/subjects"
           render={({match}) => 
          <Typography type={match.params.type} />
          }
          />
            <Route
           exact
           path="/:type/department"
           render={({match}) => 
          <Dashboard type={match.params.type} />
          }
          />
            <Route
           exact
           path="/:type/classrooms"
           render={({match}) => 
          <Typography type={match.params.type} />
          }
          />
            <Route
           exact
           path="/:type/deletevideos"
           render={({match}) => 
          <Settings type={match.params.type} />
          }
          />
            <Route
           exact
           path="/:type/addschedule"
           render={({match}) => 
          <Dashboard type={match.params.type} />
          }
          />
            <Route
           exact
           path="/:type/record"
           render={({match}) => 
          <Dashboard type={match.params.type} />
          }
          />
            <Route
           exact
           path="/:type/ds"
           render={({match}) => 
          <Typography type={match.params.type} />
          }
          />
            <Route
           exact
           path="/:type/cn"
           render={({match}) => 
          <Dashboard type={match.params.type} />
          }
          />
            <Route
           exact
           path="/:type/iot"
           render={({match}) => 
          <Icons type={match.params.type} />
          }
          />
           <Route
           exact
           path="/:type/processor"
           render={({match}) => 
          <UserList type={match.params.type} />
          }
          />
        {/* <Route
          component={SignUp}
          exact
          path="/sign-up"
        /> */}

        <Route
          component={SignIn}
          exact
          path="/sign-in"
        />
        <Route
          component={NotFound}
          exact
          path="/not-found"
        />
        <Route
          component={AddUser}
          exact
          path="/AddUser"
        />*/} 
        <Redirect to="/not-found" />
      </Switch>
    );
  }
}
