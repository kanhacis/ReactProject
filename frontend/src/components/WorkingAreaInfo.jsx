import React from "react";
import SubmitButton from "./buttons/SubmitButton";
import { useForm } from "react-hook-form";
import Label from "./Label";

const WorkingAreaInfo = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <div className="flex justify-center items-center mb-5">
      <div className="w-full sm:w-3/4 md:w-3/4 lg:w-3/4 xl:w-1/2 bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-4">
            Working Area Information
          </h1>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            {/* Working area name */}
            <div>
              <Label labelName={"Working area name"} errors={errors.name} />
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Electrician."
                {...register("name", {
                  required: "REQUIRED",
                })}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Rate Type */}
              <div>
                <Label labelName={"Rate Type"} />
                <select
                  id="rate_type"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  {...register("rate_type")}
                >
                  <option value="Full_day">Full Day</option>
                  <option value="Half_day">Half Day</option>
                  <option value="Per_hour">Per Hour</option>
                </select>
              </div>

              {/* Rate */}
              <div>
              <Label labelName={"Your (Rate)"} errors={errors.rate} />
                <input
                  type="number"
                  id="rate"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="500"
                  {...register("rate", {
                    required: "REQUIRED",
                  })}
                />
              </div>
            </div>

            <Label labelName={"Message"} errors={errors.description} />
            <textarea
              placeholder="I try many time to login but unable to login me, fix this"
              rows="6"
              id="description"
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              style={{marginTop: "0.5rem"}}
              {...register("description", {
                required: "REQUIRED",
              })}
            ></textarea>
            {/* Submit Button */}
            <SubmitButton text={"Add"} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default WorkingAreaInfo;
