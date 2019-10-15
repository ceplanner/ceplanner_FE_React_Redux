import React from "react";
import MyEvents from "./MyEvents";
// import Eventstage from './eventstage'

export default function myevents2() {
  return (
    <div>
      <div className='myeventcontainer'>
        <Navbar className='navbar navbar-light bg-light justify-content-between mt-2 mb-2'>
          <NavLink href={"/addevent"} className='navbar-brand text-primary'>
            Add Event
          </NavLink>
          <NavLink className='navbar-brand text-primary'>All</NavLink>
          <NavLink href='#' className='navbar-brand ml-5 text-primary'>
            Recent
          </NavLink>
          <form className='form-inline'>
            <input
              className='form-control mr-sm-2'
              type='search'
              placeholder='Search Event'
              aria-label='Search'
            />
            <button
              className='btn btn-outline-primary my-2 my-sm-0 text-primary'
              type='submit'
            >
              Search
            </button>
          </form>
        </Navbar>
        <div className='eventHolder'>
          {myevents.map(myEvent => (
            <div
              className='card text-center shadow p-3 mb-5 bg-white rounded'
              key={myEvent.id}
            >
              <NavLink href={`/MyEvents/${myEvent.id}`}>
                <div className='card-body'>
                  <h5 className='card-title text-dark mb-4'>
                    {myEvent.eventName}
                  </h5>
                  <p className='card-text text-dark'>
                    {myEvent.eventDescription}
                  </p>
                  <p className='card-text'>
                    <small className='text-muted'>
                      Event Date: {myEvent.eventDate}
                    </small>
                  </p>
                  <h5 className='card-title linker'>Read More...</h5>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
