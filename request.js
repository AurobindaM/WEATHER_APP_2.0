
const key="6f4c0fd7e806fae20a6c1ed61e8c4cc4";
// const baseUrl='https://api.openweathermap.org/data/2.5/weather?q=cuttack&appid=6f4c0fd7e806fae20a6c1ed61e8c4cc4';

// fetch(baseUrl).then((data)=>{console.log('responce',data.json())}).
// catch((error)=>{
//     console.log(error);
// })

const requestCity=async(city)=>{
    const baseUrl='https://api.openweathermap.org/data/2.5/weather';
    const query=`?q=${city}&appid=${key}`;

    // make fetch call(promise call)
    const responce= await fetch(baseUrl + query);

    // promise data
    const data=await responce.json();
    console.log(data);
    return data;
}

// requestCity('delhi')