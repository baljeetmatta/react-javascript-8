import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom';
import ViewRecord from './ViewRecord1';
class ViewRecord extends React.Component {

    state={data:[]};

   // data =[];
    componentDidMount()
    {
        fetch("data.json")
        .then(response=>response.json())
        .then(res=>console.log(res));
        


       //let data1= [{ "name": "Name1", "age": 20 }, { "name": "Name2", "age": 21 }, { "name": "Name3", "age": 23 }];
       // this.setState({data:data1});

    }
   
   
   
    render() {

        return (
            <>
            <div className='row'>
                <div className='col-md-6'>

              
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>


                    <tbody>
                        {

                            this.state.data.map((item) => (
                                <tr>
                                    <th><Link to={`/ViewRecord/${item.id}`}>View</Link></th>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                </tr>
                            ))


                        }
                    </tbody>
                </table>
                </div>
            </div>
            </>

        );
    }
}
export default ViewRecord;