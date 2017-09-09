function show(){
	var data=studentCollection.find();
	console.log(data);
	$("#table-body").html("");
	for(var i =0;i<data.length;i++)
	{
		var student = data[i];
		$("#table-body").append(
			"<tr>"+
				"<td>"+ student._id + "</td>"+
				"<td>"+ student.name+ "</td>"+
			"</tr>"
		)

	}
	
}
var fdb = new ForerunnerDB();
var db = fdb.db("store");
var studentCollection = db.collection('students');
function myFunction(){
	var studentAge = $("input[name='age']").val();
	var studentName = $("input[name='name']").val();
	studentCollection.insert({
		name:studentName,
		age:studentAge*1

	})
	studentCollection.save(function(){
		studentCollection.load(show);
	});
	$("input[name='age']").val("");
	$("input[name='name']").val("");
}
$("#submit").on("click",myFunction);






// studentCollection.insert({
//     name: "david",
//     age:  "12"
    
// });
studentCollection.load(show);


