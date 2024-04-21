// write code here
   <script>
        let input = prompt("Enter a number");

        if (!isNaN(input)) {
        input = Number(input); 
        if (input > 0) {
            alert("Positive number");
        } else if (input === 0) {
            alert("Zero");
        } else {
            alert("Negative number");
        }
        } else {
        alert("Invalid number");
        }

    </script>
