
import React, { useState, useEffect} from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import { Container } from "reactstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import ReactDOM from "react-dom";

//initialize feedback arrays
    let feedbackValuesQ1 = [];
    let feedbackValuesQ2 = [];
    let feedbackValuesQ3 = [];
    let feedbackValuesQ4 = [];
    let feedbackValuesQ5 = [];
    let feedbackValuesQ6 = [];
    let feedbackValuesQ7 = [];
    let feedbackValuesQ8 = [];
    let feedbackValuesQ9 = [];
    let feedbackValuesQ10 = [];
    let allAverages=[];

//initializing average responses for zero;
    var q1Avg =0;
    var q2Avg =0;
    var q3Avg =0;
    var q4Avg =0;
    var q5Avg =0;
    var q6Avg =0;
    var q7Avg =0;
    var q8Avg =0;
    var q9Avg =0;
    var q10Avg =0;
   var TotalStudents=0;

const FeedbackChart=()=>{
  console.log("previous value = "+feedbackValuesQ1)

    //getting the current URL
  var URL = window.location.pathname
  //Geeting the ModuleID
  var res = URL.slice(15);
  console.log("Moduleid = "+ res);




  
  const [chartData, setChartData] = useState({});
  const [q1, setQ1] = useState([null]);
  const [q2, setQ2] = useState([null]);
  const [q3, setQ3] = useState([null]);
  const [q4, setQ4] = useState([null]);
  const [q5, setQ5] = useState([null]);
  const [q6, setQ6] = useState([null]);
  const [q7, setQ7] = useState([null]);
  const [q8, setQ8] = useState([null]);
  const [q9, setQ9] = useState([null]);
  const [q10, setQ10] = useState([null]);


  const chart = () => {
    

    let myLabels = ['Q1','Q2','Q3','Q4','Q5','Q6','Q7','Q8','Q9','Q10'];
    const apiUrlFilter = "https://oberuhunaapi.azurewebsites.net//api/feedbacks/feedbackFilter?ModuleIdParameter="+res;
    console.log(apiUrlFilter)
    
    axios.get(apiUrlFilter)
      .then(res => {
        console.log(res);
        for (const dataObj of res.data) {
            //pushing the data to the arrays
            feedbackValuesQ1.push(+dataObj.q1);
            feedbackValuesQ2.push(+dataObj.q2);
            feedbackValuesQ3.push(+dataObj.q3);
            feedbackValuesQ4.push(+dataObj.q4);
            feedbackValuesQ5.push(+dataObj.q5);
            feedbackValuesQ6.push(+dataObj.q6);
            feedbackValuesQ7.push(+dataObj.q7);
            feedbackValuesQ8.push(+dataObj.q8);
            feedbackValuesQ9.push(+dataObj.q9);
            feedbackValuesQ10.push(+dataObj.q10);
        }
        //getting avg feedback using feedback values
        q1Avg = AverageFeedBack(feedbackValuesQ1);
        q2Avg = AverageFeedBack(feedbackValuesQ2);
        q3Avg = AverageFeedBack(feedbackValuesQ3);
        q4Avg = AverageFeedBack(feedbackValuesQ4);
        q5Avg = AverageFeedBack(feedbackValuesQ5);
        q6Avg = AverageFeedBack(feedbackValuesQ6);
        q7Avg = AverageFeedBack(feedbackValuesQ7);
        q8Avg = AverageFeedBack(feedbackValuesQ8);
        q9Avg = AverageFeedBack(feedbackValuesQ9);
        q10Avg = AverageFeedBack(feedbackValuesQ10);

        
         TotalStudents=feedbackValuesQ1.length;

         allAverages = [q1Avg,q2Avg,q3Avg,q4Avg,q5Avg,q6Avg,q7Avg,q8Avg,q9Avg,q10Avg];

         


        setChartData({
          labels: myLabels,
          datasets: [
            {
              label: "Average Feedback",
              data:allAverages,
              //backgroundColor: ["rgba(75, 192, 192, 0.6)"],
              borderWidth: 4
            }
          ]
        });
      })
      .catch(err => {
        console.log(err);
      });
    console.log(allAverages,myLabels);
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <Container>
    <div className="App" >
      <h1>Responses of Students for module </h1>
      <div>
        <Bar
          data={chartData}
          options={{
            responsive: true,
            title: { text: "Number of Students:"+TotalStudents, display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true
                  },
                  gridLines: {
                    display: false
                  }
                }
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false
                  }
                }
              ]
            }
          }}
        />
      </div>
    </div>

//initializing the values to zero 
    {feedbackValuesQ1= []}
    {feedbackValuesQ2= []}
    {feedbackValuesQ3= []}
    {feedbackValuesQ4= []}
    {feedbackValuesQ5= []}
    {feedbackValuesQ6= []}
    {feedbackValuesQ7= []}
    {feedbackValuesQ8= []}
    {feedbackValuesQ9= []}
    {feedbackValuesQ10= []}
    </Container>
    
  );
};
//feedback avg function
function AverageFeedBack(grades) {
  var total = 0;
for(var i = 0; i < grades.length; i++) {
  total += grades[i];
}
var avg ;
avg = total / grades.length;
   return parseFloat(avg).toFixed(2);;
}
export default FeedbackChart;




