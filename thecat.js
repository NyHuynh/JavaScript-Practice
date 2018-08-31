const cat = {
    tiredness: 1,
    hunger: 1,
    lonliness: 2,
    happiness: 2,
    feed(food = 1){
        this.hunger -= food;
    },
    sleep(hour = 1){
        this.tiredness -= hour;
    },
    pet(hour = 1){
        this.lonliness -= hour;
    },
    play(hour = 1){
        this.happiness -= hour;
    },
    status(){
        if (this.hunger > 10) {
            console.log("This cat is very hungry!");
        } 
        else
        {
            if (this.hunger >= 5) {
                alert("This cat need to eat");
            } 
            else 
            {
                alert("this cat is OK");
            }
        }

        if (this.happiness > 10) {
            alert("This cat is very happy!");
        } else {
            if (this.happiness > 5) {
                alert("This cat is normal!");
            } else {
                alert("This cat is sad");
            }
        }

        if (this.lonliness > 10) {
            alert("This cat feels so alone!");
        } else {
            if (this.happiness > 5) {
                alert("This cat is normal!");
            } else {
                alert("This cat want to play with you");
            }
        }

        if (this.tiredness > 10) {
            alert("This cat feels very tired!");
        } else {
            if (this.tiredness > 5) {
                alert("This cat feels normal!");
            } else {
                alert("This cat is OK");
            }
        }
},
}
cat.feed(15);
cat.pet(7);
cat.play(2);
cat.sleep(10);
cat.status();   