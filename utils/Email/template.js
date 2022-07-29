import handlebars from "handlebars";
const { compile } = handlebars;

const template = compile(`<mjml>
<mj-head>
  <mj-title>TinyURl</mj-title>
  <mj-font name="Roboto" href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500"></mj-font>
  <mj-attributes>
    <mj-all background-color="white"  font-family="Montserrat, Helvetica, Arial, sans-serif"> </mj-all>
    <mj-text font-weight="400" font-size="16px" color="#000000" line-height="24px"></mj-text>
    <mj-section padding="0px"></mj-section>
  </mj-attributes>
</mj-head>
<mj-body background-color="#F2F2F2">
  <mj-section padding="10px 0 20px 0">
 
  </mj-section>
  <mj-section padding="20px 20px 0 20px" background-color="#FFFFFF">
      <mj-text align="center" font-size="18px"  color="#929598">TinyURL</mj-text>
     <mj-text align="center"  font-size="18px" color="#929598">Leading url shortener on the market.</mj-text>
  </mj-section>
  <mj-section padding="0px 20px 0 20px" background-color="#FFFFFF">
    <mj-column>
      <mj-text align="center" font-weight="300" padding="30px 40px 10px 40px" font-size="32px" line-height="40x" color="#1890ff">Forget password?</mj-text>
    </mj-column>
  </mj-section>
  <mj-section padding="10px 20px" background-color="#FFFFFF">
    <mj-column>
      <mj-divider width="30px" border-width="3px" border-color="#9B9B9B"></mj-divider>
    </mj-column>
  </mj-section>
  <mj-section padding="0 20px 20px 20px" background-color="#FFFFFF">
    <mj-column width="80%">
      <mj-text align="center" color="#464849"  padding-top="10px" font-weight="500" padding="0px">Click button below to reset your password.</mj-text>
    </mj-column>
  </mj-section>
  <mj-section background-color="#c7cdd1">
    <mj-column width="100%">
      <mj-image src="http://nimus.de/share/tpl-card/lineshadow.png" alt="link" align="center" border="none" padding="0px"></mj-image>
      <mj-button align="center"
        background-color="#1890ff" color="#FFFFFF" border-radius="2px" href="{{link}}" inner-padding="15px 30px" padding-bottom="50px" padding-top="40">Submit</mj-button>
          <mj-text color="#999" font-size="16px" >Note: This is a computer-generated message. Please do not reply to this email.</mj-text>
    </mj-column>
  </mj-section>
  <mj-section padding="20px 0 0 0" background-color="#FFFFFF">
    <mj-column>
      <mj-text align="center"  color="#9B9B9B" font-weight="500">Made with 
❤️ by water</mj-text>
    </mj-column>
  </mj-section>
</mj-body>
</mjml>`);

export default template;
