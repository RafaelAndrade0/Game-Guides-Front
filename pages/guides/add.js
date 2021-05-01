import Layout from "@components/Layout";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function AddGuide() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await axios.post("http://localhost:1337/guides", data);
      // console.log(res.data);
      // const formData = new FormData();
      // console.log(data.image[0]);
      // formData.append("files", data.image[0]);
      // formData.append("ref", "guides");
      // formData.append("refId", res.data.id);
      // formData.append("field", "image");
      // await axios.post("http://localhost:1337/upload", formData);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title="Add a Guide">
      <h1 className="border-b">Add Guide</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="title"
            {...register("title", { required: true })}
          />
          {errors.title && <span>This title is required</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            rows="10"
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            {...register("description", { required: true })}
          />
          {errors.description && <span>This description is required</span>}
        </div>

        <div>
          <label htmlFor="date" className="form-label">
            Date
          </label>
          <input
            className="form-control"
            type="date"
            name="date"
            id="date"
            {...register("date", { required: true })}
          />
          {errors.date && <span>The dateis required</span>}
        </div>
        {/* 
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image
          </label>
          <input
            className="form-control"
            type="file"
            id="image"
            {...register("image", { required: true })}
          />
          {errors.image && <span>This image is required</span>}
        </div> */}

        <button type="submit" className="btn btn-primary mt-2">
          Submit Guide
        </button>
      </form>
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="test" {...register("example")} />

        <input {...register("exampleRequired", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form> */}
    </Layout>
  );
}
