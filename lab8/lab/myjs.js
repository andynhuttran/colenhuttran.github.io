'use strict';

let moduleBike = (function(){
    let createBicyclePrototye = (speed) => {
        return {
            speed: speed,

            applyBrake: function(decs){   
                console.log("Decs speed: " + decs);     
                this.speed -= decs;
            },

            speedUp: function(inc){
                console.log("Incr speed: " + inc);
                this.speed += inc;
            },

            printSpeed: function(){
                console.log("Speed: " + this.speed);
            }
        }
    };

    let createMountainBikeProtoype = function(prototype) {
        let bike = Object.create(prototype);
        bike.gear = 1;
        bike.setGear = function(g) {
            this.gear = g;
        };

        return bike;
    };

    let start = function(speed) {
        let bicyclePrototy = createBicyclePrototye(speed);
        let mountainBikePrototy = createMountainBikeProtoype(bicyclePrototy);

        console.log(mountainBikePrototy.gear);
        mountainBikePrototy.setGear(5);
        console.log(mountainBikePrototy.gear);

        mountainBikePrototy.printSpeed();
        mountainBikePrototy.speedUp(5);    
        mountainBikePrototy.applyBrake(3);
        mountainBikePrototy.printSpeed();
    }

    return {createBicyclePrototye, createMountainBikeProtoype, start}

}());

moduleBike.start(5);
