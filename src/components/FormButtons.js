import React from 'react';
//import '../Styles/App.css'



const FormButtons = (props) => {
  const { submitLabel, otherLabel, goToLink, history } = props;
  return (
    <div className="d-flex justify-content-between">
      <button type="submit" className="btn btn-primary">{submitLabel}</button>
      <button type="button" className="btn btn-info" onClick={() => {
        history.push(goToLink);
        console.log('hit Button'); 
      }}>{otherLabel}</button>
    </div>
  );
};

export default FormButtons;