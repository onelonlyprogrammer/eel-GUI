function test() {
    date = document.getElementById("Date_query").value;
    team = document.getElementById("Team_query").value;
    info_box = document.getElementById("info_box");

    //Splits date input and tests to see it's in proper format
    var split_date = date.split("-");
    if (split_date.length == 3
        && parseInt(split_date[0]) > 1000
        && parseInt(split_date[1]) <= 12 && parseInt(split_date[1]) > 0
        && parseInt(split_date[2]) <= 32 && parseInt(split_date[2]) > 0) {

        //Tests team input for proper value
        if (team == "A" || team == "a" || team == "B" || team == "b" || team == null) {
            //If both date and team values pass the tests send to python
            eel.main(date, team)(function (ret) {
            /*for testing*/ //eel.tester(date, team)(function (ret) {
                console.log(ret);
            });
            info_box.innerHTML = "Information entered successfully";
        }
        //Gives error if split_date fails any tests
        else {
            info_box.innerHTML = "Invalid team. Team input field must be A B or blank";
        }
    }
    //Gives error if team has incorrect value
    else {
        info_box.innerHTML = "Invalid date. Date input must be in YYYY-MM-DD format. Example: 2017-5-15";
    }
}