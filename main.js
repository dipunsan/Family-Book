var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.123rf.com%2Fphoto_20754296_cute-boy-cartoon-standing.html&psig=AOvVaw0ki60sD7t5zcA4NYX4tTt6&ust=1643640462541000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLiJxu_b2fUCFQAAAAAdAAAAABAD" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-vector%2Fcute-boy-cartoon_2526332.htm&psig=AOvVaw0ki60sD7t5zcA4NYX4tTt6&ust=1643640462541000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLiJxu_b2fUCFQAAAAAdAAAAABAJ"];
var names = ["Fmaily Book","Nabaghan Lenka", "Deepak Lenka", "Aditya Lenka", "Aarush Lenka"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    
    var updatedImage = [images];
    
    var updatedName = [names] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
