import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AddHero from './AddHero';

function Heros() {
  const [data, setData] = React.useState([])
  const demo_data =    [
    {
      "img": "img/testimonials/01.jpg",
      "text": "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\"",
      "name": "John Doe"
    },
    {
      "img": "img/testimonials/02.jpg",
      "text": "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\"",
      "name": "Johnathan Doe"
    },
    {
      "img": "img/testimonials/03.jpg",
      "text": "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\"",
      "name": "John Doe"
    },
    {
      "img": "img/testimonials/04.jpg",
      "text": "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\"",
      "name": "Johnathan Doe"
    },
    {
      "img": "img/testimonials/05.jpg",
      "text": "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\"",
      "name": "John Doe"
    },
    {
      "img": "img/testimonials/06.jpg",
      "text": "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\"",
      "name": "Johnathan Doe"
    }
  ]
  const isLoggedIn = useSelector(state => state.loggedInStatus.isLoggedIn);
  const userData = useSelector(state => state.loggedInStatus.userData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getHeros = async () => {
    try {
      const response = await fetch('http://localhost:5000/heros')
      const data = await response.json()
      setData(data)
    } catch (error) {
      console.error(error)
    }
  }
  const closeModal = () => {
    setIsModalOpen(false);
  }
  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>Take a look at Our Heros</h2>
        </div>
        <div>
        <div className="logged-in">
          <input className="search-input"></input>
          <a
            href="#services"
            className="btn btn-custom btn-lg page-scroll"
          >
            Search
          </a>
          {
            isLoggedIn && 
            // <div className="logged-in">
              <a
                href="#services"
                className="btn btn-custom btn-lg page-scroll"
                onClick={() => setIsModalOpen(true)}
              >
                Add New
              </a>
            // </div>
          }
        </div>
        </div>
        <div className="row flex-end">
          {demo_data
            ? demo_data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <div className="testimonial">
                    <div className="testimonial-image">
                      {" "}
                      <img src={d.img} alt="" />{" "}
                    </div>
                    <div className="testimonial-content">
                      <p>"{d.text}"</p>
                      <div className="testimonial-meta"> - {d.name} </div>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
      {isModalOpen && (<AddHero isOpen={isModalOpen} closeModal={closeModal}></AddHero>)}
    </div>
  )
}

export default Heros