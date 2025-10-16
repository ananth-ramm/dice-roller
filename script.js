 function rollDice(sides) {
      return Math.floor(Math.random() * sides) + 1;
    }

    
    function rollD6() {
      const result = rollDice(6);
      document.getElementById("diceResult").textContent = `You rolled a D6: ${result}`;
    }

    function rollD10() {
      const result = rollDice(10);
      document.getElementById("diceResult").textContent = `You rolled a D10: ${result}`;
    }

    
    function testRollDice() {
      for (let i = 1; i <= 10; i++) { 
        let d6 = rollDice(6);
        let d10 = rollDice(10);

        if (d6 < 1 || d6 > 6) throw new Error(`D6 Test failed: ${d6}`);
        if (d10 < 1 || d10 > 10) throw new Error(`D10 Test failed: ${d10}`);
      }
      console.log("✅ All rollDice tests passed");
    }

    testRollDice();

