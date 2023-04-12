import React,{Component} from 'react';

class StateClass extends Component
{
    // a=0;
    state={
        a:0
    }
     clickHandler=()=>{
      //  this.a=this.a+1;
       // alert(this.a);
       //this.state.a=this.state.a+1;
       //console.log(this.state.a);
        this.setState({a:this.state.a+1})

     }


    render()
    {
        return (
            <>
                <p>the value of a is {this.state.a}</p>
                <button onClick={this.clickHandler}>Click me</button>
            </>
        )
    }
}
export default StateClass;
