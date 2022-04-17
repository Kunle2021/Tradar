import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import "./UploadFiles.css";

class Thumb extends React.Component {
  state = {
    loading: false,
    thumb: undefined,
  };

  componentWillReceiveProps(nextProps) {
    if (!nextProps.file) {
      return;
    }

    this.setState({ loading: true }, () => {
      let reader = new FileReader();

      reader.onloadend = () => {
        this.setState({ loading: false, thumb: reader.result });
      };

      reader.readAsDataURL(nextProps.file);
    });
  }

  render() {
    const { file } = this.props;
    const { loading, thumb } = this.state;

    if (!file) {
      return null;
    }

    if (loading) {
      return <p>loading...</p>;
    }

    return (
      <img
        src={thumb}
        alt={file.name}
        className="img-thumbnail mt-2"
        height={200}
        width={200}
      />
    );
  }
}

export default function UploadFiles() {
  return (
    <div className="container">
      <Formik
        initialValues={{ file: null }}
        onSubmit={(values) => {
          alert(
            JSON.stringify(
              {
                fileName: values.file.name,
                type: values.file.type,
                size: `${values.file.size} bytes`,
              },
              null,
              2
            )
          );
        }}
        validationSchema={yup.object().shape({
          file: yup.mixed().required(),
        })}
        render={({ values, setFieldValue }) => {
          return (
            <div className="form-group">
              <label htmlFor="file" className="custom-file-upload">
                Upload Certificates
              </label>
              <input
                id="file"
                name="file"
                type="file"
                outline="none"
                style={{ display: "none" }}
                onChange={(event) => {
                  setFieldValue("file", event.currentTarget.files[0]);
                }}
              ></input>
              <Thumb file={values.file} />
            </div>
          );
        }}
      />
    </div>
  );
}
