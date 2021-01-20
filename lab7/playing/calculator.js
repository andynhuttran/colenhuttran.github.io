let calculator = {
        read: () => {
            x = 5;
            y = 2;
        },

        sum: () => {
            return x + y;
        },

        mul: () => {
            return x*y;
        }
  };
  
  calculator.read();
  console.log( calculator.sum() );
  console.log( calculator.mul() );