import React, { Component}  from 'react';
import { Mdetail } from './Mdetail'

import TopNav from './Nav/TopNav'

export class LogPage extends Component {

  render(){
    return(
      <div>
        <TopNav />
        <Mdetail />

      </div>
    )
  }
}
