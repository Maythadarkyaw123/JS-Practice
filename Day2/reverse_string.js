let input = prompt("Enter your input: ");
function str_reverse(input){
    var split_str = input.split(""); //first split the str
    var reverse_str = split_str.reverse(); //reverse the splited characters
    var join_str = reverse_str.join(""); //all the reverse character into one string
    return join_str;
}
str_reverse(input);