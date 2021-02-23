import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { detailsProduct } from '../actions/productActions';
 import LoadingBox from '../components/LoadingBox';
// import MessageBox from '../components/MessageBox';
//import { Link } from 'react-router-dom';
import Axios from "axios";
import { useSelector } from 'react-redux';

export default function ObjectiveScreen() {


const [objectiveDetails, setObjectiveDetails] = useState({})
const userSignin = useSelector((state) => state.userSignin);
const { userInfo } = userSignin;
const userId = userInfo.company;
  
  const getObjectiveDetails = async () => {


    const {data} = await Axios.get(`/companies/${userId}.json`)
    
    console.log(data)

  };

  useEffect(() => {
    console.log("hi");
    getObjectiveDetails().then((objectiveDetails) => {
      setObjectiveDetails(objectiveDetails);

      console.log(objectiveDetails)
      
    });
  }, );

  
  return (

    <div>

      {Object.keys(objectiveDetails).length !== null ? (
      
         <div>
             <h1>{objectiveDetails.name}</h1>
      <h2>{objectiveDetails.objectives}</h2>
            </div>
        
      ) : (
        <LoadingBox></LoadingBox>
      ) }
    </div>
  );
}

