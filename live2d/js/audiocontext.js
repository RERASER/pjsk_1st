window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext;
try {
    var context = new window.AudioContext();;
    var source = null;
    var audioBuffer = null;

    function stopSound() {
        if (source) {
            source.stop(0); //立即停止
        }
    }

    function playSound(isloop) {
        console.log('playing loop:' + isloop);
        source = context.createBufferSource();
        source.buffer = audioBuffer;
        source.loop = isloop; //循环播放
        if (isloop == true) {
            source.loopStart = 1481586/44100;
            source.loopEnd = 4249709/44100;
        }
        source.connect(context.destination);
        if (isloop == false) {
            source.start(0,0,1481586/44100);
        }
        else{
            source.start(0,1481586/44100);
        }
        source.onended = function () {
            console.log('ended');
            // if (context.state == 'closed') {
            playSound(true)
            // }
        };
    }

    function initSound(arrayBuffer, isloop) {
        context.decodeAudioData(arrayBuffer, function (buffer) { //解码成功时的回调函数
            audioBuffer = buffer;
            if (isloop == false) {
                playSound(isloop);
            }
        }, function (e) { //解码出错时的回调函数
            console.log('Error decoding file', e);
        });
    }

    function loadAudioFile(url, isloop) {
        console.log('load ' + url)
        var xhr = new XMLHttpRequest(); //通过XHR下载音频文件
        xhr.open('GET', url, true);
        xhr.responseType = 'arraybuffer';
        xhr.onload = function (e) { //下载完成
            initSound(this.response, isloop);
            console.log('load done ' + url);
            // if (isloop == false) {
            //     loadAudioFile('./Resources/loop.wav', true);
            // }
        };
        xhr.send();
    }
    // loadAudioFile('./Resources/BGM_TITLE_2021.aac');
    document.documentElement.addEventListener('mousedown', () => {
        if (context.state == 'suspended') {
            context.resume();
            console.log('resumed');
        }
        // else if (context.state == 'closed') {
        //     loadAudioFile('./Resources/intro.wav', true);
        // }
    });
    // context.onstatechange = function () {
    //     if (context.state == 'closed') {
    //         loadAudioFile('./Resources/loop.wav', true);
    //     }
    // };
} catch (e) {
    console.log('!Your browser does not support AudioContext');
}