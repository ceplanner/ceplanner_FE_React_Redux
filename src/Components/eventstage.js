import React from 'react'
import addcalender from '../Images/Icons/calendar-plus.png';
import Calendar from 'react-calendar';
import { NavLink } from "reactstrap";


export default function Eventstage() {
    return (
        <div className='eventcontainer'>
        
        <NavLink href={"/addevent"} className ='eventadd'>
          <div className='addcard'>
        <img src={addcalender} alt="add event calender"></img>
        <div>Add New</div></div>
        </NavLink>
         
         <div className='currentevents'>
           <div className='currenteventswrap'>
           <h3>3</h3>
           <div>Current Events</div></div>
         </div>

         <div className='eventsummary'>

           <div className='pastevents'>
             <div className='pasteventswrap'>
             <h4>2</h4>
             <div>Past Events</div></div>
           </div>
           <div className='totalevents'>
           <div className='totaleventswrap'>
             <h4>5</h4>
             <div>Total Events</div></div>
           </div>
           
           <div className='thismonth'>
           <div className='thismonthwrap'>
             <h4>2</h4>
             <div>This Month</div></div>
           </div>

           <div className='thisyear'>
           <div className='thisyearwrap'>
             <h4>2</h4>
             <div>This Year</div></div>
           </div>

         </div>
         <Calendar />
      </div>
    )
}
