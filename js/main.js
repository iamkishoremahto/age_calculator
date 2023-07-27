document.getElementById("calcAge").addEventListener("click", function (event) {

    const day = (document.getElementById("day").value);
    const month= (document.getElementById("month").value);
    const year = (document.getElementById("year").value);
    console.log(day,month,year);
    const startDateStr = `${year}-${month}-${day}`;
    console.log(startDateStr);
    const datee = age_calc(startDateStr)
    console.log(datee);
    changeDate(datee)

   
    

});

const changeDate  = (datee) => {

    document.getElementById("days").textContent = datee.days;
    document.getElementById("months").textContent = datee.months;
    document.getElementById("years").textContent = datee.years;
};
const age_calc = (startDateStr) => {

    const today = new Date();
    const tday = today.getDate();
    const tmonth = today.getMonth();
    const tyear = today.getFullYear();
    console.log(tday,tmonth,tyear);
    const endDateStr = `${tyear}-${tmonth}-${tday}`;

    const firstDate = new Date(startDateStr);
    const secondDate = new Date(endDateStr);
  
    // Calculate the time difference in milliseconds
    const timeDiff = Math.abs(secondDate.getTime() - firstDate.getTime());
  
    // Calculate days, months, and years
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const months = Math.floor(days / 30.4375); // Average days per month
    const years = Math.floor(months / 12);
  
    return {
      days,
      months,
      years
    };



};

// document.getElementById("day").addEventListener("change", function (event) {
//     const day = event.target.value;
//     console.log(day)
//     // month= document.getElementById("month").value
//     // year = document.getElementById("year").value
//     if(typeof(day) === "string"){
//         alert("Please enter");
//     }

// });