import React, { Component, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';
// user context
//import UserContext from './userContext/userContext';
// Views
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const DeptDashboard = React.lazy(() => import('./views/DeptDashboard'));
//const UserList = React.lazy(() => import('./views/UserList'));
const Typography = React.lazy(() => import('./views/Typography'));
//const Icons = React.lazy(() => import('./views/Icons'));
const Account = React.lazy(() => import('./views/Account'));
const Settings = React.lazy(() => import('./views/Settings'));
const SignIn = React.lazy(() => import('./views/SignIn'));
const MappingList = React.lazy(() => import('./views/mapping'));
const ProcessorList = React.lazy(() => import('./views/processor'));
const CameraList = React.lazy(() => import('./views/camera'));
const Timetable = React.lazy(() => import('./views/TimeTable'));
const AddUser = React.lazy(() => import('./views/Admin'));
//const TransferSession = React.lazy(() => import('./components/TransferSession'));
const NotFound = React.lazy(() => import('./views/NotFound'));
const Videocontrol = React.lazy(() => import('./views/Videocontrol'));
const Videoedit = React.lazy(() => import('./views/Videoedit'));
const Courseedit = React.lazy(() => import('./views/Courseedit'));
const ProductList = React.lazy(() => import('./views/ProductList'));
const ProductListedit = React.lazy(() => import('./views/ProductListedit'));
const Videoplay = React.lazy(() => import('./views/Videoplay'));
const Videorecordguest = React.lazy(() => import('./views/Videorecordguest'));

export default class Routes extends Component {
  render() {
    return (
      <Suspense fallback={<LinearProgress />}>
        <Switch>
          <Redirect
            exact
            from="/"
            to="/sign-in"
          />
          {/* <Route
            exact
            path="/dashboard"
            component={Dashboard}
          /> */}
          <Route
            exact
            path="/account"
            component={Account}
          />
          <Route
            exact
            path="/courses"
            component={ProductList}
          />
          <Route
            exact
            path="/admin/dashboard"
            render={() =>
              <DeptDashboard />
            }
          />
          <Route
            exact
            path="/department/dashboard"
            render={() =>
              <DeptDashboard />
            }
          />
          <Route
            exact
            path="/lecturer/dashboard"
            render={() =>
              <DeptDashboard />
            }
          />
          <Route
            exact
            path="/student/dashboard"
            render={() =>
              <DeptDashboard />
            }
          />


          {/* <Route
            exact
            path="/sem1"
            render={({ match }) =>
              <ProductList type={match.params.type} />
            }
          /> */}
          <Route
            exact
            path="/camera"
            component={CameraList}
          />
          <Route
            exact
            path="/mapping"
            component={MappingList}
          />
          <Route
            exact
            path="/processor"
            component={ProcessorList}
          />
          <Route
            exact
            path="/subjects"
            component={Typography}
          />
          <Route
            exact
            path="/department"
            component={Dashboard}
          />
          <Route
            exact
            path="/classrooms"
            component={Typography}
          />
          <Route
            exact
            path="/deletevideos"
            component={Settings}
          />
          <Route
            exact
            path="/addschedule"
            component={Dashboard}
          />
          <Route
            exact
            path="/record"
            component={Videocontrol}
          />
          <Route
            exact
            path="/videorecordguest"
            component={Videorecordguest}
          />
          {/*added route for videoedit*/}

          <Route
            exact
            path="/videoedit"
            component={Videoedit}
          />

          {/*added route for videoplay*/}
          <Route
            exact
            path="/videoplay"
            component={Videoplay}
          />

          {/*added route for courseedit*/}
          <Route
            exact
            path="/courseedit"
            component={Courseedit}
          />

          <Route
            exact
            path="/myvideos"
            component={ProductListedit}
          />
          {/* <Route
            exact
            path="/processor"

            render={({ match }) =>
              <UserList type={match.params.type} />
            }
          /> */}
          {/* <Route
          exact
          path="/:type/transfer"
          render={({match}) =>
        <TransferSession type={match.params.type} />
        }
      />*/}
          <Route
            exact
            path="/create-time-table"
            component={Timetable}
          />
          <Route
            exact
            path="/adduser/:userType"
            render={({ match }) =>
              <AddUser userType={match.params.userType} />
            }
          />
          <Route
            exact
            path="/sign-in"
            component={SignIn}
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
      </Suspense>
    );
  }
}
