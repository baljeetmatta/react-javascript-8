import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
class AllRecords extends React.Component {

    state={data:[]};

   // data =[];
    componentDidMount()
    {
        fetch("data.json")
        .then(response=>response.json())
        .then(res=>this.setState({data:res}));
        


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
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>


                    <tbody>
                        {

                            this.state.data.map((item) => (
                                <tr>
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
export default AllRecords;