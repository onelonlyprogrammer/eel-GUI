function test() {
    date = document.getElementById("Date_query").value;
    crew = document.getElementById("Crew_query").value;
    info_box = document.getElementById("info_box");

    //Splits date input and tests to see it's in proper format
    var split_date = date.split("-");
    if (split_date.length == 3
        && parseInt(split_date[0]) > 1000
        && parseInt(split_date[1]) <= 12 && parseInt(split_date[1]) > 0
        && parseInt(split_date[2]) <= 32 && parseInt(split_date[2]) > 0) {

        //Tests crew input for proper value
        if (crew == "A" || crew == "a" || crew == "B" || crew == "b" || !crew) {
            //If both date and crew values pass the tests send to python
            //eel.main(date, crew)(function (ret) {
            /*for testing*/ eel.tester(date, crew)(function (ret) {
                console.log(ret);
            });
            info_box.innerHTML = "Information entered successfully";
        }
        //Gives error if split_date fails any tests
        else {
            info_box.innerHTML = "Invalid crew. crew input field must be A B or blank";
        }
    }
    //Gives error if crew has incorrect value
    else {
        info_box.innerHTML = "Invalid date. Date input must be in YYYY-MM-DD format. Example: 2017-5-15";
    }
}