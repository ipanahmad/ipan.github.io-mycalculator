
// Insert angka ke textview
function insert(num){
	document.form.textarea.value = document.form.textarea.value + num;
}

// Fungsi Hitung
function equal(){
	var result = document.form.textarea.value;
	document.form.textarea.value = eval(result);
}

// Clean
function clean(){
	document.form.textarea.value = "";
}

// Delete
function back(){
	var hasil = document.form.textarea.value;
	document.form.textarea.value = hasil.substring(0,hasil.length-1);
}