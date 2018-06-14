        var DELAY_SPEED = 100; //文字が流れる速さ
        var FADE_SPEED = 500; //表示のアニメーション時間
        var str = [];
        var jyumyou = "";
        var form_data = {
            inputName: "",
            inputOld: "",
            inputSex: ""
        };


        $(function() {
            $('[data-toggle="tooltip"]').tooltip();

            // 結婚願望の有無によって、入力可能項目を切り替える
            $("#marriageYes").on('click', function() {
                $("#inputMarriageOld").prop("disabled", false);
                $("#inputChild").prop("disabled", false);
            });
            $("#marriageNo").on('click', function() {
                $("#inputMarriageOld").prop("disabled", true);
                $("#inputChild").prop("disabled", true);
            });

            // 再設計ボタンを押下した時の表示の切り替え
            $("#button").on('click', function() {
                //フォームデータを取得して、連想配列に再格納する。
                form_data['inputName'] = $("#inputName")[0].value;
                form_data['inputOld'] = $("#inputOld")[0].value;
                form_data['inputSex'] = $("[name=inlineRadioOptions_sex]:checked").val();


                // 画面の切り替え
                $("#top").addClass("hidden");
                $("#kekka").removeClass("hidden");

                anime_001();
            });

            function anime_001() {
                setTimeout(function() {        
                    $('.anime_001')[0].innerHTML = "<span style='font-size:20px;'>" + form_data['inputName'] + "</span>" + "さん、始めまして。";
                    $(".anime_001").fadeIn(1000);
                }, 2000);
                // setTimeout(function() {        
                //     $(".anime_001").fadeOut(1000);
                //     $(".anime_002").fadeOut(1000); 
                //     $(".anime_003").fadeOut(1000); 
                // }, 15000);
                setTimeout(function() {        
                    $('.anime_002')[0].innerHTML = "<span style='font-size:20px;'>" + form_data['inputOld'] + "</span>" + "歳なのですね。";
                    $(".anime_002").fadeIn(1000);
                }, 4000);
                setTimeout(function() {        
                    let sex = "";
                    let old = "";
                    if (form_data['inputSex'] === "man") {
                        sex = "男性";
                        old = "81";
                        jyumyou = 81 - form_data['inputOld'];
                    } else {
                        sex = "女性";
                        old = "87";
                        jyumyou = 87 - form_data['inputOld'];
                    }
                    $('.anime_003')[0].innerHTML = "現在、日本人" + sex + "の平均年齢は" + "<span style='font-size:20px;'>" + old + "</span>" + "歳と言われています。";
                    $(".anime_003").fadeIn(1000);
                }, 8000);

                setTimeout(function() {        
                    anime_004(); 
                }, 16000);
            }

            function anime_004() {
                let month;
                let week;
                let day;
                let time;
                month = jyumyou * 12;
                week = jyumyou * 12 * 4;
                day = jyumyou * 365;
                time = jyumyou * 365 * 60;

                $('.anime_004')[0].innerHTML = "つまり、あなたは健康に過ごせばあと" + "<span style='font-size:20px;'>" + jyumyou + "</span>" + "年生きることができます。";
                $(".anime_004").fadeIn(1000);
                // setTimeout(function() {        
                //     $(".anime_004").fadeOut(1000);  
                //     $(".anime_004_1").fadeOut(1000);
                //     $(".anime_004_2").fadeOut(1000);
                //     $(".anime_004_3").fadeOut(1000);
                // }, 100000);
                setTimeout(function() {         
                    $('.anime_004_1')[0].innerHTML = "月に直すと、" + "<span style='font-size:20px;'>" + month + "</span>" + "ヶ月間";
                    $(".anime_004_1").fadeIn(1000);
                }, 5000);
                setTimeout(function() {         
                    $('.anime_004_2')[0].innerHTML = "週に直すと、" + "<span style='font-size:20px;'>" + week + "</span>" + "週間";
                    $(".anime_004_2").fadeIn(1000);
                }, 10000);
                setTimeout(function() {         
                    $('.anime_004_3')[0].innerHTML = "日に直すと、" + "<span style='font-size:20px;'>" + day + "</span>" + "日";
                    $(".anime_004_3").fadeIn(1000);
                }, 15000);
                setTimeout(function() {         
                    $('.anime_004_4')[0].innerHTML = "時間に直すと、" + "<span style='font-size:20px;' name='timer'>" + time + "</span> :" +
                        "<span style='font-size:20px;' name='timer'>" + "00" + "</span> :" +
                        "<span style='font-size:20px;' name='timer'>" + "00" + "</span> :" +
                        "<span style='font-size:20px;' name='timer'>" + "00" + "</span>";
                    $(".anime_004_4").fadeIn(1000);
                }, 20000);
                setTimeout(function() {         
                    cntStart();
                }, 21500);
                setTimeout(function() {         
                    $('.anime_005')[0].innerHTML = "数字にしてみると、ごく僅かの人生です。<br>再設計してみましょう。";
                    $(".anime_005").fadeIn(1000);
                }, 23000);
                setTimeout(function() {         
                    $('.anime_006')[0].innerHTML = "";
                    $(".anime_006").fadeIn(1000);
                }, 25000);


                // setTimeout(function() {        
                //     anime_003(); 
                // }, 3500);

            }

        });

        // ===============================================================================
        //  タイマー
        // ===============================================================================
        var timer1; //タイマーを格納する変数（タイマーID）の宣言

        //カウントダウン関数を1000ミリ秒毎に呼び出す関数
        function cntStart() {
            timer1 = setInterval("countDown()", 10);
        }

        //カウントダウン関数
        function countDown() {

            var hour = $("[name=timer]")[0].innerHTML;
            var min = $("[name=timer]")[1].innerHTML;
            var sec = $("[name=timer]")[2].innerHTML;
            var min_sec = $("[name=timer]")[3].innerHTML;

            if (hour == "") hour = 0;
            hour = parseInt(hour);

            if (min == "") min = 0;
            min = parseInt(min);

            if (sec == "") sec = 0;
            sec = parseInt(sec);

            if (min_sec == "") min_sec = 0;
            min_sec = parseInt(min_sec);


            tmWrite(hour * 360000 + min * 6000 + sec * 100 + min_sec - 1);

        }

        //残り時間を書き出す関数
        function tmWrite(int) {
            int = parseInt(int);

            //残り分数はintを60で割って切り捨てる
            $("[name=timer]")[0].innerHTML = Math.floor(int / 360000);
            //残り分数はintを60で割って切り捨てる
            $("[name=timer]")[1].innerHTML = Math.floor(int % 360000 / 6000);
            //残り秒数はintを60で割った余りから1000を1000で割って切り捨てる
            $("[name=timer]")[2].innerHTML = Math.floor(int % 360000 % 6000 / 100);
            //残り秒数はintを60で割った余り
            $("[name=timer]")[3].innerHTML = int % 360000 % 6000 % 100;
        }