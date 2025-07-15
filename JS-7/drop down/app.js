let mobile = ['i phone','samsung','motrola','nokia','sony','haier'];
document.write("<label> select a phone company:</label>");
document.write("<select>");
for(let i = 0;i < mobile.length;i++ ){
    document.write("<option>"+ mobile[i] +"</option>");
}
document.write("</seleclt>");