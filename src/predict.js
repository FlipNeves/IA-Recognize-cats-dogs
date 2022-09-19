const Result = {
	0: "dog",
	1: "cat",
};
//Carregamento da Imagem
$("#image-selector").change(function () {
	let reader = new FileReader();
	reader.onload = function () {
		let dataURL = reader.result;
		$("#selected-image").attr("src", dataURL);
		$("#prediction-list").empty();
	}

	let file = $("#image-selector").prop('files')[0];
	reader.readAsDataURL(file);
});

//Carregamento do modelo
let model;
$(document).ready(async function () {
	$('.progress-bar').show();
	model = await tf.loadGraphModel('model/cnn-model/model.json');
	$('.progress-bar').hide();
	console.log('Modelo carregado')
});


$("#predictBtn").click(async function () {
	let image = $('#selected-image').get(0);

	let pre_image = tf.browser.fromPixels(image, 3)
		.resizeNearestNeighbor([224, 224])
		.expandDims()
		.toFloat()
		.reverse(-1);
	console.log("Iniciando classificação...")
	let predict_result = await model.predict(pre_image).data();
	console.log(predict_result)
	let order = Array.from(predict_result)
		.map(function (p, i) {
			return {
				probability: p,
				className: Result[i]
			};
		}).sort(function (a, b) {
			return b.probability - a.probability;
		}).slice(0, 1);
	$("#prediction-list").empty();
	order.forEach(function (p) {
		$("#prediction-list").append(`<li>${p.className}: ${parseInt(Math.trunc(p.probability * 100))} %</li>`);
	});
});