https://teachablemachine.withgoogle.com/models/hQOFd6uBc/model.json

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/hQOFd6uBc/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results){
    if(error) {
        console.error(error);
    } else{
        console.log(results);
        random_number_r= Math.floor(Math.random() * 255) + 1;
        random_number_g= Math.floor(Math.random() * 255) + 1;
        random_number_b= Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'Voice detected of-  ' + results[0].label;
    document.getElementById("result_confidence").innerHTML = ' Accuracy- '+ (results[0].confidence*100).toFixed(2)+ " %";
    document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b +")";
    document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";

    imgdog = document.getElementById('dog-removebg-preview.png');
    imgfrog = document.getElementById('frog-removebg-preview.png');
    imgcrow = document.getElementById('crow-removebg-preview.png');

    if(results[0].label == "dog"){
        imgdog.src = 'dog-removebg-preview.png';
    } else if(results[0].label == "frog"){
        imgfrog.src = 'frog-removebg-preview.png';
    }else if(results[0].label == "crow"){
        imgcrow.src = 'crow-removebg-preview.png';
}
}
}