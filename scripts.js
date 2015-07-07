function writeNewline() {
    document.write("<br/>");
}
document.write("Hi Matt!");
writeNewline();
document.write("How are you?");
function writeH() {
	document.write("Hello");
}
writeNewline();
writeH();
writeNewline();
function picture(ImageUrl) {
        document.write("ImageUrl: " + ImageUrl)
}
picture("http://www.pegasusarchive.org/ancientbritain/SilburyHill/SilburyHill4_high.jpg");
document.write("http://www.pegasusarchive.org/ancientbritain/SilburyHill/SilburyHill4_high.jpg");
function Url(ImageUrl) {
        document.write("<img src=\""+ImageUrl+"\"/>")
}
Url("http://www.pegasusarchive.org/ancientbritain/SilburyHill/SilburyHill4_high.jpg");
var temp;
temp = 2;
var Num;
Num = 14
writeNewline()
document.write("The Total is"+(Num * temp))
writeNewline()
function runningTotal(numberToAdd)
{
    var currentTotal = 0;
    currentTotal = currentTotal + numberToAdd;
    document.write("The current total is: " + currentTotal);
}
runningTotal(20);
writeNewline();
runningTotal(50);
writeNewline();
runningTotal(10);
writeNewline();
runningTotal(60);