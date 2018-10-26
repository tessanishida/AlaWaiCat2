function doGet() 
{
  return HtmlService.createHtmlOutputFromFile('index');
}

function markerLocation(coord) 
{
  var sheet = SpreadsheetApp.getActiveSheet();
    for (i = 0; i < coord.length(); i++)
    {
      sheet.appendRow([coord[i]]); 
    }
    
    
    //sheet.appendRow([coord.length()]);
}         
        


