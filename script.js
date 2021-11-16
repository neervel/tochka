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
      <script>
      document.getElementsByClassName('logo')[0].innerHTML = '<svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 38C21.1046 38 22 37.1046 22 36C22 34.8954 21.1046 34 20 34C18.8954 34 18 34.8954 18 36C18 37.1046 18.8954 38 20 38Z" fill="black"/><path d="M28 38C29.1046 38 30 37.1046 30 36C30 34.8954 29.1046 34 28 34C26.8954 34 26 34.8954 26 36C26 37.1046 26.8954 38 28 38Z" fill="black"/><path d="M12 38C13.1046 38 14 37.1046 14 36C14 34.8954 13.1046 34 12 34C10.8954 34 10 34.8954 10 36C10 37.1046 10.8954 38 12 38Z" fill="black"/><path d="M34 20H6C4.4087 20 2.88258 20.6321 1.75736 21.7574C0.632141 22.8826 0 24.4087 0 26V56C0.000610714 56.3544 0.0953776 56.7023 0.274601 57.008C0.453824 57.3137 0.711067 57.5663 1.02 57.74C1.31891 57.9094 1.65642 57.9989 2 58C2.35897 57.9999 2.71129 57.9032 3.02 57.72L12 52.28C12.3319 52.0824 12.714 51.9851 13.1 52H34C35.5913 52 37.1174 51.3679 38.2426 50.2426C39.3679 49.1174 40 47.5913 40 46V26C40 24.4087 39.3679 22.8826 38.2426 21.7574C37.1174 20.6321 35.5913 20 34 20ZM36 46C36 46.5304 35.7893 47.0391 35.4142 47.4142C35.0391 47.7893 34.5304 48 34 48H13.1C12.0076 47.9991 10.9358 48.2965 10 48.86L4 52.46V26C4 25.4696 4.21071 24.9609 4.58579 24.5858C4.96086 24.2107 5.46957 24 6 24H34C34.5304 24 35.0391 24.2107 35.4142 24.5858C35.7893 24.9609 36 25.4696 36 26V46Z" fill="black"/><circle cx="40" cy="18" r="16.5" fill="#EB1317" stroke="white" stroke-width="3"/><path d="M42.2134 26H39.25V14.5771L35.7124 15.6743V13.2646L41.8955 11.0498H42.2134V26Z" fill="white"/></svg>'
      </script>
      <style>
      @font-face{font-family:Geometria;src:url(src/config/resources/Geometria-Bold.woff2) format("woff2"),url(src/config/resources/Geometria-Bold.woff) format("woff");font-style:normal}@font-face{font-family:GeometriaReg;src:url(src/config/resources/Geometria-Medium.woff2) format("woff2"),url(src/config/resources/Geometria-Medium.woff) format("woff");font-weight:400;font-style:normal}@font-face{font-family:GeometriaThin;src:url(src/config/resources/Geometria-Regular.woff2) format("woff2"),url(src/config/resources/Geometria-Regular.woff) format("woff");font-style:normal}@font-face{font-family:AngleciaProTitle;src:url(src/config/resources/AngleciaProTitle-Bold.woff2) format("woff2"),url(src/config/resources/AngleciaProTitle-Bold.woff) format("woff");font-style:normal}@font-face{font-family:CeraPROMedium;src:url(src/config/resources/CeraPRO-Medium.woff2) format("woff2"),url(src/config/resources/CeraPRO-Medium.woff) format("woff")}@font-face{font-family:CeraPRORegular;src:url(src/config/resources/CeraPro-Regular.woff2) format("woff2"),url(src/config/resources/CeraPro-Regular.woff) format("woff")}
      * {
        font-family: Geometria, sans-serif !important;
      }
        .logo svg {
          height: 35px;
        }
          .title {
              font-size: 18px !important;
              text-transform: uppercase;
              font-weight: bold !important;
              font-family: Geometria, sans-serif !important;
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
          .message.-operator[data-v-8ecca81a] {
            display: none;
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