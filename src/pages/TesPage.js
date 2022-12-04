import React from "react";
import ReactQuill, { Quill } from "react-quill-with-table";
import "react-quill/dist/quill.snow.css";
// import "react-quill-with-table/dist/quill.snow.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function TesPage(props) {
  // const FormatTable = Quill.import("formats/table");
  // const BackgroundColor = Quill.import("attributors/style/background");

  // Quill.register(BackgroundColor, true);
  // Quill.register(FormatTable, true);

  const Parchment = Quill.import("parchment");

  const Border = new Parchment.StyleAttributor("border", "border", {
    scope: Parchment.Scope.INLINE,
    whitelist: ["1px solid", "0px solid"],
  });

  // const config = {
  //   scope: Parchment.Scope.BLOCK,
  //   whitelist: ["1", "0"],
  // };

  // const TableAttributor = new Parchment.Attributor("border", "border", config);

  // // var SizeStyle = Quill.import("attributors/style/size");
  Quill.register("attributors/style/border", Border);
  // Quill.register("attributors/attribute/border", TableAttributor);
  // const Dir = Quill.import("attributors/attribute/direction");
  Quill.register(Border, true);
  // Quill.register(TableAttributor, true);
  // Quill.register(Dir, true);

  const value = `
  <div >Div 1</div>
  <div>Div 2</div>
  <span>Nama : </span>
<br>
  <table >
    <tr >
      <td >Data 1</td>
      <td>Data 2</td>
      <td>Data 3</td>
    </tr>
    <tr>
      <td>Data 3</td>
      <td>Data 4</td>
    </tr>
  </table>
    `;
  // return ;
  return (
    <div className="App">
      <h2>Using CKEditor 5 build in React</h2>
      <CKEditor
        editor={ClassicEditor}
        data={value}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />

      <h2>React Quill</h2>
      <ReactQuill value={value} theme="snow" />
    </div>
  );
}

export default TesPage;
