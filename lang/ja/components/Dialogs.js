export default {
  header: 'Dialog',
  headerText:
    '`v-dialog`コンポーネントは、特定のタスクについてユーザに通知し、重要な情報を含んだり意思決定を必要とするような複数のタスクを伴う可能性があります。割り込み的な要素ですので、ダイアログは控えめに使用してください。 ',
  components: ['v-dialog'],
  examples: [
    {
      simple: {
        header: 'シンプルなダイアログ',
        desc:
          'オプションを選択するとすぐにオプションがコミットされ、メニューが閉じます。ダイアログの外側に触れる、または戻るを押すと、アクションがキャンセルされ、ダイアログが閉じます。',
        uninverted: true
      },
      withoutActivator: {
        header: 'activatorを使用しない場合',
        desc:
          '何らかの理由で `activator` slotを使用しない場合は、ダイアログをトリガするイベントに `.stop`修飾子を必ず追加してください。',
        uninverted: true
      },
      modal: {
        header: 'モーダル',
        desc: 'シンプルなダイアログに似ていますが、モーダルの外側に触れてもモーダルは閉じません。',
        uninverted: true
      },
      fullscreen: {
        header: 'フルスクリーンのダイアログ',
        desc:
          'スペースが限られているため、モバイルデバイスにとって、フルスクリーンのダイアログは大画面のデバイスで使用されるダイアログよりも適している可能性があります。',
        uninverted: true
      },
      form: {
        header: 'ダイアログ内のフォーム',
        desc: 'ダイアログ内のフォームのシンプルな例です。',
        uninverted: true
      },
      scrollable: {
        header: 'スクロール可能なダイアログ',
        desc: 'スクロール可能なコンテンツを持つダイアログの例です。',
        uninverted: true
      },
      overflowed: {
        header: 'オーバーフロー',
        desc: '利用可能なウィンドウスペースに収まらないモーダルは、コンテナでスクロールされます。',
        uninverted: true
      }
    }
  ],
  props: {
    disabled: 'ダイアログを開く機能を無効にします。',
    fullWidth: 'モーダルの幅が100%となるよう強制的に指定します。',
    fullscreen: 'フルスクリーン表示になるようレイアウトを変更します。',
    hideOverlay: '前面以外の表示を隠します。Hide the display of the overlay',
    lazy: 'Mixins.Bootable.props.lazy',
    maxWidth: 'コンテンツの最大幅を指定します。',
    origin: 'Mixins.Transitionable.props.origin',
    persistent: 'ダイアログの外側をクリックしてもダイアログを消しません。',
    scrollable:
      'trueを設定すると、 `card` 、 `card-title` 、 `card-text` 、 `card-action` が必要です。さらに、card-textの高さを設定する必要があります。 `card-text` は、スタイルの `overflow-y` を設定します。',
    width: 'ダイアログの幅を設定します。'
  }
}
