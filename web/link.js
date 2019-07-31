
function test() {  
    date = document.getElementById("Date_query").value;
    crew = document.getElementById("Crew_query").value;
    info_box = document.getElementById("info_box");

    //Splits date input and tests to see it's in proper format
    var split_date = date.split("-");
    if (split_date.length == 3
        && parseInt(split_date[0]) > 1000
        && parseInt(split_date[1]) <= 12 && parseInt(split_date[1]) > 0
        && parseInt(split_date[2]) <= 31 && parseInt(split_date[2]) > 0) {

        //Tests crew input for proper value
        if (crew == "A" || crew == "a" || crew == "B" || crew == "b" || !crew) {
            date = `${split_date[0]}-${addZero(split_date[1])}-${addZero(split_date[2])}`
            //If both date and crew values pass the tests send to python
            eel.main(date, crew)(function (ret) {
                console.log(ret);
            });
            info_box.style.color = "green";
            info_box.innerHTML = "Information entered successfully";
        }
        //Gives error if split_date fails any tests
        else {
            info_box.style.color = "red";
            info_box.innerHTML = "Invalid crew. crew input field must be A B or blank";
        }
    }
    //Gives error if crew has incorrect value
    else {
        info_box.style.color = "red";
        info_box.innerHTML = "Invalid date. Date input must be in YYYY-MM-DD format. Example: 2017-05-15";
    }
}
//Adds zeros as needed and counts zeros
function addZero(n) {
    //Counts zeros
    var zero_count = 0;
    for (var temp = 0; temp != n.length; temp++) {
        if (n.charAt(temp) == "0") {
            zero_count++;
        }
    }
    //If zero_count exceeds one, notify user
    if (zero_count > 1) {
        console.log(zero_count > 1)
        window.alert("Information entered, but too many zeros were added. We fixed it, but please remember to use the proper amount of zeros in the future.");
    }
    //Removes
    switch (parseInt(n) < 10){
        case true:
        n = n.replace(/0/g, "");

        case false:
        n = n.replace(/0/g, "") + "0";
    }
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}