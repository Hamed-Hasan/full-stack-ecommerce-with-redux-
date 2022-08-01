import React from 'react';
import { motion } from "framer-motion";

import {
  MdFastfood,
  MdCloudUpload,
  MdDelete,
  MdFoodBank,
  MdAttachMoney,
} from "react-icons/md";
import { useState } from 'react';
import { useStateValue } from '../context/StateProvider';


const CreateContainer = () => {
    const [title, setTitle] = useState("");
    const [calories, setCalories] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState(null);
    const [imageAsset, setImageAsset] = useState(null);
    const [fields, setFields] = useState(false);
    const [alertStatus, setAlertStatus] = useState("danger");
    const [msg, setMsg] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [{ foodItems }, dispatch] = useStateValue();

    return (
  
           <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-[90%] md:w-[50%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center gap-4">

        {fields && (
            <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            >

            </motion.p>
        )}
                </div>
            </div>

    );
};

export default CreateContainer;