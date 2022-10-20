import styled from 'styled-components';
import Link from 'next/Link';
import Videos from '../videos.json';
import React, { useState, useEffect } from 'react';

const Video = () => {
  console.log(Videos)
const [data,setData]=useState([]);

const getData=()=>{
  fetch('videos.json'
  ,{
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
  }
  )
    .then(function(response){
      console.log(response)
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
    });
}
useEffect(()=>{
  getData()
},[])

// const Video = () => {
//   console.log(Videos)
  return (
    <div>
      <div>
        <div>
          <h2> {Videos && Videos[0].title} </h2>
          <p> {Videos && Videos[0].description} </p>
        </div>
        <div>
          <iframe src={Videos && Videos[0].url}> </iframe>
        </div>
      </div>
    </div>
  )
};

export default Video