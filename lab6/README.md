

1. Explain what each of your classes and methods does, the order in which methods are invoked, and the flow of execution after one of the operation buttons has been clicked.

Operation: Takes 2 inputs and makes sure they are both numbers, is the base for the other classes
Addition, Subtraction, Multiplication, and Division: Takes those 2 inputs and can return the result of the operation on the numbers and a string displaying the calculation. 

Method Order:
Post is sent -> PHP checks which operation it is -> Operation is constructed -> specific operation is constructed -> getEquation is run -> operate() is run -> result printed

2. Also explain how the application would differ if you were to use $_GET, and why this may or may not be preferable.

If I used $_GET, the values entered in the boxes and the selected operation would be visible in the URL. This means the entered operation could be shared via URL where $_POST couldn't. You wouldn't use $_GET when there is sensitive information, but this is a calculator, so who cares.

3. Finally, please explain whether or not there might be another (better +/-) way to determine which button has been pressed and take the appropriate action

For determining which button was pressed, instead of an if statement for each button, an array that links each button value to each operation name could be used. This way, instead of going through 4 if statements, the program would only have to search the index once.

