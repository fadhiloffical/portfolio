import React from "react";
import classes from "./Portfolio.module.css";

import './Masonry.css';
import Masonry from 'react-masonry-css'

import { Col,Container,Row } from 'react-bootstrap';

import nimfra from '../../assets/img/nimfra.jpg';
import amad from '../../assets/img/amad.jpg';
import findgpartner from '../../assets/img/fingmygpartner.jpg';
// import ahumanstory from '../../assets/img/ahumanstory.jpg';
// import guteblock from '../../assets/img/guteblock.jpg';
import portfolio from '../../assets/img/portfolio.jpg';
import timehut from '../../assets/img/timehut.jpg';

const breakpointColumnsObj = {
   default: 3,
   1100: 3,
   700: 2,
   500: 1
 };

 const Portfolio = () => {
   return ( 
      <div className={classes.portfolioWrapper}>
         <h1>Portfolio</h1>
         <Container>
         <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
            >
            <div><img src={nimfra} alt="nimfra"/>
            <a href="http://nimfra.fadhil.in" target="_blank" rel="noopener noreferrer">
               <div className="overLayer">
                  <h4>NIMFRA Arcitecture</h4>
                  <p>Wordpress Theme</p>
               </div>
            </a>
            </div>
            
            <div><img src={timehut} alt="timehut"/>
            <a href="http://timehut.fadhil.in" target="_blank" rel="noopener noreferrer">
               <div className="overLayer">
                  <h4>TimeHut E-commerce</h4>
                  <p>React.js + Laravel</p>
               </div>
            </a>
            </div>

            <div><img src={amad} alt="amad"/>
            <a href="http://amad.fadhil.in" target="_blank" rel="noopener noreferrer">
               <div className="overLayer">
                  <h4>AMAD Arcitecture</h4>
                  <p>Wordpress Theme</p>
               </div>
            </a>
            </div>
            {/* <div><img src={guteblock} alt="guteblock"/>
            <a href="https://wordpress.org/plugins/guteblock/" target="_blank" rel="noopener noreferrer">
               <div className="overLayer">
                  <h4>Guteblock</h4>
                  <p>Wordpress Plugin</p>
               </div>
            </a>
            </div> */}
            <div><img src={findgpartner} alt="findgpartner"/>
            <a href="https://findgpartners.com/" target="_blank" rel="noopener noreferrer">
               <div className="overLayer">
                  <h4>Findmygaprtners</h4>
                  <p>Laravel Project</p>
               </div>
            </a>
            </div>
            <div><img src={portfolio} alt="portfolio"/>
            <a href="http://portfolio.fadhil.in/" target="_blank" rel="noopener noreferrer">
               <div className="overLayer">
                  <h4>Single Fullpage Portfolio</h4>
                  <p>Wordpress Theme</p>
               </div>
            </a>
            </div>
            {/* <div><img src={ahumanstory} alt="ahumanstory"/>
            <a href="http://ahumanstory.org/" target="_blank" rel="noopener noreferrer">
               <div className="overLayer">
                  <h4>ahumanstory</h4>
                  <p>Html Conversion</p>
               </div>
            </a>
            </div> */}
            </Masonry>
         </Container>
      </div>
    );
 }
  
 export default Portfolio;