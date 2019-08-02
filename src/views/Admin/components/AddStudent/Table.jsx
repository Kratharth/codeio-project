import React, { forwardRef } from 'react';
import MaterialTable from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { getStudentDetails } from 'services/addUsers';
import Axios from 'axios';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

export default class StudentTable extends React.Component {
  signal = true;
  state = {
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Department', field: 'dept' },
      { title: 'Email', field: 'email' },
      {
        title: 'Sem', field: 'sem',
      },
      { title: 'USN', field: 'usn' },
    ],
    studentDetails: [],
    isLoading: false,
  };

  async getStudentDetails() {
    try {
      this.setState({ isLoading: true });

      const { studentDetails } = await (getStudentDetails());
      if (!Array.isArray(studentDetails)) {
        alert("Something unexpected happened :(");
        this.setState({ isLoading: false });
      }
      else if (this.signal) {
        this.setState({
          isLoading: false,
          studentDetails
        });
      }
    } catch (error) {
      if (this.signal) {
        this.setState({
          isLoading: false,
          error
        });
      }
    }
  }

  componentDidMount() {
    this.signal = true;
    this.getStudentDetails();
  }

  componentWillUnmount() {
    this.signal = false;
  }

  render() {
    return (
      <MaterialTable
        icons={tableIcons}
        title="Student Details"
        columns={this.state.columns}
        data={this.state.studentDetails}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              resolve();
              const data = [...this.state.userDetails];
              data.push(newData);
              this.setState({ ...this.state, data });
              Axios.post('https://c81vghnvph.execute-api.ap-south-1.amazonaws.com/Test/student', newData)
                .then(res => {
                  console.log(res);
                })
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              resolve();
              const data = [...this.state.data];
              data[data.indexOf(oldData)] = newData;
              this.setState({ ...this.state, data });
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              resolve();
              const data = [...this.state.data];
              data.splice(data.indexOf(oldData), 1);
              this.setState({ ...this.state, data });
            }),
        }}
        options={{
          actionsColumnIndex: -1
        }}
      />
    );
  }
}
