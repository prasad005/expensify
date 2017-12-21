import React from 'react';
import ReactDOM from 'react-dom';

const EditExpensePage = (props) =>
{
    console.log(props);
        return (
                 <div>
                    this is Edit for {props.match.params.id}
                </div>
            );
};

export default EditExpensePage;