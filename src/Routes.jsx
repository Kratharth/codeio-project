import React, { Component, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';
// Views
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Typography = React.lazy(() => import('./views/Typography'));
const Account = React.lazy(() => import('./views/Account'));
const Settings = React.lazy(() => import('./views/Settings'));
const SignIn = React.lazy(() => import('./views/SignIn'));
const MappingList = React.lazy(() => import('./views/Mapping'));
const ProcessorList = React.lazy(() => import('./views/Processor'));
const CameraList = React.lazy(() => import('./views/Camera'));
const Timetable = React.lazy(() => import('./views/Timetable'));
const AddUser = React.lazy(() => import('./views/Admin'));
//const TransferSession = React.lazy(() => import('./components/TransferSession'));
const NotFound = React.lazy(() => import('./views/NotFound'));
const VideoControl = React.lazy(() => import('./views/VideoControl'));
const VideoEdit = React.lazy(() => import('./views/VideoEdit'));
const CourseEdit = React.lazy(() => import('./views/CourseEdit'));
const ProductList = React.lazy(() => import('./views/ProductList'));
const ProductListEdit = React.lazy(() => import('./views/ProductListEdit'));
const VideoPlay = React.lazy(() => import('./views/VideoPlay'));
const VideoRecordGuest = React.lazy(() => import('./views/VideoRecordGuest'));
const HelpAndSupport = React.lazy(() => import('./views/HelpAndSupport'));
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
            path="/dashboard"
            component={Dashboard}
          />
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
          {/* <Route
            exact
            path="/department"
            component={Dashboard}
          /> */}
          {/* <Route
            exact
            path="/classrooms"
            component={Typography}
          /> */}
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
            component={VideoControl}
          />
          <Route
            exact
            path="/videorecordguest"
            component={VideoRecordGuest}
          />
          {/*added route for videoedit*/}
          <Route
            exact
            path="/videoedit"
            component={VideoEdit}
          />
          {/*added route for videoplay*/}
          <Route
            exact
            path="/videoplay"
            component={VideoPlay}
          />

          {/*added route for courseedit*/}
          <Route
            exact
            path="/courseedit"
            component={CourseEdit}
          />

          <Route
            exact
            path="/myvideos"
            component={ProductListEdit}
          />
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
            component={HelpAndSupport}
            exact
            path="/support"
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
