import React, {useContext, useState} from "react"
import { FormBuilder } from "react-formio"
import { FormContext } from "../App"

export default function Customize({onLift}){
    const submitButtonHandler = (schema) =>{
        const dataStringfy = JSON.stringify(schema)

        localStorage.setItem("formData", dataStringfy)
        const dataParse = JSON.parse(localStorage.getItem("formData"))
        onLift(dataParse)
    }

    return(
        <div className="app">
            <FormBuilder form = {{display:"form"}} onChange={submitButtonHandler}/>
        </div>
    )
}