function getLoanInterst(){
    var list1 = document.getElementById('loanTypes');
    var list2 = document.getElementById("interest");
    var list1SelectedValue = list1.options[list1.selectedIndex].value;
    
    if (list1SelectedValue=='Personal')
    {
        
        list2.options.length=0;
        list2.options[0] = new Option('12', 12);
        
    }
    else if (list1SelectedValue=='Home')
    {
        
        list2.options.length=0;
        list2.options[0] = new Option('7', 7);
   
    }else if (list1SelectedValue=='Car')
    {
        list2.options.length=0;
        list2.options[0] = new Option('10', 10);

    }
}