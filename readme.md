### **Some issues about the task:**


1. The code is configured in **playwright.config.js** to run projects for **3 major browsers: Chrome, FF, WebKit (Safari)**.
.txt is added to the file extension. Pls. remove the .txt before you run the project.


2. The running command is: **npx playwright test Callback-Request-Submission --headed**

    * The file name is: **Callback-Request-Submission.js**
    
    * **--headed** is added at the end of the command in order to display the browsers in runtime.
    
    * In fact - Changing the running command above at the command line, is NOT recommended. If you want to run the task only on a specific browser/s, you can put in comment the code lines that configure the other browsers under in the **playwright.config.js** file itself.

    * If you put in comment the lines related to **all browsers** in file: playwright.config.js, and you run the task at the same command as above, the code will run by default on browser: "Chromium", and on it only.

    * In this case - the test will run on the browser defined in the "test.use" section in the test file itself,
    system should ignore the "browserName" defined in the "test" command line.
    In case - the system does NOT ignore the "browserName" defined in the "test" command line,
    pls. remove the "browserName" definition from the command line.


3. The code includes **assertions** (such as field values validation, verifying navigation to the "Thank You" page, etc..), in order to ensure action correctness and test reliability.


4. Screenshots location: ..\Jonse\tests





