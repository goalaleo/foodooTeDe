1. The demos ending with req_server require a server to host them
in order to work propery. I added 2 zip files that enable you to put
up a simple local server:<br>
	1.1 install python from the included zip file. If the installer asks whether you want to add python to the system environment variable PATH (or Path), say yes / tick a checkbox etc.<br>
	1.2 unzip the console2 zip file, and run console.exe (this is a better command promt for windows)<br>
	1.3 write "python" in the console and press Enter. If you get a message: "'python' is not recognized as an internal or external command, operable program or batch file.",
	python has not been included in the PATH environment variable. In this case follow this tutorial: http://www.computerhope.com/issues/ch000549.htm to fix this. Depending on where
	you installed python, you need to add the folder path to the PATH variable. eg. for me it was "C:\Python34"<br>
	1.4 In the console, write "python" again, and you should get your python version amongst other info. Using Python commands from the command promt now works.<br>
	1.5 Navigate to one of the teach demo folders, which contains the index.html file. For instance, in the pollingDemo it's in PollingDemo/www folder.<br>
	(If you are not familiar with navigating folders with terminal commands, googling "terminal navigate between directories" or something similiar should give you tips.
	BASICALLY you only need few basic commands: "cd <folder_name> opens the folder with the given name eg. if you're in the Foodoo_Tech_Demos folder (in terminal), typing "cd todo_list"
	and pressing enter navigates you to the todo_list folder and so on. "cd .." command navigate you one folder upwards in the directory tree, eg. while in the todo_list folder, "cd .."
	brings you back to the parent folder Foodoo_Tech_Demos. command "dir" lists all files in the current folder. If problems occur, call me)
	1.6 When you're in the folder which contains the index.html file, type "python -m http.server [8000]" into the console and press enter. This should create a simple HTTP server (in python 3,
	for python 2 the command is "python -m SimpleHTTPServer") after which you can use the application by typing "localhost:8000" into your browsers navigation bar.<br>
2. The demos that don't have the req_server ending can be used just by double clicking the index.html file.