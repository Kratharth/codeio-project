import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Views
import Dashboard from './views/Dashboard';
import ProductList from './views/ProductList';
import UserList from './views/UserList';
//import Typography from './views/Typography';
// import Icons from './views/Icons';
import Account from './views/Account';
import TimeTables from './views/TimeTables'
import Settings from './views/Settings';
import SignUp from './views/SignUp';
import SignIn from './views/SignIn';
import TimeTable from './views/TimeTable';
import UnderDevelopment from './views/UnderDevelopment';
import NotFound from './views/NotFound';
import AddUser from './views/Admin/Users/index';
import TransferSession from 'views/Lecturer/TransferSession';

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
          <Typography type={match.params.type} />
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
          <UserList type={match.params.type} />
          }
          />
             <Route
           exact
           path="/:type/sem3"
           render={({match}) => 
          <Typography type={match.params.type} />
          }
          />
             <Route
           exact
           path="/:type/sem4"
           render={({match}) => 
          <Icons type={match.params.type} />
          }
          />
             <Route
           exact
           path="/:type/sem5"
           render={({match}) => 
          <Account type={match.params.type} />
          }
          />
             <Route
           exact
           path="/:type/sem6"
           render={({match}) => 
          <Settings type={match.params.type} />
          }
          />
           <Route
           exact
           path="/:type/account"
           render={({match}) => 
          <Account type={match.params.type} />
          }
          />
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
          <ProductList type={match.params.type} />
          }
          />
          <Route
           exact
           path="/:type/create-time-table"
           render={({match}) => 
          <Typography type={match.params.type} />
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
           path="/:type/admin"
           render={({match}) => 
          <Typography type={match.params.type} />
          }
          />
            <Route
           exact
           path="/:type/student"
           render={({match}) => 
          <Settings type={match.params.type} />
          }
          />
            <Route
           exact
           path="/:type/Lecturer"
           render={({match}) => 
          <UserList type={match.params.type} />
          }
          />
            <Route
           exact
           path="/:type/camera"
           render={({match}) => 
          <Dashboard type={match.params.type} />
          }
          />
            <Route
           exact
           path="/:type/mapping"
           render={({match}) => 
          <Icons type={match.params.type} />
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
         {/*<Route
          component={TimeTable}
          exact
          path="/sign-in"
        />*/}
         <Route
          component={TimeTables}
          exact
          path="/timetable"
        />
        <Route
          component={UnderDevelopment}
          exact
          path="/under-development"
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
        />
        <Route 
          component={TransferSession}
          exact
          path="/TransferSession"
        />
        <Redirect to="/not-found" />
      </Switch>
    );
  }
}
