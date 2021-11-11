import React from 'react';
import { Base } from '../components/Base';
import {EditCountDownForm} from '../components/EditCountDonwForm';
import { Footer } from '../components/Footer';

export function EditCountDownPage({handleSaveForm, handleCancelForm}) {

  return (
    <Base>
      <EditCountDownForm 
        handleSaveForm={handleSaveForm} 
        handleCancelForm={handleCancelForm}
      />
      <Footer isEdit />
    </Base>
    
  )
}