import React from 'react';
class GreetClass extends React.Component
{


    render()
    {
        return (

            <>
            <p>Geeting to {this.props.name}</p>
            </>
        );
    }
}
export default GreetClass;
