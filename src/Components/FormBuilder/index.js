import React from 'react';
import ReactDOM from 'react-dom';
import {FormBuilder} from '@formio/react';
import {Form} from '@formio/react';

import 'formiojs/dist/formio.full.css';
import 'formiojs/dist/formio.builder.css';
import 'formiojs/dist/formio.form.css';
import 'formiojs/dist/formio.embed.css';



function CustomFormBuilder(){

    var items = [{
        key: 'Header',
        name: 'Header Text',
        icon: 'fa fa-header',
        // static: true,
        content: 'Placeholder Text...'
      },
      {
        key: 'Paragraph',
        name: 'Paragraph',
        static: true,
        icon: 'fa fa-paragraph',
        content: 'Placeholder Text...'
      }];
      

     
    return(
      <>
        <div className="container">
          <FormBuilder form={{display: 'form'}} onChange={(schema) => console.log(schema)} />
        </div>


        <hr/>


        <div className="container">
          <Form src="https://example.form.io/example" onSubmit={console.log} />
        </div>
        </>
    )
}

export default CustomFormBuilder