import React from 'react'
import { Form, InputGroup } from 'react-bootstrap';
import { Bag, FlagFill, Fullscreen, Grid, List, Search } from 'react-bootstrap-icons';
import './Header.css'
function Header({handleSidebar}) {
  return (
    <header className='py-2'>
      <div className='container-fluid'>
        <div className='d-flex'>
          <div className='col-6'>
            <div className='d-flex align-items-center'>
              <div className='tooglemenu col-1 p-2'>
                <button type='button' className='bg-transparent border-0'onClick={()=>handleSidebar()}>
                  <List className='fs-3' />
                </button>
              </div>

              <div className='search-filed col-4'>
                <Form>
                  <InputGroup className='bg-info rounded'>
                    <InputGroup.Text id="basic-addon1" className='bg-transparent border-0'>
                      <Search />
                    </InputGroup.Text>
                    <Form.Control
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      className='bg-transparent border-0'
                    />
                  </InputGroup>
                </Form>
              </div>
            </div>
          </div>
          <div className='col-6'>
            <div className='col d-flex justify-content-end'>
              <ul className='nav'>
                <li className='nav-item'>
                  <a href="javascript:;" className='nav-link icon d-flex justify-content-center align-items-center rounded-circle p-0 text-warning fs-5'>
                    <FlagFill />
                  </a>
                </li>
                <li className='nav-item'>
                  <a href="javascript:;" className='nav-link icon d-flex justify-content-center align-items-center rounded-circle p-0 text-dark fs-5'>
                    <Grid />
                  </a>
                </li>
                <li className='nav-item'>
                  <a href="javascript:;" className='nav-link icon d-flex justify-content-center align-items-center rounded-circle p-0 text-dark fs-5'>
                    <Bag />
                  </a>
                </li>
                <li className='nav-item'>
                  <a href="javascript:;" className='nav-link icon d-flex justify-content-center align-items-center rounded-circle p-0 text-dark fs-5'>
                    <Fullscreen />
                  </a>
                </li>
                <li className='nav-item'>
                  <a href="javascript:;" className='nav-link icon d-flex justify-content-center align-items-center rounded-circle p-0 text-dark fs-5'>
                    <FlagFill />
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;