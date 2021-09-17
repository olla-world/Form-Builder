import React, {useContext} from "react";
import { FormBuilder } from "react-formio";

export default function Display(){
    return(
        <div className="app">
            <FormBuilder
                form={{Display: "form"}}
                onChange={(schema)=>console.log(schema)}
            />
        </div>
    )
}