window.onload = function() {
      ctx = document.getElementById("canvas").getContext("2d");
      window.myBar = new Chart(ctx, {
          type: 'bar',
          data: barChartData,
          options: complexChartOption
      });
  };

  // とある4週間分のデータログ
  var barChartData = {
      labels: ['4/15','4/20','4/25','4/30','5/5','5/10','5/15',
          '5/20','5/25','5/30','6/5','6/10','6/15','6/20',
          '6/25','6/30','7/5','7/10','7/15','7/20',
          '7/25','7/30','8/5','8/10','8/15','8/20','8/25','8/30'
      ],
      datasets: [
      {
          type: 'line',
          label: 'タスク完了数(個) 計画 累計',
          data: ['0','30','200','340','500','650','650',
              '700','800','900','960','970','980','990',
              '1000','1007','1008','1010','1015','1015','1020',
              '1101','1106','1120','1130','1140','1150','1180'
          ],
          borderColor : "rgba(254,97,132,0.8)",
          pointBackgroundColor    : "rgba(254,97,132,0.8)",
          fill: false,
          yAxisID: "y-axis-1",// 追加
      },
      {
          type: 'line',
          label: '出来高(人日) 計画 累計',
          data: ['0','55','222','344','598','656','800',
              '900','1100','1130','1150','1160','1180','1190',
              '1190','1200','1230','1230','1240','1250','1280',
              '1301','1306','1320','1330','1340','1350','1380'
          ],
          borderColor : "rgba(54,164,235,0.8)",
          pointBackgroundColor    : "rgba(54,164,235,0.8)",
          fill: false,
          yAxisID: "y-axis-2",
      },
      ],
  };
  var complexChartOption = {
      responsive: true,
      scales: {
          yAxes: [{
              id: "y-axis-1",
              type: "linear",
              position: "left",
              ticks: {
                  max: 1200,
                  min: 0,
                  stepSize: 200
              },
          }, {
              id: "y-axis-2",
              type: "linear",
              position: "right",
              ticks: {
                  max: 1600,
                  min: 0,
                  stepSize: 200
              },
              gridLines: {
                  drawOnChartArea: false,
              },
          }],
      }
  };