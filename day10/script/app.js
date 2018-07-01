$.ajax({
    url:"mock/student.json",
    method:"GET",
    success:function(data){
      students = data.students;  
        
    },
    error:function(data){
        console.log(data)
    }
})