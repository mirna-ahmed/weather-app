/* Global Variables */
 const ApiKey = '71f108e555a1e8ab325fee4bebeade4b';
const  Url = `api.openweathermap.org/data/2.5/weather?zip=${ZipCode} &appid=${ApiKey}&units=metric;


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// to get the value of the zip ZipCode
const ZipCode = document.getElementById('zip');
const ZipValue = ZipCode.value;
const FeelingsValue = document.getElementById('feelings').value;

const BttnGenerate = document.getElementById('generate');

// click event to enter zip code
BttnGenerate.addEventListener('click', callback);

  function callback(evt){

    if(ZipValue){
      getData(Url, ZipValue, ApiKey);
    }
    else {
      alert('please enter zip code');
    }
  }

.then( function (data){
  console.log(data);
  postData('/addData', {temp:data.temp, date: data.date,feelings: feelings});
};

)
.then(
    updateUI()
  )
// get data function
  const getData = async ( Url, zip, key)=>{

   const res = await fetch('/Temp');
    try {

      const data = await res.json();
      console.log(data);
      // 1. We can do something with our returned data here-- like chain promises!

      // 2.
      // postData('/addAnimal', data)
    }  catch(error) {
      // appropriately handle the error
      console.log("error", error);
    }
  }
// postData function
  const postData = async ( url = '', data = {})=>{
      const response = await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

// UI update function
const updateUI = async () => {
  const request = await fetch('/all');
  try{
    const allData = await request.json();
    document.getElementById('zip').innerHTML = allData[0].zip;
    document.getElementById('feelings').innerHTML = allData[0].feelings;
    document.getElementById('date').innerHTML = allData[0].date;

  }catch(error){
    console.log("error", error);
  }
}
