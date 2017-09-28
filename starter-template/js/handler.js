function make_json(form){
		var json = {
			"street": form.street.value,
			"steet1": form.steet1.value,
			"leave": form.leave.value,
			"arrive": form.arrive.value,
      "date":form.date.value,
      "time":form.time.value
		};
	var html = JSON.stringify(json, 0,4);

	document.getElementById('output').innerHTML = html;

	$.post('index.html',{'json':html} );

	return false
	}
