import Layout from "@components/Layout";
import { useForm } from "react-hook-form";

export default function AddGuide() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

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
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            {...register("description", { required: true })}
          />
          {errors.description && <span>This description is required</span>}
        </div>

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
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
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
