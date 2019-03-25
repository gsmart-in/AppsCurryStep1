function doGet() 
{
	var output = AppLib.getObjectValues();
	return ContentService.createTextOutput(output);
}