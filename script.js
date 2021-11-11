$('.ib-link__label').click(function() {
  let iframeHead = $('iframe#__replain_widget_iframe').contents().find('head');
  let iframeCSS = `
  <script>
  document.getElementsByClassName('btn-img')[0].click()
      </script>
  `;
  $(iframeHead).append(iframeCSS);
})

$(window).on('load', () => {
  setTimeout(function() {
      let iframeHead = $('iframe#__replain_widget_iframe').contents().find('head');
      let iframeCSS = `
      <style>
          .title {
              font-size: 18px !important;
              text-transform: uppercase;
              font-weight: bold !important;
          }
          .info {
              align-items: center !important;
          }
          .header .column:last-child {
              display: flex !important;
              align-items: center !important;
          }
          .container.-body {
              background-color: #f7f3f2 !important;
          }
          .content.accent-color-bg {
              background-color: #cfecfe !important;
              color: #000 !important;
          }
          .corner.accent-color-border {
              border-color: #cfecfe !important;
          }
          .corner {
              border-color: #fff !important;
          }
          .message.-operator .content {
              background-color: #fff !important;
          }
          .message.-client, .message.-operator {
              max-width: fit-content !important;
          }
          .message .text {
              max-width: fit-content: !important;
          }
          .message .content {
              border-radius: 20px !important;
              padding: 10px 15px !important;
              padding-bottom: 20px !important;
          }
          .powered-link, .description, .sender{
              display: none !important
          }
          .footer {
              position: relative;
          }
          .footer .row {
              height: 0 !important;
              padding-top: 0 !important;
              margin-top: 0 !important;
              border-top: none !important;
          }
          .footer .row .column .item {
              position: absolute;
              top: 0;
          }
          .textblock textarea {
              height: 40px !important;
              margin-left: 30px !important;
          }
          .-footer .wrapper {
              padding-bottom: 0 !important;
          }
          .btn {
              z-index: -1 !important;
              opacity: 0 !important;
          }
      </style>
      
  `;
      $(iframeHead).append(iframeCSS);
    }, 1000);
});