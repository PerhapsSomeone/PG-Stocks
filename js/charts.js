var currentime = new Date();

//function silentErrorHandler() {return true;}
//window.onerror=silentErrorHandler;

function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

function clearGraph(chart) {
    chart.data.labels = [];
    chart.data.datasets.data = [];
}

var gügleChart = new Chart(document.getElementById("gügleChart"), {
    "type": "line",
    "data": {
        "labels": [currentime.getHours() + ":" + currentime.getMinutes() + ":" + currentime.getSeconds()],
        "datasets": [{
            "label": "Gügle",
            "data": [Gügle.worth],
            "fill": false,
            "borderColor": "rgb(75, 192, 192)",
            "lineTension": 0.1
        }]
    },
    "options": {}
});

var juhuuChart = new Chart(document.getElementById("juhuuChart"), {
    "type": "line",
    "data": {
        "labels": [currentime.getHours() + ":" + currentime.getMinutes() + ":" + currentime.getSeconds()],
        "datasets": [{
            "label": "Juhuu",
            "data": [Juhuu.worth],
            "fill": false,
            "borderColor": "rgb(75, 192, 192)",
            "lineTension": 0.1
        }]
    },
    "options": {}
});

var micronsoftChart = new Chart(document.getElementById("micronsoftChart"), {
    "type": "line",
    "data": {
        "labels": [currentime.getHours() + ":" + currentime.getMinutes() + ":" + currentime.getSeconds()],
        "datasets": [{
            "label": "Micronsoft",
            "data": [Micronsoft.worth],
            "fill": false,
            "borderColor": "rgb(75, 192, 192)",
            "lineTension": 0.1
        }]
    },
    "options": {}
});