import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// Views
import Dashboard from './views/Dashboard';
import UserList from './views/UserList';
import Typography from './views/Typography';
import Icons from './views/Icons';
import Account from './views/Account';
import Settings from './views/Settings';
import SignIn from './views/SignIn';
import MappingList from './views/mapping';
import ProcessorList from './views/processor';
import CameraList from './views/camera';
import Timetable from 'views/Timetable';
import AddUser from './views/Admin/index';
import TransferSession from './components/TransferSession/index';
import NotFound from './views/NotFound';
import Videocontrol from './views/Videocontrol';
import Videoedit from './views/Videoedit';
import Courseedit from './views/Courseedit';
//import MyVideos from './views/MyVideos';
import ProductListedit from './views/ProductListedit';
import ProductList from './views/ProductList';
import Videoplay from './views/Videoplay';
import Videorecordguest from './views/Videorecordguest';

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
          render={({ match }) =>
            <Dashboard type={match.params.type} />
          }
        />

        <Route
          exact
          path="/:type/sem1"
          render={({ match }) =>
            <ProductList type={match.params.type} />
          }
        />

        {/* <Route
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
          /> */}
        <Route
          exact
          path="/:type/camera"
          render={({ match }) =>
            <CameraList type={match.params.type} />
          }
        />
        <Route
          exact
          path="/:type/mapping"
          render={({ match }) =>
            <MappingList type={match.params.type} />
          }
        />
        <Route
          exact
          path="/:type/processor"
          render={({ match }) =>
            <ProcessorList type={match.params.type} />
          }
        />
        <Route
          exact
          path="/:type/subjects"
          render={({ match }) =>
            <Typography type={match.params.type} />
          }
        />
        {/* <Route
          exact
          path="/:type/department"
          render={({ match }) =>
            <Dashboard type={match.params.type} />
          }
        /> */}
        <Route
          exact
          path="/:type/classrooms"
          render={({ match }) =>
            <Typography type={match.params.type} />
          }
        />
        <Route
          exact
          path="/:type/deletevideos"
          render={({ match }) =>
            <Settings type={match.params.type} />
          }
        />
        <Route
          exact
          path="/:type/addschedule"
          render={({ match }) =>
            <Dashboard type={match.params.type} />
          }
        />
        <Route
          exact
          path="/:type/record"
          render={({ match }) =>
            <Videocontrol type={match.params.type} />
          }
        />
        <Route
          exact
          path="/:type/videorecordguest"
          render={({ match }) =>
            <Videorecordguest type={match.params.type} />
          }
        />
        {/*added route for videoedit*/}

        <Route
          exact
          path="/:type/videoedit"
          render={({ match }) =>
            <Videoedit type={match.params.type} />
          }
        />

        {/*added route for videoplay*/}
        <Route
          exact
          path="/:type/videoplay"
          render={({ match }) =>
            <Videoplay type={match.params.type} />
          }
        />



        {/*added route for courseedit*/}

        <Route
          exact
          path="/:type/courseedit"
          render={({ match }) =>
            <Courseedit type={match.params.type} />
          }
        />

        <Route
          exact
          path="/:type/myvideos"
          render={({ match }) =>
            <ProductListedit type={match.params.type} />
          }
        />



        <Route
          exact
          path="/:type/ds"
          render={({ match }) =>
            <Typography type={match.params.type} />
          }
        />
        <Route
          exact
          path="/:type/cn"
          render={({ match }) =>
            <Dashboard type={match.params.type} />
          }
        />
        <Route
          exact
          path="/:type/iot"
          render={({ match }) =>
            <Icons type={match.params.type} />
          }
        />
        <Route
          exact
          path="/:type/processor"
          render={({ match }) =>
            <UserList type={match.params.type} />
          }
        />
        <Route
          // component={SignUp}
          exact
          path="/:type/transfer"
          render={({ match }) =>
            <TransferSession type={match.params.type} />
          }
        />
        {/* <Route
          exact
          path="/:type/create-time-table"
          render={({match}) =>
        <Timetable type={match.params.type} />
        }
        />
          {/* <Route */}
        {/* exact
          path="/:type/view-time-table"
          render={({match}) =>
        <Icons type={match.params.type} />
        }
        />
        <Route
          exact
          path="/:type/create-time-table"
          render={({match}) =>
        <Timetable type={match.params.type} />
        }
        /> */}
        <Route
          exact
          path="/adduser/:userType"
          render={({ match }) =>
            <AddUser type="admin" userType={match.params.userType} />
          }
        />
        <Route
          exact
          path="/:type/camera"
          render={({ match }) =>
            <CameraList type={match.params.type} />}
        />
        <Route
          exact
          path="/:type/mapping"
          render={({ match }) =>
            <MappingList type={match.params.type} />}
        />
        <Route
          exact
          path="/:type/processor"
          render={({ match }) =>
            <ProcessorList type={match.params.type} />}
        />
        <Route
          exact
          path="/:type/subjects"
          render={({ match }) =>
            <Typography type={match.params.type} />}
        />
        <Route
          exact
          path="/:type/department"
          render={({ match }) =>
            <Dashboard type={match.params.type} />}
        />
        <Route
          exact
          path="/:type/classrooms"
          render={({ match }) =>
            <Typography type={match.params.type} />}
        />
        <Route
          exact
          path="/:type/deletevideos"
          render={({ match }) =>
            <Settings type={match.params.type} />}
        />
        <Route
          exact
          path="/:type/addschedule"
          render={({ match }) =>
            <Dashboard type={match.params.type} />}
        />
        <Route
          exact
          path="/:type/record"
          render={({ match }) =>
            <Videocontrol type={match.params.type} />}
        />
        <Route
          exact
          path="/:type/videoedit"
          render={({ match }) =>
            <Videoedit type={match.params.type} />}
        />
        <Route
          exact
          path="/:type/courseedit"
          render={({ match }) =>
            <Courseedit type={match.params.type} />}
        />
        <Route
          exact
          path="/:type/ds"
          render={({ match }) =>
            <Typography type={match.params.type} />}
        />
        <Route
          exact
          path="/:type/cn"
          render={({ match }) =>
            <Dashboard type={match.params.type} />}
        />
        <Route
          exact
          path="/:type/iot"
          render={({ match }) =>
            <Icons type={match.params.type} />}
        />
        <Route
          exact
          path="/:type/processor"
          render={({ match }) =>
            <UserList type={match.params.type} />}
        />
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
        />
        <Redirect to="/not-found" />
      </Switch>
    );
  }
}
