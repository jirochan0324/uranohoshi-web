  // YouTube IFrame Player APIを非同期で読み込む
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var player;

  // YouTubeプレーヤーの準備ができたら
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-video', {
      events: {
        'onStateChange': onPlayerStateChange
      }
    });
  }

  // プレーヤーの状態が変更された時の処理
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
      document.getElementById('play-button').classList.add('hidden');
    } else {
      document.getElementById('play-button').classList.remove('hidden');
    }
  }

  // 再生ボタンのクリックイベントを設定
  document.getElementById('play-button').addEventListener('click', function() {
    player.playVideo();
  });