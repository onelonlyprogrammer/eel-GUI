function test(){
    date = document.getElementById("Date_query").value;
    team = document.getElementById("Team_query").value;
    info_box = document.getElementById("info_box");
    console.log(team.toUpperCase)

    var split_date = date.split("-");
        if (parseInt(split_date[0]) > 1000){
            console.log("pass 0")

            if (parseInt(split_date[1]) <= 12 && parseInt(split_date[1]) > 0){
                console.log("pass 1")

                if (parseInt(split_date[2]) <= 32 && parseInt(split_date[1]) > 0){

                    if(team.toUpperCase == "A" || team.toUpperCase == "B" || team == null){    
                        info_box.innerHTML = "Information entered successfully";
                        console.log("pass 2")
                        console.log(date)
                    }
                }
                else{
                    info_box.innerHTML = "Error: Invalid day";
                    console.log("error: invalid day")
                }
            }
            else{
                info_box.innerHTML = "Error: Invalid month";
                console.log("error: invalid month")
            }
        }
        else{
            info_box.innerHTML = "Error: Invalid year";
            console.log("error: invalid year")
        }

    console.log(split_date);

    eel.tester()(function(ret){
        console.log(ret);
    });
}