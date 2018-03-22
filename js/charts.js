var currentime = new Date();

function silentErrorHandler() {return true;}
window.onerror=silentErrorHandler;

function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

var googleChart = new Chart(document.getElementById("googleChart"), {
    "type": "line",
    "data": {
        "labels": [currentime.getHours() + ":" + currentime.getMinutes() + ":" + currentime.getSeconds()],
        "datasets": [{
            "label": "Google",
            "data": [Google.worth],
            "fill": false,
            "borderColor": "rgb(75, 192, 192)",
            "lineTension": 0.1
        }]
    },
    "options": {}
});

var yahooChart = new Chart(document.getElementById("yahooChart"), {
    "type": "line",
    "data": {
        "labels": [currentime.getHours() + ":" + currentime.getMinutes() + ":" + currentime.getSeconds()],
        "datasets": [{
            "label": "Yahoo",
            "data": [Google.worth],
            "fill": false,
            "borderColor": "rgb(75, 192, 192)",
            "lineTension": 0.1
        }]
    },
    "options": {}
});
