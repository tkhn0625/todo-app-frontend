import moment from 'moment';
import React, { Component } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';

class TodoComponent extends Component{
  constructor(props){
    super(props)
    this.state={
      id: this.props.match.params.id,
      description: 'this.props.match.params.description',
      targetDate: moment(new Date()).format('YYYY-MM-DD')
    }
    this.onSubmit=this.onSubmit.bind(this);
    this.validate=this.validate.bind(this);
  }

  onSubmit(values){
    console.log(values);
  }

  validate(values){
    let errors={}
    if(!values.description){
      errors.description = 'Enter a Description'
    }else if(values.description.length<5){
      errors.description = 'Enter atleast 5 Characters in Description'
    }

    if(!moment(values.targetDate).isValid()){
      errors.targetDate = 'Enter a valid Target Date'
    }

    return errors;
  }

  render(){
    let {description,targetDate} = this.state
    return(
      <div>
        <h1>Todo</h1>
        <div className="container">
          <Formik 
            initialValues={{description,targetDate}}
            onSubmit={this.onSubmit}
            validateOnChange={false}
            validateOnBlur={false}
            validate={this.validate}
          >
            {
              (props) => (
                <Form>
                  <ErrorMessage name="description" component="div" className="alert alert-warning"></ErrorMessage>
                  <ErrorMessage name="targetDate" component="div" className="alert alert-warning"></ErrorMessage>
                  <fieldset className="form-group">
                    <label>Description</label>
                    <Field className="form-control" type="text" name="description" />
                  </fieldset>
                  <fieldset className="form-group">
                    <label>Target Date</label>
                    <Field className="form-control" type="date" name="targetDate" />
                  </fieldset>
                  <div><button className="btn btn-success" type="submit">Save</button></div>
                  
                </Form>
              )
            }
          </Formik>
        </div>
      </div>
    )
  }
}

export default TodoComponent