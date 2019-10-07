d3.json('/').then((scores)=>{
    console.log(scores)
    var data = [
        {
          x: scores.index,
          y: scores.data,
          type: 'bar'
        }
      ];
      
      Plotly.newPlot('scoresBarChart', data);
})

d3.json('/').then((retention)=>{
  console.log(retention)
  var data =[
    {
      x:retention.index,
      y:scores.data,
      type: 'bar'
    }
  ];
      Plotly.newPlot('retentionBarChart', data);
})
