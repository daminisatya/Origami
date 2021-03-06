import React, { PropTypes } from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import ImageInput from "./ImageInput";

class ImageInputPreview extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      labels: props.functions.getLabels(),
      open: true
    };
    this.hidePreviewDialog = props.functions.hidePreviewDialog;
    this.handleOk = this.handleOk.bind(this);
  }

  handleOk() {
    this.hidePreviewDialog();
  }

  render() {
    const actions = [
      <FlatButton
        key={0}
        label="Ok"
        primary
        keyboardFocused
        onTouchTap={this.handleOk}
      />
    ];
    return (
      <Dialog
        title="Preview Image Input Component"
        actions={actions}
        modal
        autoScrollBodyContent
        open={this.state.open}
      >
        <ImageInput
          calling_context="preview"
          labels={this.state.labels}
          sendAddr=""
        />
      </Dialog>
    );
  }
}

ImageInputPreview.propTypes = {
  functions: PropTypes.object.isRequired
};

export default ImageInputPreview;
