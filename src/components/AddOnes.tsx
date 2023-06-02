import React from "react";
import BottomNav from "./shared/BottomNav";
import { Link } from "react-router-dom";
import Card from "./shared/Card";
import Form from "./shared/Form";
import Heading from "./shared/Heading";
import { useForm } from "react-hook-form";

const AddOnes = () => {
  const { register, handleSubmit } = useForm();
  return (
    <Card>
      <Heading
        title="Pick add-ons"
        description="Add-ons help enhance your gaming experience."
      />
      <Form onSubmit={handleSubmit((data) => console.log(data))}>
        <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
          <input
            id="bordered-checkbox-1"
            type="checkbox"
            value=""
            {...register("online-service")}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="online-service"
            className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Online service
          </label>
        </div>
        <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
          <input
            checked
            id="bordered-checkbox-2"
            type="checkbox"
            value=""
            name="bordered-checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="bordered-checkbox-2"
            className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Larger Storage
          </label>
        </div>
        <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
          <input
            id="bordered-checkbox-1"
            type="checkbox"
            value=""
            name="bordered-checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="bordered-checkbox-1"
            className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Online service
          </label>
        </div>
        <BottomNav singleItem={false}>
          <Link to="/plan">Go Back</Link>

          <button
            className="bg-sky-950 text-white text-sm px-4 py-3 rounded-md"
            type="submit"
          >
            Next Step
          </button>
        </BottomNav>
      </Form>
    </Card>
  );
};

export default AddOnes;
